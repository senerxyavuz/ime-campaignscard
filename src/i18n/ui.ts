/* ============================================================
   IME Clinic Satış Portalı — Çok dilli UI sözlüğü
   Diller: tr (varsayılan), en, ru, es, it
   Sadece ARAYÜZ metinleri burada. Kampanya içeriği src/data/campaigns.ts'de.
   ============================================================ */

export const languages = {
  tr: "Türkçe",
  en: "English",
  ru: "Русский",
  es: "Español",
  it: "Italiano",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";
export const langOrder: Lang[] = ["en", "tr", "ru", "es", "it"];

/** Dil bayrakları (emoji — ileride SVG ile değiştirilebilir) */
export const langFlags: Record<Lang, string> = {
  tr: "🇹🇷",
  en: "🇬🇧",
  ru: "🇷🇺",
  es: "🇪🇸",
  it: "🇮🇹",
};

export const ui = {
  tr: {
    "site.name": "IME Clinic",
    "site.sub": "Satış Portalı",
    "nav.back": "Kampanyalara dön",
    "nav.home": "Ana sayfa",

    "hero.title": "Kampanya Satış Kartları",
    "hero.subtitle":
      "Danışman ekibi için güncel kampanya bilgileri, satış kozları ve hazır WhatsApp şablonları — hepsi tek yerde.",
    "hero.badge": "Ekip İçi Kullanım",

    "section.campaigns": "Kampanyalar",

    "status.active": "Aktif",
    "status.soon": "Yakında",
    "status.paused": "Duraklatıldı",

    "card.price": "Paket Fiyatı",
    "card.deadline": "Kapora Son",
    "card.doctor": "Doktor",
    "card.markets": "Hedef Pazarlar",
    "card.view": "Satış Kartını Görüntüle",
    "card.soon": "Çeviri Hazırlanıyor",
    "card.atBht": "BHT Clinic bünyesinde",

    "detail.date.ad": "Reklam Yayını",
    "detail.date.deposit": "Kapora Son",
    "detail.date.treatment": "Tedavi En Geç",
    "detail.date.stay": "Toplam Kalış",

    "detail.package": "Paket",
    "detail.notIncluded": "Dahil Değil",
    "detail.advantages": "Satış Kozları — Müşteriye Vurgula",
    "detail.rules": "Kritik Satış Kuralları",
    "detail.faq": "Sıkça Sorulan Sorular",
    "detail.whatsapp": "WhatsApp İlk Mesaj Şablonu",
    "detail.whatsapp.hint": "Müşterinin diline göre uyarlayın",
    "detail.urgency": "ACİLİYET",
    "detail.pitch": "ANA CÜMLE",
    "detail.copy": "Kopyala",
    "detail.copied": "Kopyalandı ✓",

    "footer.internal": "Ekip İçi Kullanım",
    "footer.rights": "Tüm hakları saklıdır.",
  },

  en: {
    "site.name": "IME Clinic",
    "site.sub": "Sales Portal",
    "nav.back": "Back to campaigns",
    "nav.home": "Home",

    "hero.title": "Campaign Sales Cards",
    "hero.subtitle":
      "Up-to-date campaign details, sales arguments and ready-to-use WhatsApp templates for the advisor team — all in one place.",
    "hero.badge": "Internal Use Only",

    "section.campaigns": "Campaigns",

    "status.active": "Active",
    "status.soon": "Coming Soon",
    "status.paused": "Paused",

    "card.price": "Package Price",
    "card.deadline": "Deposit Deadline",
    "card.doctor": "Doctor",
    "card.markets": "Target Markets",
    "card.view": "View Sales Card",
    "card.soon": "Translation Pending",
    "card.atBht": "within BHT Clinic",

    "detail.date.ad": "Ad Run",
    "detail.date.deposit": "Deposit Deadline",
    "detail.date.treatment": "Treatment By",
    "detail.date.stay": "Total Stay",

    "detail.package": "Package",
    "detail.notIncluded": "Not Included",
    "detail.advantages": "Sales Arguments — Emphasize to Patient",
    "detail.rules": "Critical Sales Rules",
    "detail.faq": "Frequently Asked Questions",
    "detail.whatsapp": "WhatsApp First-Message Template",
    "detail.whatsapp.hint": "Adapt to the patient's language",
    "detail.urgency": "URGENCY",
    "detail.pitch": "KEY LINE",
    "detail.copy": "Copy",
    "detail.copied": "Copied ✓",

    "footer.internal": "Internal Use Only",
    "footer.rights": "All rights reserved.",
  },

  ru: {
    "site.name": "IME Clinic",
    "site.sub": "Портал продаж",
    "nav.back": "К кампаниям",
    "nav.home": "Главная",

    "hero.title": "Карточки продаж по кампаниям",
    "hero.subtitle":
      "Актуальная информация о кампаниях, аргументы для продаж и готовые шаблоны WhatsApp для команды консультантов — всё в одном месте.",
    "hero.badge": "Для внутреннего использования",

    "section.campaigns": "Кампании",

    "status.active": "Активна",
    "status.soon": "Скоро",
    "status.paused": "Приостановлена",

    "card.price": "Цена пакета",
    "card.deadline": "Срок задатка",
    "card.doctor": "Врач",
    "card.markets": "Целевые рынки",
    "card.view": "Открыть карточку продаж",
    "card.soon": "Перевод готовится",
    "card.atBht": "в составе BHT Clinic",

    "detail.date.ad": "Период рекламы",
    "detail.date.deposit": "Срок задатка",
    "detail.date.treatment": "Лечение до",
    "detail.date.stay": "Всего пребывание",

    "detail.package": "Пакет",
    "detail.notIncluded": "Не включено",
    "detail.advantages": "Аргументы продаж — подчеркнуть пациенту",
    "detail.rules": "Ключевые правила продаж",
    "detail.faq": "Часто задаваемые вопросы",
    "detail.whatsapp": "Шаблон первого сообщения WhatsApp",
    "detail.whatsapp.hint": "Адаптируйте под язык пациента",
    "detail.urgency": "СРОЧНОСТЬ",
    "detail.pitch": "КЛЮЧЕВАЯ ФРАЗА",
    "detail.copy": "Копировать",
    "detail.copied": "Скопировано ✓",

    "footer.internal": "Для внутреннего использования",
    "footer.rights": "Все права защищены.",
  },

  es: {
    "site.name": "IME Clinic",
    "site.sub": "Portal de Ventas",
    "nav.back": "Volver a campañas",
    "nav.home": "Inicio",

    "hero.title": "Fichas de Ventas por Campaña",
    "hero.subtitle":
      "Información actualizada de campañas, argumentos de venta y plantillas de WhatsApp listas para el equipo de asesores — todo en un solo lugar.",
    "hero.badge": "Uso Interno",

    "section.campaigns": "Campañas",

    "status.active": "Activa",
    "status.soon": "Próximamente",
    "status.paused": "Pausada",

    "card.price": "Precio del Paquete",
    "card.deadline": "Fecha Límite Depósito",
    "card.doctor": "Doctor",
    "card.markets": "Mercados Objetivo",
    "card.view": "Ver Ficha de Ventas",
    "card.soon": "Traducción en Preparación",
    "card.atBht": "dentro de BHT Clinic",

    "detail.date.ad": "Periodo del Anuncio",
    "detail.date.deposit": "Fecha Límite Depósito",
    "detail.date.treatment": "Tratamiento Antes de",
    "detail.date.stay": "Estancia Total",

    "detail.package": "Paquete",
    "detail.notIncluded": "No Incluido",
    "detail.advantages": "Argumentos de Venta — Destacar al Paciente",
    "detail.rules": "Reglas Críticas de Venta",
    "detail.faq": "Preguntas Frecuentes",
    "detail.whatsapp": "Plantilla de Primer Mensaje WhatsApp",
    "detail.whatsapp.hint": "Adapte al idioma del paciente",
    "detail.urgency": "URGENCIA",
    "detail.pitch": "FRASE CLAVE",
    "detail.copy": "Copiar",
    "detail.copied": "Copiado ✓",

    "footer.internal": "Uso Interno",
    "footer.rights": "Todos los derechos reservados.",
  },

  it: {
    "site.name": "IME Clinic",
    "site.sub": "Portale Vendite",
    "nav.back": "Torna alle campagne",
    "nav.home": "Home",

    "hero.title": "Schede di Vendita per Campagna",
    "hero.subtitle":
      "Informazioni aggiornate sulle campagne, argomenti di vendita e modelli WhatsApp pronti per il team di consulenti — tutto in un unico posto.",
    "hero.badge": "Solo Uso Interno",

    "section.campaigns": "Campagne",

    "status.active": "Attiva",
    "status.soon": "Prossimamente",
    "status.paused": "In pausa",

    "card.price": "Prezzo del Pacchetto",
    "card.deadline": "Scadenza Acconto",
    "card.doctor": "Medico",
    "card.markets": "Mercati Target",
    "card.view": "Vedi Scheda di Vendita",
    "card.soon": "Traduzione in Preparazione",
    "card.atBht": "all'interno di BHT Clinic",

    "detail.date.ad": "Periodo Annuncio",
    "detail.date.deposit": "Scadenza Acconto",
    "detail.date.treatment": "Trattamento Entro",
    "detail.date.stay": "Soggiorno Totale",

    "detail.package": "Pacchetto",
    "detail.notIncluded": "Non Incluso",
    "detail.advantages": "Argomenti di Vendita — Sottolineare al Paziente",
    "detail.rules": "Regole Critiche di Vendita",
    "detail.faq": "Domande Frequenti",
    "detail.whatsapp": "Modello Primo Messaggio WhatsApp",
    "detail.whatsapp.hint": "Adatta alla lingua del paziente",
    "detail.urgency": "URGENZA",
    "detail.pitch": "FRASE CHIAVE",
    "detail.copy": "Copia",
    "detail.copied": "Copiato ✓",

    "footer.internal": "Solo Uso Interno",
    "footer.rights": "Tutti i diritti riservati.",
  },
} as const;

/** UI çeviri anahtarı tipi (tr referans alınır — tüm diller aynı anahtarlara sahip olmalı) */
export type UIKey = keyof (typeof ui)["tr"];
