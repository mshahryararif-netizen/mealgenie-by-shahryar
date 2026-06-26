import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.$queryRaw`SELECT 1`;
  console.log('Database connection OK');
}

main()
  .catch((error: unknown) => {
    console.error('Database connection failed');
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
