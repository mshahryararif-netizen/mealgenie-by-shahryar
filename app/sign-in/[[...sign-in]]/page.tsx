import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { AuthShell } from '@/components/auth/auth-shell';
import { isClerkFullyConfigured } from '@/lib/clerk-enabled';

const SignInForm = dynamic(
  () => import('@/components/auth/sign-in-form').then((mod) => mod.SignInForm),
  { loading: () => null },
);

export default function SignInPage() {
  if (!isClerkFullyConfigured()) {
    redirect('/');
  }

  return (
    <AuthShell
      title="Sign in"
      subtitle="Sign in to use Meal Genie"
      footerHref="/sign-up"
      footerLabel="Don't have an account? Sign up"
    >
      <SignInForm />
    </AuthShell>
  );
}
