// Checks one language file (or all) against the English master:
//   node scripts/check-winter-i18n.mjs [lang]
// Same keys and array lengths, same numbers and placeholders in each string,
// no text left in English, no terms the campaign does not support.
import { readFileSync } from 'node:fs';
const dir = new URL('../src/data/winter-i18n/', import.meta.url);
const load = lang => JSON.parse(readFileSync(new URL(`${lang}.json`, dir), 'utf8'));
const master = load('en');
const all = ['tr', 'ru', 'pt', 'es', 'it', 'fr', 'de', 'ar', 'pl'];
const langs = process.argv[2] ? [process.argv[2]] : all;
const arabicDigits = '٠١٢٣٤٥٦٧٨٩';
// Numbers are compared after removing thousands separators, so €3,000 and 3 000 € match.
const numbers = text => [...String(text).normalize('NFKC').replace(/[٠-٩]/g, d => arabicDigits.indexOf(d))
  .replace(/(\d)[.,\s  ٬](?=\d{3}\b)/g, '$1').matchAll(/\d+/g)].map(m => m[0]).sort();
const tokens = text => [...String(text).matchAll(/\{[a-z]+\}/g)].map(m => m[0]).sort();
const keepEnglish = new Set(['IME Clinic', 'WhatsApp', 'Pullman', 'Hotel', 'Menu', 'Video', 'Transfer', 'Transfers', 'Clinic', 'Audio', 'Copy', 'Hotel & Convention Centre']);
const forbidden = /\b(VIP|JCI[- ]accredited|guarantee[ds]?|free of charge|best price|last chance|limited places|interpreter)\b/i;
let failed = 0;
const fail = (lang, path, message) => { failed++; console.log(`${lang} ${path}: ${message}`); };
function compare(lang, en, value, path) {
  if (Array.isArray(en)) {
    if (!Array.isArray(value) || value.length !== en.length) return fail(lang, path, `needs ${en.length} items`);
    en.forEach((item, i) => compare(lang, item, value[i], `${path}[${i}]`));
  } else if (en && typeof en === 'object') {
    if (!value || typeof value !== 'object') return fail(lang, path, 'missing object');
    for (const key of Object.keys(en)) compare(lang, en[key], value[key], path ? `${path}.${key}` : key);
    for (const key of Object.keys(value)) if (!(key in en)) fail(lang, `${path}.${key}`, 'extra key');
  } else {
    if (typeof value !== 'string' || !value.trim()) return fail(lang, path, 'empty or missing');
    if (numbers(en).join() !== numbers(value).join()) fail(lang, path, `numbers differ: ${numbers(en)} vs ${numbers(value)}`);
    if (tokens(en).join() !== tokens(value).join()) fail(lang, path, 'placeholder {link} differs');
    if (lang !== 'en' && value === en && /[a-z]{4}/i.test(en) && !keepEnglish.has(en) && !path.startsWith('assetLabels.hospital-document')) fail(lang, path, 'still identical to English');
    if (forbidden.test(value)) fail(lang, path, 'unsupported term');
  }
}
for (const lang of langs) {
  const data = load(lang);
  compare(lang, master, data, '');
  // The bracketed placeholders in the messages must match the labels the page replaces.
  const joined = data.scripts.join(' ');
  if (!joined.includes(data.tokenName)) fail(lang, 'scripts', 'tokenName not used');
  if (!joined.includes(data.tokenAdvisor)) fail(lang, 'scripts', 'tokenAdvisor not used');
  if (!/\n/.test(data.headline)) fail(lang, 'headline', 'needs two lines separated by \\n');
  if (!/\n/.test(data.faqTitle)) fail(lang, 'faqTitle', 'needs two lines separated by \\n');
}
if (failed) { console.log(`${failed} problem(s)`); process.exit(1); }
console.log(`OK: ${langs.join(', ')}`);
