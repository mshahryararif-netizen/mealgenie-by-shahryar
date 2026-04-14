// ===== DATA =====
const ingredients = [
    { id: 'chicken', name: 'Chicken', icon: '🍗', cat: 'proteins' },
    { id: 'beef', name: 'Beef', icon: '🥩', cat: 'proteins' },
    { id: 'fish', name: 'Fish', icon: '🐟', cat: 'proteins' },
    { id: 'shrimp', name: 'Shrimp', icon: '🦐', cat: 'proteins' },
    { id: 'egg', name: 'Egg', icon: '🥚', cat: 'proteins' },
    { id: 'tofu', name: 'Tofu', icon: '🧈', cat: 'proteins' },
    { id: 'turkey', name: 'Turkey', icon: '🦃', cat: 'proteins' },
    { id: 'lamb', name: 'Lamb', icon: '🍖', cat: 'proteins' },
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
    { id: 'cheese', name: 'Cheese', icon: '🧀', cat: 'dairy' },
    { id: 'milk', name: 'Milk', icon: '🥛', cat: 'dairy' },
    { id: 'butter', name: 'Butter', icon: '🧈', cat: 'dairy' },
    { id: 'cream', name: 'Cream', icon: '🥛', cat: 'dairy' },
    { id: 'yogurt', name: 'Yogurt', icon: '🥛', cat: 'dairy' },
    { id: 'parmesan', name: 'Parmesan', icon: '🧀', cat: 'dairy' },
    { id: 'mozzarella', name: 'Mozzarella', icon: '🧀', cat: 'dairy' },
    { id: 'feta', name: 'Feta', icon: '🧀', cat: 'dairy' },
    { id: 'bread', name: 'Bread', icon: '🍞', cat: 'grains' },
    { id: 'rice', name: 'Rice', icon: '🍚', cat: 'grains' },
    { id: 'pasta', name: 'Pasta', icon: '🍝', cat: 'grains' },
    { id: 'flour', name: 'Flour', icon: '🌾', cat: 'grains' },
    { id: 'noodles', name: 'Noodles', icon: '🍜', cat: 'grains' },
    { id: 'tortilla', name: 'Tortilla', icon: '🫓', cat: 'grains' },
    { id: 'couscous', name: 'Couscous', icon: '🍚', cat: 'grains' },
    { id: 'quinoa', name: 'Quinoa', icon: '🌾', cat: 'grains' },
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
function renderIngredients() {
    const grid = document.getElementById('ingredientsGrid');
    grid.innerHTML = ingredients.map(i => `
        <div class="ing-chip ${selectedIngredients.includes(i.id) ? 'selected' : ''}" onclick="toggleIngredient('${i.id}')">
            <span class="ing-icon">${i.icon}</span>
            <span class="ing-name">${i.name}</span>
        </div>
    `).join('');
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
    document.getElementById('emptyState').style.display = 'none';
    document.getElementById('recipeView').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('allMealsView').style.display = 'block';
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

// ===== INIT =====
window.addEventListener('DOMContentLoaded', () => {
    renderIngredients();
    loadBgColor();
    updateResults();
    updateFavCount();
    
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
});
