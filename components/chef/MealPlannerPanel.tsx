'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import chef from '@/components/chef/chef.module.css';
import styles from '@/components/chef/features.module.css';
import {
  DAY_LABELS,
  DAYS,
  SLOT_LABELS,
  SLOTS,
  generateWeekPlan,
  loadPlanner,
  savePlanner,
  type DayKey,
  type MealSlot,
  type PlannedMeal,
  type WeekPlan,
} from '@/lib/chef/features-store';
import { loadTasteMemory } from '@/lib/chef/preferences';
import { printElementById } from '@/lib/chef/local-db';

type Props = { onBack: () => void };

export function MealPlannerPanel({ onBack }: Props) {
  const memory = loadTasteMemory();
  const [plan, setPlan] = useState<WeekPlan>(() => loadPlanner());
  const [drag, setDrag] = useState<{ day: DayKey; slot: MealSlot } | null>(null);
  const [note, setNote] = useState('');

  const totals = useMemo(() => {
    let calories = 0;
    let cost = 0;
    for (const day of DAYS) {
      for (const slot of SLOTS) {
        const meal = plan[day][slot];
        if (!meal) continue;
        calories += meal.calories;
        cost += meal.cost;
      }
    }
    return { calories, cost: cost.toFixed(2) };
  }, [plan]);

  function persist(next: WeekPlan) {
    setPlan(next);
    savePlanner(next);
  }

  function aiGenerate() {
    const next = generateWeekPlan();
    persist(next);
    setNote(
      `Generated with your prefs in mind: ${memory.goal || 'balanced'} · allergies ${
        memory.allergies.length ? memory.allergies.join(', ') : 'none'
      } · cuisines ${memory.favoriteCuisines.join(', ') || 'any'}.`,
    );
  }

  function replaceMeal(day: DayKey, slot: MealSlot) {
    const next = structuredClone(plan);
    const generated = generateWeekPlan(Date.now() + Math.random() * 1000);
    next[day][slot] = generated[day][slot];
    persist(next);
  }

  function onDrop(day: DayKey, slot: MealSlot) {
    if (!drag) return;
    const next = structuredClone(plan);
    const moving = next[drag.day][drag.slot];
    next[drag.day][drag.slot] = next[day][slot];
    next[day][slot] = moving;
    persist(next);
    setDrag(null);
  }

  return (
    <section className={chef.panel}>
      <div className={chef.panelHeader}>
        <div>
          <h2>Weekly Meal Planner</h2>
          <p>7-day board with breakfast, lunch, dinner, and snacks.</p>
        </div>
        <button type="button" className={chef.ghostBtn} onClick={onBack}>
          Back
        </button>
      </div>

      <div className={styles.tools}>
        <button type="button" className={chef.primaryBtn} onClick={aiGenerate}>
          AI Generate Entire Week
        </button>
        <button
          type="button"
          className={chef.ghostBtn}
          onClick={() => printElementById('planner-print', 'MealGenie Weekly Planner')}
        >
          Print / Export PDF
        </button>
        <span className={styles.badge}>{totals.calories} kcal / week</span>
        <span className={styles.badge}>${totals.cost} est.</span>
      </div>
      {note && <p className={styles.muted}>{note}</p>}

      <div id="planner-print" className={styles.grid7}>
        {DAYS.map((day) => (
          <div key={day} className={styles.dayCol}>
            <div className={styles.dayTitle}>{DAY_LABELS[day]}</div>
            {SLOTS.map((slot) => {
              const meal = plan[day][slot] as PlannedMeal | null;
              return (
                <div
                  key={slot}
                  className={styles.slot}
                  draggable={Boolean(meal)}
                  onDragStart={() => setDrag({ day, slot })}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => onDrop(day, slot)}
                >
                  <h4>{SLOT_LABELS[slot]}</h4>
                  {meal ? (
                    <motion.div initial={{ opacity: 0.6 }} animate={{ opacity: 1 }}>
                      <div className={styles.meal}>{meal.title}</div>
                      <div className={styles.meta}>
                        {meal.calories} kcal · {meal.protein}g P · ${meal.cost}
                      </div>
                      <button
                        type="button"
                        className={chef.ghostBtn}
                        style={{ marginTop: 6, minHeight: 32, fontSize: 12 }}
                        onClick={() => replaceMeal(day, slot)}
                      >
                        Replace
                      </button>
                    </motion.div>
                  ) : (
                    <div className={styles.meta}>Empty</div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
