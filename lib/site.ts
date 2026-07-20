/** Canonical production site URL for Meal Genie. */
export const SITE_URL = 'https://mealgenie.komyosys.ai';

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_APP_URL?.trim() ||
    process.env.OPENROUTER_SITE_URL?.trim() ||
    SITE_URL
  );
}
