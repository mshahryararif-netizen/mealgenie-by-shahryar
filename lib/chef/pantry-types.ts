export const PANTRY_STORAGE_KEY = 'mealGeniePantryInventory';
export const PANTRY_STORAGE_VERSION = 1 as const;

export type PantryCategory =
  | 'vegetables'
  | 'fruits'
  | 'dairy'
  | 'meat'
  | 'grains'
  | 'spices'
  | 'drinks'
  | 'frozen'
  | 'snacks';

export type PantryUnit =
  | 'pcs'
  | 'g'
  | 'kg'
  | 'ml'
  | 'l'
  | 'cup'
  | 'tbsp'
  | 'pack';

export type PantryItem = {
  id: string;
  name: string;
  category: PantryCategory;
  quantity: number;
  unit: PantryUnit;
  /** ISO date string YYYY-MM-DD, optional */
  expiresOn?: string;
  icon?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
};

export type PantryStore = {
  version: typeof PANTRY_STORAGE_VERSION;
  items: PantryItem[];
};

export type PantryItemInput = {
  name: string;
  category: PantryCategory;
  quantity: number;
  unit: PantryUnit;
  expiresOn?: string;
  icon?: string;
  notes?: string;
};

export const PANTRY_CATEGORIES: Array<{
  id: PantryCategory;
  label: string;
  icon: string;
}> = [
  { id: 'vegetables', label: 'Vegetables', icon: '🥬' },
  { id: 'fruits', label: 'Fruits', icon: '🍎' },
  { id: 'dairy', label: 'Dairy', icon: '🥛' },
  { id: 'meat', label: 'Meat', icon: '🥩' },
  { id: 'grains', label: 'Grains', icon: '🌾' },
  { id: 'spices', label: 'Spices', icon: '🌶️' },
  { id: 'drinks', label: 'Drinks', icon: '🧃' },
  { id: 'frozen', label: 'Frozen', icon: '🧊' },
  { id: 'snacks', label: 'Snacks', icon: '🍿' },
];

export const PANTRY_UNITS: PantryUnit[] = [
  'pcs',
  'g',
  'kg',
  'ml',
  'l',
  'cup',
  'tbsp',
  'pack',
];

export const EXPIRING_SOON_DAYS = 3;
