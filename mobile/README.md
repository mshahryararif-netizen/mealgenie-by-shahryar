# Meal Genie Android app

The Android app is a Capacitor shell that opens the live Meal Genie site and uses your logo as the home-screen icon.

## Build the APK (local)

1. Install [Android Studio](https://developer.android.com/studio) (includes Java + Android SDK).
2. Run:
   ```bash
   npm run mobile:sync
   npm run mobile:apk
   ```
3. APK output: `android/app/build/outputs/apk/debug/app-debug.apk`
4. Copy to the website download folder:
   ```bash
   copy android\app\build\outputs\apk\debug\app-debug.apk public\mealgenie.apk
   ```

## Build via GitHub Actions

1. Push this repo to GitHub.
2. Open **Actions → Build Android APK → Run workflow**.
3. Download the **mealgenie-android-apk** artifact.
4. Optionally copy `mealgenie.apk` into `public/` and redeploy the site so `/download` serves it.

## Install on a phone

1. Open **https://mealgenie.komyosys.ai/download** (or transfer the APK file).
2. Allow install from unknown sources if Android asks.
3. Install and open **Meal Genie** from the app drawer.

## Regenerate icons

Replace `mobile/resources/icon.png` and `mobile/resources/splash.png`, then run:

```bash
npm run mobile:icons
npm run mobile:sync
```
