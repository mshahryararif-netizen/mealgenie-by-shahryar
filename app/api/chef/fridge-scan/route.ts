import { NextResponse } from 'next/server';
import {
  extractJsonObject,
  FRIDGE_SCAN_SYSTEM_PROMPT,
  parseFridgeAiPayload,
} from '@/lib/chef/fridge-parser';
import type { FridgeScanResponse } from '@/lib/chef/fridge-types';
import { badRequest, tooManyRequests } from '@/lib/server/errors';
import { callOpenRouter } from '@/lib/server/openrouter';
import { isRateLimited } from '@/lib/server/rate-limit';

const MAX_DATA_URL_LENGTH = 5_500_000;
const VISION_MODEL = 'google/gemini-2.0-flash-001';

function isImageDataUrl(value: string): boolean {
  return /^data:image\/(jpeg|jpg|png|webp);base64,/i.test(value);
}

export async function POST(request: Request) {
  if (isRateLimited(request)) {
    return tooManyRequests();
  }

  let body: { imageDataUrl?: unknown };
  try {
    body = (await request.json()) as { imageDataUrl?: unknown };
  } catch {
    return badRequest('Invalid JSON body.');
  }

  const imageDataUrl = typeof body.imageDataUrl === 'string' ? body.imageDataUrl.trim() : '';
  if (!imageDataUrl || !isImageDataUrl(imageDataUrl)) {
    return badRequest('A JPEG/PNG/WebP image data URL is required.');
  }
  if (imageDataUrl.length > MAX_DATA_URL_LENGTH) {
    return badRequest('Image is too large. Try a clearer, smaller photo.');
  }

  const result = await callOpenRouter(request, {
    model: VISION_MODEL,
    temperature: 0.2,
    max_tokens: 1200,
    messages: [
      { role: 'system', content: FRIDGE_SCAN_SYSTEM_PROMPT },
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'Detect edible ingredients in this fridge/leftover photo. Return JSON only.',
          },
          {
            type: 'image_url',
            image_url: { url: imageDataUrl },
          },
        ],
      },
    ],
  });

  if (!result.ok) {
    const payload: FridgeScanResponse = {
      ok: false,
      allowManual: true,
      code: result.reason === 'missing_key' ? 'missing_key' : result.reason === 'timeout' ? 'timeout' : 'upstream',
      error:
        result.reason === 'missing_key'
          ? 'Vision AI is not configured. Add ingredients manually for now.'
          : result.reason === 'timeout'
            ? 'Scan timed out. Try again or enter ingredients manually.'
            : 'I couldn’t read that photo. Enter ingredients manually or try another shot.',
    };
    return NextResponse.json(payload, { status: 200 });
  }

  try {
    const content = result.data.choices?.[0]?.message?.content ?? '';
    const parsed = parseFridgeAiPayload(extractJsonObject(content));
    if (!parsed) {
      const payload: FridgeScanResponse = {
        ok: false,
        allowManual: true,
        code: 'empty',
        error: 'No ingredients came back clearly. Enter them manually or retake the photo.',
      };
      return NextResponse.json(payload);
    }

    if (parsed.imageQuality === 'blurry' && parsed.ingredients.length === 0) {
      const payload: FridgeScanResponse = {
        ok: false,
        allowManual: true,
        code: 'blurry',
        error:
          parsed.qualityMessage ||
          'That photo looks too blurry. Retake with better light, or add ingredients manually.',
      };
      return NextResponse.json(payload);
    }

    const payload: FridgeScanResponse = {
      ok: true,
      source: 'ai',
      result: {
        ...parsed,
        chefNote:
          parsed.chefNote ||
          (parsed.imageQuality === 'blurry'
            ? 'Photo is a bit soft — double-check these chips before cooking.'
            : 'Here’s what I spotted. Tweak the chips, then I’ll cook from leftovers.'),
      },
    };
    return NextResponse.json(payload);
  } catch {
    const payload: FridgeScanResponse = {
      ok: false,
      allowManual: true,
      code: 'upstream',
      error: 'I had trouble parsing the scan. Enter ingredients manually or try again.',
    };
    return NextResponse.json(payload);
  }
}
