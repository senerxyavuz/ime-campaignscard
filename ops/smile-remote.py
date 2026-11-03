"""Fixed, narrowly scoped remote publication program. Input is a JSON payload."""
import fcntl
import hashlib
import io
import json
import os
from pathlib import Path
import re
import shutil
import sys
import tarfile
import tempfile

ROOT=Path('/opt/imeclinic-web')
BACKUPS=Path('/opt/imeclinic-backups/all-inclusive-smile')
SHARED_LOCK=Path('/opt/imeclinic-backups/landings/.publish.lock')
ROUTES=('all-inclusive-smile','tr/all-inclusive-smile','ru/all-inclusive-smile','es/all-inclusive-smile','it/all-inclusive-smile')
ASSET_SCOPE='lp-assets/all-inclusive-smile'
os.umask(0o022)

def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()

def checked(path):
    for part in (path,*path.parents):
        if part.is_symlink():raise RuntimeError('Symbolic link rejected: '+str(part))
    return path

def allowed(name):
    if not isinstance(name,str) or name.startswith('/') or '..' in name.split('/') or '\\' in name:return False
    if name in [route+'/'+file for route in ROUTES for file in ('index.html','.htaccess')]:return True
    return bool(re.fullmatch(r'lp-assets/all-inclusive-smile/[a-f0-9]{16}/[A-Za-z0-9_./-]+',name))

def collect():
    result={'routes':{},'files':{}}
    for route in ROUTES:
        folder=checked(ROOT/route)
        if not folder.exists():
            result['routes'][route]='absent'
            continue
        if not folder.is_dir():raise RuntimeError('Route is not a directory: '+route)
        names=sorted(p.name for p in folder.iterdir())
        if names!=['.htaccess','index.html']:raise RuntimeError('Unexpected or partial existing route: '+route)
        result['routes'][route]='present'
        for name in names:
            file=checked(folder/name)
            if not file.is_file():raise RuntimeError('Non-regular route file')
            result['files'][route+'/'+name]=digest(file)
    assets=checked(ROOT/ASSET_SCOPE)
    if assets.exists():
        if not assets.is_dir():raise RuntimeError('Asset scope is not a directory')
        for file in assets.rglob('*'):
            checked(file)
            if file.is_file():
                name=str(file.relative_to(ROOT))
                if not allowed(name):raise RuntimeError('Unexpected existing asset path')
                result['files'][name]=digest(file)
    return result

def validate_payload(payload):
    files=payload['files']
    expected={route+'/'+name for route in ROUTES for name in ('index.html','.htaccess')}
    if not expected.issubset(files):raise RuntimeError('Incomplete five-route release')
    if any(not allowed(name) or not re.fullmatch('[a-f0-9]{64}',sha) for name,sha in files.items()):raise RuntimeError('Invalid release manifest')
    if len(files)>250:raise RuntimeError('Too many release files')

def publish(payload):
    validate_payload(payload)
    release=payload['release']
    if not re.fullmatch(r'\d{8}T\d{6}Z-[a-f0-9]{12}',release):raise RuntimeError('Invalid release identifier')
    checked(BACKUPS).mkdir(mode=0o700,parents=True,exist_ok=True)
    checked(SHARED_LOCK.parent).mkdir(parents=True,exist_ok=True)
    with checked(SHARED_LOCK).open('a+') as lock:
        fcntl.flock(lock,fcntl.LOCK_EX|fcntl.LOCK_NB)
        baseline=collect()
        if baseline!=payload['baseline']:raise RuntimeError('Live root landing changed since snapshot; pull and review it')
        if sum(payload.get('sizes',{}).values())>60*1024*1024:raise RuntimeError('Release exceeds 60 MiB')
        backup=checked(BACKUPS/release)
        backup.mkdir(mode=0o700,exist_ok=False)
        manifest={'release':release,'state':'preparing','baseline':baseline,'files':payload['files'],'applied':[],'sourceCommit':payload['commit']}
        def save():
            (backup/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
        save()
        with tempfile.TemporaryDirectory(prefix='ime-smile-') as temp:
            stage=Path(temp)
            archive=tarfile.open(fileobj=io.BytesIO(bytes.fromhex(payload['archiveHex'])),mode='r:gz')
            seen=set()
            for item in archive.getmembers():
                if not item.isfile() or item.name not in payload['files'] or item.name in seen:raise RuntimeError('Invalid archive entry')
                seen.add(item.name)
                data=archive.extractfile(item).read()
                if hashlib.sha256(data).hexdigest()!=payload['files'][item.name]:raise RuntimeError('Archive hash mismatch')
                target=stage/item.name;target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(data)
            if seen!=set(payload['files']):raise RuntimeError('Missing archive entries')
            # Claim each completely absent route before replacing any files.
            manifest['claimedRoutes']=[]
            order=sorted(payload['files'],key=lambda name:(not name.startswith(ASSET_SCOPE+'/'),name.endswith('index.html'),name))
            try:
                for route,state in baseline['routes'].items():
                    if state=='absent':
                        folder=checked(ROOT/route)
                        if not folder.parent.is_dir():raise RuntimeError('Locale root must already exist')
                        folder.mkdir(exist_ok=False);manifest['claimedRoutes'].append(route);save()
                manifest['state']='publishing';save()
                for name in order:
                    target=checked(ROOT/name)
                    observed=digest(target) if target.is_file() else None
                    if observed!=baseline['files'].get(name):raise RuntimeError('Target changed during publication: '+name)
                    if target.exists():
                        # A hash-identified asset may only be reused with identical bytes.
                        if name.startswith(ASSET_SCOPE+'/') and digest(target)!=payload['files'][name]:raise RuntimeError('Immutable asset conflict')
                        old=backup/'before'/name;old.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(target,old)
                    target.parent.mkdir(parents=True,exist_ok=True)
                    staged=target.with_name('.ime-smile-'+target.name)
                    checked(staged)
                    with staged.open('xb') as handle:handle.write((stage/name).read_bytes())
                    os.chmod(staged,0o644)
                    os.replace(staged,target)
                    if digest(target)!=payload['files'][name]:raise RuntimeError('Published hash mismatch')
                    manifest['applied'].append(name);save()
                manifest['state']='complete';save()
            except Exception:
                manifest['state']='incomplete';save();raise
    return {'ok':True,'release':release,'backup':str(backup),'files':len(payload['files']),'routes':list(ROUTES)}

payload=json.load(sys.stdin)
if payload['action']=='snapshot':result={'ok':True,'baseline':collect()}
elif payload['action']=='publish':result=publish(payload)
else:raise RuntimeError('Unknown action')
print(json.dumps(result))
