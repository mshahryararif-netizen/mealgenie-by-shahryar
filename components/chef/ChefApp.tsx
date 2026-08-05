'use client';

import { useEffect, useMemo, useState } from 'react';
import { HeaderAuthControls } from '@/components/auth/header-auth-controls';
import styles from '@/components/chef/chef.module.css';
import { CookNormallyFlow } from '@/components/chef/CookNormallyFlow';
import { LeftoversFlow } from '@/components/chef/LeftoversFlow';
import { RecipeDetail } from '@/components/chef/RecipeDetail';
import { RecipeResults } from '@/components/chef/RecipeResults';
import { VoiceChef } from '@/components/chef/VoiceChef';
import {
  loadTasteMemory,
  rememberCuisine,
  saveTasteMemory,
} from '@/lib/chef/preferences';
import type {
  ChefRecipe,
  ChefScreen,
  CookMode,
  CookNormallyPrefs,
  LeftoversInput,
  UserTasteMemory,
} from '@/lib/chef/types';

export default function ChefApp() {
  const [screen, setScreen] = useState<ChefScreen>('home');
  const [mode, setMode] = useState<CookMode | null>(null);
  const [memory, setMemory] = useState<UserTasteMemory>(() => loadTasteMemory());
  const [recipes, setRecipes] = useState<ChefRecipe[]>([]);
  const [chefNote, setChefNote] = useState('');
  const [selected, setSelected] = useState<ChefRecipe | null>(null);
  const [loading, setLoading] = useState(false);
  const [voiceOpen, setVoiceOpen] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const stored = loadTasteMemory();
    setMemory(stored);
    document.documentElement.dataset.chefTheme = stored.theme;
  }, []);

  const theme = memory.theme;

  const shellStyle = useMemo(
    () => ({ fontFamily: 'Outfit, system-ui, sans-serif' }),
    [],
  );

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light';
    const updated = saveTasteMemory({ theme: next });
    setMemory(updated);
    document.documentElement.dataset.chefTheme = next;
  }

  async function requestRecipes(payload: {
    mode: CookMode;
    prefs?: CookNormallyPrefs;
    leftovers?: LeftoversInput;
  }) {
    setLoading(true);
    setError('');
    setScreen('results');
    try {
      const response = await fetch('/api/chef/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          memory: {
            favoriteCuisines: memory.favoriteCuisines,
            dislikedIngredients: memory.dislikedIngredients,
          },
        }),
      });
      const data = await response.json();
      setRecipes(Array.isArray(data.recipes) ? data.recipes : []);
      setChefNote(data.chefNote || 'Here are my picks for you.');
      if (payload.prefs?.cuisine && payload.prefs.cuisine !== 'surprise') {
        rememberCuisine(payload.prefs.cuisine);
      }
      const updated = saveTasteMemory({
        lastMode: payload.mode,
        dietary: payload.prefs?.dietary ?? memory.dietary,
        allergies: payload.prefs?.allergies ?? memory.allergies,
        goal: payload.prefs?.goal ?? memory.goal,
        preferredTimes: payload.prefs?.time
          ? [payload.prefs.time, ...memory.preferredTimes.filter((t) => t !== payload.prefs?.time)].slice(0, 4)
          : memory.preferredTimes,
      });
      setMemory(updated);
    } catch {
      setError('I hit a kitchen snag. Try again in a moment.');
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.shell} data-theme={theme} style={shellStyle}>
      <header className={styles.topBar}>
        <div className={styles.brand}>
          <div className={styles.brandMark}>MealGenie</div>
          <div className={styles.brandSub}>Your AI personal chef</div>
        </div>
        <div className={styles.topActions}>
          <button
            type="button"
            className={styles.iconBtn}
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === 'light' ? '☾' : '☀'}
          </button>
          <button
            type="button"
            className={styles.iconBtn}
            aria-label="Open voice chef"
            onClick={() => setVoiceOpen(true)}
          >
            🎤
          </button>
          <HeaderAuthControls />
        </div>
      </header>

      <main className={styles.main}>
        {screen === 'home' && (
          <section>
            <div className={styles.hero}>
              <div className={styles.heroEyebrow}>Jarvis for cooking</div>
              <h1>What are we cooking tonight?</h1>
              <p>
                Tell me how you want to cook. Scan your fridge, personalize recipes, and cook with
                voice coaching.
              </p>
            </div>
            <div className={styles.modeGrid}>
              <button
                type="button"
                className={styles.modeCard}
                onClick={() => {
                  setMode('normally');
                  setScreen('cook-normally');
                }}
              >
                <div className={styles.modeIcon}>🍽️</div>
                <h2>Cook Normally</h2>
                <p>A short chat about your diet, mood, time, and cuisine — then ranked recipes.</p>
              </button>
              <button
                type="button"
                className={styles.modeCard}
                onClick={() => {
                  setMode('leftovers');
                  setScreen('leftovers');
                }}
              >
                <div className={styles.modeIcon}>🥡</div>
                <h2>Cook with Leftovers</h2>
                <p>Type, speak, scan your fridge, or tap ingredients. I’ll minimize waste and fill the gaps.</p>
              </button>
            </div>
          </section>
        )}

        {screen === 'cook-normally' && (
          <CookNormallyFlow
            memory={memory}
            onBack={() => setScreen('home')}
            onComplete={(prefs) => requestRecipes({ mode: 'normally', prefs })}
          />
        )}

        {screen === 'leftovers' && (
          <LeftoversFlow
            memory={memory}
            onBack={() => setScreen('home')}
            onComplete={(leftovers) => requestRecipes({ mode: 'leftovers', leftovers })}
          />
        )}

        {screen === 'results' && (
          <RecipeResults
            loading={loading}
            error={error}
            chefNote={chefNote}
            recipes={recipes}
            mode={mode}
            onBack={() => setScreen(mode === 'leftovers' ? 'leftovers' : 'cook-normally')}
            onHome={() => setScreen('home')}
            onSelect={(recipe) => {
              setSelected(recipe);
              setScreen('detail');
            }}
            onRetry={() => {
              if (mode === 'leftovers') setScreen('leftovers');
              else setScreen('cook-normally');
            }}
          />
        )}

        {screen === 'detail' && selected && (
          <RecipeDetail
            recipe={selected}
            onBack={() => setScreen('results')}
            onCookWithVoice={() => setVoiceOpen(true)}
          />
        )}
      </main>

      {voiceOpen && (
        <VoiceChef
          recipe={selected}
          onClose={() => setVoiceOpen(false)}
        />
      )}
    </div>
  );
}
