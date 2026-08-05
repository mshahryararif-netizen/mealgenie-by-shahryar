'use client';

import dynamic from 'next/dynamic';

const MealGenieApp = dynamic(() => import('@/components/MealGenieApp'), {
  ssr: false,
});

export default function MealGenieClient() {
  return <MealGenieApp />;
}
