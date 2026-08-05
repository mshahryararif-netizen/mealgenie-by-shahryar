/** Versioned localStorage helpers — easy to swap for Prisma later. */
export type VersionedDoc<T> = {
  version: number;
  updatedAt: string;
  data: T;
};

export function loadDoc<T>(key: string, version: number, fallback: T): VersionedDoc<T> {
  if (typeof window === 'undefined') {
    return { version, updatedAt: new Date().toISOString(), data: fallback };
  }
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return { version, updatedAt: new Date().toISOString(), data: fallback };
    const parsed = JSON.parse(raw) as VersionedDoc<T>;
    if (!parsed || typeof parsed !== 'object') {
      return { version, updatedAt: new Date().toISOString(), data: fallback };
    }
    return {
      version,
      updatedAt: parsed.updatedAt || new Date().toISOString(),
      data: (parsed.data ?? fallback) as T,
    };
  } catch {
    return { version, updatedAt: new Date().toISOString(), data: fallback };
  }
}

export function saveDoc<T>(key: string, version: number, data: T): VersionedDoc<T> {
  const doc: VersionedDoc<T> = {
    version,
    updatedAt: new Date().toISOString(),
    data,
  };
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(key, JSON.stringify(doc));
    } catch {
      // ignore quota
    }
  }
  return doc;
}

export function uid(prefix = 'id'): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export function printElementById(id: string, title: string) {
  const node = document.getElementById(id);
  if (!node) return;
  const win = window.open('', '_blank', 'noopener,noreferrer,width=900,height=700');
  if (!win) return;
  win.document.write(`<!doctype html><html><head><title>${title}</title>
    <style>
      body{font-family:system-ui,sans-serif;padding:24px;color:#1a211c}
      h1,h2,h3{margin:0 0 8px} table{width:100%;border-collapse:collapse}
      td,th{border:1px solid #ddd;padding:8px;text-align:left}
      .muted{color:#666} @media print{button{display:none}}
    </style></head><body>${node.innerHTML}</body></html>`);
  win.document.close();
  win.focus();
  win.print();
}

export function copyText(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text);
  return Promise.reject(new Error('Clipboard unavailable'));
}
