"""Publish only the five authorised root smile routes and their versioned assets."""
import argparse
import datetime
import hashlib
import io
import json
import os
from pathlib import Path
import subprocess
import tarfile

ROOT=Path(__file__).resolve().parents[1]
STATE=ROOT/'.ime/root-smile-baseline.json'
PROGRAM=(ROOT/'ops/smile-remote.py').read_text()

def remote(payload):
    identity=os.environ.get('IME_SSH_IDENTITY')
    if not identity:raise RuntimeError('IME_SSH_IDENTITY is required')
    # Program is fixed source; payload is JSON data, never shell interpolation.
    launcher='import json,sys; payload=json.load(sys.stdin); program=payload.pop("program"); import io; sys.stdin=io.StringIO(json.dumps(payload)); exec(compile(program,"smile-remote.py","exec"))'
    import shlex
    proc=subprocess.run(['ssh','-i',identity,'-o','BatchMode=yes','-o','ConnectTimeout=15','root@72.61.20.114','python3 -c '+shlex.quote(launcher)],input=json.dumps({**payload,'program':PROGRAM}),capture_output=True,text=True)
    if proc.returncode:raise RuntimeError(proc.stderr.strip())
    return json.loads(proc.stdout)

def main():
    parser=argparse.ArgumentParser();parser.add_argument('command',choices=['snapshot','plan','publish']);args=parser.parse_args()
    if args.command=='snapshot':
        result=remote({'action':'snapshot'});STATE.parent.mkdir(exist_ok=True);STATE.write_text(json.dumps(result['baseline'],indent=2)+'\n');return result
    build=json.loads((ROOT/'.ime/root-smile-build.json').read_text())
    source_files=[ROOT/name for name in ['astro.config.mjs','package.json','package-lock.json']]
    for folder in ['src','scripts','public']:source_files.extend(p for p in (ROOT/folder).rglob('*') if p.is_file())
    source_hash=hashlib.sha256()
    for file in sorted(source_files,key=lambda p:str(p.relative_to(ROOT))):
        source_hash.update((str(file.relative_to(ROOT))+'\0').encode());source_hash.update(file.read_bytes())
    if source_hash.hexdigest()!=build['sourceFingerprint']:raise RuntimeError('Source changed since the reviewed build')
    files={};sizes={}
    for name,sha in build['files'].items():
        file=ROOT/'root-dist'/name
        if file.is_symlink():raise RuntimeError('Symlink in release')
        data=file.read_bytes();actual=hashlib.sha256(data).hexdigest()
        if actual!=sha:raise RuntimeError('Build changed after manifest creation')
        files[name]=sha;sizes[name]=len(data)
    baseline=json.loads(STATE.read_text());actual=remote({'action':'snapshot'})['baseline']
    if actual!=baseline:raise RuntimeError('Stale baseline; inspect before taking a new snapshot')
    if args.command=='plan':return {'ok':True,'routes':build['routes'],'files':len(files),'bytes':sum(sizes.values()),'changed':[name for name,sha in files.items() if baseline['files'].get(name)!=sha]}
    if subprocess.check_output(['git','status','--porcelain'],cwd=ROOT,text=True).strip():raise RuntimeError('Commit the reviewed source before publishing')
    commit=subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT,text=True).strip()
    archive=io.BytesIO()
    with tarfile.open(fileobj=archive,mode='w:gz') as tar:
        for name in sorted(files):tar.add(ROOT/'root-dist'/name,arcname=name,recursive=False)
    release=datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%SZ-')+commit[:12]
    result=remote({'action':'publish','baseline':baseline,'files':files,'sizes':sizes,'commit':commit,'release':release,'archiveHex':archive.getvalue().hex()})
    STATE.write_text(json.dumps(remote({'action':'snapshot'})['baseline'],indent=2)+'\n')
    (ROOT/'.ime/root-smile-deployment.json').write_text(json.dumps(result,indent=2)+'\n')
    return result

if __name__=='__main__':print(json.dumps(main(),ensure_ascii=False,indent=2))
