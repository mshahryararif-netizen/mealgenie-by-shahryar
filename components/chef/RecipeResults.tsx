'use client';

import styles from '@/components/chef/chef.module.css';
import type { ChefRecipe, CookMode } from '@/lib/chef/types';

type Props = {
  loading: boolean;
  error: string;
  chefNote: string;
  recipes: ChefRecipe[];
  mode: CookMode | null;
  onBack: () => void;
  onHome: () => void;
  onSelect: (recipe: ChefRecipe) => void;
  onRetry: () => void;
};

export function RecipeResults({
  loading,
  error,
  chefNote,
  recipes,
  mode,
  onBack,
  onHome,
  onSelect,
  onRetry,
}: Props) {
  return (
    <section className={styles.panel}>
      <div className={styles.panelHeader}>
        <div>
          <h2>{mode === 'leftovers' ? 'Leftover matches' : 'Your ranked menu'}</h2>
          <p>Best match first — with why each one fits you.</p>
        </div>
        <div className={styles.row} style={{ marginTop: 0 }}>
          <button type="button" className={styles.ghostBtn} onClick={onBack}>
            Back
          </button>
          <button type="button" className={styles.ghostBtn} onClick={onHome}>
            Home
          </button>
        </div>
      </div>

      {loading && (
        <div className={styles.loading}>
          <div className={styles.spinner} />
          <div>Thinking like your personal chef…</div>
        </div>
      )}

      {!loading && error && (
        <div className={styles.chefBubble}>
          <div className={styles.chefAvatar}>👨‍🍳</div>
          <div>
            {error}
            <div className={styles.row}>
              <button type="button" className={styles.primaryBtn} onClick={onRetry}>
                Try again
              </button>
            </div>
          </div>
        </div>
      )}

      {!loading && !error && (
        <>
          <div className={styles.chefBubble}>
            <div className={styles.chefAvatar}>👨‍🍳</div>
            <div>{chefNote}</div>
          </div>
          <div className={styles.recipeGrid}>
            {recipes.map((recipe) => (
              <button
                key={recipe.id}
                type="button"
                className={styles.recipeCard}
                onClick={() => onSelect(recipe)}
              >
                <div className={styles.recipeIcon}>{recipe.icon || '🍳'}</div>
                <div className={styles.recipeMeta}>
                  <h3>{recipe.name}</h3>
                  <p>{recipe.why}</p>
                  <div className={styles.stats}>
                    <span className={styles.stat}>{recipe.timeMinutes} min</span>
                    <span className={styles.stat}>{recipe.calories} kcal</span>
                    <span className={styles.stat}>{recipe.protein}g protein</span>
                    <span className={styles.stat}>{recipe.difficulty}</span>
                  </div>
                </div>
                <div className={styles.score}>{Math.round(recipe.matchScore)}</div>
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
