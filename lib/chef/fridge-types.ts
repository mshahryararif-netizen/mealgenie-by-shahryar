export type DetectedIngredient = {
  name: string;
  confidence: number;
  notes?: string;
};

export type FridgeScanResult = {
  ingredients: DetectedIngredient[];
  imageQuality: 'good' | 'ok' | 'blurry' | 'dark' | 'unknown';
  qualityMessage?: string;
  chefNote?: string;
};

export type FridgeScanResponse = {
  ok: true;
  source: 'ai' | 'partial';
  result: FridgeScanResult;
} | {
  ok: false;
  error: string;
  code: 'blurry' | 'empty' | 'upstream' | 'invalid' | 'missing_key' | 'timeout';
  allowManual: true;
};
