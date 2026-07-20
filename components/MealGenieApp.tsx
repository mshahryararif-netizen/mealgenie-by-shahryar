'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { MEALGENIE_APP_INNER_HTML } from '@/lib/mealgenie-markup';
import { bindMealGenieGlobals, initMealGenieApp } from '@/lib/mealgenie-app';
import { HeaderAuthControls } from '@/components/auth/header-auth-controls';

export default function MealGenieApp() {
  const appRef = useRef<HTMLDivElement>(null);
  const [authSlot, setAuthSlot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const root = appRef.current;
    if (!root || root.dataset.mounted === 'true') return;

    root.innerHTML = MEALGENIE_APP_INNER_HTML;
    root.dataset.mounted = 'true';
    bindMealGenieGlobals();
    initMealGenieApp();
    setAuthSlot(document.getElementById('headerAuthSlot'));
  }, []);

  return (
    <>
      <div className="app" ref={appRef} />
      {authSlot ? createPortal(<HeaderAuthControls />, authSlot) : null}
    </>
  );
}
