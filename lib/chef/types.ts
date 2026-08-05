export type CookMode = 'normally' | 'leftovers';

export type DietaryPref =
  | 'none'
  | 'vegetarian'
  | 'vegan'
  | 'halal'
  | 'keto'
  | 'gluten_free';

export type Allergy =
  | 'nuts'
  | 'dairy'
  | 'eggs'
  | 'seafood'
  | 'soy'
  | 'other';

export type Goal =
  | 'high_protein'
  | 'weight_loss'
  | 'balanced'
  | 'low_carb'
  | 'muscle_gain'
  | 'cheap'
  | 'quick';

export type Mood =
  | 'comfort'
  | 'healthy'
  | 'fancy'
  | 'spicy'
  | 'sweet'
  | 'fresh'
  | 'cozy'
  | 'party';

export type TimeBudget = '10' | '20' | '30' | '60';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export type CuisineChoice =
  | 'italian'
  | 'pakistani'
  | 'indian'
  | 'chinese'
  | 'mexican'
  | 'american'
  | 'turkish'
  | 'japanese'
  | 'surprise';

export type CookNormallyPrefs = {
  dietary: DietaryPref;
  allergies: Allergy[];
  goal: Goal;
  mood: Mood;
  time: TimeBudget;
  skill: SkillLevel;
  cuisine: CuisineChoice;
  people: number;
  budget: string;
};

export type LeftoversInput = {
  ingredients: string[];
  notes?: string;
};

export type ChefRecipe = {
  id: string;
  name: string;
  image?: string;
  icon?: string;
  matchScore: number;
  why: string;
  tip?: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  difficulty: string;
  timeMinutes: number;
  estimatedCost: string;
  ingredients: Array<{ name: string; amount: string; owned?: boolean }>;
  missingIngredients: string[];
  missingCost?: string;
  steps: string[];
  substitutions: Array<{ from: string; to: string }>;
  nutritionFacts?: string;
  cuisine?: string;
};

export type UserTasteMemory = {
  dietary?: DietaryPref;
  allergies: Allergy[];
  favoriteCuisines: string[];
  dislikedIngredients: string[];
  preferredTimes: TimeBudget[];
  goal?: Goal;
  theme: 'light' | 'dark';
  lastMode?: CookMode;
};

export type ChefScreen =
  | 'home'
  | 'cook-normally'
  | 'leftovers'
  | 'results'
  | 'detail'
  | 'voice';
