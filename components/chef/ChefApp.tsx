'use client';

import { useEffect, useMemo, useState } from 'react';
import { HeaderAuthControls } from '@/components/auth/header-auth-controls';
import { AchievementsPanel } from '@/components/chef/AchievementsPanel';
import { BarcodeScannerPanel } from '@/components/chef/BarcodeScannerPanel';
import { BudgetPanel } from '@/components/chef/BudgetPanel';
import styles from '@/components/chef/chef.module.css';
import { CookNormallyFlow } from '@/components/chef/CookNormallyFlow';
import { FamilyPanel } from '@/components/chef/FamilyPanel';
import { GroceryDeliveryPanel } from '@/components/chef/GroceryDeliveryPanel';
import { GroceryListPanel } from '@/components/chef/GroceryListPanel';
import { LeftoversFlow } from '@/components/chef/LeftoversFlow';
import { MealHistoryPanel } from '@/components/chef/MealHistoryPanel';
import { MealPlannerPanel } from '@/components/chef/MealPlannerPanel';
import { NutritionDashboard } from '@/components/chef/NutritionDashboard';
import { PantryPanel } from '@/components/chef/PantryPanel';
import { PlatingTipsPanel } from '@/components/chef/PlatingTipsPanel';
import { RecipeDetail } from '@/components/chef/RecipeDetail';
import { RecipeResults } from '@/components/chef/RecipeResults';
import { RecipeSharePanel } from '@/components/chef/RecipeSharePanel';
import { SeasonalPanel } from '@/components/chef/SeasonalPanel';
import { VoiceChef } from '@/components/chef/VoiceChef';
import { pullCloudSync, pushCloudSync } from '@/lib/chef/cloud-sync';
import {
  addXp,
  loadHistory,
  loadNutrition,
  mergeGroceryFromRecipes,
  saveHistory,
  saveNutrition,
  uid,
} from '@/lib/chef/features-store';
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

const HUB: Array<{ screen: ChefScreen; icon: string; title: string; blurb: string }> = [
  { screen: 'planner', icon: '📅', title: 'Meal Planner', blurb: '7-day breakfast to snacks.' },
  { screen: 'grocery', icon: '🛒', title: 'Grocery List', blurb: 'Missing items vs pantry.' },
  { screen: 'budget', icon: '💸', title: 'Budget', blurb: 'Spend tracking & cheapest picks.' },
  { screen: 'family', icon: '👨‍👩‍👧', title: 'Family', blurb: 'Profiles, allergies, shared data.' },
  { screen: 'history', icon: '📖', title: 'Meal History', blurb: 'Ratings, favorites, cook again.' },
  { screen: 'nutrition', icon: '📊', title: 'Nutrition', blurb: 'Macros, goals, streaks.' },
  { screen: 'seasonal', icon: '🍂', title: 'Seasonal', blurb: 'Produce & holiday recipes.' },
  { screen: 'barcode', icon: '📷', title: 'Barcode', blurb: 'Scan UPC into pantry.' },
  { screen: 'delivery', icon: '🚚', title: 'Delivery', blurb: 'Buy missing groceries.' },
  { screen: 'achievements', icon: '🏅', title: 'Achievements', blurb: 'XP, levels, badges.' },
  { screen: 'plating', icon: '🍽️', title: 'Plating Tips', blurb: 'Restaurant presentation.' },
  { screen: 'share', icon: '🔗', title: 'Share Recipe', blurb: 'Link, QR, social preview.' },
];

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
  const [leftoverSeed, setLeftoverSeed] = useState<string[]>([]);
  const [syncNote, setSyncNote] = useState('');

  useEffect(() => {
    const stored = loadTasteMemory();
    setMemory(stored);
    document.documentElement.dataset.chefTheme = stored.theme;
    void (async () => {
      const pulled = await pullCloudSync();
      if (pulled?.preferences) setMemory(loadTasteMemory());
    })();
  }, []);

  const theme = memory.theme;
  const shellStyle = useMemo(() => ({ fontFamily: 'Outfit, system-ui, sans-serif' }), []);

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light';
    const updated = saveTasteMemory({ theme: next });
    setMemory(updated);
    document.documentElement.dataset.chefTheme = next;
  }

  async function syncNow() {
    setSyncNote('Syncing…');
    const ok = await pushCloudSync();
    setSyncNote(ok ? 'Synced to cloud.' : 'Offline cache only (sign in to sync).');
    window.setTimeout(() => setSyncNote(''), 2800);
  }

  function goHome() {
    setScreen('home');
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
      const nextRecipes: ChefRecipe[] = Array.isArray(data.recipes) ? data.recipes : [];
      setRecipes(nextRecipes);
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
          ? [payload.prefs.time, ...memory.preferredTimes.filter((t) => t !== payload.prefs?.time)].slice(
              0,
              4,
            )
          : memory.preferredTimes,
      });
      setMemory(updated);

      if (nextRecipes.length) {
        mergeGroceryFromRecipes(
          nextRecipes.map((r) => r.name),
          nextRecipes.flatMap((r) =>
            (r.missingIngredients || []).map((name) => ({ name, category: 'Pantry', quantity: 1 })),
          ),
        );
      }
    } catch {
      setError('I hit a kitchen snag. Try again in a moment.');
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  }

  function logCooked(recipe: ChefRecipe) {
    const history = loadHistory();
    saveHistory([
      {
        id: uid('hist'),
        recipe: recipe.name,
        date: new Date().toISOString(),
        rating: 5,
        timeMinutes: recipe.timeMinutes,
        calories: recipe.calories,
        protein: recipe.protein,
        difficulty: recipe.difficulty,
        favorite: false,
      },
      ...history,
    ].slice(0, 200));
    const nutrition = loadNutrition();
    const today = new Date().toISOString().slice(0, 10);
    const existing = nutrition.find((d) => d.date === today);
    if (existing) {
      existing.calories += recipe.calories;
      existing.protein += recipe.protein;
      existing.carbs += recipe.carbs;
      existing.fat += recipe.fat;
      existing.fiber += 4;
      saveNutrition([...nutrition]);
    } else {
      saveNutrition([
        {
          date: today,
          calories: recipe.calories,
          protein: recipe.protein,
          carbs: recipe.carbs,
          fat: recipe.fat,
          fiber: 4,
        },
        ...nutrition,
      ]);
    }
    addXp(25, 'first_meal');
  }

  return (
    <div className={styles.shell} data-theme={theme} style={shellStyle}>
      <header className={styles.topBar}>
        <button type="button" className={styles.brand} onClick={goHome} style={{ cursor: 'pointer', border: 0, background: 'transparent', textAlign: 'left', padding: 0 }}>
          <div className={styles.brandMark}>MealGenie</div>
          <div className={styles.brandSub}>Your AI personal chef</div>
        </button>
        <div className={styles.topActions}>
          <button type="button" className={styles.iconBtn} aria-label="Sync cloud" onClick={() => void syncNow()}>
            ☁
          </button>
          <button type="button" className={styles.iconBtn} aria-label="Open pantry" onClick={() => setScreen('pantry')}>
            🧺
          </button>
          <button type="button" className={styles.iconBtn} aria-label="Toggle theme" onClick={toggleTheme}>
            {theme === 'light' ? '☾' : '☀'}
          </button>
          <button type="button" className={styles.iconBtn} aria-label="Open voice chef" onClick={() => setVoiceOpen(true)}>
            🎤
          </button>
          <HeaderAuthControls />
        </div>
      </header>
      {syncNote && <p className={styles.syncToast}>{syncNote}</p>}

      <main className={styles.main}>
        {screen === 'home' && (
          <section>
            <div className={styles.hero}>
              <div className={styles.heroEyebrow}>Jarvis for cooking</div>
              <h1>What are we cooking tonight?</h1>
              <p>
                Scan your fridge, plan the week, track nutrition, and cook with an upgraded voice
                chef — all in one kitchen OS.
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
                <p>Diet, mood, time, and cuisine — then ranked recipes.</p>
              </button>
              <button
                type="button"
                className={styles.modeCard}
                onClick={() => {
                  setLeftoverSeed([]);
                  setMode('leftovers');
                  setScreen('leftovers');
                }}
              >
                <div className={styles.modeIcon}>🥡</div>
                <h2>Cook with Leftovers</h2>
                <p>Type, speak, scan fridge, or pull from pantry.</p>
              </button>
              <button type="button" className={styles.modeCard} onClick={() => setScreen('pantry')}>
                <div className={styles.modeIcon}>🧺</div>
                <h2>Pantry Inventory</h2>
                <p>Quantities, expiry, and leftovers auto-fill.</p>
              </button>
            </div>

            <h2 className={styles.hubTitle}>Kitchen tools</h2>
            <div className={styles.hubGrid}>
              {HUB.map((item) => (
                <button
                  key={item.screen}
                  type="button"
                  className={styles.hubCard}
                  onClick={() => setScreen(item.screen)}
                >
                  <span className={styles.hubIcon}>{item.icon}</span>
                  <strong>{item.title}</strong>
                  <span>{item.blurb}</span>
                </button>
              ))}
            </div>
          </section>
        )}

        {screen === 'cook-normally' && (
          <CookNormallyFlow
            memory={memory}
            onBack={goHome}
            onComplete={(prefs) => requestRecipes({ mode: 'normally', prefs })}
          />
        )}

        {screen === 'leftovers' && (
          <LeftoversFlow
            memory={memory}
            initialIngredients={leftoverSeed}
            onBack={goHome}
            onComplete={(leftovers) => requestRecipes({ mode: 'leftovers', leftovers })}
            onOpenPantry={() => setScreen('pantry')}
          />
        )}

        {screen === 'pantry' && (
          <PantryPanel
            onBack={goHome}
            onUseInLeftovers={(names) => {
              setLeftoverSeed(names);
              setMode('leftovers');
              setScreen('leftovers');
            }}
          />
        )}

        {screen === 'planner' && <MealPlannerPanel onBack={goHome} />}
        {screen === 'grocery' && (
          <GroceryListPanel onBack={goHome} onOpenDelivery={() => setScreen('delivery')} />
        )}
        {screen === 'budget' && <BudgetPanel onBack={goHome} />}
        {screen === 'family' && <FamilyPanel onBack={goHome} />}
        {screen === 'history' && (
          <MealHistoryPanel
            onBack={goHome}
            onCookAgain={(name) => {
              setLeftoverSeed([]);
              setMode('normally');
              setSelected({
                id: 'again',
                name,
                matchScore: 90,
                why: 'Cook again from history.',
                calories: 400,
                protein: 25,
                carbs: 40,
                fat: 12,
                difficulty: 'easy',
                timeMinutes: 25,
                estimatedCost: '$6',
                ingredients: [],
                missingIngredients: [],
                steps: ['Prep ingredients.', 'Cook as you remember.', 'Plate and enjoy.'],
                substitutions: [],
              });
              setScreen('detail');
            }}
          />
        )}
        {screen === 'nutrition' && <NutritionDashboard onBack={goHome} />}
        {screen === 'plating' && <PlatingTipsPanel onBack={goHome} recipe={selected} />}
        {screen === 'seasonal' && (
          <SeasonalPanel
            onBack={goHome}
            onCook={(name) => {
              setLeftoverSeed([name]);
              setMode('leftovers');
              setScreen('leftovers');
            }}
          />
        )}
        {screen === 'barcode' && (
          <BarcodeScannerPanel onBack={goHome} onOpenPantry={() => setScreen('pantry')} />
        )}
        {screen === 'delivery' && <GroceryDeliveryPanel onBack={goHome} />}
        {screen === 'achievements' && <AchievementsPanel onBack={goHome} />}
        {screen === 'share' && <RecipeSharePanel onBack={goHome} recipe={selected} />}

        {screen === 'results' && (
          <RecipeResults
            loading={loading}
            error={error}
            chefNote={chefNote}
            recipes={recipes}
            mode={mode}
            onBack={() => setScreen(mode === 'leftovers' ? 'leftovers' : 'cook-normally')}
            onHome={goHome}
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
            onBack={() => setScreen(recipes.length ? 'results' : 'home')}
            onCookWithVoice={() => setVoiceOpen(true)}
            onPlating={() => setScreen('plating')}
            onShare={() => setScreen('share')}
            onMarkCooked={() => logCooked(selected)}
          />
        )}
      </main>

      {voiceOpen && <VoiceChef recipe={selected} onClose={() => setVoiceOpen(false)} />}
    </div>
  );
}
