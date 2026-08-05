export {};

declare global {
  interface Window {
    SpeechRecognition?: typeof SpeechRecognition;
    webkitSpeechRecognition?: typeof SpeechRecognition;
  }

  // Minimal Web Speech API typings used by the chef voice flows.
  // Browsers vary; keep this intentionally light.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var SpeechRecognition: {
    new (): SpeechRecognition;
  };

  interface SpeechRecognition extends EventTarget {
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    onresult: ((event: SpeechRecognitionEvent) => void) | null;
    onerror: ((event: Event) => void) | null;
    onend: (() => void) | null;
    start: () => void;
    stop: () => void;
  }

  interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
  }

  interface SpeechRecognitionResultList {
    0: SpeechRecognitionResult;
    length: number;
  }

  interface SpeechRecognitionResult {
    0: SpeechRecognitionAlternative;
    length: number;
  }

  interface SpeechRecognitionAlternative {
    transcript: string;
  }
}
