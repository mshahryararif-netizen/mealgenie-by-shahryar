'use client';

import type { FormEvent } from 'react';
import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import styles from '@/components/chef/pantry.module.css';
import chefStyles from '@/components/chef/chef.module.css';
import {
  categoryIcon,
  daysUntilExpiry,
  deletePantryItem,
  freshnessScore,
  isExpired,
  isExpiringSoon,
  listPantryItems,
  pantryNamesForLeftovers,
  upsertPantryItem,
} from '@/lib/chef/pantry-storage';
import {
  PANTRY_CATEGORIES,
  PANTRY_UNITS,
  type PantryCategory,
  type PantryItem,
  type PantryUnit,
} from '@/lib/chef/pantry-types';

type Props = {
  onBack: () => void;
  onUseInLeftovers: (ingredientNames: string[]) => void;
};

type Draft = {
  id?: string;
  name: string;
  category: PantryCategory;
  quantity: number;
  unit: PantryUnit;
  expiresOn: string;
  notes: string;
};

const EMPTY_DRAFT: Draft = {
  name: '',
  category: 'vegetables',
  quantity: 1,
  unit: 'pcs',
  expiresOn: '',
  notes: '',
};

export function PantryPanel({ onBack, onUseInLeftovers }: Props) {
  const reduceMotion = useReducedMotion();
  const [items, setItems] = useState<PantryItem[]>(() => listPantryItems());
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<PantryCategory | 'all'>('all');
  const [expiringOnly, setExpiringOnly] = useState(false);
  const [draft, setDraft] = useState<Draft>(EMPTY_DRAFT);
  const [showForm, setShowForm] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (category !== 'all' && item.category !== category) return false;
      if (expiringOnly && !(isExpiringSoon(item) || isExpired(item))) return false;
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.category.includes(q) ||
        (item.notes ?? '').toLowerCase().includes(q)
      );
    });
  }, [items, query, category, expiringOnly]);

  const stats = useMemo(() => {
    const total = items.length;
    const expiring = items.filter((item) => isExpiringSoon(item)).length;
    const expired = items.filter((item) => isExpired(item)).length;
    const freshness =
      total === 0
        ? 0
        : Math.round(items.reduce((sum, item) => sum + freshnessScore(item), 0) / total);
    return { total, expiring, expired, freshness };
  }, [items]);

  function refresh() {
    setItems(listPantryItems());
  }

  function startEdit(item: PantryItem) {
    setDraft({
      id: item.id,
      name: item.name,
      category: item.category,
      quantity: item.quantity,
      unit: item.unit,
      expiresOn: item.expiresOn ?? '',
      notes: item.notes ?? '',
    });
    setShowForm(true);
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!draft.name.trim()) return;
    upsertPantryItem(
      {
        name: draft.name,
        category: draft.category,
        quantity: Number(draft.quantity) || 0,
        unit: draft.unit,
        expiresOn: draft.expiresOn || undefined,
        notes: draft.notes,
        icon: categoryIcon(draft.category),
      },
      draft.id,
    );
    setDraft(EMPTY_DRAFT);
    setShowForm(false);
    refresh();
  }

  function remove(id: string) {
    deletePantryItem(id);
    refresh();
  }

  function expiryLabel(item: PantryItem): { text: string; tone?: 'warn' | 'danger' } {
    const days = daysUntilExpiry(item.expiresOn);
    if (days === null) return { text: 'No expiry set' };
    if (days < 0) return { text: `Expired ${Math.abs(days)}d ago`, tone: 'danger' };
    if (days === 0) return { text: 'Expires today', tone: 'warn' };
    if (days <= 3) return { text: `Expires in ${days}d`, tone: 'warn' };
    return { text: `Expires in ${days}d` };
  }

  return (
    <section className={chefStyles.panel}>
      <div className={chefStyles.panelHeader}>
        <div>
          <h2>Pantry Inventory</h2>
          <p>Save ingredients permanently, track quantities, and cook from what you own.</p>
        </div>
        <button type="button" className={chefStyles.ghostBtn} onClick={onBack}>
          Back
        </button>
      </div>

      <div className={styles.panel}>
        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Items</div>
            <div className={styles.statValue}>{stats.total}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Expiring soon</div>
            <div className={styles.statValue}>{stats.expiring}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Freshness</div>
            <div className={styles.statValue}>{stats.freshness}%</div>
            <div className={styles.progressTrack} aria-hidden>
              <div className={styles.progressFill} style={{ width: `${stats.freshness}%` }} />
            </div>
          </div>
        </div>

        <div className={styles.toolbar}>
          <div className={styles.searchRow}>
            <input
              className={styles.searchInput}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pantry…"
              aria-label="Search pantry"
            />
            <button
              type="button"
              className={styles.primaryBtn}
              onClick={() => {
                setDraft(EMPTY_DRAFT);
                setShowForm(true);
              }}
            >
              Add item
            </button>
            <button
              type="button"
              className={styles.ghostBtn}
              disabled={items.length === 0}
              onClick={() => onUseInLeftovers(pantryNamesForLeftovers(items))}
            >
              Use in Leftovers
            </button>
          </div>

          <div className={styles.filterRow}>
            <button
              type="button"
              className={styles.filterChip}
              data-active={category === 'all'}
              onClick={() => setCategory('all')}
            >
              All
            </button>
            {PANTRY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={styles.filterChip}
                data-active={category === cat.id}
                onClick={() => setCategory(cat.id)}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
            <button
              type="button"
              className={styles.filterChip}
              data-active={expiringOnly}
              onClick={() => setExpiringOnly((v) => !v)}
            >
              Expiring soon
            </button>
          </div>
        </div>

        <AnimatePresence>
          {showForm && (
            <motion.form
              className={styles.formCard}
              onSubmit={submit}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
            >
              <h3 className={styles.formTitle}>{draft.id ? 'Edit item' : 'Add pantry item'}</h3>
              <div className={styles.formGrid}>
                <label className={`${styles.label} ${styles.full}`}>
                  Name
                  <input
                    className={styles.field}
                    value={draft.name}
                    onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
                    required
                  />
                </label>
                <label className={styles.label}>
                  Category
                  <select
                    className={styles.select}
                    value={draft.category}
                    onChange={(e) =>
                      setDraft((d) => ({ ...d, category: e.target.value as PantryCategory }))
                    }
                  >
                    {PANTRY_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className={styles.label}>
                  Quantity
                  <input
                    className={styles.field}
                    type="number"
                    min={0}
                    step="any"
                    value={draft.quantity}
                    onChange={(e) =>
                      setDraft((d) => ({ ...d, quantity: Number(e.target.value) || 0 }))
                    }
                  />
                </label>
                <label className={styles.label}>
                  Unit
                  <select
                    className={styles.select}
                    value={draft.unit}
                    onChange={(e) => setDraft((d) => ({ ...d, unit: e.target.value as PantryUnit }))}
                  >
                    {PANTRY_UNITS.map((unit) => (
                      <option key={unit} value={unit}>
                        {unit}
                      </option>
                    ))}
                  </select>
                </label>
                <label className={styles.label}>
                  Expiration
                  <input
                    className={styles.field}
                    type="date"
                    value={draft.expiresOn}
                    onChange={(e) => setDraft((d) => ({ ...d, expiresOn: e.target.value }))}
                  />
                </label>
                <label className={`${styles.label} ${styles.full}`}>
                  Notes
                  <input
                    className={styles.field}
                    value={draft.notes}
                    onChange={(e) => setDraft((d) => ({ ...d, notes: e.target.value }))}
                    placeholder="Optional"
                  />
                </label>
              </div>
              <div className={styles.cardActions}>
                <button type="submit" className={styles.primaryBtn}>
                  {draft.id ? 'Save changes' : 'Save item'}
                </button>
                <button
                  type="button"
                  className={styles.ghostBtn}
                  onClick={() => {
                    setShowForm(false);
                    setDraft(EMPTY_DRAFT);
                  }}
                >
                  Cancel
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {filtered.length === 0 ? (
          <div className={styles.empty}>
            {items.length === 0
              ? 'Your pantry is empty. Add ingredients to cook faster later.'
              : 'No items match this search/filter.'}
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map((item) => {
              const badge = expiryLabel(item);
              const state = isExpired(item) ? 'expired' : isExpiringSoon(item) ? 'soon' : 'ok';
              const score = freshnessScore(item);
              return (
                <motion.article
                  key={item.id}
                  className={styles.card}
                  data-state={state}
                  layout={!reduceMotion}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className={styles.cardTop}>
                    <div className={styles.icon}>{item.icon || categoryIcon(item.category)}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 className={styles.cardTitle}>{item.name}</h3>
                      <p className={styles.cardMeta}>
                        {PANTRY_CATEGORIES.find((c) => c.id === item.category)?.label} ·{' '}
                        {item.quantity} {item.unit}
                      </p>
                    </div>
                    <span className={styles.badge} data-tone={badge.tone}>
                      {badge.text}
                    </span>
                  </div>

                  <div>
                    <div className={styles.cardMeta}>Freshness {score}%</div>
                    <div className={styles.progressTrack} aria-hidden>
                      <div className={styles.progressFill} style={{ width: `${score}%` }} />
                    </div>
                  </div>

                  {item.notes && <p className={styles.cardMeta}>{item.notes}</p>}

                  <div className={styles.cardActions}>
                    <button type="button" className={styles.ghostBtn} onClick={() => startEdit(item)}>
                      Edit
                    </button>
                    <button
                      type="button"
                      className={styles.ghostBtn}
                      onClick={() => remove(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
