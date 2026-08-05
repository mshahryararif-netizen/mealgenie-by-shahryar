'use client';

import chef from '@/components/chef/chef.module.css';
import styles from '@/components/chef/features.module.css';
import type { ChefRecipe } from '@/lib/chef/types';

type Props = {
  onBack: () => void;
  recipe?: ChefRecipe | null;
};

export function PlatingTipsPanel({ onBack, recipe }: Props) {
  const name = recipe?.name || 'Your dish';
  const tips = [
    {
      title: 'Portion architecture',
      body: `Anchor ${name} slightly off-center. Keep quiet negative space on one side so the plate can breathe.`,
    },
    {
      title: 'Color balance',
      body: 'Add one bright garnish (herbs, citrus zest, chili oil) against a neutral base for restaurant contrast.',
    },
    {
      title: 'Garnish',
      body: 'Finish with flaky salt and a soft herb. Wipe the rim before serving.',
    },
    {
      title: 'Height & texture',
      body: 'Nest components lightly for dimension. Crisp on soft creates appetite appeal.',
    },
    {
      title: 'Serving suggestion',
      body: 'Warm plates for hot mains. Offer sauces on the side so guests control intensity.',
    },
  ];

  return (
    <section className={chef.panel}>
      <div className={chef.panelHeader}>
        <div>
          <h2>AI Plating Assistant</h2>
          <p>Elegant presentation tips for {name}.</p>
        </div>
        <button type="button" className={chef.ghostBtn} onClick={onBack}>
          Back
        </button>
      </div>

      <div className={styles.card}>
        <div
          style={{
            height: 180,
            borderRadius: 16,
            background:
              'linear-gradient(135deg, rgba(31,111,84,.25), rgba(196,122,58,.2)), #1a211c',
            display: 'grid',
            placeItems: 'center',
            color: '#fff',
            fontWeight: 600,
          }}
        >
          AI plating image placeholder
        </div>
        <p className={styles.muted} style={{ marginTop: 10 }}>
          Future: generate a plating mockup from the recipe photo style.
        </p>
      </div>

      <div className={styles.cards}>
        {tips.map((tip) => (
          <article key={tip.title} className={styles.card}>
            <h3>{tip.title}</h3>
            <p className={styles.muted}>{tip.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
