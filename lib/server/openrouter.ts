import { fetchWithTimeout, FetchTimeoutError } from '@/lib/server/fetch-with-timeout';
import { getOpenRouterApiKey, getOpenRouterSiteUrl } from '@/lib/server/env';
import type { ChatCompletionRequest } from '@/lib/server/validation';

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const OPENROUTER_TIMEOUT_MS = 45_000;

export type OpenRouterSuccess = {
  choices: Array<{
    message?: {
      content?: string;
    };
  }>;
};

export async function callOpenRouter(
  request: Request,
  payload: ChatCompletionRequest,
): Promise<{ ok: true; data: OpenRouterSuccess } | { ok: false; reason: 'missing_key' | 'timeout' | 'upstream' }> {
  const apiKey = getOpenRouterApiKey();
  if (!apiKey) {
    return { ok: false, reason: 'missing_key' };
  }

  try {
    const response = await fetchWithTimeout(
      OPENROUTER_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
          'HTTP-Referer': getOpenRouterSiteUrl(request),
          'X-Title': 'MealGenie',
        },
        body: JSON.stringify(payload),
      },
      OPENROUTER_TIMEOUT_MS,
    );

    if (!response.ok) {
      return { ok: false, reason: 'upstream' };
    }

    const data = (await response.json()) as OpenRouterSuccess;
    return { ok: true, data };
  } catch (error) {
    if (error instanceof FetchTimeoutError) {
      return { ok: false, reason: 'timeout' };
    }
    return { ok: false, reason: 'upstream' };
  }
}
