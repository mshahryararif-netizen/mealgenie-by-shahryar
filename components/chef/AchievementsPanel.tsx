'use client';

import { useMemo, useState } from 'react';
import chef from '@/components/chef/chef.module.css';
import styles from '@/components/chef/features.module.css';
import {
  addXp,
  loadAchievements,
  type AchievementId,
  type GamificationState,
} from '@/lib/chef/features-store';

type Props = { onBack: () => void };

const CATALOG: Array<{ id: AchievementId; title: string; desc: string; xp: number }> = [
  { id: 'first_meal', title: 'First Meal', desc: 'Log your first cooked meal.', xp: 25 },
  { id: 'streak_7', title: '7 Day Streak', desc: 'Cook 7 days in a row.', xp: 70 },
  { id: 'healthy_week', title: 'Healthy Week', desc: 'Hit protein goals 5 days.', xp: 60 },
  { id: 'protein_master', title: 'Protein Master', desc: 'Cook 10 high-protein meals.', xp: 80 },
  { id: 'leftover_hero', title: 'Leftover Hero', desc: 'Finish 5 leftover cooks.', xp: 50 },
  { id: 'budget_saver', title: 'Budget Saver', desc: 'Stay under budget for a week.', xp: 55 },
  { id: 'world_chef', title: 'World Chef', desc: 'Try 5 different cuisines.', xp: 65 },
  { id: 'dessert_lover', title: 'Dessert Lover', desc: 'Cook 3 desserts.', xp: 40 },
];

export function AchievementsPanel({ onBack }: Props) {
  const [state, setState] = useState<GamificationState>(() => loadAchievements());
  const [burst, setBurst] = useState(false);
  const progress = state.xp % 100;

  const unlocked = useMemo(() => new Set(state.unlocked), [state.unlocked]);

  function claim(id: AchievementId, xp: number) {
    const next = addXp(xp, id);
    setState({ ...next });
    setBurst(true);
    window.setTimeout(() => setBurst(false), 1200);
  }

  return (
    <section className={chef.panel}>
      <div className={chef.panelHeader}>
        <div>
          <h2>Achievements & Streaks</h2>
          <p>XP, levels, badges, and cooking streaks.</p>
        </div>
        <button type="button" className={chef.ghostBtn} onClick={onBack}>
          Back
        </button>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Level {state.level}</h3>
          <p className={styles.muted}>{state.xp} XP total</p>
          <div className={styles.barTrack}>
            <div className={styles.barFill} style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className={styles.card}>
          <h3>Streak</h3>
          <div style={{ fontSize: 28, fontWeight: 700 }}>{state.streak} days</div>
          <button
            type="button"
            className={chef.primaryBtn}
            style={{ marginTop: 10 }}
            onClick={() => setState(addXp(10))}
          >
            +10 XP check-in
          </button>
        </div>
      </div>

      <div className={styles.cards}>
        {CATALOG.map((badge) => {
          const owned = unlocked.has(badge.id);
          return (
            <article key={badge.id} className={styles.card}>
              <h3>
                {owned ? '🏅' : '🔒'} {badge.title}
              </h3>
              <p className={styles.muted}>{badge.desc}</p>
              {!owned && (
                <button
                  type="button"
                  className={chef.ghostBtn}
                  onClick={() => claim(badge.id, badge.xp)}
                >
                  Unlock (+{badge.xp} XP)
                </button>
              )}
            </article>
          );
        })}
      </div>

      {burst && (
        <div className={styles.confetti} aria-hidden>
          {Array.from({ length: 24 }).map((_, i) => (
            <i
              key={i}
              style={{
                left: `${(i * 17) % 100}%`,
                background: i % 2 ? 'var(--chef-brand)' : 'var(--chef-accent)',
                animationDelay: `${i * 0.03}s`,
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
