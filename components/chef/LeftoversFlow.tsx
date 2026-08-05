'use client';

import { useMemo, useRef, useState } from 'react';
import styles from '@/components/chef/chef.module.css';
import { FridgeScanPanel } from '@/components/chef/FridgeScanPanel';
import { CATALOG_INGREDIENTS, INGREDIENT_CATEGORIES } from '@/lib/chef/ingredients';
import type { LeftoversInput, UserTasteMemory } from '@/lib/chef/types';

type Tab = 'photo' | 'chips' | 'type' | 'voice';

type Props = {
  memory: UserTasteMemory;
  onBack: () => void;
  onComplete: (input: LeftoversInput) => void;
};

export function LeftoversFlow({ memory, onBack, onComplete }: Props) {
  const [tab, setTab] = useState<Tab>('photo');
  const [selected, setSelected] = useState<string[]>([]);
  const [typed, setTyped] = useState('');
  const [listening, setListening] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState('Tap the mic and say what you have.');
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const disliked = useMemo(
    () => new Set(memory.dislikedIngredients.map((i) => i.toLowerCase())),
    [memory.dislikedIngredients],
  );

  function toggleIngredient(name: string) {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
    );
  }

  function mergeIngredients(names: string[]) {
    setSelected((prev) => Array.from(new Set([...prev, ...names])));
  }

  function addTypedIngredients() {
    const parts = typed
      .split(/,|\n/)
      .map((p) => p.trim())
      .filter(Boolean);
    if (!parts.length) return;
    mergeIngredients(parts);
    setTyped('');
  }

  function startVoice() {
    const SpeechRecognitionCtor =
      typeof window !== 'undefined'
        ? window.SpeechRecognition || window.webkitSpeechRecognition
        : undefined;

    if (!SpeechRecognitionCtor) {
      setVoiceStatus('Voice input isn’t supported in this browser. Try typing or chips.');
      return;
    }

    const recognition = new SpeechRecognitionCtor();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.continuous = false;
    recognitionRef.current = recognition;
    setListening(true);
    setVoiceStatus('Listening… tell me what leftovers you have.');

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0]?.[0]?.transcript ?? '';
      const parts = transcript
        .split(/,| and /i)
        .map((p) => p.trim())
        .filter(Boolean);
      mergeIngredients(parts);
      setVoiceStatus(`Got it: ${transcript}`);
    };

    recognition.onerror = () => {
      setVoiceStatus('I couldn’t catch that. Try again or switch to chips.');
      setListening(false);
    };

    recognition.onend = () => setListening(false);
    recognition.start();
  }

  function stopVoice() {
    recognitionRef.current?.stop();
    setListening(false);
  }

  function submit() {
    const filtered = selected.filter((name) => !disliked.has(name.toLowerCase()));
    onComplete({ ingredients: filtered });
  }

  return (
    <section className={styles.panel}>
      <div className={styles.panelHeader}>
        <div>
          <h2>Cook with Leftovers</h2>
          <p>Scan your fridge, or add ingredients by voice, typing, or chips.</p>
        </div>
        <button type="button" className={styles.ghostBtn} onClick={onBack}>
          Back
        </button>
      </div>

      <div className={styles.chefBubble}>
        <div className={styles.chefAvatar}>👨‍🍳</div>
        <div>
          {selected.length
            ? `Nice — ${selected.length} ingredient${selected.length === 1 ? '' : 's'} locked in.`
            : 'Start with Scan My Fridge, or pick another input method.'}
        </div>
      </div>

      <div className={styles.tabs} role="tablist" aria-label="Ingredient input method">
        {(
          [
            ['photo', 'Scan fridge'],
            ['chips', 'Select chips'],
            ['type', 'Type'],
            ['voice', 'Voice'],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            className={styles.chip}
            data-active={tab === id}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'photo' && (
        <FridgeScanPanel
          onSwitchToManual={() => setTab('type')}
          onIngredientsConfirmed={(names) => {
            mergeIngredients(names);
          }}
        />
      )}

      {tab === 'type' && (
        <div>
          <textarea
            className={styles.textarea}
            placeholder="chicken, rice, onion…"
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
          />
          <div className={styles.row}>
            <button type="button" className={styles.primaryBtn} onClick={addTypedIngredients}>
              Add ingredients
            </button>
          </div>
        </div>
      )}

      {tab === 'voice' && (
        <div>
          <p className={styles.muted}>{voiceStatus}</p>
          <div className={styles.row}>
            <button
              type="button"
              className={styles.primaryBtn}
              onClick={listening ? stopVoice : startVoice}
            >
              {listening ? 'Stop listening' : 'Start voice'}
            </button>
          </div>
        </div>
      )}

      {tab === 'chips' && (
        <div>
          {INGREDIENT_CATEGORIES.map((cat) => (
            <div key={cat.id} style={{ marginBottom: 16 }}>
              <div className={styles.muted} style={{ marginBottom: 8, fontWeight: 600 }}>
                {cat.label}
              </div>
              <div className={styles.ingredientGrid}>
                {CATALOG_INGREDIENTS.filter((ing) => ing.cat === cat.id).map((ing) => (
                  <button
                    key={ing.id}
                    type="button"
                    className={styles.chip}
                    data-active={selected.includes(ing.name)}
                    onClick={() => toggleIngredient(ing.name)}
                  >
                    {ing.icon} {ing.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {selected.length > 0 && (
        <div className={styles.stats} style={{ marginTop: 16 }}>
          {selected.map((name) => (
            <button
              key={name}
              type="button"
              className={styles.stat}
              onClick={() => toggleIngredient(name)}
              title="Remove"
            >
              {name} ×
            </button>
          ))}
        </div>
      )}

      <div className={styles.row}>
        <button type="button" className={styles.ghostBtn} onClick={onBack}>
          Cancel
        </button>
        <button
          type="button"
          className={styles.primaryBtn}
          disabled={selected.length === 0}
          onClick={submit}
        >
          Recommend recipes
        </button>
      </div>
    </section>
  );
}
