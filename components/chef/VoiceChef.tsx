'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '@/components/chef/chef.module.css';
import type { ChefRecipe } from '@/lib/chef/types';

type Props = {
  recipe: ChefRecipe | null;
  onClose: () => void;
};

type Msg = { role: 'user' | 'assistant'; text: string };
type Lang = 'en-US' | 'es-ES' | 'fr-FR' | 'hi-IN' | 'ur-PK';
type Personality = 'calm' | 'energetic' | 'witty';

const LANG_LABEL: Record<Lang, string> = {
  'en-US': 'English',
  'es-ES': 'Español',
  'fr-FR': 'Français',
  'hi-IN': 'हिन्दी',
  'ur-PK': 'اردو',
};

export function VoiceChef({ recipe, onClose }: Props) {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'assistant',
      text: recipe
        ? `Hands-free mode ready for ${recipe.name}. Say “next”, “timer 5”, or interrupt me anytime.`
        : 'Ask me anything about cooking — substitutions, timing, or technique.',
    },
  ]);
  const [listening, setListening] = useState(false);
  const [handsFree, setHandsFree] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);
  const [lang, setLang] = useState<Lang>('en-US');
  const [personality, setPersonality] = useState<Personality>('calm');
  const [timerSec, setTimerSec] = useState<number | null>(null);
  const [typed, setTyped] = useState('');
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const continuousRef = useRef(true);
  const stepRef = useRef(0);
  const recipeRef = useRef(recipe);

  useEffect(() => {
    continuousRef.current = handsFree;
  }, [handsFree]);

  useEffect(() => {
    stepRef.current = stepIndex;
  }, [stepIndex]);

  useEffect(() => {
    recipeRef.current = recipe;
  }, [recipe]);

  useEffect(() => {
    if (timerSec === null) return;
    if (timerSec <= 0) {
      setTimerSec(null);
      const done = 'Timer done. Ready for the next step.';
      setMessages((prev) => [...prev, { role: 'assistant', text: done }]);
      speak(done);
      return;
    }
    const id = window.setTimeout(() => setTimerSec((s) => (s === null ? null : s - 1)), 1000);
    return () => window.clearTimeout(id);
  }, [timerSec]);

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
      if (typeof window !== 'undefined') window.speechSynthesis?.cancel();
    };
  }, []);

  function speak(text: string) {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang;
    utter.rate = personality === 'energetic' ? 1.15 : personality === 'witty' ? 1.05 : 0.95;
    utter.pitch = personality === 'witty' ? 1.1 : 1;
    window.speechSynthesis.speak(utter);
  }

  function interruptSpeech() {
    if (typeof window !== 'undefined') window.speechSynthesis?.cancel();
  }

  async function askAi(prompt: string) {
    const current = recipeRef.current;
    const step = stepRef.current;
    const tone =
      personality === 'energetic'
        ? 'Upbeat and motivating.'
        : personality === 'witty'
          ? 'Light humor, still clear.'
          : 'Calm, patient, and concise.';
    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'anthropic/claude-3-haiku',
          max_tokens: 280,
          temperature: 0.5,
          messages: [
            {
              role: 'system',
              content: `You are MealGenie voice chef. ${tone} Reply in ${LANG_LABEL[lang]}. Keep answers short for hands-free cooking. Remember recipe context when provided.`,
            },
            {
              role: 'user',
              content: current
                ? `Recipe: ${current.name}. Ingredients: ${current.ingredients.map((i) => i.name).join(', ')}. Current step ${step + 1}/${current.steps.length}: ${current.steps[step] ?? 'done'}. Question: ${prompt}`
                : prompt,
            },
          ],
        }),
      });
      const data = await response.json();
      return data?.choices?.[0]?.message?.content?.trim() || offlineFallback(prompt);
    } catch {
      return offlineFallback(prompt);
    }
  }

  function offlineFallback(prompt: string) {
    const current = recipeRef.current;
    if (current && /substitut/i.test(prompt)) {
      const sub = current.substitutions[0];
      return sub
        ? `Offline tip: try ${sub.to} instead of ${sub.from}.`
        : 'Offline tip: use a similar texture ingredient and taste as you go.';
    }
    if (current) {
      return `Offline mode. Step ${stepRef.current + 1}: ${current.steps[stepRef.current] ?? 'You’re finished.'}`;
    }
    return 'Offline mode is on. Check heat, season gradually, and taste before plating.';
  }

  async function handleCommand(raw: string) {
    const text = raw.trim();
    if (!text) return;
    interruptSpeech();
    setMessages((prev) => [...prev, { role: 'user', text }]);

    const lower = text.toLowerCase();
    let reply = '';
    const current = recipeRef.current;

    const timerMatch = lower.match(/\btimer\s+(\d+)\b/) || lower.match(/\b(\d+)\s*(min|minute|minutes|sec|seconds)\b/);
    if (timerMatch) {
      const n = Number(timerMatch[1]);
      const unit = timerMatch[2] || 'min';
      const seconds = /sec/.test(unit) ? n : n * 60;
      setTimerSec(seconds);
      reply = `Timer set for ${n} ${/sec/.test(unit) ? 'seconds' : 'minutes'}.`;
    } else if (/\b(stop|quiet|interrupt|shut up)\b/.test(lower)) {
      interruptSpeech();
      reply = 'Paused. I’m listening.';
    } else if (current && /\b(next|continue)\b/.test(lower)) {
      const next = Math.min(stepRef.current + 1, current.steps.length - 1);
      setStepIndex(next);
      reply = `Step ${next + 1}: ${current.steps[next]}`;
    } else if (current && /\b(back|previous)\b/.test(lower)) {
      const prev = Math.max(stepRef.current - 1, 0);
      setStepIndex(prev);
      reply = `Step ${prev + 1}: ${current.steps[prev]}`;
    } else if (current && /\b(repeat|again)\b/.test(lower)) {
      reply = `Step ${stepRef.current + 1}: ${current.steps[stepRef.current]}`;
    } else if (current && /\b(start|begin)\b/.test(lower)) {
      setStepIndex(0);
      reply = `Step 1: ${current.steps[0]}`;
    } else {
      reply = await askAi(text);
    }

    setMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
    speak(reply);
  }

  function startListening() {
    const SpeechRecognitionCtor =
      typeof window !== 'undefined'
        ? window.SpeechRecognition || window.webkitSpeechRecognition
        : undefined;

    if (!SpeechRecognitionCtor) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: 'Voice isn’t available here. Type below — offline fallback still works.' },
      ]);
      return;
    }

    interruptSpeech();
    const recognition = new SpeechRecognitionCtor();
    recognition.lang = lang;
    recognition.interimResults = false;
    recognition.continuous = handsFree;
    recognitionRef.current = recognition;
    setListening(true);

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const last = event.results[event.results.length - 1];
      const transcript = last?.[0]?.transcript ?? '';
      void handleCommand(transcript);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => {
      if (continuousRef.current && recognitionRef.current === recognition) {
        try {
          recognition.start();
          setListening(true);
          return;
        } catch {
          /* fall through */
        }
      }
      setListening(false);
    };
    recognition.start();
  }

  function stopListening() {
    continuousRef.current = false;
    setHandsFree(false);
    recognitionRef.current?.stop();
    setListening(false);
  }

  return (
    <aside className={styles.voicePanel} aria-label="Voice cooking assistant">
      <div className={styles.panelHeader} style={{ marginBottom: 8 }}>
        <div>
          <h2 style={{ fontSize: 20, margin: 0 }}>Voice chef</h2>
          <p style={{ margin: 0 }}>
            Continuous · interruptible · {recipe ? 'recipe-aware' : 'general coach'}
          </p>
        </div>
        <button type="button" className={styles.ghostBtn} onClick={onClose}>
          Close
        </button>
      </div>

      <div className={styles.row} style={{ flexWrap: 'wrap', marginBottom: 10 }}>
        <select
          className={styles.select}
          value={lang}
          onChange={(e) => setLang(e.target.value as Lang)}
          aria-label="Language"
        >
          {Object.entries(LANG_LABEL).map(([code, label]) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
        <select
          className={styles.select}
          value={personality}
          onChange={(e) => setPersonality(e.target.value as Personality)}
          aria-label="Personality"
        >
          <option value="calm">Calm</option>
          <option value="energetic">Energetic</option>
          <option value="witty">Witty</option>
        </select>
        <button
          type="button"
          className={styles.chip}
          data-active={handsFree}
          onClick={() => setHandsFree((v) => !v)}
        >
          Hands-free {handsFree ? 'on' : 'off'}
        </button>
        {timerSec !== null && (
          <span className={styles.stat}>
            ⏱ {Math.floor(timerSec / 60)}:{String(timerSec % 60).padStart(2, '0')}
          </span>
        )}
      </div>

      <div className={styles.voiceLog}>
        {messages.map((msg, index) => (
          <div key={`${msg.role}-${index}`} className={styles.voiceMsg} data-role={msg.role}>
            {msg.text}
          </div>
        ))}
      </div>

      <form
        className={styles.row}
        onSubmit={(e) => {
          e.preventDefault();
          const value = typed.trim();
          if (!value) return;
          setTyped('');
          void handleCommand(value);
        }}
      >
        <input
          className={styles.input}
          value={typed}
          onChange={(e) => setTyped(e.target.value)}
          placeholder="Type follow-up or “timer 5”…"
          aria-label="Type a cooking question"
        />
        <button type="submit" className={styles.ghostBtn}>
          Send
        </button>
      </form>

      <div className={styles.row}>
        <button
          type="button"
          className={styles.primaryBtn}
          onClick={listening ? stopListening : startListening}
        >
          {listening ? 'Stop listening' : 'Speak'}
        </button>
        <button type="button" className={styles.ghostBtn} onClick={interruptSpeech}>
          Interrupt AI
        </button>
        {recipe && (
          <button type="button" className={styles.ghostBtn} onClick={() => void handleCommand('start')}>
            Start steps
          </button>
        )}
      </div>
    </aside>
  );
}
