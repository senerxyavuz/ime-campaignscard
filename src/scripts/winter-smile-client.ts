import { zipSync } from 'fflate';
type MediaItem={id:string;category:number;src:string;thumb:string;title:string};
let dispose=()=>{};
let languageRequest=0;
async function loadLanguage(lang:string,updateUrl=true){
 const current=JSON.parse(document.querySelector('#winter-data')!.textContent!);
 const path=current.routes[lang];if(!path)return;
 const revision=++languageRequest;
 try{
  const response=await fetch(new URL(path,location.origin),{credentials:'same-origin'});
  if(!response.ok)throw Error('Language unavailable');
  const html=await response.text();
  const next=new DOMParser().parseFromString(html,'text/html');
  if(!next.body.hasAttribute('data-winter-smile')||next.documentElement.lang!==lang||!next.querySelector('#winter-data'))throw Error('Invalid language page');
  if(revision!==languageRequest)return;
  document.querySelectorAll('video').forEach(video=>{video.pause();video.removeAttribute('src');video.load();});
  dispose();
  document.body.replaceWith(document.importNode(next.body,true));
  document.documentElement.lang=lang;
  document.title=next.title;
  for(const selector of ['meta[name="description"]','meta[property="og:title"]','meta[property="og:description"]','meta[property="og:image"]']){
   const value=next.querySelector(selector)?.getAttribute('content');
   if(value)document.querySelector(selector)?.setAttribute('content',value);
  }
  const url=new URL(location.href);url.pathname=current.rootPath;
  if(lang==='en')url.searchParams.delete('lang');else url.searchParams.set('lang',lang);
  if(updateUrl)history.pushState({},'',url);
  mount();
 }catch{if(revision===languageRequest)location.assign(path+location.search+location.hash);}
}
function mount(){
 const controller=new AbortController();
 dispose=()=>controller.abort();



let data=JSON.parse(document.querySelector('#winter-data')!.textContent!);
const items:MediaItem[]=data.items;
const q=<T extends Element=HTMLElement>(selector:string)=>document.querySelector<T>(selector)!;
const qa=<T extends Element=HTMLElement>(selector:string)=>Array.from(document.querySelectorAll<T>(selector));
const status=q('[data-status]');
const copyStatus=q('[data-copy-status]');
const advisor=q<HTMLDetailsElement>('#advisor');

function setView(view:string,updateUrl=true){
 const isAdvisor=view==='advisor';
 document.body.dataset.view=isAdvisor?'advisor':'patient';
 advisor.open=isAdvisor;
 q<HTMLDetailsElement>("#library").open=isAdvisor||(!updateUrl&&location.hash==="#library");
 qa<HTMLAnchorElement>('[data-view-switch]').forEach(link=>{
   if(link.dataset.viewSwitch===view)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');
 });
 qa<HTMLAnchorElement>('.winter-language a').forEach(link=>{
   const url=new URL(link.href);if(isAdvisor){url.searchParams.set('view','advisor');url.hash='advisor';}else{url.searchParams.delete('view');url.hash='';}link.href=url.href;
 });
 if(updateUrl){const url=new URL(location.href);if(isAdvisor)url.searchParams.set('view','advisor');else url.searchParams.delete('view');url.hash=isAdvisor?'advisor':'main';history.pushState({},'',url);}
}
qa<HTMLAnchorElement>('a[href="#library"]').forEach(link=>link.addEventListener('click',()=>{q<HTMLDetailsElement>('#library').open=true;}));
setView(new URL(location.href).searchParams.get('view')==='advisor'?'advisor':'patient',false);
qa<HTMLAnchorElement>('[data-view-switch]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();const view=link.dataset.viewSwitch!;setView(view);q(view==='advisor'?'#advisor':'#main').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});}));
window.addEventListener('popstate',()=>{const lang=new URL(location.href).searchParams.get('lang')||'en';if(lang!==data.lang&&data.routes[lang])loadLanguage(lang,false);else setView(new URL(location.href).searchParams.get('view')==='advisor'?'advisor':'patient',false);},{signal:controller.signal});
document.addEventListener('click',event=>{qa<HTMLDetailsElement>('.winter-language[open],.winter-menu[open]').forEach(el=>{if(!el.contains(event.target as Node))el.open=false;});},{signal:controller.signal});

// The same compact image deck and stay tabs used by the body landing design.
let deckIndex=0;
const deckSlides=qa<HTMLElement>('[data-deck-slide]');
function showDeck(index:number){
 deckIndex=(index+deckSlides.length)%deckSlides.length;
 deckSlides.forEach((slide,i)=>{const offset=(i-deckIndex+deckSlides.length)%deckSlides.length;slide.dataset.position=offset===0?'active':offset===1?'previous':'next';slide.setAttribute('aria-hidden',String(offset!==0));});
 qa<HTMLButtonElement>('[data-deck-dot]').forEach((button,i)=>button.setAttribute('aria-pressed',String(i===deckIndex)));
 q('[data-deck-status]').textContent=qa<HTMLButtonElement>('[data-deck-dot]')[deckIndex].getAttribute('aria-label');
}
q('[data-deck-prev]').addEventListener('click',()=>showDeck(deckIndex-1));
q('[data-deck-next]').addEventListener('click',()=>showDeck(deckIndex+1));
qa<HTMLButtonElement>('[data-deck-dot]').forEach(button=>button.addEventListener('click',()=>showDeck(Number(button.dataset.deckDot))));
q('.deck-controls').addEventListener('keydown',event=>{const key=(event as KeyboardEvent).key;if(key!=='ArrowLeft'&&key!=='ArrowRight')return;event.preventDefault();showDeck(deckIndex+(key==='ArrowRight'?1:-1));qa<HTMLButtonElement>('[data-deck-dot]')[deckIndex].focus();});
function showStay(index:number,focus=false){
 qa<HTMLButtonElement>('[data-stay-tab]').forEach((button,i)=>{const active=i===index;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;if(active&&focus)button.focus();});
 qa<HTMLElement>('.places-grid>[role=tabpanel]').forEach((panel,i)=>panel.hidden=i!==index);
}
qa<HTMLButtonElement>('[data-stay-tab]').forEach(button=>{
 button.addEventListener('click',()=>showStay(Number(button.dataset.stayTab)));
 button.addEventListener('keydown',event=>{const i=Number(button.dataset.stayTab);const max=qa('[data-stay-tab]').length;let next=i;if(event.key==='ArrowRight')next=(i+1)%max;else if(event.key==='ArrowLeft')next=(i+max-1)%max;else if(event.key==='Home')next=0;else if(event.key==='End')next=max-1;else return;event.preventDefault();showStay(next,true);});
});
qa<HTMLAnchorElement>('.winter-menu a').forEach(link=>link.addEventListener('click',()=>q<HTMLDetailsElement>('.winter-menu').open=false));
q('.winter-menu').addEventListener('keydown',event=>{if((event as KeyboardEvent).key==='Escape'){q<HTMLDetailsElement>('.winter-menu').open=false;q<HTMLElement>('.winter-menu summary').focus();}});

const selected=new Set<string>();
let category=0;
let generation=0;
let prepared:File[]|null=null;
let preparation:Promise<File[]>|null=null;
const downloadButton=q<HTMLButtonElement>('[data-download]');
const shareButton=q<HTMLButtonElement>('[data-share]');
function updateSelection(){
 q('[data-selection-count]').textContent=`${selected.size} ${data.selected}`;
 qa<HTMLInputElement>('[data-select]').forEach(input=>input.checked=selected.has(input.dataset.select!));
 downloadButton.disabled=!selected.size;shareButton.disabled=true;
 const current=++generation;prepared=null;preparation=null;status.textContent='';
 if(!selected.size)return;
 status.textContent=data.working;
 const snapshot=items.filter(item=>selected.has(item.id));
 preparation=Promise.all(snapshot.map(async item=>{
   const url=new URL(item.src,location.href);if(url.origin!==location.origin)throw Error('Cross-origin download rejected');
   const response=await fetch(url);if(!response.ok)throw Error('Media unavailable');
   const blob=await response.blob();return new File([blob],url.pathname.split('/').pop()!,{type:blob.type||'application/octet-stream'});
 }));
 preparation.then(files=>{if(current!==generation)return;prepared=files;shareButton.disabled=false;status.textContent='';}).catch(()=>{if(current===generation)status.textContent=data.downloadError;});
}
qa<HTMLInputElement>('[data-select]').forEach(input=>input.addEventListener('change',()=>{if(input.checked)selected.add(input.dataset.select!);else selected.delete(input.dataset.select!);updateSelection();}));
q('[data-select-all]').addEventListener('click',()=>{items.filter(item=>item.category===category).forEach(item=>selected.add(item.id));updateSelection();});
q('[data-clear]').addEventListener('click',()=>{selected.clear();updateSelection();});
function setCategory(next:number,focus=false){
 category=next;
 qa<HTMLButtonElement>('[data-category]').forEach(button=>{const active=Number(button.dataset.category)===category;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;if(active&&focus){button.focus();button.scrollIntoView({block:'nearest',inline:'nearest'});}});
 qa<HTMLElement>('.media-hub [role=tabpanel]').forEach((panel,index)=>panel.hidden=index!==category);
}
qa<HTMLButtonElement>('[data-category]').forEach(button=>{
 button.addEventListener('click',()=>setCategory(Number(button.dataset.category)));
 button.addEventListener('keydown',event=>{let next=category;const max=data.categories.length;
  if(event.key==='ArrowRight')next=(category+1)%max;else if(event.key==='ArrowLeft')next=(category+max-1)%max;else if(event.key==='Home')next=0;else if(event.key==='End')next=max-1;else return;
  event.preventDefault();setCategory(next,true);
 });
});
function saveBlob(blob:Blob,name:string){const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),60_000);}
downloadButton.addEventListener('click',async()=>{
 if(!selected.size){status.textContent=data.empty;return;}const current=generation;downloadButton.disabled=true;
 try{const files=prepared||await preparation!;if(current!==generation)return;const entries:Record<string,Uint8Array>={};for(const file of files)entries[file.name]=new Uint8Array(await file.arrayBuffer());saveBlob(new Blob([zipSync(entries,{level:0}) as BlobPart],{type:'application/zip'}),`ime-winter-smile-${data.lang}.zip`);status.textContent='';}catch{status.textContent=data.downloadError;}finally{downloadButton.disabled=!selected.size;}
});
shareButton.addEventListener('click',async()=>{
 if(!prepared?.length)return;
 try{if(navigator.canShare?.({files:prepared})&&navigator.share)await navigator.share({files:prepared,title:data.title});else status.textContent=data.shareFallback;}catch(error){if((error as Error).name!=='AbortError')status.textContent=data.shareFallback;}
});
async function copyText(text:string,button:HTMLElement){
 try{await navigator.clipboard.writeText(text);const original=button.textContent;button.textContent=data.copied;copyStatus.textContent=data.copied;setTimeout(()=>button.textContent=original,2200);}catch{copyStatus.textContent=data.copyError;}
}
qa('[data-copy]').forEach(button=>button.addEventListener('click',()=>copyText(q<HTMLTextAreaElement>('#'+button.dataset.copy).value,button)));
q('[data-copy-link]').addEventListener('click',event=>{
 // Share the patient view without the advisor query or anchor, including on preview.
 const url=new URL(data.rootPath,location.origin);if(data.lang!=='en')url.searchParams.set('lang',data.lang);const patientUrl=url.href;
 copyText(patientUrl,event.currentTarget as HTMLElement);
});

const imageDialog=q<HTMLDialogElement>('#image-dialog');
const videoDialog=q<HTMLDialogElement>('#video-dialog');
let viewed:MediaItem|undefined;
let opener:HTMLElement|null=null;
function displayImage(item:MediaItem){
 viewed=item;q('#image-dialog-title').textContent=item.title;
 const image=q<HTMLImageElement>('#image-dialog .image-stage img');image.src=item.src;image.alt=item.title;
 const link=q<HTMLAnchorElement>('[data-image-download]');link.href=item.src;link.download=item.src.split('/').pop()!;
}
qa('[data-image]').forEach(button=>button.addEventListener('click',()=>{const item=items.find(item=>item.id===button.dataset.image);if(!item)return;opener=button;displayImage(item);imageDialog.showModal();}));
function moveImage(direction:number){if(!viewed)return;const group=items.filter(item=>item.category===viewed!.category);displayImage(group[(group.findIndex(item=>item.id===viewed!.id)+direction+group.length)%group.length]);}
q('[data-image-prev]').addEventListener('click',()=>moveImage(-1));q('[data-image-next]').addEventListener('click',()=>moveImage(1));
imageDialog.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();moveImage(event.key==='ArrowRight'?1:-1);}});
qa('[data-video]').forEach(button=>button.addEventListener('click',()=>{
 opener=button;q('#video-dialog-title').textContent=button.dataset.videoTitle||data.videoTitle;
 const video=document.createElement('video');video.src=button.dataset.video!;video.poster=button.dataset.poster||'';video.controls=true;video.playsInline=true;video.autoplay=true;video.preload='metadata';q('[data-video-container]').replaceChildren(video);videoDialog.showModal();video.play().catch(()=>{});
}));
for(const dialog of [imageDialog,videoDialog]){
 dialog.querySelector('[data-close-dialog]')!.addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{const rect=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom))dialog.close();});
 dialog.addEventListener('close',()=>{if(dialog===videoDialog){const video=dialog.querySelector('video');video?.pause();video?.removeAttribute('src');video?.load();q('[data-video-container]').replaceChildren();}opener?.focus();});
}

 const canonicalUrl=new URL(location.href);canonicalUrl.pathname=data.rootPath;
 if(data.lang==='en')canonicalUrl.searchParams.delete('lang');else canonicalUrl.searchParams.set('lang',data.lang);
 if(location.pathname!==data.rootPath)history.replaceState({},'',canonicalUrl);
 qa<HTMLAnchorElement>('.winter-language a').forEach(link=>link.addEventListener('click',event=>{
  event.preventDefault();
  const lang=link.getAttribute('lang')!;
  q<HTMLDetailsElement>('.winter-language').open=false;
  if(lang!==data.lang)loadLanguage(lang);
 }));
 q('.winter-language').addEventListener('keydown',event=>{if((event as KeyboardEvent).key==='Escape'){q<HTMLDetailsElement>('.winter-language').open=false;q<HTMLElement>('.winter-language summary').focus();}});
 const requested=new URL(location.href).searchParams.get('lang');
 if(requested&&requested!==data.lang&&data.routes[requested])loadLanguage(requested,false);
}
mount();
