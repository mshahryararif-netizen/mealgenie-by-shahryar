import { loadDoc, saveDoc, uid } from '@/lib/chef/local-db';
import type { Allergy, CuisineChoice, Goal, SkillLevel } from '@/lib/chef/types';

export type MealSlot = 'breakfast' | 'lunch' | 'dinner' | 'snack';
export type DayKey = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export type PlannedMeal = {
  id: string;
  title: string;
  calories: number;
  protein: number;
  cost: number;
  cuisine?: string;
};

export type WeekPlan = Record<DayKey, Record<MealSlot, PlannedMeal | null>>;

export type GroceryItem = {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  checked: boolean;
  fromRecipes: string[];
};

export type BudgetState = {
  period: 'weekly' | 'monthly';
  limit: number;
  spent: number;
  history: Array<{ id: string; label: string; amount: number; date: string }>;
};

export type FamilyProfile = {
  id: string;
  name: string;
  age: number;
  role: 'parent' | 'child';
  allergies: Allergy[];
  favoriteCuisines: CuisineChoice[];
  goals: Goal[];
  skill: SkillLevel;
};

export type FamilyState = {
  activeProfileId: string;
  profiles: FamilyProfile[];
};

export type HistoryEntry = {
  id: string;
  recipe: string;
  date: string;
  rating: number;
  timeMinutes: number;
  calories: number;
  protein: number;
  difficulty: string;
  favorite: boolean;
};

export type NutritionDay = {
  date: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
};

export type AchievementId =
  | 'first_meal'
  | 'streak_7'
  | 'healthy_week'
  | 'protein_master'
  | 'leftover_hero'
  | 'budget_saver'
  | 'world_chef'
  | 'dessert_lover';

export type GamificationState = {
  xp: number;
  level: number;
  streak: number;
  unlocked: AchievementId[];
};

export type SyncEnvelope = {
  pantry?: unknown;
  planner?: WeekPlan;
  grocery?: GroceryItem[];
  budget?: BudgetState;
  family?: FamilyState;
  history?: HistoryEntry[];
  nutrition?: NutritionDay[];
  achievements?: GamificationState;
  preferences?: unknown;
};

const DAYS: DayKey[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const SLOTS: MealSlot[] = ['breakfast', 'lunch', 'dinner', 'snack'];

export function emptyWeek(): WeekPlan {
  const week = {} as WeekPlan;
  for (const day of DAYS) {
    week[day] = { breakfast: null, lunch: null, dinner: null, snack: null };
  }
  return week;
}

const SAMPLE_MEALS: PlannedMeal[] = [
  { id: 'm1', title: 'Veggie Omelette', calories: 320, protein: 24, cost: 3.5, cuisine: 'American' },
  { id: 'm2', title: 'Chicken Bowl', calories: 480, protein: 42, cost: 6.5, cuisine: 'American' },
  { id: 'm3', title: 'Dal & Rice', calories: 420, protein: 22, cost: 3.2, cuisine: 'Indian' },
  { id: 'm4', title: 'Pasta Primavera', calories: 510, protein: 18, cost: 4.8, cuisine: 'Italian' },
  { id: 'm5', title: 'Greek Salad', calories: 280, protein: 12, cost: 4.1, cuisine: 'Turkish' },
  { id: 'm6', title: 'Tofu Stir Fry', calories: 390, protein: 26, cost: 5.0, cuisine: 'Chinese' },
  { id: 'm7', title: 'Yogurt Parfait', calories: 220, protein: 14, cost: 2.4, cuisine: 'American' },
  { id: 'm8', title: 'Fish Tacos', calories: 450, protein: 32, cost: 7.2, cuisine: 'Mexican' },
];

export function generateWeekPlan(seed = Date.now()): WeekPlan {
  const week = emptyWeek();
  let i = seed % SAMPLE_MEALS.length;
  for (const day of DAYS) {
    for (const slot of SLOTS) {
      const base = SAMPLE_MEALS[i % SAMPLE_MEALS.length];
      week[day][slot] = { ...base, id: uid('meal') };
      i += 1;
    }
  }
  return week;
}

export const DAY_LABELS: Record<DayKey, string> = {
  mon: 'Mon',
  tue: 'Tue',
  wed: 'Wed',
  thu: 'Thu',
  fri: 'Fri',
  sat: 'Sat',
  sun: 'Sun',
};

export const SLOT_LABELS: Record<MealSlot, string> = {
  breakfast: 'Breakfast',
  lunch: 'Lunch',
  dinner: 'Dinner',
  snack: 'Snack',
};

export function loadPlanner() {
  return loadDoc<WeekPlan>('mealGeniePlanner', 1, emptyWeek()).data;
}
export function savePlanner(data: WeekPlan) {
  return saveDoc('mealGeniePlanner', 1, data).data;
}

export function loadGrocery() {
  return loadDoc<GroceryItem[]>('mealGenieGrocery', 1, []).data;
}
export function saveGrocery(data: GroceryItem[]) {
  return saveDoc('mealGenieGrocery', 1, data).data;
}

export function loadBudget() {
  return loadDoc<BudgetState>('mealGenieBudget', 1, {
    period: 'weekly',
    limit: 80,
    spent: 0,
    history: [],
  }).data;
}
export function saveBudget(data: BudgetState) {
  return saveDoc('mealGenieBudget', 1, data).data;
}

export function loadFamily(): FamilyState {
  const fallback: FamilyState = {
    activeProfileId: 'parent-1',
    profiles: [
      {
        id: 'parent-1',
        name: 'Parent',
        age: 34,
        role: 'parent',
        allergies: [],
        favoriteCuisines: ['italian'],
        goals: ['balanced'],
        skill: 'intermediate',
      },
    ],
  };
  return loadDoc<FamilyState>('mealGenieFamily', 1, fallback).data;
}
export function saveFamily(data: FamilyState) {
  return saveDoc('mealGenieFamily', 1, data).data;
}

export function loadHistory() {
  return loadDoc<HistoryEntry[]>('mealGenieHistory', 1, []).data;
}
export function saveHistory(data: HistoryEntry[]) {
  return saveDoc('mealGenieHistory', 1, data).data;
}

export function loadNutrition() {
  return loadDoc<NutritionDay[]>('mealGenieNutrition', 1, []).data;
}
export function saveNutrition(data: NutritionDay[]) {
  return saveDoc('mealGenieNutrition', 1, data).data;
}

export function loadAchievements() {
  return loadDoc<GamificationState>('mealGenieXP', 1, {
    xp: 0,
    level: 1,
    streak: 0,
    unlocked: [],
  }).data;
}
export function saveAchievements(data: GamificationState) {
  return saveDoc('mealGenieXP', 1, data).data;
}

export function mergeGroceryFromRecipes(
  recipeNames: string[],
  missing: Array<{ name: string; category?: string; quantity?: number; unit?: string }>,
) {
  const current = loadGrocery();
  const map = new Map(current.map((item) => [item.name.toLowerCase(), item]));
  for (const row of missing) {
    const key = row.name.toLowerCase();
    const existing = map.get(key);
    if (existing) {
      existing.quantity += row.quantity ?? 1;
      existing.fromRecipes = Array.from(new Set([...existing.fromRecipes, ...recipeNames]));
    } else {
      const item: GroceryItem = {
        id: uid('groc'),
        name: row.name,
        category: row.category || 'Pantry',
        quantity: row.quantity ?? 1,
        unit: row.unit || 'pcs',
        checked: false,
        fromRecipes: recipeNames,
      };
      map.set(key, item);
    }
  }
  return saveGrocery(Array.from(map.values()));
}

export function addXp(amount: number, unlock?: AchievementId) {
  const state = loadAchievements();
  state.xp += amount;
  state.level = Math.max(1, Math.floor(state.xp / 100) + 1);
  if (unlock && !state.unlocked.includes(unlock)) state.unlocked.push(unlock);
  return saveAchievements(state);
}

export { DAYS, SLOTS, uid };
