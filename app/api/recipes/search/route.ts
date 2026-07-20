import { NextResponse } from 'next/server';
import { badRequest, serviceUnavailable, tooManyRequests, upstreamFailure } from '@/lib/server/errors';
import { isRateLimited } from '@/lib/server/rate-limit';
import { searchRecipesByIngredients } from '@/lib/server/spoonacular';
import { parseIngredientsParam, parseResultCount } from '@/lib/server/validation';

export async function GET(request: Request) {
  if (isRateLimited(request)) {
    return tooManyRequests();
  }

  const { searchParams } = new URL(request.url);
  const ingredientsResult = parseIngredientsParam(searchParams.get('ingredients'));

  if (!ingredientsResult.ok) {
    return badRequest(ingredientsResult.error);
  }

  const number = parseResultCount(searchParams.get('number'));
  const result = await searchRecipesByIngredients(ingredientsResult.ingredients, number);

  if (!result.ok) {
    if (result.reason === 'missing_key') {
      return serviceUnavailable('Recipe search');
    }
    return upstreamFailure();
  }

  return NextResponse.json(result.data);
}
