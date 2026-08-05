/**
 * Future MealGenie capabilities — architecture hooks.
 * Keep this list as the north star; wire features into ChefApp / Prisma / APIs over time.
 */
export const FUTURE_FEATURES = [
  'AI voice cooking mode (present as VoiceChef v1)',
  'Voice conversations',
  'Fridge image recognition (present as FridgeScanPanel v1)',
  'Pantry inventory (present as PantryPanel v1 + localStorage)',
  'Weekly meal planner',
  'Grocery shopping list',
  'Budget tracking',
  'Family accounts',
  'Meal history',
  'Smart recipe recommendations',
  'Nutrition dashboard',
  'Restaurant-style plating tips',
  'Seasonal recipes',
  'AI-generated recipes',
  'Barcode scanner',
  'Grocery delivery integration',
  'Achievement system',
  'Cooking streaks',
  'Recipe sharing',
] as const;
