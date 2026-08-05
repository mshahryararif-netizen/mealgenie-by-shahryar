import type { Metadata, Viewport } from 'next';
import { ClerkProviderWrapper } from '@/components/clerk-provider-wrapper';
import { SITE_URL } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Meal Genie',
  description: 'Turn what’s in your kitchen into creative meal ideas — instantly.',
  openGraph: {
    title: 'Meal Genie',
    description: 'Scan your fridge, plan meals, and cook smarter.',
    url: SITE_URL,
    siteName: 'Meal Genie',
    type: 'website',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍳</text></svg>",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#22C55E',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mobile-app">
        <ClerkProviderWrapper>{children}</ClerkProviderWrapper>
      </body>
    </html>
  );
}
