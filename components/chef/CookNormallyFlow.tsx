'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from '@/components/chef/chef.module.css';
import {
  ALLERGY_OPTIONS,
  CUISINE_OPTIONS,
  DIETARY_OPTIONS,
  GOAL_OPTIONS,
  MOOD_OPTIONS,
  SKILL_OPTIONS,
  TIME_OPTIONS,
} from '@/lib/chef/options';
import type {
  Allergy,
  CookNormallyPrefs,
  CuisineChoice,
  DietaryPref,
  Goal,
  Mood,
  SkillLevel,
  TimeBudget,
  UserTasteMemory,
} from '@/lib/chef/types';

const STEPS = [
  'dietary',
  'allergies',
  'goal',
  'mood',
  'time',
  'skill',
  'cuisine',
  'people',
  'budget',
] as const;

type Step = (typeof STEPS)[number];

const PROMPTS: Record<Step, string> = {
  dietary: 'Any dietary preference today?',
  allergies: 'Anything we should avoid?',
  goal: 'What’s the goal for this meal?',
  mood: 'What kind of vibe are you craving?',
  time: 'How much time do you have?',
  skill: 'How confident are you in the kitchen?',
  cuisine: 'Pick a cuisine — or let me surprise you.',
  people: 'How many people are we cooking for?',
  budget: 'Any budget in mind? (optional)',
};

type Props = {
  memory: UserTasteMemory;
  onBack: () => void;
  onComplete: (prefs: CookNormallyPrefs) => void;
};

export function CookNormallyFlow({ memory, onBack, onComplete }: Props) {
  const [stepIndex, setStepIndex] = useState(0);
  const [prefs, setPrefs] = useState<CookNormallyPrefs>({
    dietary: memory.dietary ?? 'none',
    allergies: memory.allergies ?? [],
    goal: memory.goal ?? 'balanced',
    mood: 'comfort',
    time: memory.preferredTimes[0] ?? '30',
    skill: 'intermediate',
    cuisine: 'surprise',
    people: 2,
    budget: '',
  });

  useEffect(() => {
    const favorite = memory.favoriteCuisines[0];
    if (favorite && CUISINE_OPTIONS.some((c) => c.id === favorite)) {
      setPrefs((p) => ({ ...p, cuisine: favorite as CuisineChoice }));
    }
  }, [memory.favoriteCuisines]);

  const step = STEPS[stepIndex];
  const progress = ((stepIndex + 1) / STEPS.length) * 100;

  const canContinue = useMemo(() => {
    if (step === 'people') return prefs.people >= 1;
    return true;
  }, [prefs.people, step]);

  function toggleAllergy(id: Allergy) {
    setPrefs((prev) => ({
      ...prev,
      allergies: prev.allergies.includes(id)
        ? prev.allergies.filter((a) => a !== id)
        : [...prev.allergies, id],
    }));
  }

  function next() {
    if (stepIndex >= STEPS.length - 1) {
      onComplete(prefs);
      return;
    }
    setStepIndex((i) => i + 1);
  }

  return (
    <section className={styles.panel}>
      <div className={styles.panelHeader}>
        <div>
          <h2>Cook Normally</h2>
          <p>Quick questions — then I’ll plate up ranked ideas.</p>
        </div>
        <button type="button" className={styles.ghostBtn} onClick={onBack}>
          Back
        </button>
      </div>

      <div className={styles.progress} aria-hidden>
        <span style={{ width: `${progress}%` }} />
      </div>

      <div className={styles.chefBubble}>
        <div className={styles.chefAvatar}>👨‍🍳</div>
        <div>{PROMPTS[step]}</div>
      </div>

      {step === 'dietary' && (
        <div className={styles.choiceGrid}>
          {DIETARY_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={styles.chip}
              data-active={prefs.dietary === opt.id}
              onClick={() => setPrefs((p) => ({ ...p, dietary: opt.id as DietaryPref }))}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {step === 'allergies' && (
        <div className={styles.choiceGrid}>
          {ALLERGY_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={styles.chip}
              data-active={prefs.allergies.includes(opt.id)}
              onClick={() => toggleAllergy(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {step === 'goal' && (
        <div className={styles.choiceGrid}>
          {GOAL_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={styles.chip}
              data-active={prefs.goal === opt.id}
              onClick={() => setPrefs((p) => ({ ...p, goal: opt.id as Goal }))}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {step === 'mood' && (
        <div className={styles.choiceGrid}>
          {MOOD_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={styles.chip}
              data-active={prefs.mood === opt.id}
              onClick={() => setPrefs((p) => ({ ...p, mood: opt.id as Mood }))}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {step === 'time' && (
        <div className={styles.choiceGrid}>
          {TIME_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={styles.chip}
              data-active={prefs.time === opt.id}
              onClick={() => setPrefs((p) => ({ ...p, time: opt.id as TimeBudget }))}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {step === 'skill' && (
        <div className={styles.choiceGrid}>
          {SKILL_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={styles.chip}
              data-active={prefs.skill === opt.id}
              onClick={() => setPrefs((p) => ({ ...p, skill: opt.id as SkillLevel }))}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {step === 'cuisine' && (
        <div className={styles.choiceGrid}>
          {CUISINE_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={styles.chip}
              data-active={prefs.cuisine === opt.id}
              onClick={() => setPrefs((p) => ({ ...p, cuisine: opt.id as CuisineChoice }))}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {step === 'people' && (
        <input
          className={styles.field}
          type="number"
          min={1}
          max={20}
          value={prefs.people}
          onChange={(e) =>
            setPrefs((p) => ({ ...p, people: Math.max(1, Number(e.target.value) || 1) }))
          }
          aria-label="Number of people"
        />
      )}

      {step === 'budget' && (
        <input
          className={styles.field}
          type="text"
          placeholder="e.g. under $15, flexible…"
          value={prefs.budget}
          onChange={(e) => setPrefs((p) => ({ ...p, budget: e.target.value }))}
          aria-label="Budget"
        />
      )}

      <div className={styles.row}>
        <button
          type="button"
          className={styles.ghostBtn}
          onClick={() => (stepIndex === 0 ? onBack() : setStepIndex((i) => i - 1))}
        >
          {stepIndex === 0 ? 'Cancel' : 'Previous'}
        </button>
        <button
          type="button"
          className={styles.primaryBtn}
          disabled={!canContinue}
          onClick={next}
        >
          {stepIndex === STEPS.length - 1 ? 'Find recipes' : 'Continue'}
        </button>
      </div>
    </section>
  );
}
