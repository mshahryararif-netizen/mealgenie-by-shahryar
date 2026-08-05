import type { UserTasteMemory } from '@/lib/chef/types';

const STORAGE_KEY = 'mealGenieChefMemory';

const DEFAULT_MEMORY: UserTasteMemory = {
  allergies: [],
  favoriteCuisines: [],
  dislikedIngredients: [],
  preferredTimes: [],
  theme: 'light',
};

export function loadTasteMemory(): UserTasteMemory {
  if (typeof window === 'undefined') return { ...DEFAULT_MEMORY };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_MEMORY };
    return { ...DEFAULT_MEMORY, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_MEMORY };
  }
}

export function saveTasteMemory(patch: Partial<UserTasteMemory>): UserTasteMemory {
  const next = { ...loadTasteMemory(), ...patch };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // ignore quota errors
  }
  return next;
}

export function rememberCuisine(cuisine: string): void {
  const memory = loadTasteMemory();
  const favoriteCuisines = [
    cuisine,
    ...memory.favoriteCuisines.filter((c) => c !== cuisine),
  ].slice(0, 8);
  saveTasteMemory({ favoriteCuisines });
}

export function rememberDisliked(ingredient: string): void {
  const memory = loadTasteMemory();
  if (memory.dislikedIngredients.includes(ingredient)) return;
  saveTasteMemory({
    dislikedIngredients: [...memory.dislikedIngredients, ingredient].slice(0, 40),
  });
}
