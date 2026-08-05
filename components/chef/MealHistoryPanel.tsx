'use client';

import { useMemo, useState } from 'react';
import chef from '@/components/chef/chef.module.css';
import styles from '@/components/chef/features.module.css';
import {
  addXp,
  loadHistory,
  saveHistory,
  uid,
  type HistoryEntry,
} from '@/lib/chef/features-store';

type Props = {
  onBack: () => void;
  onCookAgain: (recipeName: string) => void;
};

export function MealHistoryPanel({ onBack, onCookAgain }: Props) {
  const [entries, setEntries] = useState<HistoryEntry[]>(() => loadHistory());
  const [query, setQuery] = useState('');
  const [favOnly, setFavOnly] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter((entry) => {
      if (favOnly && !entry.favorite) return false;
      if (!q) return true;
      return entry.recipe.toLowerCase().includes(q) || entry.difficulty.toLowerCase().includes(q);
    });
  }, [entries, query, favOnly]);

  const stats = useMemo(() => {
    const cooked = entries.length;
    const avgRating =
      cooked === 0 ? 0 : entries.reduce((sum, e) => sum + e.rating, 0) / cooked;
    const protein = entries.reduce((sum, e) => sum + e.protein, 0);
    return { cooked, avgRating: avgRating.toFixed(1), protein };
  }, [entries]);

  function persist(next: HistoryEntry[]) {
    setEntries(saveHistory(next));
  }

  function addSample() {
    const sample: HistoryEntry = {
      id: uid('hist'),
      recipe: 'Garlic Herb Chicken Bowl',
      date: new Date().toISOString(),
      rating: 5,
      timeMinutes: 25,
      calories: 480,
      protein: 42,
      difficulty: 'Easy',
      favorite: false,
    };
    persist([sample, ...entries]);
    addXp(25, 'first_meal');
  }

  function toggleFav(id: string) {
    persist(entries.map((e) => (e.id === id ? { ...e, favorite: !e.favorite } : e)));
  }

  return (
    <section className={chef.panel}>
      <div className={chef.panelHeader}>
        <div>
          <h2>Meal History</h2>
          <p>Track what you cooked, ratings, macros, and cook again anytime.</p>
        </div>
        <button type="button" className={chef.ghostBtn} onClick={onBack}>
          Back
        </button>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Cooked</h3>
          <div style={{ fontSize: 28, fontWeight: 700 }}>{stats.cooked}</div>
        </div>
        <div className={styles.card}>
          <h3>Avg rating</h3>
          <div style={{ fontSize: 28, fontWeight: 700 }}>{stats.avgRating}</div>
        </div>
        <div className={styles.card}>
          <h3>Protein logged</h3>
          <div style={{ fontSize: 28, fontWeight: 700 }}>{stats.protein}g</div>
        </div>
      </div>

      <div className={styles.tools}>
        <input
          className={chef.field}
          style={{ flex: 1, minWidth: 180 }}
          placeholder="Search meals…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="button"
          className={chef.chip}
          data-active={favOnly}
          onClick={() => setFavOnly((v) => !v)}
        >
          Favorites
        </button>
        <button type="button" className={chef.primaryBtn} onClick={addSample}>
          Log sample meal
        </button>
      </div>

      <div className={styles.list}>
        {filtered.length === 0 && <p className={styles.muted}>No meals logged yet.</p>}
        {filtered.map((entry) => (
          <div key={entry.id} className={styles.rowItem}>
            <div style={{ flex: 1 }}>
              <strong>{entry.recipe}</strong>
              <div className={styles.meta}>
                {new Date(entry.date).toLocaleString()} · ★ {entry.rating} · {entry.timeMinutes} min ·{' '}
                {entry.calories} kcal · {entry.protein}g protein · {entry.difficulty}
              </div>
            </div>
            <button type="button" className={chef.ghostBtn} onClick={() => toggleFav(entry.id)}>
              {entry.favorite ? '★' : '☆'}
            </button>
            <button
              type="button"
              className={chef.primaryBtn}
              onClick={() => onCookAgain(entry.recipe)}
            >
              Cook again
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
