import type { Campaign } from "../types";

// Smart Lens — Göz İçi Lens kampanyası (5 dil)
export const smartLens: Campaign = {
  slug: "smart-lens",
  theme: "blue",
  icon: "👁️",
  status: "active",
  markets: ["ES", "IT"],
  doctor: "Uzm. Dr. Önder",
  accreditation: "JCI · TEMOS · ISO",
  content: {
    // ────────────────────────────────────────────────────────
    // TÜRKÇE (kaynak — campaigns.ts'ten birebir, sadece hospitalNote eklendi)
    // ────────────────────────────────────────────────────────
    tr: {
      name: "Smart Lens",
      specialtyTag: "Göz İçi Lens Tedavisi",
      hospitalNote: "akrediteli hastane ortamında",
      tagline:
        "Çift göz göz içi lens ameliyatı. 3 gece Ramada Encore otel + tüm transferler dahil.",
      price: "2.600€",
      priceNote:
        "her iki göz dahil · Alman teknolojisi premium trifokal göz içi lens",
      dates: {
        ad: "Haz–Tem 2026",
        deposit: "31 Temmuz",
        treatment: "30 Eylül",
        stay: "3 gece İstanbul",
      },
      packageItems: [
        "Smart Lens tedavisi — <strong>her iki göz</strong>",
        "Alman teknolojisi premium trifokal göz içi lens (yakın + orta + uzak)",
        "Uzm. Dr. Önder, Göz Hastalıkları Uzmanı — <strong>IME Clinic</strong>",
        "<strong>3 gece Ramada Encore Basınexpress</strong> otel konaklama",
        "Havalimanı ↔ otel ↔ klinik tüm transferleri",
        "Online ön değerlendirme (reçete bazlı)",
        "Operasyon öncesi tam göz muayenesi",
        "Ameliyat sonrası kontrol",
        "Hasta danışmanı — süreç boyunca tek temas",
      ],
      notIncluded: [
        "Uçak bileti",
        "Ekstra gece konaklama",
        "Vize / seyahat sigortası",
      ],
      advantages: [
        {
          title: "Hastane ortamında operasyon",
          body: '"Göz merkezi" değil — akrediteli tam hastane içinde cerrahi. Anestezi uzmanı, yoğun bakım, acil altyapı hazır. "Ya bir şey olursa?" korkusunu yok eder. En güçlü güven kozu.',
        },
        {
          title: "JCI · TEMOS · ISO akreditasyonu",
          body: "Uluslararası hasta güvenliği standartları. Çoğu rakip bu belgelerden birini bile taşımaz.",
        },
        {
          title: "Uzm. Dr. Önder ile birebir",
          body: "Ön değerlendirme, operasyon ve kontrol aynı doktorla. Asistan değil, uzman.",
        },
        {
          title: "Alman teknolojisi premium trifokal lens",
          body: "Yakın (okuma), orta (ekran) ve uzak mesafeyi tek lensle hedefler.",
        },
        {
          title: "Otel + transferler dahil",
          body: "Ramada Encore Basınexpress konaklama ve tüm transferler pakette. Hasta sadece uçağını alır, gerisini biz yönetiriz.",
        },
        {
          title: "Ücretsiz online ön değerlendirme",
          body: "Reçetesini gönderir, uygun mu öğrenir — uçağa atlamadan, kendi dilinde danışmanlıkla karar verir.",
        },
        {
          title: "Hızlı iyileşme, kısa konaklama",
          body: "Genellikle ertesi gün belirgin görüş iyileşmesi.",
        },
      ],
      rules: [
        {
          badge: "R1",
          text: '<span class="hl">2.600€ her iki göz için</span> — fiyat ön değerlendirme sonrası kesinleşir.',
        },
        {
          badge: "R2",
          text: "Uçak <strong>dahil değil</strong> — ilk mesajdan söyle, sürpriz çıkarma.",
        },
        {
          badge: "R3",
          text: "Uygunluk <strong>doktor değerlendirmesine bağlı</strong> — herkes Smart Lens adayı değil.",
        },
        {
          badge: "R4",
          text: "<strong>40 yaş altı sağlıklı miyop → LASIK'e yönlendir.</strong>",
        },
        {
          badge: "R5",
          text: '"Gözlük tamamen bitecek mi?" → <span class="hl">Garantili yanıt verme.</span> "Büyük ölçüde azalır" de.',
        },
        {
          badge: "R6",
          text: 'Fiyat kilidi: <span class="hl">€250 kapora</span> — 31 Temmuz\'a kadar. Tedavi en geç 30 Eylül.',
        },
        {
          badge: "!",
          text: 'Tanıtımda lens marka adı yazılmaz — <strong>"Alman teknolojisi"</strong> de.',
        },
      ],
      whatsapp:
        '"Merhaba [Ad]! IME Clinic\'ten [Koordinatör Adı]. Smart Lens tedavisi için yazdığınız için teşekkürler. Size özel ücretsiz değerlendirme yapabilmem için: kaç yaşındasınız ve okuma, uzak görüş ya da her ikisi için mi gözlük kullanıyorsunuz? Reçeteniz varsa bir fotoğrafını WhatsApp\'tan gönderin, hemen inceleyelim ve kendi dilinizde tedavi planınızı çıkaralım. Bağlayıcı değil."',
      whatsappNotes: [
        {
          type: "yes",
          text: "<strong>Reçete gönderenler</strong> → konsültasyon için öncelikli sıraya al",
        },
        {
          type: "warn",
          text: '<strong>40 yaş altı sağlıklı miyop</strong> → "LASIK\'i de değerlendirelim" de, LASIK funnelına aktar',
        },
        {
          type: "warn",
          text: "<strong>Katarakt / glokom belirtisi</strong> → doktora ilet, özel değerlendirme",
        },
      ],
      faq: [
        {
          q: '"Yurtdışında göz ameliyatı güvenli mi?"',
          a: "IME Clinic, <strong>JCI · TEMOS · ISO</strong> akrediteli hastane ortamında çalışır. Klinik değil, tam hastane güvencesi.",
        },
        {
          q: '"Hangi lens kullanılıyor?"',
          a: "Premium trifokal göz içi lens — yakın, orta ve uzağı tek lensle hedefler. Marka ve model detayı değerlendirmede doktor açıklar.",
        },
        {
          q: '"Çift göz mü tek göz mü?"',
          a: "<strong>Her iki göz dahil.</strong> 2.600€ iki göz içindir.",
        },
        {
          q: '"Ben uygun muyum?"',
          a: "Reçete + doktor değerlendirmesiyle netleşir. Reçeteni WhatsApp'tan gönder, ilk adımı atalım.",
        },
        {
          q: '"Uçak dahil değil mi?"',
          a: "Hayır — uçak hariç. Otel (3 gece Ramada Encore Basınexpress) ve tüm transferler dahil. Bu ayrımı baştan söylüyoruz.",
        },
        {
          q: '"Gözlük tamamen bitecek mi?"',
          a: "Smart Lens gözlük ihtiyacını büyük ölçüde azaltır ya da ortadan kaldırır. Kesin sonuç vakaya göre değişir; doktor değerlendirmesi sonrası netleşir.",
        },
        {
          q: '"Ameliyat ağrılı mı?"',
          a: "Damla anestezi ile gerçekleştirilir — operasyon sırasında ağrı yok. Sonrasında kısa süreli yabancı cisim hissi olabilir, geçer.",
        },
        {
          q: '"Ne zaman görmeye başlarım?"',
          a: "Genellikle ertesi gün belirgin iyileşme. Tam stabil görmek birkaç hafta alabilir.",
        },
        {
          q: '"40 yaşın altındayım, uygun muyum?"',
          a: "Smart Lens genellikle 45+ presbiyopi/katarakt vakası için idealdir. 40 altı sağlıklı miyoplar için önce LASIK değerlendiririz.",
        },
        {
          q: '"Reçetemi nasıl göndereceğim?"',
          a: "WhatsApp'tan fotoğraf veya yazılı reçete. Yaşınızı ve kullanım sürenizi de ekleyin.",
        },
        {
          q: '"Kapora ne kadar?"',
          a: "<strong>€250</strong> — yatırınca fiyat ve tarih kilitlenir. Tedavi fiyatından düşülür.",
        },
        {
          q: '"3 gece neden zorunlu?"',
          a: "Operasyon günü + ertesi gün postop kontrol + güvenli uçuş onayı. Daha erken dönüş tıbben önerilmez.",
        },
        {
          q: '"Eylül\'de gelebilir miyim?"',
          a: "Evet — tedavi son tarihi <strong>30 Eylül</strong>. Bu tarihten sonra kampanya kapsamında rezervasyon alınmaz.",
        },
      ],
      priceList: {
        title: "Göz Tedavileri Fiyat Listesi — Satış Ekibi · Yayımlanmaz",
        rows: [
          {
            label: "Smart Lens / Alsanza (2 göz)",
            price: "~3.222€",
            note: "Kampanya paketi: 2.600€ (otel + transfer dahil)",
            highlight: true,
          },
          { label: "Smart Lens / Rayner (2 göz)", price: "~3.778€" },
          { label: "Smart Lens / Alcon (2 göz)", price: "~4.444€" },
          {
            label: "Transepithelial PRK (2 göz)",
            price: "~1.222€",
            note: "40 yaş altı miyop adayı",
          },
          {
            label: "Wavefront Femto LASIK (2 göz)",
            price: "~1.333€",
            note: "40 yaş altı miyop adayı",
          },
          {
            label: "Toric Lens (2 göz)",
            price: "~2.667€",
            note: "Astigmat + presbiyopi",
          },
        ],
        note: "Fiyatlar liste fiyatıdır. Marka adı tanıtımda kullanılmaz.",
      },
      urgency:
        '"31 Temmuz\'a kadar <strong>€250 kapora</strong> ile fiyatınızı kilitleyin — tedavi en geç 30 Eylül, sonrası kapalı."',
      pitch:
        '"Smart Lens tedaviniz <strong>IME Clinic</strong>\'te <strong>Uzm. Dr. Önder</strong> tarafından planlanır — her iki göz dahil, <strong>3 gece Ramada Encore otel + transferlerle 2.600€</strong>. Uçak hariç."',
    },

    // ────────────────────────────────────────────────────────
    // ENGLISH
    // ────────────────────────────────────────────────────────
    en: {
      name: "Smart Lens",
      specialtyTag: "Intraocular Lens Treatment",
      hospitalNote: "in an accredited hospital setting",
      tagline:
        "Intraocular lens surgery for both eyes. 3 nights at the Ramada Encore hotel + all transfers included.",
      price: "2.600€",
      priceNote:
        "both eyes included · German-technology premium trifocal intraocular lens",
      dates: {
        ad: "Jun–Jul 2026",
        deposit: "31 July",
        treatment: "Sep 30",
        stay: "3 nights Istanbul",
      },
      packageItems: [
        "Smart Lens treatment — <strong>both eyes</strong>",
        "German-technology premium trifocal intraocular lens (near + intermediate + distance)",
        "Uzm. Dr. Önder, Ophthalmology Specialist — <strong>IME Clinic</strong>",
        "<strong>3 nights at Ramada Encore Basınexpress</strong> hotel accommodation",
        "All airport ↔ hotel ↔ clinic transfers",
        "Online pre-assessment (based on your prescription)",
        "Full eye examination before surgery",
        "Post-operative check-up",
        "Patient coordinator — a single point of contact throughout",
      ],
      notIncluded: [
        "Flight ticket",
        "Extra night accommodation",
        "Visa / travel insurance",
      ],
      advantages: [
        {
          title: "Surgery in a hospital setting",
          body: 'Not an "eye centre" — surgery inside a fully accredited hospital. Anaesthesiologist, intensive care and emergency infrastructure ready. It removes the "what if something goes wrong?" fear. The strongest trust card.',
        },
        {
          title: "JCI · TEMOS · ISO accreditation",
          body: "International patient-safety standards. Most competitors hold not even one of these certificates.",
        },
        {
          title: "One-to-one with Uzm. Dr. Önder",
          body: "Pre-assessment, surgery and check-up with the same doctor. A specialist, not an assistant.",
        },
        {
          title: "German-technology premium trifocal lens",
          body: "Targets near (reading), intermediate (screen) and distance vision with a single lens.",
        },
        {
          title: "Hotel + transfers included",
          body: "Ramada Encore Basınexpress accommodation and all transfers are in the package. The patient only books their flight; we handle the rest.",
        },
        {
          title: "Free online pre-assessment",
          body: "Send your prescription, find out whether you are eligible — and decide with guidance in your own language before getting on a plane.",
        },
        {
          title: "Fast recovery, short stay",
          body: "Usually a noticeable improvement in vision by the next day.",
        },
      ],
      rules: [
        {
          badge: "R1",
          text: '<span class="hl">2.600€ for both eyes</span> — the price is confirmed after the pre-assessment.',
        },
        {
          badge: "R2",
          text: "Flight is <strong>not included</strong> — state it in the first message, no surprises.",
        },
        {
          badge: "R3",
          text: "Eligibility <strong>depends on the doctor's assessment</strong> — not everyone is a Smart Lens candidate.",
        },
        {
          badge: "R4",
          text: "<strong>Healthy myopia under 40 → refer to LASIK.</strong>",
        },
        {
          badge: "R5",
          text: '"Will I be completely free of glasses?" → <span class="hl">Do not give a guaranteed answer.</span> Say "it is greatly reduced".',
        },
        {
          badge: "R6",
          text: 'Price lock: <span class="hl">€250 deposit</span> — until 31 July. Treatment by Sep 30 at the latest.',
        },
        {
          badge: "!",
          text: 'The lens brand name is not written in promotions — say <strong>"German technology"</strong>.',
        },
      ],
      whatsapp:
        '"Hello [Name]! This is [Coordinator Name] from IME Clinic. Thank you for reaching out about the Smart Lens treatment. So I can prepare a free personalised assessment for you: how old are you, and do you wear glasses for reading, distance vision, or both? If you have your prescription, send a photo over WhatsApp and we will review it right away and draw up your treatment plan in your own language. No obligation."',
      whatsappNotes: [
        {
          type: "yes",
          text: "<strong>Those who send a prescription</strong> → move to the priority queue for consultation",
        },
        {
          type: "warn",
          text: '<strong>Healthy myopia under 40</strong> → say "let\'s also consider LASIK" and move them into the LASIK funnel',
        },
        {
          type: "warn",
          text: "<strong>Signs of cataract / glaucoma</strong> → refer to the doctor for a special assessment",
        },
      ],
      faq: [
        {
          q: '"Is eye surgery abroad safe?"',
          a: "IME Clinic operates in a <strong>JCI · TEMOS · ISO</strong> accredited hospital setting. Not a clinic — the assurance of a full hospital.",
        },
        {
          q: '"Which lens is used?"',
          a: "A premium trifocal intraocular lens — it targets near, intermediate and distance vision with a single lens. The doctor explains the brand and model details during the assessment.",
        },
        {
          q: '"Both eyes or one eye?"',
          a: "<strong>Both eyes included.</strong> 2.600€ is for both eyes.",
        },
        {
          q: '"Am I eligible?"',
          a: "It becomes clear with your prescription + the doctor's assessment. Send your prescription over WhatsApp and let's take the first step.",
        },
        {
          q: '"Isn\'t the flight included?"',
          a: "No — the flight is excluded. The hotel (3 nights at Ramada Encore Basınexpress) and all transfers are included. We make this distinction clear from the start.",
        },
        {
          q: '"Will I be completely free of glasses?"',
          a: "Smart Lens greatly reduces or eliminates the need for glasses. The exact outcome varies by case; it becomes clear after the doctor's assessment.",
        },
        {
          q: '"Is the surgery painful?"',
          a: "It is performed with drop anaesthesia — no pain during the operation. Afterwards there may be a brief foreign-body sensation, which passes.",
        },
        {
          q: '"When will I start to see?"',
          a: "Usually a noticeable improvement the next day. Fully stable vision can take a few weeks.",
        },
        {
          q: '"I am under 40, am I eligible?"',
          a: "Smart Lens is generally ideal for 45+ presbyopia/cataract cases. For healthy myopia under 40 we first consider LASIK.",
        },
        {
          q: '"How do I send my prescription?"',
          a: "A photo or a written prescription over WhatsApp. Please also include your age and how long you have been wearing glasses.",
        },
        {
          q: '"How much is the deposit?"',
          a: "<strong>€250</strong> — once paid, the price and date are locked. It is deducted from the treatment price.",
        },
        {
          q: '"Why are 3 nights required?"',
          a: "Surgery day + next-day post-op check + safe-to-fly approval. An earlier return is not medically recommended.",
        },
        {
          q: '"Can I come in September?"',
          a: "Yes — the treatment deadline is <strong>Sep 30</strong>. No bookings are taken within the campaign after this date.",
        },
      ],
      priceList: {
        title: "Eye Treatments Price List — Sales Team · Not For Publication",
        rows: [
          {
            label: "Smart Lens / Alsanza (2 eyes)",
            price: "~3.222€",
            note: "Campaign package: 2.600€ (hotel + transfer included)",
            highlight: true,
          },
          { label: "Smart Lens / Rayner (2 eyes)", price: "~3.778€" },
          { label: "Smart Lens / Alcon (2 eyes)", price: "~4.444€" },
          {
            label: "Transepithelial PRK (2 eyes)",
            price: "~1.222€",
            note: "Myopia candidate under 40",
          },
          {
            label: "Wavefront Femto LASIK (2 eyes)",
            price: "~1.333€",
            note: "Myopia candidate under 40",
          },
          {
            label: "Toric Lens (2 eyes)",
            price: "~2.667€",
            note: "Astigmatism + presbyopia",
          },
        ],
        note: "Prices are list prices. The brand name is not used in promotions.",
      },
      urgency:
        '"Lock in your price with a <strong>€250 deposit</strong> until 31 July — treatment by Sep 30 at the latest, closed afterwards."',
      pitch:
        '"Your Smart Lens treatment is planned by <strong>Uzm. Dr. Önder</strong> at <strong>IME Clinic</strong> — both eyes included, <strong>2.600€ with 3 nights at the Ramada Encore hotel + transfers</strong>. Flight excluded."',
    },

    // ────────────────────────────────────────────────────────
    // РУССКИЙ
    // ────────────────────────────────────────────────────────
    ru: {
      name: "Smart Lens",
      specialtyTag: "Лечение интраокулярными линзами",
      hospitalNote: "в аккредитованной больничной среде",
      tagline:
        "Операция по установке интраокулярных линз на оба глаза. 3 ночи в отеле Ramada Encore + все трансферы включены.",
      price: "2.600€",
      priceNote:
        "оба глаза включены · премиальная трифокальная интраокулярная линза немецкой технологии",
      dates: {
        ad: "июнь–июль 2026",
        deposit: "31 июля",
        treatment: "30 сентября",
        stay: "3 ночи Стамбул",
      },
      packageItems: [
        "Лечение Smart Lens — <strong>оба глаза</strong>",
        "Премиальная трифокальная интраокулярная линза немецкой технологии (ближнее + среднее + дальнее зрение)",
        "Uzm. Dr. Önder, врач-офтальмолог — <strong>IME Clinic</strong>",
        "<strong>3 ночи в отеле Ramada Encore Basınexpress</strong>",
        "Все трансферы аэропорт ↔ отель ↔ клиника",
        "Онлайн предварительная оценка (на основе рецепта)",
        "Полное обследование глаз перед операцией",
        "Послеоперационный контроль",
        "Персональный координатор — единый контакт на протяжении всего процесса",
      ],
      notIncluded: [
        "Авиабилет",
        "Дополнительная ночь проживания",
        "Виза / страховка путешественника",
      ],
      advantages: [
        {
          title: "Операция в больничной среде",
          body: 'Не «глазной центр», а хирургия внутри полностью аккредитованной больницы. Анестезиолог, реанимация и экстренная инфраструктура наготове. Это снимает страх «а вдруг что-то случится?». Самый сильный аргумент доверия.',
        },
        {
          title: "Аккредитация JCI · TEMOS · ISO",
          body: "Международные стандарты безопасности пациентов. Большинство конкурентов не имеют даже одного из этих сертификатов.",
        },
        {
          title: "Один на один с Uzm. Dr. Önder",
          body: "Предварительная оценка, операция и контроль — с одним и тем же врачом. Не ассистент, а специалист.",
        },
        {
          title: "Премиальная трифокальная линза немецкой технологии",
          body: "Одна линза охватывает ближнее (чтение), среднее (экран) и дальнее зрение.",
        },
        {
          title: "Отель + трансферы включены",
          body: "Проживание в Ramada Encore Basınexpress и все трансферы входят в пакет. Пациент берёт только авиабилет, остальное берём на себя мы.",
        },
        {
          title: "Бесплатная онлайн предварительная оценка",
          body: "Пришлите рецепт, узнайте, подходите ли вы — и примите решение с консультацией на вашем языке, не садясь в самолёт.",
        },
        {
          title: "Быстрое восстановление, короткое пребывание",
          body: "Обычно заметное улучшение зрения уже на следующий день.",
        },
      ],
      rules: [
        {
          badge: "R1",
          text: '<span class="hl">2.600€ за оба глаза</span> — цена окончательно подтверждается после предварительной оценки.',
        },
        {
          badge: "R2",
          text: "Авиабилет <strong>не включён</strong> — скажите об этом в первом сообщении, без сюрпризов.",
        },
        {
          badge: "R3",
          text: "Пригодность <strong>зависит от оценки врача</strong> — не каждый является кандидатом на Smart Lens.",
        },
        {
          badge: "R4",
          text: "<strong>Здоровая миопия до 40 лет → направьте на LASIK.</strong>",
        },
        {
          badge: "R5",
          text: '«Полностью ли я избавлюсь от очков?» → <span class="hl">Не давайте гарантированного ответа.</span> Скажите «значительно уменьшится».',
        },
        {
          badge: "R6",
          text: 'Фиксация цены: <span class="hl">депозит €250</span> — до 31 июля. Лечение не позднее 30 сентября.',
        },
        {
          badge: "!",
          text: 'В рекламе название бренда линзы не указывается — говорите <strong>«немецкая технология»</strong>.',
        },
      ],
      whatsapp:
        '"Здравствуйте, [Имя]! Это [Имя координатора] из IME Clinic. Спасибо, что написали по поводу лечения Smart Lens. Чтобы я мог подготовить для вас бесплатную персональную оценку: сколько вам лет и носите ли вы очки для чтения, для дали или для того и другого? Если у вас есть рецепт, пришлите его фото в WhatsApp — мы сразу его изучим и составим ваш план лечения на вашем языке. Без обязательств."',
      whatsappNotes: [
        {
          type: "yes",
          text: "<strong>Приславших рецепт</strong> → поставьте в приоритетную очередь на консультацию",
        },
        {
          type: "warn",
          text: '<strong>Здоровая миопия до 40 лет</strong> → скажите «давайте также рассмотрим LASIK» и переведите в воронку LASIK',
        },
        {
          type: "warn",
          text: "<strong>Признаки катаракты / глаукомы</strong> → передайте врачу для специальной оценки",
        },
      ],
      faq: [
        {
          q: '"Безопасна ли операция на глазах за границей?"',
          a: "IME Clinic работает в <strong>JCI · TEMOS · ISO</strong> аккредитованной больничной среде. Не клиника, а гарантия полноценной больницы.",
        },
        {
          q: '"Какая линза используется?"',
          a: "Премиальная трифокальная интраокулярная линза — одна линза охватывает ближнее, среднее и дальнее зрение. Бренд и модель врач объяснит во время оценки.",
        },
        {
          q: '"Оба глаза или один глаз?"',
          a: "<strong>Оба глаза включены.</strong> 2.600€ — за оба глаза.",
        },
        {
          q: '"Подхожу ли я?"',
          a: "Это станет ясно после рецепта + оценки врача. Пришлите рецепт в WhatsApp, сделаем первый шаг.",
        },
        {
          q: '"Разве авиабилет не включён?"',
          a: "Нет — авиабилет не входит. Отель (3 ночи Ramada Encore Basınexpress) и все трансферы включены. Мы говорим об этом сразу.",
        },
        {
          q: '"Полностью ли я избавлюсь от очков?"',
          a: "Smart Lens значительно уменьшает или устраняет потребность в очках. Точный результат зависит от случая; он становится ясен после оценки врача.",
        },
        {
          q: '"Болезненна ли операция?"',
          a: "Проводится под капельной анестезией — во время операции боли нет. После может быть кратковременное ощущение инородного тела, оно проходит.",
        },
        {
          q: '"Когда я начну видеть?"',
          a: "Обычно заметное улучшение уже на следующий день. Полностью стабильное зрение может занять несколько недель.",
        },
        {
          q: '"Мне меньше 40 лет, подхожу ли я?"',
          a: "Smart Lens обычно идеален для случаев пресбиопии/катаракты 45+. Для здоровой миопии до 40 лет мы сначала рассматриваем LASIK.",
        },
        {
          q: '"Как мне прислать рецепт?"',
          a: "Фото или письменный рецепт в WhatsApp. Также укажите свой возраст и как долго вы носите очки.",
        },
        {
          q: '"Сколько составляет депозит?"',
          a: "<strong>€250</strong> — после оплаты цена и дата фиксируются. Он вычитается из стоимости лечения.",
        },
        {
          q: '"Почему 3 ночи обязательны?"',
          a: "День операции + послеоперационный контроль на следующий день + разрешение на безопасный перелёт. Более ранний отъезд медицински не рекомендуется.",
        },
        {
          q: '"Могу ли я приехать в сентябре?"',
          a: "Да — крайний срок лечения <strong>30 сентября</strong>. После этой даты бронирование в рамках кампании не принимается.",
        },
      ],
      priceList: {
        title: "Прайс-лист глазных лечений — Отдел продаж · Не публикуется",
        rows: [
          {
            label: "Smart Lens / Alsanza (2 глаза)",
            price: "~3.222€",
            note: "Пакет кампании: 2.600€ (отель + трансфер включены)",
            highlight: true,
          },
          { label: "Smart Lens / Rayner (2 глаза)", price: "~3.778€" },
          { label: "Smart Lens / Alcon (2 глаза)", price: "~4.444€" },
          {
            label: "Transepithelial PRK (2 глаза)",
            price: "~1.222€",
            note: "Кандидат с миопией до 40 лет",
          },
          {
            label: "Wavefront Femto LASIK (2 глаза)",
            price: "~1.333€",
            note: "Кандидат с миопией до 40 лет",
          },
          {
            label: "Toric Lens (2 глаза)",
            price: "~2.667€",
            note: "Астигматизм + пресбиопия",
          },
        ],
        note: "Цены являются прайсовыми. Название бренда в рекламе не используется.",
      },
      urgency:
        '"Зафиксируйте свою цену с <strong>депозитом €250</strong> до 31 июля — лечение не позднее 30 сентября, после закрыто."',
      pitch:
        '"Ваше лечение Smart Lens планирует <strong>Uzm. Dr. Önder</strong> в <strong>IME Clinic</strong> — оба глаза включены, <strong>2.600€ с 3 ночами в отеле Ramada Encore + трансферами</strong>. Авиабилет не входит."',
    },

    // ────────────────────────────────────────────────────────
    // ESPAÑOL
    // ────────────────────────────────────────────────────────
    es: {
      name: "Smart Lens",
      specialtyTag: "Tratamiento con lente intraocular",
      hospitalNote: "en un entorno hospitalario acreditado",
      tagline:
        "Cirugía de lente intraocular para ambos ojos. 3 noches en el hotel Ramada Encore + todos los traslados incluidos.",
      price: "2.600€",
      priceNote:
        "ambos ojos incluidos · lente intraocular trifocal premium de tecnología alemana",
      dates: {
        ad: "Jun–Jul 2026",
        deposit: "31 julio",
        treatment: "30 sep",
        stay: "3 noches Estambul",
      },
      packageItems: [
        "Tratamiento Smart Lens — <strong>ambos ojos</strong>",
        "Lente intraocular trifocal premium de tecnología alemana (cerca + intermedia + lejos)",
        "Uzm. Dr. Önder, especialista en Oftalmología — <strong>IME Clinic</strong>",
        "<strong>3 noches en el hotel Ramada Encore Basınexpress</strong>",
        "Todos los traslados aeropuerto ↔ hotel ↔ clínica",
        "Evaluación previa online (basada en tu graduación)",
        "Examen ocular completo antes de la operación",
        "Control postoperatorio",
        "Coordinador del paciente — un único punto de contacto durante todo el proceso",
      ],
      notIncluded: [
        "Billete de avión",
        "Noche de alojamiento adicional",
        "Visado / seguro de viaje",
      ],
      advantages: [
        {
          title: "Operación en un entorno hospitalario",
          body: 'No un «centro oftalmológico», sino cirugía dentro de un hospital totalmente acreditado. Anestesiólogo, cuidados intensivos e infraestructura de urgencias listos. Elimina el miedo de «¿y si pasa algo?». La baza de confianza más fuerte.',
        },
        {
          title: "Acreditación JCI · TEMOS · ISO",
          body: "Estándares internacionales de seguridad del paciente. La mayoría de los competidores no tienen ni siquiera uno de estos certificados.",
        },
        {
          title: "Cara a cara con Uzm. Dr. Önder",
          body: "Evaluación previa, operación y control con el mismo médico. Un especialista, no un asistente.",
        },
        {
          title: "Lente trifocal premium de tecnología alemana",
          body: "Cubre la visión de cerca (lectura), intermedia (pantalla) y de lejos con una sola lente.",
        },
        {
          title: "Hotel + traslados incluidos",
          body: "El alojamiento en Ramada Encore Basınexpress y todos los traslados están en el paquete. El paciente solo reserva su vuelo; del resto nos encargamos nosotros.",
        },
        {
          title: "Evaluación previa online gratuita",
          body: "Envía tu graduación, descubre si eres apto — y decide con asesoramiento en tu propio idioma antes de subir a un avión.",
        },
        {
          title: "Recuperación rápida, estancia corta",
          body: "Por lo general, una mejora notable de la visión al día siguiente.",
        },
      ],
      rules: [
        {
          badge: "R1",
          text: '<span class="hl">2.600€ por ambos ojos</span> — el precio se confirma tras la evaluación previa.',
        },
        {
          badge: "R2",
          text: "El vuelo <strong>no está incluido</strong> — dilo en el primer mensaje, sin sorpresas.",
        },
        {
          badge: "R3",
          text: "La idoneidad <strong>depende de la evaluación del médico</strong> — no todos son candidatos a Smart Lens.",
        },
        {
          badge: "R4",
          text: "<strong>Miopía sana menor de 40 → deriva a LASIK.</strong>",
        },
        {
          badge: "R5",
          text: '«¿Me libraré por completo de las gafas?» → <span class="hl">No des una respuesta garantizada.</span> Di «se reduce en gran medida».',
        },
        {
          badge: "R6",
          text: 'Bloqueo de precio: <span class="hl">depósito de €250</span> — hasta el 31 julio. Tratamiento como muy tarde el 30 sep.',
        },
        {
          badge: "!",
          text: 'En la promoción no se escribe la marca de la lente — di <strong>«tecnología alemana»</strong>.',
        },
      ],
      whatsapp:
        '"¡Hola [Nombre]! Soy [Nombre del coordinador] de IME Clinic. Gracias por escribir sobre el tratamiento Smart Lens. Para poder prepararte una evaluación gratuita y personalizada: ¿qué edad tienes y usas gafas para leer, para ver de lejos o para ambas cosas? Si tienes tu graduación, envía una foto por WhatsApp y la revisaremos enseguida para elaborar tu plan de tratamiento en tu propio idioma. Sin compromiso."',
      whatsappNotes: [
        {
          type: "yes",
          text: "<strong>Quienes envían su graduación</strong> → ponlos en la cola prioritaria para la consulta",
        },
        {
          type: "warn",
          text: '<strong>Miopía sana menor de 40</strong> → di «valoremos también LASIK» y pásalos al embudo de LASIK',
        },
        {
          type: "warn",
          text: "<strong>Signos de catarata / glaucoma</strong> → deriva al médico para una evaluación especial",
        },
      ],
      faq: [
        {
          q: '"¿Es segura la cirugía ocular en el extranjero?"',
          a: "IME Clinic opera en un entorno hospitalario acreditado <strong>JCI · TEMOS · ISO</strong>. No es una clínica, sino la garantía de un hospital completo.",
        },
        {
          q: '"¿Qué lente se utiliza?"',
          a: "Una lente intraocular trifocal premium — cubre la visión de cerca, intermedia y de lejos con una sola lente. El médico explica los detalles de marca y modelo durante la evaluación.",
        },
        {
          q: '"¿Ambos ojos o un solo ojo?"',
          a: "<strong>Ambos ojos incluidos.</strong> 2.600€ es por ambos ojos.",
        },
        {
          q: '"¿Soy apto?"',
          a: "Se aclara con tu graduación + la evaluación del médico. Envía tu graduación por WhatsApp y demos el primer paso.",
        },
        {
          q: '"¿No está incluido el vuelo?"',
          a: "No — el vuelo queda excluido. El hotel (3 noches en Ramada Encore Basınexpress) y todos los traslados están incluidos. Aclaramos esta diferencia desde el principio.",
        },
        {
          q: '"¿Me libraré por completo de las gafas?"',
          a: "Smart Lens reduce en gran medida o elimina la necesidad de gafas. El resultado exacto varía según el caso; se aclara tras la evaluación del médico.",
        },
        {
          q: '"¿Es dolorosa la operación?"',
          a: "Se realiza con anestesia en gotas — sin dolor durante la operación. Después puede haber una breve sensación de cuerpo extraño, que desaparece.",
        },
        {
          q: '"¿Cuándo empezaré a ver?"',
          a: "Por lo general una mejora notable al día siguiente. La visión totalmente estable puede tardar unas semanas.",
        },
        {
          q: '"Tengo menos de 40 años, ¿soy apto?"',
          a: "Smart Lens suele ser ideal para casos de presbicia/catarata de 45+. Para miopía sana menor de 40 valoramos primero LASIK.",
        },
        {
          q: '"¿Cómo envío mi graduación?"',
          a: "Una foto o la graduación escrita por WhatsApp. Añade también tu edad y cuánto tiempo llevas usando gafas.",
        },
        {
          q: '"¿Cuánto es el depósito?"',
          a: "<strong>€250</strong> — al pagarlo, el precio y la fecha quedan bloqueados. Se descuenta del precio del tratamiento.",
        },
        {
          q: '"¿Por qué son obligatorias 3 noches?"',
          a: "Día de la operación + control postoperatorio al día siguiente + aprobación de vuelo seguro. Un regreso anterior no se recomienda médicamente.",
        },
        {
          q: '"¿Puedo venir en septiembre?"',
          a: "Sí — la fecha límite de tratamiento es el <strong>30 sep</strong>. Después de esta fecha no se aceptan reservas dentro de la campaña.",
        },
      ],
      priceList: {
        title: "Lista de precios de tratamientos oculares — Equipo de ventas · No publicar",
        rows: [
          {
            label: "Smart Lens / Alsanza (2 ojos)",
            price: "~3.222€",
            note: "Paquete de campaña: 2.600€ (hotel + traslado incluidos)",
            highlight: true,
          },
          { label: "Smart Lens / Rayner (2 ojos)", price: "~3.778€" },
          { label: "Smart Lens / Alcon (2 ojos)", price: "~4.444€" },
          {
            label: "Transepithelial PRK (2 ojos)",
            price: "~1.222€",
            note: "Candidato con miopía menor de 40",
          },
          {
            label: "Wavefront Femto LASIK (2 ojos)",
            price: "~1.333€",
            note: "Candidato con miopía menor de 40",
          },
          {
            label: "Toric Lens (2 ojos)",
            price: "~2.667€",
            note: "Astigmatismo + presbicia",
          },
        ],
        note: "Los precios son de tarifa. La marca no se utiliza en la promoción.",
      },
      urgency:
        '"Bloquea tu precio con un <strong>depósito de €250</strong> hasta el 31 julio — tratamiento como muy tarde el 30 sep, después cerrado."',
      pitch:
        '"Tu tratamiento Smart Lens lo planifica <strong>Uzm. Dr. Önder</strong> en <strong>IME Clinic</strong> — ambos ojos incluidos, <strong>2.600€ con 3 noches en el hotel Ramada Encore + traslados</strong>. Vuelo no incluido."',
    },

    // ────────────────────────────────────────────────────────
    // ITALIANO
    // ────────────────────────────────────────────────────────
    it: {
      name: "Smart Lens",
      specialtyTag: "Trattamento con lente intraoculare",
      hospitalNote: "in un ambiente ospedaliero accreditato",
      tagline:
        "Intervento di lente intraoculare per entrambi gli occhi. 3 notti all'hotel Ramada Encore + tutti i transfer inclusi.",
      price: "2.600€",
      priceNote:
        "entrambi gli occhi inclusi · lente intraoculare trifocale premium di tecnologia tedesca",
      dates: {
        ad: "Giu–Lug 2026",
        deposit: "31 luglio",
        treatment: "30 set",
        stay: "3 notti Istanbul",
      },
      packageItems: [
        "Trattamento Smart Lens — <strong>entrambi gli occhi</strong>",
        "Lente intraoculare trifocale premium di tecnologia tedesca (vicino + intermedio + lontano)",
        "Uzm. Dr. Önder, specialista in Oculistica — <strong>IME Clinic</strong>",
        "<strong>3 notti all'hotel Ramada Encore Basınexpress</strong>",
        "Tutti i transfer aeroporto ↔ hotel ↔ clinica",
        "Valutazione preliminare online (basata sulla tua prescrizione)",
        "Visita oculistica completa prima dell'intervento",
        "Controllo postoperatorio",
        "Coordinatore del paziente — un unico punto di contatto durante tutto il percorso",
      ],
      notIncluded: [
        "Biglietto aereo",
        "Notte di soggiorno aggiuntiva",
        "Visto / assicurazione di viaggio",
      ],
      advantages: [
        {
          title: "Intervento in ambiente ospedaliero",
          body: 'Non un «centro oculistico», ma chirurgia all\'interno di un ospedale pienamente accreditato. Anestesista, terapia intensiva e infrastruttura d\'emergenza pronti. Elimina la paura del «e se succede qualcosa?». La carta di fiducia più forte.',
        },
        {
          title: "Accreditamento JCI · TEMOS · ISO",
          body: "Standard internazionali di sicurezza del paziente. La maggior parte dei concorrenti non possiede nemmeno uno di questi certificati.",
        },
        {
          title: "Uno a uno con Uzm. Dr. Önder",
          body: "Valutazione preliminare, intervento e controllo con lo stesso medico. Uno specialista, non un assistente.",
        },
        {
          title: "Lente trifocale premium di tecnologia tedesca",
          body: "Copre la visione da vicino (lettura), intermedia (schermo) e da lontano con un'unica lente.",
        },
        {
          title: "Hotel + transfer inclusi",
          body: "Il soggiorno al Ramada Encore Basınexpress e tutti i transfer sono nel pacchetto. Il paziente prenota solo il volo; al resto pensiamo noi.",
        },
        {
          title: "Valutazione preliminare online gratuita",
          body: "Invia la tua prescrizione, scopri se sei idoneo — e decidi con una consulenza nella tua lingua prima di salire su un aereo.",
        },
        {
          title: "Recupero rapido, soggiorno breve",
          body: "Di solito un netto miglioramento della vista già il giorno successivo.",
        },
      ],
      rules: [
        {
          badge: "R1",
          text: '<span class="hl">2.600€ per entrambi gli occhi</span> — il prezzo viene confermato dopo la valutazione preliminare.',
        },
        {
          badge: "R2",
          text: "Il volo <strong>non è incluso</strong> — dillo nel primo messaggio, niente sorprese.",
        },
        {
          badge: "R3",
          text: "L'idoneità <strong>dipende dalla valutazione del medico</strong> — non tutti sono candidati per Smart Lens.",
        },
        {
          badge: "R4",
          text: "<strong>Miopia sana sotto i 40 anni → indirizza al LASIK.</strong>",
        },
        {
          badge: "R5",
          text: '«Eliminerò del tutto gli occhiali?» → <span class="hl">Non dare una risposta garantita.</span> Di\' «si riduce notevolmente».',
        },
        {
          badge: "R6",
          text: 'Blocco prezzo: <span class="hl">acconto di €250</span> — entro il 31 luglio. Trattamento al più tardi entro il 30 set.',
        },
        {
          badge: "!",
          text: 'Nella promozione non si scrive il marchio della lente — di\' <strong>«tecnologia tedesca»</strong>.',
        },
      ],
      whatsapp:
        '"Ciao [Nome]! Sono [Nome del coordinatore] di IME Clinic. Grazie per averci scritto riguardo al trattamento Smart Lens. Per poterti preparare una valutazione gratuita e personalizzata: quanti anni hai e porti gli occhiali per leggere, per la vista da lontano o per entrambe le cose? Se hai la tua prescrizione, inviane una foto su WhatsApp e la esamineremo subito per elaborare il tuo piano di trattamento nella tua lingua. Senza impegno."',
      whatsappNotes: [
        {
          type: "yes",
          text: "<strong>Chi invia la prescrizione</strong> → mettilo in coda prioritaria per la consulenza",
        },
        {
          type: "warn",
          text: '<strong>Miopia sana sotto i 40 anni</strong> → di\' «valutiamo anche il LASIK» e trasferiscilo nel funnel LASIK',
        },
        {
          type: "warn",
          text: "<strong>Segni di cataratta / glaucoma</strong> → indirizza al medico per una valutazione speciale",
        },
      ],
      faq: [
        {
          q: '"È sicuro un intervento agli occhi all\'estero?"',
          a: "IME Clinic opera in un ambiente ospedaliero accreditato <strong>JCI · TEMOS · ISO</strong>. Non una clinica, ma la garanzia di un ospedale completo.",
        },
        {
          q: '"Quale lente viene utilizzata?"',
          a: "Una lente intraoculare trifocale premium — copre la visione da vicino, intermedia e da lontano con un'unica lente. Il medico spiega i dettagli di marca e modello durante la valutazione.",
        },
        {
          q: '"Entrambi gli occhi o un solo occhio?"',
          a: "<strong>Entrambi gli occhi inclusi.</strong> 2.600€ è per entrambi gli occhi.",
        },
        {
          q: '"Sono idoneo?"',
          a: "Si chiarisce con la tua prescrizione + la valutazione del medico. Invia la tua prescrizione su WhatsApp e facciamo il primo passo.",
        },
        {
          q: '"Il volo non è incluso?"',
          a: "No — il volo è escluso. L'hotel (3 notti al Ramada Encore Basınexpress) e tutti i transfer sono inclusi. Chiariamo questa distinzione fin dall'inizio.",
        },
        {
          q: '"Eliminerò del tutto gli occhiali?"',
          a: "Smart Lens riduce notevolmente o elimina la necessità di occhiali. Il risultato esatto varia da caso a caso; si chiarisce dopo la valutazione del medico.",
        },
        {
          q: '"L\'intervento è doloroso?"',
          a: "Viene eseguito con anestesia in gocce — nessun dolore durante l'intervento. Dopo può esserci una breve sensazione di corpo estraneo, che passa.",
        },
        {
          q: '"Quando inizierò a vedere?"',
          a: "Di solito un netto miglioramento già il giorno successivo. La visione completamente stabile può richiedere alcune settimane.",
        },
        {
          q: '"Ho meno di 40 anni, sono idoneo?"',
          a: "Smart Lens è generalmente ideale per i casi di presbiopia/cataratta dai 45 anni in su. Per la miopia sana sotto i 40 anni valutiamo prima il LASIK.",
        },
        {
          q: '"Come invio la mia prescrizione?"',
          a: "Una foto o la prescrizione scritta su WhatsApp. Aggiungi anche la tua età e da quanto tempo porti gli occhiali.",
        },
        {
          q: '"Quanto è l\'acconto?"',
          a: "<strong>€250</strong> — una volta versato, il prezzo e la data vengono bloccati. Viene detratto dal prezzo del trattamento.",
        },
        {
          q: '"Perché sono obbligatorie 3 notti?"',
          a: "Giorno dell'intervento + controllo postoperatorio il giorno successivo + approvazione per il volo sicuro. Un ritorno anticipato non è consigliato dal punto di vista medico.",
        },
        {
          q: '"Posso venire a settembre?"',
          a: "Sì — la scadenza del trattamento è il <strong>30 set</strong>. Dopo questa data non si accettano prenotazioni nell'ambito della campagna.",
        },
      ],
      priceList: {
        title: "Listino prezzi trattamenti oculistici — Team vendite · Non pubblicare",
        rows: [
          {
            label: "Smart Lens / Alsanza (2 occhi)",
            price: "~3.222€",
            note: "Pacchetto campagna: 2.600€ (hotel + transfer inclusi)",
            highlight: true,
          },
          { label: "Smart Lens / Rayner (2 occhi)", price: "~3.778€" },
          { label: "Smart Lens / Alcon (2 occhi)", price: "~4.444€" },
          {
            label: "Transepithelial PRK (2 occhi)",
            price: "~1.222€",
            note: "Candidato con miopia sotto i 40 anni",
          },
          {
            label: "Wavefront Femto LASIK (2 occhi)",
            price: "~1.333€",
            note: "Candidato con miopia sotto i 40 anni",
          },
          {
            label: "Toric Lens (2 occhi)",
            price: "~2.667€",
            note: "Astigmatismo + presbiopia",
          },
        ],
        note: "I prezzi sono di listino. Il marchio non viene utilizzato nella promozione.",
      },
      urgency:
        '"Blocca il tuo prezzo con un <strong>acconto di €250</strong> entro il 31 luglio — trattamento al più tardi entro il 30 set, poi chiuso."',
      pitch:
        '"Il tuo trattamento Smart Lens viene pianificato da <strong>Uzm. Dr. Önder</strong> presso <strong>IME Clinic</strong> — entrambi gli occhi inclusi, <strong>2.600€ con 3 notti all\'hotel Ramada Encore + transfer</strong>. Volo escluso."',
    },
  },
};
