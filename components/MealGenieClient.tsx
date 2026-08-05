'use client';

import dynamic from 'next/dynamic';

const ChefApp = dynamic(() => import('@/components/chef/ChefApp'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'system-ui, sans-serif',
        color: '#5f6b63',
        background: '#f4f1eb',
      }}
    >
      Warming up your chef…
    </div>
  ),
});

export default function MealGenieClient() {
  return <ChefApp />;
}
