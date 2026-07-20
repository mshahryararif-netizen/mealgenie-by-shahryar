import type { CapacitorConfig } from '@capacitor/cli';
import { SITE_URL } from './lib/site';

const config: CapacitorConfig = {
  appId: 'com.mealgenie.app',
  appName: 'Meal Genie',
  webDir: 'mobile/www',
  server: {
    url: SITE_URL,
    cleartext: false,
    androidScheme: 'https',
  },
  android: {
    allowMixedContent: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#000000',
      showSpinner: false,
    },
  },
};

export default config;
