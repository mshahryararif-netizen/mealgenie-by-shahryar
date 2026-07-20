import { NextResponse } from 'next/server';
import { badRequest, serviceUnavailable, tooManyRequests, upstreamFailure } from '@/lib/server/errors';
import { callOpenRouter } from '@/lib/server/openrouter';
import { isRateLimited } from '@/lib/server/rate-limit';
import { validateChatCompletionRequest } from '@/lib/server/validation';

export async function POST(request: Request) {
  if (isRateLimited(request)) {
    return tooManyRequests();
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return badRequest('Invalid JSON body.');
  }

  const validation = validateChatCompletionRequest(body);
  if (!validation.ok) {
    return badRequest(validation.error);
  }

  const result = await callOpenRouter(request, validation.data);

  if (!result.ok) {
    if (result.reason === 'missing_key') {
      return serviceUnavailable('AI assistant');
    }
    if (result.reason === 'timeout') {
      return upstreamFailure();
    }
    return upstreamFailure();
  }

  return NextResponse.json({
    choices: result.data.choices?.map((choice) => ({
      message: {
        content: choice.message?.content ?? '',
      },
    })) ?? [],
  });
}
