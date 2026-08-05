'use client';

import { useMemo, useState } from 'react';
import chef from '@/components/chef/chef.module.css';
import styles from '@/components/chef/features.module.css';
import { listPantryItems } from '@/lib/chef/pantry-storage';
import {
  loadGrocery,
  mergeGroceryFromRecipes,
  saveGrocery,
  type GroceryItem,
} from '@/lib/chef/features-store';
import { copyText, printElementById } from '@/lib/chef/local-db';

type Props = { onBack: () => void; onOpenDelivery?: () => void };

export function GroceryListPanel({ onBack, onOpenDelivery }: Props) {
  const [items, setItems] = useState<GroceryItem[]>(() => loadGrocery());
  const [status, setStatus] = useState('');

  const grouped = useMemo(() => {
    const map = new Map<string, GroceryItem[]>();
    for (const item of items) {
      const list = map.get(item.category) || [];
      list.push(item);
      map.set(item.category, list);
    }
    return Array.from(map.entries());
  }, [items]);

  function rebuildFromPantryGap() {
    const pantry = new Set(listPantryItems().map((p) => p.name.toLowerCase()));
    const demoNeeded = [
      { name: 'Olive Oil', category: 'Pantry', quantity: 1, unit: 'bottle' },
      { name: 'Garlic', category: 'Vegetables', quantity: 1, unit: 'bulb' },
      { name: 'Chicken', category: 'Meat', quantity: 500, unit: 'g' },
      { name: 'Rice', category: 'Grains', quantity: 1, unit: 'kg' },
      { name: 'Spinach', category: 'Vegetables', quantity: 1, unit: 'bag' },
    ].filter((item) => !pantry.has(item.name.toLowerCase()));

    const next = mergeGroceryFromRecipes(['This week’s meals'], demoNeeded);
    setItems(next);
    setStatus(`Merged ${demoNeeded.length} missing item${demoNeeded.length === 1 ? '' : 's'} vs pantry.`);
  }

  function toggle(id: string) {
    const next = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );
    setItems(saveGrocery(next));
  }

  async function shareList() {
    const text = items
      .map((item) => `${item.checked ? '[x]' : '[ ]'} ${item.quantity} ${item.unit} ${item.name}`)
      .join('\n');
    try {
      await copyText(text);
      setStatus('Copied grocery list to clipboard.');
    } catch {
      setStatus('Could not copy — try Print/PDF instead.');
    }
  }

  return (
    <section className={chef.panel}>
      <div className={chef.panelHeader}>
        <div>
          <h2>Grocery List</h2>
          <p>Missing ingredients vs pantry, merged and sorted by category.</p>
        </div>
        <button type="button" className={chef.ghostBtn} onClick={onBack}>
          Back
        </button>
      </div>

      <div className={styles.tools}>
        <button type="button" className={chef.primaryBtn} onClick={rebuildFromPantryGap}>
          Build from pantry gaps
        </button>
        <button type="button" className={chef.ghostBtn} onClick={() => void shareList()}>
          Copy / Share
        </button>
        <button
          type="button"
          className={chef.ghostBtn}
          onClick={() => printElementById('grocery-print', 'MealGenie Grocery List')}
        >
          Export PDF
        </button>
        {onOpenDelivery && (
          <button type="button" className={chef.ghostBtn} onClick={onOpenDelivery}>
            Buy All
          </button>
        )}
      </div>
      {status && <p className={styles.muted}>{status}</p>}

      <div id="grocery-print" className={styles.list}>
        {grouped.length === 0 && <p className={styles.muted}>No grocery items yet.</p>}
        {grouped.map(([category, rows]) => (
          <div key={category} className={styles.card}>
            <h3>{category}</h3>
            <div className={styles.list}>
              {rows.map((item) => (
                <label key={item.id} className={styles.rowItem}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => toggle(item.id)}
                  />
                  <span style={{ flex: 1 }}>
                    <strong>
                      {item.quantity} {item.unit} {item.name}
                    </strong>
                    <div className={styles.meta}>From: {item.fromRecipes.join(', ') || 'manual'}</div>
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
