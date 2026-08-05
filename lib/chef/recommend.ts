import type { ChefRecipe, CookMode, CookNormallyPrefs, LeftoversInput } from '@/lib/chef/types';

const FALLBACK_RECIPES: ChefRecipe[] = [
  {
    id: 'fallback-1',
    name: 'Garlic Herb Chicken Bowl',
    icon: '🍗',
    matchScore: 96,
    why: 'High-protein, weeknight-friendly, and flexible with whatever greens you have.',
    tip: 'Rest the chicken 3 minutes before slicing so it stays juicy.',
    calories: 480,
    protein: 42,
    carbs: 38,
    fat: 16,
    difficulty: 'Easy',
    timeMinutes: 25,
    estimatedCost: '$8–12',
    ingredients: [
      { name: 'Chicken', amount: '300g', owned: true },
      { name: 'Rice', amount: '1 cup', owned: true },
      { name: 'Garlic', amount: '3 cloves', owned: true },
      { name: 'Olive Oil', amount: '1 tbsp', owned: false },
      { name: 'Spinach', amount: '2 cups', owned: false },
    ],
    missingIngredients: ['Olive Oil', 'Spinach'],
    missingCost: '~$4',
    steps: [
      'Season chicken with salt, pepper, and minced garlic.',
      'Pan-sear in a little oil until golden and cooked through.',
      'Cook rice meanwhile.',
      'Wilt spinach in the same pan.',
      'Slice chicken and serve over rice with spinach.',
    ],
    substitutions: [
      { from: 'Chicken', to: 'Tofu' },
      { from: 'Rice', to: 'Quinoa' },
    ],
    nutritionFacts: 'Balanced macros with strong protein for recovery or satiety.',
    cuisine: 'American',
  },
  {
    id: 'fallback-2',
    name: 'Tomato Basil Pasta',
    icon: '🍝',
    matchScore: 88,
    why: 'Comforting, quick, and easy to scale for more people on a budget.',
    tip: 'Save pasta water — it makes the sauce silky.',
    calories: 520,
    protein: 18,
    carbs: 72,
    fat: 18,
    difficulty: 'Easy',
    timeMinutes: 20,
    estimatedCost: '$6–9',
    ingredients: [
      { name: 'Pasta', amount: '250g', owned: true },
      { name: 'Tomato', amount: '4', owned: true },
      { name: 'Garlic', amount: '4 cloves', owned: true },
      { name: 'Basil', amount: '1/4 cup', owned: false },
      { name: 'Olive Oil', amount: '2 tbsp', owned: false },
    ],
    missingIngredients: ['Basil', 'Olive Oil'],
    missingCost: '~$3',
    steps: [
      'Boil pasta in salted water.',
      'Sauté garlic in olive oil.',
      'Add chopped tomatoes and simmer 8–10 minutes.',
      'Toss pasta with sauce and pasta water.',
      'Finish with torn basil.',
    ],
    substitutions: [
      { from: 'Basil', to: 'Oregano' },
      { from: 'Pasta', to: 'Zucchini noodles' },
    ],
    nutritionFacts: 'Carb-forward comfort meal; add chicken or chickpeas for protein.',
    cuisine: 'Italian',
  },
  {
    id: 'fallback-3',
    name: 'Spiced Lentil Dal',
    icon: '🫘',
    matchScore: 84,
    why: 'Inexpensive, filling, and naturally high in plant protein.',
    tip: 'A final squeeze of lemon wakes up the whole pot.',
    calories: 340,
    protein: 22,
    carbs: 48,
    fat: 8,
    difficulty: 'Easy',
    timeMinutes: 30,
    estimatedCost: '$4–7',
    ingredients: [
      { name: 'Lentils', amount: '1 cup', owned: true },
      { name: 'Onion', amount: '1', owned: true },
      { name: 'Tomato', amount: '2', owned: true },
      { name: 'Turmeric', amount: '1/2 tsp', owned: false },
      { name: 'Cumin', amount: '1 tsp', owned: false },
    ],
    missingIngredients: ['Turmeric', 'Cumin'],
    missingCost: '~$2',
    steps: [
      'Rinse lentils and simmer with turmeric until soft.',
      'Sauté onion until golden.',
      'Add cumin and tomatoes; cook until saucy.',
      'Combine with lentils and simmer 5 minutes.',
      'Season and serve with rice or bread.',
    ],
    substitutions: [
      { from: 'Lentils', to: 'Chickpeas' },
      { from: 'Cumin', to: 'Paprika' },
    ],
    nutritionFacts: 'Fiber-rich and budget-friendly; great for leftovers.',
    cuisine: 'Indian',
  },
  {
    id: 'fallback-4',
    name: 'Veggie Egg Scramble',
    icon: '🍳',
    matchScore: 79,
    why: 'Ultra-fast breakfast-for-dinner option with solid protein.',
    tip: 'Cook eggs low and slow for creamier curds.',
    calories: 310,
    protein: 24,
    carbs: 12,
    fat: 20,
    difficulty: 'Easy',
    timeMinutes: 12,
    estimatedCost: '$3–5',
    ingredients: [
      { name: 'Egg', amount: '3', owned: true },
      { name: 'Spinach', amount: '1 cup', owned: true },
      { name: 'Onion', amount: '1/4', owned: true },
      { name: 'Cheese', amount: '2 tbsp', owned: false },
      { name: 'Butter', amount: '1 tsp', owned: false },
    ],
    missingIngredients: ['Cheese', 'Butter'],
    missingCost: '~$2',
    steps: [
      'Whisk eggs with a pinch of salt.',
      'Sauté onion briefly.',
      'Add spinach until wilted.',
      'Pour in eggs and gently scramble.',
      'Finish with cheese if using.',
    ],
    substitutions: [
      { from: 'Egg', to: 'Tofu scramble' },
      { from: 'Cheese', to: 'Nutritional yeast' },
    ],
    nutritionFacts: 'Low-carb friendly and ready in under 15 minutes.',
    cuisine: 'American',
  },
];

function scoreAdjust(prefs?: CookNormallyPrefs, owned?: string[]): ChefRecipe[] {
  const ownedSet = new Set((owned ?? []).map((i) => i.toLowerCase()));
  return FALLBACK_RECIPES.map((recipe, index) => {
    let score = recipe.matchScore - index * 3;
    const ingredients = recipe.ingredients.map((ing) => ({
      ...ing,
      owned: ownedSet.size ? ownedSet.has(ing.name.toLowerCase()) : ing.owned,
    }));
    const missingIngredients = ingredients
      .filter((ing) => !ing.owned)
      .map((ing) => ing.name);

    if (prefs?.goal === 'quick' && recipe.timeMinutes <= 20) score += 6;
    if (prefs?.goal === 'high_protein' && recipe.protein >= 30) score += 8;
    if (prefs?.goal === 'cheap' && recipe.estimatedCost.includes('$4')) score += 5;
    if (prefs?.mood === 'comfort' && /pasta|dal|chicken/i.test(recipe.name)) score += 4;
    if (prefs?.time === '10' && recipe.timeMinutes > 15) score -= 12;
    if (prefs?.dietary === 'vegetarian' && /chicken/i.test(recipe.name)) score -= 40;

    return {
      ...recipe,
      id: `${recipe.id}-${index}`,
      matchScore: Math.max(55, Math.min(99, score)),
      ingredients,
      missingIngredients,
    };
  }).sort((a, b) => b.matchScore - a.matchScore);
}

export function buildFallbackRecommendations(input: {
  mode: CookMode;
  prefs?: CookNormallyPrefs;
  leftovers?: LeftoversInput;
}): ChefRecipe[] {
  return scoreAdjust(input.prefs, input.leftovers?.ingredients);
}

export function buildRecommendPrompt(input: {
  mode: CookMode;
  prefs?: CookNormallyPrefs;
  leftovers?: LeftoversInput;
  memory?: {
    favoriteCuisines?: string[];
    dislikedIngredients?: string[];
  };
}): string {
  return [
    'You are MealGenie, a friendly personal chef AI (Jarvis for cooking).',
    'Return ONLY valid JSON: {"recipes":[...]} with 4-6 recipes ranked best to worst.',
    'Each recipe object must include:',
    'id, name, icon, matchScore (0-100), why, tip, calories, protein, carbs, fat,',
    'difficulty, timeMinutes, estimatedCost, ingredients[{name,amount,owned}],',
    'missingIngredients[], missingCost, steps[], substitutions[{from,to}], nutritionFacts, cuisine.',
    `Mode: ${input.mode}`,
    input.prefs ? `Preferences: ${JSON.stringify(input.prefs)}` : '',
    input.leftovers ? `Owned ingredients: ${JSON.stringify(input.leftovers.ingredients)}` : '',
    input.memory ? `Learned memory: ${JSON.stringify(input.memory)}` : '',
    'Be encouraging, practical, and waste-conscious. Avoid allergens when listed.',
    'Explain why each recipe fits in the "why" field.',
  ]
    .filter(Boolean)
    .join('\n');
}
