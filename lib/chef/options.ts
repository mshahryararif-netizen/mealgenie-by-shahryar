import type {
  Allergy,
  CuisineChoice,
  DietaryPref,
  Goal,
  Mood,
  SkillLevel,
  TimeBudget,
} from '@/lib/chef/types';

export const DIETARY_OPTIONS: Array<{ id: DietaryPref; label: string; hint: string }> = [
  { id: 'none', label: 'None', hint: 'No restrictions' },
  { id: 'vegetarian', label: 'Vegetarian', hint: 'No meat' },
  { id: 'vegan', label: 'Vegan', hint: 'Plant-based' },
  { id: 'halal', label: 'Halal', hint: 'Halal only' },
  { id: 'keto', label: 'Keto', hint: 'Low carb' },
  { id: 'gluten_free', label: 'Gluten Free', hint: 'No gluten' },
];

export const ALLERGY_OPTIONS: Array<{ id: Allergy; label: string }> = [
  { id: 'nuts', label: 'Nuts' },
  { id: 'dairy', label: 'Dairy' },
  { id: 'eggs', label: 'Eggs' },
  { id: 'seafood', label: 'Seafood' },
  { id: 'soy', label: 'Soy' },
  { id: 'other', label: 'Other' },
];

export const GOAL_OPTIONS: Array<{ id: Goal; label: string }> = [
  { id: 'high_protein', label: 'High Protein' },
  { id: 'weight_loss', label: 'Weight Loss' },
  { id: 'balanced', label: 'Balanced' },
  { id: 'low_carb', label: 'Low Carb' },
  { id: 'muscle_gain', label: 'Muscle Gain' },
  { id: 'cheap', label: 'Cheap Meals' },
  { id: 'quick', label: 'Quick Meals' },
];

export const MOOD_OPTIONS: Array<{ id: Mood; label: string }> = [
  { id: 'comfort', label: 'Comfort Food' },
  { id: 'healthy', label: 'Healthy' },
  { id: 'fancy', label: 'Fancy' },
  { id: 'spicy', label: 'Spicy' },
  { id: 'sweet', label: 'Sweet' },
  { id: 'fresh', label: 'Fresh' },
  { id: 'cozy', label: 'Cozy' },
  { id: 'party', label: 'Party Food' },
];

export const TIME_OPTIONS: Array<{ id: TimeBudget; label: string }> = [
  { id: '10', label: '10 min' },
  { id: '20', label: '20 min' },
  { id: '30', label: '30 min' },
  { id: '60', label: '1 hour+' },
];

export const SKILL_OPTIONS: Array<{ id: SkillLevel; label: string }> = [
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' },
];

export const CUISINE_OPTIONS: Array<{ id: CuisineChoice; label: string }> = [
  { id: 'italian', label: 'Italian' },
  { id: 'pakistani', label: 'Pakistani' },
  { id: 'indian', label: 'Indian' },
  { id: 'chinese', label: 'Chinese' },
  { id: 'mexican', label: 'Mexican' },
  { id: 'american', label: 'American' },
  { id: 'turkish', label: 'Turkish' },
  { id: 'japanese', label: 'Japanese' },
  { id: 'surprise', label: 'Surprise Me' },
];

export const CHEF_STEPS = [
  { key: 'dietary', prompt: 'Any dietary preference today?', options: DIETARY_OPTIONS },
  { key: 'allergies', prompt: 'Anything we should avoid?', multi: true },
  { key: 'goal', prompt: 'What’s the goal for this meal?' },
  { key: 'mood', prompt: 'What kind of vibe are you craving?' },
  { key: 'time', prompt: 'How much time do you have?' },
  { key: 'skill', prompt: 'How confident are you in the kitchen?' },
  { key: 'cuisine', prompt: 'Pick a cuisine — or let me surprise you.' },
  { key: 'people', prompt: 'How many people are we cooking for?' },
  { key: 'budget', prompt: 'Any budget in mind?' },
] as const;
