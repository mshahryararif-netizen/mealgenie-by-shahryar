'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '@/components/chef/chef.module.css';
import type { ChefRecipe } from '@/lib/chef/types';

type Props = {
  recipe: ChefRecipe | null;
  onClose: () => void;
};

type Msg = { role: 'user' | 'assistant'; text: string };

export function VoiceChef({ recipe, onClose }: Props) {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'assistant',
      text: recipe
        ? `Ready when you are. Say “next”, “repeat”, or ask a question while we cook ${recipe.name}.`
        : 'Ask me anything about cooking — substitutions, timing, or technique.',
    },
  ]);
  const [listening, setListening] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    return () => recognitionRef.current?.stop();
  }, []);

  function speak(text: string) {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  }

  async function askAi(prompt: string) {
    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'anthropic/claude-3-haiku',
          max_tokens: 300,
          temperature: 0.5,
          messages: [
            {
              role: 'system',
              content:
                'You are MealGenie, a friendly voice cooking coach. Keep answers short and practical.',
            },
            {
              role: 'user',
              content: recipe
                ? `Recipe: ${recipe.name}. Current step ${stepIndex + 1}: ${recipe.steps[stepIndex] ?? 'done'}. Question: ${prompt}`
                : prompt,
            },
          ],
        }),
      });
      const data = await response.json();
      return data?.choices?.[0]?.message?.content?.trim() || 'Let’s keep cooking — you’ve got this.';
    } catch {
      return 'I lost the connection for a second. Try that again.';
    }
  }

  async function handleCommand(raw: string) {
    const text = raw.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: 'user', text }]);

    const lower = text.toLowerCase();
    let reply = '';

    if (recipe && /\b(next|continue)\b/.test(lower)) {
      const next = Math.min(stepIndex + 1, recipe.steps.length - 1);
      setStepIndex(next);
      reply = `Step ${next + 1}: ${recipe.steps[next]}`;
    } else if (recipe && /\b(repeat|again)\b/.test(lower)) {
      reply = `Step ${stepIndex + 1}: ${recipe.steps[stepIndex]}`;
    } else if (recipe && /\b(start|begin)\b/.test(lower)) {
      setStepIndex(0);
      reply = `Step 1: ${recipe.steps[0]}`;
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
        { role: 'assistant', text: 'Voice isn’t available here. Type a question instead.' },
      ]);
      return;
    }

    const recognition = new SpeechRecognitionCtor();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognitionRef.current = recognition;
    setListening(true);

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0]?.[0]?.transcript ?? '';
      void handleCommand(transcript);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognition.start();
  }

  return (
    <aside className={styles.voicePanel} aria-label="Voice cooking assistant">
      <div className={styles.panelHeader} style={{ marginBottom: 8 }}>
        <div>
          <h2 style={{ fontSize: 20, margin: 0 }}>Voice chef</h2>
          <p style={{ margin: 0 }}>Hands-free cooking coach</p>
        </div>
        <button type="button" className={styles.ghostBtn} onClick={onClose}>
          Close
        </button>
      </div>

      <div className={styles.voiceLog}>
        {messages.map((msg, index) => (
          <div
            key={`${msg.role}-${index}`}
            className={styles.voiceMsg}
            data-role={msg.role}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className={styles.row}>
        <button
          type="button"
          className={styles.primaryBtn}
          onClick={listening ? () => recognitionRef.current?.stop() : startListening}
        >
          {listening ? 'Listening…' : 'Speak'}
        </button>
        {recipe && (
          <button
            type="button"
            className={styles.ghostBtn}
            onClick={() => void handleCommand('start')}
          >
            Start steps
          </button>
        )}
      </div>
    </aside>
  );
}
