import { auth, currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { syncUserFromClerk } from '@/lib/db/sync-clerk-user';
import { isClerkFullyConfigured } from '@/lib/clerk-enabled';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

async function resolveDbUser() {
  if (!isClerkFullyConfigured()) return null;
  const { userId } = await auth();
  if (!userId) return null;
  const clerkUser = await currentUser();
  if (!clerkUser) return null;
  return syncUserFromClerk({
    id: clerkUser.id,
    emailAddresses: clerkUser.emailAddresses.map((e) => ({ emailAddress: e.emailAddress })),
    firstName: clerkUser.firstName,
    lastName: clerkUser.lastName,
    imageUrl: clerkUser.imageUrl,
  });
}

/** GET — pull synced chef preferences / feature bags from PostgreSQL. */
export async function GET() {
  try {
    const user = await resolveDbUser();
    if (!user) {
      return NextResponse.json({ ok: false, reason: 'auth_required' }, { status: 401 });
    }
    const pref = await prisma.userPreference.findUnique({ where: { userId: user.id } });
    return NextResponse.json({
      ok: true,
      payload: (pref?.payload as Record<string, unknown>) ?? null,
      updatedAt: pref?.updatedAt ?? null,
    });
  } catch (error) {
    console.error('chef sync GET', error);
    return NextResponse.json({ ok: false, error: 'sync_failed' }, { status: 500 });
  }
}

/** POST — push localStorage feature bags into UserPreference.payload (Prisma + Postgres). */
export async function POST(request: Request) {
  try {
    const user = await resolveDbUser();
    if (!user) {
      return NextResponse.json({ ok: false, reason: 'auth_required' }, { status: 401 });
    }
    const body = await request.json();
    const payload = body?.payload;
    if (!payload || typeof payload !== 'object') {
      return NextResponse.json({ ok: false, error: 'invalid_payload' }, { status: 400 });
    }

    const pref = await prisma.userPreference.upsert({
      where: { userId: user.id },
      create: {
        userId: user.id,
        payload,
      },
      update: {
        payload,
      },
    });

    return NextResponse.json({ ok: true, updatedAt: pref.updatedAt });
  } catch (error) {
    console.error('chef sync POST', error);
    return NextResponse.json({ ok: false, error: 'sync_failed' }, { status: 500 });
  }
}
