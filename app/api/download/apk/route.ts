import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  const apkPath = join(process.cwd(), 'public', 'mealgenie.apk');

  if (!existsSync(apkPath)) {
    return NextResponse.json(
      { error: 'Android app is not available yet. Please try again later.' },
      { status: 404 },
    );
  }

  const file = await readFile(apkPath);

  return new NextResponse(file, {
    headers: {
      'Content-Type': 'application/vnd.android.package-archive',
      'Content-Disposition': 'attachment; filename="mealgenie.apk"',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
