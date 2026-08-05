import { CATALOG_INGREDIENTS } from '@/lib/chef/ingredients';
import type { DetectedIngredient, FridgeScanResult } from '@/lib/chef/fridge-types';

const CATALOG_BY_NAME = new Map(
  CATALOG_INGREDIENTS.map((item) => [item.name.toLowerCase(), item.name]),
);

function titleCase(value: string): string {
  return value
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ');
}

function normalizeName(raw: string): string {
  const cleaned = raw
    .replace(/[^a-zA-Z0-9\s/-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

  if (!cleaned) return '';

  const catalogHit = CATALOG_BY_NAME.get(cleaned);
  if (catalogHit) return catalogHit;

  for (const [key, name] of CATALOG_BY_NAME) {
    if (cleaned.includes(key) || key.includes(cleaned)) return name;
  }

  return titleCase(cleaned);
}

export function parseFridgeAiPayload(raw: unknown): FridgeScanResult | null {
  if (!raw || typeof raw !== 'object') return null;
  const record = raw as Record<string, unknown>;
  const list = Array.isArray(record.ingredients) ? record.ingredients : null;
  if (!list) return null;

  const ingredients: DetectedIngredient[] = [];
  const seen = new Set<string>();

  for (const item of list) {
    if (!item || typeof item !== 'object') continue;
    const row = item as Record<string, unknown>;
    const name = normalizeName(String(row.name ?? ''));
    if (!name) continue;
    const key = name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);

    const confidenceRaw = Number(row.confidence);
    const confidence = Number.isFinite(confidenceRaw)
      ? Math.max(0, Math.min(1, confidenceRaw > 1 ? confidenceRaw / 100 : confidenceRaw))
      : 0.5;

    ingredients.push({
      name,
      confidence,
      notes: typeof row.notes === 'string' ? row.notes : undefined,
    });
  }

  ingredients.sort((a, b) => b.confidence - a.confidence);

  const qualityRaw = String(record.imageQuality ?? 'unknown').toLowerCase();
  const imageQuality =
    qualityRaw === 'good' ||
    qualityRaw === 'ok' ||
    qualityRaw === 'blurry' ||
    qualityRaw === 'dark'
      ? qualityRaw
      : 'unknown';

  return {
    ingredients: ingredients.slice(0, 24),
    imageQuality,
    qualityMessage:
      typeof record.qualityMessage === 'string' ? record.qualityMessage : undefined,
    chefNote: typeof record.chefNote === 'string' ? record.chefNote : undefined,
  };
}

export function extractJsonObject(text: string): unknown {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const raw = fenced?.[1]?.trim() || text.trim();
  const start = raw.indexOf('{');
  const end = raw.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('No JSON object found');
  return JSON.parse(raw.slice(start, end + 1));
}

export const FRIDGE_SCAN_SYSTEM_PROMPT = [
  'You are MealGenie vision chef. Analyze a fridge / leftover photo.',
  'Return ONLY valid JSON with this shape:',
  '{',
  '  "imageQuality": "good" | "ok" | "blurry" | "dark",',
  '  "qualityMessage": "short note about photo quality",',
  '  "chefNote": "friendly one-line summary",',
  '  "ingredients": [',
  '    { "name": "Tomato", "confidence": 0.0-1.0, "notes": "optional" }',
  '  ]',
  '}',
  'Rules:',
  '- Only include edible grocery ingredients you can reasonably see.',
  '- Prefer common kitchen names (Chicken, Milk, Spinach).',
  '- confidence must be 0-1.',
  '- If the image is too blurry/dark to trust, set imageQuality accordingly and return fewer/uncertain items.',
  '- Never invent packaged brand claims. Do not include appliances or containers as ingredients.',
].join('\n');
