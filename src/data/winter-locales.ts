import { smileText } from './winter-i18n';
import type { Lang } from '../i18n/ui';

// The sales portal has five languages; the public page has all of smileText.
export const smileCopy = { en: smileText.en, tr: smileText.tr, ru: smileText.ru, es: smileText.es, it: smileText.it } as Record<Lang, typeof smileText.en>;
