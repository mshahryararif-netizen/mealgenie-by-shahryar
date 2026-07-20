import { NextResponse } from 'next/server';
import { isOpenRouterConfigured, isSpoonacularConfigured } from '@/lib/server/env';

export async function GET() {
  return NextResponse.json({
    openrouter: isOpenRouterConfigured(),
    spoonacular: isSpoonacularConfigured(),
  });
}
