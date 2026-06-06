/* ============================================================
   IME Clinic Satış Portalı — Kampanya kaydı (birleştirici)
   Her kampanya kendi dosyasında, 5 dil ile tanımlıdır.
   Yeni kampanya: src/data/campaigns/<slug>.ts oluştur + buraya ekle.
   ============================================================ */

import type { Campaign } from "./types";
import type { Lang } from "@/i18n/ui";
import { smartLens } from "./campaigns/smart-lens";
import { rinoplasti } from "./campaigns/rinoplasti";
import { dental } from "./campaigns/dental";
import { implant } from "./campaigns/implant";

export const campaigns: Campaign[] = [smartLens, rinoplasti, dental, implant];

/** Slug ile kampanya bul */
export function getCampaign(slug: string): Campaign | undefined {
  return campaigns.find((c) => c.slug === slug);
}

/**
 * Kampanyanın bir dildeki içeriğini döndürür.
 * O dilde içerik yoksa { content, isFallback: true } ile TR'ye düşer.
 */
export function getCampaignContent(campaign: Campaign, lang: Lang) {
  const content = campaign.content[lang];
  if (content) return { content, isFallback: false, contentLang: lang };
  const tr = campaign.content.tr;
  return { content: tr, isFallback: true, contentLang: "tr" as Lang };
}
