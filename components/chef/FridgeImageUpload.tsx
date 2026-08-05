'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import styles from '@/components/chef/fridge.module.css';
import { fileToCompressedDataUrl } from '@/lib/chef/fridge-client';

type Props = {
  disabled?: boolean;
  onImageReady: (dataUrl: string, previewUrl: string) => void;
  onError: (message: string) => void;
};

export function FridgeImageUpload({ disabled, onImageReady, onError }: Props) {
  const cameraRef = useRef<HTMLInputElement>(null);
  const galleryRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const reduceMotion = useReducedMotion();

  async function handleFile(file: File | undefined | null) {
    if (!file || disabled || busy) return;
    setBusy(true);
    try {
      const dataUrl = await fileToCompressedDataUrl(file);
      onImageReady(dataUrl, dataUrl);
    } catch (error) {
      onError(error instanceof Error ? error.message : 'Could not read that image.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <motion.div
      className={styles.uploadCard}
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28 }}
    >
      <div className={styles.uploadTitle}>Scan My Fridge</div>
      <p className={styles.uploadHint}>
        Take a photo or upload from your gallery. I’ll spot ingredients and turn them into leftover recipes.
      </p>

      <div className={styles.uploadActions}>
        <button
          type="button"
          className={styles.scanBtn}
          disabled={disabled || busy}
          onClick={() => cameraRef.current?.click()}
        >
          {busy ? 'Preparing…' : 'Open camera'}
        </button>
        <button
          type="button"
          className={styles.secondaryScanBtn}
          disabled={disabled || busy}
          onClick={() => galleryRef.current?.click()}
        >
          Upload photo
        </button>
      </div>

      <input
        ref={cameraRef}
        type="file"
        accept="image/*"
        capture="environment"
        className={styles.hiddenInput}
        onChange={(e) => {
          void handleFile(e.target.files?.[0]);
          e.target.value = '';
        }}
      />
      <input
        ref={galleryRef}
        type="file"
        accept="image/*"
        className={styles.hiddenInput}
        onChange={(e) => {
          void handleFile(e.target.files?.[0]);
          e.target.value = '';
        }}
      />

      <AnimatePresence>
        {busy && (
          <motion.div
            className={styles.inlineBusy}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Compressing photo…
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
