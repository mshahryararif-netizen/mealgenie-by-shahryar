const MODEL_PATTERN = /^[a-z0-9._-]+\/[a-z0-9._-]+$/i;
const MAX_MESSAGE_COUNT = 20;
const MAX_TEXT_LENGTH = 12_000;
const MAX_IMAGE_DATA_URL_LENGTH = 6_000_000;
const MAX_INGREDIENTS = 30;
const MAX_INGREDIENT_LENGTH = 80;
const MAX_RECIPE_ID = 2_147_483_647;

type MessageContent =
  | string
  | Array<{ type?: string; text?: string; image_url?: { url?: string } }>;

export type ChatMessage = {
  role: string;
  content: MessageContent;
};

export type ChatCompletionRequest = {
  model?: string;
  messages: ChatMessage[];
  max_tokens?: number;
  temperature?: number;
};

const ALLOWED_MODELS = new Set([
  'anthropic/claude-3-haiku',
  'google/gemini-2.0-flash-001',
]);

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function validateMessageContent(content: MessageContent): string | null {
  if (typeof content === 'string') {
    if (content.length > MAX_TEXT_LENGTH) {
      return 'Message content is too long.';
    }
    return null;
  }

  if (!Array.isArray(content)) {
    return 'Invalid message content.';
  }

  for (const part of content) {
    if (part?.type === 'text') {
      if (!isNonEmptyString(part.text) || part.text.length > MAX_TEXT_LENGTH) {
        return 'Invalid text content in message.';
      }
    } else if (part?.type === 'image_url') {
      const url = part.image_url?.url;
      if (!isNonEmptyString(url)) {
        return 'Invalid image content in message.';
      }
      if (!url.startsWith('data:image/')) {
        return 'Only embedded image data is supported.';
      }
      if (url.length > MAX_IMAGE_DATA_URL_LENGTH) {
        return 'Image is too large.';
      }
    } else {
      return 'Unsupported message content type.';
    }
  }

  return null;
}

export function validateChatCompletionRequest(body: unknown):
  | { ok: true; data: ChatCompletionRequest }
  | { ok: false; error: string } {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Invalid request body.' };
  }

  const record = body as Record<string, unknown>;
  const messages = record.messages;

  if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGE_COUNT) {
    return { ok: false, error: 'Messages are required.' };
  }

  const normalizedMessages: ChatMessage[] = [];

  for (const message of messages) {
    if (!message || typeof message !== 'object') {
      return { ok: false, error: 'Invalid message format.' };
    }

    const role = (message as ChatMessage).role;
    const content = (message as ChatMessage).content;

    if (!isNonEmptyString(role) || !['system', 'user', 'assistant'].includes(role)) {
      return { ok: false, error: 'Invalid message role.' };
    }

    if (content === undefined || content === null) {
      return { ok: false, error: 'Message content is required.' };
    }

    const contentError = validateMessageContent(content);
    if (contentError) {
      return { ok: false, error: contentError };
    }

    normalizedMessages.push({ role, content });
  }

  const model = isNonEmptyString(record.model) ? record.model.trim() : 'anthropic/claude-3-haiku';
  if (!ALLOWED_MODELS.has(model) && !MODEL_PATTERN.test(model)) {
    return { ok: false, error: 'Invalid model.' };
  }

  const maxTokensRaw = record.max_tokens;
  const maxTokens =
    typeof maxTokensRaw === 'number' && Number.isFinite(maxTokensRaw)
      ? Math.min(Math.max(Math.floor(maxTokensRaw), 1), 2000)
      : 300;

  const temperatureRaw = record.temperature;
  const temperature =
    typeof temperatureRaw === 'number' && Number.isFinite(temperatureRaw)
      ? Math.min(Math.max(temperatureRaw, 0), 2)
      : undefined;

  return {
    ok: true,
    data: {
      model,
      messages: normalizedMessages,
      max_tokens: maxTokens,
      ...(temperature !== undefined ? { temperature } : {}),
    },
  };
}

export function parseIngredientsParam(raw: string | null): { ok: true; ingredients: string[] } | { ok: false; error: string } {
  if (!isNonEmptyString(raw)) {
    return { ok: false, error: 'Ingredients are required.' };
  }

  const ingredients = raw
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  if (ingredients.length === 0) {
    return { ok: false, error: 'At least one ingredient is required.' };
  }

  if (ingredients.length > MAX_INGREDIENTS) {
    return { ok: false, error: 'Too many ingredients.' };
  }

  for (const ingredient of ingredients) {
    if (ingredient.length > MAX_INGREDIENT_LENGTH || /[<>"']/.test(ingredient)) {
      return { ok: false, error: 'Invalid ingredient name.' };
    }
  }

  return { ok: true, ingredients };
}

export function parseRecipeId(raw: string): { ok: true; id: number } | { ok: false; error: string } {
  const id = Number.parseInt(raw, 10);

  if (!Number.isInteger(id) || id <= 0 || id > MAX_RECIPE_ID) {
    return { ok: false, error: 'Invalid recipe ID.' };
  }

  return { ok: true, id };
}

export function parseResultCount(raw: string | null): number {
  if (!raw) return 12;
  const count = Number.parseInt(raw, 10);
  if (!Number.isInteger(count) || count <= 0) return 12;
  return Math.min(count, 20);
}
