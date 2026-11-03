import { build } from 'esbuild';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
const compiled = await build({stdin:{contents:"export {smileCopy} from './src/data/winter-locales.ts'; export {smileVisuals} from './src/data/winter-visuals.ts'",resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
const {smileCopy,smileVisuals} = await import('data:text/javascript;base64,'+Buffer.from(compiled.outputFiles[0].text).toString('base64'));
const dir = new URL('../public/winter-smile/',import.meta.url);
await mkdir(new URL('art/',dir),{recursive:true});
// resvg embeds JPEG/PNG. Decode the source WebP into a lossless PNG first.
const pic = await sharp(await readFile(new URL('media/natural-smile-1280.webp',dir))).png().toBuffer();
const clinic = await sharp(await readFile(new URL('media/airport-flight-1280.webp',dir))).png().toBuffer();
const logo = await readFile(new URL('../ime-clinic-logo.svg',dir));
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const lines=(text,max=32)=>{
 const out=[];let line='';for(const word of text.split(' ')){if((line+' '+word).length>max&&line){out.push(line);line=word}else line+=(line?' ':'')+word}if(line)out.push(line);return out;
};
for(const [lang,c] of Object.entries(smileCopy)){
 for(let variant=0;variant<2;variant++){
  const photo=variant===0?pic:clinic;
  const photoY=variant===0?-220:355;
  const photoHeight=variant===0?1500:410;
  const photoNote=variant===0?smileVisuals[lang].modelNote:smileVisuals[lang].illustration;
  const header=variant===0?c.title:c.flight;
  const title=lines(header,27).map((s,i)=>`<tspan x="70" dy="${i?65:0}">${esc(s)}</tspan>`).join('');
  const features=[c.facts[0],c.facts[1],c.facts[2],c.facts[3]];
  const rows=features.map((s,i)=>`<text x="105" y="${1020+i*49}" font-size="29" fill="#f3f3ee">${esc(s)}</text><circle cx="79" cy="${1010+i*49}" r="4" fill="#e9e2d3"/>`).join('');
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" height="1350" viewBox="0 0 1080 1350">
  <defs><clipPath id="photo"><rect x="40" y="355" width="1000" height="410" rx="24"/></clipPath><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#213847"/><stop offset="1" stop-color="#293f4b"/></linearGradient></defs>
  <rect width="1080" height="1350" fill="url(#bg)"/><circle cx="1060" cy="50" r="310" fill="#e9e2d3" opacity=".06"/>
  <rect x="60" y="46" width="260" height="69" rx="12" fill="white"/><image x="77" y="64" width="227" height="38" xlink:href="data:image/svg+xml;base64,${logo.toString('base64')}"/>
  <g font-family="DejaVu Sans,Arial,sans-serif"><text x="70" y="165" font-size="24" fill="#e9e2d3">${esc(c.season)}</text>
  <text x="70" y="246" font-weight="700" font-size="56" fill="white">${title}</text>
  <image x="40" y="${photoY}" width="1000" height="${photoHeight}" preserveAspectRatio="xMidYMid slice" clip-path="url(#photo)" xlink:href="data:image/png;base64,${photo.toString('base64')}"/>
  <rect x="40" y="729" width="1000" height="36" fill="#213847" opacity=".72"/><text x="65" y="753" font-size="17" fill="white">${esc(photoNote)}</text>
  <text x="70" y="835" font-size="26" fill="#e4ddce">${esc(c.priceLabel)}</text><text x="65" y="952" font-size="120" font-weight="700" fill="white">€3.000</text>
  <rect x="598" y="858" width="410" height="92" rx="15" fill="#e9e2d3"/><text x="625" y="897" font-size="22" fill="#213847">${esc(c.ticket[3])}</text><text x="625" y="930" font-size="27" font-weight="700" fill="#213847">€300 · ${esc(c.ticket[0])}</text>
  ${rows}<path d="M70 1206H1010" stroke="#c3b89d" opacity=".4"/><text x="70" y="1254" font-size="29" fill="#e9e2d3">${esc(c.deadline)}</text>
  <text x="70" y="1300" font-size="20" fill="#e0e6e5">${esc(c.flightNote)}</text></g></svg>`;
  const name=`winter-${lang}-${variant+1}`;
  await writeFile(new URL(`art/${name}.svg`,dir),svg);
  await writeFile(new URL(`art/${name}.jpg`,dir),await sharp(new Resvg(svg,{font:{loadSystemFonts:true}}).render().asPng()).jpeg({quality:88,mozjpeg:true}).toBuffer());
  await rm(new URL(`art/${name}.png`,dir),{force:true});
 }
}
console.log('Created 10 localized winter campaign graphics from the natural model portrait and illustrative airport scene.');
