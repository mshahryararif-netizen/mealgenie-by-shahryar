import { CACHE_TTL, getCachedValue, setCachedValue } from '@/lib/server/cache';
import { fetchWithTimeout, FetchTimeoutError } from '@/lib/server/fetch-with-timeout';
import { getSpoonacularApiKey } from '@/lib/server/env';

const SPOONACULAR_BASE = 'https://api.spoonacular.com';
const SPOONACULAR_TIMEOUT_MS = 20_000;

type SpoonacularResult<T> =
  | { ok: true; data: T }
  | { ok: false; reason: 'missing_key' | 'timeout' | 'upstream' | 'not_found' };

async function spoonacularFetch<T>(
  path: string,
  params: Record<string, string>,
): Promise<SpoonacularResult<T>> {
  const apiKey = getSpoonacularApiKey();
  if (!apiKey) {
    return { ok: false, reason: 'missing_key' };
  }

  const url = new URL(`${SPOONACULAR_BASE}${path}`);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }
  url.searchParams.set('apiKey', apiKey);

  try {
    const response = await fetchWithTimeout(url.toString(), { method: 'GET' }, SPOONACULAR_TIMEOUT_MS);

    if (response.status === 404) {
      return { ok: false, reason: 'not_found' };
    }

    if (!response.ok) {
      return { ok: false, reason: 'upstream' };
    }

    const data = (await response.json()) as T;
    return { ok: true, data };
  } catch (error) {
    if (error instanceof FetchTimeoutError) {
      return { ok: false, reason: 'timeout' };
    }
    return { ok: false, reason: 'upstream' };
  }
}

export async function searchRecipesByIngredients(
  ingredients: string[],
  number: number,
): Promise<SpoonacularResult<unknown[]>> {
  const cacheKey = `search:${ingredients.slice().sort().join(',').toLowerCase()}:${number}`;
  const cached = getCachedValue<unknown[]>(cacheKey);
  if (cached) {
    return { ok: true, data: cached };
  }

  const result = await spoonacularFetch<unknown[]>('/recipes/findByIngredients', {
    ingredients: ingredients.join(','),
    number: String(number),
    ranking: '1',
    ignorePantry: 'true',
  });

  if (result.ok) {
    setCachedValue(cacheKey, result.data, CACHE_TTL.spoonacularSearchMs);
  }

  return result;
}

export async function getRecipeInformation(
  id: number,
  includeNutrition: boolean,
): Promise<SpoonacularResult<unknown>> {
  const cacheKey = `recipe:${id}:${includeNutrition ? 'nutrition' : 'basic'}`;
  const cached = getCachedValue<unknown>(cacheKey);
  if (cached) {
    return { ok: true, data: cached };
  }

  const result = await spoonacularFetch<unknown>(`/recipes/${id}/information`, {
    includeNutrition: includeNutrition ? 'true' : 'false',
  });

  if (result.ok) {
    setCachedValue(cacheKey, result.data, CACHE_TTL.spoonacularRecipeMs);
  }

  return result;
}
