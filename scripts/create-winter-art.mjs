import { build } from 'esbuild';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
const compiled = await build({stdin:{contents:"export {smileCopy} from './src/data/winter-locales.ts'",resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
const {smileCopy} = await import('data:text/javascript;base64,'+Buffer.from(compiled.outputFiles[0].text).toString('base64'));
const dir = new URL('../public/winter-smile/',import.meta.url);
await mkdir(new URL('art/',dir),{recursive:true});
// resvg embeds JPEG/PNG. Decode the source WebP into a lossless PNG first.
const pic = await sharp(await readFile(new URL('media/hero-1280.webp',dir))).png().toBuffer();
const clinic = await sharp(await readFile(new URL('media/clinic-dental-unit.webp',dir))).png().toBuffer();
const logo = await readFile(new URL('../ime-clinic-logo.svg',dir));
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const lines=(text,max=32)=>{
 const out=[];let line='';for(const word of text.split(' ')){if((line+' '+word).length>max&&line){out.push(line);line=word}else line+=(line?' ':'')+word}if(line)out.push(line);return out;
};
for(const [lang,c] of Object.entries(smileCopy)){
 for(let variant=0;variant<2;variant++){
  const photo=variant===0?pic:clinic;
  const header=variant===0?c.title:c.flight;
  const title=lines(header,27).map((s,i)=>`<tspan x="70" dy="${i?65:0}">${esc(s)}</tspan>`).join('');
  const features=[c.facts[0],c.facts[1],c.facts[2],c.facts[3]];
  const rows=features.map((s,i)=>`<text x="105" y="${1020+i*49}" font-size="29" fill="#f5ecf1">${esc(s)}</text><circle cx="79" cy="${1010+i*49}" r="4" fill="#c0e7eb"/>`).join('');
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" height="1350" viewBox="0 0 1080 1350">
  <defs><clipPath id="photo"><rect x="40" y="355" width="1000" height="410" rx="24"/></clipPath><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#231a32"/><stop offset="1" stop-color="#573a54"/></linearGradient></defs>
  <rect width="1080" height="1350" fill="url(#bg)"/><circle cx="1060" cy="50" r="310" fill="#a7dce3" opacity=".06"/>
  <rect x="60" y="46" width="260" height="69" rx="12" fill="white"/><image x="77" y="64" width="227" height="38" xlink:href="data:image/svg+xml;base64,${logo.toString('base64')}"/>
  <g font-family="DejaVu Sans,Arial,sans-serif"><text x="70" y="165" font-size="24" fill="#c0e7eb">${esc(c.season)}</text>
  <text x="70" y="246" font-weight="700" font-size="56" fill="white">${title}</text>
  <image x="40" y="355" width="1000" height="410" preserveAspectRatio="xMidYMid slice" clip-path="url(#photo)" xlink:href="data:image/png;base64,${photo.toString('base64')}"/>
  <text x="70" y="835" font-size="26" fill="#d7c1cf">${esc(c.priceLabel)}</text><text x="65" y="952" font-size="120" font-weight="700" fill="white">€3.000</text>
  <rect x="598" y="858" width="410" height="92" rx="15" fill="#c0e7eb"/><text x="625" y="897" font-size="22" fill="#231a32">${esc(c.ticket[3])}</text><text x="625" y="930" font-size="27" font-weight="700" fill="#231a32">€300 · ${esc(c.ticket[0])}</text>
  ${rows}<path d="M70 1206H1010" stroke="#bda3b5" opacity=".4"/><text x="70" y="1254" font-size="29" fill="#c0e7eb">${esc(c.deadline)}</text>
  <text x="70" y="1300" font-size="20" fill="#ded3df">${esc(c.flightNote)}</text></g></svg>`;
  const name=`winter-${lang}-${variant+1}`;
  await writeFile(new URL(`art/${name}.svg`,dir),svg);
  await writeFile(new URL(`art/${name}.jpg`,dir),await sharp(new Resvg(svg,{font:{loadSystemFonts:true}}).render().asPng()).jpeg({quality:88,mozjpeg:true}).toBuffer());
  await rm(new URL(`art/${name}.png`,dir),{force:true});
 }
}
console.log('Created 10 localized winter campaign graphics from the existing hero and clinic photographs.');
