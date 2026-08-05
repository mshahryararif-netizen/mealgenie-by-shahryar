'use client';

import { FormEvent, useMemo, useState } from 'react';
import chef from '@/components/chef/chef.module.css';
import styles from '@/components/chef/features.module.css';
import { loadBudget, saveBudget, uid, type BudgetState } from '@/lib/chef/features-store';

type Props = { onBack: () => void };

const CHEAP_RECIPES = [
  { name: 'Dal Tadka', cost: 2.8, serving: 1.4 },
  { name: 'Egg Scramble', cost: 2.2, serving: 1.1 },
  { name: 'Tomato Pasta', cost: 3.5, serving: 1.75 },
  { name: 'Bean Burrito', cost: 3.1, serving: 1.55 },
];

export function BudgetPanel({ onBack }: Props) {
  const [budget, setBudget] = useState<BudgetState>(() => loadBudget());
  const [amount, setAmount] = useState('8');
  const [label, setLabel] = useState('Grocery run');

  const remaining = budget.limit - budget.spent;
  const progress = Math.max(0, Math.min(100, (budget.spent / Math.max(budget.limit, 1)) * 100));

  const chart = useMemo(() => {
    const days = budget.history.slice(-7);
    const max = Math.max(1, ...days.map((d) => d.amount));
    return days.map((d) => ({ ...d, pct: (d.amount / max) * 100 }));
  }, [budget.history]);

  function persist(next: BudgetState) {
    setBudget(saveBudget(next));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const value = Number(amount);
    if (!Number.isFinite(value) || value <= 0) return;
    const next: BudgetState = {
      ...budget,
      spent: budget.spent + value,
      history: [
        ...budget.history,
        { id: uid('spend'), label: label || 'Spend', amount: value, date: new Date().toISOString() },
      ],
    };
    persist(next);
    setAmount('');
  }

  return (
    <section className={chef.panel}>
      <div className={chef.panelHeader}>
        <div>
          <h2>Budget Tracking</h2>
          <p>Weekly/monthly limits, recipe cost estimates, and spending history.</p>
        </div>
        <button type="button" className={chef.ghostBtn} onClick={onBack}>
          Back
        </button>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Remaining</h3>
          <div style={{ fontSize: 28, fontWeight: 700 }}>${remaining.toFixed(2)}</div>
          <p className={styles.muted}>
            {budget.period} limit ${budget.limit} · spent ${budget.spent.toFixed(2)}
          </p>
          <div className={styles.barTrack} style={{ marginTop: 10 }}>
            <div className={styles.barFill} style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className={styles.card}>
          <h3>Set budget</h3>
          <div className={styles.tools}>
            <button
              type="button"
              className={chef.chip}
              data-active={budget.period === 'weekly'}
              onClick={() => persist({ ...budget, period: 'weekly' })}
            >
              Weekly
            </button>
            <button
              type="button"
              className={chef.chip}
              data-active={budget.period === 'monthly'}
              onClick={() => persist({ ...budget, period: 'monthly' })}
            >
              Monthly
            </button>
          </div>
          <input
            className={chef.field}
            type="number"
            min={1}
            value={budget.limit}
            onChange={(e) => persist({ ...budget, limit: Number(e.target.value) || 0 })}
            style={{ marginTop: 10 }}
          />
        </div>
      </div>

      <form className={styles.tools} onSubmit={onSubmit}>
        <input
          className={chef.field}
          style={{ maxWidth: 180 }}
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Label"
        />
        <input
          className={chef.field}
          style={{ maxWidth: 120 }}
          type="number"
          min={0.1}
          step="0.1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <button type="submit" className={chef.primaryBtn}>
          Add spend
        </button>
      </form>

      <div className={styles.card}>
        <h3>Spending chart</h3>
        <div className={styles.chartRow}>
          {chart.length === 0 && <p className={styles.muted}>No spend logged yet.</p>}
          {chart.map((row) => (
            <div key={row.id} className={styles.chartBar}>
              <span>{new Date(row.date).toLocaleDateString()}</span>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: `${row.pct}%` }} />
              </div>
              <span>${row.amount}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.card}>
        <h3>Cheapest recipes</h3>
        <div className={styles.list}>
          {CHEAP_RECIPES.map((r) => (
            <div key={r.name} className={styles.rowItem}>
              <div style={{ flex: 1 }}>
                <strong>{r.name}</strong>
                <div className={styles.meta}>
                  Est. ${r.cost} · ${r.serving}/serving
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
