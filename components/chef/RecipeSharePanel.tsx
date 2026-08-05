'use client';

import { useMemo, useState } from 'react';
import chef from '@/components/chef/chef.module.css';
import styles from '@/components/chef/features.module.css';
import { SITE_URL } from '@/lib/site';
import { copyText } from '@/lib/chef/local-db';
import type { ChefRecipe } from '@/lib/chef/types';

type Props = {
  onBack: () => void;
  recipe?: ChefRecipe | null;
};

export function RecipeSharePanel({ onBack, recipe }: Props) {
  const title = recipe?.name || 'MealGenie Special';
  const slug = encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'));
  const shareUrl = `${SITE_URL}/share/${slug}`;
  const [status, setStatus] = useState('');

  const qr = useMemo(
    () => `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(shareUrl)}`,
    [shareUrl],
  );

  async function copyLink() {
    try {
      await copyText(shareUrl);
      setStatus('Link copied.');
    } catch {
      setStatus('Could not copy link.');
    }
  }

  return (
    <section className={chef.panel}>
      <div className={chef.panelHeader}>
        <div>
          <h2>Recipe Sharing</h2>
          <p>Public preview card, QR, and social share hooks.</p>
        </div>
        <button type="button" className={chef.ghostBtn} onClick={onBack}>
          Back
        </button>
      </div>

      <div className={`${styles.card} ${styles.shareCard}`}>
        <div style={{ fontSize: 42 }}>{recipe?.icon || '🍳'}</div>
        <h3 style={{ margin: 0 }}>{title}</h3>
        <p className={styles.muted}>
          {recipe
            ? `${recipe.calories} kcal · ${recipe.protein}g protein · ${recipe.timeMinutes} min`
            : 'Share any MealGenie recipe with friends.'}
        </p>
        <img className={styles.qr} src={qr} alt="Recipe QR code" />
        <code className={styles.muted}>{shareUrl}</code>
        <div className={styles.tools}>
          <button type="button" className={chef.primaryBtn} onClick={() => void copyLink()}>
            Copy link
          </button>
          <a
            className={chef.ghostBtn}
            style={{ display: 'inline-grid', placeItems: 'center', textDecoration: 'none' }}
            href={`https://wa.me/?text=${encodeURIComponent(`${title} ${shareUrl}`)}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            className={chef.ghostBtn}
            style={{ display: 'inline-grid', placeItems: 'center', textDecoration: 'none' }}
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noreferrer"
          >
            X / Twitter
          </a>
        </div>
        {status && <p className={styles.muted}>{status}</p>}
        <p className={styles.muted}>Future-ready for comments on the public recipe page.</p>
      </div>
    </section>
  );
}
