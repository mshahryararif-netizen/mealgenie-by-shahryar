'use client';

import styles from '@/components/chef/chef.module.css';
import type { ChefRecipe } from '@/lib/chef/types';

type Props = {
  recipe: ChefRecipe;
  onBack: () => void;
  onCookWithVoice: () => void;
  onPlating?: () => void;
  onShare?: () => void;
  onMarkCooked?: () => void;
};

export function RecipeDetail({
  recipe,
  onBack,
  onCookWithVoice,
  onPlating,
  onShare,
  onMarkCooked,
}: Props) {
  return (
    <section className={styles.panel}>
      <div className={styles.panelHeader}>
        <div>
          <h2>{recipe.name}</h2>
          <p>{recipe.why}</p>
        </div>
        <button type="button" className={styles.ghostBtn} onClick={onBack}>
          Back
        </button>
      </div>

      <div className={styles.detailLayout}>
        <div className={styles.detailHero}>
          <div className={styles.recipeIcon}>{recipe.icon || '🍳'}</div>
          <div>
            <div className={styles.stats}>
              <span className={styles.stat}>{recipe.calories} kcal</span>
              <span className={styles.stat}>P {recipe.protein}g</span>
              <span className={styles.stat}>C {recipe.carbs}g</span>
              <span className={styles.stat}>F {recipe.fat}g</span>
              <span className={styles.stat}>{recipe.timeMinutes} min</span>
              <span className={styles.stat}>{recipe.difficulty}</span>
              <span className={styles.stat}>{recipe.estimatedCost}</span>
            </div>
            {recipe.tip && (
              <p className={styles.muted} style={{ marginTop: 12 }}>
                Tip: {recipe.tip}
              </p>
            )}
          </div>
        </div>

        <div>
          <h3>Ingredients</h3>
          <ul className={styles.list}>
            {recipe.ingredients.map((ing) => (
              <li key={`${ing.name}-${ing.amount}`}>
                <strong>{ing.name}</strong> — {ing.amount}
                {typeof ing.owned === 'boolean' && (
                  <span> {ing.owned ? '(you have)' : '(need)'}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {recipe.missingIngredients?.length > 0 && (
          <div>
            <h3>Missing</h3>
            <p className={styles.muted}>
              {recipe.missingIngredients.join(', ')}
              {recipe.missingCost ? ` · about ${recipe.missingCost}` : ''}
            </p>
          </div>
        )}

        <div>
          <h3>Steps</h3>
          <ol className={styles.list}>
            {recipe.steps.map((step, index) => (
              <li key={`${index}-${step.slice(0, 12)}`}>{step}</li>
            ))}
          </ol>
        </div>

        {recipe.substitutions?.length > 0 && (
          <div>
            <h3>Substitutions</h3>
            <ul className={styles.list}>
              {recipe.substitutions.map((sub) => (
                <li key={`${sub.from}-${sub.to}`}>
                  {sub.from} → {sub.to}
                </li>
              ))}
            </ul>
          </div>
        )}

        {recipe.nutritionFacts && (
          <div>
            <h3>Nutrition notes</h3>
            <p className={styles.muted}>{recipe.nutritionFacts}</p>
          </div>
        )}

        <div className={styles.row}>
          <button type="button" className={styles.primaryBtn} onClick={onCookWithVoice}>
            Cook with voice chef
          </button>
          {onPlating && (
            <button type="button" className={styles.ghostBtn} onClick={onPlating}>
              Plating tips
            </button>
          )}
          {onShare && (
            <button type="button" className={styles.ghostBtn} onClick={onShare}>
              Share
            </button>
          )}
          {onMarkCooked && (
            <button type="button" className={styles.ghostBtn} onClick={onMarkCooked}>
              Mark cooked
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
