/** Routes accessible without signing in. Everything else requires Clerk auth. */
export const PUBLIC_ROUTES = [
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/download',
  '/api/(.*)',
] as const;

export type PublicRoutePattern = (typeof PUBLIC_ROUTES)[number];
