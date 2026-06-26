import { prisma } from '@/lib/prisma';

type ClerkUserLike = {
  id: string;
  emailAddresses: Array<{ emailAddress: string }>;
  firstName: string | null;
  lastName: string | null;
  imageUrl: string;
};

/**
 * Upsert a User row from Clerk identity data.
 * Call from server actions/routes after auth — does not replace Clerk auth.
 */
export async function syncUserFromClerk(clerkUser: ClerkUserLike) {
  const email = clerkUser.emailAddresses[0]?.emailAddress;
  if (!email) {
    throw new Error('Clerk user has no primary email address');
  }

  return prisma.user.upsert({
    where: { clerkUserId: clerkUser.id },
    create: {
      clerkUserId: clerkUser.id,
      email,
      firstName: clerkUser.firstName,
      lastName: clerkUser.lastName,
      imageUrl: clerkUser.imageUrl,
    },
    update: {
      email,
      firstName: clerkUser.firstName,
      lastName: clerkUser.lastName,
      imageUrl: clerkUser.imageUrl,
    },
  });
}

/**
 * Resolve DB user by Clerk user id, or null if not synced yet.
 */
export async function getUserByClerkId(clerkUserId: string) {
  return prisma.user.findUnique({
    where: { clerkUserId },
  });
}
