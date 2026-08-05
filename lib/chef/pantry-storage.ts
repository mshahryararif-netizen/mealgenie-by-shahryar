import {
  EXPIRING_SOON_DAYS,
  PANTRY_CATEGORIES,
  PANTRY_STORAGE_KEY,
  PANTRY_STORAGE_VERSION,
  type PantryItem,
  type PantryItemInput,
  type PantryStore,
} from '@/lib/chef/pantry-types';

function createId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `pantry_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function emptyStore(): PantryStore {
  return { version: PANTRY_STORAGE_VERSION, items: [] };
}

function normalizeStore(raw: unknown): PantryStore {
  if (!raw || typeof raw !== 'object') return emptyStore();
  const record = raw as Partial<PantryStore>;
  const items = Array.isArray(record.items) ? record.items : [];
  return {
    version: PANTRY_STORAGE_VERSION,
    items: items.filter((item): item is PantryItem => {
      return Boolean(
        item &&
          typeof item === 'object' &&
          typeof item.id === 'string' &&
          typeof item.name === 'string' &&
          typeof item.category === 'string' &&
          typeof item.quantity === 'number',
      );
    }),
  };
}

/** Load pantry. Shape is DB-migration friendly: { version, items }. */
export function loadPantryStore(): PantryStore {
  if (typeof window === 'undefined') return emptyStore();
  try {
    const raw = localStorage.getItem(PANTRY_STORAGE_KEY);
    if (!raw) return emptyStore();
    return normalizeStore(JSON.parse(raw));
  } catch {
    return emptyStore();
  }
}

export function savePantryStore(store: PantryStore): PantryStore {
  const next: PantryStore = {
    version: PANTRY_STORAGE_VERSION,
    items: store.items,
  };
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(PANTRY_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore quota errors
    }
  }
  return next;
}

export function listPantryItems(): PantryItem[] {
  return loadPantryStore().items.slice().sort((a, b) => a.name.localeCompare(b.name));
}

export function upsertPantryItem(input: PantryItemInput, id?: string): PantryStore {
  const store = loadPantryStore();
  const now = new Date().toISOString();
  const name = input.name.trim();
  if (!name) return store;

  if (id) {
    store.items = store.items.map((item) =>
      item.id === id
        ? {
            ...item,
            name,
            category: input.category,
            quantity: Math.max(0, input.quantity),
            unit: input.unit,
            expiresOn: input.expiresOn || undefined,
            icon: input.icon || item.icon,
            notes: input.notes?.trim() || undefined,
            updatedAt: now,
          }
        : item,
    );
  } else {
    store.items.push({
      id: createId(),
      name,
      category: input.category,
      quantity: Math.max(0, input.quantity),
      unit: input.unit,
      expiresOn: input.expiresOn || undefined,
      icon: input.icon || categoryIcon(input.category),
      notes: input.notes?.trim() || undefined,
      createdAt: now,
      updatedAt: now,
    });
  }

  return savePantryStore(store);
}

export function deletePantryItem(id: string): PantryStore {
  const store = loadPantryStore();
  store.items = store.items.filter((item) => item.id !== id);
  return savePantryStore(store);
}

export function categoryIcon(category: PantryItem['category']): string {
  return PANTRY_CATEGORIES.find((c) => c.id === category)?.icon ?? '🧺';
}

export function daysUntilExpiry(expiresOn?: string): number | null {
  if (!expiresOn) return null;
  const end = new Date(`${expiresOn}T23:59:59`);
  if (Number.isNaN(end.getTime())) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.ceil((end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

export function isExpired(item: PantryItem): boolean {
  const days = daysUntilExpiry(item.expiresOn);
  return days !== null && days < 0;
}

export function isExpiringSoon(item: PantryItem, withinDays = EXPIRING_SOON_DAYS): boolean {
  const days = daysUntilExpiry(item.expiresOn);
  return days !== null && days >= 0 && days <= withinDays;
}

export function freshnessScore(item: PantryItem): number {
  const days = daysUntilExpiry(item.expiresOn);
  if (days === null) return 70;
  if (days < 0) return 8;
  if (days === 0) return 20;
  if (days <= EXPIRING_SOON_DAYS) return 40 + days * 8;
  if (days >= 14) return 100;
  return Math.min(100, 55 + days * 4);
}

export function pantryNamesForLeftovers(items?: PantryItem[]): string[] {
  const source = items ?? listPantryItems();
  return source
    .filter((item) => item.quantity > 0 && !isExpired(item))
    .map((item) => item.name);
}

/**
 * Future DB migration helper — convert local store to API payload shape.
 * Keep in sync when wiring Prisma pantry tables.
 */
export function toPantryMigrationPayload(store = loadPantryStore()) {
  return {
    source: 'localStorage' as const,
    key: PANTRY_STORAGE_KEY,
    version: store.version,
    items: store.items,
  };
}
