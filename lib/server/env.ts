import { getSiteUrl } from '@/lib/site';

export function getOpenRouterApiKey(): string | undefined {
  const key = process.env.OPENROUTER_API_KEY?.trim();
  return key || undefined;
}

export function getSpoonacularApiKey(): string | undefined {
  const key = process.env.SPOONACULAR_API_KEY?.trim();
  return key || undefined;
}

export function isOpenRouterConfigured(): boolean {
  return Boolean(getOpenRouterApiKey());
}

export function isSpoonacularConfigured(): boolean {
  return Boolean(getSpoonacularApiKey());
}

export function getOpenRouterSiteUrl(request: Request): string {
  return (
    process.env.OPENROUTER_SITE_URL?.trim() ||
    request.headers.get('origin') ||
    getSiteUrl()
  );
}
