// ===== DATA =====
const ingredients = [
    // PROTEINS
    { id: 'chicken', name: 'Chicken', icon: '🍗', cat: 'proteins' },
    { id: 'beef', name: 'Beef', icon: '🥩', cat: 'proteins' },
    { id: 'fish', name: 'Fish', icon: '🐟', cat: 'proteins' },
    { id: 'shrimp', name: 'Shrimp', icon: '🦐', cat: 'proteins' },
    { id: 'egg', name: 'Egg', icon: '🥚', cat: 'proteins' },
    { id: 'tofu', name: 'Tofu', icon: '🥡', cat: 'proteins' },
    { id: 'turkey', name: 'Turkey', icon: '🦃', cat: 'proteins' },
    { id: 'lamb', name: 'Lamb', icon: '🍖', cat: 'proteins' },
    // VEGETABLES
    { id: 'tomato', name: 'Tomato', icon: '🍅', cat: 'vegetables' },
    { id: 'onion', name: 'Onion', icon: '🧅', cat: 'vegetables' },
    { id: 'garlic', name: 'Garlic', icon: '🧄', cat: 'vegetables' },
    { id: 'potato', name: 'Potato', icon: '🥔', cat: 'vegetables' },
    { id: 'carrot', name: 'Carrot', icon: '🥕', cat: 'vegetables' },
    { id: 'pepper', name: 'Pepper', icon: '🟢', cat: 'vegetables' },
    { id: 'spinach', name: 'Spinach', icon: '🥬', cat: 'vegetables' },
    { id: 'mushroom', name: 'Mushroom', icon: '🍄', cat: 'vegetables' },
    { id: 'corn', name: 'Corn', icon: '🌽', cat: 'vegetables' },
    { id: 'broccoli', name: 'Broccoli', icon: '🥦', cat: 'vegetables' },
    { id: 'zucchini', name: 'Zucchini', icon: '🥒', cat: 'vegetables' },
    { id: 'cucumber', name: 'Cucumber', icon: '🥒', cat: 'vegetables' },
    { id: 'lettuce', name: 'Lettuce', icon: '🥗', cat: 'vegetables' },
    { id: 'celery', name: 'Celery', icon: '🌿', cat: 'vegetables' },
    { id: 'peas', name: 'Peas', icon: '🌱', cat: 'vegetables' },
    { id: 'cabbage', name: 'Cabbage', icon: '🥬', cat: 'vegetables' },
    { id: 'avocado', name: 'Avocado', icon: '🥑', cat: 'vegetables' },
    { id: 'cauliflower', name: 'Cauliflower', icon: '🥦', cat: 'vegetables' },
    { id: 'apple', name: 'Apple', icon: '🍎', cat: 'vegetables' },
    // DAIRY
    { id: 'cheese', name: 'Cheese', icon: '🧀', cat: 'dairy' },
    { id: 'milk', name: 'Milk', icon: '🥛', cat: 'dairy' },
    { id: 'butter', name: 'Butter', icon: '🧈', cat: 'dairy' },
    { id: 'cream', name: 'Cream', icon: '🍦', cat: 'dairy' },
    { id: 'yogurt', name: 'Yogurt', icon: '🥣', cat: 'dairy' },
    { id: 'parmesan', name: 'Parmesan', icon: '🧀', cat: 'dairy' },
    { id: 'mozzarella', name: 'Mozzarella', icon: '🧀', cat: 'dairy' },
    { id: 'feta', name: 'Feta', icon: '🧀', cat: 'dairy' },
    // GRAINS
    { id: 'bread', name: 'Bread', icon: '🍞', cat: 'grains' },
    { id: 'rice', name: 'Rice', icon: '🍚', cat: 'grains' },
    { id: 'pasta', name: 'Pasta', icon: '🍝', cat: 'grains' },
    { id: 'flour', name: 'Flour', icon: '🌾', cat: 'grains' },
    { id: 'noodles', name: 'Noodles', icon: '🍜', cat: 'grains' },
    { id: 'tortilla', name: 'Tortilla', icon: '🌮', cat: 'grains' },
    { id: 'couscous', name: 'Couscous', icon: '🍚', cat: 'grains' },
    { id: 'quinoa', name: 'Quinoa', icon: '🌾', cat: 'grains' },
    // SPICES
    { id: 'salt', name: 'Salt', icon: '🧂', cat: 'spices' },
    { id: 'pepper_spice', name: 'Black Pepper', icon: '🌶️', cat: 'spices' },
    { id: 'chili', name: 'Chili', icon: '🌶️', cat: 'spices' },
    { id: 'cumin', name: 'Cumin', icon: '⚫', cat: 'spices' },
    { id: 'basil', name: 'Basil', icon: '🍃', cat: 'spices' },
    { id: 'oregano', name: 'Oregano', icon: '🌿', cat: 'spices' },
    { id: 'paprika', name: 'Paprika', icon: '🔴', cat: 'spices' },
    { id: 'turmeric', name: 'Turmeric', icon: '💛', cat: 'spices' },
    { id: 'cinnamon', name: 'Cinnamon', icon: '🟤', cat: 'spices' },
    { id: 'ginger', name: 'Ginger', icon: '🟠', cat: 'spices' },
    // PANTRY
    { id: 'olive_oil', name: 'Olive Oil', icon: '🥄', cat: 'pantry' },
    { id: 'soy_sauce', name: 'Soy Sauce', icon: '🥫', cat: 'pantry' },
    { id: 'sugar', name: 'Sugar', icon: '🍬', cat: 'pantry' },
    { id: 'honey', name: 'Honey', icon: '🍯', cat: 'pantry' },
    { id: 'beans', name: 'Beans', icon: '🥫', cat: 'pantry' },
    { id: 'chickpeas', name: 'Chickpeas', icon: '🟡', cat: 'pantry' },
    { id: 'lentils', name: 'Lentils', icon: '🟠', cat: 'pantry' },
    { id: 'lemon', name: 'Lemon', icon: '🍋', cat: 'pantry' },
    { id: 'lime', name: 'Lime', icon: '🍋', cat: 'pantry' },
    { id: 'tomato_sauce', name: 'Tomato Sauce', icon: '🥫', cat: 'pantry' },
    { id: 'broth', name: 'Broth', icon: '🍲', cat: 'pantry' },
    { id: 'vinegar', name: 'Vinegar', icon: '🍶', cat: 'pantry' },
    { id: 'pine_nuts', name: 'Pine Nuts', icon: '🌰', cat: 'pantry' },
    { id: 'water', name: 'Water', icon: '💧', cat: 'pantry' },
    { id: 'mint', name: 'Mint', icon: '🍃', cat: 'pantry' },
    { id: 'vanilla', name: 'Vanilla', icon: '🤍', cat: 'pantry' },
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
    { id: 45, name: 'Caesar Salad', type: 'meal', cuisine: 'American', time: 15, difficulty: 'Easy', calories: 250, tags: ['healthy', 'salad', 'quick'], icon: '🥗', ingredients: [{name: 'Lettuce', amount: '1 head'}, {name: 'Cheese', amount: '1/4 cup'}, {name: 'Garlic', amount: '2 cloves'}, {name: 'Lemon', amount: '1'}], substitutions: [], steps: ['Chop lettuce into bite-sized pieces.', 'Make dressing: mix garlic, lemon, olive oil.', 'Toss lettuce with dressing.', 'Top with parmesan shavings.', 'Add croutons if available.'] },
    { id: 46, name: 'Club Sandwich', type: 'meal', cuisine: 'American', time: 15, difficulty: 'Easy', calories: 420, tags: ['high protein', 'lunch'], icon: '🥪', ingredients: [{name: 'Bread', amount: '3 slices'}, {name: 'Chicken', amount: '150g'}, {name: 'Cheese', amount: '1 slice'}, {name: 'Lettuce', amount: '2 leaves'}, {name: 'Tomato', amount: '1'}], substitutions: [], steps: ['Toast bread slices.', 'Layer chicken, cheese, lettuce, and tomato.', 'Stack layers with bread between.', 'Cut into quarters, secure with toothpicks.'] },
    { id: 47, name: 'Grilled Cheese & Tomato Soup', type: 'meal', cuisine: 'American', time: 25, difficulty: 'Easy', calories: 480, tags: ['comfort food', 'vegetarian'], icon: '🍲', ingredients: [{name: 'Bread', amount: '2 slices'}, {name: 'Cheese', amount: '2 slices'}, {name: 'Butter', amount: '2 tbsp'}, {name: 'Tomato', amount: '4'}, {name: 'Garlic', amount: '2 cloves'}], substitutions: [], steps: ['Make grilled cheese sandwich.', 'Blend tomatoes with garlic.', 'Simmer tomato soup 10 minutes.', 'Season soup with salt and pepper.', 'Serve soup with sandwich.'] },
    { id: 48, name: 'Egg Salad Sandwich', type: 'meal', cuisine: 'American', time: 15, difficulty: 'Easy', calories: 320, tags: ['quick', 'lunch', 'vegetarian'], icon: '🥪', ingredients: [{name: 'Egg', amount: '4'}, {name: 'Bread', amount: '2 slices'}, {name: 'Onion', amount: '2 tbsp'}, {name: 'Salt', amount: 'pinch'}], substitutions: [], steps: ['Boil eggs, cool, and chop.', 'Mix eggs with mayo and onion.', 'Season with salt and pepper.', 'Spread on bread.', 'Close and serve.'] },
    { id: 49, name: 'Philly Cheesesteak', type: 'meal', cuisine: 'American', time: 25, difficulty: 'Medium', calories: 520, tags: ['high protein', 'comfort food'], icon: '🥖', ingredients: [{name: 'Beef', amount: '200g'}, {name: 'Cheese', amount: '2 slices'}, {name: 'Onion', amount: '1'}, {name: 'Pepper', amount: '1'}, {name: 'Bread', amount: '1 hoagie'}], substitutions: [], steps: ['Slice beef thinly.', 'Sauté onions and peppers.', 'Cook beef with vegetables.', 'Melt cheese on top.', 'Spoon into hoagie roll.'] },
    { id: 50, name: 'Hot Dogs', type: 'meal', cuisine: 'American', time: 10, difficulty: 'Easy', calories: 350, tags: ['quick', 'kid friendly'], icon: '🌭', ingredients: [{name: 'Bread', amount: '2 hot dog buns'}, {name: 'Beef', amount: '2 hot dogs'}, {name: 'Onion', amount: '1/4'}], substitutions: [], steps: ['Boil or grill hot dogs.', 'Place in buns.', 'Add mustard and ketchup.', 'Top with onions if desired.'] },

    // ===== MORE ITALIAN =====
    { id: 52, name: 'Pesto Pasta', type: 'meal', cuisine: 'Italian', time: 20, difficulty: 'Easy', calories: 480, tags: ['quick', 'vegetarian', 'herby'], icon: '🍝', ingredients: [{name: 'Pasta', amount: '250g'}, {name: 'Basil', amount: '1 cup'}, {name: 'Cheese', amount: '1/4 cup'}, {name: 'Garlic', amount: '2 cloves'}, {name: 'Olive Oil', amount: '1/3 cup'}], substitutions: [], steps: ['Cook pasta.', 'Blend basil, garlic, cheese, oil.', 'Toss hot pasta with pesto.', 'Add pasta water if needed.', 'Serve with extra cheese.'] },
    { id: 53, name: 'Lasagna', type: 'meal', cuisine: 'Italian', time: 60, difficulty: 'Medium', calories: 620, tags: ['comfort food', 'high protein'], icon: '🍝', ingredients: [{name: 'Pasta', amount: '12 sheets'}, {name: 'Beef', amount: '300g'}, {name: 'Cheese', amount: '2 cups'}, {name: 'Tomato Sauce', amount: '2 cups'}, {name: 'Onion', amount: '1'}], substitutions: [], steps: ['Brown beef with onion.', 'Add tomato sauce, simmer.', 'Layer pasta, meat sauce, cheese.', 'Repeat layers.', 'Bake at 375°F for 30 minutes.', 'Rest 10 minutes before serving.'] },
    { id: 54, name: 'Risotto', type: 'meal', cuisine: 'Italian', time: 35, difficulty: 'Medium', calories: 420, tags: ['creamy', 'comfort food'], icon: '🍚', ingredients: [{name: 'Rice', amount: '1.5 cups'}, {name: 'Broth', amount: '4 cups'}, {name: 'Cheese', amount: '1/2 cup'}, {name: 'Onion', amount: '1'}, {name: 'Butter', amount: '2 tbsp'}], substitutions: [], steps: ['Sauté onion in butter.', 'Add rice, toast 2 minutes.', 'Add broth one ladle at a time.', 'Stir constantly until absorbed.', 'Finish with cheese.', 'Serve immediately.'] },
    { id: 55, name: 'Bruschetta', type: 'meal', cuisine: 'Italian', time: 15, difficulty: 'Easy', calories: 180, tags: ['quick', 'vegetarian', 'fresh'], icon: '🍅', ingredients: [{name: 'Bread', amount: '1 baguette'}, {name: 'Tomato', amount: '3'}, {name: 'Garlic', amount: '3 cloves'}, {name: 'Basil', amount: '1/4 cup'}, {name: 'Olive Oil', amount: '2 tbsp'}], substitutions: [], steps: ['Slice and toast baguette.', 'Rub toast with garlic.', 'Dice tomatoes, mix with basil and oil.', 'Season with salt.', 'Spoon onto toast, serve.'] },
    { id: 56, name: 'Pizza Toast', type: 'meal', cuisine: 'Italian', time: 10, difficulty: 'Easy', calories: 280, tags: ['quick', 'kid friendly'], icon: '🍕', ingredients: [{name: 'Bread', amount: '2 slices'}, {name: 'Cheese', amount: '1/2 cup'}, {name: 'Tomato Sauce', amount: '2 tbsp'}, {name: 'Oregano', amount: 'pinch'}], substitutions: [], steps: ['Toast bread lightly.', 'Spread tomato sauce.', 'Top with cheese.', 'Broil until cheese melts.', 'Sprinkle oregano, serve.'] },

    // ===== MORE CHINESE =====
    { id: 57, name: 'Sweet & Sour Chicken', type: 'meal', cuisine: 'Chinese', time: 35, difficulty: 'Medium', calories: 460, tags: ['sweet', 'tangy', 'classic'], icon: '🍗', ingredients: [{name: 'Chicken', amount: '200g'}, {name: 'Pepper', amount: '2'}, {name: 'Onion', amount: '1'}, {name: 'Soy Sauce', amount: '3 tbsp'}, {name: 'Sugar', amount: '2 tbsp'}], substitutions: [], steps: ['Cut chicken into chunks.', 'Fry until golden, set aside.', 'Sauté peppers and onion.', 'Make sauce: soy sauce, vinegar, sugar.', 'Add chicken to sauce, toss.'] },
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
    { id: 73, name: 'Gyoza', type: 'meal', cuisine: 'Japanese', time: 40, difficulty: 'Medium', calories: 320, tags: ['dumplings', 'pan-fried'], icon: '🥟', ingredients: [{name: 'Flour', amount: '2 cups'}, {name: 'Chicken', amount: '200g'}, {name: 'Cabbage', amount: '1 cup'}, {name: 'Garlic', amount: '2 cloves'}, {name: 'Ginger', amount: '1 inch'}], substitutions: [], steps: ['Make dough.', 'Mix chicken filling with cabbage, garlic, and ginger.', 'Fill and fold wrappers.', 'Pan-fry until crispy on bottom.', 'Add water, steam covered.', 'Serve with ponzu.'] },
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
let activeRecipeId = null;
let leftoverMode = false;
let selectedCuisine = 'Any';
let generatedRecipes = JSON.parse(localStorage.getItem('mealGenieGenerated') || '[]');
let currentGeneratedIndex = -1;
const SPOONACULAR_ID_OFFSET = 9000000;
const SPOON_CACHE_TTL = 7 * 24 * 60 * 60 * 1000;
const SPOON_LIST_TTL = 24 * 60 * 60 * 1000;
let spoonacularRecipes = [];
let spoonacularLoading = false;
let spoonacularFetchTimer = null;
let serverServices = { openrouter: false, spoonacular: false };

async function loadServerServices() {
    try {
        const res = await fetch('/api/services/status');
        if (res.ok) {
            serverServices = await res.json();
        }
    } catch (_) {}
}

function isOpenRouterAvailable() {
    return Boolean(serverServices.openrouter);
}

function isSpoonacularAvailable() {
    return Boolean(serverServices.spoonacular);
}

async function callOpenRouterAPI(body) {
    const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error('API error');
    return response.json();
}
let currentRecipe = null;
let spotlightRecipeIds = [];
let blogPosts = JSON.parse(localStorage.getItem('mealGenieBlog') || '[]');

const PORK_TERMS = /\b(pork|bacon|ham|prosciutto|pancetta|chorizo|lard|gammon|salami|pepperoni|pulled pork|pork chop|pork belly)\b/i;

function isPorkRecipe(recipe) {
    if (!recipe) return false;
    if (PORK_TERMS.test(recipe.name || '')) return true;
    if ((recipe.ingredients || []).some(i => PORK_TERMS.test(i.name || ''))) return true;
    if ((recipe.steps || []).some(s => PORK_TERMS.test(s))) return true;
    return false;
}

function withoutPork(list) {
    return list.filter(r => !isPorkRecipe(r));
}

// ===== LANGUAGE SYSTEM =====
const languages = [
    { code: 'en', name: 'English', native: 'English', dir: 'ltr' },
    { code: 'ur', name: 'Urdu', native: 'اردو', dir: 'rtl' }
];

const translations = {
    en: {
        appTitle: 'Meal Genie',
        searchIng: 'Search ingredients...',
        appGoalTitle: 'Our Mission',
        appGoal: 'MealGenie turns whatever is in your kitchen into creative meal ideas — instantly. No stress, no waste, just cook.',
        pageIngredientsTitle: 'Pick Your Ingredients',
        pageIngredientsSub: 'Tap what you have — we\'ll find recipes for you.',
        pageRecipesTitle: 'Your Recipes',
        pageRecipesSub: 'Matched meals, drinks & sauces based on what you picked.',
        pageRecipesSpotlightSub: 'Pick ingredients to get personal matches — or try these popular picks!',
        pageBrowseTitle: 'Browse All Recipes',
        pageBrowseSub: 'Explore every meal, drink, sauce & dessert in MealGenie.',
        generateRecipesBtn: '✨ Generate Recipes',
        tryTheseRecipes: '✨ Try These Recipes',
        cuisine: 'Cuisine',
        any: 'Any',
        useLeftovers: 'Use Leftovers',
        viewAll: 'View All Recipes',
        selected: 'selected',
        ingredients: 'Ingredients',
        recipes: 'Recipes',
        browse: 'Browse',
        whatCooking: 'What are we cooking?',
        selectIng: 'Select ingredients to discover recipes',
        meals: 'Meals',
        drinks: 'Drinks',
        sauces: 'Sauces',
        desserts: 'Desserts',
        needIdeas: 'Need More Ideas?',
        generateMeal: 'Generate Meal',
        generateDrink: 'Generate Drink',
        generateSauce: 'Generate Sauce',
        generateDessert: 'Generate Dessert',
        servings: 'Servings',
        missing: 'Missing',
        allHave: 'You have all ingredients!',
        steps: 'Steps',
        substitutions: 'Substitutions',
        noSubs: 'No substitutions available',
        saveRecipe: 'Save Recipe',
        saved: 'Saved',
        back: 'Back',
        course: 'Course',
        community: 'Community',
        share: 'Share',
        bug: 'Bug',
        chat: 'Chat',
        postTitle: 'Title...',
        postContent: 'Share your recipe, report a bug, or just say hi!',
        post: 'Post',
        settings: 'Settings',
        bgColor: 'Background Color',
        apiKey: 'AI API Key (OpenRouter)',
        apiHint: 'AI is configured on the server — no key needed here.',
        spoonacularKey: 'Verified Recipes API (Spoonacular)',
        spoonacularHint: 'Verified recipes are configured on the server — no key needed here.',
        saveSpoonacularKey: 'Save Recipe API Key',
        spoonacularSaved: 'Spoonacular key saved! Authentic verified recipes enabled.',
        spoonacularServerManaged: 'Verified recipes are configured on the server. No API key is needed in the app.',
        verifiedBadge: '✓ Verified',
        verifiedRecipes: 'Verified Recipes',
        loadingRecipe: 'Loading authentic recipe...',
        viewSource: 'View original recipe',
        authenticSource: 'Authentic recipe verified via Spoonacular',
        spoonacularRequired: 'Verified recipes are not available right now. Ask your administrator to configure the server.',
        cookingAssistant: 'Cooking Assistant',
        voicePowered: 'Voice-powered help',
        askCooking: 'Ask about cooking...',
        hiCooking: "Hi! I'm your voice cooking assistant. I can help you cook step-by-step.",
        tryQuestion: 'Try: "How do I make scrambled eggs?"',
        thinking: 'Thinking...',
        letsCook: "Let's cook {recipe}! I'll guide you step by step.",
        sayNext: 'Say "next" to continue, "repeat" to hear again, "pause" to stop.',
        step: 'Step {num}: {text}',
        allDone: "🎉 That's all the steps! Your dish should be ready. Enjoy your meal!",
        paused: "Cooking guide paused. Say 'next' anytime to resume!",
        repeatStep: "Step {num}: {text}",
        cookingComplete: "Done! Your meal is ready! 🍽️",
        langTitle: '🌐 Language',
        shareTab: 'Share',
        bugTab: 'Bug',
        chatTab: 'Chat',
        submitPost: 'Post',
        saveApiKey: 'Save API Key',
        apiKeySaved: 'API key saved successfully!',
        apiKeyInvalid: 'Please enter a valid API key.',
        apiKeyServerManaged: 'AI is configured on the server. No API key is needed in the app.',
        emptyTitle: 'What are we cooking?',
        emptySub: 'Select ingredients to discover recipes',
        recipeIngredients: 'Ingredients',
        recipeNeed: 'You May Need',
        recipeSteps: 'Steps',
        recipeSubs: 'Substitutions',
        servingsLabel: 'Servings:',
        startLiveMentor: '🤖 Start Live Mentor',
        chefMentor: 'Chef Mentor',
        liveGuide: 'Live cooking guide',
        liveReady: 'Ready when you are, chef.',
        liveHelp: '🆘 I made a mistake / need help',
        liveStepOf: 'Step {cur} / {total}',
        fridgeScan: '🧊 Fridge Scan',
        fridgeIntro: 'Snap your fridge — AI detects ingredients, matches authentic recipes & chef videos.',
        openCamera: '📷 Open Camera',
        uploadPhoto: '🖼️ Upload Photo',
        scanFridge: '✨ Scan Fridge',
        scanning: '🔍 Scanning...',
        detectedHint: 'Detected items appear here — tap to confirm.',
        detectedTitle: '✅ {count} items detected',
        detectedEdit: 'Tap to remove wrong items. Add more from kitchen below.',
        nextCustomize: 'Next: Customize →',
        fridgeIntroPrefs: "Set your vibe — we'll pick meals, drinks & sauces that fit.",
        moodLabel: '😊 Mood',
        budgetLabel: '💰 Budget',
        usageLabel: '👥 Usage',
        servingsFridge: '🍽️ Servings',
        moodComfort: '🛋️ Comfort',
        moodHealthy: '💪 Healthy',
        moodQuick: '⚡ Quick',
        moodCozy: '☕ Cozy',
        moodAdventurous: '🌍 Adventurous',
        budgetBudget: '💵 Budget',
        budgetModerate: '💳 Moderate',
        budgetAny: '✨ Any',
        usageSolo: '1️⃣ Solo',
        usageCouple: '👫 Couple',
        usageFamily: '👨‍👩‍👧 Family',
        usagePrep: '📦 Meal Prep',
        generateMenu: '🍳 Generate My Menu',
        customizeAgain: '← Customize Again',
        useInKitchen: '✅ Use in Kitchen',
        buildingMenu: '🧊 Building your custom menu...',
        sectionMeals: '🍽️ Meals',
        sectionDrinks: '🥤 Drinks',
        sectionSauces: '🫙 Sauces',
        recommendedForYou: '✨ Recommended for You',
        recMeals: '🍽️ More Meals',
        recDrinks: '🥤 Drinks to Pair',
        recSauces: '🫙 Sauces to Try',
        ingMatch: '{count} ingredients match',
        sectionDesserts: '🍰 Desserts',
        generateWithAI: 'Generate custom recipes with AI',
        customMeals: '🧠 Custom Meals',
        customDrinks: '🧠 Custom Drinks',
        customSauces: '🧠 Custom Sauces',
        customDesserts: '🧠 Custom Desserts',
        noExactMatch: 'No exact matches found, but you can:',
        customBadge: 'Custom',
        cal: 'cal',
        min: 'm',
        aiGeneratedNote: '🤖 AI generated - ingredients are suggestions',
        noRecipesFound: 'No recipes found for this combination.',
        generateRecipe: '✨ Generate a Recipe',
        recipesFound: '{count} recipes found',
        allCourse: '🍽️ All',
        allCuisine: '🌍 All',
        noPosts: 'No posts yet. Be the first to share!',
        selectIngFirst: 'Please select some ingredients first!',
        noFavorites: 'You have no saved recipes yet!',
        savedRecipes: '❤️ Saved Recipes',
        fillPost: 'Please fill in both title and content!',
        cameraDenied: 'Camera access denied. Upload a photo of your fridge instead.',
        takePhotoFirst: 'Take or upload a fridge photo first.',
        openRecipeFirst: 'Open a recipe first, then start Live Mentor.',
        generateAnother: '✨ Generate Another Idea',
        selectFirst: '0 selected',
        selectedCount: '{count} selected',
        leftoverMatch: '🔄 {match}/{total} ingredients',
        voiceNotSupported: 'Voice input not supported in this browser. Please type your question.',
        apiKeySavedChat: '✅ API key saved! You can now use the AI cooking assistant.',
        aiConnectError: "I'm having trouble connecting. Try again or check your API key in Settings.",
        cookOnlyError: 'I can only help with cooking questions. Ask about food or recipes!',
        voiceNext: 'next',
        voiceRepeat: 'repeat',
        voicePause: 'pause',
        voiceStop: 'stop',
        difficultyEasy: 'Easy',
        difficultyMedium: 'Medium',
        difficultyHard: 'Hard',
        yourMenu: '🍽️ Your Menu',
        alsoMatches: '📋 Also matches your fridge',
        viewRecipe: 'View Recipe',
        watchYoutube: '▶️ Watch authentic chefs on YouTube',
        budgetWord: 'budget',
        apiKeySavedMsg: 'API key saved successfully!',
        catProteins: '🥩 Select Your Proteins',
        catVegetables: '🥬 Pick Your Vegetables',
        catDairy: '🧀 Choose Your Dairy',
        catGrains: '🍞 Grab Your Grains',
        catSpices: '🌿 Add Your Spices',
        catPantry: '🫙 Check Your Pantry',
        clearAll: 'Clear All',
        courseLabel: 'Course:',
        voiceInputFailed: 'Voice input failed. Please try again or type your question.',
        matchedFridge: 'Matched from your fridge',
        liveIntro: "Hey chef! I'm your robotic mentor for {recipe}. I'll guide you step by step. Say next when you're ready, or tap the microphone if you need help.",
        liveAllDone: 'All steps complete — great job, chef!'
    },
    ur: {
        appTitle: 'میل جنی',
        searchIng: 'اجناس تلاش کریں...',
        appGoalTitle: 'ہمارا مقصد',
        appGoal: 'MealGenie آپ کے کچن کی اجناس سے فوری تخلیقی کھانے بناتا ہے — بغیر پریشانی، بغیر ضیاع۔',
        pageIngredientsTitle: 'اپنی اجناس چنیں',
        pageIngredientsSub: 'جو کچن میں ہے وہ ٹیپ کریں — ہم ترکیبیں ملائیں گے۔',
        pageRecipesTitle: 'آپ کی ترکیبیں',
        pageRecipesSub: 'آپ کی اجناس کے مطابق کھانا، مشروب اور ساس۔',
        pageRecipesSpotlightSub: 'اجناس چنیں یا یہ مقبول ترکیبیں آزمائیں!',
        pageBrowseTitle: 'تمام ترکیبیں',
        pageBrowseSub: 'MealGenie کی ہر ترکیب یہاں دیکھیں۔',
        generateRecipesBtn: '✨ ترکیبیں بنائیں',
        tryTheseRecipes: '✨ یہ آزمائیں',
        cuisine: 'کھانا',
        any: 'کوئی',
        useLeftovers: 'بچا ہوا کھانا',
        viewAll: 'تمام ترکیبیں دیکھیں',
        selected: 'منتخب',
        ingredients: 'اجناس',
        recipes: 'ترکیبیں',
        browse: 'دیکھیں',
        whatCooking: 'ہم کیا پکا رہے ہیں؟',
        selectIng: 'ترکیبیں دریافت کرنے کے لیے اجناس چنیں',
        meals: 'کھانے',
        drinks: 'پینے کی چیزیں',
        sauces: 'ساس',
        desserts: 'مٹھائی',
        needIdeas: 'مزید خیال چاہیے؟',
        generateMeal: 'کھانا بنائیں',
        generateDrink: 'پینے کی چیز بنائیں',
        generateSauce: 'ساس بنائیں',
        generateDessert: 'مٹھائی بنائیں',
        servings: 'کھانے کی تعداد',
        missing: 'گم ہے',
        allHave: 'آپ کے پاس سارے اجناس ہیں!',
        steps: 'اقدام',
        substitutions: 'متبادل',
        noSubs: 'کوئی متبادل نہیں',
        saveRecipe: 'ترکیب محفوظ کریں',
        saved: 'محفوظ',
        back: 'واپس',
        course: 'قسم',
        community: 'برادری',
        share: 'شیئر',
        bug: 'بگ',
        chat: 'چیٹ',
        postTitle: 'عنوان...',
        postContent: 'اپنی ترکیب شیئر کریں، بگ رپورٹ کریں، یا صرف ہیلو کہیں!',
        post: 'پوسٹ',
        settings: 'ترتیبات',
        bgColor: 'پس منظر کا رنگ',
        apiKey: 'AI API کی (OpenRouter)',
        apiHint: 'AI سرور پر ترتیب ہے — یہاں key کی ضرورت نہیں۔',
        spoonacularKey: 'تصدیق شدہ ترکیبیں API (Spoonacular)',
        spoonacularHint: 'تصدیق شدہ ترکیبیں سرور پر ترتیب ہیں — یہاں key کی ضرورت نہیں۔',
        saveSpoonacularKey: 'Recipe API Key محفوظ کریں',
        spoonacularSaved: 'Spoonacular key محفوظ! تصدیق شدہ ترکیبیں فعال۔',
        spoonacularServerManaged: 'تصدیق شدہ ترکیبیں سرور پر ترتیب ہیں۔ ایپ میں API key کی ضرورت نہیں۔',
        verifiedBadge: '✓ تصدیق شدہ',
        verifiedRecipes: 'تصدیق شدہ ترکیبیں',
        loadingRecipe: 'اصل ترکیب لوڈ ہو رہی ہے...',
        viewSource: 'اصل ترکیب دیکھیں',
        authenticSource: 'Spoonacular سے تصدیق شدہ اصل ترکیب',
        spoonacularRequired: 'تصدیق شدہ ترکیبیں اب دستیاب نہیں۔ سرور کی ترتیب کے لیے منتظم سے رابطہ کریں۔',
        cookingAssistant: 'کھانے کا معاون',
        voicePowered: 'آواز سے چلنے والا',
        askCooking: 'کھانے کے بارے میں پوچھیں...',
        hiCooking: "ہیلو! میں آپ کا کھانے کا معاون ہوں۔ میں آپ کو قدم بقدم پکانے میں مدد کر سکتا ہوں۔",
        tryQuestion: 'آزمائیں: "سکریمڈ انگ کیسے بنائیں؟"',
        thinking: 'سوچ رہا ہوں...',
        letsCook: "چلو {recipe} پکاتے ہیں! میں آپ کو قدم بقدم بتاؤں گا۔",
        sayNext: '"اگلا" کہیں جاری رکھنے، "دہرائیں" دوبارہ سننے، "روکیں" روکنے کے لیے۔',
        step: 'اقدام {num}: {text}',
        allDone: '🎉 سارے اقدام مکمل! آپ کا کھانا تیار ہے!',
        paused: 'رہنما روک دیا۔ جاری رکھنے "اگلا" کہیں!',
        repeatStep: 'اقدام {num}: {text}',
        cookingComplete: "ہو گیا! آپ کا کھانا تیار ہے! 🍽️",
        langTitle: '🌐 زبان',
        shareTab: 'شیئر',
        bugTab: 'بگ',
        chatTab: 'چیٹ',
        submitPost: 'پوسٹ',
        saveApiKey: 'API کی محفوظ کریں',
        apiKeySaved: 'API کی محفوظ ہو گئی!',
        apiKeyInvalid: 'براہ کرم درست API کی درج کریں۔',
        apiKeyServerManaged: 'AI سرور پر ترتیب ہے۔ ایپ میں API key کی ضرورت نہیں۔',
        emptyTitle: 'ہم کیا پکا رہے ہیں؟',
        emptySub: 'ترکیبیں دریافت کرنے کے لیے اجناس چنیں',
        recipeIngredients: 'اجناس',
        recipeNeed: 'آپ کو چاہیے',
        recipeSteps: 'اقدام',
        recipeSubs: 'متبادل',
        servingsLabel: 'افراد:',
        startLiveMentor: '🤖 لائیو مینٹر شروع کریں',
        chefMentor: 'شیف مینٹر',
        liveGuide: 'لائیو پکانے کی رہنمائی',
        liveReady: 'تیار ہیں؟ میں یہاں ہوں، شیف!',
        liveHelp: '🆘 غلطی ہوگئی / مدد چاہیے',
        liveStepOf: 'اقدام {cur} / {total}',
        fridgeScan: '🧊 فریج اسکین',
        fridgeIntro: 'فریج کی تصویر لیں — AI اجناس پہچانے گا، اصل ترکیبیں اور شیف ویڈیوز ملائیں گے۔',
        openCamera: '📷 کیمرہ کھولیں',
        uploadPhoto: '🖼️ تصویر اپ لوڈ',
        scanFridge: '✨ فریج اسکین',
        scanning: '🔍 اسکین ہو رہا ہے...',
        detectedHint: 'پہچانی گئی اجناس یہاں — تصدیق کے لیے ٹیپ کریں۔',
        detectedTitle: '✅ {count} اجناس ملیں',
        detectedEdit: 'غلط ہٹانے کے لیے ٹیپ کریں۔ نیچے سے مزید شامل کریں۔',
        nextCustomize: 'اگلا: ترتیب →',
        fridgeIntroPrefs: 'اپنا موڈ بتائیں — ہم کھانا، مشروب اور ساس چنیں گے۔',
        moodLabel: '😊 موڈ',
        budgetLabel: '💰 بجٹ',
        usageLabel: '👥 استعمال',
        servingsFridge: '🍽️ افاد',
        moodComfort: '🛋️ آرام',
        moodHealthy: '💪 صحت مند',
        moodQuick: '⚡ جلدی',
        moodCozy: '☕ گرم',
        moodAdventurous: '🌍 مہم جو',
        budgetBudget: '💵 سستا',
        budgetModerate: '💳 درمیانہ',
        budgetAny: '✨ کوئی بھی',
        usageSolo: '1️⃣ اکیلے',
        usageCouple: '👫 جوڑا',
        usageFamily: '👨‍👩‍👧 خاندان',
        usagePrep: '📦 تیاری',
        generateMenu: '🍳 میرا مینو بنائیں',
        customizeAgain: '← دوبارہ ترتیب',
        useInKitchen: '✅ باورچی خانے میں استعمال',
        buildingMenu: '🧊 آپ کا مینو تیار ہو رہا ہے...',
        sectionMeals: '🍽️ کھانے',
        sectionDrinks: '🥤 مشروبات',
        sectionSauces: '🫙 ساس',
        recommendedForYou: '✨ آپ کے لیے تجویز',
        recMeals: '🍽️ مزید کھانے',
        recDrinks: '🥤 مشروبات',
        recSauces: '🫙 ساس',
        ingMatch: '{count} اجناس میل',
        sectionDesserts: '🍰 مٹھائیاں',
        needMoreIdeas: '✨ مزید خیال چاہیے؟',
        generateWithAI: 'AI سے اپنی ترکیب بنائیں',
        customMeals: '🧠 اپنی کھانے',
        customDrinks: '🧠 اپنے مشروبات',
        customSauces: '🧠 اپنی ساس',
        customDesserts: '🧠 اپنی مٹھائیاں',
        noExactMatch: 'بالکل میل نہیں ملا، لیکن آپ:',
        customBadge: 'اپنی',
        cal: 'کیل',
        min: 'منٹ',
        aiGeneratedNote: '🤖 AI سے بنایا — اجناس تجویز ہیں',
        noRecipesFound: 'اس امتزاج کے لیے کوئی ترکیب نہیں۔',
        generateRecipe: '✨ ترکیب بنائیں',
        recipesFound: '{count} ترکیبیں ملیں',
        allCourse: '🍽️ سب',
        allCuisine: '🌍 سب',
        noPosts: 'ابھی کوئی پوسٹ نہیں۔ پہلے شیئر کریں!',
        selectIngFirst: 'پہلے کچھ اجناس چنیں!',
        noFavorites: 'ابھی کوئی محفوظ ترکیب نہیں!',
        savedRecipes: '❤️ محفوظ ترکیبیں',
        fillPost: 'عنوان اور مواد دونوں بھریں!',
        cameraDenied: 'کیمرہ کی اجازت نہیں۔ فریج کی تصویر اپ لوڈ کریں۔',
        takePhotoFirst: 'پہلے فریج کی تصویر لیں یا اپ لوڈ کریں۔',
        openRecipeFirst: 'پہلے ترکیب کھولیں، پھر لائیو مینٹر۔',
        generateAnother: '✨ ایک اور خیال',
        selectFirst: '0 منتخب',
        selectedCount: '{count} منتخب',
        leftoverMatch: '🔄 {match}/{total} اجناس',
        voiceNotSupported: 'اس براؤزر میں آواز سپورٹ نہیں۔ ٹائپ کریں۔',
        apiKeySavedChat: '✅ API کی محفوظ! اب AI معاون استعمال کریں۔',
        aiConnectError: 'کنکشن مسئلہ۔ دوبارہ کوشش کریں یا Settings میں API کی چیک کریں۔',
        cookOnlyError: 'میں صرف کھانے کے سوالات میں مدد کرتا ہوں!',
        voiceNext: 'اگلا',
        voiceRepeat: 'دہرائیں',
        voicePause: 'روکیں',
        voiceStop: 'بند',
        difficultyEasy: 'آسان',
        difficultyMedium: 'درمیانہ',
        difficultyHard: 'مشکل',
        yourMenu: '🍽️ آپ کا مینو',
        alsoMatches: '📋 آپ کے فریج سے میل',
        viewRecipe: 'ترکیب دیکھیں',
        watchYoutube: '▶️ YouTube پر اصل شیف دیکھیں',
        budgetWord: 'بجٹ',
        apiKeySavedMsg: 'API کی محفوظ ہو گئی!',
        catProteins: '🥩 اپنا گوشت و انڈے چنیں',
        catVegetables: '🥬 اپنی سبزیاں چنیں',
        catDairy: '🧀 دودھ کی اشیاء چنیں',
        catGrains: '🍞 اناج چنیں',
        catSpices: '🌿 مسالے چنیں',
        catPantry: '🫙 پینٹری چیک کریں',
        clearAll: 'سب ہٹائیں',
        courseLabel: 'قسم:',
        voiceInputFailed: 'آواز نہیں چلی۔ دوبارہ کوشش کریں یا ٹائپ کریں۔',
        matchedFridge: 'آپ کے فریج سے میل',
        liveIntro: 'سلام شیف! میں {recipe} کے لیے آپ کا روبوٹ مینٹر ہوں۔ قدم بقدم رہنمائی کروں گا۔ تیار ہوں تو "اگلا" کہیں یا مائیک دبائیں۔',
        liveAllDone: 'سارے اقدام مکمل — شاباش شیف!'
    }
};

const urIngredientNames = {
    chicken: 'مرغی', beef: 'گوشت', fish: 'مچھلی', shrimp: 'جhinga',
    egg: 'انڈا', tofu: 'ٹوفو', turkey: 'ٹرکی', lamb: 'برہ کا گوشت',
    tomato: 'ٹماٹر', onion: 'پیاز', garlic: 'لہسن', potato: 'آلو', carrot: 'گاجر',
    pepper: 'شملہ مرچ', spinach: 'پالک', mushroom: 'کھمبی', corn: 'مکئی', broccoli: 'بروکلی',
    zucchini: 'زucchini', cucumber: 'کھیرا', lettuce: 'سلاد پatta', celery: 'اجوائن',
    peas: 'مٹر', cabbage: 'بند گوبھی', avocado: 'ایووکاڈو', cauliflower: 'پھول گوبھی', apple: 'سیب',
    cheese: 'پنیر', milk: 'دودھ', butter: 'مکھن', cream: 'ملائی', yogurt: 'دہی',
    parmesan: 'پarmesan', mozzarella: 'موزاریلا', feta: 'فیٹا',
    bread: 'روٹی', rice: 'چاول', pasta: 'پasta', flour: 'آٹا', noodles: 'نوڈلز',
    tortilla: 'ٹورٹilla', couscous: 'کسکس', quinoa: 'کinoa',
    salt: 'نمک', pepper_spice: 'کالی مرچ', chili: 'مرچ', cumin: 'زیرہ', basil: 'تلسی',
    oregano: 'اوریgano', paprika: 'paprika', turmeric: 'ہلدی', cinnamon: 'دار چینی', ginger: 'ادرک',
    olive_oil: 'زیتون کا تیل', soy_sauce: 'سویا ساس', sugar: 'چینی', honey: 'شہد',
    beans: 'پhلی', chickpeas: 'چنا', lentils: 'دال', lemon: 'لیموں', lime: 'کagzi نimbu',
    tomato_sauce: 'ٹماٹر ساس', broth: 'یakhni', vinegar: 'سرکہ', pine_nuts: 'چلغوزے',
    water: 'پانی', mint: 'پudina', vanilla: 'ونilla', cocoa: 'کoko', chocolate: 'چاکلیٹ',
    walnuts: 'اخروٹ', peanuts: 'مونگ پhلی'
};

function tr(key, vars = {}) {
    const pack = translations[currentLang] || translations.en;
    let text = pack[key] ?? translations.en[key] ?? key;
    Object.entries(vars).forEach(([k, v]) => {
        text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
    });
    return text;
}

function getIngDisplayName(ing) {
    if (!ing) return '';
    if (currentLang === 'ur' && urIngredientNames[ing.id]) return urIngredientNames[ing.id];
    return ing.name;
}

function getRecipeIngDisplayName(name) {
    const ing = getIngredientByName(name);
    return ing ? getIngDisplayName(ing) : name;
}

function translateDifficulty(d) {
    const map = { Easy: tr('difficultyEasy'), Medium: tr('difficultyMedium'), Hard: tr('difficultyHard') };
    return map[d] || d;
}

function getIngSearchText(ing) {
    const ur = urIngredientNames[ing.id] || '';
    return (ing.name + ' ' + ur).toLowerCase();
}
let currentLang = localStorage.getItem('mealGenieLang') || 'en';

function toggleLangMenu() {
    const panel = document.getElementById('langPanel');
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) {
        renderLangOptions();
        document.getElementById('blogPanel').classList.remove('open');
        document.getElementById('settingsPanel').classList.remove('open');
    }
}

function renderLangOptions() {
    const container = document.getElementById('langOptions');
    container.innerHTML = languages.map(lang => `
        <button class="lang-option ${currentLang === lang.code ? 'active' : ''}" onclick="setLanguage('${lang.code}')">
            <span class="lang-native">${lang.native}</span>
            <span class="lang-name">${lang.name}</span>
        </button>
    `).join('');
}

function setLanguage(code) {
    currentLang = code;
    localStorage.setItem('mealGenieLang', code);
    applyLanguage();
    toggleLangMenu();
}

function applyLanguage() {
    const lang = languages.find(l => l.code === currentLang);
    document.documentElement.lang = currentLang;
    document.documentElement.dir = lang ? lang.dir : 'ltr';
    document.body.classList.toggle('lang-ur', currentLang === 'ur');
    
    document.querySelector('.logo-text').textContent = tr('appTitle');
    document.title = tr('appTitle');
    const appGoalTitle = document.getElementById('appGoalTitle');
    if (appGoalTitle) appGoalTitle.textContent = tr('appGoalTitle');
    const appGoal = document.getElementById('appGoalText');
    if (appGoal) appGoal.textContent = tr('appGoal');
    const ingPageTitle = document.getElementById('ingredientsPageTitle');
    if (ingPageTitle) ingPageTitle.textContent = tr('pageIngredientsTitle');
    const ingPageSub = document.getElementById('ingredientsPageSub');
    if (ingPageSub) ingPageSub.textContent = tr('pageIngredientsSub');
    updateRecipesPageHeader();
    updateGenerateRecipeFab();
    document.getElementById('leftoverBtn').textContent = '🔄 ' + tr('useLeftovers');
    const viewAllBtn = document.getElementById('viewAllBtn');
    if (viewAllBtn) viewAllBtn.textContent = '📖 ' + tr('viewAll');
    document.getElementById('navIngredients').querySelector('.nav-item-label').textContent = tr('ingredients');
    document.getElementById('navResults').querySelector('.nav-item-label').textContent = tr('recipes');
    document.getElementById('navAll').querySelector('.nav-item-label').textContent = tr('browse');
    
    const emptyTitle = document.getElementById('emptyTitle');
    const emptySub = document.getElementById('emptySub');
    if (emptyTitle) emptyTitle.textContent = tr('emptyTitle');
    if (emptySub) emptySub.textContent = tr('emptySub');
    else {
        const es = document.querySelector('.empty-state h2');
        const ep = document.querySelector('.empty-state p');
        if (es) es.textContent = tr('emptyTitle');
        if (ep) ep.textContent = tr('emptySub');
    }
    
    const blogTitle = document.querySelector('.blog-title');
    if (blogTitle) blogTitle.textContent = '💬 ' + tr('community');
    const blogTabs = document.querySelectorAll('.blog-tab');
    if (blogTabs[0]) blogTabs[0].textContent = '📝 ' + tr('shareTab');
    if (blogTabs[1]) blogTabs[1].textContent = '🐛 ' + tr('bugTab');
    if (blogTabs[2]) blogTabs[2].textContent = '💬 ' + tr('chatTab');
    const postTitle = document.getElementById('postTitle');
    const postContent = document.getElementById('postContent');
    if (postTitle) postTitle.placeholder = tr('postTitle');
    if (postContent) postContent.placeholder = tr('postContent');
    const submitPost = document.querySelector('.submit-post-btn');
    if (submitPost) submitPost.textContent = tr('submitPost');
    
    const langTitle = document.querySelector('.lang-title');
    if (langTitle) langTitle.textContent = tr('langTitle');
    
    const settingsTitle = document.querySelector('.settings-title');
    if (settingsTitle) settingsTitle.textContent = tr('settings');
    const bgTitle = document.getElementById('settingsBgTitle');
    if (bgTitle) bgTitle.textContent = tr('bgColor');
    const spoonTitle = document.getElementById('settingsSpoonacularTitle');
    if (spoonTitle) spoonTitle.textContent = tr('spoonacularKey');
    const spoonHint = document.getElementById('spoonacularHint');
    if (spoonHint) spoonHint.textContent = tr('spoonacularHint');
    const openRouterTitle = document.getElementById('settingsOpenRouterTitle');
    if (openRouterTitle) openRouterTitle.textContent = tr('apiKey');
    const openRouterHint = document.getElementById('openRouterHint');
    if (openRouterHint) openRouterHint.textContent = tr('apiHint');
    document.querySelectorAll('.settings-section-title').forEach((el, i) => {
        if (el.id) return;
        el.textContent = i === 0 ? tr('bgColor') : tr('apiKey');
    });
    const saveSpoonBtn = document.getElementById('saveSpoonacularBtn');
    if (saveSpoonBtn) saveSpoonBtn.textContent = tr('saveSpoonacularKey');
    const saveApiBtn = document.getElementById('saveOpenRouterBtn');
    if (saveApiBtn) saveApiBtn.textContent = tr('saveApiKey');
    
    const welcomeMsg = document.querySelector('.chatbot-welcome');
    if (welcomeMsg) {
        welcomeMsg.innerHTML = `<p>${tr('hiCooking')}</p><p class="chatbot-hint">${tr('tryQuestion')}</p>`;
    }
    document.querySelector('.chatbot-title').textContent = tr('cookingAssistant');
    document.querySelector('.chatbot-subtitle').textContent = tr('voicePowered');
    document.getElementById('chatbotInput').placeholder = tr('askCooking');
    
    const recipeBack = document.querySelector('#recipeView .back-btn');
    if (recipeBack) recipeBack.textContent = '← ' + tr('back');
    const servLabel = document.querySelector('.servings-section > span');
    if (servLabel) servLabel.textContent = tr('servingsLabel');
    const sections = document.querySelectorAll('#recipeView .section h3');
    if (sections[0]) sections[0].textContent = tr('recipeIngredients');
    if (sections[1]) sections[1].textContent = tr('recipeNeed');
    if (sections[2]) sections[2].textContent = tr('recipeSteps');
    if (sections[3]) sections[3].textContent = tr('recipeSubs');
    
    updateSelectedCountLabel();
    renderIngredients();
    if (document.getElementById('resultsContainer').innerHTML) updateResults();
    if (document.getElementById('allMealsView').classList.contains('show')) renderAllMealsView();
    if (activeRecipeId) showRecipe(activeRecipeId);
    renderBlogPosts();
}

function applyFridgePrefLabels() {
    const map = [
        ['#fridgeStepPrefs .fridge-pref-block:nth-child(2) .fridge-pref-label', 'moodLabel'],
        ['#fridgeStepPrefs .fridge-pref-block:nth-child(3) .fridge-pref-label', 'budgetLabel'],
        ['#fridgeStepPrefs .fridge-pref-block:nth-child(4) .fridge-pref-label', 'usageLabel'],
        ['#fridgeStepPrefs .fridge-pref-block:nth-child(5) .fridge-pref-label', 'servingsFridge']
    ];
    map.forEach(([sel, key]) => {
        const el = document.querySelector(sel);
        if (el) el.textContent = tr(key);
    });
    const moodChips = ['moodComfort','moodHealthy','moodQuick','moodCozy','moodAdventurous'];
    document.querySelectorAll('#fridgeMoodChips .fridge-chip').forEach((btn, i) => {
        if (moodChips[i]) btn.textContent = tr(moodChips[i]);
    });
    ['budgetBudget','budgetModerate','budgetAny'].forEach((k, i) => {
        const btn = document.querySelectorAll('#fridgeBudgetChips .fridge-chip')[i];
        if (btn) btn.textContent = tr(k);
    });
    ['usageSolo','usageCouple','usageFamily','usagePrep'].forEach((k, i) => {
        const btn = document.querySelectorAll('#fridgeUsageChips .fridge-chip')[i];
        if (btn) btn.textContent = tr(k);
    });
    const backBtn = document.querySelector('#fridgeStepPrefs .fridge-action-btn:not(.primary)');
    const genBtn = document.querySelector('#fridgeStepPrefs .fridge-action-btn.primary');
    if (backBtn) backBtn.textContent = '← ' + tr('back');
    if (genBtn) genBtn.textContent = tr('generateMenu');
    const cAgain = document.querySelector('#fridgeStepResults .fridge-action-btn:not(.primary)');
    const useKit = document.querySelector('#fridgeStepResults .fridge-action-btn.primary');
    if (cAgain) cAgain.textContent = tr('customizeAgain');
    if (useKit) useKit.textContent = tr('useInKitchen');
}

function updateSelectedCountLabel() {
    const el = document.getElementById('selectedCount');
    if (el) el.textContent = selectedIngredients.length
        ? tr('selectedCount', { count: selectedIngredients.length })
        : tr('selectFirst');
}
let cookingState = {
    currentRecipe: null,
    currentStep: 0,
    isGuiding: false
};

let voiceMuted = localStorage.getItem('mealGenieMuted') === 'true';

function toggleMute() {
    voiceMuted = !voiceMuted;
    localStorage.setItem('mealGenieMuted', voiceMuted);
    document.getElementById('muteBtn').textContent = voiceMuted ? '🔇' : '🔊';
}

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
    msg.innerHTML = `<p>${escapeHtml(text)}</p>`;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
    
    if (!isUser && !voiceMuted) {
        speakText(text);
    }
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
    const nextWords = [tr('voiceNext'), 'next', 'اگلا', 'agla'];
    const repeatWords = [tr('voiceRepeat'), 'repeat', 'دہرائیں', 'dohrain'];
    const pauseWords = [tr('voicePause'), tr('voiceStop'), 'pause', 'stop', 'روکیں', 'rokain', 'بند'];
    
    if (nextWords.some(w => lowerMsg.includes(w)) && cookingState.isGuiding) {
        provideNextStep();
        return;
    }
    if (repeatWords.some(w => lowerMsg.includes(w)) && cookingState.isGuiding) {
        repeatCurrentStep();
        return;
    }
    if (pauseWords.some(w => lowerMsg.includes(w))) {
        stopCookingGuide();
        return;
    }
    
    try {
        await getAIResponse(message);
    } catch (error) {
        addChatbotMessage(currentLang === 'ur' ? 'معذرت، سمجھ نہیں آیا۔ دوبارہ کوشش کریں!' : "Sorry, I couldn't process that. Please try again!");
    }
}

async function getAIResponse(message) {
    if (isOpenRouterAvailable()) {
        await getAIResponseOnline(message);
    } else {
        getLocalResponse(message);
    }
}

function getLocalResponse(message) {
    const lowerMsg = message.toLowerCase();
    let response = null;
    
    const localKnowledge = currentLang === 'ur' ? [
        { keywords: ['کیسے', 'ترکیب', 'بنائیں', 'پکانا', 'پکائیں', 'طریقہ'], 
          response: 'مدد کرتا ہوں! ایپ میں اجناس چنیں تو ترکیبیں ملیں گی۔ یا کوئی مخصوص سوال پوچھیں!' },
        { keywords: ['انڈا', 'سکریم', 'انڈے'], 
          response: '۳ انڈے نمک کے ساتھ پھینٹیں۔ پین میں مکھن گرم کریں۔ آہستہ ہلائیں، نرم بنائیں۔ فوراً پیش کریں!' },
        { keywords: ['مرغی', 'چکن'], 
          response: 'مرغی پر نمک کالی مرچ لگائیں۔ ۵-۶ منٹ ہر طرف پکائیں۔ ۵ منٹ آرام دیں پھر کاٹیں۔' },
        { keywords: ['پasta', 'پاستا', 'سپaghetti'], 
          response: 'نمکین پانی میں پasta پکائیں۔ ۱ کپ پani محفوظ رکھیں۔ ساس میں ملائیں۔' },
        { keywords: ['چاول', 'rice', 'بری'], 
          response: 'چاول دھوئیں۔ ۱:۱.۵ پانی۔ ابلنے پر دم دیں ۱۸ منٹ۔ ۵ منٹ چھوڑ کر fluff کریں۔' },
        { keywords: ['متبادل', 'بدل', 'بجائے'], 
          response: 'مکھن → زیتون کا تیل۔ دودھ → پانی۔ انڈا → flax egg۔ چینی → شہد۔' },
        { keywords: ['شکریہ', 'thanks', 'thank'], 
          response: 'خوش آمدید! خوش رہیں! 🍳 اور مدد چاہیے تو پوچھیں!' },
        { keywords: ['سلام', 'ہیلو', 'hello', 'hi', 'مدد', 'help'], 
          response: 'السلام! 👋 میں آپ کا کھانے کا معاون ہوں۔ ترکیب، طریقہ، متبادل — سب میں مدد!' },
        { keywords: ['پکائیں', 'بنائیں', 'cook', 'make'], 
          response: 'اجناس چنیں تو ترکیبیں ملیں گی! یا مخصوص سوال پوچھیں۔' }
    ] : [
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
        response = currentLang === 'ur'
            ? 'کھانے کا سوال! تازہ اجناس، آہستہ آہستہ نمک، ہمت کریں! 😊 ایپ میں اجناس چنیں یا مخصوص سوال پوچھیں۔'
            : "That's a cooking question! From my knowledge: start with fresh ingredients, season as you go, and don't be afraid to experiment. 😊 Select ingredients in the app for matching recipes, or ask a more specific cooking question!";
    }
    
    addChatbotMessage(response);
}

async function getAIResponseOnline(message) {
    addChatbotMessage(tr('thinking'));
    
    const langInstruction = currentLang === 'ur'
        ? '7. ALWAYS respond in Urdu (اردو script). Use simple spoken Urdu. Keep cooking terms clear.'
        : currentLang !== 'en'
            ? `7. Respond in the user's language (${currentLang}).`
            : '';
    
    const systemPrompt = `You are a friendly voice cooking assistant inside the MealGenie app. Your rules:
1. ONLY respond to cooking-related topics (recipes, ingredients, kitchen tasks, food preparation)
2. If asked anything outside cooking, say: "${tr('cookOnlyError')}"
3. Keep responses SHORT and CONCISE - max 2-3 sentences for voice optimization
4. When guiding cooking steps, give ONE step at a time and wait for "next" command
5. Be friendly, practical, and beginner-friendly
6. Suggest simple ingredient substitutions when relevant
${langInstruction}`;

    try {
        const data = await callOpenRouterAPI({
            model: 'anthropic/claude-3-haiku',
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: message }
            ],
            max_tokens: 300
        });
        const botMsg = data.choices[0].message.content;
        
        document.querySelector('#chatbotMessages .chat-msg-bot:last-child')?.remove();
        
        if (botMsg.includes('[STEP:')) {
            handleStepCommand(botMsg, message);
        } else {
            addChatbotMessage(botMsg);
        }
    } catch (error) {
        document.querySelector('#chatbotMessages .chat-msg-bot:last-child')?.remove();
        addChatbotMessage(tr('aiConnectError'));
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
    const recipe = getRecipeById(recipeId);
    if (!recipe) return;
    
    cookingState.currentRecipe = recipe;
    cookingState.currentStep = 0;
    cookingState.isGuiding = true;
    
    addChatbotMessage(tr('letsCook', { recipe: recipe.name }) + ' ' + tr('sayNext'));
    provideNextStep();
}

function provideNextStep() {
    if (!cookingState.currentRecipe) return;
    
    const step = cookingState.currentRecipe.steps[cookingState.currentStep];
    if (!step) {
        addChatbotMessage(tr('allDone'));
        cookingState.isGuiding = false;
        return;
    }
    
    const stepNum = cookingState.currentStep + 1;
    addChatbotMessage(tr('step', { num: stepNum, text: step }));
    cookingState.currentStep++;
}

function repeatCurrentStep() {
    if (!cookingState.currentRecipe || cookingState.currentStep === 0) return;
    const step = cookingState.currentRecipe.steps[cookingState.currentStep - 1];
    addChatbotMessage(tr('repeatStep', { num: cookingState.currentStep, text: step }));
}

function stopCookingGuide() {
    cookingState.isGuiding = false;
    cookingState.currentRecipe = null;
    cookingState.currentStep = 0;
    addChatbotMessage(tr('paused'));
}

function saveApiKey() {
    document.getElementById('apiKeyInput').value = '';
    alert(tr('apiKeyServerManaged'));
}

function saveSpoonacularKey() {
    document.getElementById('spoonacularKeyInput').value = '';
    alert(tr('spoonacularServerManaged'));
}

function getAllRecipes() {
    return [...recipes, ...spoonacularRecipes, ...generatedRecipes];
}

function getRecipeById(id) {
    return recipes.find(r => r.id === id)
        || spoonacularRecipes.find(r => r.id === id)
        || generatedRecipes.find(r => r.id === id);
}

function upsertSpoonacularRecipe(recipe) {
    const idx = spoonacularRecipes.findIndex(r => r.id === recipe.id);
    if (idx >= 0) spoonacularRecipes[idx] = recipe;
    else spoonacularRecipes.push(recipe);
}

function cacheSpoonacularRecipe(recipe) {
    if (!recipe?.spoonacularId) return;
    localStorage.setItem(
        `mealGenieSpoonDetail_${recipe.spoonacularId}`,
        JSON.stringify({ ts: Date.now(), recipe })
    );
}

function getCachedSpoonacularRecipe(spoonacularId) {
    try {
        const raw = localStorage.getItem(`mealGenieSpoonDetail_${spoonacularId}`);
        if (!raw) return null;
        const { ts, recipe } = JSON.parse(raw);
        if (Date.now() - ts > SPOON_CACHE_TTL) return null;
        return recipe;
    } catch {
        return null;
    }
}

function hydrateSpoonacularFavorites() {
    favorites.forEach(id => {
        if (id >= SPOONACULAR_ID_OFFSET) {
            const cached = getCachedSpoonacularRecipe(id - SPOONACULAR_ID_OFFSET);
            if (cached) upsertSpoonacularRecipe(cached);
        }
    });
}

function mapSpoonacularDishType(dishTypes = []) {
    const types = dishTypes.map(t => t.toLowerCase());
    if (types.some(t => t.includes('beverage') || t.includes('drink'))) return 'drink';
    if (types.some(t => t.includes('sauce') || t.includes('marinade'))) return 'sauce';
    if (types.some(t => t.includes('dessert'))) return 'dessert';
    return 'meal';
}

function mapSpoonacularCuisine(cuisines = []) {
    const known = ['Italian', 'Mexican', 'Indian', 'Chinese', 'Japanese', 'Mediterranean', 'American', 'French'];
    const match = cuisines.find(c => known.includes(c));
    return match || cuisines[0] || 'Fusion';
}

function mapSpoonacularDifficulty(minutes = 30) {
    if (minutes <= 20) return 'Easy';
    if (minutes <= 45) return 'Medium';
    return 'Hard';
}

function typeIcon(type) {
    return { meal: '🍽️', drink: '🥤', sauce: '🫙', dessert: '🍰' }[type] || '🍽️';
}

function mapSpoonacularStub(item) {
    const total = item.usedIngredientCount + item.missedIngredientCount;
    return {
        id: SPOONACULAR_ID_OFFSET + item.id,
        spoonacularId: item.id,
        name: item.title,
        type: 'meal',
        cuisine: 'Fusion',
        time: 30,
        difficulty: 'Medium',
        calories: 350,
        tags: ['verified', 'Spoonacular'],
        icon: '🍽️',
        image: item.image,
        ingredients: (item.usedIngredients || []).map(i => ({
            name: i.name,
            amount: i.amount ? `${i.amount} ${i.unit || ''}`.trim() : 'as needed'
        })),
        steps: [],
        substitutions: [],
        isSpoonacular: true,
        isStub: true,
        usedCount: item.usedIngredientCount,
        missedCount: item.missedIngredientCount,
        matchScore: total ? item.usedIngredientCount / total : 0
    };
}

function mapSpoonacularFull(data) {
    const steps = (data.analyzedInstructions || [])
        .flatMap(block => (block.steps || []).map(s => s.step))
        .filter(Boolean);
    const caloriesNutrient = data.nutrition?.nutrients?.find(n => n.name === 'Calories');
    const perServing = data.servings || 2;
    const type = mapSpoonacularDishType(data.dishTypes);

    return {
        id: SPOONACULAR_ID_OFFSET + data.id,
        spoonacularId: data.id,
        name: data.title,
        type,
        cuisine: mapSpoonacularCuisine(data.cuisines),
        time: data.readyInMinutes || 30,
        difficulty: mapSpoonacularDifficulty(data.readyInMinutes),
        calories: caloriesNutrient ? Math.round(caloriesNutrient.amount / perServing * 2) : 350,
        tags: [...(data.dishTypes || []).slice(0, 3).map(t => t.toLowerCase()), 'verified', 'Spoonacular'],
        icon: typeIcon(type),
        image: data.image,
        ingredients: (data.extendedIngredients || []).map(i => ({
            name: i.name || i.originalName,
            amount: i.original || `${i.amount || ''} ${i.unit || ''}`.trim() || 'as needed'
        })),
        steps: steps.length ? steps : [data.summary || tr('viewSource')],
        substitutions: [],
        isSpoonacular: true,
        isStub: false,
        sourceUrl: data.sourceUrl || `https://spoonacular.com/recipes/${data.id}`,
        baseServings: perServing,
        servings: perServing
    };
}

async function loadSpoonacularRecipeDetails(spoonacularId) {
    const cached = getCachedSpoonacularRecipe(spoonacularId);
    if (cached && !cached.isStub) {
        upsertSpoonacularRecipe(cached);
        return cached;
    }

    if (!isSpoonacularAvailable()) return cached || null;

    try {
        const res = await fetch(
            `/api/recipes/${encodeURIComponent(spoonacularId)}?includeNutrition=true`
        );
        if (!res.ok) return cached || null;
        const data = await res.json();
        const recipe = mapSpoonacularFull(data);
        if (isPorkRecipe(recipe)) return null;
        cacheSpoonacularRecipe(recipe);
        upsertSpoonacularRecipe(recipe);
        return recipe;
    } catch {
        return cached || null;
    }
}

function scheduleSpoonacularFetch(immediate = false) {
    clearTimeout(spoonacularFetchTimer);
    if (!isSpoonacularAvailable() || selectedIngredients.length === 0) {
        spoonacularRecipes = [];
        return;
    }
    spoonacularFetchTimer = setTimeout(refreshSpoonacularRecipes, immediate ? 0 : 700);
}

async function refreshSpoonacularRecipes() {
    if (!isSpoonacularAvailable() || selectedIngredients.length === 0) {
        spoonacularRecipes = [];
        spoonacularLoading = false;
        return;
    }

    const cacheKey = selectedIngredients.slice().sort().join(',');
    try {
        const listRaw = localStorage.getItem(`mealGenieSpoonList_${cacheKey}`);
        if (listRaw) {
            const { ts, items } = JSON.parse(listRaw);
            if (Date.now() - ts < SPOON_LIST_TTL && Array.isArray(items)) {
                spoonacularRecipes = withoutPork(items);
                updateResults();
                return;
            }
        }
    } catch {}

    spoonacularLoading = true;
    updateResults();

    const names = selectedIngredients.map(id => getIngredientById(id)?.name).filter(Boolean);
    const ingredientsParam = names.join(',');

    try {
        const url = `/api/recipes/search?ingredients=${encodeURIComponent(ingredientsParam)}&number=12`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Spoonacular API error');
        const data = await res.json();
        spoonacularRecipes = data.map(mapSpoonacularStub);
        spoonacularRecipes = withoutPork(spoonacularRecipes);
        localStorage.setItem(`mealGenieSpoonList_${cacheKey}`, JSON.stringify({ ts: Date.now(), items: spoonacularRecipes }));
    } catch (err) {
        console.warn('Spoonacular fetch failed:', err);
    } finally {
        spoonacularLoading = false;
        updateResults();
    }
}

function startVoiceInput() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        addChatbotMessage(tr('voiceNotSupported'));
        return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = currentLang === 'ar' ? 'ar-SA' : currentLang === 'ur' ? 'ur-PK' : currentLang === 'zh' ? 'zh-CN' : currentLang;
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
        addChatbotMessage(tr('voiceInputFailed'));
    };
    
    recognition.start();
}

function speakText(text, options = {}) {
    if (!('speechSynthesis' in window) || voiceMuted) return;
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    const langMap = {
        'en': 'en-US', 'ur': 'ur-PK', 'ar': 'ar-SA', 'hi': 'hi-IN',
        'es': 'es-ES', 'fr': 'fr-FR', 'de': 'de-DE', 'tr': 'tr-TR', 'zh': 'zh-CN'
    };
    utterance.lang = langMap[currentLang] || 'en-US';
    utterance.rate = options.rate ?? (currentLang === 'ur' ? 0.82 : 0.92);
    utterance.pitch = options.pitch ?? (currentLang === 'ur' ? 1.0 : 1.05);
    
    const voice = getBestVoice(utterance.lang);
    if (voice) utterance.voice = voice;
    
    window.speechSynthesis.speak(utterance);
    return utterance;
}

let voicesLoaded = false;
function loadVoices() {
    if (!('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    if (voices.length) voicesLoaded = true;
}

if ('speechSynthesis' in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
}

function getBestVoice(preferredLang) {
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return null;
    const langPrefix = (preferredLang || 'en-US').split('-')[0];

    const preferredByLang = {
        ur: ['Microsoft Gul', 'Google Urdu', 'Urdu', 'Pakistan', 'ur-PK'],
        en: ['Google UK English Female', 'Microsoft Zira', 'Microsoft Jenny', 'Samantha', 'Karen', 'Daniel'],
        hi: ['Microsoft Hemant', 'Google Hindi', 'hi-IN'],
        ar: ['Microsoft Hoda', 'Google Arabic', 'ar-SA']
    };

    const preferred = preferredByLang[langPrefix] || preferredByLang.en;
    for (const name of preferred) {
        const match = voices.find(v =>
            (v.lang.startsWith(langPrefix) || v.lang.replace('_', '-').startsWith(langPrefix)) &&
            (v.name.includes(name) || v.lang.includes(name))
        );
        if (match) return match;
    }

    const langVoice = voices.find(v =>
        v.lang === preferredLang ||
        v.lang.startsWith(langPrefix + '-') ||
        v.lang === langPrefix
    );
    if (langVoice) return langVoice;

    if (langPrefix !== 'en') {
        return voices.find(v => v.lang.startsWith('en')) || voices[0];
    }
    return voices[0];
}

// ===== RECIPE MATCHING =====
function getIngredientById(id) {
    return ingredients.find(i => i.id === id);
}

function getIngredientByName(name) {
    const normalized = name.toLowerCase();
    return ingredients.find(i => i.name.toLowerCase() === normalized);
}

function isRecipeIngredientSelected(recipeIngredientName) {
    const ing = getIngredientByName(recipeIngredientName);
    if (ing) return selectedIngredients.includes(ing.id);
    const norm = recipeIngredientName.toLowerCase().trim();
    const aliases = {
        'salt': 'salt', 'black pepper': 'pepper_spice', 'pepper': 'pepper',
        'tomato sauce': 'tomato_sauce', 'soy sauce': 'soy_sauce', 'olive oil': 'olive_oil',
        'pine nuts': 'pine_nuts'
    };
    if (aliases[norm] && selectedIngredients.includes(aliases[norm])) return true;
    return selectedIngredients.some(id => {
        const item = getIngredientById(id);
        if (!item) return false;
        const name = item.name.toLowerCase();
        return name === norm || norm.includes(name) || name.includes(norm);
    });
}

function recipeMatchesSelection(recipe) {
    const matchCount = recipe.ingredients.filter(i => isRecipeIngredientSelected(i.name)).length;
    if (matchCount === 0) return false;
    const coverage = matchCount / recipe.ingredients.length;
    if (recipe.ingredients.length <= 4) return true;
    if (matchCount >= 2) return true;
    return coverage >= 0.25;
}

function getMatchingRecipes() {
    if (selectedIngredients.length === 0) return [];

    const local = recipes.filter(r => {
        const cuisineMatch = selectedCuisine === 'Any' || r.cuisine === selectedCuisine;
        return cuisineMatch && recipeMatchesSelection(r);
    });

    const verified = spoonacularRecipes.filter(r => {
        const cuisineMatch = selectedCuisine === 'Any' || r.cuisine === selectedCuisine || r.cuisine === 'Fusion';
        return cuisineMatch;
    });

    return withoutPork([...verified, ...local].sort((a, b) => {
        if (a.isSpoonacular && !b.isSpoonacular) return -1;
        if (!a.isSpoonacular && b.isSpoonacular) return 1;

        const score = (recipe) => {
            if (recipe.isSpoonacular) return recipe.matchScore ?? 0;
            const matchCount = recipe.ingredients.filter(i => isRecipeIngredientSelected(i.name)).length;
            return matchCount / recipe.ingredients.length;
        };

        const aScore = score(a);
        const bScore = score(b);
        if (leftoverMode && bScore !== aScore) return bScore - aScore;

        if (a.isSpoonacular && b.isSpoonacular) {
            return (b.usedCount || 0) - (a.usedCount || 0);
        }

        const aMatch = a.ingredients.filter(i => isRecipeIngredientSelected(i.name)).length;
        const bMatch = b.ingredients.filter(i => isRecipeIngredientSelected(i.name)).length;
        return bMatch - aMatch;
    }));
}

function getMatchingByType(type) {
    return getMatchingRecipes().filter(r => r.type === type);
}

function hasStrongMatch() {
    const matching = getMatchingRecipes();
    if (matching.length === 0) return false;

    const best = matching[0];
    if (best.isSpoonacular) {
        return (best.usedCount >= 2) || (best.matchScore >= 0.35) || !best.isStub;
    }

    const matchCount = best.ingredients.filter(i => isRecipeIngredientSelected(i.name)).length;
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
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatScaledNumber(n) {
    if (Number.isInteger(n) || Math.abs(n - Math.round(n)) < 0.05) return String(Math.round(n));
    if (Math.abs(n - 0.25) < 0.02) return '1/4';
    if (Math.abs(n - 0.5) < 0.02) return '1/2';
    if (Math.abs(n - 0.75) < 0.02) return '3/4';
    if (Math.abs(n - 1.5) < 0.02) return '1 1/2';
    return String(Math.round(n * 100) / 100);
}

function parseAmountNumber(str) {
    const s = String(str).trim();
    if (s.includes(' ')) {
        const parts = s.split(/\s+/);
        return parts.reduce((sum, part) => sum + parseAmountNumber(part), 0);
    }
    if (s.includes('/')) {
        const [a, b] = s.split('/').map(Number);
        return b ? a / b : NaN;
    }
    return parseFloat(s);
}

function scaleAmount(amount, multiplier) {
    if (!amount || multiplier === 1) return amount;
    const trimmed = String(amount).trim();

    const rangeMatch = trimmed.match(/^([\d./\s]+)\s*-\s*([\d./\s]+)\s*(.*)$/i);
    if (rangeMatch) {
        const v1 = parseAmountNumber(rangeMatch[1]) * multiplier;
        const v2 = parseAmountNumber(rangeMatch[2]) * multiplier;
        if (isNaN(v1) || isNaN(v2)) return amount;
        const unit = rangeMatch[3] ? ` ${rangeMatch[3]}` : '';
        return `${formatScaledNumber(v1)}-${formatScaledNumber(v2)}${unit}`.trim();
    }

    const numMatch = trimmed.match(/^([\d./\s]+)\s*(.*)$/);
    if (!numMatch) return amount;
    const value = parseAmountNumber(numMatch[1]);
    if (isNaN(value)) return amount;
    const scaled = value * multiplier;
    const unit = numMatch[2] ? ` ${numMatch[2]}` : '';
    return `${formatScaledNumber(scaled)}${unit}`.trim();
}

function syncServingsUI() {
    document.querySelectorAll('.serv-btn').forEach(btn => {
        const n = parseInt(btn.textContent, 10);
        btn.classList.toggle('active', n === currentServings);
    });
}

function scaledCalories(baseCalories, recipe) {
    const base = recipe?.baseServings || 2;
    return Math.round(baseCalories * (currentServings / base));
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function generateAIRecipe(type = 'meal') {
    if (selectedIngredients.length === 0) {
        alert(tr('selectIngFirst'));
        return null;
    }
    
    const templates = recipeTemplates[type];
    const template = templates[Math.floor(Math.random() * templates.length)];
    
    const ing1Obj = getIngredientById(selectedIngredients[0]);
    const ing2Obj = getIngredientById(selectedIngredients[1]);
    const ing1 = ing1Obj ? ing1Obj.name : 'Mixed';
    const ing2 = ing2Obj ? ing2Obj.name : 'Veggies';
    
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

function buildRecipeFromCatalog(source, type) {
    return {
        ...source,
        id: Date.now() + Math.floor(Math.random() * 1000),
        type: type || source.type,
        ingredients: source.ingredients.map(i => ({ ...i })),
        steps: [...source.steps],
        substitutions: source.substitutions ? [...source.substitutions] : [],
        isGenerated: true,
        tags: [...(source.tags || []), 'Suggested']
    };
}

function findSuggestedRealRecipe(type) {
    const pool = recipes.filter(r => r.type === type);
    const ranked = pool
        .map(r => ({
            recipe: r,
            matches: r.ingredients.filter(i => isRecipeIngredientSelected(i.name)).length
        }))
        .filter(x => x.matches > 0)
        .sort((a, b) => b.matches - a.matches || a.recipe.ingredients.length - b.recipe.ingredients.length);

    if (ranked.length > 0) return buildRecipeFromCatalog(ranked[0].recipe, type);
    const fallback = pool[Math.floor(Math.random() * pool.length)];
    return fallback ? buildRecipeFromCatalog(fallback, type) : null;
}

async function fetchAIRecipe(type) {
    const names = selectedIngredients.map(id => getIngredientById(id)?.name).filter(Boolean);
    const systemPrompt = `You are a professional chef writing accurate home recipes for MealGenie.
Rules:
- Use ONLY the provided pantry ingredients plus salt, pepper, and water if needed.
- Write real, practical recipes (no fantasy names, no made-up techniques).
- Standard serving base: 2 people.
- Return valid JSON only, no markdown.`;
    const userPrompt = `Create one ${type} recipe using these ingredients: ${names.join(', ')}.
JSON shape:
{"name":"string","icon":"single emoji","time":number,"difficulty":"Easy|Medium|Hard","calories":number,"cuisine":"string","ingredients":[{"name":"string","amount":"string"}],"steps":["string"],"substitutions":[{"from":"string","to":"string"}]}`;

    try {
        const data = await callOpenRouterAPI({
            model: 'anthropic/claude-3-haiku',
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt }
            ],
            max_tokens: 900,
            temperature: 0.4
        });
        const raw = data.choices?.[0]?.message?.content || '';
        const match = raw.match(/\{[\s\S]*\}/);
        if (!match) return null;
        const parsed = JSON.parse(match[0]);
        if (!parsed.name || !Array.isArray(parsed.steps) || parsed.steps.length < 3) return null;

        return {
            id: Date.now() + Math.floor(Math.random() * 1000),
            name: parsed.name,
            type,
            cuisine: parsed.cuisine || (selectedCuisine !== 'Any' ? selectedCuisine : 'Fusion'),
            time: Number(parsed.time) || 25,
            difficulty: parsed.difficulty || 'Easy',
            calories: Number(parsed.calories) || 300,
            tags: ['AI Verified', type],
            icon: parsed.icon || recipeTemplates[type][0].icon,
            ingredients: (parsed.ingredients || []).map(i => ({
                name: i.name || 'Ingredient',
                amount: i.amount || 'as needed'
            })),
            steps: parsed.steps,
            substitutions: Array.isArray(parsed.substitutions) ? parsed.substitutions : [],
            isGenerated: true
        };
    } catch (_) {
        return null;
    }
}

async function generateSmartRecipe(type = 'meal') {
    if (selectedIngredients.length === 0) {
        alert(tr('selectIngFirst'));
        return null;
    }

    if (isSpoonacularAvailable()) {
        await refreshSpoonacularRecipes();
        const verified = spoonacularRecipes.filter(r => r.type === type);
        const pick = verified[0] || (type === 'meal' ? spoonacularRecipes[0] : null);
        if (pick) {
            const full = pick.isStub ? await loadSpoonacularRecipeDetails(pick.spoonacularId) : pick;
            if (full) return full;
        }
    }

    if (isOpenRouterAvailable()) {
        const online = await fetchAIRecipe(type);
        if (online) {
            generatedRecipes.push(online);
            localStorage.setItem('mealGenieGenerated', JSON.stringify(generatedRecipes));
            return online;
        }
    }

    const suggested = findSuggestedRealRecipe(type);
    if (suggested) {
        generatedRecipes.push(suggested);
        localStorage.setItem('mealGenieGenerated', JSON.stringify(generatedRecipes));
        return suggested;
    }

    return generateAIRecipe(type);
}

async function generateAnotherAI(type = 'meal') {
    const recipe = await generateSmartRecipe(type);
    if (recipe) {
        showRecipe(recipe.id);
        updateResults();
    }
}

// ===== DISPLAY FUNCTIONS =====
function refreshSpotlightRecipes() {
    const pool = withoutPork(recipes.filter(r => r.type === 'meal'));
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    spotlightRecipeIds = shuffled.slice(0, 2).map(r => r.id);
}

function getSpotlightRecipes() {
    if (!spotlightRecipeIds.length) refreshSpotlightRecipes();
    return spotlightRecipeIds.map(id => getRecipeById(id)).filter(Boolean);
}

function updateRecipesPageHeader() {
    const title = document.getElementById('recipesPageTitle');
    const sub = document.getElementById('recipesPageSub');
    const header = document.getElementById('recipesPageHeader');
    if (!title || !sub || !header) return;

    if (currentMobileView === 'browse') {
        header.style.display = 'none';
        return;
    }
    header.style.display = 'block';

    if (selectedIngredients.length === 0) {
        title.textContent = tr('pageRecipesTitle');
        sub.textContent = tr('pageRecipesSpotlightSub');
    } else {
        title.textContent = tr('pageRecipesTitle');
        sub.textContent = tr('pageRecipesSub');
    }
}

function updateGenerateRecipeFab() {
    const fab = document.getElementById('generateRecipeFab');
    if (!fab) return;
    const show = selectedIngredients.length > 0 && currentMobileView !== 'recipe';
    fab.hidden = !show;
    fab.textContent = tr('generateRecipesBtn');
}

function generateRecipesFromSelection() {
    if (selectedIngredients.length === 0) {
        alert(tr('selectIngFirst'));
        return;
    }
    showResults(true);
}

function updateResults() {
    if (currentMobileView === 'recipe' && activeRecipeId) return;
    updateRecipesPageHeader();

    if (selectedIngredients.length === 0) {
        const spotlight = getSpotlightRecipes();
        document.getElementById('resultsContainer').innerHTML = renderSection(tr('tryTheseRecipes'), spotlight);
        return;
    }

    const matching = getMatchingRecipes();
    const meals = getMatchingByType('meal');
    const drinks = getMatchingByType('drink');
    const sauces = getMatchingByType('sauce');
    const desserts = getMatchingByType('dessert');
    
    const hasMatch = matching.length > 0;
    const strongMatch = hasStrongMatch();
    
    let html = '';

    if (selectedIngredients.length > 0) {
        html += `
            <div class="results-intro">
                <p class="results-intro-text">${tr('pageRecipesSub')}</p>
            </div>
        `;
    }

    if (!hasMatch && selectedIngredients.length > 0) {
        html += `<div class="no-match-msg"><p>${tr('noExactMatch')}</p></div>`;
        if (!isSpoonacularAvailable()) {
            html += `<div class="no-match-msg"><p>${tr('spoonacularRequired')}</p></div>`;
        }
    }

    if (spoonacularLoading && isSpoonacularAvailable()) {
        html += `<div class="spoon-loading">${tr('loadingRecipe')}</div>`;
    }
    
    if (hasMatch) {
        const verified = matching.filter(r => r.isSpoonacular);
        const localMeals = meals.filter(r => !r.isSpoonacular);
        const localDrinks = drinks.filter(r => !r.isSpoonacular);
        const localSauces = sauces.filter(r => !r.isSpoonacular);
        const localDesserts = desserts.filter(r => !r.isSpoonacular);

        if (verified.length > 0) html += renderSection(tr('verifiedRecipes'), verified);
        if (localMeals.length > 0) html += renderSection(tr('sectionMeals'), localMeals);
        if (localDrinks.length > 0) html += renderSection(tr('sectionDrinks'), localDrinks);
        if (localSauces.length > 0) html += renderSection(tr('sectionSauces'), localSauces);
        if (localDesserts.length > 0) html += renderSection(tr('sectionDesserts'), localDesserts);
    }

    const hasVerified = matching.some(r => r.isSpoonacular);
    if (!strongMatch && selectedIngredients.length > 0 && !hasVerified) {
        html += `
            <div class="ai-section">
                <div class="ai-header">
                    <h3>${tr('needMoreIdeas')}</h3>
                    <p>${tr('generateWithAI')}</p>
                </div>
                <div class="ai-buttons">
                    <button class="ai-generate-btn" onclick="generateAndShow('meal')">🍽️ ${tr('generateMeal')}</button>
                    <button class="ai-generate-btn drink" onclick="generateAndShow('drink')">🥤 ${tr('generateDrink')}</button>
                    <button class="ai-generate-btn sauce" onclick="generateAndShow('sauce')">🫙 ${tr('generateSauce')}</button>
                    <button class="ai-generate-btn dessert" onclick="generateAndShow('dessert')">🍰 ${tr('generateDessert')}</button>
                </div>
            </div>
        `;
    }
    
    if (generatedRecipes.length > 0) {
        const customMeals = generatedRecipes.filter(r => r.type === 'meal');
        const customDrinks = generatedRecipes.filter(r => r.type === 'drink');
        const customSauces = generatedRecipes.filter(r => r.type === 'sauce');
        const customDesserts = generatedRecipes.filter(r => r.type === 'dessert');
        
        if (customMeals.length > 0) html += renderSection(tr('customMeals'), customMeals, true);
        if (customDrinks.length > 0) html += renderSection(tr('customDrinks'), customDrinks, true);
        if (customSauces.length > 0) html += renderSection(tr('customSauces'), customSauces, true);
        if (customDesserts.length > 0) html += renderSection(tr('customDesserts'), customDesserts, true);
    }

    if (!html && selectedIngredients.length > 0) {
        html = `<div class="no-match-msg"><p>${tr('noExactMatch')}</p></div>`;
    }
    
    document.getElementById('resultsContainer').innerHTML = html;
}

function scoreRecipeMatch(recipe) {
    if (recipe.isSpoonacular) return recipe.matchScore ?? 0;
    const matchCount = recipe.ingredients.filter(i => isRecipeIngredientSelected(i.name)).length;
    return matchCount / Math.max(recipe.ingredients.length, 1);
}

function getRankedRecommendations(excludeId, type, limit = 2) {
    const seen = new Set();
    const pool = [];

    getMatchingRecipes().forEach(r => {
        if (r.type !== type || r.id === excludeId || seen.has(r.id)) return;
        seen.add(r.id);
        pool.push(r);
    });

    if (pool.length < limit && selectedIngredients.length > 0) {
        recipes.forEach(r => {
            if (r.type !== type || r.id === excludeId || seen.has(r.id)) return;
            if (!r.ingredients.some(i => isRecipeIngredientSelected(i.name))) return;
            seen.add(r.id);
            pool.push(r);
        });
    }

    return pool.sort((a, b) => scoreRecipeMatch(b) - scoreRecipeMatch(a)).slice(0, limit);
}

function renderCompactRecCard(r) {
    const matchCount = r.ingredients.filter(i => isRecipeIngredientSelected(i.name)).length;
    return `
        <div class="rec-card" onclick="openRecipeFromResults(${r.id})">
            <div class="rec-card-icon emoji">${r.icon}</div>
            <div class="rec-card-name">${escapeHtml(r.name)}</div>
            <div class="rec-card-meta">⏱️ ${r.time}${tr('min')} · 🔥 ${r.calories}</div>
            ${matchCount ? `<span class="rec-card-match">${tr('ingMatch', { count: matchCount })}</span>` : ''}
        </div>
    `;
}

function renderRecipeRecommendations(currentRecipeId) {
    const container = document.getElementById('recipeRecommendations');
    if (!container) return;

    if (selectedIngredients.length === 0) {
        container.hidden = true;
        container.innerHTML = '';
        return;
    }

    const meals = getRankedRecommendations(currentRecipeId, 'meal', 2);
    const drinks = getRankedRecommendations(currentRecipeId, 'drink', 2);
    const sauces = getRankedRecommendations(currentRecipeId, 'sauce', 2);

    if (!meals.length && !drinks.length && !sauces.length) {
        container.hidden = true;
        container.innerHTML = '';
        return;
    }

    const renderGroup = (titleKey, items) => {
        if (!items.length) return '';
        return `
            <div class="rec-group">
                <h4 class="rec-group-title">${tr(titleKey)}</h4>
                <div class="rec-grid">${items.map(renderCompactRecCard).join('')}</div>
            </div>
        `;
    };

    container.hidden = false;
    container.innerHTML = `
        <h3 class="rec-main-title">${tr('recommendedForYou')}</h3>
        ${renderGroup('recMeals', meals)}
        ${renderGroup('recDrinks', drinks)}
        ${renderGroup('recSauces', sauces)}
    `;
}

function renderSection(title, items, isCustom = false) {
    return `
        <div class="result-section">
            <h3 class="section-title">${title}</h3>
            <div class="result-grid">
                ${items.map(r => `
                    <div class="result-card ${r.isGenerated ? 'generated' : ''} ${r.isSpoonacular ? 'verified' : ''}" onclick="openRecipeFromResults(${r.id})">
                        <div class="result-icon">${r.icon}</div>
                        <div class="result-name">${r.name}</div>
                        <div class="result-meta">
                            <span>⏱️ ${r.time}${tr('min')}</span>
                            <span class="diff-${r.difficulty.toLowerCase()}">${translateDifficulty(r.difficulty)}</span>
                        </div>
                        <div class="result-cal">🔥 ${r.calories} ${tr('cal')}</div>
                        <div class="result-cuisine">${r.cuisine}</div>
                        ${isCustom ? `<span class="custom-badge">${tr('customBadge')}</span>` : ''}
                        ${r.isSpoonacular ? `<span class="verified-badge">${tr('verifiedBadge')}</span>` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

async function generateAndShow(type) {
    const recipe = await generateSmartRecipe(type);
    if (recipe) {
        openRecipeFromResults(recipe.id);
        updateResults();
    }
}

function openRecipeFromResults(id) {
    if (activeRecipeId === id && currentMobileView === 'recipe') {
        showRecipeAsync(id);
        return;
    }
    showRecipe(id);
}

function showRecipe(id) {
    showRecipeAsync(id);
}

async function showRecipeAsync(id) {
    let recipe = getRecipeById(id);
    if (!recipe && id >= SPOONACULAR_ID_OFFSET && isSpoonacularAvailable()) {
        recipe = await loadSpoonacularRecipeDetails(id - SPOONACULAR_ID_OFFSET);
    }
    if (!recipe) return;

    activeRecipeId = id;
    currentMobileView = 'recipe';
    showRecipeMobile();

    document.getElementById('emptyState').style.display = 'none';
    document.getElementById('recipeView').classList.add('show');
    document.getElementById('recipeView').style.display = 'block';

    if (recipe.isSpoonacular && recipe.isStub) {
        document.getElementById('recipeName').textContent = recipe.name;
        document.getElementById('heroIcon').textContent = recipe.icon;
        document.getElementById('stepsList').innerHTML = `<p class="loading-recipe">${tr('loadingRecipe')}</p>`;
        recipe = await loadSpoonacularRecipeDetails(recipe.spoonacularId);
        if (!recipe) return;
    }

    document.getElementById('heroIcon').textContent = recipe.icon;
    document.getElementById('cuisineBadge').textContent = recipe.cuisine;
    document.getElementById('recipeName').textContent = recipe.name;

    const heroMeta = document.getElementById('heroMeta');
    const matchCount = recipe.ingredients.filter(i => isRecipeIngredientSelected(i.name)).length;
    const leftoverBadge = leftoverMode && !recipe.isGenerated && !recipe.isSpoonacular ?
        `<span class="leftover-badge">${tr('leftoverMatch', { match: matchCount, total: recipe.ingredients.length })}</span>` : '';
    const verifiedBadge = recipe.isSpoonacular ?
        `<span class="leftover-badge">${tr('verifiedBadge')}</span>` : '';

    heroMeta.innerHTML = `
        <span>⏱️ ${recipe.time} ${tr('min')}</span>
        <span class="diff-${recipe.difficulty.toLowerCase()}">${translateDifficulty(recipe.difficulty)}</span>
        <span class="cal-badge">🔥 ${scaledCalories(recipe.calories, recipe)} ${tr('cal')}</span>
        <span class="type-badge type-${recipe.type}">${recipe.type}</span>
        <span class="serv-badge">🍽️ ${currentServings}</span>
        ${verifiedBadge}
        ${leftoverBadge}
    `;

    const sourceEl = document.getElementById('recipeSource');
    if (recipe.isSpoonacular) {
        sourceEl.hidden = false;
        const link = recipe.sourceUrl
            ? `<a href="${recipe.sourceUrl.replace(/"/g, '&quot;')}" target="_blank" rel="noopener noreferrer">${tr('viewSource')} ↗</a>`
            : '';
        sourceEl.innerHTML = `${link}<span class="source-note">${tr('authenticSource')}</span>`;
    } else {
        sourceEl.hidden = true;
        sourceEl.innerHTML = '';
    }

    const baseServings = recipe.baseServings || 2;
    const multiplier = currentServings / baseServings;
    syncServingsUI();
    const ingredientsDisplay = document.getElementById('ingredientsDisplay');
    ingredientsDisplay.innerHTML = recipe.ingredients.map(ing => `
        <div class="ing-row">
            <span class="ing-text">${escapeHtml(getRecipeIngDisplayName(ing.name))}</span>
            <span class="ing-qty">${escapeHtml(scaleAmount(ing.amount, multiplier))}</span>
        </div>
    `).join('');
    
    const missing = recipe.ingredients.filter(ing =>
        !isRecipeIngredientSelected(ing.name) && !recipe.isGenerated && !recipe.isSpoonacular
    );
    const missingList = document.getElementById('missingList');
    if (recipe.isSpoonacular) {
        missingList.innerHTML = `<p class="ai-note">${tr('authenticSource')}</p>`;
    } else if (missing.length === 0 && !recipe.isGenerated) {
        missingList.innerHTML = `<p class="all-have">✓ ${tr('allHave')}</p>`;
    } else if (recipe.isGenerated) {
        missingList.innerHTML = `<p class="ai-note">${tr('aiGeneratedNote')}</p>`;
    } else {
        missingList.innerHTML = missing.map(ing => `
            <div class="missing-item">
                <span>✗</span>
                <span>${escapeHtml(getRecipeIngDisplayName(ing.name))}</span>
            </div>
        `).join('');
    }
    
    const stepsList = document.getElementById('stepsList');
    stepsList.innerHTML = recipe.steps.map((step, i) => `
        <div class="step-item">
            <span class="step-num">${i + 1}</span>
            <p class="step-text">${step}</p>
        </div>
    `).join('');
    
    const subsList = document.getElementById('subsList');
    if (recipe.substitutions.length === 0) {
        subsList.innerHTML = `<p class="no-subs">${tr('noSubs')}</p>`;
    } else {
        subsList.innerHTML = recipe.substitutions.map(s => `
            <div class="sub-row">
                <span>${escapeHtml(getRecipeIngDisplayName(s.from))}</span>
                <span class="arrow">→</span>
                <span>${escapeHtml(getRecipeIngDisplayName(s.to))}</span>
            </div>
        `).join('');
    }
    
    document.getElementById('tagsBar').innerHTML = recipe.tags.map(t => 
        `<span class="tag-badge">#${t}</span>`
    ).join('');
    
    const isFav = favorites.includes(recipe.id);
    const saveBtn = document.getElementById('favBtn');
    saveBtn.textContent = isFav ? '❤️ ' + tr('saved') : '🤍 ' + tr('saveRecipe');
    saveBtn.onclick = () => toggleFav(recipe.id);
    
    if (recipe.isGenerated) {
        const existingMoreBtn = document.querySelector('.generate-more-btn');
        if (existingMoreBtn) existingMoreBtn.remove();
        const moreBtn = document.createElement('button');
        moreBtn.className = 'generate-more-btn';
        moreBtn.textContent = tr('generateAnother');
        moreBtn.onclick = () => generateAnotherAI(recipe.type);
        saveBtn.parentNode.insertBefore(moreBtn, saveBtn.nextSibling);
    } else {
        const existingMoreBtn = document.querySelector('.generate-more-btn');
        if (existingMoreBtn) existingMoreBtn.remove();
    }
    
    renderRecipeRecommendations(recipe.id);

    const rightPanel = document.getElementById('rightPanel');
    if (rightPanel) {
        rightPanel.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
    btn.textContent = favorites.includes(id) ? '❤️ ' + tr('saved') : '🤍 ' + tr('saveRecipe');
    updateFavCount();
}

function setServings(n) {
    currentServings = n;
    syncServingsUI();
    if (activeRecipeId) showRecipe(activeRecipeId);
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
                    <span class="selected-tag emoji" onclick="toggleIngredient('${ing.id}')">
                        ${ing.icon} ${getIngDisplayName(ing)}
                    </span>
                `).join('')}
            </div>
            <button class="clear-selection" onclick="clearSelection()">${tr('clearAll')}</button>
        `;
    } else {
        tagsContainer.innerHTML = '';
    }
}

function clearSelection() {
    selectedIngredients = [];
    leftoverMode = false;
    spoonacularRecipes = [];
    document.getElementById('leftoverBtn')?.classList.remove('active');
    renderIngredients();
    updateSelectedCountLabel();
    updateSelectedTags();
    updateResults();
    updateGenerateRecipeFab();
}

// ===== INGREDIENT GRID =====
function getCategoryLabel(cat) {
    const keys = {
        proteins: 'catProteins', vegetables: 'catVegetables', dairy: 'catDairy',
        grains: 'catGrains', spices: 'catSpices', pantry: 'catPantry'
    };
    return tr(keys[cat] || cat);
}

function renderIngredients() {
    const grid = document.getElementById('ingredientsGrid');
    const categories = ['proteins', 'vegetables', 'dairy', 'grains', 'spices', 'pantry'];
    let html = '';
    
    categories.forEach(cat => {
        const catIngredients = ingredients.filter(i => i.cat === cat);
        if (catIngredients.length > 0) {
            html += `<div class="ing-category-header">${getCategoryLabel(cat)}</div>`;
            html += catIngredients.map(i => `
                <div class="ing-chip ${selectedIngredients.includes(i.id) ? 'selected' : ''}" onclick="toggleIngredient('${i.id}')">
                    <span class="ing-icon emoji">${i.icon}</span>
                    <span class="ing-name">${getIngDisplayName(i)}</span>
                </div>
            `).join('');
        }
    });
    
    grid.innerHTML = html;
}

function filterIngredients() {
    const searchEl = document.getElementById('ingSearch');
    if (!searchEl) {
        renderIngredients();
        return;
    }
    const search = searchEl.value.toLowerCase();
    const grid = document.getElementById('ingredientsGrid');
    grid.innerHTML = ingredients
        .filter(i => getIngSearchText(i).includes(search))
        .map(i => `
            <div class="ing-chip ${selectedIngredients.includes(i.id) ? 'selected' : ''}" onclick="toggleIngredient('${i.id}')">
                <span class="ing-icon emoji">${i.icon}</span>
                <span class="ing-name">${getIngDisplayName(i)}</span>
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
    updateSelectedCountLabel();
    updateSelectedTags();
    updateGenerateRecipeFab();
    scheduleSpoonacularFetch();
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
    showAllMealsMobile();
}

function backFromAll() {
    document.getElementById('allMealsView').classList.remove('show');
    document.getElementById('allMealsView').style.display = 'none';
    if (selectedIngredients.length > 0) {
        showResults();
    } else {
        showIngredients();
    }
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
    const allCuisines = ['all', 'Italian', 'Mexican', 'Indian', 'Chinese', 'Japanese', 'Mediterranean', 'American', 'Fusion', 'French'];
    const allTypes = [
        { id: 'all', name: tr('allCourse') },
        { id: 'meal', name: tr('sectionMeals') },
        { id: 'drink', name: tr('sectionDrinks') },
        { id: 'sauce', name: tr('sectionSauces') },
        { id: 'dessert', name: tr('sectionDesserts') }
    ];
    
    let filteredRecipes = withoutPork([...recipes, ...generatedRecipes]);
    
    if (selectedCuisineFilter !== 'all') {
        filteredRecipes = filteredRecipes.filter(r => r.cuisine === selectedCuisineFilter);
    }
    
    if (selectedTypeFilter !== 'all') {
        filteredRecipes = filteredRecipes.filter(r => r.type === selectedTypeFilter);
    }
    
    const container = document.getElementById('cuisineGroups');
    
    container.innerHTML = `
        <button class="back-btn" onclick="backFromAll()">← ${tr('back')}</button>
        <div class="page-header-block">
            <h2 class="page-header-title">${tr('pageBrowseTitle')}</h2>
            <p class="page-header-sub">${tr('pageBrowseSub')}</p>
        </div>
        <div class="all-meals-header">
            <div class="filter-section">
                <span class="filter-label">${tr('courseLabel')}</span>
                <div class="type-filter">
                    ${allTypes.map(t => `
                        <button class="type-filter-btn ${selectedTypeFilter === t.id ? 'active' : ''}" onclick="filterType('${t.id}')">
                            ${t.name}
                        </button>
                    `).join('')}
                </div>
            </div>
            <div class="filter-section">
                <span class="filter-label">${tr('cuisine')}:</span>
                <div class="cuisine-filter">
                    ${allCuisines.map(c => `
                        <button class="cuisine-filter-btn ${selectedCuisineFilter === c ? 'active' : ''}" onclick="filterCuisine('${c}')">
                            ${c === 'all' ? tr('allCuisine') : c}
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>
            ${filteredRecipes.length > 0 ? `
            <div class="all-results-count">${tr('recipesFound', { count: filteredRecipes.length })}</div>
            <div class="meals-grid">
                ${filteredRecipes.map(r => `
                    <div class="meal-card ${r.isGenerated ? 'generated' : ''}" onclick="openRecipeFromResults(${r.id})">
                        <div class="meal-card-icon">${r.icon}</div>
                        <div class="meal-card-name">${r.name}</div>
                        <div class="meal-card-meta">⏱️ ${r.time}${tr('min')} • ${translateDifficulty(r.difficulty)}</div>
                        <div class="meal-card-cal">🔥 ${r.calories} ${tr('cal')}</div>
                        <div class="meal-card-type">${r.type}</div>
                    </div>
                `).join('')}
            </div>
        ` : `
            <div class="no-results">
                <p>${tr('noRecipesFound')}</p>
                <button class="ai-generate-btn" onclick="generateAndShow('${selectedTypeFilter === 'all' ? 'meal' : selectedTypeFilter}')">
                    ${tr('generateRecipe')}
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
        container.innerHTML = `<p class="no-posts">${tr('noPosts')}</p>`;
    } else {
        container.innerHTML = blogPosts.map((post, index) => `
            <div class="blog-post">
                <div class="post-header">
                    <span class="post-type ${post.type}">${post.type === 'share' ? '📝 ' + tr('shareTab') : post.type === 'bug' ? '🐛 ' + tr('bugTab') : '💬 ' + tr('chatTab')}</span>
                    <span class="post-date">${new Date(post.date).toLocaleDateString()}</span>
                </div>
                <h4 class="post-title">${escapeHtml(post.title)}</h4>
                <p class="post-content">${escapeHtml(post.content)}</p>
            </div>
        `).join('');
    }
}

function submitBlogPost(type) {
    const title = document.getElementById('postTitle').value.trim();
    const content = document.getElementById('postContent').value.trim();
    
    if (!title || !content) {
        alert(tr('fillPost'));
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

function setBlogTab(type, tabIndex) {
    document.getElementById('postType').value = type;
    document.querySelectorAll('.blog-tab').forEach((tab, i) => {
        tab.classList.toggle('active', i === tabIndex);
    });
}

function openShareRecipe() {
    setBlogTab('share', 0);
}

function openReportBug() {
    setBlogTab('bug', 1);
}

function openHangout() {
    setBlogTab('hangout', 2);
}

// ===== FRIDGE SCAN =====
const fridgeState = {
    step: 1,
    detectedIds: [],
    imageData: null,
    prefs: { mood: 'comfort', budget: 'budget', usage: 'solo', servings: '2' },
    menu: null,
    stream: null
};

function loadFridgeInventory() {
    try {
        const saved = JSON.parse(localStorage.getItem('mealGenieFridge') || '[]');
        if (Array.isArray(saved)) fridgeState.detectedIds = saved;
    } catch (_) { fridgeState.detectedIds = []; }
}

function saveFridgeInventory() {
    localStorage.setItem('mealGenieFridge', JSON.stringify(fridgeState.detectedIds));
}

function toggleFridge() {
    const panel = document.getElementById('fridgePanel');
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) {
        closeOverlayPanels('fridge');
        loadFridgeInventory();
        renderFridgeDetected();
        goFridgeStep(fridgeState.step || 1);
    } else {
        stopFridgeCamera();
    }
}

function closeOverlayPanels(except) {
    const map = {
        blog: ['blogPanel', '.blog-btn'],
        settings: ['settingsPanel', '.settings-btn'],
        lang: ['langPanel', '.lang-btn'],
        chatbot: ['chatbotPanel', null]
    };
    Object.entries(map).forEach(([key, [id]]) => {
        if (key === except) return;
        document.getElementById(id)?.classList.remove('open');
    });
}

function goFridgeStep(n) {
    fridgeState.step = n;
    document.querySelectorAll('.fridge-step').forEach(el => el.classList.remove('active'));
    const stepEl = document.getElementById(['', 'fridgeStepScan', 'fridgeStepPrefs', 'fridgeStepResults'][n]);
    if (stepEl) stepEl.classList.add('active');
    const label = document.getElementById('fridgeStepLabel');
    if (label) label.textContent = `${n} / 3`;
}

function setFridgePref(key, val, btn) {
    fridgeState.prefs[key] = val;
    const parent = btn.closest('.fridge-chips');
    if (parent) {
        parent.querySelectorAll('.fridge-chip').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
    }
}

async function openFridgeCamera() {
    stopFridgeCamera();
    const video = document.getElementById('fridgeVideo');
    const preview = document.getElementById('fridgePreview');
    try {
        fridgeState.stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment' }, audio: false
        });
        video.srcObject = fridgeState.stream;
        video.hidden = false;
        preview.hidden = true;
        await video.play();
        document.getElementById('fridgeScanBtn').disabled = false;
    } catch (_) {
        alert(tr('cameraDenied'));
    }
}

function stopFridgeCamera() {
    if (fridgeState.stream) {
        fridgeState.stream.getTracks().forEach(t => t.stop());
        fridgeState.stream = null;
    }
    const video = document.getElementById('fridgeVideo');
    if (video) {
        video.srcObject = null;
        video.hidden = true;
    }
}

function captureFridgeFrame() {
    const video = document.getElementById('fridgeVideo');
    if (!video.srcObject || video.readyState < 2) return null;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    return canvas.toDataURL('image/jpeg', 0.85);
}

function handleFridgeFile(input) {
    const file = input.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
        fridgeState.imageData = reader.result;
        const preview = document.getElementById('fridgePreview');
        const video = document.getElementById('fridgeVideo');
        preview.src = reader.result;
        preview.hidden = false;
        video.hidden = true;
        stopFridgeCamera();
        document.getElementById('fridgeScanBtn').disabled = false;
    };
    reader.readAsDataURL(file);
}

function simulateFridgeDetection() {
    const common = ['chicken', 'egg', 'onion', 'tomato', 'garlic', 'rice', 'milk', 'cheese', 'potato', 'carrot', 'pepper', 'yogurt', 'butter', 'bread'];
    const shuffled = common.sort(() => Math.random() - 0.5);
    const count = 4 + Math.floor(Math.random() * 4);
    return shuffled.slice(0, count).map(id => {
        const ing = getIngredientById(id);
        return ing ? ing.id : id;
    }).filter(Boolean);
}

async function scanFridgeImage() {
    const ring = document.getElementById('fridgeScanRing');
    const btn = document.getElementById('fridgeScanBtn');
    if (!fridgeState.imageData) {
        fridgeState.imageData = captureFridgeFrame();
    }
    if (!fridgeState.imageData) {
        alert(tr('takePhotoFirst'));
        return;
    }
    ring?.classList.add('scanning');
    btn.disabled = true;
    btn.textContent = tr('scanning');

    try {
        const detected = await detectFridgeIngredients(fridgeState.imageData);
        fridgeState.detectedIds = detected.length ? detected : simulateFridgeDetection();
        saveFridgeInventory();
        renderFridgeDetected();
        document.getElementById('fridgeNextPrefs').disabled = false;
    } catch (_) {
        fridgeState.detectedIds = simulateFridgeDetection();
        saveFridgeInventory();
        renderFridgeDetected();
        document.getElementById('fridgeNextPrefs').disabled = false;
    } finally {
        ring?.classList.remove('scanning');
        btn.disabled = false;
        btn.textContent = tr('scanFridge');
        stopFridgeCamera();
    }
}

async function detectFridgeIngredients(imageData) {
    const catalogNames = ingredients.map(i => i.name).slice(0, 80).join(', ');
    if (!isOpenRouterAvailable()) return simulateFridgeDetection();

    const data = await callOpenRouterAPI({
        model: 'google/gemini-2.0-flash-001',
        messages: [{
            role: 'user',
            content: [
                { type: 'text', text: `You see a fridge photo. List visible food ingredients ONLY from this catalog when possible: ${catalogNames}. Return JSON array of lowercase ingredient id strings matching catalog ids (use hyphens like bell-pepper). No markdown.` },
                { type: 'image_url', image_url: { url: imageData } }
            ]
        }],
        max_tokens: 300
    });
    const raw = data.choices?.[0]?.message?.content || '[]';
    const match = raw.match(/\[[\s\S]*\]/);
    if (!match) return simulateFridgeDetection();
    const parsed = JSON.parse(match[0]);
    return parsed.filter(id => getIngredientById(id)).slice(0, 12);
}

function renderFridgeDetected() {
    const wrap = document.getElementById('fridgeDetected');
    if (!wrap) return;
    if (!fridgeState.detectedIds.length) {
        wrap.innerHTML = `<p class="fridge-detected-hint">${tr('detectedHint')}</p>`;
        return;
    }
    wrap.innerHTML = `
        <p class="fridge-detected-title">${tr('detectedTitle', { count: fridgeState.detectedIds.length })}</p>
        <div class="fridge-detected-chips">
            ${fridgeState.detectedIds.map(id => {
                const ing = getIngredientById(id);
                return ing ? `<button class="fridge-ing-chip selected" onclick="toggleFridgeIng('${id}', this)">${ing.icon} ${escapeHtml(getIngDisplayName(ing))}</button>` : '';
            }).join('')}
        </div>
        <p class="fridge-detected-hint">${tr('detectedEdit')}</p>
        <div class="fridge-add-grid">
            ${ingredients.slice(0, 16).map(ing => `
                <button class="fridge-add-chip ${fridgeState.detectedIds.includes(ing.id) ? 'on' : ''}" onclick="toggleFridgeIng('${ing.id}')">${ing.icon}</button>
            `).join('')}
        </div>
    `;
}

function toggleFridgeIng(id, btn) {
    const idx = fridgeState.detectedIds.indexOf(id);
    if (idx >= 0) fridgeState.detectedIds.splice(idx, 1);
    else fridgeState.detectedIds.push(id);
    saveFridgeInventory();
    renderFridgeDetected();
    document.getElementById('fridgeNextPrefs').disabled = fridgeState.detectedIds.length === 0;
}

function youtubeSearchUrl(query) {
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(query + ' authentic recipe')}`;
}

function getFridgeRecipeMatches() {
    const ids = fridgeState.detectedIds;
    return [...recipes, ...generatedRecipes]
        .filter(r => r.type === 'meal' || r.type === 'drink' || r.type === 'sauce')
        .map(r => {
            const matchCount = r.ingredients.filter(i => {
                const ing = getIngredientByName(i.name);
                return ing && ids.includes(ing.id);
            }).length;
            return { recipe: r, matchCount, ratio: matchCount / Math.max(r.ingredients.length, 1) };
        })
        .filter(x => x.matchCount > 0)
        .sort((a, b) => b.ratio - a.ratio || b.matchCount - a.matchCount)
        .slice(0, 6);
}

async function generateFridgeMenu() {
    const results = document.getElementById('fridgeResults');
    results.innerHTML = `<div class="fridge-loading">${tr('buildingMenu')}</div>`;
    goFridgeStep(3);

    const matches = getFridgeRecipeMatches();
    const names = fridgeState.detectedIds.map(id => getIngredientById(id)?.name).filter(Boolean);
    const prefs = fridgeState.prefs;

    let aiMenu = null;
    if (isOpenRouterAvailable()) {
        aiMenu = await fetchFridgeMenuAI(names, prefs, matches);
    }
    if (!aiMenu) {
        aiMenu = buildLocalFridgeMenu(matches, names, prefs);
    }
    fridgeState.menu = aiMenu;
    renderFridgeResults(aiMenu);
}

function buildLocalFridgeMenu(matches, names, prefs) {
    const meal = matches.find(m => m.recipe.type === 'meal')?.recipe || matches[0]?.recipe;
    const drink = matches.find(m => m.recipe.type === 'drink')?.recipe;
    const sauce = matches.find(m => m.recipe.type === 'sauce')?.recipe;
    return {
        meal: meal ? { name: meal.name, id: meal.id, tip: `Uses your ${names.slice(0, 3).join(', ')}` } : { name: 'Fridge Stir Fry', id: null, tip: 'Quick pan fry with what you have' },
        drink: drink ? { name: drink.name, id: drink.id } : { name: 'Fresh Fruit Smoothie', id: null },
        sauce: sauce ? { name: sauce.name, id: sauce.id } : null,
        mood: prefs.mood,
        budget: prefs.budget,
        youtube: meal ? youtubeSearchUrl(meal.name) : youtubeSearchUrl('easy fridge leftovers')
    };
}

async function fetchFridgeMenuAI(names, prefs, matches) {
    try {
        const data = await callOpenRouterAPI({
            model: 'anthropic/claude-3-haiku',
            messages: [{
                role: 'user',
                content: `User fridge: ${names.join(', ')}. Mood: ${prefs.mood}, budget: ${prefs.budget}, usage: ${prefs.usage}, servings: ${prefs.servings}. Suggest meal, drink, optional sauce. JSON only: {"meal":{"name":"","tip":""},"drink":{"name":""},"sauce":{"name":""}|null,"youtubeQuery":""}`
            }],
            max_tokens: 400
        });
        const raw = data.choices?.[0]?.message?.content || '';
        const match = raw.match(/\{[\s\S]*\}/);
        if (!match) return null;
        const parsed = JSON.parse(match[0]);
        const dbMeal = matches.find(m => m.recipe.type === 'meal')?.recipe;
        return {
            meal: { name: parsed.meal?.name || dbMeal?.name || 'Chef Special', id: dbMeal?.id || null, tip: parsed.meal?.tip || '' },
            drink: { name: parsed.drink?.name || 'House Drink', id: matches.find(m => m.recipe.type === 'drink')?.recipe?.id || null },
            sauce: parsed.sauce ? { name: parsed.sauce.name || parsed.sauce, id: matches.find(m => m.recipe.type === 'sauce')?.recipe?.id || null } : null,
            mood: prefs.mood,
            budget: prefs.budget,
            youtube: youtubeSearchUrl(parsed.youtubeQuery || parsed.meal?.name || 'authentic cooking')
        };
    } catch (_) {
        return null;
    }
}

function renderFridgeResults(menu) {
    const results = document.getElementById('fridgeResults');
    results.innerHTML = `
        <div class="fridge-menu-card">
            <h4>${tr('yourMenu')}</h4>
            <p class="fridge-menu-meta">${menu.mood} · ${menu.budget} ${tr('budgetWord')}</p>
            <div class="fridge-menu-item main">
                <span>🍳</span>
                <div>
                    <strong>${escapeHtml(menu.meal.name)}</strong>
                    <p>${escapeHtml(menu.meal.tip || tr('matchedFridge'))}</p>
                    ${menu.meal.id ? `<button class="fridge-link-btn" onclick="openFridgeRecipe(${menu.meal.id})">${tr('viewRecipe')}</button>` : ''}
                </div>
            </div>
            <div class="fridge-menu-item">
                <span>🥤</span>
                <div>
                    <strong>${escapeHtml(menu.drink.name)}</strong>
                    ${menu.drink.id ? `<button class="fridge-link-btn" onclick="openFridgeRecipe(${menu.drink.id})">${tr('viewRecipe')}</button>` : ''}
                </div>
            </div>
            ${menu.sauce ? `
            <div class="fridge-menu-item">
                <span>🫙</span>
                <div><strong>${escapeHtml(menu.sauce.name)}</strong></div>
            </div>` : ''}
            <a class="fridge-yt-btn" href="${menu.youtube}" target="_blank" rel="noopener">${tr('watchYoutube')}</a>
        </div>
        <div class="fridge-matches">
            <h4>${tr('alsoMatches')}</h4>
            ${getFridgeRecipeMatches().map(m => `
                <button class="fridge-match-row" onclick="openFridgeRecipe(${m.recipe.id})">
                    <span>${m.recipe.icon}</span>
                    <span>${escapeHtml(m.recipe.name)}</span>
                    <span class="fridge-match-pct">${Math.round(m.ratio * 100)}%</span>
                </button>
            `).join('')}
        </div>
    `;
}

function openFridgeRecipe(id) {
    toggleFridge();
    showRecipe(id);
}

function applyFridgeToKitchen() {
    selectedIngredients = [...fridgeState.detectedIds];
    renderIngredients();
    updateResults();
    toggleFridge();
    showResults();
}

// ===== LIVE COOKING MENTOR =====
const liveAssistantState = {
    active: false,
    recipe: null,
    stepIndex: 0,
    listening: false,
    recognition: null
};

function startLiveAssistant() {
    startLiveAssistantAsync();
}

async function startLiveAssistantAsync() {
    let recipe = getRecipeById(activeRecipeId);
    if (recipe?.isSpoonacular && recipe.isStub) {
        recipe = await loadSpoonacularRecipeDetails(recipe.spoonacularId);
    }
    if (!recipe) {
        alert(tr('openRecipeFirst'));
        return;
    }
    liveAssistantState.recipe = recipe;
    liveAssistantState.stepIndex = 0;
    liveAssistantState.active = true;

    document.getElementById('liveAssistant').classList.add('open');
    document.getElementById('liveRecipeName').textContent = recipe.name;
    document.getElementById('liveTranscript').innerHTML = '';
    updateLiveStepUI();
    liveMentorSpeak(tr('liveIntro', { recipe: recipe.name }));
}

function stopLiveAssistant() {
    liveAssistantState.active = false;
    liveAssistantState.listening = false;
    stopLiveListen();
    window.speechSynthesis?.cancel();
    document.getElementById('liveAssistant')?.classList.remove('open');
    document.getElementById('liveMicBtn')?.classList.remove('listening');
}

function updateLiveStepUI() {
    const recipe = liveAssistantState.recipe;
    if (!recipe) return;
    const total = recipe.steps.length;
    const idx = liveAssistantState.stepIndex;
    const stepText = recipe.steps[idx] || tr('liveAllDone');

    document.getElementById('liveStepNum').textContent = Math.min(idx + 1, total);
    document.getElementById('liveStepText').textContent = stepText;
    document.getElementById('liveStepCount').textContent = tr('liveStepOf', {
        cur: Math.min(idx + 1, total),
        total
    });
    document.getElementById('liveProgressBar').style.width = `${total ? (idx / total) * 100 : 100}%`;

    document.querySelectorAll('#stepsList .step-item').forEach((el, i) => {
        el.classList.remove('live-current', 'live-done');
        if (i < idx) el.classList.add('live-done');
        if (i === idx && idx < total) el.classList.add('live-current');
    });
}

function liveMentorSpeak(text) {
    appendLiveTranscript('mentor', text);
    speakText(text, { rate: 0.88, pitch: 1.08 });
}

function appendLiveTranscript(role, text) {
    const box = document.getElementById('liveTranscript');
    if (!box) return;
    const div = document.createElement('div');
    div.className = role === 'user' ? 'live-msg-user' : 'live-msg-mentor';
    div.textContent = text;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
}

function liveMentorNext() {
    const recipe = liveAssistantState.recipe;
    if (!recipe) return;
    if (liveAssistantState.stepIndex >= recipe.steps.length) {
        liveMentorSpeak("You nailed it! Plate up and enjoy. I'm proud of you, chef.");
        return;
    }
    const step = recipe.steps[liveAssistantState.stepIndex];
    const num = liveAssistantState.stepIndex + 1;
    liveMentorSpeak(`Step ${num}. ${step}`);
    liveAssistantState.stepIndex++;
    updateLiveStepUI();
}

function liveMentorPrev() {
    if (liveAssistantState.stepIndex > 0) {
        liveAssistantState.stepIndex--;
        updateLiveStepUI();
        const step = liveAssistantState.recipe.steps[liveAssistantState.stepIndex];
        liveMentorSpeak(`Going back. Step ${liveAssistantState.stepIndex + 1}. ${step}`);
    }
}

function liveMentorAskHelp() {
    liveMentorListen(true);
    liveMentorSpeak("Tell me what happened — burned, too salty, wrong step? I'm listening.");
}

function liveMentorListen(forceHelp) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        const msg = prompt('Voice not supported. Type what went wrong:');
        if (msg) processLiveMentorInput(msg, !!forceHelp);
        return;
    }
    if (liveAssistantState.listening) {
        stopLiveListen();
        return;
    }
    liveAssistantState.recognition = new SpeechRecognition();
    liveAssistantState.recognition.lang = 'en-US';
    liveAssistantState.recognition.interimResults = false;
    liveAssistantState.listening = true;
    document.getElementById('liveMicBtn').classList.add('listening');

    liveAssistantState.recognition.onresult = (e) => {
        const text = e.results[0][0].transcript;
        processLiveMentorInput(text, !!forceHelp);
    };
    liveAssistantState.recognition.onend = () => stopLiveListen();
    liveAssistantState.recognition.onerror = () => stopLiveListen();
    liveAssistantState.recognition.start();
}

function stopLiveListen() {
    liveAssistantState.listening = false;
    document.getElementById('liveMicBtn')?.classList.remove('listening');
    try { liveAssistantState.recognition?.stop(); } catch (_) {}
}

async function processLiveMentorInput(text, isHelp) {
    appendLiveTranscript('user', text);
    const lower = text.toLowerCase();
    if (!isHelp) {
        if (lower.includes('next') || lower.includes('done') || lower.includes('ready')) {
            liveMentorNext();
            return;
        }
        if (lower.includes('back') || lower.includes('previous') || lower.includes('repeat')) {
            if (lower.includes('repeat')) {
                const idx = Math.max(0, liveAssistantState.stepIndex - 1);
                const step = liveAssistantState.recipe.steps[idx];
                liveMentorSpeak(`Repeating. ${step}`);
            } else {
                liveMentorPrev();
            }
            return;
        }
    }
    const mistakeHints = ['burn', 'salt', 'wrong', 'mistake', 'help', 'stuck', 'overcook', 'raw', 'watery', 'dry'];
    const isMistake = isHelp || mistakeHints.some(h => lower.includes(h));
    if (isMistake) {
        await liveMentorFix(text);
    } else {
        liveMentorSpeak("Got it. Say next when you're ready for the following step, or tap help if something goes wrong.");
    }
}

async function liveMentorFix(problem) {
    const recipe = liveAssistantState.recipe;
    const stepIdx = Math.max(0, liveAssistantState.stepIndex - 1);
    const currentStep = recipe?.steps[stepIdx] || '';
    liveMentorSpeak('Analyzing... hang on chef.');

    const localFix = getLocalMentorFix(problem, currentStep);
    if (localFix && !isOpenRouterAvailable()) {
        liveMentorSpeak(localFix);
        return;
    }
    if (isOpenRouterAvailable()) {
        try {
            const data = await callOpenRouterAPI({
                model: 'anthropic/claude-3-haiku',
                messages: [{
                    role: 'system',
                    content: 'You are a friendly robotic cooking mentor. User made a mistake. Give 2-3 short actionable fixes. Be encouraging, not robotic-stiff. Max 3 sentences.'
                }, {
                    role: 'user',
                    content: `Recipe: ${recipe.name}. Current step: ${currentStep}. Problem: ${problem}`
                }],
                max_tokens: 200
            });
            liveMentorSpeak(data.choices[0].message.content.trim());
            return;
        } catch (_) {}
    }
    liveMentorSpeak(localFix || "No worries chef — taste, adjust seasoning, and lower the heat. You’ve got this!");
}

function getLocalMentorFix(problem, step) {
    const p = problem.toLowerCase();
    if (p.includes('burn') || p.includes('burnt')) return "Turn off the heat now. If only the bottom burned, transfer to a new pan without scraping the char. Add a splash of liquid and continue gently.";
    if (p.includes('salt')) return "Dilute with unsalted liquid — water, stock, or cream. Add acid like lemon to balance. Serve with plain rice or bread on the side.";
    if (p.includes('raw') || p.includes('undercook')) return "Keep cooking on medium heat until done. Cover the pan to trap steam — that speeds things up without burning.";
    if (p.includes('watery') || p.includes('soggy')) return "Simmer uncovered to reduce liquid, or mix a teaspoon of cornstarch with cold water and stir in.";
    if (p.includes('dry')) return "Add butter, olive oil, or a splash of broth. Cover briefly so moisture returns.";
    if (step) return `For this step: take your time with "${step.slice(0, 60)}...". Lower heat, re-read amounts, and adjust as you go.`;
    return null;
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
    hydrateSpoonacularFavorites();
    const saved = favorites.map(id => getRecipeById(id)).filter(Boolean);
    if (saved.length === 0) {
        alert(tr('noFavorites'));
        return;
    }
    if (saved.length === 1) {
        showRecipe(saved[0].id);
        return;
    }
    document.getElementById('emptyState').style.display = 'none';
    document.getElementById('allMealsView').classList.remove('show');
    document.getElementById('allMealsView').style.display = 'none';
    document.getElementById('recipeView').classList.remove('show');
    document.getElementById('recipeView').style.display = 'none';
    document.getElementById('resultsContainer').innerHTML = renderSection(tr('savedRecipes'), saved);
    document.getElementById('resultsContainer').classList.add('show');
    document.getElementById('resultsContainer').style.display = 'block';
    currentMobileView = 'results';
    document.getElementById('leftPanel').style.display = 'none';
    document.getElementById('rightPanel').style.display = 'block';
    updateNavItems('navResults');
}

function updateFavCount() {
    document.getElementById('favCount').textContent = favorites.length;
}

// ===== MOBILE NAVIGATION =====
let currentMobileView = 'ingredients';

function showIngredients() {
    currentMobileView = 'ingredients';
    document.getElementById('leftPanel').style.display = 'flex';
    document.getElementById('rightPanel').style.display = 'none';
    document.getElementById('resultsContainer').classList.remove('show');
    document.getElementById('allMealsView').classList.remove('show');
    document.getElementById('recipeView').classList.remove('show');
    updateNavItems('navIngredients');
    updateGenerateRecipeFab();
    document.getElementById('mainContent').scrollTop = 0;
}

function showResults(allowEmpty = true) {
    currentMobileView = 'results';
    activeRecipeId = null;

    document.getElementById('leftPanel').style.display = 'none';
    document.getElementById('rightPanel').style.display = 'block';
    document.getElementById('allMealsView').classList.remove('show');
    document.getElementById('allMealsView').style.display = 'none';
    document.getElementById('recipeView').classList.remove('show');
    document.getElementById('recipeView').style.display = 'none';
    document.getElementById('emptyState').style.display = 'none';
    document.getElementById('resultsContainer').classList.add('show');
    document.getElementById('resultsContainer').style.display = 'block';
    document.getElementById('recipesPageHeader').style.display = 'block';
    updateNavItems('navResults');
    updateResults();
    updateRecipesPageHeader();
    updateGenerateRecipeFab();
    document.getElementById('mainContent').scrollTop = 0;
    document.getElementById('rightPanel').scrollTop = 0;
}

function updateNavItems(activeId) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    const active = document.getElementById(activeId);
    if (active) active.classList.add('active');
}

function applyMobileLayout() {
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
}

function showRecipeMobile() {
    currentMobileView = 'recipe';
    document.getElementById('leftPanel').style.display = 'none';
    document.getElementById('rightPanel').style.display = 'block';
    document.getElementById('resultsContainer').classList.remove('show');
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('allMealsView').classList.remove('show');
    document.getElementById('allMealsView').style.display = 'none';
    document.getElementById('recipesPageHeader').style.display = 'none';
    document.getElementById('recipeView').classList.add('show');
    document.getElementById('recipeView').style.display = 'block';
    updateGenerateRecipeFab();
    document.getElementById('mainContent').scrollTop = 0;
    document.getElementById('rightPanel').scrollTop = 0;
}

function showAllMealsMobile() {
    currentMobileView = 'browse';
    document.getElementById('leftPanel').style.display = 'none';
    document.getElementById('rightPanel').style.display = 'block';
    document.getElementById('resultsContainer').classList.remove('show');
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('recipesPageHeader').style.display = 'none';
    document.getElementById('recipeView').classList.remove('show');
    document.getElementById('recipeView').style.display = 'none';
    document.getElementById('allMealsView').classList.add('show');
    document.getElementById('allMealsView').style.display = 'block';
    renderAllMealsView();
    updateNavItems('navAll');
    updateGenerateRecipeFab();
    document.getElementById('mainContent').scrollTop = 0;
    document.getElementById('rightPanel').scrollTop = 0;
}

function backFromRecipe() {
    if (selectedIngredients.length > 0) {
        showResults(true);
    } else {
        showIngredients();
    }
}

// ===== SWIPE NAVIGATION =====
const SWIPE_THRESHOLD = 50;
const SWIPE_VERTICAL_LIMIT = 60;
let swipeStart = null;

function isOverlayOpen() {
    return ['blogPanel', 'settingsPanel', 'langPanel', 'chatbotPanel'].some(
        id => document.getElementById(id)?.classList.contains('open')
    );
}

function shouldIgnoreSwipeTarget(target) {
    if (!target) return true;
    return !!target.closest('input, textarea, select, a, .chatbot-panel, .blog-panel, .settings-panel, .lang-panel');
}

function isRtlSwipe() {
    return document.documentElement.dir === 'rtl' || document.body.classList.contains('lang-ur');
}

function handleSwipeNavigation(dx) {
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;

    const rtl = isRtlSwipe();
    const swipeNext = rtl ? dx > 0 : dx < 0;
    const swipePrev = rtl ? dx < 0 : dx > 0;

    if (currentMobileView === 'recipe') {
        if (swipePrev) backFromRecipe();
        return;
    }

    if (swipeNext) {
        if (currentMobileView === 'ingredients') showResults(true);
        else if (currentMobileView === 'results') showAllMeals();
    } else if (swipePrev) {
        if (currentMobileView === 'browse') showResults(true);
        else if (currentMobileView === 'results') showIngredients();
    }
}

function setupSwipeNavigation() {
    const main = document.getElementById('mainContent');
    if (!main) return;

    main.addEventListener('touchstart', (e) => {
        if (isOverlayOpen() || shouldIgnoreSwipeTarget(e.target)) {
            swipeStart = null;
            return;
        }
        const touch = e.changedTouches[0];
        swipeStart = { x: touch.clientX, y: touch.clientY };
    }, { passive: true });

    main.addEventListener('touchend', (e) => {
        if (!swipeStart || isOverlayOpen()) {
            swipeStart = null;
            return;
        }
        const touch = e.changedTouches[0];
        const dx = touch.clientX - swipeStart.x;
        const dy = touch.clientY - swipeStart.y;
        swipeStart = null;

        if (Math.abs(dy) > SWIPE_VERTICAL_LIMIT && Math.abs(dy) > Math.abs(dx)) return;
        handleSwipeNavigation(dx);
    }, { passive: true });
}

// ===== INIT =====
window.addEventListener('DOMContentLoaded', () => {
    loadServerServices().then(() => {
        if (selectedIngredients.length > 0) scheduleSpoonacularFetch(true);
        updateResults();
    });
    renderIngredients();
    loadBgColor();
    hydrateSpoonacularFavorites();
    updateResults();
    updateFavCount();
    applyMobileLayout();
    applyLanguage();
    refreshSpotlightRecipes();
    setupSwipeNavigation();
    updateGenerateRecipeFab();
    document.getElementById('muteBtn').textContent = voiceMuted ? '🔇' : '🔊';
    
    // Close panels when clicking outside
    document.addEventListener('click', (e) => {
        const blogPanel = document.getElementById('blogPanel');
        const settingsPanel = document.getElementById('settingsPanel');
        const langPanel = document.getElementById('langPanel');
        const blogBtn = document.querySelector('.blog-btn');
        const settingsBtn = document.querySelector('.settings-btn');
        const langBtn = document.querySelector('.lang-btn');
        
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
        
        if (langPanel.classList.contains('open') && 
            !langPanel.contains(e.target) && 
            !langBtn.contains(e.target)) {
            langPanel.classList.remove('open');
        }
    });
    
    // Handle resize for mobile/desktop
    window.addEventListener('resize', applyMobileLayout);
});
