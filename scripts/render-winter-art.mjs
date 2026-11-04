// Renders the campaign posters and link-preview cards with local Chrome, so they
// use the page's own fonts and correct Arabic shaping.
//   node scripts/render-winter-art.mjs [lang ...]
// CHROME_PATH overrides the browser location. Output: public/winter-smile/art/
import { spawn } from 'node:child_process';
import { mkdtemp, readFile, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const project = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const media = path.join(project, 'public/winter-smile/media');
const art = path.join(project, 'public/winter-smile/art');
const chromePath = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const allLangs = ['en', 'tr', 'ru', 'pt', 'es', 'it', 'fr', 'de', 'ar', 'pl'];
const langs = process.argv.length > 2 ? process.argv.slice(2) : allLangs;
const file = name => 'file://' + path.join(media, name).split('/').map(encodeURIComponent).join('/');
const esc = text => String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

const baseCss = lang => `
@font-face{font-family:Cormorant;font-weight:600;src:url(${file('cormorant-normal-latin.woff2')})}
@font-face{font-family:Cormorant;font-weight:600;src:url(${file('cormorant-normal-latin-ext.woff2')});unicode-range:U+100-2BA,U+1E00-1E9F}
@font-face{font-family:Cormorant;font-weight:600;src:url(${file('cormorant-normal-cyrillic.woff2')});unicode-range:U+400-45F,U+490-491,U+4B0-4B1,U+2116}
@font-face{font-family:Manrope;font-weight:200 800;src:url(${file('manrope-latin.woff2')})}
@font-face{font-family:Manrope;font-weight:200 800;src:url(${file('manrope-latin-ext.woff2')});unicode-range:U+100-2BA,U+1E00-1E9F}
@font-face{font-family:Manrope;font-weight:200 800;src:url(${file('manrope-cyrillic.woff2')});unicode-range:U+400-45F,U+490-491,U+4B0-4B1,U+2116}
@font-face{font-family:Noto;font-weight:100 900;src:url(${file('noto-arabic.woff2')})}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:100%;height:100%;overflow:hidden}
body{background:#234944;color:#fff;font-family:${lang === 'ar' ? 'Noto,Manrope' : 'Manrope'},sans-serif;display:flex;flex-direction:column;-webkit-font-smoothing:antialiased}
.logo{display:block;background:#fff;-webkit-mask:url(${file('ime-logo-forest.webp')}) center/contain no-repeat;mask:url(${file('ime-logo-forest.webp')}) center/contain no-repeat}
.serif{font-family:${lang === 'ar' ? 'Noto,Manrope' : 'Cormorant'},serif;font-weight:${lang === 'ar' ? 700 : 600}}
.tick{color:#edcaa4;font-weight:800}
`;

function poster(lang, t, variant) {
  const title = variant === 1 ? t.headline.split('\n')[0] : t.posterTitle2;
  const photos = variant === 1
    ? `<div class="photo model"><img src="${file('smile-editorial-2560.webp')}" alt=""><span>${esc(t.modelNote)}</span></div>`
    : `<div class="photo pair"><img src="${file('hotel-lobby.webp')}" alt=""><img src="${file('clinic-dental-unit-green.webp')}" alt=""><span>${esc(t.hotelCaption)}</span></div>`;
  const items = [t.band[0][0], t.posterFlight, t.band[2][0], t.band[3][0]];
  return `<!doctype html><html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}"><meta charset="utf-8"><style>${baseCss(lang)}
  body{padding:56px 60px 48px;gap:26px}
  .top{display:flex;align-items:center;justify-content:space-between;gap:24px}
  .logo{width:236px;height:58px}
  .season{font-size:27px;font-weight:700;color:#edcaa4;text-align:end}
  h1{font-size:${lang === 'ar' ? 58 : 76}px;line-height:${lang === 'ar' ? 1.25 : 1.04};letter-spacing:${lang === 'ar' ? 0 : '-.01em'};text-wrap:balance}
  .photo{position:relative;flex:1;min-height:0;border-radius:24px;overflow:hidden;background:#32605a}
  .photo img{width:100%;height:100%;object-fit:cover;display:block}
  .model img{object-position:52% 50%;transform:scale(1.75);transform-origin:53% 60%}
  .photo span{position:absolute;inset-inline:0;bottom:0;padding:12px 24px;background:#173b36d9;font-size:26px;font-weight:600}
  .pair{display:grid;grid-template-columns:1fr 1fr;gap:8px}
  .pricebox{display:flex;flex-direction:column;gap:6px}
  .per{font-size:27px;font-weight:600;color:#edcaa4}
  .deal{display:flex;align-items:center;gap:34px}
  .price{font-size:${lang === 'ar' ? 104 : 118}px;line-height:1;font-weight:800;letter-spacing:-.03em;color:#fff;white-space:nowrap}
  ul{list-style:none;display:grid;gap:7px;flex:1}
  li{display:flex;gap:12px;font-size:29px;line-height:1.25;font-weight:600}
  .bottom{display:flex;flex-direction:column;gap:10px;border-top:2px solid #ffffff33;padding-top:18px}
  .deposit{font-size:33px;font-weight:800;color:#edcaa4}
  .small{font-size:25px;line-height:1.35;color:#dce6e1}
  .url{font-size:26px;font-weight:700}
  </style><body>
  <div class="top"><span class="logo"></span><span class="season">${esc(t.season)}</span></div>
  <h1 class="serif">${esc(title)}</h1>
  ${photos}
  <div class="deal"><div class="pricebox"><div class="price">${esc(t.price)}</div><div class="per">${esc(t.perPatient)}</div></div><ul>${items.map(item => `<li><span class="tick">✓</span><span>${esc(item)}</span></li>`).join('')}</ul></div>
  <div class="bottom"><div class="deposit">${esc(t.depositBy)}</div><div class="small">${esc(t.posterSeparate)}</div><div class="url" dir="ltr">imeclinic.com${lang === 'en' ? '' : '/' + lang}/all-inclusive-smile</div></div>
  </body></html>`;
}

function preview(lang, t) {
  return `<!doctype html><html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}"><meta charset="utf-8"><style>${baseCss(lang)}
  body{flex-direction:row}
  .text{width:690px;flex:none;padding:44px 48px;display:flex;flex-direction:column;justify-content:space-between;gap:16px}
  .logo{width:190px;height:46px}
  h1{font-size:${lang === 'ar' ? 50 : 62}px;line-height:${lang === 'ar' ? 1.25 : 1.05}}
  .price{font-size:96px;line-height:1;font-weight:800;letter-spacing:-.03em;white-space:nowrap}
  .deposit{font-size:27px;font-weight:700;color:#edcaa4}
  .photo{flex:1;min-width:0}
  .photo img{width:100%;height:100%;object-fit:cover;display:block}
  </style><body>
  <div class="text"><span class="logo"></span><h1 class="serif">${esc(t.headline.split('\n')[0])}</h1><div class="price">${esc(t.price)}</div><div class="deposit">${esc(t.perPatient)} · ${esc(t.band[1][0])}<br>${esc(t.depositBy)}</div></div>
  <div class="photo"><img src="${file('clinic-dental-unit-green.webp')}" alt=""></div>
  </body></html>`;
}

const temp = await mkdtemp(path.join(tmpdir(), 'winter-art-'));
const chrome = spawn(chromePath, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files', '--remote-debugging-port=9451', '--remote-allow-origins=*', `--user-data-dir=${temp}/profile`, 'about:blank'], { stdio: 'ignore' });
try {
  let version;
  for (let i = 0; i < 40 && !version; i++) {
    version = await fetch('http://127.0.0.1:9451/json/version').catch(() => null);
    if (!version) await new Promise(r => setTimeout(r, 500));
  }
  if (!version) throw Error('Chrome did not start');
  const target = await (await fetch('http://127.0.0.1:9451/json/new?about:blank', { method: 'PUT' })).json();
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r, { once: true }));
  let id = 0; const pending = new Map();
  ws.addEventListener('message', e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m.result); pending.delete(m.id); } });
  const send = (method, params = {}) => new Promise(r => { const n = ++id; pending.set(n, r); ws.send(JSON.stringify({ id: n, method, params })); });
  await send('Page.enable'); await send('Runtime.enable');
  async function render(html, width, height, out) {
    const page = path.join(temp, 'page.html');
    await writeFile(page, html);
    await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
    await send('Page.navigate', { url: 'file://' + page.split('/').map(encodeURIComponent).join('/') });
    await new Promise(r => setTimeout(r, 400));
    await send('Runtime.evaluate', { expression: 'document.fonts.ready.then(()=>Promise.all([...document.images].map(i=>i.decode().catch(()=>{}))))', awaitPromise: true });
    const check = await send('Runtime.evaluate', { expression: '[document.documentElement.scrollHeight,document.body.scrollHeight,document.documentElement.scrollWidth]', returnByValue: true });
    const overflow = (await send('Runtime.evaluate', { expression: `[...document.querySelectorAll('h1,li,.small,.deposit,.url,.season,.price,.per,.photo span')].filter(e=>{const r=e.getBoundingClientRect();return r.right>innerWidth+1||r.left<-1||r.bottom>innerHeight+1}).length`, returnByValue: true })).result.value;
    const photo = (await send('Runtime.evaluate', { expression: `(document.querySelector('.photo')||{}).offsetHeight`, returnByValue: true })).result.value;
    const { data } = await send('Page.captureScreenshot', { format: 'jpeg', quality: 86, clip: { x: 0, y: 0, width, height, scale: 1 } });
    await writeFile(out, Buffer.from(data, 'base64'));
    console.log(path.basename(out), 'overflow', overflow, 'photoHeight', photo, 'kb', Math.round(Buffer.from(data, 'base64').length / 1024), check.result.value.join('/'));
  }
  for (const lang of langs) {
    const t = JSON.parse(await readFile(path.join(project, `src/data/winter-i18n/${lang}.json`), 'utf8'));
    await render(poster(lang, t, 1), 1080, 1350, path.join(art, `winter-${lang}-1.jpg`));
    await render(poster(lang, t, 2), 1080, 1350, path.join(art, `winter-${lang}-2.jpg`));
    await render(preview(lang, t), 1200, 630, path.join(art, `og-${lang}.jpg`));
  }
  ws.close();
} finally {
  chrome.kill();
  await new Promise(r => setTimeout(r, 300));
  await rm(temp, { recursive: true, force: true }).catch(() => {});
}
process.exit(0);
