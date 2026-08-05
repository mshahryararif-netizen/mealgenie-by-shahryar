import {
  loadAchievements,
  loadBudget,
  loadFamily,
  loadGrocery,
  loadHistory,
  loadNutrition,
  loadPlanner,
  saveAchievements,
  saveBudget,
  saveFamily,
  saveGrocery,
  saveHistory,
  saveNutrition,
  savePlanner,
  type SyncEnvelope,
} from '@/lib/chef/features-store';
import { loadPantryStore } from '@/lib/chef/pantry-storage';
import { loadTasteMemory, saveTasteMemory } from '@/lib/chef/preferences';

/** Collect local feature state for cloud sync (localStorage remains the offline cache). */
export function collectLocalSyncPayload(): SyncEnvelope {
  return {
    pantry: loadPantryStore(),
    planner: loadPlanner(),
    grocery: loadGrocery(),
    budget: loadBudget(),
    family: loadFamily(),
    history: loadHistory(),
    nutrition: loadNutrition(),
    achievements: loadAchievements(),
    preferences: loadTasteMemory(),
  };
}

/** Apply a cloud payload into localStorage cache. */
export function applySyncPayload(payload: SyncEnvelope) {
  if (payload.planner) savePlanner(payload.planner);
  if (payload.grocery) saveGrocery(payload.grocery);
  if (payload.budget) saveBudget(payload.budget);
  if (payload.family) saveFamily(payload.family);
  if (payload.history) saveHistory(payload.history);
  if (payload.nutrition) saveNutrition(payload.nutrition);
  if (payload.achievements) saveAchievements(payload.achievements);
  if (payload.preferences && typeof payload.preferences === 'object') {
    saveTasteMemory(payload.preferences as Parameters<typeof saveTasteMemory>[0]);
  }
}

export async function pullCloudSync(): Promise<SyncEnvelope | null> {
  try {
    const res = await fetch('/api/chef/sync');
    if (!res.ok) return null;
    const data = await res.json();
    if (data?.payload) {
      applySyncPayload(data.payload as SyncEnvelope);
      return data.payload as SyncEnvelope;
    }
    return null;
  } catch {
    return null;
  }
}

export async function pushCloudSync(payload?: SyncEnvelope): Promise<boolean> {
  try {
    const body = payload ?? collectLocalSyncPayload();
    const res = await fetch('/api/chef/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ payload: body }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
