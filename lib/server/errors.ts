import { NextResponse } from 'next/server';

type ErrorBody = {
  error: string;
  code?: string;
};

export function jsonError(
  message: string,
  status: number,
  code?: string,
): NextResponse<ErrorBody> {
  return NextResponse.json({ error: message, ...(code ? { code } : {}) }, { status });
}

export function serviceUnavailable(service: string): NextResponse<ErrorBody> {
  return jsonError(
    `${service} is not available right now. Please try again later.`,
    503,
    'SERVICE_UNAVAILABLE',
  );
}

export function badRequest(message: string): NextResponse<ErrorBody> {
  return jsonError(message, 400, 'BAD_REQUEST');
}

export function tooManyRequests(): NextResponse<ErrorBody> {
  return jsonError('Too many requests. Please wait a moment and try again.', 429, 'RATE_LIMITED');
}

export function upstreamFailure(): NextResponse<ErrorBody> {
  return jsonError('Unable to complete your request right now. Please try again.', 502, 'UPSTREAM_ERROR');
}
