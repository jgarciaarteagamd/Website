// Renders the social sharing images (public/og.jpg and public/og-en.jpg, 1200×630)
// in the same style as the patient site's banners (atlas-ent/scripts/make-banners.mjs).
// Usage: npm run og   (needs Playwright with a Chromium build and `npm install` for the fonts)
import { writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { markSvg, markWidth, markHeight, palettes } from '../src/data/mark.js';

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  ({ chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright'));
}

const root = resolve(import.meta.dirname, '..');
const file = (p) => pathToFileURL(resolve(root, p)).href;
const font = (pkg, name) => file(`node_modules/@fontsource/${pkg}/files/${name}.woff2`);
const head = file('src/assets/holo-head.webp');

const text = {
  es: {
    file: 'og.jpg',
    title: 'Otorrinolaringólogo<br>en Huelva',
    name: 'Dr. Juan García Arteaga',
    where: 'Instituto Otosur · Hospital Quirónsalud Huelva',
    phone: 'Cita: 959 10 54 47',
  },
  en: {
    file: 'og-en.jpg',
    title: 'ENT specialist<br>in Huelva, Spain',
    name: 'Dr. Juan García Arteaga',
    where: 'Instituto Otosur · Hospital Quirónsalud Huelva',
    phone: 'Appointments: +34 959 10 54 47',
  },
};

const css = `
@font-face { font-family: Oxanium; font-weight: 700; src: url(${font('oxanium', 'oxanium-latin-700-normal')}); }
@font-face { font-family: Oxanium; font-weight: 500; src: url(${font('oxanium', 'oxanium-latin-500-normal')}); }
@font-face { font-family: 'Instrument Sans'; font-weight: 400; src: url(${font('instrument-sans', 'instrument-sans-latin-400-normal')}); }
@font-face { font-family: 'Instrument Sans'; font-weight: 500; src: url(${font('instrument-sans', 'instrument-sans-latin-500-normal')}); }
:root { --void:#03070c; --holo:#74f1ff; --holo-line:rgba(116,241,255,.16); --flare:#ffc46b; --ink:#e2f5f8; --ink-soft:#94b6be; }
* { box-sizing: border-box; margin: 0; }
html, body { width: 1200px; height: 630px; overflow: hidden; background: var(--void); }
.stage { position: relative; width: 100%; height: 100%; overflow: hidden;
  background:
    radial-gradient(ellipse 38% 70% at 80% 55%, rgba(116,241,255,.13), transparent 70%),
    linear-gradient(180deg, #071019, var(--void) 70%); }
.grid { position: absolute; inset: 0;
  background-image: linear-gradient(var(--holo-line) 1px, transparent 1px), linear-gradient(90deg, var(--holo-line) 1px, transparent 1px);
  background-size: 42px 42px; opacity: .35;
  -webkit-mask-image: radial-gradient(ellipse 55% 80% at 80% 50%, #000, transparent 75%); }
.head { position: absolute; height: 700px; right: 10px; top: -20px; mix-blend-mode: screen;
  -webkit-mask-image: radial-gradient(ellipse 50% 52% at 50% 46%, #000 62%, transparent 100%); }
.text { position: absolute; left: 72px; top: 92px; width: 700px; font-family: 'Instrument Sans', sans-serif; color: var(--ink); }
.title { font-family: Oxanium, sans-serif; font-weight: 700; font-size: 68px; line-height: 1.04; color: #fff; margin-top: 30px;
  text-shadow: 0 0 .5em rgba(116,241,255,.3); }
.name { font-family: Oxanium, sans-serif; font-weight: 500; font-size: 34px; color: var(--holo); margin-top: 22px; }
.rule { display: block; width: 72px; height: 3px; background: var(--flare); margin-top: 26px; }
.where { font-size: 23px; color: var(--ink); margin-top: 24px; }
.phone { font-family: Oxanium, sans-serif; font-weight: 500; font-size: 24px; color: var(--flare); margin-top: 10px; letter-spacing: .02em; }
`;

const mono = `<svg width="104" height="${(104 * markHeight) / markWidth}" viewBox="0 0 ${markWidth} ${markHeight}">${markSvg(palettes.dark)}</svg>`;

const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
// Loaded from a file so the page may read the local fonts and image.
const tmp = mkdtempSync(resolve(tmpdir(), 'og-'));
const html = resolve(tmp, 'og.html');
for (const [lang, t] of Object.entries(text)) {
  writeFileSync(
    html,
    `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><style>${css}</style></head>
     <body><div class="stage"><div class="grid"></div><img class="head" src="${head}">
     <div class="text">${mono}<p class="title">${t.title}</p><p class="name">${t.name}</p><span class="rule"></span>
     <p class="where">${t.where}</p><p class="phone">${t.phone}</p></div></div></body></html>`,
  );
  await page.goto(pathToFileURL(html).href, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const path = resolve(root, 'public', t.file);
  await page.screenshot({ path, type: 'jpeg', quality: 86 });
  console.log(path);
}
await browser.close();
rmSync(tmp, { recursive: true });
