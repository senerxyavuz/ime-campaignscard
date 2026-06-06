/* ============================================================
   IME Clinic Satış Portalı — Kampanya veri tipleri
   ============================================================ */

import type { Lang } from "@/i18n/ui";

/** Kampanya tema rengi (imeclinic.com/link/ gradient paletine karşılık gelir) */
export type Theme =
  | "blue"
  | "purple"
  | "cyan"
  | "orange"
  | "green"
  | "sky"
  | "teal"
  | "amber";

/** Kampanya durumu */
export type Status = "active" | "soon" | "paused";

export interface CampaignDates {
  ad: string; // reklam yayını
  deposit: string; // kapora son tarih
  treatment: string; // tedavi en geç
  stay: string; // toplam kalış
}

export interface Advantage {
  title: string;
  body: string;
}

/** Kural metni sınırlı HTML içerebilir: <strong>, <span class="hl"> */
export interface Rule {
  badge: string; // "R1", "!", ...
  text: string;
}

/** SSS — cevap sınırlı HTML içerebilir */
export interface FaqItem {
  q: string;
  a: string;
}

export interface WhatsappNote {
  type: "yes" | "warn" | "no";
  text: string;
}

export interface PriceRow {
  label: string;
  price: string;
  note?: string;
  highlight?: boolean; // kampanya satırı vurgusu
}

/** Tek bir dildeki kampanya içeriği */
export interface CampaignContent {
  name: string;
  specialtyTag: string; // branş / tedavi etiketi
  hospitalNote?: string; // "akrediteli hastane ortamında" — dile göre çevrilir
  tagline: string; // kartta görünen kısa açıklama
  price: string; // "2.600€"
  priceNote: string;
  dates: CampaignDates;
  packageItems: string[]; // sınırlı HTML
  notIncluded: string[];
  advantages: Advantage[];
  rules: Rule[];
  whatsapp: string;
  whatsappNotes?: WhatsappNote[];
  faq: FaqItem[];
  priceList?: {
    title: string;
    rows: PriceRow[];
    note?: string;
  };
  urgency: string; // sınırlı HTML
  pitch: string; // sınırlı HTML
}

/** Kampanya — dilden bağımsız meta + dile bağlı içerik */
export interface Campaign {
  slug: string;
  theme: Theme;
  icon: string; // emoji
  status: Status;
  markets: string[]; // ["ES", "IT"]
  doctor: string;
  accreditation?: string; // "JCI · TEMOS · ISO" (evrensel, çevrilmez)
  /** Her dil için içerik. Eksik dil → kart "çeviri hazırlanıyor" gösterir, detay TR'ye düşer. */
  content: Partial<Record<Lang, CampaignContent>>;
}
