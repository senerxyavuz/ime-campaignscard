import hashlib
import io
import json
from pathlib import Path
import tarfile
import tempfile
import unittest

CODE=(Path(__file__).resolve().parents[1]/'ops/smile-remote.py').read_text().split('payload=json.load(sys.stdin)')[0]

class SmilePublishTests(unittest.TestCase):
    def setUp(self):
        self.temp=tempfile.TemporaryDirectory();self.base=Path(self.temp.name).resolve()
        self.ns={};exec(compile(CODE,'smile-remote.py','exec'),self.ns)
        self.root=self.base/'web';self.root.mkdir()
        for locale in ['tr','ru','es','it']:(self.root/locale).mkdir()
        self.ns.update(ROOT=self.root,BACKUPS=self.base/'backups',SHARED_LOCK=self.base/'locks/publish.lock')
        (self.root/'index.php').write_text('main site untouched')
    def tearDown(self):self.temp.cleanup()
    def payload(self,version='a'):
        data={route+'/'+name:(version+route+name).encode() for route in self.ns['ROUTES'] for name in ['index.html','.htaccess']}
        data['lp-assets/all-inclusive-smile/0123456789abcdef/media/plane.webp']=b'plane'
        stream=io.BytesIO()
        with tarfile.open(fileobj=stream,mode='w:gz') as archive:
            for name,value in data.items():
                info=tarfile.TarInfo(name);info.size=len(value);archive.addfile(info,io.BytesIO(value))
        return {'release':'20261103T100000Z-'+('a' if version=='a' else 'b')*12,'commit':'a'*40,'files':{k:hashlib.sha256(v).hexdigest() for k,v in data.items()},'sizes':{k:len(v) for k,v in data.items()},'archiveHex':stream.getvalue().hex(),'baseline':self.ns['collect']()}
    def test_bootstrap_update_and_backup_preserve_main_site(self):
        first=self.ns['publish'](self.payload());self.assertTrue(first['ok'])
        before=(self.root/'all-inclusive-smile/index.html').read_bytes()
        second=self.ns['publish'](self.payload('b'))
        self.assertEqual((Path(second['backup'])/'before/all-inclusive-smile/index.html').read_bytes(),before)
        self.assertEqual((self.root/'index.php').read_text(),'main site untouched')
        self.assertEqual(json.loads((Path(second['backup'])/'manifest.json').read_text())['state'],'complete')
    def test_stale_snapshot_is_rejected_before_writes(self):
        payload=self.payload();folder=self.root/'all-inclusive-smile';folder.mkdir();(folder/'index.html').write_text('other publisher')
        with self.assertRaisesRegex(RuntimeError,'partial|changed'):self.ns['publish'](payload)
        self.assertEqual((folder/'index.html').read_text(),'other publisher')
    def test_out_of_scope_file_and_symlinks_rejected(self):
        payload=self.payload();payload['files']['index.php']='a'*64
        with self.assertRaisesRegex(RuntimeError,'Invalid release'):self.ns['publish'](payload)
        (self.root/'all-inclusive-smile').symlink_to(self.root/'tr',target_is_directory=True)
        with self.assertRaisesRegex(RuntimeError,'Symbolic link'):self.ns['collect']()
    def test_partial_claim_failure_is_recorded_and_does_not_publish_html(self):
        (self.root/'tr').rmdir();payload=self.payload()
        with self.assertRaisesRegex(RuntimeError,'Locale root'):self.ns['publish'](payload)
        manifest=json.loads(next((self.base/'backups').glob('*/manifest.json')).read_text())
        self.assertEqual(manifest['state'],'incomplete')
        self.assertEqual(manifest['claimedRoutes'],['all-inclusive-smile'])
        self.assertFalse((self.root/'all-inclusive-smile/index.html').exists())
    def test_directory_race_target_is_rejected_without_overwrite(self):
        payload=self.payload();publish=self.ns['publish']
        original=self.ns['collect']
        def collect_and_race():
            result=original();folder=self.root/'all-inclusive-smile';folder.mkdir()
            return result
        self.ns['collect']=collect_and_race
        with self.assertRaises(FileExistsError):publish(payload)

if __name__=='__main__':unittest.main()
