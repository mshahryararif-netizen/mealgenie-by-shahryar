/** Inner HTML of `.app` from the original index.html — preserved verbatim for parity. */
export const MEALGENIE_APP_INNER_HTML = `
        <!-- Header -->
        <header class="app-header">
            <div class="logo">
                <span class="logo-icon">🍳</span>
                <span class="logo-text">Meal Genie</span>
            </div>
            <div class="header-actions">
                <button class="fridge-btn" onclick="toggleFridge()" aria-label="Fridge Scan">🧊</button>
                <button class="more-btn" onclick="toggleMoreFeatures()" aria-label="More features">🧰</button>
                <button class="blog-btn" onclick="toggleBlog()" aria-label="Community">💬</button>
                <button class="header-btn" onclick="showFavorites()" aria-label="Favorites">
                    ❤️<span id="favCount">0</span>
                </button>
                <button class="settings-btn" onclick="toggleSettings()" aria-label="Settings">🎨</button>
                <button class="lang-btn" onclick="toggleLangMenu()" aria-label="Language">🌐</button>
                <button class="chatbot-btn" onclick="toggleChatbot()" aria-label="Cooking Assistant">🎙️</button>
                <span id="headerAuthSlot" class="header-auth-slot"></span>
            </div>
        </header>

        <!-- Blog Panel (Full Screen Mobile) -->
        <div class="blog-panel" id="blogPanel">
            <div class="blog-panel-header">
                <h3 class="blog-title">💬 Community</h3>
                <button class="blog-panel-close" onclick="toggleBlog()">✕</button>
            </div>
            <div class="blog-tabs">
                <button class="blog-tab active" onclick="openShareRecipe()">📝 Share</button>
                <button class="blog-tab" onclick="openReportBug()">🐛 Bug</button>
                <button class="blog-tab" onclick="openHangout()">💬 Chat</button>
            </div>
            <div class="blog-form">
                <input type="text" id="postTitle" placeholder="Title...">
                <textarea id="postContent" placeholder="Share your recipe, report a bug, or just say hi!"></textarea>
                <button class="submit-post-btn" onclick="submitBlogPost(document.getElementById('postType').value)">
                    Post
                </button>
            </div>
            <input type="hidden" id="postType" value="share">
            <div class="blog-posts" id="blogPosts"></div>
        </div>

        <!-- Language Panel -->
        <div class="lang-panel" id="langPanel">
            <div class="lang-panel-header">
                <h3 class="lang-title">🌐 Language / زبان / اللغة</h3>
                <button class="lang-panel-close" onclick="toggleLangMenu()">✕</button>
            </div>
            <div class="lang-options" id="langOptions"></div>
        </div>

        <!-- Chatbot Panel -->
        <div class="chatbot-panel" id="chatbotPanel">
            <div class="chatbot-header">
                <div class="chatbot-title-area">
                    <span class="chatbot-icon">🍳</span>
                    <div>
                        <h3 class="chatbot-title">Cooking Assistant</h3>
                        <span class="chatbot-subtitle">Voice-powered help</span>
                    </div>
                </div>
                <button class="chatbot-close" onclick="toggleChatbot()">✕</button>
            </div>
            <div class="chatbot-messages" id="chatbotMessages">
                <div class="chatbot-welcome">
                    <p>👋 Hi! I'm your voice cooking assistant. I can help you cook step-by-step, suggest ingredient substitutions, or answer cooking questions.</p>
                    <p class="chatbot-hint">Try: "How do I make scrambled eggs?"</p>
                </div>
            </div>
            <div class="chatbot-input-area">
                <input type="text" id="chatbotInput" placeholder="Ask about cooking..." onkeypress="if(event.key==='Enter')sendChatbotMessage()">
                <button class="chatbot-mute-btn" onclick="toggleMute()" id="muteBtn" title="Toggle voice">🔊</button>
                <button class="chatbot-send-btn" onclick="sendChatbotMessage()">➤</button>
                <button class="chatbot-voice-btn" onclick="startVoiceInput()" id="voiceBtn">🎤</button>
            </div>
        </div>

        <!-- Settings Panel (Full Screen Mobile) -->
        <div class="settings-panel" id="settingsPanel">
            <div class="settings-panel-header">
                <button class="settings-panel-close" onclick="toggleSettings()">✕</button>
                <h3 class="settings-title">Settings</h3>
            </div>
            <div class="settings-section">
                <h4 class="settings-section-title" id="settingsBgTitle">Background Color</h4>
            </div>
            <div class="color-options">
                <button class="color-option" style="background:#FEF9F3;" data-color="#FEF9F3" onclick="setBgColor('#FEF9F3')"></button>
                <button class="color-option" style="background:#F0FDF4;" data-color="#F0FDF4" onclick="setBgColor('#F0FDF4')"></button>
                <button class="color-option" style="background:#FFF7ED;" data-color="#FFF7ED" onclick="setBgColor('#FFF7ED')"></button>
                <button class="color-option" style="background:#FEFCE8;" data-color="#FEFCE8" onclick="setBgColor('#FEFCE8')"></button>
                <button class="color-option" style="background:#EFF6FF;" data-color="#EFF6FF" onclick="setBgColor('#EFF6FF')"></button>
                <button class="color-option" style="background:#FDF2F8;" data-color="#FDF2F8" onclick="setBgColor('#FDF2F8')"></button>
                <button class="color-option" style="background:#FFFFFF;" data-color="#FFFFFF" onclick="setBgColor('#FFFFFF')"></button>
            </div>
            <div class="settings-section" style="margin-top: 24px;">
                <h4 class="settings-section-title" id="settingsDownloadTitle">Get Meal Genie on Android</h4>
                <p class="settings-hint" id="downloadAppHint">Install the app on your phone — same logo, full experience.</p>
                <button class="save-api-key-btn" id="downloadAppBtn" onclick="downloadMealGenieApp()">Download Meal Genie</button>
            </div>
            <div class="settings-section" style="margin-top: 24px;">
                <h4 class="settings-section-title" id="settingsSpoonacularTitle">Verified Recipes API (Spoonacular)</h4>
                <p class="settings-hint" id="spoonacularHint">Verified recipes are configured on the server — no key needed here.</p>
                <input type="password" id="spoonacularKeyInput" class="api-key-input" placeholder="Your Spoonacular API key">
                <button class="save-api-key-btn" id="saveSpoonacularBtn" onclick="saveSpoonacularKey()">Save Recipe API Key</button>
            </div>
            <div class="settings-section" style="margin-top: 24px;">
                <h4 class="settings-section-title" id="settingsOpenRouterTitle">AI API Key (OpenRouter)</h4>
                <p class="settings-hint" id="openRouterHint">AI is configured on the server — no key needed here.</p>
                <input type="password" id="apiKeyInput" class="api-key-input" placeholder="sk-or-...">
                <button class="save-api-key-btn" id="saveOpenRouterBtn" onclick="saveApiKey()">Save API Key</button>
            </div>
        </div>

        <!-- Fridge Scan Panel -->
        <div class="fridge-panel" id="fridgePanel">
            <div class="fridge-panel-header">
                <button class="fridge-panel-close" onclick="toggleFridge()">✕</button>
                <h3 class="fridge-title">🧊 Fridge Scan</h3>
                <span class="fridge-step-label" id="fridgeStepLabel">1 / 3</span>
            </div>

            <div class="fridge-step active" id="fridgeStepScan">
                <p class="fridge-intro">Snap your fridge — AI detects ingredients, matches authentic recipes &amp; chef videos.</p>
                <div class="fridge-camera-wrap">
                    <video id="fridgeVideo" class="fridge-video" playsinline muted></video>
                    <img id="fridgePreview" class="fridge-preview" alt="Fridge preview" hidden>
                    <div class="fridge-scan-ring" id="fridgeScanRing"></div>
                </div>
                <div class="fridge-scan-actions">
                    <button class="fridge-action-btn primary" onclick="openFridgeCamera()">📷 Open Camera</button>
                    <label class="fridge-action-btn">
                        🖼️ Upload Photo
                        <input type="file" id="fridgeFileInput" accept="image/*" capture="environment" hidden onchange="handleFridgeFile(this)">
                    </label>
                </div>
                <button class="fridge-action-btn scan" id="fridgeScanBtn" onclick="scanFridgeImage()" disabled>✨ Scan Fridge</button>
                <div class="fridge-detected" id="fridgeDetected">
                    <p class="fridge-detected-hint">Detected items appear here — tap to confirm.</p>
                </div>
                <button class="fridge-action-btn primary" id="fridgeNextPrefs" onclick="goFridgeStep(2)" disabled>Next: Customize →</button>
            </div>

            <div class="fridge-step" id="fridgeStepPrefs">
                <p class="fridge-intro">Set your vibe — we'll pick meals, drinks &amp; sauces that fit.</p>
                <div class="fridge-pref-block">
                    <span class="fridge-pref-label">😊 Mood</span>
                    <div class="fridge-chips" id="fridgeMoodChips">
                        <button class="fridge-chip active" data-val="comfort" onclick="setFridgePref('mood','comfort',this)">🛋️ Comfort</button>
                        <button class="fridge-chip" data-val="healthy" onclick="setFridgePref('mood','healthy',this)">💪 Healthy</button>
                        <button class="fridge-chip" data-val="quick" onclick="setFridgePref('mood','quick',this)">⚡ Quick</button>
                        <button class="fridge-chip" data-val="cozy" onclick="setFridgePref('mood','cozy',this)">☕ Cozy</button>
                        <button class="fridge-chip" data-val="adventurous" onclick="setFridgePref('mood','adventurous',this)">🌍 Adventurous</button>
                    </div>
                </div>
                <div class="fridge-pref-block">
                    <span class="fridge-pref-label">💰 Budget</span>
                    <div class="fridge-chips" id="fridgeBudgetChips">
                        <button class="fridge-chip active" data-val="budget" onclick="setFridgePref('budget','budget',this)">💵 Budget</button>
                        <button class="fridge-chip" data-val="moderate" onclick="setFridgePref('budget','moderate',this)">💳 Moderate</button>
                        <button class="fridge-chip" data-val="any" onclick="setFridgePref('budget','any',this)">✨ Any</button>
                    </div>
                </div>
                <div class="fridge-pref-block">
                    <span class="fridge-pref-label">👥 Usage</span>
                    <div class="fridge-chips" id="fridgeUsageChips">
                        <button class="fridge-chip active" data-val="solo" onclick="setFridgePref('usage','solo',this)">1️⃣ Solo</button>
                        <button class="fridge-chip" data-val="couple" onclick="setFridgePref('usage','couple',this)">👫 Couple</button>
                        <button class="fridge-chip" data-val="family" onclick="setFridgePref('usage','family',this)">👨‍👩‍👧 Family</button>
                        <button class="fridge-chip" data-val="prep" onclick="setFridgePref('usage','prep',this)">📦 Meal Prep</button>
                    </div>
                </div>
                <div class="fridge-pref-block">
                    <span class="fridge-pref-label">🍽️ Servings</span>
                    <div class="fridge-chips">
                        <button class="fridge-chip" data-val="1" onclick="setFridgePref('servings','1',this)">1</button>
                        <button class="fridge-chip active" data-val="2" onclick="setFridgePref('servings','2',this)">2</button>
                        <button class="fridge-chip" data-val="4" onclick="setFridgePref('servings','4',this)">4</button>
                        <button class="fridge-chip" data-val="6" onclick="setFridgePref('servings','6',this)">6</button>
                    </div>
                </div>
                <button class="fridge-action-btn" onclick="goFridgeStep(1)">← Back</button>
                <button class="fridge-action-btn primary" onclick="generateFridgeMenu()">🍳 Generate My Menu</button>
            </div>

            <div class="fridge-step" id="fridgeStepResults">
                <div id="fridgeResults"></div>
                <button class="fridge-action-btn" onclick="goFridgeStep(2)">← Customize Again</button>
                <button class="fridge-action-btn primary" onclick="applyFridgeToKitchen()">✅ Use in Kitchen</button>
            </div>
        </div>


        <!-- More Features Hub -->
        <div class="fridge-panel" id="moreFeaturesPanel">
            <div class="fridge-panel-header" style="background:linear-gradient(135deg,#FEF3C7,#FDE68A)">
                <button class="fridge-panel-close" onclick="toggleMoreFeatures()">✕</button>
                <h3 class="fridge-title">🧰 More Features</h3>
            </div>
            <div class="fridge-step active" style="display:block">
                <p class="fridge-intro">Extra tools for your kitchen — same Meal Genie style.</p>
                <div class="feature-hub-grid">
                    <button class="feature-hub-card" onclick="openFeaturePanel('pantry')">
                        <span>🧺</span>
                        <strong>Pantry Inventory</strong>
                        <em>Save ingredients, quantities &amp; expiry</em>
                    </button>
                    <button class="feature-hub-card" onclick="openFeaturePanel('planner')">
                        <span>📅</span>
                        <strong>Weekly Meal Planner</strong>
                        <em>Breakfast, lunch, dinner &amp; snacks</em>
                    </button>
                    <button class="feature-hub-card" onclick="openFeaturePanel('grocery')">
                        <span>🛒</span>
                        <strong>Grocery List</strong>
                        <em>Missing items vs pantry</em>
                    </button>
                    <button class="feature-hub-card" onclick="openFeaturePanel('fridge')">
                        <span>🧊</span>
                        <strong>Fridge Photo Scan</strong>
                        <em>Camera / upload → ingredient chips</em>
                    </button>
                </div>
            </div>
        </div>

        <!-- Pantry Inventory Panel -->
        <div class="fridge-panel" id="pantryPanel">
            <div class="fridge-panel-header" style="background:linear-gradient(135deg,#DCFCE7,#BBF7D0)">
                <button class="fridge-panel-close" onclick="closeFeaturePanel('pantry')">✕</button>
                <h3 class="fridge-title">🧺 Pantry Inventory</h3>
            </div>
            <div class="fridge-step active" style="display:block">
                <div class="feature-toolbar">
                    <input type="search" id="pantrySearch" class="feature-input" placeholder="Search pantry..." oninput="renderPantryPanel()">
                    <select id="pantryFilter" class="feature-input" onchange="renderPantryPanel()">
                        <option value="all">All</option>
                        <option value="expiring">Expiring soon</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="fruits">Fruits</option>
                        <option value="dairy">Dairy</option>
                        <option value="meat">Meat</option>
                        <option value="grains">Grains</option>
                        <option value="spices">Spices</option>
                        <option value="drinks">Drinks</option>
                        <option value="frozen">Frozen</option>
                        <option value="snacks">Snacks</option>
                    </select>
                </div>
                <form class="feature-form" onsubmit="return addPantryItem(event)">
                    <input id="pantryName" class="feature-input" placeholder="Ingredient name" required>
                    <select id="pantryCat" class="feature-input">
                        <option value="vegetables">Vegetables</option>
                        <option value="fruits">Fruits</option>
                        <option value="dairy">Dairy</option>
                        <option value="meat">Meat</option>
                        <option value="grains">Grains</option>
                        <option value="spices">Spices</option>
                        <option value="drinks">Drinks</option>
                        <option value="frozen">Frozen</option>
                        <option value="snacks">Snacks</option>
                    </select>
                    <input id="pantryQty" class="feature-input" type="number" min="0" step="0.1" value="1" placeholder="Qty">
                    <input id="pantryUnit" class="feature-input" placeholder="unit" value="pcs">
                    <input id="pantryExp" class="feature-input" type="date">
                    <button type="submit" class="fridge-action-btn primary">Add</button>
                </form>
                <div id="pantryList" class="feature-list"></div>
                <div class="fridge-scan-actions" style="margin-top:12px">
                    <button type="button" class="fridge-action-btn primary" onclick="applyPantryToKitchen()">✅ Use in Leftovers</button>
                    <button type="button" class="fridge-action-btn" onclick="openFeaturePanel('more')">← Features</button>
                </div>
            </div>
        </div>

        <!-- Weekly Planner Panel -->
        <div class="fridge-panel" id="plannerPanel">
            <div class="fridge-panel-header" style="background:linear-gradient(135deg,#E0E7FF,#C7D2FE)">
                <button class="fridge-panel-close" onclick="closeFeaturePanel('planner')">✕</button>
                <h3 class="fridge-title">📅 Weekly Meal Planner</h3>
            </div>
            <div class="fridge-step active" style="display:block">
                <div class="feature-toolbar">
                    <button type="button" class="fridge-action-btn primary" onclick="aiGenerateWeekPlan()">✨ AI Generate Week</button>
                    <button type="button" class="fridge-action-btn" onclick="printFeaturePanel('plannerPrint')">🖨 Print</button>
                    <button type="button" class="fridge-action-btn" onclick="openFeaturePanel('more')">← Features</button>
                </div>
                <p class="fridge-intro" id="plannerNote">Plan breakfast, lunch, dinner &amp; snacks. Tap Replace to swap a meal.</p>
                <div id="plannerPrint" class="planner-grid"></div>
            </div>
        </div>

        <!-- Grocery List Panel -->
        <div class="fridge-panel" id="groceryPanel">
            <div class="fridge-panel-header" style="background:linear-gradient(135deg,#FFE4E6,#FECDD3)">
                <button class="fridge-panel-close" onclick="closeFeaturePanel('grocery')">✕</button>
                <h3 class="fridge-title">🛒 Grocery List</h3>
            </div>
            <div class="fridge-step active" style="display:block">
                <div class="feature-toolbar">
                    <button type="button" class="fridge-action-btn primary" onclick="rebuildGroceryFromPantry()">Compare vs Pantry</button>
                    <button type="button" class="fridge-action-btn" onclick="copyGroceryList()">📋 Copy</button>
                    <button type="button" class="fridge-action-btn" onclick="printFeaturePanel('groceryPrint')">🖨 Print / PDF</button>
                    <button type="button" class="fridge-action-btn" onclick="shareGroceryList()">↗ Share</button>
                    <button type="button" class="fridge-action-btn" onclick="openFeaturePanel('more')">← Features</button>
                </div>
                <p class="fridge-intro" id="groceryStatus">Missing ingredients, merged &amp; grouped by category.</p>
                <div id="groceryPrint" class="feature-list"></div>
            </div>
        </div>

        <!-- Main Content -->
        <main class="main-content" id="mainContent">
            <!-- Left Panel: Ingredients -->
            <div class="left-panel" id="leftPanel">
                <div class="ing-mission-block" id="ingMissionBlock">
                    <div class="ing-mission-icon emoji">🎯</div>
                    <strong class="ing-mission-title" id="appGoalTitle">Our Mission</strong>
                    <p class="ing-mission-text" id="appGoalText">MealGenie turns whatever is in your kitchen into creative meal ideas — instantly.</p>
                </div>

                <div class="ing-pick-header">
                    <h2 class="ing-pick-title" id="ingredientsPageTitle">Pick Your Ingredients</h2>
                    <p class="ing-pick-sub" id="ingredientsPageSub">Tap what you have — we'll find recipes for you.</p>
                </div>

                <div class="ingredients-grid" id="ingredientsGrid"></div>

                <div class="bottom-actions" id="bottomActions">
                    <div class="quick-actions">
                        <button class="quick-btn" id="leftoverBtn" onclick="toggleLeftoverMode()">
                            🔄 Use Leftovers
                        </button>
                        <button class="view-all-btn" id="viewAllBtn" onclick="showAllMeals()">
                            📖 View All Recipes
                        </button>
                    </div>
                    <div class="selected-row">
                        <span id="selectedCount">0 selected</span>
                    </div>
                </div>
            </div>

            <!-- Right Panel: Results & Recipes -->
            <div class="right-panel" id="rightPanel">
                <div class="page-header-block page-header-recipes" id="recipesPageHeader" style="display:none">
                    <h2 class="page-header-title" id="recipesPageTitle">Your Recipes</h2>
                    <p class="page-header-sub" id="recipesPageSub">Matched meals, drinks &amp; sauces based on what you picked.</p>
                </div>

                <div class="empty-state" id="emptyState">
                    <div class="empty-icon">👨‍🍳</div>
                    <h2 id="emptyTitle">What are we cooking?</h2>
                    <p id="emptySub">Select ingredients to discover recipes</p>
                    <div class="selected-tags" id="selectedTags"></div>
                </div>

                <div class="results-container" id="resultsContainer"></div>

                <div class="all-meals-view" id="allMealsView">
                    <div id="cuisineGroups"></div>
                </div>

                <div class="recipe-view" id="recipeView">
                    <button class="back-btn" onclick="backFromRecipe()">← Back</button>
                    <div class="recipe-hero">
                        <div class="recipe-hero-icon" id="heroIcon">🍳</div>
                        <div class="recipe-name" id="recipeName">Recipe Name</div>
                        <div class="recipe-badge" id="cuisineBadge">American</div>
                        <div class="recipe-meta" id="heroMeta"></div>
                        <div class="recipe-source" id="recipeSource" hidden></div>
                    </div>
                    <div class="servings-section">
                        <span>Servings:</span>
                        <div class="serv-buttons">
                            <button class="serv-btn" onclick="setServings(1)">1</button>
                            <button class="serv-btn active" onclick="setServings(2)">2</button>
                            <button class="serv-btn" onclick="setServings(3)">3</button>
                            <button class="serv-btn" onclick="setServings(4)">4</button>
                        </div>
                    </div>
                    <div class="section">
                        <h3>Ingredients</h3>
                        <div class="ingredients-list" id="ingredientsDisplay"></div>
                    </div>
                    <div class="section">
                        <h3>You May Need</h3>
                        <div class="missing-list" id="missingList"></div>
                    </div>
                    <div class="section">
                        <h3>Steps</h3>
                        <div class="steps-list" id="stepsList"></div>
                    </div>
                    <div class="section">
                        <h3>Substitutions</h3>
                        <div class="subs-list" id="subsList"></div>
                    </div>
                    <div class="section recipe-recommendations" id="recipeRecommendations" hidden></div>
                    <div class="tags-bar" id="tagsBar"></div>
                    <button class="fav-btn" id="favBtn" onclick="">🤍 Save Recipe</button>
                </div>
            </div>
        </main>

        <!-- Bottom Navigation (Mobile Only) -->
        <nav class="bottom-nav" id="bottomNav">
            <button class="nav-item active" onclick="showIngredients()" id="navIngredients">
                <span class="nav-item-icon">🥘</span>
                <span class="nav-item-label">Ingredients</span>
            </button>
            <button class="nav-item" onclick="showResults()" id="navResults">
                <span class="nav-item-icon">🍽️</span>
                <span class="nav-item-label">Recipes</span>
            </button>
            <button class="nav-item" onclick="showAllMeals()" id="navAll">
                <span class="nav-item-icon">📖</span>
                <span class="nav-item-label">Browse</span>
            </button>
        </nav>

        <button class="generate-recipe-fab" id="generateRecipeFab" onclick="generateRecipesFromSelection()" hidden>✨ Generate Recipes</button>
`;
