import { mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

const docs = join(root, 'docs');

await mkdir(dist, { recursive: true });
await mkdir(docs, { recursive: true });
await copyFile(join(root, 'index.html'), join(dist, 'index.html'));
await copyFile(join(root, 'index.html'), join(docs, 'index.html'));

console.log('Build OK: dist/index.html, docs/index.html');
