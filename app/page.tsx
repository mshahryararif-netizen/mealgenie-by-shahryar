import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import MealGenieClient from '@/components/MealGenieClient';
import { syncUserFromClerk } from '@/lib/db/sync-clerk-user';
import { isClerkFullyConfigured } from '@/lib/clerk-enabled';

export default async function Home() {
  if (isClerkFullyConfigured()) {
    const { userId } = await auth();
    if (!userId) {
      redirect('/sign-in');
    }

    const clerkUser = await currentUser();
    if (clerkUser) {
      try {
        await syncUserFromClerk({
          id: clerkUser.id,
          emailAddresses: clerkUser.emailAddresses.map((entry) => ({
            emailAddress: entry.emailAddress,
          })),
          firstName: clerkUser.firstName,
          lastName: clerkUser.lastName,
          imageUrl: clerkUser.imageUrl,
        });
      } catch {
        // App still loads if DB sync fails.
      }
    }
  }

  return <MealGenieClient />;
}
