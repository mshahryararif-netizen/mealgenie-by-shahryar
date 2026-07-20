import Link from 'next/link';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import styles from './download.module.css';

export const metadata = {
  title: 'Download Meal Genie for Android',
  description: 'Install the Meal Genie Android app on your phone.',
};

export default function DownloadPage() {
  const apkReady = existsSync(join(process.cwd(), 'public', 'mealgenie.apk'));

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <img
          src="/mealgenie-logo.png"
          alt="Meal Genie logo"
          className={styles.logo}
          width={160}
          height={160}
        />
        <h1 className={styles.title}>Meal Genie for Android</h1>
        <p className={styles.tagline}>Cook smart. Eat happy.</p>

        {apkReady ? (
          <a className={styles.downloadBtn} href="/api/download/apk">
            Download APK
          </a>
        ) : (
          <p className={styles.pending}>
            APK is being prepared. Run the GitHub Action <strong>Build Android APK</strong> or build
            locally with Android Studio, then place the file at{' '}
            <code>public/mealgenie.apk</code>.
          </p>
        )}

        <section className={styles.steps}>
          <h2>Install on your phone</h2>
          <ol>
            <li>Download the APK file on your Android device.</li>
            <li>Open the file and allow install from this source if prompted.</li>
            <li>Tap Install, then open Meal Genie from your home screen.</li>
          </ol>
          <p className={styles.note}>
            Direct install — not from the Play Store. The app opens Meal Genie in a native shell with your logo on the home screen. Internet required.
          </p>
        </section>

        <Link className={styles.backLink} href="/">
          ← Back to Meal Genie
        </Link>
      </div>
    </main>
  );
}
