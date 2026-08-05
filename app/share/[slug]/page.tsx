import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = decodeURIComponent(slug)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${title} · MealGenie`,
    description: `Shared recipe from MealGenie — ${title}`,
    openGraph: {
      title,
      description: 'Cook this MealGenie recipe tonight.',
      url: `${SITE_URL}/share/${slug}`,
      siteName: 'MealGenie',
      type: 'website',
    },
  };
}

export default async function ShareRecipePage({ params }: Props) {
  const { slug } = await params;
  const title = decodeURIComponent(slug)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main
      style={{
        minHeight: '100dvh',
        padding: '48px 20px',
        background:
          'radial-gradient(circle at top left, #2a6b55 0%, transparent 40%), linear-gradient(160deg, #0f1a16, #1a2e26)',
        color: '#f4f7f5',
        fontFamily: 'Outfit, system-ui, sans-serif',
      }}
    >
      <article
        style={{
          maxWidth: 560,
          margin: '0 auto',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 28,
          padding: 28,
          backdropFilter: 'blur(18px)',
          background: 'rgba(255,255,255,0.06)',
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 12 }}>🍳</div>
        <p style={{ opacity: 0.7, margin: 0, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 12 }}>
          MealGenie shared recipe
        </p>
        <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 36, margin: '8px 0 12px' }}>
          {title}
        </h1>
        <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
          Nutrition summary and full steps open in the MealGenie app. Comments coming soon.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            marginTop: 20,
            padding: '12px 18px',
            borderRadius: 999,
            background: '#1F6F54',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          Open MealGenie
        </Link>
      </article>
    </main>
  );
}
