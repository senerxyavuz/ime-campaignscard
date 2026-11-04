// All page text, one file per language; en.json is the master.
// Check a language with: node scripts/check-winter-i18n.mjs <lang>
import en from './en.json';
import tr from './tr.json';
import ru from './ru.json';
import pt from './pt.json';
import es from './es.json';
import it from './it.json';
import fr from './fr.json';
import de from './de.json';
import ar from './ar.json';
import pl from './pl.json';

export type SmileText = typeof en;
export type SmileLang = 'en' | 'tr' | 'ru' | 'pt' | 'es' | 'it' | 'fr' | 'de' | 'ar' | 'pl';
export const smileText = { en, tr, ru, pt, es, it, fr, de, ar, pl } as Record<SmileLang, SmileText>;
