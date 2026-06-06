/* ============================================================
   IME Clinic Satış Portalı — i18n yardımcıları
   ============================================================ */

import { ui, defaultLang, languages, type Lang, type UIKey } from "./ui";

/** URL'den aktif dili çıkarır (/en/... → "en"). Bulunamazsa varsayılan dil. */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang && lang in ui) return lang as Lang;
  return defaultLang;
}

/**
 * Verilen dil için çeviri fonksiyonu döndürür.
 * Anahtar o dilde yoksa varsayılan dile (tr) düşer — eksik çeviri sayfayı kırmaz.
 */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Bir yolu hedef dile çevirir (dil değiştirici için). Base path'e duyarlıdır. */
export function localizePath(path: string, lang: Lang): string {
  // base "/" ise "" olur; "/campaignscard/" ise "/campaignscard" olur
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  // base prefix'ini path'ten çıkar
  let rel = path;
  if (base && rel.startsWith(base)) rel = rel.slice(base.length) || "/";
  // baştaki dil segmentini temizle
  const clean = rel.replace(/^\/(tr|en|ru|es|it)(?=\/|$)/, "");
  const normalized = clean === "" ? "/" : clean;
  return `${base}/${lang}${normalized === "/" ? "/" : normalized}`;
}

/** Dil listesini (kod + görünen ad) sıralı döndürür. */
export function getLanguageList(): { code: Lang; label: string }[] {
  return (Object.keys(languages) as Lang[]).map((code) => ({
    code,
    label: languages[code],
  }));
}
