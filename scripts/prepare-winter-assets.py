"""Import unchanged public media from the verified landing source snapshot."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil

parser = argparse.ArgumentParser()
parser.add_argument('source', type=Path)
args = parser.parse_args()
repo = Path(__file__).resolve().parents[1]
source = args.source.resolve()
output = repo / 'public/winter-smile/media'
output.mkdir(parents=True, exist_ok=True)
provenance = []
items = []

def copy(relative, name=None):
    src = source / 'public' / relative.lstrip('/')
    name = name or src.name
    target = output / name
    shutil.copyfile(src, target)
    sha = hashlib.sha256(target.read_bytes()).hexdigest()
    assert sha == hashlib.sha256(src.read_bytes()).hexdigest()
    provenance.append({'source': relative, 'file': name, 'sha256': sha})
    return name

resources = json.loads((source / 'src/data/dental/resources.json').read_text())
for item in resources['items']:
    category = {'clinic': 1, 'hotel': 2, 'transfers': 2, 'documents': 4}.get(item['category'])
    if category is None:
        continue
    name = copy(item['src'], item['id'] + Path(item['src']).suffix)
    thumb = name if item['src'] == item['thumbnail'] else copy(item['thumbnail'], item['id'] + '-thumb.webp')
    items.append({'id': item['id'], 'category': category, 'src': name, 'thumb': thumb, 'labels': item.get('labels', {}), 'width': item['width'], 'height': item['height']})

master = json.loads((source / 'src/data/dental/en.json').read_text())
for index, (key, _) in enumerate(master['results']['items'], 1):
    name = copy('/lp-assets/dental/results/' + key + '.webp', f'result-{index:02}.webp')
    items.append({'id':f'result-{index:02}', 'category':3, 'src':name, 'thumb':name})

guide = json.loads((source / 'src/data/dental/photo-guide.json').read_text())
guide_names = {
 'front-smile':['Front smile','Önden gülüş','Улыбка спереди','Sonrisa frontal','Sorriso frontale'],
 'right-bite':['Right bite','Sağ kapanış','Прикус справа','Mordida derecha','Morso destro'],
 'lower-arch':['Lower teeth, from above','Alt dişler, üstten','Нижние зубы сверху','Dientes inferiores desde arriba','Denti inferiori dall’alto'],
 'upper-arch':['Upper teeth, from below','Üst dişler, alttan','Верхние зубы снизу','Dientes superiores desde abajo','Denti superiori dal basso'],
}
for item in guide['items']:
    name = copy(item['src'], 'guide-' + item['id'] + '.jpg')
    thumb = copy(item['thumbnail'], 'guide-' + item['id'] + '-thumb.webp')
    labels = {lang:{'title':title} for lang,title in zip(['en','tr','ru','es','it'],guide_names[item['id']])}
    items.append({'id':'guide-'+item['id'], 'category':5, 'src':name, 'thumb':thumb, 'labels':labels})

copy('/lp-assets/dental/november/istanbul-bosphorus-1280.webp', 'hero-1280.webp')
copy('/lp-assets/dental/november/istanbul-bosphorus-640.webp', 'hero-640.webp')
videos=json.loads((source / 'src/data/dental/videos.json').read_text())['items'][:3]
for item in videos:
    for variant in item.get('variants', {'original':item}).values():
        variant['localPoster']=copy(variant['poster'])
        variant['src']='https://www.imeclinic.com'+variant['src']

for font in ['manrope-latin','manrope-latin-ext','manrope-cyrillic']:
    src=source/'assets-source/implant-page-20261029/media'/f'{font}.woff2'
    shutil.copyfile(src,output/f'{font}.woff2')

(repo/'src/data/winter-media.json').write_text(json.dumps({'items':items,'videos':videos},ensure_ascii=False,indent=2)+'\n')
(repo/'public/winter-smile/provenance.json').write_text(json.dumps({'sourceRelease':'20261029T161132Z-cc833b9f5cd9-6a4453b0','files':provenance},ensure_ascii=False,indent=2)+'\n')
print(f'Imported {len(items)} images; unchanged bytes verified for {len(provenance)} files.')
