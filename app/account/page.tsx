import dynamic from 'next/dynamic';
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { syncUserFromClerk } from '@/lib/db/sync-clerk-user';
import { isClerkFullyConfigured } from '@/lib/clerk-enabled';

const AccountPanel = dynamic(
  () => import('@/components/auth/account-panel').then((mod) => mod.AccountPanel),
  { loading: () => null },
);

export default async function AccountPage() {
  if (!isClerkFullyConfigured()) {
    redirect('/');
  }

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
      // Account page still works if sync fails; Clerk remains the auth source of truth.
    }
  }

  return <AccountPanel />;
}
