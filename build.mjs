import { mkdirSync, writeFileSync, copyFileSync, readFileSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { page } from './src/layout.mjs';
import { homeBody } from './src/pages/home.mjs';
import { catalogBody, servicesBody, guidesBody, galleryBody } from './src/pages/sub.mjs';
import { foSvg, coverSvg, darkCoverSvg, gallerySvg } from './src/svg.mjs';
import { ERES, NETWORKS } from './src/data.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, 'dist');
if (existsSync(out)) rmSync(out, { recursive: true, force: true });
mkdirSync(join(out, 'assets', 'fonts'), { recursive: true });
mkdirSync(join(out, 'home'), { recursive: true });

const fontDir = join(root, 'node_modules', '@fontsource', 'plus-jakarta-sans', 'files');
for (const w of [400, 500, 600, 700, 800]) {
  copyFileSync(join(fontDir, `plus-jakarta-sans-latin-${w}-normal.woff2`), join(out, 'assets', 'fonts', `pjs-${w}.woff2`));
}
for (const w of [400, 500]) {
  const f = join(fontDir, `plus-jakarta-sans-latin-${w}-italic.woff2`);
  if (existsSync(f)) copyFileSync(f, join(out, 'assets', 'fonts', `pjs-${w}i.woff2`));
}

writeFileSync(join(out, 'assets', 'style.css'), readFileSync(join(root, 'src', 'style.css')));
writeFileSync(join(out, 'assets', 'main.js'), readFileSync(join(root, 'src', 'main.js')));

mkdirSync(join(out, 'assets', 'logos'), { recursive: true });
mkdirSync(join(out, 'assets', 'gallery'), { recursive: true });
writeFileSync(join(out, 'assets', 'cover.svg'), coverSvg());
writeFileSync(join(out, 'assets', 'cover-dark.svg'), darkCoverSvg());
ERES.forEach(([h], i) => writeFileSync(join(out, 'assets', 'logos', `e${i}.svg`), foSvg(109, 41, h)));
for (const k of Object.keys(NETWORKS)) NETWORKS[k].forEach((h, i) => writeFileSync(join(out, 'assets', 'logos', `${k}${i}.svg`), foSvg(115, 36, h)));
for (const v of ['hero', 'intro', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'trophy', 'cert']) writeFileSync(join(out, 'assets', 'gallery', `${v}.svg`), gallerySvg(v));

const pages = [
  ['index.html', { title: 'Open Library - University', active: '', body: homeBody() }],
  ['home/catalog.html', { title: 'Catalog - Open Library', active: 'catalog', body: catalogBody() }],
  ['home/servicesandfacilities.html', { title: 'Services & Facilities - Open Library', active: 'services', body: servicesBody() }],
  ['home/infografis.html', { title: 'Library Guides - Open Library', active: 'guides', body: guidesBody() }],
  ['home/gallery.html', { title: 'Gallery - Open Library', active: 'gallery', body: galleryBody() }],
];
for (const [file, opts] of pages) {
  writeFileSync(join(out, file), page(opts));
  console.log('wrote', file);
}
