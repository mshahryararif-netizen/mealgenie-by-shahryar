// ===== DATA =====
const ingredients = [
    // PROTEINS
    { id: 'chicken', name: 'Chicken', icon: '🍗', cat: 'proteins' },
    { id: 'beef', name: 'Beef', icon: '🥩', cat: 'proteins' },
    { id: 'pork', name: 'Pork', icon: '🥓', cat: 'proteins' },
    { id: 'fish', name: 'Fish', icon: '🐟', cat: 'proteins' },
    { id: 'shrimp', name: 'Shrimp', icon: '🦐', cat: 'proteins' },
    { id: 'egg', name: 'Egg', icon: '🥚', cat: 'proteins' },
    { id: 'tofu', name: 'Tofu', icon: '🧈', cat: 'proteins' },
    { id: 'turkey', name: 'Turkey', icon: '🦃', cat: 'proteins' },
    { id: 'lamb', name: 'Lamb', icon: '🍖', cat: 'proteins' },
    { id: 'bacon', name: 'Bacon', icon: '🥓', cat: 'proteins' },
    // VEGETABLES
    { id: 'tomato', name: 'Tomato', icon: '🍅', cat: 'vegetables' },
    { id: 'onion', name: 'Onion', icon: '🧅', cat: 'vegetables' },
    { id: 'garlic', name: 'Garlic', icon: '🧄', cat: 'vegetables' },
    { id: 'potato', name: 'Potato', icon: '🥔', cat: 'vegetables' },
    { id: 'carrot', name: 'Carrot', icon: '🥕', cat: 'vegetables' },
    { id: 'pepper', name: 'Pepper', icon: '🫑', cat: 'vegetables' },
    { id: 'spinach', name: 'Spinach', icon: '🥬', cat: 'vegetables' },
    { id: 'mushroom', name: 'Mushroom', icon: '🍄', cat: 'vegetables' },
    { id: 'corn', name: 'Corn', icon: '🌽', cat: 'vegetables' },
    { id: 'broccoli', name: 'Broccoli', icon: '🥦', cat: 'vegetables' },
    { id: 'zucchini', name: 'Zucchini', icon: '🥒', cat: 'vegetables' },
    { id: 'cucumber', name: 'Cucumber', icon: '🥒', cat: 'vegetables' },
    { id: 'lettuce', name: 'Lettuce', icon: '🥬', cat: 'vegetables' },
    { id: 'celery', name: 'Celery', icon: '🥬', cat: 'vegetables' },
    { id: 'peas', name: 'Peas', icon: '🫛', cat: 'vegetables' },
    { id: 'cabbage', name: 'Cabbage', icon: '🥬', cat: 'vegetables' },
    { id: 'avocado', name: 'Avocado', icon: '🥑', cat: 'vegetables' },
    { id: 'cauliflower', name: 'Cauliflower', icon: '🥦', cat: 'vegetables' },
    { id: 'apple', name: 'Apple', icon: '🍎', cat: 'vegetables' },
    // DAIRY
    { id: 'cheese', name: 'Cheese', icon: '🧀', cat: 'dairy' },
    { id: 'milk', name: 'Milk', icon: '🥛', cat: 'dairy' },
    { id: 'butter', name: 'Butter', icon: '🧈', cat: 'dairy' },
    { id: 'cream', name: 'Cream', icon: '🥛', cat: 'dairy' },
    { id: 'yogurt', name: 'Yogurt', icon: '🥛', cat: 'dairy' },
    { id: 'parmesan', name: 'Parmesan', icon: '🧀', cat: 'dairy' },
    { id: 'mozzarella', name: 'Mozzarella', icon: '🧀', cat: 'dairy' },
    { id: 'feta', name: 'Feta', icon: '🧀', cat: 'dairy' },
    // GRAINS
    { id: 'bread', name: 'Bread', icon: '🍞', cat: 'grains' },
    { id: 'rice', name: 'Rice', icon: '🍚', cat: 'grains' },
    { id: 'pasta', name: 'Pasta', icon: '🍝', cat: 'grains' },
    { id: 'flour', name: 'Flour', icon: '🌾', cat: 'grains' },
    { id: 'noodles', name: 'Noodles', icon: '🍜', cat: 'grains' },
    { id: 'tortilla', name: 'Tortilla', icon: '🫓', cat: 'grains' },
    { id: 'couscous', name: 'Couscous', icon: '🍚', cat: 'grains' },
    { id: 'quinoa', name: 'Quinoa', icon: '🌾', cat: 'grains' },
    // SPICES
    { id: 'salt', name: 'Salt', icon: '🧂', cat: 'spices' },
    { id: 'pepper_spice', name: 'Pepper', icon: '🌶️', cat: 'spices' },
    { id: 'chili', name: 'Chili', icon: '🌶️', cat: 'spices' },
    { id: 'cumin', name: 'Cumin', icon: '🌿', cat: 'spices' },
    { id: 'basil', name: 'Basil', icon: '🌿', cat: 'spices' },
    { id: 'oregano', name: 'Oregano', icon: '🌿', cat: 'spices' },
    { id: 'paprika', name: 'Paprika', icon: '🌶️', cat: 'spices' },
    { id: 'turmeric', name: 'Turmeric', icon: '🌿', cat: 'spices' },
    { id: 'cinnamon', name: 'Cinnamon', icon: '🌿', cat: 'spices' },
    { id: 'ginger', name: 'Ginger', icon: '🌿', cat: 'spices' },
    // PANTRY
    { id: 'olive_oil', name: 'Olive Oil', icon: '🫒', cat: 'pantry' },
    { id: 'soy_sauce', name: 'Soy Sauce', icon: '🥫', cat: 'pantry' },
    { id: 'sugar', name: 'Sugar', icon: '🍬', cat: 'pantry' },
    { id: 'honey', name: 'Honey', icon: '🍯', cat: 'pantry' },
    { id: 'beans', name: 'Beans', icon: '🫘', cat: 'pantry' },
    { id: 'chickpeas', name: 'Chickpeas', icon: '🫘', cat: 'pantry' },
    { id: 'lentils', name: 'Lentils', icon: '🫘', cat: 'pantry' },
    { id: 'lemon', name: 'Lemon', icon: '🍋', cat: 'pantry' },
    { id: 'lime', name: 'Lime', icon: '🍋', cat: 'pantry' },
    { id: 'tomato_sauce', name: 'Tomato Sauce', icon: '🥫', cat: 'pantry' },
    { id: 'broth', name: 'Broth', icon: '🍲', cat: 'pantry' },
    { id: 'vinegar', name: 'Vinegar', icon: '🍶', cat: 'pantry' },
    { id: 'pine_nuts', name: 'Pine Nuts', icon: '🌰', cat: 'pantry' },
    { id: 'water', name: 'Water', icon: '💧', cat: 'pantry' },
    { id: 'mint', name: 'Mint', icon: '🌿', cat: 'pantry' },
    { id: 'vanilla', name: 'Vanilla', icon: '🌿', cat: 'pantry' },
    { id: 'cocoa', name: 'Cocoa', icon: '🍫', cat: 'pantry' },
    { id: 'chocolate', name: 'Chocolate', icon: '🍫', cat: 'pantry' },
    { id: 'walnuts', name: 'Walnuts', icon: '🌰', cat: 'pantry' },
    { id: 'peanuts', name: 'Peanuts', icon: '🥜', cat: 'pantry' },
];

const cuisines = ['Any', 'Italian', 'Mexican', 'Indian', 'Chinese', 'Japanese', 'Mediterranean', 'American', 'Fusion'];

const recipes = [
    // ===== MEALS =====
    { id: 1, name: 'Grilled Cheese', type: 'meal', cuisine: 'American', time: 15, difficulty: 'Easy', calories: 350, tags: ['quick', 'comfort food', 'vegetarian'], icon: '🧀', ingredients: [{name: 'Bread', amount: '2 slices'}, {name: 'Cheese', amount: '2 slices'}, {name: 'Butter', amount: '1 tbsp'}], substitutions: [{from: 'Butter', to: 'Mayonnaise'}], steps: ['Butter one side of each bread slice.', 'Heat a non-stick pan over medium heat.', 'Place bread butter-side down in the pan.', 'Layer cheese slices on top.', 'Place second bread on top, butter-side up.', 'Cook 3-4 minutes until golden brown.', 'Flip carefully and cook other side 3 minutes.', 'Slice diagonally and serve hot.'] },
    { id: 2, name: 'Scrambled Eggs', type: 'meal', cuisine: 'American', time: 10, difficulty: 'Easy', calories: 220, tags: ['quick', 'breakfast', 'high protein'], icon: '🍳', ingredients: [{name: 'Egg', amount: '3'}, {name: 'Butter', amount: '1 tbsp'}, {name: 'Salt', amount: 'pinch'}], substitutions: [{from: 'Butter', to: 'Olive oil'}], steps: ['Crack eggs into a bowl.', 'Add salt, whisk until combined.', 'Heat butter in pan over medium-low heat.', 'Pour in egg mixture.', 'Let set 20 seconds, then gently stir.', 'Continue stirring slowly, forming soft curds.', 'Remove while slightly underdone.', 'Serve immediately while creamy.'] },
    { id: 3, name: 'Cheese Toast', type: 'meal', cuisine: 'American', time: 10, difficulty: 'Easy', calories: 280, tags: ['quick', 'vegetarian'], icon: '🍞', ingredients: [{name: 'Bread', amount: '2 slices'}, {name: 'Cheese', amount: '2 slices'}, {name: 'Butter', amount: '1 tbsp'}, {name: 'Tomato', amount: '1'}], substitutions: [], steps: ['Butter one side of each bread slice.', 'Place bread butter-side down in pan.', 'Top with cheese slices.', 'Add sliced tomatoes on cheese.', 'Cover with second bread slice.', 'Cook over medium heat 3-4 minutes.', 'Flip and cook until golden.', 'Cut and serve hot.'] },
    { id: 4, name: 'Tuna Salad', type: 'meal', cuisine: 'American', time: 15, difficulty: 'Easy', calories: 180, tags: ['quick', 'healthy', 'seafood'], icon: '🥗', ingredients: [{name: 'Fish', amount: '1 can'}, {name: 'Egg', amount: '2'}, {name: 'Onion', amount: '1/4'}, {name: 'Salt', amount: 'pinch'}], substitutions: [], steps: ['Drain tuna and place in a bowl.', 'Hard boil eggs, then chop.', 'Dice onion finely.', 'Mix tuna, eggs, onion, and mayo.', 'Season with salt.', 'Serve on bread or lettuce.'] },
    { id: 5, name: 'Beef Burger', type: 'meal', cuisine: 'American', time: 25, difficulty: 'Medium', calories: 550, tags: ['comfort food', 'high protein'], icon: '🍔', ingredients: [{name: 'Beef', amount: '200g'}, {name: 'Bread', amount: '1 bun'}, {name: 'Tomato', amount: '1'}, {name: 'Onion', amount: '1/2'}, {name: 'Cheese', amount: '1 slice'}], substitutions: [], steps: ['Form beef into a patty.', 'Season with salt and pepper.', 'Grill or pan-fry 4 minutes per side.', 'Add cheese in last minute to melt.', 'Slice tomato and onion.', 'Assemble burger with all toppings.'] },
    { id: 6, name: 'Omelette', type: 'meal', cuisine: 'American', time: 15, difficulty: 'Easy', calories: 280, tags: ['quick', 'breakfast', 'high protein'], icon: '🍳', ingredients: [{name: 'Egg', amount: '3'}, {name: 'Cheese', amount: '1/4 cup'}, {name: 'Butter', amount: '1 tbsp'}, {name: 'Salt', amount: 'pinch'}], substitutions: [], steps: ['Whisk eggs with salt.', 'Melt butter in pan over medium.', 'Pour eggs and let set.', 'Add cheese on one half.', 'Fold omelette in half.', 'Slide onto plate and serve.'] },
    { id: 7, name: 'Chicken Sandwich', type: 'meal', cuisine: 'American', time: 20, difficulty: 'Easy', calories: 380, tags: ['quick', 'high protein'], icon: '🥪', ingredients: [{name: 'Chicken', amount: '150g'}, {name: 'Bread', amount: '2 slices'}, {name: 'Lettuce', amount: '2 leaves'}, {name: 'Tomato', amount: '1'}], substitutions: [], steps: ['Season chicken with salt and pepper.', 'Pan-fry chicken 5-6 minutes per side.', 'Let rest, then slice.', 'Toast bread lightly.', 'Add lettuce, tomato, and chicken.', 'Close sandwich and serve.'] },
    { id: 8, name: 'French Toast', type: 'meal', cuisine: 'American', time: 15, difficulty: 'Easy', calories: 320, tags: ['quick', 'breakfast', 'sweet'], icon: '🍞', ingredients: [{name: 'Egg', amount: '2'}, {name: 'Milk', amount: '1/4 cup'}, {name: 'Bread', amount: '2 slices'}, {name: 'Sugar', amount: '1 tbsp'}, {name: 'Butter', amount: '1 tbsp'}], substitutions: [], steps: ['Whisk egg, milk, and sugar in a bowl.', 'Dip bread slices in egg mixture.', 'Melt butter in pan over medium.', 'Cook bread 2-3 minutes per side.', 'Serve with honey or syrup.'] },

    // Italian Meals
    { id: 9, name: 'Pasta Aglio Olio', type: 'meal', cuisine: 'Italian', time: 20, difficulty: 'Easy', calories: 420, tags: ['quick', 'vegetarian'], icon: '🍝', ingredients: [{name: 'Pasta', amount: '200g'}, {name: 'Garlic', amount: '6 cloves'}, {name: 'Olive Oil', amount: '1/3 cup'}, {name: 'Chili', amount: '1 tsp'}], substitutions: [], steps: ['Boil large pot of salted water.', 'Cook pasta according to package.', 'Slice garlic thinly.', 'Heat olive oil in pan over medium.', 'Add garlic and chili, sauté until golden.', 'Reserve 1 cup pasta water, drain.', 'Add pasta to pan with garlic oil.', 'Toss well, adding pasta water as needed.'] },
    { id: 10, name: 'Tomato Pasta', type: 'meal', cuisine: 'Italian', time: 30, difficulty: 'Easy', calories: 480, tags: ['comfort food', 'vegetarian'], icon: '🍝', ingredients: [{name: 'Pasta', amount: '250g'}, {name: 'Tomato', amount: '4'}, {name: 'Cream', amount: '1/2 cup'}, {name: 'Garlic', amount: '3 cloves'}, {name: 'Basil', amount: '1/4 cup'}], substitutions: [{from: 'Cream', to: 'Coconut milk'}], steps: ['Boil pasta in salted water.', 'Blanch tomatoes, peel, chop.', 'Heat olive oil, sauté garlic.', 'Add tomatoes, cook 10 minutes.', 'Stir in cream, simmer 5 minutes.', 'Drain pasta, add to sauce.', 'Toss with fresh basil.', 'Serve immediately.'] },
    { id: 11, name: 'Chicken Pasta', type: 'meal', cuisine: 'Italian', time: 35, difficulty: 'Medium', calories: 620, tags: ['high protein', 'comfort food'], icon: '🍗', ingredients: [{name: 'Chicken', amount: '300g'}, {name: 'Pasta', amount: '300g'}, {name: 'Cream', amount: '1 cup'}, {name: 'Parmesan', amount: '1/2 cup'}, {name: 'Spinach', amount: '2 cups'}], substitutions: [{from: 'Cream', to: 'Evaporated milk'}], steps: ['Season chicken with salt and pepper.', 'Cook pasta in salted water.', 'Heat oil, cook chicken 6 min/side.', 'Remove chicken, slice when rested.', 'Sauté garlic in same pan 1 minute.', 'Add cream, bring to simmer.', 'Stir in parmesan until melted.', 'Add spinach, cook until wilted.', 'Toss pasta with sauce, top with chicken.'] },
    { id: 12, name: 'Caprese Salad', type: 'meal', cuisine: 'Italian', time: 10, difficulty: 'Easy', calories: 280, tags: ['quick', 'vegetarian', 'no-cook'], icon: '🥗', ingredients: [{name: 'Tomato', amount: '3 large'}, {name: 'Mozzarella', amount: '250g'}, {name: 'Basil', amount: '1 bunch'}, {name: 'Olive Oil', amount: '3 tbsp'}], substitutions: [], steps: ['Slice tomatoes into 1/4 inch rounds.', 'Slice mozzarella similarly.', 'Arrange alternating tomato and cheese on plate.', 'Tuck basil leaves between slices.', 'Drizzle generously with olive oil.', 'Season with salt and pepper.', 'Serve at room temperature.'] },
    { id: 13, name: 'Spaghetti Marinara', type: 'meal', cuisine: 'Italian', time: 25, difficulty: 'Easy', calories: 380, tags: ['quick', 'vegetarian'], icon: '🍝', ingredients: [{name: 'Pasta', amount: '250g'}, {name: 'Tomato', amount: '6'}, {name: 'Garlic', amount: '4 cloves'}, {name: 'Basil', amount: '1/4 cup'}, {name: 'Olive Oil', amount: '2 tbsp'}], substitutions: [], steps: ['Blend tomatoes or crush them.', 'Heat olive oil, sauté garlic.', 'Add tomatoes and simmer 15 minutes.', 'Cook pasta according to package.', 'Add basil to sauce.', 'Drain pasta, toss with sauce.', 'Serve with parmesan.'] },
    { id: 14, name: 'Chicken Parmesan', type: 'meal', cuisine: 'Italian', time: 35, difficulty: 'Medium', calories: 550, tags: ['high protein', 'comfort food'], icon: '🍗', ingredients: [{name: 'Chicken', amount: '2 pieces'}, {name: 'Cheese', amount: '1 cup'}, {name: 'Tomato Sauce', amount: '1 cup'}, {name: 'Pasta', amount: '200g'}, {name: 'Parmesan', amount: '1/4 cup'}], substitutions: [], steps: ['Pound chicken thin, season.', 'Bread and pan-fry until golden.', 'Top with cheese, melt.', 'Cook pasta in salted water.', 'Warm tomato sauce.', 'Serve chicken over pasta with sauce.'] },
    { id: 15, name: 'Feta Pasta', type: 'meal', cuisine: 'Italian', time: 25, difficulty: 'Easy', calories: 450, tags: ['quick', 'vegetarian'], icon: '🍝', ingredients: [{name: 'Pasta', amount: '250g'}, {name: 'Feta', amount: '200g'}, {name: 'Tomato', amount: '3'}, {name: 'Olive Oil', amount: '3 tbsp'}, {name: 'Basil', amount: '1/4 cup'}], substitutions: [], steps: ['Halve tomatoes, place in baking dish.', 'Crumble feta on top, drizzle oil.', 'Bake at 400°F for 25 minutes.', 'Meanwhile cook pasta.', 'Mix roasted tomatoes with pasta.', 'Top with fresh basil.'] },
    { id: 16, name: 'Minestrone Soup', type: 'meal', cuisine: 'Italian', time: 40, difficulty: 'Medium', calories: 220, tags: ['healthy', 'vegetarian', 'soup'], icon: '🍲', ingredients: [{name: 'Tomato', amount: '2'}, {name: 'Carrot', amount: '2'}, {name: 'Potato', amount: '1'}, {name: 'Beans', amount: '1 can'}, {name: 'Pasta', amount: '100g'}, {name: 'Broth', amount: '4 cups'}], substitutions: [], steps: ['Dice all vegetables.', 'Sauté onion, garlic, carrot, celery.', 'Add tomatoes and broth.', 'Simmer 20 minutes.', 'Add beans and potato.', 'Add pasta, cook 10 more minutes.', 'Season and serve with parmesan.'] },

    // Chinese Meals
    { id: 17, name: 'Chicken Stir Fry', type: 'meal', cuisine: 'Chinese', time: 25, difficulty: 'Medium', calories: 380, tags: ['high protein', 'quick'], icon: '🥡', ingredients: [{name: 'Chicken', amount: '300g'}, {name: 'Broccoli', amount: '1 cup'}, {name: 'Pepper', amount: '1'}, {name: 'Garlic', amount: '3 cloves'}, {name: 'Soy Sauce', amount: '3 tbsp'}], substitutions: [{from: 'Soy Sauce', to: 'Tamari'}], steps: ['Cut chicken into bite-sized pieces.', 'Chop broccoli into florets.', 'Mince garlic.', 'Heat oil in wok over high heat.', 'Add chicken, cook 5-6 minutes.', 'Remove chicken, set aside.', 'Add garlic, stir 30 seconds.', 'Add vegetables, stir fry 3 minutes.', 'Return chicken, add soy sauce, toss.'] },
    { id: 18, name: 'Fried Rice', type: 'meal', cuisine: 'Chinese', time: 20, difficulty: 'Medium', calories: 420, tags: ['quick', 'high protein'], icon: '🍚', ingredients: [{name: 'Rice', amount: '2 cups'}, {name: 'Egg', amount: '2'}, {name: 'Soy Sauce', amount: '3 tbsp'}, {name: 'Carrot', amount: '1'}, {name: 'Peas', amount: '1/2 cup'}], substitutions: [{from: 'Rice', to: 'Cauliflower rice'}], steps: ['Use day-old cold rice.', 'Dice carrots small.', 'Beat eggs, scramble quickly, set aside.', 'Heat oil in wok over high.', 'Add carrot, stir fry 2 min.', 'Add rice, break up clumps.', 'Add peas and soy sauce, toss.', 'Return eggs, mix well and serve.'] },
    { id: 19, name: 'Veggie Stir Fry', type: 'meal', cuisine: 'Chinese', time: 20, difficulty: 'Easy', calories: 180, tags: ['quick', 'vegetarian', 'healthy'], icon: '🥬', ingredients: [{name: 'Broccoli', amount: '1 cup'}, {name: 'Carrot', amount: '2'}, {name: 'Pepper', amount: '2'}, {name: 'Mushroom', amount: '1 cup'}, {name: 'Soy Sauce', amount: '3 tbsp'}], substitutions: [], steps: ['Cut vegetables into bite-sized pieces.', 'Mix soy sauce with splash of water.', 'Heat wok over high heat.', 'Add garlic, stir 30 seconds.', 'Add carrots and broccoli, stir fry 3 min.', 'Add peppers and mushrooms.', 'Stir fry another 3 minutes.', 'Pour in soy sauce mixture.', 'Toss well and serve over rice.'] },
    { id: 20, name: 'Shrimp Fried Rice', type: 'meal', cuisine: 'Chinese', time: 25, difficulty: 'Medium', calories: 450, tags: ['high protein', 'seafood'], icon: '🍤', ingredients: [{name: 'Rice', amount: '2 cups'}, {name: 'Shrimp', amount: '200g'}, {name: 'Egg', amount: '2'}, {name: 'Soy Sauce', amount: '3 tbsp'}, {name: 'Peas', amount: '1/2 cup'}], substitutions: [{from: 'Shrimp', to: 'Chicken'}], steps: ['Use day-old cold rice.', 'Peel and devein shrimp.', 'Beat eggs, scramble in hot wok, set aside.', 'Add more oil, stir fry shrimp 2 minutes.', 'Remove shrimp.', 'Stir fry garlic 30 seconds.', 'Add rice, break up clumps.', 'Add peas, soy sauce, and shrimp.', 'Add eggs back, toss and serve.'] },
    { id: 21, name: 'Mapo Tofu', type: 'meal', cuisine: 'Chinese', time: 25, difficulty: 'Medium', calories: 280, tags: ['vegetarian', 'spicy'], icon: '🥢', ingredients: [{name: 'Tofu', amount: '400g'}, {name: 'Soy Sauce', amount: '2 tbsp'}, {name: 'Chili', amount: '1 tbsp'}, {name: 'Garlic', amount: '3 cloves'}, {name: 'Ginger', amount: '1 inch'}], substitutions: [], steps: ['Press tofu, cut into cubes.', 'Mince garlic and ginger.', 'Heat oil in wok.', 'Add garlic, ginger, and chili.', 'Add tofu cubes carefully.', 'Pour in soy sauce.', 'Simmer 5 minutes.', 'Serve with rice.'] },
    { id: 22, name: 'Egg Drop Soup', type: 'meal', cuisine: 'Chinese', time: 15, difficulty: 'Easy', calories: 120, tags: ['quick', 'light', 'soup'], icon: '🍳', ingredients: [{name: 'Egg', amount: '3'}, {name: 'Broth', amount: '4 cups'}, {name: 'Corn', amount: '1/2 cup'}, {name: 'Salt', amount: 'pinch'}], substitutions: [], steps: ['Bring broth to boil.', 'Add corn, simmer 3 minutes.', 'Beat eggs in a bowl.', 'Slowly pour eggs into broth while stirring.', 'Season with salt.', 'Serve immediately.'] },
    { id: 23, name: 'Beef Broccoli', type: 'meal', cuisine: 'Chinese', time: 25, difficulty: 'Medium', calories: 420, tags: ['high protein', 'quick'], icon: '🥦', ingredients: [{name: 'Beef', amount: '300g'}, {name: 'Broccoli', amount: '2 cups'}, {name: 'Soy Sauce', amount: '3 tbsp'}, {name: 'Garlic', amount: '3 cloves'}, {name: 'Ginger', amount: '1 inch'}], substitutions: [], steps: ['Slice beef thinly.', 'Marinate beef with soy sauce 10 min.', 'Cut broccoli into florets.', 'Stir fry beef 2-3 minutes, set aside.', 'Stir fry garlic and ginger.', 'Add broccoli, cook 3 minutes.', 'Return beef, toss together.', 'Serve with rice.'] },
    { id: 24, name: 'Lo Mein', type: 'meal', cuisine: 'Chinese', time: 25, difficulty: 'Easy', calories: 380, tags: ['quick', 'vegetarian'], icon: '🍜', ingredients: [{name: 'Noodles', amount: '250g'}, {name: 'Carrot', amount: '1'}, {name: 'Broccoli', amount: '1 cup'}, {name: 'Soy Sauce', amount: '3 tbsp'}, {name: 'Garlic', amount: '3 cloves'}], substitutions: [], steps: ['Cook noodles according to package.', 'Slice vegetables.', 'Heat oil in wok.', 'Stir fry garlic 30 seconds.', 'Add vegetables, cook 3-4 minutes.', 'Add noodles and soy sauce.', 'Toss well to combine.', 'Serve hot.'] },

    // Mexican Meals
    { id: 25, name: 'Quesadilla', type: 'meal', cuisine: 'Mexican', time: 15, difficulty: 'Easy', calories: 380, tags: ['quick', 'vegetarian'], icon: '🌮', ingredients: [{name: 'Tortilla', amount: '2'}, {name: 'Cheese', amount: '1 cup'}, {name: 'Pepper', amount: '1'}, {name: 'Onion', amount: '1/2'}], substitutions: [], steps: ['Slice peppers and onion thinly.', 'Heat pan over medium heat.', 'Place tortilla in pan.', 'Sprinkle cheese over tortilla.', 'Add peppers and onions.', 'Top with second tortilla.', 'Cook 3 minutes until golden.', 'Flip carefully, cook other side.', 'Cut into wedges and serve.'] },
    { id: 26, name: 'Bean Burrito', type: 'meal', cuisine: 'Mexican', time: 15, difficulty: 'Easy', calories: 450, tags: ['quick', 'vegetarian', 'high protein'], icon: '🌯', ingredients: [{name: 'Tortilla', amount: '2 large'}, {name: 'Beans', amount: '1 can'}, {name: 'Cheese', amount: '1 cup'}, {name: 'Rice', amount: '1 cup'}], substitutions: [{from: 'Beans', to: 'Black beans'}], steps: ['Heat beans in saucepan with spices.', 'Warm tortillas in dry pan.', 'Spread beans down center of tortilla.', 'Add cooked rice on top.', 'Sprinkle cheese over everything.', 'Fold sides in, then roll up tightly.', 'Optional: grill seam-side down until crispy.'] },
    { id: 27, name: 'Chicken Tacos', type: 'meal', cuisine: 'Mexican', time: 20, difficulty: 'Easy', calories: 320, tags: ['quick', 'high protein'], icon: '🌮', ingredients: [{name: 'Chicken', amount: '250g'}, {name: 'Tortilla', amount: '4 small'}, {name: 'Onion', amount: '1/2'}, {name: 'Lime', amount: '1'}], substitutions: [], steps: ['Season chicken with cumin and salt.', 'Grill or pan-fry 5-6 minutes per side.', 'Let rest, then slice.', 'Warm tortillas.', 'Dice onion.', 'Assemble tacos with chicken and onion.', 'Squeeze lime juice on top.'] },
    { id: 28, name: 'Mexican Rice', type: 'meal', cuisine: 'Mexican', time: 25, difficulty: 'Easy', calories: 280, tags: ['side dish', 'vegetarian'], icon: '🍚', ingredients: [{name: 'Rice', amount: '1 cup'}, {name: 'Tomato', amount: '2'}, {name: 'Onion', amount: '1/4'}, {name: 'Garlic', amount: '2 cloves'}, {name: 'Broth', amount: '2 cups'}], substitutions: [], steps: ['Toast rice in oil until golden.', 'Blend tomatoes with some broth.', 'Sauté onion and garlic.', 'Add tomato mixture and remaining broth.', 'Simmer covered 15-20 minutes.', 'Season with salt.', 'Serve as side dish.'] },
    { id: 29, name: 'Veggie Nachos', type: 'meal', cuisine: 'Mexican', time: 15, difficulty: 'Easy', calories: 420, tags: ['quick', 'vegetarian', 'snack'], icon: '🧀', ingredients: [{name: 'Tortilla', amount: '4'}, {name: 'Cheese', amount: '1 cup'}, {name: 'Beans', amount: '1/2 can'}, {name: 'Pepper', amount: '1'}, {name: 'Tomato', amount: '1'}], substitutions: [], steps: ['Cut tortillas into triangles.', 'Bake at 375°F until crispy.', 'Melt cheese on chips.', 'Add warmed beans.', 'Top with diced peppers and tomatoes.', 'Serve with lime.'] },
    { id: 30, name: 'Chicken Enchiladas', type: 'meal', cuisine: 'Mexican', time: 35, difficulty: 'Medium', calories: 480, tags: ['high protein', 'comfort food'], icon: '🌯', ingredients: [{name: 'Chicken', amount: '300g'}, {name: 'Tortilla', amount: '6'}, {name: 'Cheese', amount: '1 cup'}, {name: 'Tomato Sauce', amount: '1 cup'}, {name: 'Onion', amount: '1/2'}], substitutions: [], steps: ['Cook and shred chicken.', 'Mix chicken with sautéed onion.', 'Warm tortillas.', 'Fill tortillas with chicken, roll up.', 'Place seam-side down in dish.', 'Top with tomato sauce and cheese.', 'Bake at 375°F for 20 minutes.'] },

    // Mediterranean Meals
    { id: 31, name: 'Garlic Butter Shrimp', type: 'meal', cuisine: 'Mediterranean', time: 15, difficulty: 'Easy', calories: 320, tags: ['quick', 'high protein', 'seafood'], icon: '🦐', ingredients: [{name: 'Shrimp', amount: '500g'}, {name: 'Butter', amount: '4 tbsp'}, {name: 'Garlic', amount: '6 cloves'}, {name: 'Lemon', amount: '1'}, {name: 'Chili', amount: '1/2 tsp'}], substitutions: [{from: 'Butter', to: 'Ghee'}], steps: ['Pat shrimp dry with paper towels.', 'Mince garlic finely.', 'Heat butter in large pan over medium-high.', 'Add garlic and chili, cook 30 seconds.', 'Add shrimp in single layer.', 'Cook 2 minutes per side until pink.', 'Squeeze lemon juice over shrimp.', 'Serve immediately.'] },
    { id: 32, name: 'Greek Salad', type: 'meal', cuisine: 'Mediterranean', time: 10, difficulty: 'Easy', calories: 220, tags: ['quick', 'vegetarian', 'healthy'], icon: '🥗', ingredients: [{name: 'Cucumber', amount: '1'}, {name: 'Tomato', amount: '2'}, {name: 'Feta', amount: '150g'}, {name: 'Onion', amount: '1/2'}, {name: 'Olive Oil', amount: '3 tbsp'}], substitutions: [], steps: ['Dice cucumber and tomatoes.', 'Slice onion thinly.', 'Combine in a bowl.', 'Crumble feta on top.', 'Drizzle with olive oil.', 'Season with oregano and salt.', 'Toss gently and serve.'] },
    { id: 33, name: 'Falafel', type: 'meal', cuisine: 'Mediterranean', time: 30, difficulty: 'Medium', calories: 350, tags: ['vegetarian', 'high protein'], icon: '🧆', ingredients: [{name: 'Chickpeas', amount: '1 can'}, {name: 'Onion', amount: '1/2'}, {name: 'Garlic', amount: '3 cloves'}, {name: 'Flour', amount: '2 tbsp'}], substitutions: [], steps: ['Blend chickpeas with onion, garlic, parsley.', 'Season with cumin and salt.', 'Add flour to bind.', 'Form into small patties.', 'Pan-fry in oil until golden.', 'Or bake at 375°F for 25 minutes.', 'Serve in pita with veggies.'] },
    { id: 34, name: 'Hummus', type: 'meal', cuisine: 'Mediterranean', time: 10, difficulty: 'Easy', calories: 180, tags: ['quick', 'vegetarian', 'dip'], icon: '🫘', ingredients: [{name: 'Chickpeas', amount: '1 can'}, {name: 'Garlic', amount: '2 cloves'}, {name: 'Lemon', amount: '1'}, {name: 'Olive Oil', amount: '2 tbsp'}], substitutions: [], steps: ['Drain chickpeas.', 'Blend chickpeas with garlic, lemon juice.', 'Drizzle in olive oil while blending.', 'Season with salt.', 'Serve with bread or veggies.'] },
    { id: 35, name: 'Shawarma', type: 'meal', cuisine: 'Mediterranean', time: 30, difficulty: 'Medium', calories: 450, tags: ['high protein', 'wraps'], icon: '🥙', ingredients: [{name: 'Chicken', amount: '400g'}, {name: 'Yogurt', amount: '1/4 cup'}, {name: 'Garlic', amount: '3 cloves'}, {name: 'Lime', amount: '1'}, {name: 'Tortilla', amount: '4'}], substitutions: [], steps: ['Slice chicken thinly.', 'Marinate in yogurt, garlic, spices.', 'Pan-fry or bake until cooked.', 'Warm tortillas.', 'Fill with chicken and veggies.', 'Drizzle with garlic sauce.', 'Roll and serve.'] },
    { id: 36, name: 'Tabbouleh', type: 'meal', cuisine: 'Mediterranean', time: 20, difficulty: 'Easy', calories: 180, tags: ['vegetarian', 'healthy', 'salad'], icon: '🥗', ingredients: [{name: 'Couscous', amount: '1 cup'}, {name: 'Tomato', amount: '2'}, {name: 'Cucumber', amount: '1'}, {name: 'Lemon', amount: '1'}], substitutions: [], steps: ['Prepare couscous according to package.', 'Dice tomatoes and cucumber finely.', 'Chop parsley generously.', 'Mix cooled couscous with veggies.', 'Add lemon juice and olive oil.', 'Season with salt.', 'Serve as side or wrap.'] },

    // Indian Meals
    { id: 37, name: 'Chicken Curry', type: 'meal', cuisine: 'Indian', time: 40, difficulty: 'Medium', calories: 420, tags: ['high protein', 'spicy', 'comfort food'], icon: '🍛', ingredients: [{name: 'Chicken', amount: '500g'}, {name: 'Tomato', amount: '3'}, {name: 'Onion', amount: '1'}, {name: 'Garlic', amount: '4 cloves'}, {name: 'Ginger', amount: '1 inch'}, {name: 'Turmeric', amount: '1 tsp'}, {name: 'Cumin', amount: '1 tsp'}], substitutions: [], steps: ['Cut chicken into pieces.', 'Sauté onion until golden.', 'Add garlic and ginger.', 'Add spices, cook 1 minute.', 'Add tomatoes, cook until soft.', 'Add chicken, coat with sauce.', 'Add water, simmer 25 minutes.', 'Serve with rice or bread.'] },
    { id: 38, name: 'Vegetable Biryani', type: 'meal', cuisine: 'Indian', time: 45, difficulty: 'Medium', calories: 380, tags: ['vegetarian', 'rice', 'flavorful'], icon: '🍚', ingredients: [{name: 'Rice', amount: '2 cups'}, {name: 'Carrot', amount: '2'}, {name: 'Potato', amount: '1'}, {name: 'Peas', amount: '1/2 cup'}, {name: 'Onion', amount: '1'}, {name: 'Ginger', amount: '1 inch'}, {name: 'Turmeric', amount: '1 tsp'}], substitutions: [], steps: ['Soak rice for 30 minutes.', 'Sauté onion, ginger, garlic.', 'Add veggies, turmeric, cumin.', 'Add rice, toast slightly.', 'Add water, bring to boil.', 'Lower heat, cook covered 15 min.', 'Let rest 5 minutes, fluff.', 'Serve with raita.'] },
    { id: 39, name: 'Dal Tadka', type: 'meal', cuisine: 'Indian', time: 30, difficulty: 'Easy', calories: 280, tags: ['vegetarian', 'high protein', 'healthy'], icon: '🫘', ingredients: [{name: 'Lentils', amount: '1 cup'}, {name: 'Tomato', amount: '2'}, {name: 'Onion', amount: '1'}, {name: 'Garlic', amount: '3 cloves'}, {name: 'Cumin', amount: '1 tsp'}, {name: 'Turmeric', amount: '1/2 tsp'}], substitutions: [], steps: ['Wash lentils.', 'Boil lentils with turmeric until soft.', 'Sauté onion, garlic until golden.', 'Add cumin, cook 1 minute.', 'Add tomatoes, cook until soft.', 'Pour tempering over dal.', 'Season with salt.', 'Serve with rice or bread.'] },
    { id: 40, name: 'Tandoori Chicken', type: 'meal', cuisine: 'Indian', time: 40, difficulty: 'Medium', calories: 380, tags: ['high protein', 'grilled', 'spicy'], icon: '🍗', ingredients: [{name: 'Chicken', amount: '500g'}, {name: 'Yogurt', amount: '1 cup'}, {name: 'Garlic', amount: '4 cloves'}, {name: 'Ginger', amount: '1 inch'}, {name: 'Paprika', amount: '1 tbsp'}, {name: 'Turmeric', amount: '1 tsp'}], substitutions: [], steps: ['Score chicken deeply.', 'Mix yogurt with spices and ginger garlic.', 'Marinate chicken overnight or 2 hours.', 'Grill or bake at 400°F for 30 min.', 'Turn halfway through.', 'Serve with mint chutney.', 'Enjoy with naan bread.'] },

    // ===== DRINKS =====
    { id: 101, name: 'Fresh Lemonade', type: 'drink', cuisine: 'American', time: 10, difficulty: 'Easy', calories: 120, tags: ['refreshing', 'quick', 'summer'], icon: '🍋', ingredients: [{name: 'Lemon', amount: '3'}, {name: 'Sugar', amount: '1/4 cup'}, {name: 'Water', amount: '4 cups'}], substitutions: [{from: 'Sugar', to: 'Honey'}], steps: ['Squeeze lemons to get juice.', 'Dissolve sugar in 1 cup warm water.', 'Mix lemon juice with remaining cold water.', 'Add sugar water to taste.', 'Serve over ice.', 'Garnish with mint if desired.'] },
    { id: 102, name: 'Mango Smoothie', type: 'drink', cuisine: 'Fusion', time: 5, difficulty: 'Easy', calories: 180, tags: ['quick', 'healthy', 'tropical'], icon: '🥭', ingredients: [{name: 'Milk', amount: '1 cup'}, {name: 'Sugar', amount: '1 tbsp'}, {name: 'Honey', amount: '1 tbsp'}], substitutions: [], steps: ['Add all ingredients to blender.', 'Blend until smooth.', 'Add ice if desired.', 'Pour and serve immediately.'] },
    { id: 103, name: 'Hot Chocolate', type: 'drink', cuisine: 'American', time: 10, difficulty: 'Easy', calories: 220, tags: ['comfort', 'warm', 'sweet'], icon: '☕', ingredients: [{name: 'Milk', amount: '2 cups'}, {name: 'Cocoa', amount: '2 tbsp'}, {name: 'Sugar', amount: '2 tbsp'}, {name: 'Butter', amount: '1 tbsp'}], substitutions: [{from: 'Cocoa', to: 'Chocolate chips'}], steps: ['Heat milk in saucepan until steaming.', 'Whisk in cocoa and sugar until dissolved.', 'Add butter and stir.', 'Pour into mug.', 'Top with marshmallows if desired.'] },
    { id: 104, name: 'Mint Lemonade', type: 'drink', cuisine: 'Mediterranean', time: 10, difficulty: 'Easy', calories: 140, tags: ['refreshing', 'summer', 'herbal'], icon: '🌿', ingredients: [{name: 'Lemon', amount: '4'}, {name: 'Mint', amount: '1 bunch'}, {name: 'Sugar', amount: '1/3 cup'}, {name: 'Water', amount: '6 cups'}], substitutions: [], steps: ['Make simple syrup: dissolve sugar in 1 cup warm water.', 'Crush mint leaves gently.', 'Squeeze lemons for juice.', 'Combine all ingredients.', 'Refrigerate 1 hour.', 'Serve over ice.', 'Garnish with mint.'] },
    { id: 105, name: 'Golden Milk', type: 'drink', cuisine: 'Indian', time: 10, difficulty: 'Easy', calories: 150, tags: ['warming', 'healthy', 'spiced'], icon: '🥛', ingredients: [{name: 'Milk', amount: '2 cups'}, {name: 'Turmeric', amount: '1 tsp'}, {name: 'Ginger', amount: '1 inch'}, {name: 'Honey', amount: '1 tbsp'}, {name: 'Cinnamon', amount: '1/2 tsp'}], substitutions: [], steps: ['Heat milk in saucepan.', 'Grate fresh ginger.', 'Add turmeric, ginger, and cinnamon.', 'Simmer 5 minutes.', 'Strain if desired.', 'Sweeten with honey.', 'Serve warm.'] },
    { id: 106, name: 'Iced Tea', type: 'drink', cuisine: 'American', time: 15, difficulty: 'Easy', calories: 80, tags: ['refreshing', 'summer', 'classic'], icon: '🧊', ingredients: [{name: 'Sugar', amount: '1/4 cup'}, {name: 'Lemon', amount: '1'}, {name: 'Water', amount: '6 cups'}], substitutions: [], steps: ['Boil 2 cups water.', 'Steep tea bags 5 minutes.', 'Remove tea bags.', 'Add sugar while hot.', 'Add remaining cold water.', 'Add lemon juice.', 'Refrigerate or serve over ice.'] },
    { id: 107, name: 'Yogurt Lassi', type: 'drink', cuisine: 'Indian', time: 5, difficulty: 'Easy', calories: 160, tags: ['cooling', 'digestive', 'creamy'], icon: '🥛', ingredients: [{name: 'Yogurt', amount: '1 cup'}, {name: 'Milk', amount: '1/2 cup'}, {name: 'Sugar', amount: '2 tbsp'}, {name: 'Mint', amount: 'few leaves'}], substitutions: [{from: 'Sugar', to: 'Honey'}], steps: ['Blend yogurt and milk until smooth.', 'Add sugar and blend again.', 'Pour into glass.', 'Garnish with mint.', 'Serve chilled.'] },
    { id: 108, name: 'Watermelon Agua Fresca', type: 'drink', cuisine: 'Mexican', time: 10, difficulty: 'Easy', calories: 90, tags: ['refreshing', 'summer', 'hydrating'], icon: '🍉', ingredients: [{name: 'Sugar', amount: '1/4 cup'}, {name: 'Lime', amount: '2'}, {name: 'Water', amount: '4 cups'}], substitutions: [], steps: ['Blend watermelon until smooth.', 'Strain if desired.', 'Add water and lime juice.', 'Sweeten to taste.', 'Serve over ice.', 'Garnish with mint.'] },

    // ===== SAUCES =====
    { id: 201, name: 'Pasta Sauce', type: 'sauce', cuisine: 'Italian', time: 30, difficulty: 'Easy', calories: 120, tags: ['classic', 'versatile', 'tomato'], icon: '🍅', ingredients: [{name: 'Tomato', amount: '6'}, {name: 'Garlic', amount: '4 cloves'}, {name: 'Onion', amount: '1'}, {name: 'Olive Oil', amount: '3 tbsp'}, {name: 'Basil', amount: '1/4 cup'}], substitutions: [], steps: ['Dice tomatoes.', 'Sauté onion and garlic in olive oil.', 'Add tomatoes.', 'Simmer 20 minutes.', 'Add basil.', 'Season with salt and pepper.', 'Use immediately or store.'] },
    { id: 202, name: 'Garlic Sauce', type: 'sauce', cuisine: 'Mediterranean', time: 10, difficulty: 'Easy', calories: 80, tags: ['garlic', 'creamy', 'dipping'], icon: '🧄', ingredients: [{name: 'Garlic', amount: '6 cloves'}, {name: 'Yogurt', amount: '1 cup'}, {name: 'Lemon', amount: '1'}, {name: 'Olive Oil', amount: '2 tbsp'}], substitutions: [], steps: ['Crush garlic cloves.', 'Mix with yogurt.', 'Add lemon juice.', 'Drizzle olive oil while whisking.', 'Season with salt.', 'Refrigerate 30 minutes before serving.'] },
    { id: 203, name: 'Teriyaki Sauce', type: 'sauce', cuisine: 'Japanese', time: 15, difficulty: 'Easy', calories: 90, tags: ['umami', 'savory', 'glaze'], icon: '🥫', ingredients: [{name: 'Soy Sauce', amount: '1/4 cup'}, {name: 'Honey', amount: '2 tbsp'}, {name: 'Garlic', amount: '2 cloves'}, {name: 'Ginger', amount: '1 inch'}], substitutions: [], steps: ['Combine soy sauce and honey in pan.', 'Add minced garlic and ginger.', 'Simmer over low heat 5 minutes.', 'Thicken with cornstarch slurry if desired.', 'Use as marinade or glaze.'] },
    { id: 204, name: 'Salsa', type: 'sauce', cuisine: 'Mexican', time: 15, difficulty: 'Easy', calories: 40, tags: ['fresh', 'spicy', 'zesty'], icon: '🌶️', ingredients: [{name: 'Tomato', amount: '4'}, {name: 'Onion', amount: '1/2'}, {name: 'Lime', amount: '1'}, {name: 'Chili', amount: '1'}, {name: 'Cilantro', amount: '1/4 cup'}], substitutions: [{from: 'Chili', to: 'Pepper'}], steps: ['Dice tomatoes finely.', 'Chop onion and cilantro.', 'Mix together.', 'Add lime juice.', 'Season with salt.', 'Let sit 10 minutes for flavors to meld.'] },
    { id: 205, name: 'Tahini Sauce', type: 'sauce', cuisine: 'Mediterranean', time: 10, difficulty: 'Easy', calories: 110, tags: ['sesame', 'creamy', 'nutty'], icon: '🫘', ingredients: [{name: 'Chickpeas', amount: '1/4 cup'}, {name: 'Garlic', amount: '2 cloves'}, {name: 'Lemon', amount: '1'}, {name: 'Olive Oil', amount: '2 tbsp'}], substitutions: [], steps: ['Blend tahini, chickpeas, and garlic.', 'Add lemon juice.', 'Thin with water to desired consistency.', 'Season with salt.', 'Drizzle with olive oil.'] },
    { id: 206, name: 'Curry Sauce', type: 'sauce', cuisine: 'Indian', time: 25, difficulty: 'Medium', calories: 100, tags: ['spiced', 'aromatic', 'rich'], icon: '🍛', ingredients: [{name: 'Tomato', amount: '3'}, {name: 'Onion', amount: '1'}, {name: 'Garlic', amount: '3 cloves'}, {name: 'Ginger', amount: '1 inch'}, {name: 'Turmeric', amount: '1 tsp'}, {name: 'Cumin', amount: '1 tsp'}], substitutions: [], steps: ['Sauté onion until golden.', 'Add garlic and ginger.', 'Add spices, cook 1 minute.', 'Add tomatoes, cook until soft.', 'Blend until smooth.', 'Simmer 10 minutes.', 'Season to taste.'] },
    { id: 207, name: 'Chimichurri', type: 'sauce', cuisine: 'Mediterranean', time: 15, difficulty: 'Easy', calories: 90, tags: ['herby', 'fresh', 'tangy'], icon: '🌿', ingredients: [{name: 'Garlic', amount: '4 cloves'}, {name: 'Olive Oil', amount: '1/2 cup'}, {name: 'Vinegar', amount: '2 tbsp'}, {name: 'Mint', amount: '1/4 cup'}], substitutions: [], steps: ['Finely chop garlic and herbs.', 'Mix in olive oil and vinegar.', 'Season with salt and pepper.', 'Let sit 30 minutes.', 'Serve with grilled meats.'] },
    { id: 208, name: 'Soy Ginger Glaze', type: 'sauce', cuisine: 'Chinese', time: 15, difficulty: 'Easy', calories: 70, tags: ['savory', 'sweet', 'sticky'], icon: '🥫', ingredients: [{name: 'Soy Sauce', amount: '1/4 cup'}, {name: 'Ginger', amount: '1 inch'}, {name: 'Honey', amount: '2 tbsp'}, {name: 'Garlic', amount: '2 cloves'}], substitutions: [], steps: ['Grate ginger and mince garlic.', 'Combine all ingredients in pan.', 'Simmer over medium heat.', 'Reduce by half.', 'Use as glaze or dipping sauce.'] },

    // ===== DESSERTS =====
    { id: 301, name: 'Rice Pudding', type: 'dessert', cuisine: 'American', time: 40, difficulty: 'Easy', calories: 280, tags: ['creamy', 'comfort', 'sweet'], icon: '🍮', ingredients: [{name: 'Rice', amount: '1 cup'}, {name: 'Milk', amount: '4 cups'}, {name: 'Sugar', amount: '1/4 cup'}, {name: 'Butter', amount: '2 tbsp'}, {name: 'Cinnamon', amount: '1/2 tsp'}], substitutions: [], steps: ['Combine rice and milk in pot.', 'Bring to boil, reduce heat.', 'Simmer 35-40 minutes, stirring often.', 'Add sugar and butter.', 'Sprinkle with cinnamon.', 'Serve warm or chilled.'] },
    { id: 302, name: 'Flan', type: 'dessert', cuisine: 'Mexican', time: 60, difficulty: 'Medium', calories: 250, tags: ['creamy', 'caramel', 'elegant'], icon: '🍮', ingredients: [{name: 'Milk', amount: '2 cups'}, {name: 'Sugar', amount: '1/2 cup'}, {name: 'Egg', amount: '3'}, {name: 'Vanilla', amount: '1 tsp'}], substitutions: [], steps: ['Make caramel: melt sugar until golden.', 'Pour into baking dish.', 'Blend milk, eggs, sugar, and vanilla.', 'Pour over caramel.', 'Bake in water bath at 350°F for 50 min.', 'Chill overnight.', 'Invert to serve.'] },
    { id: 303, name: 'Fruit Salad', type: 'dessert', cuisine: 'American', time: 15, difficulty: 'Easy', calories: 120, tags: ['fresh', 'healthy', 'colorful'], icon: '🍓', ingredients: [{name: 'Lemon', amount: '1'}, {name: 'Honey', amount: '2 tbsp'}], substitutions: [{from: 'Honey', to: 'Sugar'}], steps: ['Cut fresh fruits of choice.', 'Combine in large bowl.', 'Mix lemon juice and honey.', 'Drizzle over fruit.', 'Toss gently.', 'Refrigerate 30 minutes before serving.'] },
    { id: 304, name: 'Banana Smoothie Bowl', type: 'dessert', cuisine: 'Fusion', time: 10, difficulty: 'Easy', calories: 220, tags: ['healthy', 'quick', 'tropical'], icon: '🍌', ingredients: [{name: 'Milk', amount: '1/2 cup'}, {name: 'Honey', amount: '1 tbsp'}, {name: 'Cinnamon', amount: 'pinch'}], substitutions: [], steps: ['Freeze banana slices.', 'Blend banana with milk until thick.', 'Pour into bowl.', 'Top with cinnamon.', 'Drizzle with honey.'] },
    { id: 305, name: 'Cinnamon Sugar Toast', type: 'dessert', cuisine: 'American', time: 10, difficulty: 'Easy', calories: 280, tags: ['quick', 'sweet', 'comfort'], icon: '🍞', ingredients: [{name: 'Bread', amount: '2 slices'}, {name: 'Butter', amount: '2 tbsp'}, {name: 'Sugar', amount: '2 tbsp'}, {name: 'Cinnamon', amount: '1 tsp'}], substitutions: [], steps: ['Toast bread lightly.', 'Butter generously.', 'Mix sugar and cinnamon.', 'Sprinkle over buttered toast.', 'Broil 1 minute until bubbly.', 'Serve immediately.'] },
    { id: 306, name: 'Mango Lassi', type: 'dessert', cuisine: 'Indian', time: 5, difficulty: 'Easy', calories: 200, tags: ['sweet', 'creamy', 'tropical'], icon: '🥭', ingredients: [{name: 'Yogurt', amount: '1 cup'}, {name: 'Milk', amount: '1/2 cup'}, {name: 'Sugar', amount: '2 tbsp'}, {name: 'Honey', amount: '1 tbsp'}], substitutions: [], steps: ['Blend yogurt and mango.', 'Add milk to thin.', 'Sweeten to taste.', 'Blend until smooth.', 'Serve chilled.'] },
    { id: 307, name: 'Chocolate Fondue', type: 'dessert', cuisine: 'American', time: 15, difficulty: 'Easy', calories: 320, tags: ['indulgent', 'fun', 'sharing'], icon: '🍫', ingredients: [{name: 'Butter', amount: '2 tbsp'}, {name: 'Sugar', amount: '2 tbsp'}, {name: 'Milk', amount: '1/4 cup'}, {name: 'Cocoa', amount: '3 tbsp'}], substitutions: [], steps: ['Melt butter in pot.', 'Add cocoa and sugar.', 'Stir in milk gradually.', 'Heat until smooth and glossy.', 'Transfer to fondue pot.', 'Serve with fruit and bread for dipping.'] },
    { id: 308, name: 'Honey Cake', type: 'dessert', cuisine: 'Mediterranean', time: 45, difficulty: 'Medium', calories: 340, tags: ['sweet', 'moist', 'aromatic'], icon: '🍯', ingredients: [{name: 'Flour', amount: '2 cups'}, {name: 'Honey', amount: '1/2 cup'}, {name: 'Egg', amount: '2'}, {name: 'Sugar', amount: '1/4 cup'}, {name: 'Cinnamon', amount: '1 tsp'}], substitutions: [], steps: ['Mix flour, sugar, and cinnamon.', 'Add eggs and honey.', 'Mix until smooth batter forms.', 'Pour into greased pan.', 'Bake at 350°F for 35-40 minutes.', 'Cool before slicing.'] },

    // ===== MORE MEALS =====
    { id: 41, name: 'Pancakes', type: 'meal', cuisine: 'American', time: 20, difficulty: 'Easy', calories: 350, tags: ['breakfast', 'sweet', 'comfort'], icon: '🥞', ingredients: [{name: 'Flour', amount: '1 cup'}, {name: 'Milk', amount: '1 cup'}, {name: 'Egg', amount: '1'}, {name: 'Sugar', amount: '2 tbsp'}, {name: 'Butter', amount: '2 tbsp'}], substitutions: [], steps: ['Mix flour and sugar in a bowl.', 'Add milk and egg, mix until smooth.', 'Heat butter in pan over medium.', 'Pour 1/4 cup batter per pancake.', 'Cook until bubbles form, flip.', 'Cook other side until golden.', 'Serve with syrup.'] },
    { id: 42, name: 'Waffles', type: 'meal', cuisine: 'American', time: 25, difficulty: 'Easy', calories: 400, tags: ['breakfast', 'sweet'], icon: '🧇', ingredients: [{name: 'Flour', amount: '1.5 cups'}, {name: 'Milk', amount: '1 cup'}, {name: 'Egg', amount: '2'}, {name: 'Butter', amount: '4 tbsp'}, {name: 'Sugar', amount: '2 tbsp'}], substitutions: [], steps: ['Mix dry ingredients.', 'Add wet ingredients, stir until combined.', 'Pour batter into hot waffle iron.', 'Cook until golden and crisp.', 'Serve with butter and syrup.'] },
    { id: 43, name: 'Bacon & Eggs', type: 'meal', cuisine: 'American', time: 15, difficulty: 'Easy', calories: 380, tags: ['breakfast', 'high protein', 'quick'], icon: '🥓', ingredients: [{name: 'Egg', amount: '2'}, {name: 'Salt', amount: 'pinch'}], substitutions: [], steps: ['Cook bacon in pan until crispy.', 'Remove bacon, keep some fat.', 'Fry eggs in bacon fat.', 'Season with salt.', 'Serve with bacon strips.'] },
    { id: 44, name: 'BLT Sandwich', type: 'meal', cuisine: 'American', time: 10, difficulty: 'Easy', calories: 320, tags: ['quick', 'lunch'], icon: '🥪', ingredients: [{name: 'Bread', amount: '2 slices'}, {name: 'Lettuce', amount: '2 leaves'}, {name: 'Tomato', amount: '1'}], substitutions: [], steps: ['Toast bread slices.', 'Spread mayo if desired.', 'Layer lettuce and sliced tomato.', 'Add bacon strips.', 'Close sandwich, cut diagonal.'] },
    { id: 45, name: 'Caesar Salad', type: 'meal', cuisine: 'American', time: 15, difficulty: 'Easy', calories: 250, tags: ['healthy', 'salad', 'quick'], icon: '🥗', ingredients: [{name: 'Lettuce', amount: '1 head'}, {name: 'Cheese', amount: '1/4 cup'}, {name: 'Garlic', amount: '2 cloves'}, {name: 'Lemon', amount: '1'}], substitutions: [], steps: ['Chop lettuce into bite-sized pieces.', 'Make dressing: mix garlic, lemon, olive oil.', 'Toss lettuce with dressing.', 'Top with parmesan shavings.', 'Add croutons if available.'] },
    { id: 46, name: 'Club Sandwich', type: 'meal', cuisine: 'American', time: 15, difficulty: 'Easy', calories: 450, tags: ['high protein', 'lunch'], icon: '🥪', ingredients: [{name: 'Bread', amount: '3 slices'}, {name: 'Chicken', amount: '100g'}, {name: 'Bacon', amount: '2 strips'}, {name: 'Lettuce', amount: '2 leaves'}, {name: 'Tomato', amount: '1'}], substitutions: [], steps: ['Toast bread slices.', 'Cook bacon until crispy.', 'Layer chicken, bacon, lettuce, tomato.', 'Stack layers with bread between.', 'Cut into quarters, secure with toothpicks.'] },
    { id: 47, name: 'Grilled Cheese & Tomato Soup', type: 'meal', cuisine: 'American', time: 25, difficulty: 'Easy', calories: 480, tags: ['comfort food', 'vegetarian'], icon: '🍲', ingredients: [{name: 'Bread', amount: '2 slices'}, {name: 'Cheese', amount: '2 slices'}, {name: 'Butter', amount: '2 tbsp'}, {name: 'Tomato', amount: '4'}, {name: 'Garlic', amount: '2 cloves'}], substitutions: [], steps: ['Make grilled cheese sandwich.', 'Blend tomatoes with garlic.', 'Simmer tomato soup 10 minutes.', 'Season soup with salt and pepper.', 'Serve soup with sandwich.'] },
    { id: 48, name: 'Egg Salad Sandwich', type: 'meal', cuisine: 'American', time: 15, difficulty: 'Easy', calories: 320, tags: ['quick', 'lunch', 'vegetarian'], icon: '🥪', ingredients: [{name: 'Egg', amount: '4'}, {name: 'Bread', amount: '2 slices'}, {name: 'Onion', amount: '2 tbsp'}, {name: 'Salt', amount: 'pinch'}], substitutions: [], steps: ['Boil eggs, cool, and chop.', 'Mix eggs with mayo and onion.', 'Season with salt and pepper.', 'Spread on bread.', 'Close and serve.'] },
    { id: 49, name: 'Philly Cheesesteak', type: 'meal', cuisine: 'American', time: 25, difficulty: 'Medium', calories: 520, tags: ['high protein', 'comfort food'], icon: '🥖', ingredients: [{name: 'Beef', amount: '200g'}, {name: 'Cheese', amount: '2 slices'}, {name: 'Onion', amount: '1'}, {name: 'Pepper', amount: '1'}, {name: 'Bread', amount: '1 hoagie'}], substitutions: [], steps: ['Slice beef thinly.', 'Sauté onions and peppers.', 'Cook beef with vegetables.', 'Melt cheese on top.', 'Spoon into hoagie roll.'] },
    { id: 50, name: 'Hot Dogs', type: 'meal', cuisine: 'American', time: 10, difficulty: 'Easy', calories: 350, tags: ['quick', 'kid friendly'], icon: '🌭', ingredients: [{name: 'Bread', amount: '2 hot dog buns'}, {name: 'Salt', amount: 'pinch'}], substitutions: [], steps: ['Boil or grill hot dogs.', 'Place in buns.', 'Add mustard and ketchup.', 'Top with onions if desired.'] },

    // ===== MORE ITALIAN =====
    { id: 51, name: 'Carbonara', type: 'meal', cuisine: 'Italian', time: 25, difficulty: 'Medium', calories: 550, tags: ['classic', 'creamy'], icon: '🍝', ingredients: [{name: 'Pasta', amount: '250g'}, {name: 'Egg', amount: '2'}, {name: 'Cheese', amount: '1/2 cup'}, {name: 'Bacon', amount: '100g'}, {name: 'Garlic', amount: '2 cloves'}], substitutions: [{from: 'Bacon', to: 'Pancetta'}], steps: ['Cook pasta al dente.', 'Fry bacon until crispy.', 'Mix eggs with cheese.', 'Toss hot pasta with egg mixture off heat.', 'Add bacon, serve immediately.'] },
    { id: 52, name: 'Pesto Pasta', type: 'meal', cuisine: 'Italian', time: 20, difficulty: 'Easy', calories: 480, tags: ['quick', 'vegetarian', 'herby'], icon: '🍝', ingredients: [{name: 'Pasta', amount: '250g'}, {name: 'Basil', amount: '1 cup'}, {name: 'Cheese', amount: '1/4 cup'}, {name: 'Garlic', amount: '2 cloves'}, {name: 'Olive Oil', amount: '1/3 cup'}], substitutions: [], steps: ['Cook pasta.', 'Blend basil, garlic, cheese, oil.', 'Toss hot pasta with pesto.', 'Add pasta water if needed.', 'Serve with extra cheese.'] },
    { id: 53, name: 'Lasagna', type: 'meal', cuisine: 'Italian', time: 60, difficulty: 'Medium', calories: 620, tags: ['comfort food', 'high protein'], icon: '🍝', ingredients: [{name: 'Pasta', amount: '12 sheets'}, {name: 'Beef', amount: '300g'}, {name: 'Cheese', amount: '2 cups'}, {name: 'Tomato Sauce', amount: '2 cups'}, {name: 'Onion', amount: '1'}], substitutions: [], steps: ['Brown beef with onion.', 'Add tomato sauce, simmer.', 'Layer pasta, meat sauce, cheese.', 'Repeat layers.', 'Bake at 375°F for 30 minutes.', 'Rest 10 minutes before serving.'] },
    { id: 54, name: 'Risotto', type: 'meal', cuisine: 'Italian', time: 35, difficulty: 'Medium', calories: 420, tags: ['creamy', 'comfort food'], icon: '🍚', ingredients: [{name: 'Rice', amount: '1.5 cups'}, {name: 'Broth', amount: '4 cups'}, {name: 'Cheese', amount: '1/2 cup'}, {name: 'Onion', amount: '1'}, {name: 'Butter', amount: '2 tbsp'}], substitutions: [], steps: ['Sauté onion in butter.', 'Add rice, toast 2 minutes.', 'Add broth one ladle at a time.', 'Stir constantly until absorbed.', 'Finish with cheese.', 'Serve immediately.'] },
    { id: 55, name: 'Bruschetta', type: 'meal', cuisine: 'Italian', time: 15, difficulty: 'Easy', calories: 180, tags: ['quick', 'vegetarian', 'fresh'], icon: '🍅', ingredients: [{name: 'Bread', amount: '1 baguette'}, {name: 'Tomato', amount: '3'}, {name: 'Garlic', amount: '3 cloves'}, {name: 'Basil', amount: '1/4 cup'}, {name: 'Olive Oil', amount: '2 tbsp'}], substitutions: [], steps: ['Slice and toast baguette.', 'Rub toast with garlic.', 'Dice tomatoes, mix with basil and oil.', 'Season with salt.', 'Spoon onto toast, serve.'] },
    { id: 56, name: 'Pizza Toast', type: 'meal', cuisine: 'Italian', time: 10, difficulty: 'Easy', calories: 280, tags: ['quick', 'kid friendly'], icon: '🍕', ingredients: [{name: 'Bread', amount: '2 slices'}, {name: 'Cheese', amount: '1/2 cup'}, {name: 'Tomato Sauce', amount: '2 tbsp'}, {name: 'Oregano', amount: 'pinch'}], substitutions: [], steps: ['Toast bread lightly.', 'Spread tomato sauce.', 'Top with cheese.', 'Broil until cheese melts.', 'Sprinkle oregano, serve.'] },

    // ===== MORE CHINESE =====
    { id: 57, name: 'Sweet & Sour Pork', type: 'meal', cuisine: 'Chinese', time: 35, difficulty: 'Medium', calories: 480, tags: ['sweet', 'tangy', 'classic'], icon: '🥡', ingredients: [{name: 'Beef', amount: '200g'}, {name: 'Pepper', amount: '2'}, {name: 'Onion', amount: '1'}, {name: 'Soy Sauce', amount: '3 tbsp'}, {name: 'Sugar', amount: '2 tbsp'}], substitutions: [], steps: ['Cut pork into chunks.', 'Fry until golden, set aside.', 'Sauté peppers and onion.', 'Make sauce: soy sauce, vinegar, sugar.', 'Add pork to sauce, toss.'] },
    { id: 58, name: 'Kung Pao Chicken', type: 'meal', cuisine: 'Chinese', time: 30, difficulty: 'Medium', calories: 420, tags: ['spicy', 'high protein'], icon: '🌶️', ingredients: [{name: 'Chicken', amount: '300g'}, {name: 'Peanuts', amount: '1/4 cup'}, {name: 'Chili', amount: '2 tbsp'}, {name: 'Soy Sauce', amount: '2 tbsp'}, {name: 'Garlic', amount: '3 cloves'}], substitutions: [], steps: ['Cut chicken into cubes.', 'Stir fry chicken until cooked.', 'Add garlic and chili.', 'Add soy sauce and sugar.', 'Toss with peanuts.', 'Serve over rice.'] },
    { id: 59, name: 'Dumplings', type: 'meal', cuisine: 'Chinese', time: 45, difficulty: 'Hard', calories: 350, tags: ['traditional', 'fun'], icon: '🥟', ingredients: [{name: 'Flour', amount: '2 cups'}, {name: 'Beef', amount: '200g'}, {name: 'Cabbage', amount: '1 cup'}, {name: 'Garlic', amount: '2 cloves'}, {name: 'Ginger', amount: '1 inch'}], substitutions: [], steps: ['Make dough, let rest.', 'Mix filling ingredients.', 'Roll dough into circles.', 'Fill and fold dumplings.', 'Steam 15 minutes or boil.', 'Serve with dipping sauce.'] },
    { id: 60, name: 'Chow Mein', type: 'meal', cuisine: 'Chinese', time: 25, difficulty: 'Easy', calories: 400, tags: ['quick', 'noodles'], icon: '🍜', ingredients: [{name: 'Noodles', amount: '250g'}, {name: 'Soy Sauce', amount: '3 tbsp'}, {name: 'Onion', amount: '1'}, {name: 'Cabbage', amount: '1 cup'}, {name: 'Garlic', amount: '2 cloves'}], substitutions: [], steps: ['Cook noodles.', 'Stir fry vegetables.', 'Add noodles and soy sauce.', 'Toss everything together.', 'Serve hot.'] },

    // ===== MORE MEXICAN =====
    { id: 61, name: 'Guacamole', type: 'meal', cuisine: 'Mexican', time: 10, difficulty: 'Easy', calories: 180, tags: ['healthy', 'fresh', 'dip'], icon: '🥑', ingredients: [{name: 'Avocado', amount: '2'}, {name: 'Lime', amount: '1'}, {name: 'Onion', amount: '1/4'}, {name: 'Tomato', amount: '1'}, {name: 'Chili', amount: '1'}], substitutions: [], steps: ['Mash avocados.', 'Add lime juice.', 'Dice onion, tomato, and chili.', 'Mix everything together.', 'Season with salt.', 'Serve with tortilla chips.'] },
    { id: 62, name: 'Churros', type: 'meal', cuisine: 'Mexican', time: 30, difficulty: 'Medium', calories: 320, tags: ['sweet', 'dessert', 'fun'], icon: '🥖', ingredients: [{name: 'Flour', amount: '1 cup'}, {name: 'Butter', amount: '2 tbsp'}, {name: 'Sugar', amount: '2 tbsp'}, {name: 'Cinnamon', amount: '1 tbsp'}], substitutions: [], steps: ['Boil water with butter.', 'Add flour, stir until smooth.', 'Pipe into strips.', 'Fry until golden.', 'Roll in cinnamon sugar.', 'Serve with chocolate sauce.'] },
    { id: 63, name: 'Tamales', type: 'meal', cuisine: 'Mexican', time: 90, difficulty: 'Hard', calories: 280, tags: ['traditional', 'time consuming'], icon: '🌽', ingredients: [{name: 'Flour', amount: '2 cups'}, {name: 'Chicken', amount: '200g'}, {name: 'Corn', amount: '1 cup'}, {name: 'Onion', amount: '1'}, {name: 'Chili', amount: '2 tbsp'}], substitutions: [], steps: ['Make masa dough.', 'Prepare filling with chicken.', 'Spread dough on corn husks.', 'Add filling, fold husks.', 'Steam for 1 hour.', 'Serve with salsa.'] },
    { id: 64, name: 'Mexican Pizza', type: 'meal', cuisine: 'Mexican', time: 20, difficulty: 'Easy', calories: 380, tags: ['quick', 'kid friendly'], icon: '🍕', ingredients: [{name: 'Tortilla', amount: '2'}, {name: 'Beans', amount: '1/2 cup'}, {name: 'Cheese', amount: '1 cup'}, {name: 'Tomato', amount: '1'}, {name: 'Onion', amount: '1/4'}], substitutions: [], steps: ['Place tortilla as base.', 'Spread beans.', 'Top with cheese.', 'Add diced tomatoes and onion.', 'Top with second tortilla.', 'Bake at 400°F for 10 minutes.'] },

    // ===== MORE INDIAN =====
    { id: 65, name: 'Aloo Gobi', type: 'meal', cuisine: 'Indian', time: 30, difficulty: 'Easy', calories: 220, tags: ['vegetarian', 'spiced'], icon: '🥔', ingredients: [{name: 'Potato', amount: '2'}, {name: 'Cauliflower', amount: '1 cup'}, {name: 'Turmeric', amount: '1 tsp'}, {name: 'Cumin', amount: '1 tsp'}, {name: 'Onion', amount: '1'}], substitutions: [], steps: ['Dice potatoes and cauliflower.', 'Sauté onion with spices.', 'Add vegetables.', 'Cover and cook 20 minutes.', 'Season with salt.', 'Serve with roti.'] },
    { id: 66, name: 'Samosa', type: 'meal', cuisine: 'Indian', time: 45, difficulty: 'Medium', calories: 280, tags: ['snack', 'vegetarian', 'spiced'], icon: '🥟', ingredients: [{name: 'Flour', amount: '2 cups'}, {name: 'Potato', amount: '2'}, {name: 'Peas', amount: '1/2 cup'}, {name: 'Cumin', amount: '1 tsp'}, {name: 'Ginger', amount: '1 inch'}], substitutions: [], steps: ['Make dough, let rest.', 'Boil and mash potatoes.', 'Mix with peas and spices.', 'Fill dough triangles.', 'Fry until golden.', 'Serve with chutney.'] },
    { id: 67, name: 'Chana Masala', type: 'meal', cuisine: 'Indian', time: 30, difficulty: 'Easy', calories: 280, tags: ['vegetarian', 'high protein'], icon: '🫘', ingredients: [{name: 'Chickpeas', amount: '2 cans'}, {name: 'Tomato', amount: '2'}, {name: 'Onion', amount: '1'}, {name: 'Turmeric', amount: '1 tsp'}, {name: 'Cumin', amount: '1 tsp'}], substitutions: [], steps: ['Sauté onion until golden.', 'Add spices and tomatoes.', 'Add chickpeas.', 'Simmer 15 minutes.', 'Finish with garam masala.', 'Serve with rice or naan.'] },
    { id: 68, name: 'Palak Paneer', type: 'meal', cuisine: 'Indian', time: 35, difficulty: 'Medium', calories: 350, tags: ['vegetarian', 'creamy'], icon: '🥬', ingredients: [{name: 'Spinach', amount: '2 cups'}, {name: 'Tofu', amount: '200g'}, {name: 'Onion', amount: '1'}, {name: 'Garlic', amount: '3 cloves'}, {name: 'Cumin', amount: '1 tsp'}], substitutions: [], steps: ['Blanch spinach, blend smooth.', 'Cube and fry paneer.', 'Sauté onion and garlic.', 'Add spices and spinach puree.', 'Simmer 10 minutes.', 'Add paneer, serve.'] },

    // ===== MORE MEDITERRANEAN =====
    { id: 69, name: 'Chicken Souvlaki', type: 'meal', cuisine: 'Mediterranean', time: 30, difficulty: 'Easy', calories: 380, tags: ['grilled', 'healthy'], icon: '🍢', ingredients: [{name: 'Chicken', amount: '300g'}, {name: 'Lemon', amount: '1'}, {name: 'Garlic', amount: '3 cloves'}, {name: 'Oregano', amount: '1 tbsp'}, {name: 'Olive Oil', amount: '2 tbsp'}], substitutions: [], steps: ['Marinate chicken in lemon, garlic, oregano.', 'Thread onto skewers.', 'Grill 5-6 minutes per side.', 'Serve in pita with tzatziki.', 'Add vegetables.'] },
    { id: 70, name: 'Lamb Kofta', type: 'meal', cuisine: 'Mediterranean', time: 30, difficulty: 'Medium', calories: 420, tags: ['grilled', 'spiced'], icon: '🍢', ingredients: [{name: 'Lamb', amount: '300g'}, {name: 'Onion', amount: '1/2'}, {name: 'Garlic', amount: '2 cloves'}, {name: 'Cumin', amount: '1 tsp'}, {name: 'Mint', amount: '1/4 cup'}], substitutions: [], steps: ['Grind lamb with onion and garlic.', 'Add spices and mint.', 'Form into oval shapes.', 'Grill or pan-fry.', 'Serve with pita and salad.'] },

    // ===== JAPANESE =====
    { id: 71, name: 'Teriyaki Chicken', type: 'meal', cuisine: 'Japanese', time: 30, difficulty: 'Easy', calories: 380, tags: ['sweet', 'savory', 'classic'], icon: '🍗', ingredients: [{name: 'Chicken', amount: '300g'}, {name: 'Soy Sauce', amount: '1/4 cup'}, {name: 'Honey', amount: '2 tbsp'}, {name: 'Garlic', amount: '2 cloves'}, {name: 'Ginger', amount: '1 inch'}], substitutions: [], steps: ['Mix soy sauce, honey, garlic, ginger.', 'Marinate chicken 15 minutes.', 'Pan-fry or bake chicken.', 'Brush with remaining sauce.', 'Serve over rice.'] },
    { id: 72, name: 'Ramen', type: 'meal', cuisine: 'Japanese', time: 30, difficulty: 'Medium', calories: 450, tags: ['noodles', 'soup', 'comfort'], icon: '🍜', ingredients: [{name: 'Noodles', amount: '200g'}, {name: 'Broth', amount: '4 cups'}, {name: 'Egg', amount: '1'}, {name: 'Garlic', amount: '2 cloves'}, {name: 'Soy Sauce', amount: '2 tbsp'}], substitutions: [], steps: ['Heat broth with garlic.', 'Add soy sauce.', 'Cook noodles separately.', 'Add noodles to broth.', 'Top with soft-boiled egg.', 'Garnish with green onions.'] },
    { id: 73, name: 'Gyoza', type: 'meal', cuisine: 'Japanese', time: 40, difficulty: 'Medium', calories: 320, tags: ['dumplings', 'pan-fried'], icon: '🥟', ingredients: [{name: 'Flour', amount: '2 cups'}, {name: 'Pork', amount: '200g'}, {name: 'Cabbage', amount: '1 cup'}, {name: 'Garlic', amount: '2 cloves'}, {name: 'Ginger', amount: '1 inch'}], substitutions: [], steps: ['Make dough.', 'Mix filling.', 'Fill and fold wrappers.', 'Pan-fry until crispy on bottom.', 'Add water, steam covered.', 'Serve with ponzu.'] },
    { id: 74, name: 'Katsu Curry', type: 'meal', cuisine: 'Japanese', time: 40, difficulty: 'Medium', calories: 580, tags: ['comfort food', 'crispy'], icon: '🍛', ingredients: [{name: 'Chicken', amount: '200g'}, {name: 'Flour', amount: '1 cup'}, {name: 'Rice', amount: '1 cup'}, {name: 'Potato', amount: '1'}, {name: 'Carrot', amount: '1'}], substitutions: [], steps: ['Bread chicken cutlets.', 'Fry until golden.', 'Make curry: boil vegetables, add roux.', 'Cook rice.', 'Serve katsu over rice with curry.'] },

    // ===== MORE DRINKS =====
    { id: 109, name: 'Matcha Latte', type: 'drink', cuisine: 'Japanese', time: 10, difficulty: 'Easy', calories: 150, tags: ['trendy', 'healthy'], icon: '🍵', ingredients: [{name: 'Milk', amount: '1 cup'}, {name: 'Honey', amount: '1 tbsp'}, {name: 'Sugar', amount: '1 tsp'}], substitutions: [], steps: ['Heat milk.', 'Add matcha powder.', 'Whisk until smooth.', 'Sweeten to taste.', 'Serve hot or iced.'] },
    { id: 110, name: 'Berry Smoothie', type: 'drink', cuisine: 'American', time: 5, difficulty: 'Easy', calories: 160, tags: ['healthy', 'refreshing'], icon: '🫐', ingredients: [{name: 'Milk', amount: '1 cup'}, {name: 'Yogurt', amount: '1/2 cup'}, {name: 'Honey', amount: '1 tbsp'}], substitutions: [], steps: ['Add all ingredients to blender.', 'Blend until smooth.', 'Pour into glass.', 'Serve immediately.'] },
    { id: 111, name: 'Chai Latte', type: 'drink', cuisine: 'Indian', time: 15, difficulty: 'Easy', calories: 180, tags: ['spiced', 'warming'], icon: '☕', ingredients: [{name: 'Milk', amount: '1 cup'}, {name: 'Ginger', amount: '1 inch'}, {name: 'Cinnamon', amount: '1/2 stick'}, {name: 'Honey', amount: '1 tbsp'}], substitutions: [], steps: ['Heat milk with spices.', 'Simmer 5 minutes.', 'Strain if desired.', 'Sweeten with honey.', 'Serve warm.'] },
    { id: 112, name: 'Passion Fruit Drink', type: 'drink', cuisine: 'Fusion', time: 5, difficulty: 'Easy', calories: 100, tags: ['tropical', 'refreshing'], icon: '🍹', ingredients: [{name: 'Lime', amount: '2'}, {name: 'Sugar', amount: '2 tbsp'}, {name: 'Water', amount: '2 cups'}, {name: 'Honey', amount: '1 tbsp'}], substitutions: [], steps: ['Scoop passion fruit pulp.', 'Mix with water and sugar.', 'Add lime juice.', 'Strain if desired.', 'Serve over ice.'] },

    // ===== MORE SAUCES =====
    { id: 209, name: 'Hollandaise', type: 'sauce', cuisine: 'American', time: 15, difficulty: 'Medium', calories: 120, tags: ['creamy', 'classic'], icon: '🥚', ingredients: [{name: 'Egg', amount: '3'}, {name: 'Butter', amount: '1/2 cup'}, {name: 'Lemon', amount: '1'}, {name: 'Salt', amount: 'pinch'}], substitutions: [], steps: ['Whisk yolks over double boiler.', 'Slowly drizzle in melted butter.', 'Add lemon juice.', 'Season with salt.', 'Serve warm.'] },
    { id: 210, name: 'Béchamel', type: 'sauce', cuisine: 'Italian', time: 15, difficulty: 'Easy', calories: 100, tags: ['creamy', 'base sauce'], icon: '🥛', ingredients: [{name: 'Milk', amount: '2 cups'}, {name: 'Butter', amount: '2 tbsp'}, {name: 'Flour', amount: '2 tbsp'}, {name: 'Cheese', amount: '1/4 cup'}], substitutions: [], steps: ['Melt butter, add flour.', 'Cook 1 minute.', 'Gradually add milk, stirring.', 'Simmer until thickened.', 'Add cheese, season.'] },
    { id: 211, name: 'Guajillo Salsa', type: 'sauce', cuisine: 'Mexican', time: 20, difficulty: 'Easy', calories: 50, tags: ['spicy', 'traditional'], icon: '🌶️', ingredients: [{name: 'Tomato', amount: '3'}, {name: 'Chili', amount: '3 dried'}, {name: 'Garlic', amount: '2 cloves'}, {name: 'Onion', amount: '1/4'}], substitutions: [], steps: ['Toast chiles until fragrant.', 'Blend with tomatoes and aromatics.', 'Simmer 10 minutes.', 'Season with salt.', 'Serve with chips.'] },
    { id: 212, name: 'Tzatziki', type: 'sauce', cuisine: 'Mediterranean', time: 10, difficulty: 'Easy', calories: 60, tags: ['creamy', 'garlic', 'healthy'], icon: '🥒', ingredients: [{name: 'Yogurt', amount: '1 cup'}, {name: 'Cucumber', amount: '1/2'}, {name: 'Garlic', amount: '2 cloves'}, {name: 'Lemon', amount: '1'}], substitutions: [], steps: ['Grate cucumber, squeeze dry.', 'Mix with yogurt.', 'Add minced garlic.', 'Season with lemon and salt.', 'Chill before serving.'] },

    // ===== MORE DESSERTS =====
    { id: 309, name: 'Brownies', type: 'dessert', cuisine: 'American', time: 35, difficulty: 'Easy', calories: 280, tags: ['chocolate', 'fudgy', 'classic'], icon: '🍫', ingredients: [{name: 'Flour', amount: '1/2 cup'}, {name: 'Cocoa', amount: '1/3 cup'}, {name: 'Sugar', amount: '1 cup'}, {name: 'Butter', amount: '1/4 cup'}, {name: 'Egg', amount: '2'}], substitutions: [], steps: ['Melt butter with cocoa.', 'Mix in sugar and eggs.', 'Fold in flour.', 'Pour into pan.', 'Bake at 350°F for 25 minutes.', 'Cool before cutting.'] },
    { id: 310, name: 'Cheesecake', type: 'dessert', cuisine: 'American', time: 60, difficulty: 'Medium', calories: 350, tags: ['creamy', 'rich', 'elegant'], icon: '🍰', ingredients: [{name: 'Cream', amount: '8 oz'}, {name: 'Sugar', amount: '1/2 cup'}, {name: 'Egg', amount: '3'}, {name: 'Vanilla', amount: '1 tsp'}, {name: 'Butter', amount: '2 tbsp'}], substitutions: [], steps: ['Mix cream cheese and sugar.', 'Add eggs and vanilla.', 'Pour over graham crust.', 'Bake at 325°F for 50 minutes.', 'Chill overnight.', 'Top with fruit.'] },
    { id: 311, name: 'Chocolate Chip Cookies', type: 'dessert', cuisine: 'American', time: 25, difficulty: 'Easy', calories: 220, tags: ['sweet', 'classic', 'chewy'], icon: '🍪', ingredients: [{name: 'Flour', amount: '2 cups'}, {name: 'Sugar', amount: '1/2 cup'}, {name: 'Butter', amount: '1 cup'}, {name: 'Egg', amount: '2'}, {name: 'Chocolate', amount: '1 cup'}], substitutions: [], steps: ['Cream butter and sugar.', 'Add eggs and vanilla.', 'Mix in flour.', 'Fold in chocolate chips.', 'Drop spoonfuls on baking sheet.', 'Bake at 375°F for 10 minutes.'] },
    { id: 312, name: 'Apple Pie', type: 'dessert', cuisine: 'American', time: 60, difficulty: 'Medium', calories: 320, tags: ['classic', 'spiced', 'comfort'], icon: '🥧', ingredients: [{name: 'Flour', amount: '2 cups'}, {name: 'Apple', amount: '4'}, {name: 'Sugar', amount: '1/2 cup'}, {name: 'Butter', amount: '4 tbsp'}, {name: 'Cinnamon', amount: '1 tbsp'}], substitutions: [], steps: ['Make pie dough.', 'Slice apples thin.', 'Mix with sugar and cinnamon.', 'Fill crust, top with dough.', 'Bake at 375°F for 45 minutes.', 'Cool before serving.'] },
    { id: 313, name: 'Panna Cotta', type: 'dessert', cuisine: 'Italian', time: 30, difficulty: 'Easy', calories: 250, tags: ['creamy', 'elegant', 'light'], icon: '🍮', ingredients: [{name: 'Cream', amount: '2 cups'}, {name: 'Sugar', amount: '1/4 cup'}, {name: 'Vanilla', amount: '1 pod'}, {name: 'Gelatin', amount: '2 sheets'}], substitutions: [], steps: ['Bloom gelatin in cold water.', 'Heat cream with sugar and vanilla.', 'Dissolve gelatin in cream.', 'Pour into molds.', 'Chill 4 hours.', 'Serve with berry sauce.'] },
    { id: 314, name: 'Tiramisu', type: 'dessert', cuisine: 'Italian', time: 30, difficulty: 'Medium', calories: 300, tags: ['coffee', 'creamy', 'classic'], icon: '☕', ingredients: [{name: 'Cream', amount: '8 oz'}, {name: 'Sugar', amount: '1/4 cup'}, {name: 'Coffee', amount: '1 cup'}, {name: 'Cocoa', amount: '2 tbsp'}], substitutions: [], steps: ['Whip cream with sugar.', 'Dip ladyfingers in coffee.', 'Layer cream and cookies.', 'Dust with cocoa.', 'Chill overnight.'] },
    { id: 315, name: 'Gelato', type: 'dessert', cuisine: 'Italian', time: 30, difficulty: 'Medium', calories: 180, tags: ['creamy', 'frozen', 'Italian'], icon: '🍨', ingredients: [{name: 'Milk', amount: '2 cups'}, {name: 'Cream', amount: '1 cup'}, {name: 'Sugar', amount: '3/4 cup'}, {name: 'Vanilla', amount: '1 pod'}], substitutions: [], steps: ['Heat milk, cream, and sugar.', 'Add vanilla.', 'Chill mixture.', 'Churn in ice cream maker.', 'Freeze until firm.'] },
    { id: 316, name: 'Crepes', type: 'dessert', cuisine: 'French', time: 30, difficulty: 'Easy', calories: 200, tags: ['thin', 'versatile', 'classic'], icon: '🥞', ingredients: [{name: 'Flour', amount: '1 cup'}, {name: 'Milk', amount: '1 cup'}, {name: 'Egg', amount: '2'}, {name: 'Butter', amount: '2 tbsp'}, {name: 'Sugar', amount: '1 tbsp'}], substitutions: [], steps: ['Blend all ingredients.', 'Rest batter 30 minutes.', 'Pour thin layer in pan.', 'Cook until edges lift.', 'Fill with Nutella or fruit.', 'Fold and serve.'] },
    { id: 317, name: 'Baklava', type: 'dessert', cuisine: 'Mediterranean', time: 60, difficulty: 'Medium', calories: 280, tags: ['sweet', 'nutty', 'layered'], icon: '🥜', ingredients: [{name: 'Flour', amount: '1 lb phyllo'}, {name: 'Butter', amount: '1 cup'}, {name: 'Walnuts', amount: '2 cups'}, {name: 'Honey', amount: '1 cup'}, {name: 'Sugar', amount: '1 cup'}], substitutions: [], steps: ['Layer phyllo with butter.', 'Add chopped nuts between layers.', 'Cut into diamond shapes.', 'Bake at 350°F for 30 minutes.', 'Pour honey syrup over hot baklava.'] },
    { id: 318, name: 'Mochi Ice Cream', type: 'dessert', cuisine: 'Japanese', time: 45, difficulty: 'Medium', calories: 200, tags: ['chewy', 'fun', 'Japanese'], icon: '🍡', ingredients: [{name: 'Flour', amount: '1 cup'}, {name: 'Sugar', amount: '1/4 cup'}, {name: 'Milk', amount: '3/4 cup'}, {name: 'Ice Cream', amount: '1 cup'}], substitutions: [], steps: ['Mix flour, sugar, milk.', 'Steam or microwave until dough forms.', 'Cool, then flatten.', 'Wrap small ice cream scoops.', 'Freeze until firm.'] },
    { id: 319, name: 'Tres Leches', type: 'dessert', cuisine: 'Mexican', time: 60, difficulty: 'Medium', calories: 320, tags: ['moist', 'sweet', 'milky'], icon: '🥛', ingredients: [{name: 'Flour', amount: '1 cup'}, {name: 'Milk', amount: '3 cups'}, {name: 'Cream', amount: '1 cup'}, {name: 'Sugar', amount: '3/4 cup'}, {name: 'Egg', amount: '4'}], substitutions: [], steps: ['Bake sponge cake.', 'Mix three milks together.', 'Poke holes in cake.', 'Pour milk mixture over.', 'Chill overnight.', 'Top with whipped cream.'] },
    { id: 320, name: 'Gulab Jamun', type: 'dessert', cuisine: 'Indian', time: 45, difficulty: 'Medium', calories: 250, tags: ['sweet', 'fried', 'syrupy'], icon: '🍯', ingredients: [{name: 'Flour', amount: '1 cup'}, {name: 'Milk', amount: '1/4 cup'}, {name: 'Sugar', amount: '2 cups'}, {name: 'Butter', amount: '2 tbsp'}, {name: 'Honey', amount: '1/4 cup'}], substitutions: [], steps: ['Make dough with milk and butter.', 'Form into balls.', 'Fry until golden brown.', 'Make sugar syrup.', 'Soak balls in warm syrup.', 'Serve warm.'] },
];

// ===== STATE =====
let currentServings = 2;
let favorites = JSON.parse(localStorage.getItem('mealGenieFav') || '[]');
let selectedIngredients = [];
let leftoverMode = false;
let selectedCuisine = 'Any';
let generatedRecipes = JSON.parse(localStorage.getItem('mealGenieGenerated') || '[]');
let currentGeneratedIndex = -1;
let currentRecipe = null;
let blogPosts = JSON.parse(localStorage.getItem('mealGenieBlog') || '[]');
let cookingState = {
    currentRecipe: null,
    currentStep: 0,
    isGuiding: false
};

// ===== CHATBOT FUNCTIONS =====
function toggleChatbot() {
    const panel = document.getElementById('chatbotPanel');
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) {
        document.getElementById('blogPanel').classList.remove('open');
        document.getElementById('settingsPanel').classList.remove('open');
    }
}

function addChatbotMessage(text, isUser = false) {
    const container = document.getElementById('chatbotMessages');
    const msg = document.createElement('div');
    msg.className = isUser ? 'chat-msg-user' : 'chat-msg-bot';
    msg.innerHTML = `<p>${text}</p>`;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
}

function sendChatbotMessage() {
    const input = document.getElementById('chatbotInput');
    const message = input.value.trim();
    if (!message) return;
    
    addChatbotMessage(message, true);
    input.value = '';
    
    processChatbotMessage(message);
}

async function processChatbotMessage(message) {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('next') && cookingState.isGuiding) {
        provideNextStep();
        return;
    }
    if (lowerMsg.includes('repeat') && cookingState.isGuiding) {
        repeatCurrentStep();
        return;
    }
    if (lowerMsg.includes('pause') || lowerMsg.includes('stop')) {
        stopCookingGuide();
        return;
    }
    
    try {
        await getAIResponse(message);
    } catch (error) {
        addChatbotMessage("Sorry, I couldn't process that. Please try again!");
    }
}

async function getAIResponse(message) {
    const hasApiKey = getOpenRouterKey();
    
    if (hasApiKey) {
        await getAIResponseOnline(message);
    } else {
        getLocalResponse(message);
    }
}

function getLocalResponse(message) {
    const lowerMsg = message.toLowerCase();
    let response = null;
    
    const localKnowledge = [
        { keywords: ['how to make', 'how do i', 'how to cook', 'how to prepare', 'recipe for', 'instructions'], 
          response: "I can help! Select ingredients from the app to see matching recipes. Or ask me a specific cooking question and I'll do my best to help from my cooking knowledge." },
        { keywords: ['scrambled eggs', 'scramble egg'], 
          response: "Crack 3 eggs into a bowl, add a pinch of salt, and whisk. Heat 1 tbsp butter in a pan over medium-low heat. Pour in eggs, stir gently until soft curds form. Remove while slightly underdone - they'll finish cooking from residual heat. Serve immediately!" },
        { keywords: ['grilled cheese', 'grill cheese'], 
          response: "Butter one side of each bread slice. Place bread butter-side down in a non-stick pan over medium heat. Layer cheese slices on top. Top with second bread, butter-side up. Cook 3-4 min until golden, flip carefully, cook other side 3 min. Slice diagonal and serve hot!" },
        { keywords: ['chicken'], 
          response: "Season chicken with salt and pepper. Pan-fry 5-6 minutes per side over medium-high heat until internal temp reaches 165°F. Let rest 5 minutes before slicing. Tip: Pound chicken thin for faster, even cooking!" },
        { keywords: ['pasta', 'spaghetti'], 
          response: "Boil a large pot of salted water (should taste like the sea). Cook pasta according to package time minus 1 minute for al dente. Reserve 1 cup pasta water before draining. Toss with your sauce and add pasta water to loosen if needed." },
        { keywords: ['rice', 'cook rice'], 
          response: "Rinse rice until water runs clear. Use a 1:1.5 ratio (rice to water). Bring to boil, reduce heat to low, cover and cook 18 minutes. Let rest covered 5 minutes, then fluff with fork. Day-old rice is best for fried rice!" },
        { keywords: ['substitute', 'replacement', 'instead of', 'swap'], 
          response: "Common swaps: Butter → Olive oil or Mayo. Milk → Water or plant milk. Eggs → Flax eggs (1 tbsp ground flax + 3 tbsp water per egg). Sugar → Honey or maple syrup. Flour → Gluten-free flour blend." },
        { keywords: ['egg'], 
          response: "Egg basics: Room temp eggs crack easier. To hard boil: Place in cold water, bring to boil, remove from heat and cover 12 min. To soft boil: 6-7 minutes. To fry: heat oil in pan, crack egg carefully, cook 2-3 min for runny yolk." },
        { keywords: ['chop', 'cut', 'dice', 'slice'], 
          response: " Knife tips: Use a sharp knife! Dice = small cubes. Mince = very fine pieces. Julienne = thin matchstick strips. Slice = any thickness. Always curl fingers under when chopping (knuckle guide). Safety first!" },
        { keywords: ['season', 'flavor', 'spice'], 
          response: "Basic seasoning: Salt enhances flavor. Pepper adds heat. cumin = earthy, for Mexican/Indian. Paprika = sweet/smoky. Oregano = Italian. Turmeric = earthy, turns food yellow. Taste as you go!" },
        { keywords: ['oven', 'bake', 'temperature'], 
          response: "Common temps: 325°F = slow bake (cheesecake). 350°F = standard bake (cakes, cookies). 375°F = slightly hotter. 400°F = hot bake (pies, pizza). 425°F+ = very hot (roasted veggies). Always preheat!" },
        { keywords: ['thank', 'thanks'], 
          response: "You're welcome! Happy cooking! 🍳 If you need help with anything else, just ask!" },
        { keywords: ['hello', 'hi', 'hey', 'help'], 
          response: "Hi there! 👋 I'm your cooking assistant. I can help with recipes, cooking techniques, ingredient substitutions, or step-by-step guidance. What are you cooking today?" },
        { keywords: ['stir fry', 'stir-fry', 'wok'], 
          response: "Stir fry tips: Cut everything same size for even cooking. Heat wok until smoking, add oil then food. Keep food moving - don't overcrowd. High heat, short time = crispy veggies! Have all ingredients ready before you start (mise en place)." },
        { keywords: ['soup', 'stew'], 
          response: "Soup tip: Sauté aromatics (onion, garlic, celery) first. Add liquids, bring to simmer. Most soups taste better the next day - flavors meld! For thicken, make a roux or blend and add back." },
        { keywords: ['salad', 'dressing'], 
          response: "Salad tip: Wash and dry lettuce in a salad spinner. For dressing: oil + acid (vinegar/lemon) + salt + pepper = basic vinaigrette. Toss salad just before serving, not in the bowl you'll store it in!" },
        { keywords: ['cook', 'prepare', 'make'], 
          response: "Select ingredients in the app to see matching recipes! Or ask me about specific cooking techniques - I'm here to help step by step. What would you like to cook?" },
    ];
    
    for (const item of localKnowledge) {
        if (item.keywords.some(k => lowerMsg.includes(k))) {
            response = item.response;
            break;
        }
    }
    
    if (!response) {
        response = "That's a cooking question! From my knowledge: start with fresh ingredients, season as you go, and don't be afraid to experiment. 😊 Select ingredients in the app for matching recipes, or ask a more specific cooking question!";
    }
    
    addChatbotMessage(response);
}

async function getAIResponseOnline(message) {
    addChatbotMessage("Thinking...");
    
    const systemPrompt = `You are a friendly voice cooking assistant inside the MealGenie app. Your rules:
1. ONLY respond to cooking-related topics (recipes, ingredients, kitchen tasks, food preparation)
2. If asked anything outside cooking, say: "Oops! I can only help with cooking-related questions. Please ask something about food, recipes, or cooking."
3. Keep responses SHORT and CONCISE - max 2-3 sentences for voice optimization
4. When guiding cooking steps, give ONE step at a time and wait for "next" command
5. Be friendly, practical, and beginner-friendly
6. Suggest simple ingredient substitutions when relevant`;

    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getOpenRouterKey(),
                'HTTP-Referer': window.location.href,
                'X-Title': 'MealGenie Cooking Assistant'
            },
            body: JSON.stringify({
                model: 'anthropic/claude-3-haiku',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: message }
                ],
                max_tokens: 300
            })
        });
        
        if (!response.ok) throw new Error('API error');
        
        const data = await response.json();
        const botMsg = data.choices[0].message.content;
        
        document.querySelector('#chatbotMessages .chat-msg-bot:last-child')?.remove();
        
        if (botMsg.includes('[STEP:')) {
            handleStepCommand(botMsg, message);
        } else {
            addChatbotMessage(botMsg);
        }
    } catch (error) {
        document.querySelector('#chatbotMessages .chat-msg-bot:last-child')?.remove();
        addChatbotMessage("I'm having trouble connecting. Your question has been saved - try again or check your API key in Settings.");
    }
}

function handleStepCommand(response, originalMsg) {
    const stepMatch = response.match(/\[STEP:(\d+)\]/);
    if (stepMatch) {
        const recipeId = parseInt(stepMatch[1]);
        startCookingGuide(recipeId);
        const cleanResponse = response.replace(/\[STEP:\d+\]/g, '').trim();
        if (cleanResponse) addChatbotMessage(cleanResponse);
    } else {
        addChatbotMessage(response);
    }
}

function startCookingGuide(recipeId) {
    const allRecipes = [...recipes, ...generatedRecipes];
    const recipe = allRecipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    cookingState.currentRecipe = recipe;
    cookingState.currentStep = 0;
    cookingState.isGuiding = true;
    
    addChatbotMessage(`🍳 Let's cook ${recipe.name}! I'll guide you step by step. Say "next" to continue, "repeat" to hear it again, or "pause" to stop.`);
    provideNextStep();
}

function provideNextStep() {
    if (!cookingState.currentRecipe) return;
    
    const step = cookingState.currentRecipe.steps[cookingState.currentStep];
    if (!step) {
        addChatbotMessage("🎉 That's all the steps! Your dish should be ready. Enjoy your meal!");
        cookingState.isGuiding = false;
        return;
    }
    
    const stepNum = cookingState.currentStep + 1;
    addChatbotMessage(`Step ${stepNum}: ${step}`);
    cookingState.currentStep++;
}

function repeatCurrentStep() {
    if (!cookingState.currentRecipe || cookingState.currentStep === 0) return;
    const step = cookingState.currentRecipe.steps[cookingState.currentStep - 1];
    addChatbotMessage(`I said: Step ${cookingState.currentStep}: ${step}`);
}

function stopCookingGuide() {
    cookingState.isGuiding = false;
    cookingState.currentRecipe = null;
    cookingState.currentStep = 0;
    addChatbotMessage("Cooking guide paused. Just say 'next' anytime to resume, or ask me something else!");
}

function getOpenRouterKey() {
    return localStorage.getItem('mealGenieOpenRouterKey') || '';
}

function setOpenRouterKey(key) {
    localStorage.setItem('mealGenieOpenRouterKey', key);
    addChatbotMessage("✅ API key saved! You can now use the AI cooking assistant.");
}

function saveApiKey() {
    const key = document.getElementById('apiKeyInput').value.trim();
    if (key) {
        setOpenRouterKey(key);
        document.getElementById('apiKeyInput').value = '';
        alert('API key saved successfully!');
    } else {
        alert('Please enter a valid API key.');
    }
}

function startVoiceInput() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        addChatbotMessage("Voice input not supported in this browser. Please type your question.");
        return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    
    document.getElementById('voiceBtn').classList.add('recording');
    
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById('chatbotInput').value = transcript;
        sendChatbotMessage();
        document.getElementById('voiceBtn').classList.remove('recording');
    };
    
    recognition.onerror = () => {
        document.getElementById('voiceBtn').classList.remove('recording');
        addChatbotMessage("Voice input failed. Please try again or type your question.");
    };
    
    recognition.start();
}

// ===== RECIPE MATCHING =====
function getMatchingRecipes() {
    if (selectedIngredients.length === 0) return [];
    
    return recipes.filter(r => {
        const hasMatch = r.ingredients.some(i => 
            selectedIngredients.includes(i.name.toLowerCase())
        );
        const cuisineMatch = selectedCuisine === 'Any' || r.cuisine === selectedCuisine;
        return hasMatch && cuisineMatch;
    }).sort((a, b) => {
        const aMatch = a.ingredients.filter(i => 
            selectedIngredients.includes(i.name.toLowerCase())
        ).length;
        const bMatch = b.ingredients.filter(i => 
            selectedIngredients.includes(i.name.toLowerCase())
        ).length;
        const aCoverage = aMatch / a.ingredients.length;
        const bCoverage = bMatch / b.ingredients.length;
        
        if (leftoverMode) {
            if (bCoverage !== aCoverage) return bCoverage - aCoverage;
        }
        return bMatch - aMatch;
    });
}

function getMatchingByType(type) {
    return getMatchingRecipes().filter(r => r.type === type);
}

function hasStrongMatch() {
    const matching = getMatchingRecipes();
    if (matching.length === 0) return false;
    
    const best = matching[0];
    const matchCount = best.ingredients.filter(i => 
        selectedIngredients.includes(i.name.toLowerCase())
    ).length;
    const coverage = matchCount / best.ingredients.length;
    
    return coverage >= 0.5 || matchCount >= 2;
}

// ===== AI GENERATION (Template-based) =====
const recipeTemplates = {
    meal: [
        { name: '{ing1} & {ing2} Bowl', icon: '🥣', time: 20, difficulty: 'Easy', cuisine: 'Fusion' },
        { name: 'Crispy {ing1} with {ing2}', icon: '🍳', time: 25, difficulty: 'Easy', cuisine: 'Fusion' },
        { name: '{ing1} {ing2} Stir-Fry', icon: '🥡', time: 20, difficulty: 'Easy', cuisine: 'Chinese' },
        { name: 'Creamy {ing1} {ing2}', icon: '🍲', time: 30, difficulty: 'Medium', cuisine: 'Italian' },
        { name: '{ing1} {ing2} Curry', icon: '🍛', time: 35, difficulty: 'Medium', cuisine: 'Indian' },
        { name: 'Mediterranean {ing1} Wrap', icon: '🥙', time: 15, difficulty: 'Easy', cuisine: 'Mediterranean' },
        { name: '{ing1} {ing2} Soup', icon: '🍲', time: 30, difficulty: 'Easy', cuisine: 'Fusion' },
        { name: 'Grilled {ing1} with {ing2}', icon: '🍽️', time: 25, difficulty: 'Medium', cuisine: 'American' },
    ],
    drink: [
        { name: 'Refreshing {ing1} Water', icon: '💧', time: 5, difficulty: 'Easy', cuisine: 'Fusion' },
        { name: '{ing1} {ing2} Smoothie', icon: '🥤', time: 5, difficulty: 'Easy', cuisine: 'Fusion' },
        { name: 'Sparkling {ing1} Spritzer', icon: '🍹', time: 5, difficulty: 'Easy', cuisine: 'Fusion' },
        { name: '{ing1} Mint Infusion', icon: '🌿', time: 10, difficulty: 'Easy', cuisine: 'Mediterranean' },
        { name: 'Creamy {ing1} Shake', icon: '🥛', time: 5, difficulty: 'Easy', cuisine: 'American' },
        { name: 'Golden {ing1} Latte', icon: '☕', time: 10, difficulty: 'Easy', cuisine: 'Fusion' },
        { name: '{ing1} {ing2} cooler', icon: '🍹', time: 5, difficulty: 'Easy', cuisine: 'Fusion' },
    ],
    sauce: [
        { name: 'Quick {ing1} Glaze', icon: '🥫', time: 10, difficulty: 'Easy', cuisine: 'Fusion' },
        { name: '{ing1} {ing2} Spread', icon: '🫙', time: 10, difficulty: 'Easy', cuisine: 'Fusion' },
        { name: 'Fresh {ing1} {ing2} Dip', icon: '🥣', time: 5, difficulty: 'Easy', cuisine: 'Fusion' },
        { name: '{ing1} Infused Oil', icon: '🫒', time: 10, difficulty: 'Easy', cuisine: 'Mediterranean' },
        { name: '{ing1} {ing2} Chutney', icon: '🫙', time: 15, difficulty: 'Easy', cuisine: 'Indian' },
        { name: 'Roasted {ing1} Puree', icon: '🫕', time: 20, difficulty: 'Easy', cuisine: 'Fusion' },
    ],
    dessert: [
        { name: '{ing1} Sweet Treat', icon: '🍰', time: 15, difficulty: 'Easy', cuisine: 'Fusion' },
        { name: 'Fluffy {ing1} Pancakes', icon: '🥞', time: 20, difficulty: 'Easy', cuisine: 'American' },
        { name: '{ing1} {ing2} Parfait', icon: '🍨', time: 10, difficulty: 'Easy', cuisine: 'Fusion' },
        { name: 'Creamy {ing1} Pudding', icon: '🍮', time: 25, difficulty: 'Medium', cuisine: 'Fusion' },
        { name: '{ing1} Frozen Bites', icon: '🍧', time: 15, difficulty: 'Easy', cuisine: 'Fusion' },
        { name: '{ing1} Drizzled Toast', icon: '🍞', time: 10, difficulty: 'Easy', cuisine: 'American' },
    ]
};

const stepTemplates = {
    meal: [
        'Prep all ingredients by washing and chopping.',
        'Heat oil in a pan over medium-high heat.',
        'Add main ingredient and cook until done.',
        'Add secondary ingredients and stir well.',
        'Season with salt and pepper to taste.',
        'Cook for an additional 5 minutes.',
        'Serve hot and enjoy!',
    ],
    drink: [
        'Wash and prepare all ingredients.',
        'Add ingredients to blender.',
        'Blend until smooth.',
        'Taste and adjust sweetness if needed.',
        'Pour into glass.',
        'Serve immediately over ice if desired.',
    ],
    sauce: [
        'Wash and prep all ingredients.',
        'Combine ingredients in a bowl or blender.',
        'Mix or blend until desired consistency.',
        'Season with salt and spices.',
        'Refrigerate for 30 minutes to let flavors meld.',
        'Serve or store in airtight container.',
    ],
    dessert: [
        'Preheat oven to 350°F if needed.',
        'Mix dry ingredients in one bowl.',
        'Combine wet ingredients in another.',
        'Fold wet into dry until just combined.',
        'Pour into prepared dish.',
        'Bake or chill as needed.',
        'Serve and enjoy!',
    ]
};

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateAIRecipe(type = 'meal') {
    if (selectedIngredients.length === 0) {
        alert('Please select some ingredients first!');
        return null;
    }
    
    const templates = recipeTemplates[type];
    const template = templates[Math.floor(Math.random() * templates.length)];
    
    const ing1 = selectedIngredients[0] ? capitalize(selectedIngredients[0]) : 'Mixed';
    const ing2 = selectedIngredients[1] ? capitalize(selectedIngredients[1]) : 'Veggies';
    
    let name = template.name.replace('{ing1}', ing1).replace('{ing2}', ing2);
    
    const cuisine = selectedCuisine !== 'Any' ? selectedCuisine : template.cuisine;
    
    const selectedIngs = selectedIngredients.map(id => {
        const ing = ingredients.find(i => i.id === id);
        return ing ? { name: ing.name, amount: 'as needed' } : null;
    }).filter(Boolean);
    
    const recipe = {
        id: Date.now(),
        name: name,
        type: type,
        cuisine: cuisine,
        time: template.time + Math.floor(Math.random() * 10),
        difficulty: template.difficulty,
        calories: 200 + Math.floor(Math.random() * 300),
        tags: ['AI Generated', type],
        icon: template.icon,
        ingredients: selectedIngs,
        steps: stepTemplates[type],
        substitutions: [],
        isGenerated: true
    };
    
    generatedRecipes.push(recipe);
    localStorage.setItem('mealGenieGenerated', JSON.stringify(generatedRecipes));
    currentGeneratedIndex = generatedRecipes.length - 1;
    
    return recipe;
}

function generateAnotherAI(type = 'meal') {
    const recipe = generateAIRecipe(type);
    if (recipe) {
        showRecipe(recipe.id);
        updateResults();
    }
}

// ===== DISPLAY FUNCTIONS =====
function updateResults() {
    const matching = getMatchingRecipes();
    const meals = getMatchingByType('meal');
    const drinks = getMatchingByType('drink');
    const sauces = getMatchingByType('sauce');
    const desserts = getMatchingByType('dessert');
    
    const hasMatch = matching.length > 0;
    const strongMatch = hasStrongMatch();
    
    let html = '';
    
    if (hasMatch) {
        if (meals.length > 0) {
            html += renderSection('🍽️ Meals', meals);
        }
        if (drinks.length > 0) {
            html += renderSection('🥤 Drinks', drinks);
        }
        if (sauces.length > 0) {
            html += renderSection('🫙 Sauces', sauces);
        }
        if (desserts.length > 0) {
            html += renderSection('🍰 Desserts', desserts);
        }
    }
    
    if (!strongMatch && selectedIngredients.length > 0) {
        html += `
            <div class="ai-section">
                <div class="ai-header">
                    <h3>✨ Need More Ideas?</h3>
                    <p>Generate custom recipes with AI</p>
                </div>
                <div class="ai-buttons">
                    <button class="ai-generate-btn" onclick="generateAndShow('meal')">
                        🍽️ Generate Meal
                    </button>
                    <button class="ai-generate-btn drink" onclick="generateAndShow('drink')">
                        🥤 Generate Drink
                    </button>
                    <button class="ai-generate-btn sauce" onclick="generateAndShow('sauce')">
                        🫙 Generate Sauce
                    </button>
                    <button class="ai-generate-btn dessert" onclick="generateAndShow('dessert')">
                        🍰 Generate Dessert
                    </button>
                </div>
            </div>
        `;
    }
    
    if (generatedRecipes.length > 0) {
        const customMeals = generatedRecipes.filter(r => r.type === 'meal');
        const customDrinks = generatedRecipes.filter(r => r.type === 'drink');
        const customSauces = generatedRecipes.filter(r => r.type === 'sauce');
        const customDesserts = generatedRecipes.filter(r => r.type === 'dessert');
        
        if (customMeals.length > 0) {
            html += renderSection('🧠 Custom Meals', customMeals, true);
        }
        if (customDrinks.length > 0) {
            html += renderSection('🧠 Custom Drinks', customDrinks, true);
        }
        if (customSauces.length > 0) {
            html += renderSection('🧠 Custom Sauces', customSauces, true);
        }
        if (customDesserts.length > 0) {
            html += renderSection('🧠 Custom Desserts', customDesserts, true);
        }
    }
    
    if (!hasMatch && selectedIngredients.length > 0 && strongMatch) {
        html = `
            <div class="no-match-msg">
                <p>No exact matches found, but you can:</p>
            </div>
            <div class="ai-section">
                <div class="ai-buttons">
                    <button class="ai-generate-btn" onclick="generateAndShow('meal')">
                        🍽️ Generate Meal
                    </button>
                    <button class="ai-generate-btn drink" onclick="generateAndShow('drink')">
                        🥤 Generate Drink
                    </button>
                </div>
            </div>
        `;
    }
    
    document.getElementById('resultsContainer').innerHTML = html;
    
    if (matching.length > 0) {
        showRecipe(matching[0].id);
    }
}

function renderSection(title, items, isCustom = false) {
    return `
        <div class="result-section">
            <h3 class="section-title">${title}</h3>
            <div class="result-grid">
                ${items.map(r => `
                    <div class="result-card ${r.isGenerated ? 'generated' : ''}" onclick="showRecipe(${r.id})">
                        <div class="result-icon">${r.icon}</div>
                        <div class="result-name">${r.name}</div>
                        <div class="result-meta">
                            <span>⏱️ ${r.time}m</span>
                            <span class="diff-${r.difficulty.toLowerCase()}">${r.difficulty}</span>
                        </div>
                        <div class="result-cal">🔥 ${r.calories} cal</div>
                        <div class="result-cuisine">${r.cuisine}</div>
                        ${isCustom ? '<span class="custom-badge">Custom</span>' : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function generateAndShow(type) {
    const recipe = generateAIRecipe(type);
    if (recipe) {
        showRecipe(recipe.id);
        updateResults();
    }
}

function showRecipe(id) {
    const recipe = recipes.find(r => r.id === id) || generatedRecipes.find(r => r.id === id);
    if (!recipe) return;
    
    document.getElementById('emptyState').style.display = 'none';
    document.getElementById('recipeView').style.display = 'block';
    document.getElementById('resultsContainer').style.display = 'block';
    
    document.getElementById('heroIcon').textContent = recipe.icon;
    document.getElementById('cuisineBadge').textContent = recipe.cuisine;
    document.getElementById('recipeName').textContent = recipe.name;
    
    const heroMeta = document.getElementById('heroMeta');
    const matchCount = recipe.ingredients.filter(i => 
        selectedIngredients.includes(i.name.toLowerCase())
    ).length;
    const leftoverBadge = leftoverMode && !recipe.isGenerated ? 
        `<span class="leftover-badge">🔄 ${matchCount}/${recipe.ingredients.length} ingredients</span>` : '';
    
    heroMeta.innerHTML = `
        <span>⏱️ ${recipe.time} min</span>
        <span class="diff-${recipe.difficulty.toLowerCase()}">${recipe.difficulty}</span>
        <span class="cal-badge">🔥 ${recipe.calories} cal</span>
        <span class="type-badge type-${recipe.type}">${recipe.type}</span>
        ${leftoverBadge}
    `;
    
    const ingredientsDisplay = document.getElementById('ingredientsDisplay');
    ingredientsDisplay.innerHTML = recipe.ingredients.map(ing => `
        <div class="ing-row">
            <span class="ing-text">${ing.name}</span>
            <span class="ing-qty">${ing.amount}</span>
        </div>
    `).join('');
    
    const missing = recipe.ingredients.filter(ing => 
        !selectedIngredients.includes(ing.name.toLowerCase()) && !recipe.isGenerated
    );
    const missingList = document.getElementById('missingList');
    if (missing.length === 0 && !recipe.isGenerated) {
        missingList.innerHTML = '<p class="all-have">✓ You have all ingredients!</p>';
    } else if (recipe.isGenerated) {
        missingList.innerHTML = '<p class="ai-note">🤖 AI generated - ingredients are suggestions</p>';
    } else {
        missingList.innerHTML = missing.map(ing => `
            <div class="missing-item">
                <span>✗</span>
                <span>${ing.name}</span>
            </div>
        `).join('');
    }
    
    const multiplier = currentServings / 2;
    const stepsList = document.getElementById('stepsList');
    stepsList.innerHTML = recipe.steps.map((step, i) => `
        <div class="step-item">
            <span class="step-num">${i + 1}</span>
            <p class="step-text">${step}</p>
        </div>
    `).join('');
    
    const subsList = document.getElementById('subsList');
    if (recipe.substitutions.length === 0) {
        subsList.innerHTML = '<p class="no-subs">No substitutions available</p>';
    } else {
        subsList.innerHTML = recipe.substitutions.map(s => `
            <div class="sub-row">
                <span>${s.from}</span>
                <span class="arrow">→</span>
                <span>${s.to}</span>
            </div>
        `).join('');
    }
    
    document.getElementById('tagsBar').innerHTML = recipe.tags.map(t => 
        `<span class="tag-badge">#${t}</span>`
    ).join('');
    
    const isFav = favorites.includes(recipe.id);
    const saveBtn = document.getElementById('favBtn');
    saveBtn.textContent = isFav ? '❤️ Saved' : '🤍 Save Recipe';
    saveBtn.onclick = () => toggleFav(recipe.id);
    
    if (recipe.isGenerated) {
        const moreBtn = document.createElement('button');
        moreBtn.className = 'generate-more-btn';
        moreBtn.textContent = '✨ Generate Another Idea';
        moreBtn.onclick = () => generateAnotherAI(recipe.type);
        saveBtn.parentNode.insertBefore(moreBtn, saveBtn.nextSibling);
    } else {
        const existingMoreBtn = document.querySelector('.generate-more-btn');
        if (existingMoreBtn) existingMoreBtn.remove();
    }
    
    document.getElementById('rightPanel').scrollTop = 0;
}

function toggleFav(id) {
    const idx = favorites.indexOf(id);
    if (idx > -1) {
        favorites.splice(idx, 1);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('mealGenieFav', JSON.stringify(favorites));
    
    const btn = document.getElementById('favBtn');
    btn.textContent = favorites.includes(id) ? '❤️ Saved' : '🤍 Save Recipe';
    updateFavCount();
}

function setServings(n) {
    currentServings = n;
    document.querySelectorAll('.serv-btn').forEach((b, i) => b.classList.toggle('active', i === n - 1));
}

function updateSelectedTags() {
    const tagsContainer = document.getElementById('selectedTags');
    if (selectedIngredients.length > 0) {
        const selectedIngs = selectedIngredients.map(id => {
            const ing = ingredients.find(i => i.id === id);
            return ing;
        }).filter(Boolean);
        
        tagsContainer.innerHTML = `
            <div class="selected-tags-list">
                ${selectedIngs.map(ing => `
                    <span class="selected-tag" onclick="toggleIngredient('${ing.id}')">
                        ${ing.icon} ${ing.name}
                    </span>
                `).join('')}
            </div>
            <button class="clear-selection" onclick="clearSelection()">Clear All</button>
        `;
    } else {
        tagsContainer.innerHTML = '';
    }
}

function clearSelection() {
    selectedIngredients = [];
    leftoverMode = false;
    document.getElementById('leftoverBtn')?.classList.remove('active');
    renderIngredients();
    document.getElementById('selectedCount').textContent = '0 selected';
    updateSelectedTags();
    updateResults();
}

// ===== INGREDIENT GRID =====
const categoryLabels = {
    'proteins': '🥩 Proteins',
    'vegetables': '🥬 Vegetables',
    'dairy': '🧀 Dairy',
    'grains': '🍞 Grains',
    'spices': '🌿 Spices',
    'pantry': '🫙 Pantry'
};

function renderIngredients() {
    const grid = document.getElementById('ingredientsGrid');
    const categories = ['proteins', 'vegetables', 'dairy', 'grains', 'spices', 'pantry'];
    let html = '';
    
    categories.forEach(cat => {
        const catIngredients = ingredients.filter(i => i.cat === cat);
        if (catIngredients.length > 0) {
            html += `<div class="ing-category-header">${categoryLabels[cat]}</div>`;
            html += catIngredients.map(i => `
                <div class="ing-chip ${selectedIngredients.includes(i.id) ? 'selected' : ''}" onclick="toggleIngredient('${i.id}')">
                    <span class="ing-icon">${i.icon}</span>
                    <span class="ing-name">${i.name}</span>
                </div>
            `).join('');
        }
    });
    
    grid.innerHTML = html;
}

function filterIngredients() {
    const search = document.getElementById('ingSearch').value.toLowerCase();
    const grid = document.getElementById('ingredientsGrid');
    grid.innerHTML = ingredients
        .filter(i => i.name.toLowerCase().includes(search))
        .map(i => `
            <div class="ing-chip ${selectedIngredients.includes(i.id) ? 'selected' : ''}" onclick="toggleIngredient('${i.id}')">
                <span class="ing-icon">${i.icon}</span>
                <span class="ing-name">${i.name}</span>
            </div>
        `).join('');
}

function toggleIngredient(id) {
    if (selectedIngredients.includes(id)) {
        selectedIngredients = selectedIngredients.filter(x => x !== id);
    } else {
        selectedIngredients.push(id);
    }
    
    renderIngredients();
    document.getElementById('selectedCount').textContent = selectedIngredients.length + ' selected';
    updateSelectedTags();
    updateResults();
}

// ===== CUISINE FILTER =====
function setCuisine(cuisine) {
    selectedCuisine = cuisine;
    document.querySelectorAll('.cuisine-chip').forEach(chip => {
        chip.classList.toggle('active', chip.dataset.cuisine === cuisine);
    });
    updateResults();
}

// ===== LEFTOVER MODE =====
function toggleLeftoverMode() {
    leftoverMode = !leftoverMode;
    const btn = document.getElementById('leftoverBtn');
    if (btn) btn.classList.toggle('active', leftoverMode);
    updateResults();
}

// ===== VIEW ALL MEALS =====
let selectedCuisineFilter = 'all';
let selectedTypeFilter = 'all';

function showAllMeals() {
    if (isMobile()) {
        showAllMealsMobile();
    } else {
        document.getElementById('emptyState').style.display = 'none';
        document.getElementById('recipeView').style.display = 'none';
        document.getElementById('resultsContainer').style.display = 'none';
        document.getElementById('allMealsView').style.display = 'block';
    }
    renderAllMealsView();
}

function backFromAll() {
    document.getElementById('allMealsView').style.display = 'none';
    updateResults();
}

function filterCuisine(cuisine) {
    selectedCuisineFilter = cuisine;
    renderAllMealsView();
}

function filterType(type) {
    selectedTypeFilter = type;
    renderAllMealsView();
}

function renderAllMealsView() {
    const allCuisines = ['all', 'Italian', 'Mexican', 'Indian', 'Chinese', 'Mediterranean', 'American'];
    const allTypes = [
        { id: 'all', name: '🍽️ All', icon: '🍽️' },
        { id: 'meal', name: '🍽️ Meals', icon: '🍽️' },
        { id: 'drink', name: '🥤 Drinks', icon: '🥤' },
        { id: 'sauce', name: '🫙 Sauces', icon: '🫙' },
        { id: 'dessert', name: '🍰 Desserts', icon: '🍰' }
    ];
    
    let filteredRecipes = [...recipes, ...generatedRecipes];
    
    if (selectedCuisineFilter !== 'all') {
        filteredRecipes = filteredRecipes.filter(r => r.cuisine === selectedCuisineFilter);
    }
    
    if (selectedTypeFilter !== 'all') {
        filteredRecipes = filteredRecipes.filter(r => r.type === selectedTypeFilter);
    }
    
    const container = document.getElementById('cuisineGroups');
    
    container.innerHTML = `
        <button class="back-btn" onclick="backFromAll()">← Back</button>
        <div class="all-meals-header">
            <div class="filter-section">
                <span class="filter-label">Course:</span>
                <div class="type-filter">
                    ${allTypes.map(t => `
                        <button class="type-filter-btn ${selectedTypeFilter === t.id ? 'active' : ''}" onclick="filterType('${t.id}')">
                            ${t.name}
                        </button>
                    `).join('')}
                </div>
            </div>
            <div class="filter-section">
                <span class="filter-label">Cuisine:</span>
                <div class="cuisine-filter">
                    ${allCuisines.map(c => `
                        <button class="cuisine-filter-btn ${selectedCuisineFilter === c ? 'active' : ''}" onclick="filterCuisine('${c}')">
                            ${c === 'all' ? '🌍 All' : c}
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>
            ${filteredRecipes.length > 0 ? `
            <div class="all-results-count">${filteredRecipes.length} recipes found</div>
            <div class="meals-grid">
                ${filteredRecipes.map(r => `
                    <div class="meal-card ${r.isGenerated ? 'generated' : ''}" onclick="showRecipe(${r.id})">
                        <div class="meal-card-icon">${r.icon}</div>
                        <div class="meal-card-name">${r.name}</div>
                        <div class="meal-card-meta">⏱️ ${r.time}m • ${r.difficulty}</div>
                        <div class="meal-card-cal">🔥 ${r.calories} cal</div>
                        <div class="meal-card-type">${r.type}</div>
                    </div>
                `).join('')}
            </div>
        ` : `
            <div class="no-results">
                <p>No recipes found for this combination.</p>
                <button class="ai-generate-btn" onclick="generateAndShow('${selectedTypeFilter === 'all' ? 'meal' : selectedTypeFilter}')">
                    ✨ Generate a Recipe
                </button>
            </div>
        `}
    `;
}

// ===== BLOG / COMMUNITY =====
function toggleBlog() {
    const panel = document.getElementById('blogPanel');
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) {
        renderBlogPosts();
        document.getElementById('settingsPanel').classList.remove('open');
    }
}

function renderBlogPosts() {
    const container = document.getElementById('blogPosts');
    if (blogPosts.length === 0) {
        container.innerHTML = '<p class="no-posts">No posts yet. Be the first to share!</p>';
    } else {
        container.innerHTML = blogPosts.map((post, index) => `
            <div class="blog-post">
                <div class="post-header">
                    <span class="post-type ${post.type}">${post.type === 'share' ? '📝 Share' : post.type === 'bug' ? '🐛 Bug' : '💬 Hangout'}</span>
                    <span class="post-date">${new Date(post.date).toLocaleDateString()}</span>
                </div>
                <h4 class="post-title">${post.title}</h4>
                <p class="post-content">${post.content}</p>
            </div>
        `).join('');
    }
}

function submitBlogPost(type) {
    const title = document.getElementById('postTitle').value.trim();
    const content = document.getElementById('postContent').value.trim();
    
    if (!title || !content) {
        alert('Please fill in both title and content!');
        return;
    }
    
    const post = {
        type: type,
        title: title,
        content: content,
        date: Date.now()
    };
    
    blogPosts.unshift(post);
    localStorage.setItem('mealGenieBlog', JSON.stringify(blogPosts));
    
    document.getElementById('postTitle').value = '';
    document.getElementById('postContent').value = '';
    
    renderBlogPosts();
}

function openShareRecipe() {
    document.getElementById('postType').value = 'share';
    document.getElementById('postType').textContent = '📝 Share Recipe';
}

function openReportBug() {
    document.getElementById('postType').value = 'bug';
    document.getElementById('postType').textContent = '🐛 Report Bug';
}

function openHangout() {
    document.getElementById('postType').value = 'hangout';
    document.getElementById('postType').textContent = '💬 Hangout';
}

// ===== SETTINGS =====
function toggleSettings() {
    const panel = document.getElementById('settingsPanel');
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) {
        document.getElementById('blogPanel').classList.remove('open');
    }
}

function setBgColor(color) {
    document.querySelector('.app').style.backgroundColor = color;
    localStorage.setItem('mealGenieBg', color);
    document.querySelectorAll('.color-option').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.color === color);
    });
}

function loadBgColor() {
    const saved = localStorage.getItem('mealGenieBg');
    if (saved) {
        document.querySelector('.app').style.backgroundColor = saved;
        document.querySelectorAll('.color-option').forEach(btn => {
            btn.classList.toggle('selected', btn.dataset.color === saved);
        });
    }
}

function showFavorites() {
    const allRecipes = [...recipes, ...generatedRecipes];
    const saved = favorites.map(id => allRecipes.find(r => r.id === id)).filter(Boolean);
    if (saved.length === 0) {
        alert('You have no saved recipes yet!');
        return;
    }
    alert(`Your saved recipes:\n\n${saved.map(r => '• ' + r.icon + ' ' + r.name).join('\n')}`);
}

function updateFavCount() {
    document.getElementById('favCount').textContent = favorites.length;
}

// ===== MOBILE NAVIGATION =====
let currentMobileView = 'ingredients';

function showIngredients() {
    currentMobileView = 'ingredients';
    document.getElementById('searchSection').style.display = 'block';
    document.getElementById('cuisineFilterBar').style.display = 'block';
    document.getElementById('ingredientsGrid').style.display = 'grid';
    document.getElementById('bottomActions').style.display = 'flex';
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('allMealsView').style.display = 'none';
    document.getElementById('recipeView').style.display = 'none';
    updateNavItems('navIngredients');
    document.getElementById('mainContent').scrollTop = 0;
}

function showResults() {
    currentMobileView = 'results';
    const matching = getMatchingRecipes();
    if (matching.length > 0 || selectedIngredients.length > 0) {
        document.getElementById('searchSection').style.display = 'none';
        document.getElementById('cuisineFilterBar').style.display = 'none';
        document.getElementById('ingredientsGrid').style.display = 'none';
        document.getElementById('bottomActions').style.display = 'none';
        document.getElementById('resultsContainer').style.display = 'block';
        document.getElementById('allMealsView').style.display = 'none';
        document.getElementById('recipeView').style.display = 'none';
        document.getElementById('emptyState').style.display = 'none';
        updateNavItems('navResults');
        document.getElementById('mainContent').scrollTop = 0;
    } else {
        alert('Please select some ingredients first!');
    }
}

function updateNavItems(activeId) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    const active = document.getElementById(activeId);
    if (active) active.classList.add('active');
}

function isMobile() {
    return window.innerWidth < 768;
}

function checkMobileLayout() {
    if (isMobile()) {
        document.getElementById('rightPanel').style.display = 'none';
        document.getElementById('bottomNav').style.display = 'flex';
        if (currentMobileView === 'ingredients') {
            showIngredients();
        } else if (currentMobileView === 'results') {
            showResults();
        } else if (currentMobileView === 'recipe') {
            showRecipeMobile();
        } else if (currentMobileView === 'browse') {
            showAllMealsMobile();
        }
    } else {
        document.getElementById('rightPanel').style.display = 'flex';
        document.getElementById('bottomNav').style.display = 'none';
        document.getElementById('searchSection').style.display = 'block';
        document.getElementById('cuisineFilterBar').style.display = 'block';
        document.getElementById('ingredientsGrid').style.display = 'grid';
        document.getElementById('bottomActions').style.display = 'flex';
    }
}

function showRecipeMobile() {
    currentMobileView = 'recipe';
    document.getElementById('searchSection').style.display = 'none';
    document.getElementById('cuisineFilterBar').style.display = 'none';
    document.getElementById('ingredientsGrid').style.display = 'none';
    document.getElementById('bottomActions').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('allMealsView').style.display = 'none';
    document.getElementById('recipeView').style.display = 'block';
    document.getElementById('mainContent').scrollTop = 0;
}

function showAllMealsMobile() {
    currentMobileView = 'browse';
    document.getElementById('searchSection').style.display = 'none';
    document.getElementById('cuisineFilterBar').style.display = 'none';
    document.getElementById('ingredientsGrid').style.display = 'none';
    document.getElementById('bottomActions').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('recipeView').style.display = 'none';
    document.getElementById('allMealsView').style.display = 'block';
    updateNavItems('navAll');
    document.getElementById('mainContent').scrollTop = 0;
}

function openRecipe(recipe) {
    if (isMobile()) {
        showRecipeMobile();
    } else {
        document.getElementById('emptyState').style.display = 'none';
        document.getElementById('resultsContainer').style.display = 'none';
        document.getElementById('allMealsView').style.display = 'none';
        document.getElementById('recipeView').style.display = 'block';
    }
}

function goBackFromRecipe() {
    if (isMobile()) {
        if (selectedIngredients.length > 0) {
            showResults();
        } else {
            showIngredients();
        }
    }
}

function goBackFromBrowse() {
    if (isMobile()) {
        if (selectedIngredients.length > 0) {
            showResults();
        } else {
            showIngredients();
        }
    }
}

// ===== INIT =====
window.addEventListener('DOMContentLoaded', () => {
    renderIngredients();
    loadBgColor();
    updateResults();
    updateFavCount();
    checkMobileLayout();
    
    // Close panels when clicking outside
    document.addEventListener('click', (e) => {
        const blogPanel = document.getElementById('blogPanel');
        const settingsPanel = document.getElementById('settingsPanel');
        const blogBtn = document.querySelector('.blog-btn');
        const settingsBtn = document.querySelector('.settings-btn');
        
        if (blogPanel.classList.contains('open') && 
            !blogPanel.contains(e.target) && 
            !blogBtn.contains(e.target)) {
            blogPanel.classList.remove('open');
        }
        
        if (settingsPanel.classList.contains('open') && 
            !settingsPanel.contains(e.target) && 
            !settingsBtn.contains(e.target)) {
            settingsPanel.classList.remove('open');
        }
    });
    
    // Handle resize for mobile/desktop
    window.addEventListener('resize', checkMobileLayout);
});
