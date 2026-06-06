// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// IME Clinic Satış Portalı — Astro yapılandırması
// Çok dilli (5 dil), statik çıktı, yayın-bağımsız (base path sonra eklenebilir).
export default defineConfig({
  // Yayın: imeclinic.com/campaignscard
  site: "https://imeclinic.com",
  base: "/campaignscard",

  i18n: {
    // Desteklenen diller: İngilizce (varsayılan açılış), Türkçe, Rusça, İspanyolca, İtalyanca
    locales: ["tr", "en", "ru", "es", "it"],
    defaultLocale: "en",
    routing: {
      // Tüm diller URL'de prefix'li olsun (/tr/, /en/ ...) — tutarlı dil değişimi
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },

  // Statik site üretimi — her yere (alt dizin, subdomain, Vercel/Netlify) taşınır
  output: "static",

  // Geliştirme araç çubuğunu (alt köşedeki Astro toolbar) gizle
  devToolbar: { enabled: false },

  vite: {
    plugins: [tailwindcss()],
  },
});
