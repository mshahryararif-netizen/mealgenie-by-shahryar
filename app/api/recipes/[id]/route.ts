import { NextResponse } from 'next/server';
import { badRequest, serviceUnavailable, tooManyRequests, upstreamFailure } from '@/lib/server/errors';
import { isRateLimited } from '@/lib/server/rate-limit';
import { getRecipeInformation } from '@/lib/server/spoonacular';
import { parseRecipeId } from '@/lib/server/validation';

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(request: Request, context: RouteContext) {
  if (isRateLimited(request)) {
    return tooManyRequests();
  }

  const { id: rawId } = await context.params;
  const idResult = parseRecipeId(rawId);

  if (!idResult.ok) {
    return badRequest(idResult.error);
  }

  const { searchParams } = new URL(request.url);
  const includeNutrition = searchParams.get('includeNutrition') !== 'false';

  const result = await getRecipeInformation(idResult.id, includeNutrition);

  if (!result.ok) {
    if (result.reason === 'missing_key') {
      return serviceUnavailable('Recipe details');
    }
    if (result.reason === 'not_found') {
      return badRequest('Recipe not found.');
    }
    return upstreamFailure();
  }

  return NextResponse.json(result.data);
}
