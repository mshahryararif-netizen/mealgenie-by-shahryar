'use client';

import type { FormEvent } from 'react';
import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import styles from '@/components/chef/fridge.module.css';
import { FridgeImageUpload } from '@/components/chef/FridgeImageUpload';
import { scanFridgeImage } from '@/lib/chef/fridge-client';
import type { DetectedIngredient, FridgeScanResponse } from '@/lib/chef/fridge-types';

type Props = {
  onIngredientsConfirmed: (ingredients: string[]) => void;
  onSwitchToManual: () => void;
};

export function FridgeScanPanel({ onIngredientsConfirmed, onSwitchToManual }: Props) {
  const reduceMotion = useReducedMotion();
  const [preview, setPreview] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState('');
  const [qualityNote, setQualityNote] = useState('');
  const [chefNote, setChefNote] = useState('');
  const [detected, setDetected] = useState<DetectedIngredient[]>([]);
  const [manualName, setManualName] = useState('');

  const chips = useMemo(
    () =>
      detected.map((item) => ({
        ...item,
        pct: Math.round(item.confidence * 100),
      })),
    [detected],
  );

  async function runScan(dataUrl: string) {
    setScanning(true);
    setError('');
    setQualityNote('');
    setChefNote('');
    setDetected([]);

    try {
      const payload = (await scanFridgeImage(dataUrl)) as FridgeScanResponse;
      if (!payload.ok) {
        setError(payload.error);
        return;
      }

      setDetected(payload.result.ingredients);
      setQualityNote(payload.result.qualityMessage || '');
      setChefNote(payload.result.chefNote || '');

      if (payload.result.imageQuality === 'blurry') {
        setQualityNote(
          payload.result.qualityMessage ||
            'Photo looks soft — review chips carefully or retake.',
        );
      }

      if (payload.result.ingredients.length === 0) {
        setError('I couldn’t spot clear ingredients. Add them manually below.');
      }
    } catch {
      setError('Scan failed. You can still enter ingredients manually.');
    } finally {
      setScanning(false);
    }
  }

  function removeChip(name: string) {
    setDetected((prev) => prev.filter((item) => item.name !== name));
  }

  function addManual(event: FormEvent) {
    event.preventDefault();
    const name = manualName.trim();
    if (!name) return;
    setDetected((prev) => {
      if (prev.some((item) => item.name.toLowerCase() === name.toLowerCase())) return prev;
      return [...prev, { name, confidence: 1 }];
    });
    setManualName('');
    setError('');
  }

  function confirm() {
    const names = detected.map((item) => item.name).filter(Boolean);
    if (!names.length) {
      setError('Add at least one ingredient first.');
      return;
    }
    onIngredientsConfirmed(names);
  }

  return (
    <div className={styles.panel}>
      <FridgeImageUpload
        disabled={scanning}
        onError={(message) => setError(message)}
        onImageReady={(dataUrl, previewUrl) => {
          setPreview(previewUrl);
          void runScan(dataUrl);
        }}
      />

      <AnimatePresence mode="wait">
        {preview && (
          <motion.div
            key="preview"
            className={styles.previewWrap}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={preview} alt="Fridge preview" className={styles.previewImage} />
            {scanning && (
              <div className={styles.scanOverlay} role="status" aria-live="polite">
                <div className={styles.scanOrb} />
                <div className={styles.scanText}>Scanning fridge…</div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {chefNote && !scanning && <p className={styles.note}>{chefNote}</p>}
      {qualityNote && !scanning && <p className={styles.warn}>{qualityNote}</p>}
      {error && (
        <div className={styles.errorBox}>
          <p>{error}</p>
          <button type="button" className={styles.linkish} onClick={onSwitchToManual}>
            Enter ingredients manually
          </button>
        </div>
      )}

      {!scanning && chips.length > 0 && (
        <motion.div
          className={styles.chipSection}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className={styles.chipHeader}>Detected ingredients</div>
          <div className={styles.chipRow}>
            {chips.map((chip) => (
              <motion.button
                key={chip.name}
                type="button"
                className={styles.detectChip}
                layout={!reduceMotion}
                onClick={() => removeChip(chip.name)}
                title="Remove"
              >
                <span>{chip.name}</span>
                <span className={styles.confidence}>{chip.pct}%</span>
                <span aria-hidden>×</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      <form className={styles.manualRow} onSubmit={addManual}>
        <input
          className={styles.manualInput}
          value={manualName}
          onChange={(e) => setManualName(e.target.value)}
          placeholder="Add ingredient…"
          aria-label="Add ingredient manually"
        />
        <button type="submit" className={styles.secondaryScanBtn}>
          Add
        </button>
      </form>

      <div className={styles.footerRow}>
        <button type="button" className={styles.secondaryScanBtn} onClick={onSwitchToManual}>
          Use chips / typing instead
        </button>
        <button
          type="button"
          className={styles.scanBtn}
          disabled={scanning || detected.length === 0}
          onClick={confirm}
        >
          Use these for leftovers
        </button>
      </div>
    </div>
  );
}
