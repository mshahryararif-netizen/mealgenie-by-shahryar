'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import chef from '@/components/chef/chef.module.css';
import styles from '@/components/chef/features.module.css';
import { upsertPantryItem } from '@/lib/chef/pantry-storage';
import type { PantryCategory } from '@/lib/chef/pantry-types';

type Props = { onBack: () => void; onOpenPantry: () => void };

type Lookup = {
  name: string;
  category: PantryCategory;
};

const MANUAL_DB: Record<string, Lookup> = {
  '041220576113': { name: 'Greek Yogurt', category: 'dairy' },
  '028400064057': { name: 'Potato Chips', category: 'snacks' },
  '000000000000': { name: 'Sample Item', category: 'snacks' },
};

export function BarcodeScannerPanel({ onBack, onOpenPantry }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [supported, setSupported] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [code, setCode] = useState('');
  const [qty, setQty] = useState('1');
  const [expiresOn, setExpiresOn] = useState('');
  const [found, setFound] = useState<Lookup | null>(null);
  const [status, setStatus] = useState('Point at a barcode or enter UPC/EAN manually.');
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    setSupported(typeof window !== 'undefined' && 'BarcodeDetector' in window);
    return () => stopCamera();
  }, []);

  function stopCamera() {
    if (timerRef.current) window.clearInterval(timerRef.current);
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    setScanning(false);
  }

  async function startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setScanning(true);
      setStatus('Scanning…');

      // @ts-expect-error BarcodeDetector is experimental
      const detector = new window.BarcodeDetector({ formats: ['ean_13', 'ean_8', 'upc_a', 'upc_e', 'code_128'] });
      timerRef.current = window.setInterval(async () => {
        if (!videoRef.current) return;
        try {
          const codes = await detector.detect(videoRef.current);
          if (codes?.[0]?.rawValue) {
            handleCode(String(codes[0].rawValue));
            stopCamera();
          }
        } catch {
          // keep scanning
        }
      }, 700);
    } catch {
      setStatus('Camera blocked. Use manual UPC entry.');
      setScanning(false);
    }
  }

  function handleCode(raw: string) {
    setCode(raw);
    const hit = MANUAL_DB[raw] || {
      name: `Product ${raw.slice(-4)}`,
      category: 'snacks' as PantryCategory,
    };
    setFound(hit);
    setStatus(`Found: ${hit.name}`);
  }

  function onManual(e: FormEvent) {
    e.preventDefault();
    if (!code.trim()) return;
    handleCode(code.trim());
  }

  function addToPantry() {
    if (!found) return;
    upsertPantryItem({
      name: found.name,
      category: found.category,
      quantity: Number(qty) || 1,
      unit: 'pcs',
      expiresOn: expiresOn || undefined,
    });
    setStatus(`${found.name} added to pantry.`);
  }

  return (
    <section className={chef.panel}>
      <div className={chef.panelHeader}>
        <div>
          <h2>Barcode Scanner</h2>
          <p>UPC/EAN scan → pantry. Manual fallback always available.</p>
        </div>
        <button type="button" className={chef.ghostBtn} onClick={onBack}>
          Back
        </button>
      </div>

      <div className={styles.scannerBox}>
        <video ref={videoRef} className={styles.video} muted playsInline />
        <div className={styles.tools} style={{ justifyContent: 'center', marginTop: 12 }}>
          {!scanning ? (
            <button type="button" className={chef.primaryBtn} onClick={() => void startCamera()}>
              {supported ? 'Start camera scanner' : 'Camera API limited — try anyway'}
            </button>
          ) : (
            <button type="button" className={chef.ghostBtn} onClick={stopCamera}>
              Stop
            </button>
          )}
        </div>
        <p className={styles.muted}>{status}</p>
      </div>

      <form className={styles.tools} onSubmit={onManual}>
        <input
          className={chef.field}
          style={{ flex: 1 }}
          placeholder="Enter UPC/EAN"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit" className={chef.primaryBtn}>
          Lookup
        </button>
      </form>

      {found && (
        <div className={styles.card}>
          <h3>{found.name}</h3>
          <p className={styles.muted}>Category: {found.category}</p>
          <div className={styles.tools}>
            <input
              className={chef.field}
              style={{ maxWidth: 100 }}
              type="number"
              min={1}
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
            <input
              className={chef.field}
              style={{ maxWidth: 180 }}
              type="date"
              value={expiresOn}
              onChange={(e) => setExpiresOn(e.target.value)}
            />
            <button type="button" className={chef.primaryBtn} onClick={addToPantry}>
              Add to pantry
            </button>
            <button type="button" className={chef.ghostBtn} onClick={onOpenPantry}>
              Open pantry
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
