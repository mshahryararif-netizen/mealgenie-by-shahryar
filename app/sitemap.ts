import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/download`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/account`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/sign-in`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/sign-up`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
