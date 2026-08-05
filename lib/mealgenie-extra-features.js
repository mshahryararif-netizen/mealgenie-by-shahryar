/**
 * Extra features layered on classic Meal Genie UI:
 * Pantry Inventory, Weekly Planner, Grocery List (+ hub for Fridge).
 * Uses same localStorage keys as the chef feature store where possible.
 */

const PANTRY_KEY = 'mealGeniePantryInventory';
const PLANNER_KEY = 'mealGeniePlanner';
const GROCERY_KEY = 'mealGenieGrocery';

const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const DAY_LABELS = { mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat', sun: 'Sun' };
const SLOTS = ['breakfast', 'lunch', 'dinner', 'snack'];
const SLOT_LABELS = { breakfast: 'Breakfast', lunch: 'Lunch', dinner: 'Dinner', snack: 'Snack' };

const SAMPLE_MEALS = [
  { title: 'Veggie Omelette', calories: 320, cost: 3.5 },
  { title: 'Chicken Bowl', calories: 480, cost: 6.5 },
  { title: 'Dal & Rice', calories: 420, cost: 3.2 },
  { title: 'Pasta Primavera', calories: 510, cost: 4.8 },
  { title: 'Greek Salad', calories: 280, cost: 4.1 },
  { title: 'Tofu Stir Fry', calories: 390, cost: 5.0 },
  { title: 'Yogurt Parfait', calories: 220, cost: 2.4 },
  { title: 'Fish Tacos', calories: 450, cost: 7.2 },
];

function uid(prefix) {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}

function readDoc(key, fallback) {
  try {
    const raw = JSON.parse(localStorage.getItem(key) || 'null');
    if (!raw) return fallback;
    return raw.data !== undefined ? raw.data : raw;
  } catch {
    return fallback;
  }
}

function writeDoc(key, version, data) {
  localStorage.setItem(key, JSON.stringify({ version, data, updatedAt: new Date().toISOString() }));
  return data;
}

function emptyWeek() {
  const week = {};
  for (const day of DAYS) {
    week[day] = { breakfast: null, lunch: null, dinner: null, snack: null };
  }
  return week;
}

function loadPantryItems() {
  const store = readDoc(PANTRY_KEY, { version: 1, items: [] });
  return Array.isArray(store.items) ? store.items : Array.isArray(store) ? store : [];
}

function savePantryItems(items) {
  localStorage.setItem(
    PANTRY_KEY,
    JSON.stringify({ version: 1, items, updatedAt: new Date().toISOString() }),
  );
  return items;
}

function loadPlanner() {
  return readDoc(PLANNER_KEY, emptyWeek());
}

function savePlanner(data) {
  return writeDoc(PLANNER_KEY, 1, data);
}

function loadGrocery() {
  return readDoc(GROCERY_KEY, []);
}

function saveGrocery(data) {
  return writeDoc(GROCERY_KEY, 1, data);
}

function closeAllFeaturePanels() {
  ['moreFeaturesPanel', 'pantryPanel', 'plannerPanel', 'groceryPanel', 'fridgePanel'].forEach((id) => {
    document.getElementById(id)?.classList.remove('open');
  });
}

export function toggleMoreFeatures() {
  const panel = document.getElementById('moreFeaturesPanel');
  if (!panel) return;
  const opening = !panel.classList.contains('open');
  closeAllFeaturePanels();
  if (opening) panel.classList.add('open');
}

export function openFeaturePanel(name) {
  closeAllFeaturePanels();
  if (name === 'fridge') {
    if (typeof window.toggleFridge === 'function') window.toggleFridge();
    return;
  }
  if (name === 'more') {
    document.getElementById('moreFeaturesPanel')?.classList.add('open');
    return;
  }
  const id = `${name}Panel`;
  document.getElementById(id)?.classList.add('open');
  if (name === 'pantry') renderPantryPanel();
  if (name === 'planner') renderPlannerPanel();
  if (name === 'grocery') renderGroceryPanel();
}

export function closeFeaturePanel(name) {
  document.getElementById(`${name}Panel`)?.classList.remove('open');
}

export function renderPantryPanel() {
  const list = document.getElementById('pantryList');
  if (!list) return;
  const q = (document.getElementById('pantrySearch')?.value || '').trim().toLowerCase();
  const filter = document.getElementById('pantryFilter')?.value || 'all';
  const now = Date.now();
  const soon = 1000 * 60 * 60 * 24 * 4;

  let items = loadPantryItems();
  items = items.filter((item) => {
    if (q && !item.name.toLowerCase().includes(q)) return false;
    if (filter === 'expiring') {
      if (!item.expiresOn) return false;
      const t = new Date(item.expiresOn).getTime();
      return t - now <= soon;
    }
    if (filter !== 'all' && item.category !== filter) return false;
    return true;
  });

  if (!items.length) {
    list.innerHTML = '<p class="fridge-detected-hint">No pantry items yet. Add what you have.</p>';
    return;
  }

  list.innerHTML = items
    .map((item) => {
      const exp = item.expiresOn ? new Date(item.expiresOn) : null;
      const daysLeft = exp ? Math.ceil((exp.getTime() - now) / (1000 * 60 * 60 * 24)) : null;
      const bar = daysLeft === null ? 100 : Math.max(8, Math.min(100, (daysLeft / 14) * 100));
      return `
        <div class="feature-row">
          <div>
            <strong>${escape(item.name)}</strong>
            <div class="feature-meta">${escape(item.category)} · ${item.quantity} ${escape(item.unit || 'pcs')}${
              exp ? ` · exp ${exp.toLocaleDateString()}` : ''
            }</div>
            <div class="feature-bar"><i style="width:${bar}%"></i></div>
          </div>
          <button type="button" class="fridge-link-btn" onclick="deletePantryItem('${item.id}')">Delete</button>
        </div>`;
    })
    .join('');
}

function escape(text) {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function addPantryItem(event) {
  event.preventDefault();
  const name = document.getElementById('pantryName')?.value?.trim();
  if (!name) return false;
  const items = loadPantryItems();
  items.unshift({
    id: uid('pantry'),
    name,
    category: document.getElementById('pantryCat')?.value || 'vegetables',
    quantity: Number(document.getElementById('pantryQty')?.value || 1),
    unit: document.getElementById('pantryUnit')?.value || 'pcs',
    expiresOn: document.getElementById('pantryExp')?.value || null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  savePantryItems(items);
  document.getElementById('pantryName').value = '';
  renderPantryPanel();
  return false;
}

export function deletePantryItem(id) {
  savePantryItems(loadPantryItems().filter((item) => item.id !== id));
  renderPantryPanel();
}

export function applyPantryToKitchen() {
  const names = loadPantryItems().map((item) => item.name.trim().toLowerCase());
  if (typeof window === 'undefined') return;

  const catalog = window.__mealGenieIngredients || [];
  const ids = [];
  for (const name of names) {
    const match = catalog.find(
      (ing) =>
        ing.name.toLowerCase() === name ||
        ing.id === name.replace(/\s+/g, '_') ||
        ing.id === name.replace(/\s+/g, '-'),
    );
    if (match) ids.push(match.id);
  }

  closeAllFeaturePanels();
  if (typeof window.applyIngredientIds === 'function') {
    window.applyIngredientIds(ids);
  }
}

export function renderPlannerPanel() {
  const root = document.getElementById('plannerPrint');
  if (!root) return;
  const plan = loadPlanner();
  root.innerHTML = DAYS.map((day) => {
    return `
      <div class="planner-day">
        <div class="planner-day-title">${DAY_LABELS[day]}</div>
        ${SLOTS.map((slot) => {
          const meal = plan[day]?.[slot];
          return `
            <div class="planner-slot">
              <div class="planner-slot-label">${SLOT_LABELS[slot]}</div>
              <div class="planner-meal">${meal ? escape(meal.title) : '—'}</div>
              ${meal ? `<div class="feature-meta">${meal.calories} kcal · $${meal.cost}</div>` : ''}
              <button type="button" class="fridge-link-btn" onclick="replacePlannerMeal('${day}','${slot}')">Replace</button>
            </div>`;
        }).join('')}
      </div>`;
  }).join('');
}

export function aiGenerateWeekPlan() {
  const week = emptyWeek();
  let i = Date.now() % SAMPLE_MEALS.length;
  for (const day of DAYS) {
    for (const slot of SLOTS) {
      const base = SAMPLE_MEALS[i % SAMPLE_MEALS.length];
      week[day][slot] = { id: uid('meal'), title: base.title, calories: base.calories, cost: base.cost };
      i += 1;
    }
  }
  savePlanner(week);
  const note = document.getElementById('plannerNote');
  if (note) {
    note.textContent =
      'Generated a full week. Tip: set allergies/budget in Settings tastes later — this draft respects quick/balanced defaults.';
  }
  renderPlannerPanel();
}

export function replacePlannerMeal(day, slot) {
  const plan = loadPlanner();
  const pick = SAMPLE_MEALS[Math.floor(Math.random() * SAMPLE_MEALS.length)];
  plan[day][slot] = { id: uid('meal'), title: pick.title, calories: pick.calories, cost: pick.cost };
  savePlanner(plan);
  renderPlannerPanel();
}

export function renderGroceryPanel() {
  const root = document.getElementById('groceryPrint');
  if (!root) return;
  const items = loadGrocery();
  if (!items.length) {
    root.innerHTML = '<p class="fridge-detected-hint">List is empty. Tap “Compare vs Pantry”.</p>';
    return;
  }
  const groups = new Map();
  for (const item of items) {
    const key = item.category || 'Other';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }
  root.innerHTML = Array.from(groups.entries())
    .map(([cat, rows]) => {
      return `
        <div class="feature-group">
          <h4>${escape(cat)}</h4>
          ${rows
            .map(
              (item) => `
            <label class="feature-row check">
              <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="toggleGroceryItem('${item.id}')">
              <span><strong>${escape(item.name)}</strong>
              <div class="feature-meta">${item.quantity} ${escape(item.unit || 'pcs')}</div></span>
            </label>`,
            )
            .join('')}
        </div>`;
    })
    .join('');
}

export function rebuildGroceryFromPantry() {
  const pantry = new Set(loadPantryItems().map((p) => p.name.toLowerCase()));
  const needed = [
    { name: 'Olive Oil', category: 'Pantry', quantity: 1, unit: 'bottle' },
    { name: 'Garlic', category: 'Vegetables', quantity: 1, unit: 'bulb' },
    { name: 'Chicken', category: 'Meat', quantity: 500, unit: 'g' },
    { name: 'Rice', category: 'Grains', quantity: 1, unit: 'kg' },
    { name: 'Spinach', category: 'Vegetables', quantity: 1, unit: 'bag' },
    { name: 'Milk', category: 'Dairy', quantity: 1, unit: 'L' },
  ].filter((item) => !pantry.has(item.name.toLowerCase()));

  const current = loadGrocery();
  const map = new Map(current.map((item) => [item.name.toLowerCase(), item]));
  for (const row of needed) {
    const key = row.name.toLowerCase();
    const existing = map.get(key);
    if (existing) existing.quantity += row.quantity;
    else {
      map.set(key, {
        id: uid('groc'),
        name: row.name,
        category: row.category,
        quantity: row.quantity,
        unit: row.unit,
        checked: false,
      });
    }
  }
  saveGrocery(Array.from(map.values()));
  const status = document.getElementById('groceryStatus');
  if (status) status.textContent = `Merged ${needed.length} missing item(s) vs pantry.`;
  renderGroceryPanel();
}

export function toggleGroceryItem(id) {
  const next = loadGrocery().map((item) =>
    item.id === id ? { ...item, checked: !item.checked } : item,
  );
  saveGrocery(next);
  renderGroceryPanel();
}

export async function copyGroceryList() {
  const text = loadGrocery()
    .map((item) => `${item.checked ? '[x]' : '[ ]'} ${item.quantity} ${item.unit} ${item.name}`)
    .join('\n');
  try {
    await navigator.clipboard.writeText(text || 'Grocery list is empty.');
    const status = document.getElementById('groceryStatus');
    if (status) status.textContent = 'Copied to clipboard.';
  } catch {
    alert(text);
  }
}

export async function shareGroceryList() {
  const text = loadGrocery()
    .filter((item) => !item.checked)
    .map((item) => `${item.quantity} ${item.unit} ${item.name}`)
    .join('\n');
  if (navigator.share) {
    try {
      await navigator.share({ title: 'Meal Genie Grocery List', text });
      return;
    } catch {
      /* fall through */
    }
  }
  await copyGroceryList();
}

export function printFeaturePanel(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const win = window.open('', '_blank', 'width=900,height=700');
  if (!win) return;
  win.document.write(`<!doctype html><html><head><title>Meal Genie</title>
    <style>body{font-family:system-ui,sans-serif;padding:24px} h4{margin:16px 0 8px}
    .planner-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:8px}
    .planner-day{border:1px solid #ddd;border-radius:12px;padding:8px}
    .feature-row{padding:8px 0;border-bottom:1px solid #eee}</style>
    </head><body>${el.innerHTML}</body></html>`);
  win.document.close();
  win.focus();
  win.print();
}

export function bindExtraFeatureGlobals() {
  Object.assign(window, {
    toggleMoreFeatures,
    openFeaturePanel,
    closeFeaturePanel,
    renderPantryPanel,
    addPantryItem,
    deletePantryItem,
    applyPantryToKitchen,
    aiGenerateWeekPlan,
    replacePlannerMeal,
    rebuildGroceryFromPantry,
    toggleGroceryItem,
    copyGroceryList,
    shareGroceryList,
    printFeaturePanel,
    renderPlannerPanel,
    renderGroceryPanel,
  });
}
