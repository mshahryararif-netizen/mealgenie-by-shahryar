import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    '/api/download/apk': ['./public/mealgenie.apk'],
  },
};

export default nextConfig;
