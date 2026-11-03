import { readFile, writeFile, readdir, mkdir, rm, copyFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { smileLocales, smilePath, smileOrigin } from '../src/data/smile-paths.mjs';
import { smileSourceFingerprint } from './smile-source.mjs';

const project=process.cwd();
const dist=path.join(project,'dist');
const output=path.join(project,'root-dist');
async function walk(dir,prefix=''){
 const result=[];
 for(const item of (await readdir(dir,{withFileTypes:true})).sort((a,b)=>a.name.localeCompare(b.name))){
  const name=path.posix.join(prefix,item.name);
  if(item.isSymbolicLink())throw Error('Symbolic link in release');
  if(item.isDirectory())result.push(...await walk(path.join(dir,item.name),name));
  else if(item.isFile())result.push(name);
 }
 return result;
}
const mediaFiles=(await walk(path.join(dist,'winter-smile'))).filter(name=>!name.endsWith('.svg'));
const astroFiles=await walk(path.join(dist,'_astro'));
const fingerprint=createHash('sha256');
for(const [folder,files] of [['winter-smile',mediaFiles],['_astro',astroFiles]])for(const file of files){fingerprint.update(folder+'/'+file);fingerprint.update(await readFile(path.join(dist,folder,file)));}
const revision=fingerprint.digest('hex').slice(0,16);
const assetRoot=`/lp-assets/all-inclusive-smile/${revision}/`;
const rewrite=s=>s.replaceAll('/campaignscard/winter-smile/',assetRoot).replaceAll('/campaignscard/_astro/',assetRoot+'assets/').replaceAll('/campaignscard/ime-clinic-logo.svg',assetRoot+'ime-clinic-logo.svg').replaceAll('/campaignscard/favicon.svg',assetRoot+'favicon.svg');
await rm(output,{recursive:true,force:true});
await mkdir(output,{recursive:true});
for(const [folder,files,destination] of [['winter-smile',mediaFiles,''],['_astro',astroFiles,'assets/']])for(const file of files){
 const target=path.join(output,assetRoot,destination,file);
 await mkdir(path.dirname(target),{recursive:true});
 const source=path.join(dist,folder,file);
 if(/\.(?:css|js|json)$/.test(file))await writeFile(target,rewrite(await readFile(source,'utf8')));
 else await copyFile(source,target);
}
for(const file of ['ime-clinic-logo.svg','favicon.svg'])await copyFile(path.join(dist,file),path.join(output,assetRoot,file));
for(const locale of smileLocales){
 const original=path.join(dist,locale,'kampanya/dental/index.html');
 const html=rewrite(await readFile(original,'utf8'));
 if(html.includes('/campaignscard/'))throw Error('Portal path leaked into root landing');
 const destination=path.join(output,smilePath(locale));
 await mkdir(destination,{recursive:true});
 await writeFile(path.join(destination,'index.html'),html);
 await writeFile(path.join(destination,'.htaccess'),'Options -Indexes -MultiViews\nDirectoryIndex index.html\n');
 const canonical=smileOrigin+smilePath(locale);
 // Existing portal bookmarks remain usable and preserve advisor query/hash.
 const redirect=`<!doctype html><html lang="${locale}"><head><meta charset="utf-8"><meta name="robots" content="noindex,nofollow"><link rel="canonical" href="${canonical}"><noscript><meta http-equiv="refresh" content="0;url=${canonical}"></noscript><title>IME Clinic</title></head><body><a href="${canonical}">IME Clinic — All-Inclusive Smile</a><script>const target=new URL(${JSON.stringify(canonical)});target.search=location.search;target.hash=location.hash;location.replace(target.href);</script></body></html>`;
 await writeFile(original,redirect);
}
const files={};
for(const file of await walk(output))files[file]=createHash('sha256').update(await readFile(path.join(output,file))).digest('hex');
await mkdir(path.join(project,'.ime'),{recursive:true});
await writeFile(path.join(project,'.ime/root-smile-build.json'),JSON.stringify({revision,sourceFingerprint:await smileSourceFingerprint(),assetRoot,routes:smileLocales.map(smilePath),files},null,2)+'\n');
console.log(`Exported 5 root landing pages + ${mediaFiles.length} media files to root-dist (${revision}).`);
