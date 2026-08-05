'use client';

import { useMemo, useState } from 'react';
import chef from '@/components/chef/chef.module.css';
import styles from '@/components/chef/features.module.css';
import { loadHistory } from '@/lib/chef/features-store';

type Props = { onBack: () => void };
type View = 'daily' | 'weekly' | 'monthly';

export function NutritionDashboard({ onBack }: Props) {
  const [view, setView] = useState<View>('weekly');
  const history = loadHistory();

  const totals = useMemo(() => {
    const days = view === 'daily' ? 1 : view === 'weekly' ? 7 : 30;
    const cutoff = Date.now() - days * 86400000;
    const rows = history.filter((h) => new Date(h.date).getTime() >= cutoff);
    const calories = rows.reduce((s, r) => s + r.calories, 0);
    const protein = rows.reduce((s, r) => s + r.protein, 0);
    const carbs = Math.round(calories * 0.45 * 0.25);
    const fat = Math.round(calories * 0.3 * 0.11);
    const fiber = Math.round(rows.length * 8);
    return { calories, protein, carbs, fat, fiber, meals: rows.length };
  }, [history, view]);

  const goals = { calories: view === 'daily' ? 2000 : view === 'weekly' ? 14000 : 60000, protein: view === 'daily' ? 120 : view === 'weekly' ? 840 : 3600 };
  const caloriePct = Math.min(100, (totals.calories / goals.calories) * 100);
  const proteinPct = Math.min(100, (totals.protein / goals.protein) * 100);

  const bars = [
    { label: 'Calories', value: totals.calories, max: goals.calories },
    { label: 'Protein', value: totals.protein, max: goals.protein },
    { label: 'Carbs', value: totals.carbs, max: Math.max(totals.carbs, 1) * 1.2 },
    { label: 'Fat', value: totals.fat, max: Math.max(totals.fat, 1) * 1.2 },
    { label: 'Fiber', value: totals.fiber, max: Math.max(totals.fiber, 1) * 1.2 },
  ];

  return (
    <section className={chef.panel}>
      <div className={chef.panelHeader}>
        <div>
          <h2>Nutrition Dashboard</h2>
          <p>Daily, weekly, and monthly macros with goal progress.</p>
        </div>
        <button type="button" className={chef.ghostBtn} onClick={onBack}>
          Back
        </button>
      </div>

      <div className={styles.tools}>
        {(['daily', 'weekly', 'monthly'] as View[]).map((v) => (
          <button
            key={v}
            type="button"
            className={chef.chip}
            data-active={view === v}
            onClick={() => setView(v)}
          >
            {v}
          </button>
        ))}
        <span className={styles.badge}>{totals.meals} meals</span>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Calorie goal</h3>
          <div className={styles.barTrack}>
            <div className={styles.barFill} style={{ width: `${caloriePct}%` }} />
          </div>
          <p className={styles.muted}>
            {totals.calories} / {goals.calories} kcal
          </p>
        </div>
        <div className={styles.card}>
          <h3>Protein goal</h3>
          <div className={styles.barTrack}>
            <div className={styles.barFill} style={{ width: `${proteinPct}%` }} />
          </div>
          <p className={styles.muted}>
            {totals.protein} / {goals.protein}g
          </p>
        </div>
        <div className={styles.card}>
          <h3>Healthy streak tip</h3>
          <p className={styles.muted}>
            Keep a protein-forward lunch and a colorful veggie side — consistency beats perfection.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <h3>Macro charts</h3>
        <div className={styles.chartRow}>
          {bars.map((bar) => (
            <div key={bar.label} className={styles.chartBar}>
              <span>{bar.label}</span>
              <div className={styles.barTrack}>
                <div
                  className={styles.barFill}
                  style={{ width: `${Math.min(100, (bar.value / bar.max) * 100)}%` }}
                />
              </div>
              <span>{bar.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
