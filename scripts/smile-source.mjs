import { createHash } from 'node:crypto';
import { readFile,readdir } from 'node:fs/promises';
import path from 'node:path';
export async function smileSourceFingerprint(root=process.cwd()){
 const files=['astro.config.mjs','package.json','package-lock.json'];
 async function walk(dir){for(const item of await readdir(path.join(root,dir),{withFileTypes:true})){const name=dir+'/'+item.name;if(item.isDirectory())await walk(name);else if(item.isFile())files.push(name);else throw Error('Non-regular source entry');}}
 for(const dir of ['src','scripts','public'])await walk(dir);
 const hash=createHash('sha256');
 for(const file of files.sort()){hash.update(file+'\0');hash.update(await readFile(path.join(root,file)));}
 return hash.digest('hex');
}
