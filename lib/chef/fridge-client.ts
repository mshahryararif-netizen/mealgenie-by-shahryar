'use client';

/**
 * Client helper: compress fridge photos before sending to the vision API.
 */
export async function fileToCompressedDataUrl(
  file: File,
  options?: { maxEdge?: number; quality?: number },
): Promise<string> {
  const maxEdge = options?.maxEdge ?? 1280;
  const quality = options?.quality ?? 0.72;

  if (!file.type.startsWith('image/')) {
    throw new Error('Please choose an image file.');
  }

  if (file.size > 12 * 1024 * 1024) {
    throw new Error('Image is too large (max 12MB).');
  }

  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, maxEdge / Math.max(bitmap.width, bitmap.height));
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    bitmap.close();
    throw new Error('Could not process that image.');
  }

  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  const dataUrl = canvas.toDataURL('image/jpeg', quality);
  if (dataUrl.length > 5_000_000) {
    return canvas.toDataURL('image/jpeg', 0.55);
  }
  return dataUrl;
}

export async function scanFridgeImage(imageDataUrl: string) {
  const response = await fetch('/api/chef/fridge-scan', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ imageDataUrl }),
  });

  if (!response.ok) {
    throw new Error('Scan request failed.');
  }

  return response.json();
}
