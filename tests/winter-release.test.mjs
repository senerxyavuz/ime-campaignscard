import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {build} from 'esbuild';
import {smilePath,smileOrigin} from '../src/data/smile-paths.mjs';
const result=await build({stdin:{contents:"export {smileCopy} from './src/data/winter-locales.ts';export {smileTerms} from './src/data/winter-smile.ts';export {dental} from './src/data/campaigns/dental.ts';",resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
const {smileCopy,smileTerms,dental}=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
const media=JSON.parse(await readFile('src/data/winter-media.json','utf8'));

test('all five languages have complete patient and advisor content from the same offer',()=>{
 assert.deepEqual(Object.keys(smileCopy).sort(),['en','es','it','ru','tr']);
 for(const [lang,c] of Object.entries(smileCopy)){
  assert.deepEqual(Object.keys(c).sort(),Object.keys(smileCopy.en).sort(),lang);
  for(const [key,value] of Object.entries(c)){
   assert.ok(value.length,`${lang}.${key} empty`);
   if(Array.isArray(value))assert.equal(value.length,smileCopy.en[key].length,`${lang}.${key} structure`);
  }
  assert.equal(dental.content[lang].whatsapp,c.scripts[0]);
  assert.equal(dental.content[lang].tagline,c.lead);
  assert.equal(dental.content[lang].price,'€3.000');
  assert.ok(c.deadline.includes('2026'));
  for(const script of c.scripts)assert.ok(script.includes('2026')&&script.includes('300'),`${lang} incomplete script`);
  assert.doesNotMatch(JSON.stringify(c),/2[.,]990|2[.,]590|Sept(?:ember)? is closed|Eylül kapalı/);
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
 for(const lang of Object.keys(smileCopy)){
  const html=await readFile(`root-dist${smilePath(lang)}index.html`,'utf8');
  assert.match(html,/<html lang=/);assert.match(html,/2026-12-31/);assert.match(html,/noindex, nofollow/);
  assert.match(html,/<link rel="canonical" href="https:\/\/www\.imeclinic\.com\/all-inclusive-smile\/"/);
  assert.doesNotMatch(html,/<form\b|2[.,]990|2[.,]590|crm\/|lead\/|<video\b|dQw4w9WgXcQ|5-Star|in 5 Days|JCI-accredited|100% included/i);
  assert.doesNotMatch(html,/\/campaignscard\//);
  assert.match(html,/https:\/\/wa\.me\/905465248334/);
  assert.match(html,/id="advisor"/);
  const data=JSON.parse(html.match(/id="winter-data"[^>]*>(.*?)<\/script>/s)[1]);
  assert.equal(data.items.length,44);
  assert.equal(data.rootPath,'/all-inclusive-smile/');
  assert.equal(data.canonical,smileOrigin+'/all-inclusive-smile/'+(lang==='en'?'':`?lang=${lang}`));
  assert.equal(data.routes[lang],smilePath(lang));
  assert.deepEqual(data.facts,smileCopy[lang].facts);
  assert.match(html,/smile-editorial-1280\.webp/);
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
  const master=await readFile(`public/winter-smile/art/winter-${lang}-1.svg`,'utf8');
  assert.match(master,/€3\.000/);assert.match(master,/data:image\/png;base64,/);
  const old=await readFile(`dist/${lang}/kampanya/dental/index.html`,'utf8');
  assert.match(old,/http-equiv="refresh"/);
  assert.ok(old.includes(smileOrigin+smilePath(lang)));
  assert.match(old,/target\.search=location\.search/);
 }
 // All unrelated campaign URLs remain in the release.
 for(const lang of Object.keys(smileCopy))for(const slug of ['yuz-germe','smart-lens','rinoplasti','implant'])await access(`dist/${lang}/kampanya/${slug}/index.html`);
});
