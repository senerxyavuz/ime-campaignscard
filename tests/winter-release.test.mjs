import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {build} from 'esbuild';
import {smilePath,smileOrigin} from '../src/data/smile-paths.mjs';
const result=await build({stdin:{contents:"export {smileText} from './src/data/winter-i18n/index.ts';export {smileCopy} from './src/data/winter-locales.ts';export {smileTerms} from './src/data/winter-smile.ts';export {dental} from './src/data/campaigns/dental.ts';",resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
const {smileText,smileCopy,smileTerms,dental}=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
const media=JSON.parse(await readFile('src/data/winter-media.json','utf8'));

test('all ten languages have complete patient and advisor content from the same offer',()=>{
 assert.deepEqual(Object.keys(smileText).sort(),['ar','de','en','es','fr','it','pl','pt','ru','tr']);
 assert.deepEqual(Object.keys(smileCopy).sort(),['en','es','it','ru','tr']);
 for(const [lang,c] of Object.entries(smileText)){
  assert.deepEqual(Object.keys(c).sort(),Object.keys(smileText.en).sort(),lang);
  for(const [key,value] of Object.entries(c)){
   assert.ok(typeof value==='object'?Object.keys(value).length:value.length,`${lang}.${key} empty`);
   if(Array.isArray(value))assert.equal(value.length,smileText.en[key].length,`${lang}.${key} structure`);
  }
  assert.ok(c.deadline.includes('2026'));
  assert.ok(c.scripts[0].includes('2026')&&(lang==='fr'?c.scripts[0].includes('première arrivée physique'):c.scripts[0].includes('300')),`${lang} incomplete first reply`);
  assert.ok(c.scripts.join(' ').includes('{link}'),`${lang} messages need the patient link`);
  assert.doesNotMatch(JSON.stringify(c),/2[.,]990|2[.,]590|Sept(?:ember)? is closed|Eylül kapalı/);
 }
 for(const [lang,c] of Object.entries(smileCopy)){
  assert.equal(dental.content[lang].whatsapp,c.scripts[0]);
  assert.equal(dental.content[lang].tagline,c.lead);
  assert.equal(dental.content[lang].price,c.price);
 }
 assert.equal(smileTerms.price,3000);assert.equal(smileTerms.expires,'2026-12-31');assert.equal(smileTerms.flight,300);
});

test('all patient photographs and imported media match the verified landing source byte hashes',async()=>{
 const manifest=JSON.parse(await readFile('public/winter-smile/provenance.json','utf8'));
 assert.equal(manifest.sourceRelease,'20261029T161132Z-cc833b9f5cd9-6a4453b0');
 for(const file of manifest.files){
  const bytes=await readFile('public/winter-smile/media/'+file.file);
  assert.equal(createHash('sha256').update(bytes).digest('hex'),file.sha256,file.file);
 }
 assert.equal(media.items.filter(item=>item.category===3).length,10);
 assert.equal(media.items.filter(item=>item.category===5).length,4);
 assert.equal(new Set(media.items.map(item=>item.id)).size,media.items.length);
});

test('published pages preserve the approved offer, working media and patient/advisor actions',async()=>{
 for(const lang of Object.keys(smileText)){
  const html=await readFile(`root-dist${smilePath(lang)}index.html`,'utf8');
  assert.match(html,/<html lang=/);assert.match(html,/2026-12-31/);assert.match(html,/noindex, nofollow/);
  assert.ok(html.includes(`<link rel="canonical" href="${smileOrigin}${smilePath(lang)}"`),`${lang}: canonical`);
  assert.ok(html.includes(lang==='fr'?'art/fr-approved/03-ime-fr.png':`art/og-${lang}.jpg`),`${lang}: preview card`);
  await access(`public/winter-smile/art/og-${lang}.jpg`);
  assert.doesNotMatch(html,/<form\b|2[.,]990|2[.,]590|crm\/|lead\/|<video\b|dQw4w9WgXcQ|5-Star|in 5 Days|JCI-accredited|100% included/i);
  assert.doesNotMatch(html,/\/campaignscard\//);
  assert.ok(html.includes('https://wa.me/'+(lang==='fr'?'902129095620':'905465248334')));
  assert.match(html,/id="advisor"/);
  const data=JSON.parse(html.match(/id="winter-data"[^>]*>(.*?)<\/script>/s)[1]);
  assert.equal(data.items.length,lang==='fr'?39:37);
  assert.doesNotMatch(html,/hospital-document-/);
  assert.equal(data.rootPath,'/all-inclusive-smile/');
  assert.equal(data.routes[lang],smilePath(lang));
  assert.match(html,/smile-editorial-2560\.webp/);
  assert.match(html,/Andrea Piacquadio \/ Pexels/);
  assert.doesNotMatch(html,/crown-restorations\.webp|natural-smile-1280\.webp/);
  assert.equal((html.match(/class="showcase-video"/g)||[]).length,6);
  for(const video of media.videos){
   const source=video.variants?(video.variants[lang]||video.variants.en).src:video.src;
   assert.ok(html.includes(source),`${lang}: real video missing`);
  }
  for(const item of data.items)for(const src of [item.src,item.thumb]){
   assert.ok(src.startsWith('/lp-assets/all-inclusive-smile/'));
   await access('root-dist'+src);
  }
  const artwork=await readFile(`public/winter-smile/art/winter-${lang}-1.jpg`);
  assert.ok(artwork.length>50000&&artwork.length<500000);
  // Consultant rules and messages live outside the patient page source.
  assert.doesNotMatch(html.replace(/<svg[\s\S]*?<\/svg>/g,'').replace(/<script[\s\S]*?<\/script>/g,''),/do not promise|1[.,\s]800/);
  const advisorFile=html.match(/data-advisor-src="([^"]+)"/)[1];
  assert.match(await readFile('root-dist'+advisorFile,'utf8'),/data-template/);
  const old=await readFile(`dist/${lang}/kampanya/dental/index.html`,'utf8');
  assert.match(old,/http-equiv="refresh"/);
  assert.ok(old.includes(smileOrigin+smilePath(lang)));
  assert.match(old,/target\.search=location\.search/);
 }
 // All unrelated campaign URLs remain in the release.
 for(const lang of Object.keys(smileCopy))for(const slug of ['yuz-germe','smart-lens','rinoplasti','implant'])await access(`dist/${lang}/kampanya/${slug}/index.html`);
});

test('patient copy has no internal wording and matches the other landings',async()=>{
 for(const lang of Object.keys(smileText)){
  const html=await readFile(`root-dist${smilePath(lang)}index.html`,"utf8");
  const visible=html.replace(/<script[\s\S]*?<\/script>/g,'');
  for(const phrase of ['other pages','otras páginas','altre pagine','других страниц','resultado clinico','The existing','Mevcut paket','Mevcut kampanya','существующ','oordinator','oordinador','oordinatore','oordinatör','оординатор','VIP'])assert.ok(!visible.includes(phrase),`${lang}: ${phrase}`);
  for(const needed of ['smile-footer-legal','privacy-policy','id="documents"','photo-guide-grid','data-results-more'])assert.ok(visible.includes(needed),`${lang}: ${needed}`);
  // Menu order is page order.
  const order=['package','results','videos','places','journey','questions'].map(id=>html.indexOf(`id="${id}"`));
  assert.deepEqual(order,[...order].sort((a,b)=>a-b),`${lang}: section order`);
 }
});

test('the language menu lists the same nine languages as the sister landings, without Turkish',async()=>{
 for(const lang of ['en','ar','tr']){
  const html=await readFile(`root-dist${smilePath(lang)}index.html`,'utf8');
  const menu=html.match(/<details class="winter-language">[\s\S]*?<\/details>/)[0];
  assert.deepEqual([...menu.matchAll(/<a [^>]*hreflang="(\w+)"/g)].map(m=>m[1]),['en','ru','pt','es','it','fr','de','ar','pl'],lang);
  assert.doesNotMatch(html,/hreflang="tr"/,lang);
 }
});


test('French Smile has unnumbered flight participation and physical-arrival terms without deposit rules',async()=>{
 const c=smileText.fr;
 assert.doesNotMatch(JSON.stringify(c),/(?:300|400)\s*€|acompte/i);
 assert.match(c.deadlineNote,/première arrivée physique à Istanbul/);
 assert.match(c.deadlineNote,/31 décembre 2026 inclus/);
 assert.match(c.band[1][0],/Participation aux vols aller-retour/);
 assert.match(c.faqs[4][1],/modalités sont à confirmer/i);
 const html=await readFile('root-dist/fr/all-inclusive-smile/index.html','utf8');
 assert.ok(html.includes('art/fr-approved/03-ime-fr.png'));
 assert.ok(html.includes('https://wa.me/902129095620'));
 const advisor=html.match(/data-advisor-src="([^"]+)"/)[1];
 assert.doesNotMatch(await readFile('root-dist'+advisor,'utf8'),/(?:300|400)\s*€|acompte/i);
});
