import { config } from 'dotenv';
import { resolve } from 'node:path';
import { PrismaClient } from '@prisma/client';

config({ path: resolve(process.cwd(), '.env.local'), override: true });

if (!process.env.DATABASE_URL?.includes('neon')) {
  console.error('DATABASE_URL is not set to Neon (check .env.local)');
  process.exit(1);
}

const prisma = new PrismaClient();

async function main() {
  await prisma.$queryRaw`SELECT 1`;
  console.log('Database connection OK');
}

main()
  .catch((error) => {
    console.error('Database connection failed');
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
