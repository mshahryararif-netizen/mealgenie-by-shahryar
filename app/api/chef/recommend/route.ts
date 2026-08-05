import { NextResponse } from 'next/server';
import {
  buildFallbackRecommendations,
  buildRecommendPrompt,
} from '@/lib/chef/recommend';
import type { ChefRecipe, CookMode, CookNormallyPrefs, LeftoversInput } from '@/lib/chef/types';
import { badRequest, tooManyRequests } from '@/lib/server/errors';
import { callOpenRouter } from '@/lib/server/openrouter';
import { isRateLimited } from '@/lib/server/rate-limit';

type RecommendBody = {
  mode?: CookMode;
  prefs?: CookNormallyPrefs;
  leftovers?: LeftoversInput;
  memory?: {
    favoriteCuisines?: string[];
    dislikedIngredients?: string[];
  };
};

function extractJson(text: string): unknown {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const raw = fenced?.[1]?.trim() || text.trim();
  const start = raw.indexOf('{');
  const end = raw.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('No JSON object');
  return JSON.parse(raw.slice(start, end + 1));
}

function normalizeRecipes(value: unknown): ChefRecipe[] | null {
  if (!value || typeof value !== 'object') return null;
  const recipes = (value as { recipes?: unknown }).recipes;
  if (!Array.isArray(recipes) || recipes.length === 0) return null;

  return recipes.slice(0, 6).map((item, index) => {
    const r = (item ?? {}) as Record<string, unknown>;
    const ingredients = Array.isArray(r.ingredients)
      ? r.ingredients.map((ing) => {
          const row = (ing ?? {}) as Record<string, unknown>;
          return {
            name: String(row.name ?? 'Ingredient'),
            amount: String(row.amount ?? 'as needed'),
            owned: Boolean(row.owned),
          };
        })
      : [];

    return {
      id: String(r.id ?? `ai-${index}`),
      name: String(r.name ?? `Chef special ${index + 1}`),
      icon: String(r.icon ?? '🍳'),
      image: typeof r.image === 'string' ? r.image : undefined,
      matchScore: Number(r.matchScore ?? 80 - index * 5),
      why: String(r.why ?? 'A solid match for your preferences.'),
      tip: typeof r.tip === 'string' ? r.tip : undefined,
      calories: Number(r.calories ?? 400),
      protein: Number(r.protein ?? 20),
      carbs: Number(r.carbs ?? 40),
      fat: Number(r.fat ?? 15),
      difficulty: String(r.difficulty ?? 'Easy'),
      timeMinutes: Number(r.timeMinutes ?? 25),
      estimatedCost: String(r.estimatedCost ?? '$8–12'),
      ingredients,
      missingIngredients: Array.isArray(r.missingIngredients)
        ? r.missingIngredients.map(String)
        : ingredients.filter((i) => !i.owned).map((i) => i.name),
      missingCost: typeof r.missingCost === 'string' ? r.missingCost : undefined,
      steps: Array.isArray(r.steps) ? r.steps.map(String) : ['Prep ingredients.', 'Cook thoughtfully.', 'Taste and serve.'],
      substitutions: Array.isArray(r.substitutions)
        ? r.substitutions.map((s) => {
            const row = (s ?? {}) as Record<string, unknown>;
            return { from: String(row.from ?? ''), to: String(row.to ?? '') };
          })
        : [],
      nutritionFacts: typeof r.nutritionFacts === 'string' ? r.nutritionFacts : undefined,
      cuisine: typeof r.cuisine === 'string' ? r.cuisine : undefined,
    };
  });
}

export async function POST(request: Request) {
  if (isRateLimited(request)) {
    return tooManyRequests();
  }

  let body: RecommendBody;
  try {
    body = (await request.json()) as RecommendBody;
  } catch {
    return badRequest('Invalid JSON body.');
  }

  if (body.mode !== 'normally' && body.mode !== 'leftovers') {
    return badRequest('mode must be normally or leftovers.');
  }

  const fallback = buildFallbackRecommendations({
    mode: body.mode,
    prefs: body.prefs,
    leftovers: body.leftovers,
  });

  const prompt = buildRecommendPrompt({
    mode: body.mode,
    prefs: body.prefs,
    leftovers: body.leftovers,
    memory: body.memory,
  });

  const result = await callOpenRouter(request, {
    model: 'anthropic/claude-3-haiku',
    temperature: 0.6,
    max_tokens: 2500,
    messages: [
      { role: 'system', content: prompt },
      {
        role: 'user',
        content:
          body.mode === 'normally'
            ? 'Generate ranked personalized recipes for Cook Normally.'
            : 'Generate ranked leftover-minimizing recipes from my ingredients.',
      },
    ],
  });

  if (!result.ok) {
    return NextResponse.json({
      source: 'fallback',
      recipes: fallback,
      chefNote:
        'I prepared solid recommendations offline. Connect AI for even smarter personalization.',
    });
  }

  try {
    const content = result.data.choices?.[0]?.message?.content ?? '';
    const parsed = extractJson(content);
    const recipes = normalizeRecipes(parsed);
    if (!recipes?.length) throw new Error('empty');

    return NextResponse.json({
      source: 'ai',
      recipes: recipes.sort((a, b) => b.matchScore - a.matchScore),
      chefNote: 'Here’s what I’d cook for you — ranked from best match to solid backups.',
    });
  } catch {
    return NextResponse.json({
      source: 'fallback',
      recipes: fallback,
      chefNote: 'AI response was incomplete, so I served trusted kitchen picks instead.',
    });
  }
}
