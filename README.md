# IME Clinic — Satış Portalı

Ekip içi, çok dilli kampanya satış kartları portalı. Danışman ekibi için güncel kampanya bilgileri, satış kozları, kritik kurallar, SSS ve hazır WhatsApp şablonları — hepsi tek yerde.

**Teknoloji:** Astro 6 · TypeScript · Tailwind v4 · statik çıktı (sunucu gerektirmez)
**Diller:** Türkçe (varsayılan), İngilizce, Rusça, İspanyolca, İtalyanca
**Tasarım:** imeclinic.com/link/ marka dili (Plus Jakarta Sans, IME renk paleti)

---

## Kurulum & Çalıştırma

```bash
npm install        # bağımlılıklar (ilk sefer)
npm run dev        # geliştirme sunucusu → http://localhost:4321
npm run build      # production statik çıktı → dist/
npm run preview    # build'i yerelde önizle
```

`dist/` klasörü tamamen statiktir — herhangi bir statik hosting'e (Vercel, Netlify, Cloudflare Pages, veya imeclinic.com alt dizini) yüklenebilir.

---

## Proje Yapısı

```
src/
├── data/
│   ├── types.ts          # Kampanya tip tanımları (tip-güvenli)
│   └── campaigns.ts       # ★ TÜM KAMPANYA İÇERİĞİ buradadır
├── i18n/
│   ├── ui.ts             # ★ ARAYÜZ ÇEVİRİLERİ (5 dil)
│   └── utils.ts          # dil yardımcıları
├── layouts/
│   └── BaseLayout.astro  # head, font, blob arka plan, header/footer
├── components/
│   ├── Header.astro            # logo + dil seçici
│   ├── Footer.astro
│   ├── LanguageSwitcher.astro  # 5 dil dropdown
│   └── CampaignCard.astro      # ana sayfa kampanya kartı
├── pages/
│   ├── index.astro             # / → /tr/ yönlendirme
│   └── [lang]/
│       ├── index.astro         # dil ana sayfası (kampanya listesi)
│       └── kampanya/[slug].astro  # kampanya detay (satış kartı)
└── styles/
    └── global.css        # tasarım sistemi, tema renkleri, blob

public/
├── ime-clinic-logo.svg   # IME Clinic logosu
└── favicon.svg
```

---

## ✏️ Yeni Kampanya Nasıl Eklenir?

`src/data/campaigns.ts` dosyasını aç, `campaigns` dizisine yeni bir nesne ekle:

```ts
{
  slug: "yeni-kampanya",          // URL'de görünür: /tr/kampanya/yeni-kampanya
  theme: "purple",                 // renk: blue|purple|cyan|orange|green|sky|teal|amber
  icon: "🦷",                      // emoji
  status: "active",                // active | soon | paused
  markets: ["ES", "IT"],           // hedef pazar rozetleri
  doctor: "Op. Dr. ...",
  accreditation: "JCI · TEMOS · ISO",
  hospitalNote: "akrediteli hastane ortamında",
  content: {
    tr: {
      name: "...",
      specialtyTag: "...",
      tagline: "...",              // kartta görünen kısa açıklama
      price: "€...",
      priceNote: "...",
      dates: { ad, deposit, treatment, stay },
      packageItems: [...],         // <strong> kullanılabilir
      notIncluded: [...],
      advantages: [{ title, body }],
      rules: [{ badge: "R1", text }],   // <strong>, <span class="hl"> kullanılabilir
      whatsapp: "...",
      whatsappNotes: [{ type: "yes|warn|no", text }],
      faq: [{ q, a }],
      priceList: { title, rows: [{ label, price, note?, highlight? }], note? },  // opsiyonel
      urgency: "...",
      pitch: "...",
    },
    // en, ru, es, it → onay sonrası eklenir
  },
}
```

Kaydet — kampanya tüm dillerde otomatik listelenir. Çevirisi olmayan dilde kart "çeviri hazırlanıyor" rozeti gösterir, detay Türkçe içeriğe düşer.

---

## 🌍 Çeviri Nasıl Eklenir?

**Arayüz metni** (başlık, buton, etiket): `src/i18n/ui.ts` — ilgili dilin bloğundaki anahtarı düzenle.

**Kampanya içeriği:** `src/data/campaigns.ts` — ilgili kampanyanın `content` nesnesine dil bloğu ekle. Örn. İspanyolca için:

```ts
content: {
  tr: { ... },
  es: {            // tr ile birebir aynı alanlar, çevrilmiş metin
    name: "...",
    // ... tüm alanlar
  },
}
```

Bir dil tamamlandığında, o kampanya o dilde otomatik tam içerikle gösterilir (fallback rozeti kaybolur).

---

## Yayın (Deploy) Notları

Şu an yayın-bağımsız yapılandırıldı (local geliştirme).

**imeclinic.com alt dizinine** yüklenecekse, `astro.config.mjs` içinde:

```js
site: "https://imeclinic.com",
base: "/satis",   // örnek: imeclinic.com/satis
```

ayarlarını aç ve yeniden build al. Tüm asset/link yolları `import.meta.env.BASE_URL` kullandığı için otomatik uyum sağlar.

**Erişim kontrolü:** Şu an portal korumasızdır (ekip içi). Şifre/erişim koruması yayın aşamasında host seviyesinde (Basic Auth) veya bir ara katmanla eklenebilir.

---

_IME Hayat Sağlık Turizmi A.Ş. — Ekip İçi Kullanım_
