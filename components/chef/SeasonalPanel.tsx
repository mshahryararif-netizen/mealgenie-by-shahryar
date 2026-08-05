'use client';

import { useMemo, useState } from 'react';
import chef from '@/components/chef/chef.module.css';
import styles from '@/components/chef/features.module.css';

type Props = { onBack: () => void; onCook: (name: string) => void };

type Season = 'spring' | 'summer' | 'autumn' | 'winter';

const SEASONAL: Record<
  Season,
  { produce: string[]; recipes: Array<{ name: string; why: string; holiday?: string }> }
> = {
  spring: {
    produce: ['Asparagus', 'Peas', 'Strawberries', 'Mint'],
    recipes: [
      { name: 'Lemon Pea Pasta', why: 'Peak spring peas + bright citrus.' },
      { name: 'Strawberry Yogurt Bowl', why: 'Local berries are sweetest now.', holiday: 'Easter brunch' },
    ],
  },
  summer: {
    produce: ['Tomato', 'Corn', 'Zucchini', 'Basil'],
    recipes: [
      { name: 'Caprese Salad', why: 'Tomatoes and basil are at their best.' },
      { name: 'Grilled Corn Tacos', why: 'Charred corn loves summer cookouts.', holiday: '4th of July' },
    ],
  },
  autumn: {
    produce: ['Pumpkin', 'Apple', 'Squash', 'Sage'],
    recipes: [
      { name: 'Roasted Squash Bowl', why: 'Cooler weather comfort with fall squash.' },
      { name: 'Apple Cinnamon Toast', why: 'Orchard apples shine in autumn.', holiday: 'Halloween' },
    ],
  },
  winter: {
    produce: ['Citrus', 'Kale', 'Potato', 'Pomegranate'],
    recipes: [
      { name: 'Citrus Chicken', why: 'Winter citrus brightens heavy meals.' },
      { name: 'Herb Potato Roast', why: 'Root veg keep well and feel cozy.', holiday: 'Christmas' },
    ],
  },
};

function detectSeason(date = new Date()): Season {
  const m = date.getMonth();
  if (m >= 2 && m <= 4) return 'spring';
  if (m >= 5 && m <= 7) return 'summer';
  if (m >= 8 && m <= 10) return 'autumn';
  return 'winter';
}

export function SeasonalPanel({ onBack, onCook }: Props) {
  const current = detectSeason();
  const [season, setSeason] = useState<Season>(current);
  const [holidayOnly, setHolidayOnly] = useState(false);
  const data = SEASONAL[season];

  const recipes = useMemo(
    () => data.recipes.filter((r) => (holidayOnly ? Boolean(r.holiday) : true)),
    [data.recipes, holidayOnly],
  );

  return (
    <section className={chef.panel}>
      <div className={chef.panelHeader}>
        <div>
          <h2>Seasonal Recipes</h2>
          <p>Detected season: {current}. Explore produce and holiday picks.</p>
        </div>
        <button type="button" className={chef.ghostBtn} onClick={onBack}>
          Back
        </button>
      </div>

      <div className={styles.tools}>
        {(Object.keys(SEASONAL) as Season[]).map((s) => (
          <button
            key={s}
            type="button"
            className={chef.chip}
            data-active={season === s}
            onClick={() => setSeason(s)}
          >
            {s}
          </button>
        ))}
        <button
          type="button"
          className={chef.chip}
          data-active={holidayOnly}
          onClick={() => setHolidayOnly((v) => !v)}
        >
          Holiday only
        </button>
      </div>

      <div className={styles.card}>
        <h3>Seasonal produce</h3>
        <div className={styles.tools}>
          {data.produce.map((p) => (
            <span key={p} className={styles.badge}>
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.cards}>
        {recipes.map((recipe) => (
          <article key={recipe.name} className={styles.card}>
            <h3>{recipe.name}</h3>
            <p className={styles.muted}>{recipe.why}</p>
            {recipe.holiday && <span className={styles.badge}>{recipe.holiday}</span>}
            <div className={styles.tools} style={{ marginTop: 10 }}>
              <button type="button" className={chef.primaryBtn} onClick={() => onCook(recipe.name)}>
                Cook this
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
