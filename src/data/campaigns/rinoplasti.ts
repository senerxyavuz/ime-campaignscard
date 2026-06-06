import type { Campaign } from "../types";

// Rinoplasti — The Confident Profile kampanyası (5 dil)
export const rinoplasti: Campaign = {
  slug: "rinoplasti",
  theme: "teal",
  icon: "✨",
  status: "active",
  markets: ["ES", "IT"],
  doctor: "Op. Dr. Hasan",
  accreditation: "JCI · TEMOS · ISO",
  content: {
    // ──────────────────────────────────────────────────────────
    // TÜRKÇE (orijinal içerik — campaigns.ts'ten birebir + hospitalNote)
    // ──────────────────────────────────────────────────────────
    tr: {
      name: "The Confident Profile",
      specialtyTag: "Rinoplasti — Burun Estetiği",
      hospitalNote: "akrediteli hastane ortamında",
      tagline:
        "Rinoplasti, Op. Dr. Hasan. 5 gece İstanbul, 1 gece hastane gözlemi, akrediteli hastane ortamı.",
      price: "€2.600'dan",
      priceNote: "vakaya göre kesin fiyat · yerel para biriminde sunulur",
      dates: {
        ad: "1–30 Haziran",
        deposit: "30 Haziran",
        treatment: "1 Eylül 2026",
        stay: "5 gece İstanbul",
      },
      packageItems: [
        "Rinoplasti operasyonu — <strong>Op. Dr. Hasan</strong>",
        "Operasyon <strong>akrediteli hastane ortamında</strong> — genel anestezi + anestezi uzmanı",
        "<strong>1 gece hastane yatışı</strong> (postop gözlem)",
        "<strong>4 gece otel konaklama</strong> + <strong>1 refakatçi dahil</strong>",
        "Operasyon öncesi tetkikler (kan + EKG) + doktor değerlendirmesi",
        "Online ön değerlendirme — fotoğraf bazlı uygunluk",
        "Ameliyat sonrası kontrol + tampon / atel çıkarımı",
        "Havalimanı + otel ↔ hastane tüm transferleri",
        "Hasta danışmanı — süreç boyunca tek temas noktası",
      ],
      notIncluded: [
        "Uçak bileti",
        "Ekstra gece konaklama",
        "2. refakatçi",
        "Revizyon (1 yıl sonrası)",
        "Vize / seyahat sigortası",
      ],
      advantages: [
        {
          title: "JCI · TEMOS · ISO akreditasyonu",
          body: "IME Clinic, uluslararası hasta güvenliği standartlarına sahip akrediteli hastane ortamında operasyon yapar. Sıradan klinikler bu belgelere sahip değildir. En güçlü güven kozu.",
        },
        {
          title: "Hastane içinde operasyon",
          body: 'Otelde değil, tam teşekküllü hastane ortamında — anestezi uzmanı, yoğun bakım, acil müdahale her an hazır. "Ya komplikasyon olursa?" korkusunu yok eder.',
        },
        {
          title: "1 gece hastane gözlemi",
          body: "Postop ilk 24 saat en kritik. Çoğu rakip aynı gün taburcu eder; biz hastane gözleminde tutarız.",
        },
        {
          title: "Online ön değerlendirme ücretsiz",
          body: "Fotoğraf gönder, doktor uygun mu söylesin — uçağa atlamadan, kendi dilinde danışmanlıkla netleşir.",
        },
        {
          title: "Tek temas — hasta danışmanı",
          body: "Transfer, dil, randevu, soru — hepsi tek kişi üzerinden.",
        },
      ],
      rules: [
        {
          badge: "R1",
          text: 'Fiyat <span class="hl">"€2.600\'dan başlayan"</span> — kesin fiyat fotoğraf + değerlendirme sonrası.',
        },
        {
          badge: "R2",
          text: "Uçak bileti <strong>dahil değil</strong> — ilk mesajdan söyle, sürpriz çıkarma.",
        },
        {
          badge: "R3",
          text: "5 gece kalış zorunlu. <strong>Daha az kalış kabul edilmez</strong> (tampon/kontrol nedeniyle).",
        },
        {
          badge: "R4",
          text: "Operasyon uygunluğu <strong>doktor onayına bağlı</strong> — uygun bulunmayabilir.",
        },
        {
          badge: "R5",
          text: 'Fiyat kilidi: <span class="hl">€250 kapora</span> ile, <strong>30 Haziran\'a kadar</strong>.',
        },
        {
          badge: "R6",
          text: 'Tedavi <span class="hl">en geç 1 Eylül</span>. Eylül sonrası rezervasyon alınmaz.',
        },
        {
          badge: "!",
          text: 'Revizyon talebi gelirse: "1 yıl sonra ayrı değerlendirme" — şimdiden söz verme.',
        },
      ],
      whatsapp:
        "Merhaba [İsim], IME Clinic'te rinoplasti kampanyamızla ilgilendiğiniz için teşekkürler. Paketimiz: €2.600'dan başlayan fiyatlarla burun ameliyatı + 5 gece İstanbul (1 gece hastane gözlemi + 4 gece otel, 1 refakatçi dahil) + tüm transferler. Operasyonu Op. Dr. Hasan, JCI-TEMOS-ISO akrediteli hastane ortamında gerçekleştiriyor. Kesin fiyat için 4 açıdan fotoğraf yeterli: ön, sağ profil, sol profil, alttan. WhatsApp'a gönderin, 24 saat içinde ücretsiz doktor değerlendirmesi yapıp kendi dilinizde tedavi planınızı çıkaralım. 30 Haziran'a kadar €250 kapora ile fiyat ve tarih kilitleniyor, tedavi en geç 1 Eylül.",
      whatsappNotes: [
        {
          type: "yes",
          text: "<strong>4 açı fotoğraf gönderenler</strong> → doktor değerlendirmesine öncelikli al",
        },
        {
          type: "warn",
          text: "<strong>Revizyon talebi</strong> → şimdiden söz verme, 1 yıl sonra ayrı değerlendirme",
        },
      ],
      faq: [
        {
          q: '"Yurtdışında ameliyat güvenli mi?"',
          a: "IME Clinic, <strong>JCI · TEMOS · ISO</strong> akrediteli hastane ortamında operasyon yapar — uluslararası hasta güvenliği standartlarına sahip. Klinikte değil, tam teşekküllü hastanede.",
        },
        {
          q: '"Fiyat kesin değil mi?"',
          a: '"€2.600\'dan başlıyor" — burun yapısına, ek işlem ihtiyacına (septum, konka) göre değişir. Fotoğraflar sonrası kesin teklif verilir.',
        },
        {
          q: '"Uçak dahil değil mi?"',
          a: "Hayır — uçak hariç. Otel, hastane, transferler dahil. Bu ayrımı baştan söylüyoruz, sürpriz çıkmasın.",
        },
        {
          q: '"5 gece neden zorunlu?"',
          a: "1 gece hastane gözlemi + 3–4 gün şişlik takibi + tampon/atel çıkarımı. Daha erken dönüş tıbben uygun değil.",
        },
        {
          q: '"Ne zaman uçabilirim?"',
          a: "Tipik olarak 5. gün uçuş uygundur. Doktor kontrolü sonrası kesin onay verilir.",
        },
        {
          q: '"Ameliyat ağrılı mı?"',
          a: "Genel anestezi altında — operasyon sırasında ağrı yok. Sonrası şişlik & basınç hissi olur, ağrı kesici ile yönetilir.",
        },
        {
          q: '"Refakatçim gelebilir mi?"',
          a: "Tabii. 1 refakatçi otelde dahil (aynı oda). Hastane yatışı sadece hastaya dahil. 2. refakatçi için ek ücret çıkar.",
        },
        {
          q: '"Revizyon gerekirse?"',
          a: "Şişlik 6–12 ay sürer; revizyon değerlendirmesi 1 yıl sonra yapılır, ayrı fiyatlandırılır. Şimdiden söz verme.",
        },
        {
          q: '"Fotoğraf nasıl göndereceğim?"',
          a: "WhatsApp'a 4 açı: ön, sağ profil, sol profil, alttan (burun delikleri görünür). Sonra doktor değerlendirme yapar.",
        },
        {
          q: '"Kapora ne kadar?"',
          a: "<strong>€250</strong> — 30 Haziran'a kadar yatırılırsa fiyat ve tarih kilitlenir. Ameliyat fiyatından düşülür.",
        },
        {
          q: '"Eylül\'de gelebilir miyim?"',
          a: "Hayır — tedavi en geç 1 Eylül'e kadar. Eylül sonrası bu kampanya kapsamında rezervasyon alınmaz.",
        },
        {
          q: '"Hangi hastanede operasyon yapılıyor?"',
          a: "IME Clinic, JCI · TEMOS · ISO akrediteli hastane bünyesinde faaliyet göstermektedir. Tam teşekküllü hastane ortamı, sıradan klinik değil.",
        },
      ],
      urgency:
        '"30 Haziran\'a kadar <strong>€250 kapora</strong> ile fiyatınızı kilitleyin — tedavi en geç 1 Eylül, sonrası kapalı."',
      pitch:
        '"Rinoplastiniz <strong>IME Clinic</strong>\'te <strong>Op. Dr. Hasan</strong> tarafından, <strong>JCI · TEMOS · ISO akrediteli hastane ortamında</strong> planlanır — paket <strong>€2.600\'dan başlıyor</strong>. Uçak hariç."',
    },

    // ──────────────────────────────────────────────────────────
    // ENGLISH
    // ──────────────────────────────────────────────────────────
    en: {
      name: "The Confident Profile",
      specialtyTag: "Rhinoplasty — Nose Aesthetics",
      hospitalNote: "in an accredited hospital setting",
      tagline:
        "Rhinoplasty by Op. Dr. Hasan. 5 nights Istanbul, 1 night hospital observation, accredited hospital setting.",
      price: "from €2,600",
      priceNote: "final price depends on the case · quoted in your local currency",
      dates: {
        ad: "Jun 1–30",
        deposit: "Jun 30",
        treatment: "Sep 1, 2026",
        stay: "5 nights Istanbul",
      },
      packageItems: [
        "Rhinoplasty surgery — <strong>Op. Dr. Hasan</strong>",
        "Surgery <strong>in an accredited hospital setting</strong> — general anesthesia + anesthesiologist",
        "<strong>1 night hospital stay</strong> (post-op observation)",
        "<strong>4 nights hotel accommodation</strong> + <strong>1 companion included</strong>",
        "Pre-operative tests (blood + ECG) + doctor's assessment",
        "Online pre-assessment — photo-based eligibility",
        "Post-surgery check-up + packing / splint removal",
        "Airport + hotel ↔ hospital all transfers",
        "Patient consultant — single point of contact throughout the process",
      ],
      notIncluded: [
        "Flight ticket",
        "Extra night accommodation",
        "2nd companion",
        "Revision (after 1 year)",
        "Visa / travel insurance",
      ],
      advantages: [
        {
          title: "JCI · TEMOS · ISO accreditation",
          body: "IME Clinic operates in an accredited hospital setting that meets international patient-safety standards. Ordinary clinics do not hold these certifications. The strongest trust card.",
        },
        {
          title: "Surgery inside a hospital",
          body: 'Not in a hotel, but in a fully-equipped hospital setting — anesthesiologist, intensive care and emergency response ready at any moment. It removes the "What if a complication happens?" fear.',
        },
        {
          title: "1 night hospital observation",
          body: "The first 24 hours post-op are the most critical. Most competitors discharge the same day; we keep you under hospital observation.",
        },
        {
          title: "Free online pre-assessment",
          body: "Send a photo and let the doctor confirm your eligibility — it's settled with consultancy in your own language, before you ever board a plane.",
        },
        {
          title: "Single contact — patient consultant",
          body: "Transfer, language, appointment, questions — all handled through one person.",
        },
      ],
      rules: [
        {
          badge: "R1",
          text: 'Price is <span class="hl">"starting from €2,600"</span> — the exact price comes after photos + assessment.',
        },
        {
          badge: "R2",
          text: "Flight ticket is <strong>not included</strong> — say it from the first message, no surprises.",
        },
        {
          badge: "R3",
          text: "A 5-night stay is mandatory. <strong>A shorter stay is not accepted</strong> (due to packing/check-up).",
        },
        {
          badge: "R4",
          text: "Surgical eligibility <strong>depends on doctor approval</strong> — the patient may not be found suitable.",
        },
        {
          badge: "R5",
          text: 'Price lock: with a <span class="hl">€250 deposit</span>, <strong>until Jun 30</strong>.',
        },
        {
          badge: "R6",
          text: 'Treatment <span class="hl">by Sep 1 at the latest</span>. No bookings are taken after September.',
        },
        {
          badge: "!",
          text: 'If a revision is requested: "separate assessment after 1 year" — do not promise it now.',
        },
      ],
      whatsapp:
        "Hello [Name], thank you for your interest in our rhinoplasty campaign at IME Clinic. Our package: nose surgery from €2,600 + 5 nights in Istanbul (1 night hospital observation + 4 nights hotel, 1 companion included) + all transfers. The surgery is performed by Op. Dr. Hasan in a JCI-TEMOS-ISO accredited hospital setting. For an exact price, 4 photos are enough: front, right profile, left profile, from below. Send them on WhatsApp and within 24 hours we'll carry out a free doctor's assessment and prepare your treatment plan in your own language. Until Jun 30, a €250 deposit locks the price and date, with treatment by Sep 1 at the latest.",
      whatsappNotes: [
        {
          type: "yes",
          text: "<strong>Those who send the 4 photos</strong> → prioritize for the doctor's assessment",
        },
        {
          type: "warn",
          text: "<strong>Revision request</strong> → don't promise now, separate assessment after 1 year",
        },
      ],
      faq: [
        {
          q: '"Is surgery abroad safe?"',
          a: "IME Clinic operates in a <strong>JCI · TEMOS · ISO</strong> accredited hospital setting — meeting international patient-safety standards. Not in a clinic, but in a fully-equipped hospital.",
        },
        {
          q: '"Isn\'t the price fixed?"',
          a: '"Starting from €2,600" — it varies according to your nose structure and any additional procedures needed (septum, concha). An exact quote is given after the photos.',
        },
        {
          q: '"Isn\'t the flight included?"',
          a: "No — the flight is excluded. Hotel, hospital and transfers are included. We state this distinction from the start, so there are no surprises.",
        },
        {
          q: '"Why are 5 nights mandatory?"',
          a: "1 night hospital observation + 3–4 days of swelling monitoring + packing/splint removal. An earlier return is not medically appropriate.",
        },
        {
          q: '"When can I fly?"',
          a: "Typically flying is appropriate on day 5. Final approval is given after the doctor's check-up.",
        },
        {
          q: '"Is the surgery painful?"',
          a: "Under general anesthesia — no pain during the operation. Afterwards there is swelling & a feeling of pressure, managed with painkillers.",
        },
        {
          q: '"Can my companion come?"',
          a: "Of course. 1 companion is included at the hotel (same room). The hospital stay covers only the patient. A 2nd companion incurs an extra fee.",
        },
        {
          q: '"What if I need a revision?"',
          a: "Swelling lasts 6–12 months; a revision assessment is made after 1 year and priced separately. Don't promise it now.",
        },
        {
          q: '"How do I send the photos?"',
          a: "Send 4 angles on WhatsApp: front, right profile, left profile, from below (nostrils visible). Then the doctor carries out the assessment.",
        },
        {
          q: '"How much is the deposit?"',
          a: "<strong>€250</strong> — if paid by Jun 30, the price and date are locked. It is deducted from the surgery price.",
        },
        {
          q: '"Can I come in September?"',
          a: "No — treatment is by Sep 1 at the latest. No bookings are taken after September within this campaign.",
        },
        {
          q: '"Which hospital is the surgery performed in?"',
          a: "IME Clinic operates within a JCI · TEMOS · ISO accredited hospital. A fully-equipped hospital setting, not an ordinary clinic.",
        },
      ],
      urgency:
        '"Lock in your price with a <strong>€250 deposit</strong> until Jun 30 — treatment by Sep 1 at the latest, closed afterwards."',
      pitch:
        '"Your rhinoplasty is planned at <strong>IME Clinic</strong> by <strong>Op. Dr. Hasan</strong>, <strong>in a JCI · TEMOS · ISO accredited hospital setting</strong> — the package <strong>starts from €2,600</strong>. Flight excluded."',
    },

    // ──────────────────────────────────────────────────────────
    // РУССКИЙ
    // ──────────────────────────────────────────────────────────
    ru: {
      name: "The Confident Profile",
      specialtyTag: "Ринопластика — эстетика носа",
      hospitalNote: "в аккредитованной больничной среде",
      tagline:
        "Ринопластика, Op. Dr. Hasan. 5 ночей Стамбул, 1 ночь наблюдения в больнице, аккредитованная больничная среда.",
      price: "от €2.600",
      priceNote:
        "точная цена зависит от случая · предоставляется в местной валюте",
      dates: {
        ad: "1–30 июня",
        deposit: "30 июня",
        treatment: "1 сентября 2026",
        stay: "5 ночей Стамбул",
      },
      packageItems: [
        "Операция ринопластики — <strong>Op. Dr. Hasan</strong>",
        "Операция <strong>в аккредитованной больничной среде</strong> — общая анестезия + анестезиолог",
        "<strong>1 ночь в больнице</strong> (послеоперационное наблюдение)",
        "<strong>4 ночи проживания в отеле</strong> + <strong>1 сопровождающий включён</strong>",
        "Предоперационные обследования (кровь + ЭКГ) + оценка врача",
        "Онлайн предварительная оценка — определение пригодности по фото",
        "Послеоперационный осмотр + удаление тампонов / шины",
        "Все трансферы: аэропорт + отель ↔ больница",
        "Персональный консультант — единая точка контакта на всём пути",
      ],
      notIncluded: [
        "Авиабилет",
        "Дополнительная ночь проживания",
        "2-й сопровождающий",
        "Ревизия (через 1 год)",
        "Виза / страховка путешествия",
      ],
      advantages: [
        {
          title: "Аккредитация JCI · TEMOS · ISO",
          body: "IME Clinic проводит операции в аккредитованной больничной среде, соответствующей международным стандартам безопасности пациентов. Обычные клиники не имеют этих сертификатов. Самый сильный аргумент доверия.",
        },
        {
          title: "Операция внутри больницы",
          body: 'Не в отеле, а в полностью оснащённой больничной среде — анестезиолог, реанимация и экстренная помощь готовы в любой момент. Это устраняет страх «А вдруг возникнет осложнение?».',
        },
        {
          title: "1 ночь наблюдения в больнице",
          body: "Первые 24 часа после операции самые критические. Большинство конкурентов выписывают в тот же день; мы оставляем вас под наблюдением в больнице.",
        },
        {
          title: "Бесплатная онлайн предварительная оценка",
          body: "Пришлите фото, и врач подтвердит вашу пригодность — всё проясняется с консультацией на вашем родном языке, ещё до посадки в самолёт.",
        },
        {
          title: "Единый контакт — персональный консультант",
          body: "Трансфер, язык, запись, вопросы — всё через одного человека.",
        },
      ],
      rules: [
        {
          badge: "R1",
          text: 'Цена <span class="hl">«от €2.600»</span> — точная цена после фото + оценки.',
        },
        {
          badge: "R2",
          text: "Авиабилет <strong>не включён</strong> — скажите с первого сообщения, без сюрпризов.",
        },
        {
          badge: "R3",
          text: "Проживание 5 ночей обязательно. <strong>Более короткое пребывание не принимается</strong> (из-за тампонов/осмотра).",
        },
        {
          badge: "R4",
          text: "Пригодность к операции <strong>зависит от одобрения врача</strong> — пациент может быть признан непригодным.",
        },
        {
          badge: "R5",
          text: 'Фиксация цены: с <span class="hl">депозитом €250</span>, <strong>до 30 июня</strong>.',
        },
        {
          badge: "R6",
          text: 'Лечение <span class="hl">не позднее 1 сентября</span>. После сентября бронирование не принимается.',
        },
        {
          badge: "!",
          text: 'Если поступает запрос на ревизию: «отдельная оценка через 1 год» — не обещайте заранее.',
        },
      ],
      whatsapp:
        "Здравствуйте, [Имя], спасибо за интерес к нашей кампании по ринопластике в IME Clinic. Наш пакет: операция на носу от €2.600 + 5 ночей в Стамбуле (1 ночь наблюдения в больнице + 4 ночи отель, 1 сопровождающий включён) + все трансферы. Операцию проводит Op. Dr. Hasan в аккредитованной больничной среде JCI-TEMOS-ISO. Для точной цены достаточно 4 фото: спереди, правый профиль, левый профиль, снизу. Пришлите в WhatsApp, и в течение 24 часов мы проведём бесплатную оценку врача и составим ваш план лечения на вашем родном языке. До 30 июня депозит €250 фиксирует цену и дату, лечение не позднее 1 сентября.",
      whatsappNotes: [
        {
          type: "yes",
          text: "<strong>Те, кто прислал 4 фото</strong> → в приоритет на оценку врача",
        },
        {
          type: "warn",
          text: "<strong>Запрос на ревизию</strong> → не обещайте заранее, отдельная оценка через 1 год",
        },
      ],
      faq: [
        {
          q: '«Безопасна ли операция за границей?»',
          a: "IME Clinic проводит операции в аккредитованной больничной среде <strong>JCI · TEMOS · ISO</strong> — соответствующей международным стандартам безопасности пациентов. Не в клинике, а в полностью оснащённой больнице.",
        },
        {
          q: '«Разве цена не фиксированная?»',
          a: '«От €2.600» — зависит от структуры носа и потребности в дополнительных вмешательствах (септум, конха). Точное предложение даётся после фото.',
        },
        {
          q: '«Разве авиабилет не включён?»',
          a: "Нет — авиабилет не входит. Отель, больница и трансферы включены. Мы говорим об этом сразу, чтобы не было сюрпризов.",
        },
        {
          q: '«Почему 5 ночей обязательны?»',
          a: "1 ночь наблюдения в больнице + 3–4 дня контроля отёка + удаление тампонов/шины. Более ранний отъезд медицински нецелесообразен.",
        },
        {
          q: '«Когда я смогу лететь?»',
          a: "Обычно полёт допустим на 5-й день. Окончательное одобрение даётся после осмотра врача.",
        },
        {
          q: '«Болезненна ли операция?»',
          a: "Под общей анестезией — во время операции боли нет. После возникает отёк и чувство давления, что контролируется обезболивающими.",
        },
        {
          q: '«Может ли приехать сопровождающий?»',
          a: "Конечно. 1 сопровождающий включён в отель (та же комната). Пребывание в больнице покрывает только пациента. За 2-го сопровождающего взимается дополнительная плата.",
        },
        {
          q: '«Что если понадобится ревизия?»',
          a: "Отёк держится 6–12 месяцев; оценка ревизии проводится через 1 год и оплачивается отдельно. Не обещайте заранее.",
        },
        {
          q: '«Как мне отправить фото?»',
          a: "Отправьте 4 ракурса в WhatsApp: спереди, правый профиль, левый профиль, снизу (ноздри видны). Затем врач проводит оценку.",
        },
        {
          q: '«Сколько составляет депозит?»',
          a: "<strong>€250</strong> — при оплате до 30 июня цена и дата фиксируются. Он вычитается из стоимости операции.",
        },
        {
          q: '«Могу ли я приехать в сентябре?»',
          a: "Нет — лечение не позднее 1 сентября. После сентября бронирование в рамках этой кампании не принимается.",
        },
        {
          q: '«В какой больнице проводится операция?»',
          a: "IME Clinic работает в составе аккредитованной больницы JCI · TEMOS · ISO. Полностью оснащённая больничная среда, а не обычная клиника.",
        },
      ],
      urgency:
        '«Зафиксируйте свою цену с <strong>депозитом €250</strong> до 30 июня — лечение не позднее 1 сентября, после чего закрыто.»',
      pitch:
        '«Вашу ринопластику планирует <strong>Op. Dr. Hasan</strong> в <strong>IME Clinic</strong>, <strong>в аккредитованной больничной среде JCI · TEMOS · ISO</strong> — пакет <strong>от €2.600</strong>. Авиабилет не включён.»',
    },

    // ──────────────────────────────────────────────────────────
    // ESPAÑOL
    // ──────────────────────────────────────────────────────────
    es: {
      name: "The Confident Profile",
      specialtyTag: "Rinoplastia — Estética nasal",
      hospitalNote: "en un entorno hospitalario acreditado",
      tagline:
        "Rinoplastia, Op. Dr. Hasan. 5 noches Estambul, 1 noche de observación hospitalaria, entorno hospitalario acreditado.",
      price: "desde €2.600",
      priceNote: "precio final según el caso · se ofrece en moneda local",
      dates: {
        ad: "1–30 jun",
        deposit: "30 jun",
        treatment: "1 sep 2026",
        stay: "5 noches Estambul",
      },
      packageItems: [
        "Operación de rinoplastia — <strong>Op. Dr. Hasan</strong>",
        "Operación <strong>en un entorno hospitalario acreditado</strong> — anestesia general + anestesiólogo",
        "<strong>1 noche de ingreso hospitalario</strong> (observación postoperatoria)",
        "<strong>4 noches de alojamiento en hotel</strong> + <strong>1 acompañante incluido</strong>",
        "Pruebas preoperatorias (sangre + ECG) + evaluación del médico",
        "Evaluación previa en línea — idoneidad basada en fotos",
        "Revisión postoperatoria + retirada de tapones / férula",
        "Todos los traslados: aeropuerto + hotel ↔ hospital",
        "Asesor del paciente — único punto de contacto durante todo el proceso",
      ],
      notIncluded: [
        "Billete de avión",
        "Noche de alojamiento extra",
        "2.º acompañante",
        "Revisión (después de 1 año)",
        "Visado / seguro de viaje",
      ],
      advantages: [
        {
          title: "Acreditación JCI · TEMOS · ISO",
          body: "IME Clinic opera en un entorno hospitalario acreditado que cumple los estándares internacionales de seguridad del paciente. Las clínicas comunes no poseen estos certificados. El argumento de confianza más fuerte.",
        },
        {
          title: "Operación dentro de un hospital",
          body: 'No en un hotel, sino en un entorno hospitalario totalmente equipado — anestesiólogo, cuidados intensivos e intervención de urgencia listos en todo momento. Elimina el miedo de "¿Y si hay una complicación?".',
        },
        {
          title: "1 noche de observación hospitalaria",
          body: "Las primeras 24 horas tras la operación son las más críticas. La mayoría de los competidores dan el alta el mismo día; nosotros le mantenemos bajo observación hospitalaria.",
        },
        {
          title: "Evaluación previa en línea gratuita",
          body: "Envíe una foto y deje que el médico confirme su idoneidad — se aclara con asesoramiento en su propio idioma, antes de subir a un avión.",
        },
        {
          title: "Contacto único — asesor del paciente",
          body: "Traslado, idioma, cita, preguntas — todo a través de una sola persona.",
        },
      ],
      rules: [
        {
          badge: "R1",
          text: 'El precio es <span class="hl">"desde €2.600"</span> — el precio exacto llega tras las fotos + evaluación.',
        },
        {
          badge: "R2",
          text: "El billete de avión <strong>no está incluido</strong> — dilo desde el primer mensaje, sin sorpresas.",
        },
        {
          badge: "R3",
          text: "La estancia de 5 noches es obligatoria. <strong>No se acepta una estancia más corta</strong> (por los tapones/revisión).",
        },
        {
          badge: "R4",
          text: "La idoneidad para la operación <strong>depende de la aprobación del médico</strong> — el paciente podría no ser apto.",
        },
        {
          badge: "R5",
          text: 'Bloqueo de precio: con un <span class="hl">depósito de €250</span>, <strong>hasta el 30 jun</strong>.',
        },
        {
          badge: "R6",
          text: 'Tratamiento <span class="hl">a más tardar el 1 sep</span>. No se aceptan reservas después de septiembre.',
        },
        {
          badge: "!",
          text: 'Si se solicita una revisión: "evaluación aparte después de 1 año" — no lo prometas ahora.',
        },
      ],
      whatsapp:
        "Hola [Nombre], gracias por su interés en nuestra campaña de rinoplastia en IME Clinic. Nuestro paquete: operación de nariz desde €2.600 + 5 noches en Estambul (1 noche de observación hospitalaria + 4 noches de hotel, 1 acompañante incluido) + todos los traslados. La operación la realiza Op. Dr. Hasan en un entorno hospitalario acreditado JCI-TEMOS-ISO. Para un precio exacto bastan 4 fotos: de frente, perfil derecho, perfil izquierdo, desde abajo. Envíelas por WhatsApp y, en 24 horas, realizaremos una evaluación médica gratuita y prepararemos su plan de tratamiento en su propio idioma. Hasta el 30 de junio, un depósito de €250 bloquea el precio y la fecha, con tratamiento a más tardar el 1 de septiembre.",
      whatsappNotes: [
        {
          type: "yes",
          text: "<strong>Quienes envíen las 4 fotos</strong> → prioridad para la evaluación del médico",
        },
        {
          type: "warn",
          text: "<strong>Solicitud de revisión</strong> → no prometas ahora, evaluación aparte después de 1 año",
        },
      ],
      faq: [
        {
          q: '"¿Es segura una operación en el extranjero?"',
          a: "IME Clinic opera en un entorno hospitalario acreditado <strong>JCI · TEMOS · ISO</strong> — que cumple los estándares internacionales de seguridad del paciente. No en una clínica, sino en un hospital totalmente equipado.",
        },
        {
          q: '"¿No es fijo el precio?"',
          a: '"Desde €2.600" — varía según la estructura de la nariz y la necesidad de procedimientos adicionales (septum, concha). Tras las fotos se da un presupuesto exacto.',
        },
        {
          q: '"¿No está incluido el vuelo?"',
          a: "No — el vuelo no se incluye. El hotel, el hospital y los traslados sí. Indicamos esta distinción desde el principio, para que no haya sorpresas.",
        },
        {
          q: '"¿Por qué son obligatorias 5 noches?"',
          a: "1 noche de observación hospitalaria + 3–4 días de control de la inflamación + retirada de tapones/férula. Un regreso más temprano no es adecuado médicamente.",
        },
        {
          q: '"¿Cuándo podré volar?"',
          a: "Normalmente volar es apropiado el día 5. La aprobación definitiva se da tras la revisión del médico.",
        },
        {
          q: '"¿Es dolorosa la operación?"',
          a: "Bajo anestesia general — sin dolor durante la operación. Después hay inflamación y sensación de presión, que se controla con analgésicos.",
        },
        {
          q: '"¿Puede venir mi acompañante?"',
          a: "Por supuesto. 1 acompañante está incluido en el hotel (misma habitación). El ingreso hospitalario cubre solo al paciente. Un 2.º acompañante supone un coste adicional.",
        },
        {
          q: '"¿Y si necesito una revisión?"',
          a: "La inflamación dura 6–12 meses; la evaluación de revisión se hace tras 1 año y se cotiza aparte. No lo prometas ahora.",
        },
        {
          q: '"¿Cómo envío las fotos?"',
          a: "Envíe 4 ángulos por WhatsApp: de frente, perfil derecho, perfil izquierdo, desde abajo (fosas nasales visibles). Luego el médico realiza la evaluación.",
        },
        {
          q: '"¿Cuánto es el depósito?"',
          a: "<strong>€250</strong> — si se paga antes del 30 de junio, el precio y la fecha quedan bloqueados. Se descuenta del precio de la operación.",
        },
        {
          q: '"¿Puedo venir en septiembre?"',
          a: "No — el tratamiento es a más tardar el 1 de septiembre. Después de septiembre no se aceptan reservas dentro de esta campaña.",
        },
        {
          q: '"¿En qué hospital se realiza la operación?"',
          a: "IME Clinic opera dentro de un hospital acreditado JCI · TEMOS · ISO. Un entorno hospitalario totalmente equipado, no una clínica común.",
        },
      ],
      urgency:
        '"Bloquee su precio con un <strong>depósito de €250</strong> hasta el 30 de junio — tratamiento a más tardar el 1 de septiembre, cerrado después."',
      pitch:
        '"Su rinoplastia la planifica <strong>Op. Dr. Hasan</strong> en <strong>IME Clinic</strong>, <strong>en un entorno hospitalario acreditado JCI · TEMOS · ISO</strong> — el paquete <strong>empieza desde €2.600</strong>. Vuelo no incluido."',
    },

    // ──────────────────────────────────────────────────────────
    // ITALIANO
    // ──────────────────────────────────────────────────────────
    it: {
      name: "The Confident Profile",
      specialtyTag: "Rinoplastica — Estetica del naso",
      hospitalNote: "in un ambiente ospedaliero accreditato",
      tagline:
        "Rinoplastica, Op. Dr. Hasan. 5 notti Istanbul, 1 notte di osservazione ospedaliera, ambiente ospedaliero accreditato.",
      price: "da €2.600",
      priceNote: "prezzo finale in base al caso · offerto in valuta locale",
      dates: {
        ad: "1–30 giu",
        deposit: "30 giu",
        treatment: "1 set 2026",
        stay: "5 notti Istanbul",
      },
      packageItems: [
        "Intervento di rinoplastica — <strong>Op. Dr. Hasan</strong>",
        "Intervento <strong>in un ambiente ospedaliero accreditato</strong> — anestesia generale + anestesista",
        "<strong>1 notte di ricovero ospedaliero</strong> (osservazione postoperatoria)",
        "<strong>4 notti di soggiorno in hotel</strong> + <strong>1 accompagnatore incluso</strong>",
        "Esami preoperatori (sangue + ECG) + valutazione del medico",
        "Valutazione preliminare online — idoneità basata sulle foto",
        "Controllo postoperatorio + rimozione di tamponi / stecca",
        "Tutti i transfer: aeroporto + hotel ↔ ospedale",
        "Consulente del paziente — unico punto di contatto durante tutto il percorso",
      ],
      notIncluded: [
        "Biglietto aereo",
        "Notte di soggiorno extra",
        "2° accompagnatore",
        "Revisione (dopo 1 anno)",
        "Visto / assicurazione di viaggio",
      ],
      advantages: [
        {
          title: "Accreditamento JCI · TEMOS · ISO",
          body: "IME Clinic opera in un ambiente ospedaliero accreditato conforme agli standard internazionali di sicurezza del paziente. Le cliniche comuni non possiedono questi certificati. L'argomento di fiducia più forte.",
        },
        {
          title: "Intervento all'interno di un ospedale",
          body: 'Non in un hotel, ma in un ambiente ospedaliero completamente attrezzato — anestesista, terapia intensiva e intervento d\'urgenza pronti in ogni momento. Elimina la paura del "E se ci fosse una complicanza?".',
        },
        {
          title: "1 notte di osservazione ospedaliera",
          body: "Le prime 24 ore dopo l'intervento sono le più critiche. La maggior parte dei concorrenti dimette lo stesso giorno; noi vi teniamo sotto osservazione ospedaliera.",
        },
        {
          title: "Valutazione preliminare online gratuita",
          body: "Invia una foto e lascia che il medico confermi la tua idoneità — si chiarisce con una consulenza nella tua lingua, prima ancora di salire su un aereo.",
        },
        {
          title: "Contatto unico — consulente del paziente",
          body: "Transfer, lingua, appuntamento, domande — tutto tramite una sola persona.",
        },
      ],
      rules: [
        {
          badge: "R1",
          text: 'Il prezzo è <span class="hl">"a partire da €2.600"</span> — il prezzo esatto arriva dopo foto + valutazione.',
        },
        {
          badge: "R2",
          text: "Il biglietto aereo <strong>non è incluso</strong> — dillo dal primo messaggio, senza sorprese.",
        },
        {
          badge: "R3",
          text: "Il soggiorno di 5 notti è obbligatorio. <strong>Un soggiorno più breve non è accettato</strong> (a causa di tamponi/controllo).",
        },
        {
          badge: "R4",
          text: "L'idoneità all'intervento <strong>dipende dall'approvazione del medico</strong> — il paziente potrebbe non risultare idoneo.",
        },
        {
          badge: "R5",
          text: 'Blocco del prezzo: con un <span class="hl">acconto di €250</span>, <strong>entro il 30 giu</strong>.',
        },
        {
          badge: "R6",
          text: 'Trattamento <span class="hl">entro il 1 set</span>. Dopo settembre non si accettano prenotazioni.',
        },
        {
          badge: "!",
          text: 'Se viene richiesta una revisione: "valutazione separata dopo 1 anno" — non prometterlo ora.',
        },
      ],
      whatsapp:
        "Salve [Nome], grazie per il suo interesse nella nostra campagna di rinoplastica presso IME Clinic. Il nostro pacchetto: intervento al naso a partire da €2.600 + 5 notti a Istanbul (1 notte di osservazione ospedaliera + 4 notti in hotel, 1 accompagnatore incluso) + tutti i transfer. L'intervento è eseguito da Op. Dr. Hasan in un ambiente ospedaliero accreditato JCI-TEMOS-ISO. Per un prezzo esatto bastano 4 foto: frontale, profilo destro, profilo sinistro, dal basso. Le invii su WhatsApp e, entro 24 ore, effettueremo una valutazione medica gratuita e prepareremo il suo piano di trattamento nella sua lingua. Entro il 30 giugno, un acconto di €250 blocca prezzo e data, con trattamento entro il 1 settembre.",
      whatsappNotes: [
        {
          type: "yes",
          text: "<strong>Chi invia le 4 foto</strong> → priorità per la valutazione del medico",
        },
        {
          type: "warn",
          text: "<strong>Richiesta di revisione</strong> → non promettere ora, valutazione separata dopo 1 anno",
        },
      ],
      faq: [
        {
          q: '"È sicuro operarsi all\'estero?"',
          a: "IME Clinic opera in un ambiente ospedaliero accreditato <strong>JCI · TEMOS · ISO</strong> — conforme agli standard internazionali di sicurezza del paziente. Non in una clinica, ma in un ospedale completamente attrezzato.",
        },
        {
          q: '"Il prezzo non è fisso?"',
          a: '"A partire da €2.600" — varia in base alla struttura del naso e alla necessità di procedure aggiuntive (setto, concha). Dopo le foto viene dato un preventivo esatto.',
        },
        {
          q: '"Il volo non è incluso?"',
          a: "No — il volo è escluso. Hotel, ospedale e transfer sono inclusi. Indichiamo questa distinzione fin dall'inizio, per evitare sorprese.",
        },
        {
          q: '"Perché 5 notti sono obbligatorie?"',
          a: "1 notte di osservazione ospedaliera + 3–4 giorni di controllo del gonfiore + rimozione di tamponi/stecca. Un rientro anticipato non è appropriato dal punto di vista medico.",
        },
        {
          q: '"Quando potrò volare?"',
          a: "Di solito il volo è appropriato al 5° giorno. L'approvazione definitiva viene data dopo il controllo del medico.",
        },
        {
          q: '"L\'intervento è doloroso?"',
          a: "In anestesia generale — nessun dolore durante l'operazione. Dopo si avverte gonfiore e una sensazione di pressione, gestiti con antidolorifici.",
        },
        {
          q: '"Il mio accompagnatore può venire?"',
          a: "Certo. 1 accompagnatore è incluso in hotel (stessa camera). Il ricovero ospedaliero copre solo il paziente. Per un 2° accompagnatore è previsto un costo aggiuntivo.",
        },
        {
          q: '"E se servisse una revisione?"',
          a: "Il gonfiore dura 6–12 mesi; la valutazione della revisione viene effettuata dopo 1 anno ed è quotata a parte. Non prometterlo ora.",
        },
        {
          q: '"Come invio le foto?"',
          a: "Invii 4 angolazioni su WhatsApp: frontale, profilo destro, profilo sinistro, dal basso (narici visibili). Poi il medico effettua la valutazione.",
        },
        {
          q: '"Quanto è l\'acconto?"',
          a: "<strong>€250</strong> — se versato entro il 30 giugno, prezzo e data vengono bloccati. Viene detratto dal prezzo dell'intervento.",
        },
        {
          q: '"Posso venire a settembre?"',
          a: "No — il trattamento è entro il 1 settembre. Dopo settembre non si accettano prenotazioni nell'ambito di questa campagna.",
        },
        {
          q: '"In quale ospedale viene eseguito l\'intervento?"',
          a: "IME Clinic opera all'interno di un ospedale accreditato JCI · TEMOS · ISO. Un ambiente ospedaliero completamente attrezzato, non una clinica comune.",
        },
      ],
      urgency:
        '"Blocca il tuo prezzo con un <strong>acconto di €250</strong> entro il 30 giugno — trattamento entro il 1 settembre, poi chiuso."',
      pitch:
        '"La tua rinoplastica è pianificata da <strong>Op. Dr. Hasan</strong> presso <strong>IME Clinic</strong>, <strong>in un ambiente ospedaliero accreditato JCI · TEMOS · ISO</strong> — il pacchetto <strong>parte da €2.600</strong>. Volo escluso."',
    },
  },
};
