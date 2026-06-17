import type { Campaign } from "../types";

// Yüz + Boyun Germe — The Timeless Lift kampanyası (5 dil)
// Doktor: Prof. Dr. Emre (EBOPRAS) · Deep Plane tekniği · Erdem Hastanesi
// Fiyat: 3.900€ sabit (her şey dahil, uçak hariç) · Kapora €300 / 31 Temmuz · Tedavi en geç 30 Eylül 2026
export const yuzGerme: Campaign = {
  slug: "yuz-germe",
  theme: "orange",
  icon: "💎",
  status: "active",
  markets: ["EN", "RU", "ES", "IT"],
  doctor: "Prof. Dr. Emre",
  // accreditation yok — Erdem Hastanesi için doğrulanmış sertifika bilgisi yok
  content: {
    // ──────────────────────────────────────────────────────────
    // TÜRKÇE (master)
    // ──────────────────────────────────────────────────────────
    tr: {
      name: "Yüz ve Boyun Germe",
      specialtyTag: "Deep Plane Tekniği",
      hospitalNote: "Erdem Hastanesi'nde",
      cardHospital: "Erdem Hastanesi",
      tagline:
        "Yüz + boyun germe, Prof. Dr. Emre. Deep Plane tekniği, Erdem Hastanesi'nde 2 gece + Ramada Encore'da 4 gece. Transfer dahil.",
      price: "3.900€",
      priceNote: "her şey dahil sabit paket · yerel para biriminde sunulur",
      dates: {
        ad: "Haziran–Temmuz",
        deposit: "31 Temmuz",
        treatment: "30 Eylül 2026",
        stay: "6 gece İstanbul",
      },
      packageItems: [
        "Yüz + boyun germe ameliyatı — <strong>Prof. Dr. Emre</strong> (Deep Plane / SMAS tekniği)",
        "Operasyon <strong>Erdem Hastanesi'nde</strong> — genel anestezi + anestezi uzmanı",
        "<strong>2 gece hastane yatışı</strong> (postop gözlem)",
        "<strong>4 gece otel konaklama</strong> — Ramada Encore Basın Ekspres + <strong>1 refakatçi dahil</strong>",
        "Operasyon öncesi tetkikler (kan + EKG) + doktor değerlendirmesi",
        "Online ön değerlendirme — fotoğraf bazlı uygunluk",
        "Ameliyat sonrası kontrol + dikiş alımı",
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
          title: "Prof. Dr. cerrah — EBOPRAS",
          body: "EBOPRAS sertifikalı, 18+ yıl deneyim, 2500+ yüz germe ameliyatı. Diğer kampanyalar Op./Uzm. Dr. — bu en güçlü güven kozu.",
        },
        {
          title: "Deep Plane tekniği",
          body: 'Sadece cildi değil, derin yüz dokularını (SMAS) yeniden konumlandırır → doğal görünüm + uzun ömürlü sonuç (10–15 yıl). "Gergin/yapay değil, doğal genç."',
        },
        {
          title: "Yüz + boyun tek ameliyatta",
          body: "Yüz ve boyun germe birlikte yapılır; çene-boyun hattı netleşir, tek iyileşme süreci, tek paket fiyatı.",
        },
        {
          title: "Tam hastanede operasyon",
          body: 'Otelde değil, Erdem Hastanesi\'nde — anestezi uzmanı, yoğun bakım, acil müdahale her an hazır. "Ya komplikasyon olursa?" korkusunu yok eder. 2 gece hastane gözlemi (çoğu rakip aynı gün taburcu eder).',
        },
        {
          title: "Online ön değerlendirme ücretsiz",
          body: "Fotoğraf gönder, doktor uygun mu söylesin — uçağa atlamadan, kendi dilinde danışmanlıkla netleşir.",
        },
      ],
      rules: [
        {
          badge: "R1",
          text: 'Fiyat <span class="hl">€3.900 sabit</span> — her şey dahil (uçak hariç). Ek işlem (göz kapağı, yağ transferi vb.) istenirse ayrı fiyatlanır.',
        },
        {
          badge: "R2",
          text: "Uçak bileti <strong>dahil değil</strong> — ilk mesajdan söyle, sürpriz çıkarma.",
        },
        {
          badge: "R3",
          text: "6 gece kalış zorunlu (2 gece hastane gözlem + dikiş/kontrol). <strong>Daha az kalış kabul edilmez.</strong>",
        },
        {
          badge: "R4",
          text: "Operasyon uygunluğu <strong>doktor onayına bağlı</strong> — sağlık durumuna göre uygun bulunmayabilir.",
        },
        {
          badge: "R5",
          text: 'Fiyat kilidi: <span class="hl">€300 kapora</span> ile, <strong>31 Temmuz\'a kadar</strong>.',
        },
        {
          badge: "R6",
          text: 'Tedavi <span class="hl">en geç 30 Eylül</span>. Sonrası bu kampanyada rezervasyon alınmaz.',
        },
        {
          badge: "!",
          text: 'Revizyon talebi gelirse: "1 yıl sonra ayrı değerlendirme" — şimdiden söz verme (şişlik 6–12 ay sürer).',
        },
      ],
      whatsapp:
        "Merhaba [İsim], IME Clinic'te yüz + boyun germe kampanyamızla ilgilendiğiniz için teşekkürler. Paketimiz: Deep Plane yüz + boyun germe + 6 gece İstanbul (2 gece Erdem Hastanesi gözlem + 4 gece Ramada Encore otel, 1 refakatçi dahil) + tüm transferler — her şey dahil sabit €3.900 (uçak hariç). Operasyonu EBOPRAS sertifikalı Prof. Dr. Emre gerçekleştiriyor. Uygunluk için 4 açıdan fotoğraf yeterli: ön, sağ profil, sol profil, hafif yukarıdan (çene-boyun görünür). WhatsApp'a gönderin, doktor ücretsiz değerlendirme yapıp kendi dilinizde tedavi planınızı çıkarsın. 31 Temmuz'a kadar €300 kapora ile fiyat ve tarih kilitleniyor, tedavi en geç 30 Eylül.",
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
          a: "Operasyon <strong>Erdem Hastanesi'nde</strong>, tam teşekküllü hastane ortamında yapılır — anestezi uzmanı, yoğun bakım ve acil müdahale hazır. Otelde değil, hastanede.",
        },
        {
          q: '"Sonuç ne kadar kalıcı?"',
          a: "Deep Plane tekniği daha derin dokuları konumlandırdığı için sonuç <strong>10–15 yıl</strong> kalıcıdır. Cilt kalitesi ve yaşam tarzına göre değişir.",
        },
        {
          q: '"İyileşme ne kadar sürer?"',
          a: "Çoğu hasta <strong>2–3 hafta</strong> içinde normal hayatına döner. Şişlik ve morluk 10–14 günde belirgin azalır; tam sonuç 3–6 ayda oturur.",
        },
        {
          q: '"Ne zaman uçabilirim?"',
          a: "Tipik olarak 6. gün uçuş uygundur. Doktor kontrolü sonrası kesin onay verilir.",
        },
        {
          q: '"İz kalır mı?"',
          a: "Kesiler saç çizgisi içinde ve kulak arkasında gizlenir. 6–12 ay sonra izler <strong>neredeyse görünmez</strong> hale gelir.",
        },
        {
          q: '"Hangi anestezi kullanılır?"',
          a: "Yüz + boyun germe <strong>genel anestezi</strong> ile yapılır; sertifikalı anestezi uzmanı her aşamada takip eder.",
        },
        {
          q: '"Yaş sınırı var mı?"',
          a: "Kesin yaş sınırı yok; hastaların çoğu 45–70 yaş aralığında. Uygunluk yaştan çok genel sağlık durumuna bağlıdır.",
        },
        {
          q: '"Refakatçim gelebilir mi?"',
          a: "Tabii. 1 refakatçi otelde dahil (aynı oda). Hastane yatışı sadece hastaya dahildir. 2. refakatçi için ek ücret çıkar.",
        },
        {
          q: '"Fiyat sabit mi?"',
          a: 'Evet — <strong>€3.900 sabit</strong>, her şey dahil (uçak hariç). Sadece ek bir işlem (örn. göz kapağı, yağ transferi) eklenirse ayrıca fiyatlanır.',
        },
        {
          q: '"Boyun germe dahil mi?"',
          a: "Evet — paket <strong>yüz + boyun germeyi birlikte</strong> kapsar. Çene-boyun hattı tek ameliyatta düzeltilir.",
        },
        {
          q: '"Fotoğraf nasıl göndereceğim?"',
          a: "WhatsApp'a 4 açı: ön, sağ profil, sol profil, hafif yukarıdan (çene-boyun görünür). Sonra doktor değerlendirme yapar.",
        },
        {
          q: '"Kapora ne kadar?"',
          a: "<strong>€300</strong> — 31 Temmuz'a kadar yatırılırsa fiyat ve tarih kilitlenir. Ameliyat fiyatından düşülür.",
        },
      ],
      urgency:
        '"31 Temmuz\'a kadar <strong>€300 kapora</strong> ile fiyatınızı kilitleyin — tedavi en geç 30 Eylül, sonrası kapalı."',
      pitch:
        '"Yüz + boyun germeniz <strong>IME Clinic</strong>\'te <strong>Prof. Dr. Emre</strong> tarafından, <strong>Erdem Hastanesi\'nde Deep Plane tekniğiyle</strong> planlanır — her şey dahil paket <strong>€3.900</strong>. Uçak hariç."',
    },

    // ──────────────────────────────────────────────────────────
    // ENGLISH
    // ──────────────────────────────────────────────────────────
    en: {
      name: "Face & Neck Lift",
      specialtyTag: "Deep Plane Technique",
      hospitalNote: "at Erdem Hospital",
      cardHospital: "Erdem Hospital",
      tagline:
        "Face + neck lift by Prof. Dr. Emre. Deep Plane technique, 2 nights at Erdem Hospital + 4 nights at Ramada Encore. Transfers included.",
      price: "€3,900",
      priceNote: "all-inclusive fixed package · quoted in your local currency",
      dates: {
        ad: "Jun–Jul",
        deposit: "Jul 31",
        treatment: "Sep 30, 2026",
        stay: "6 nights Istanbul",
      },
      packageItems: [
        "Face + neck lift surgery — <strong>Prof. Dr. Emre</strong> (Deep Plane / SMAS technique)",
        "Surgery <strong>at Erdem Hospital</strong> — general anesthesia + anesthesiologist",
        "<strong>2 nights hospital stay</strong> (post-op observation)",
        "<strong>4 nights hotel accommodation</strong> — Ramada Encore Basın Ekspres + <strong>1 companion included</strong>",
        "Pre-operative tests (blood + ECG) + doctor's assessment",
        "Online pre-assessment — photo-based eligibility",
        "Post-surgery check-up + suture removal",
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
          title: "Professor surgeon — EBOPRAS",
          body: "EBOPRAS-certified, 18+ years of experience, 2,500+ facelift surgeries. Other campaigns are Op./Specialist Dr. — this is the strongest trust card.",
        },
        {
          title: "Deep Plane technique",
          body: 'Repositions the deep facial tissues (SMAS), not just the skin → a natural look + long-lasting result (10–15 years). "Not a pulled, artificial face — naturally younger."',
        },
        {
          title: "Face + neck in one surgery",
          body: "Face and neck lift are done together; the jaw-neck line is defined, one recovery, one package price.",
        },
        {
          title: "Surgery inside a full hospital",
          body: 'Not in a hotel, but at Erdem Hospital — anesthesiologist, intensive care and emergency response ready at any moment. It removes the "What if a complication happens?" fear. 2 nights hospital observation (most competitors discharge the same day).',
        },
        {
          title: "Free online pre-assessment",
          body: "Send a photo and let the doctor confirm your eligibility — it's settled with consultancy in your own language, before you ever board a plane.",
        },
      ],
      rules: [
        {
          badge: "R1",
          text: 'Price is a <span class="hl">fixed €3,900</span> — all-inclusive (flight excluded). Any add-on (eyelid surgery, fat transfer, etc.) is priced separately.',
        },
        {
          badge: "R2",
          text: "Flight ticket is <strong>not included</strong> — say it from the first message, no surprises.",
        },
        {
          badge: "R3",
          text: "A 6-night stay is mandatory (2 nights hospital observation + suture removal/check-up). <strong>A shorter stay is not accepted.</strong>",
        },
        {
          badge: "R4",
          text: "Surgical eligibility <strong>depends on doctor approval</strong> — the patient may not be found suitable on health grounds.",
        },
        {
          badge: "R5",
          text: 'Price lock: with a <span class="hl">€300 deposit</span>, <strong>until Jul 31</strong>.',
        },
        {
          badge: "R6",
          text: 'Treatment <span class="hl">by Sep 30 at the latest</span>. No bookings after that within this campaign.',
        },
        {
          badge: "!",
          text: 'If a revision is requested: "separate assessment after 1 year" — do not promise it now (swelling lasts 6–12 months).',
        },
      ],
      whatsapp:
        "Hello [Name], thank you for your interest in our face + neck lift campaign at IME Clinic. Our package: Deep Plane face + neck lift + 6 nights in Istanbul (2 nights observation at Erdem Hospital + 4 nights at Ramada Encore hotel, 1 companion included) + all transfers — an all-inclusive fixed €3,900 (flight excluded). The surgery is performed by EBOPRAS-certified Prof. Dr. Emre. For eligibility, 4 photos are enough: front, right profile, left profile, slightly from above (jaw-neck visible). Send them on WhatsApp and the doctor will carry out a free assessment and prepare your treatment plan in your own language. Until Jul 31, a €300 deposit locks the price and date, with treatment by Sep 30 at the latest.",
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
          a: "The surgery is performed <strong>at Erdem Hospital</strong>, in a fully-equipped hospital setting — anesthesiologist, intensive care and emergency response ready. Not in a hotel, but in a hospital.",
        },
        {
          q: '"How long do the results last?"',
          a: "Because the Deep Plane technique repositions the deeper tissues, the result lasts <strong>10–15 years</strong>. It varies with skin quality and lifestyle.",
        },
        {
          q: '"What is the recovery time?"',
          a: "Most patients return to normal life within <strong>2–3 weeks</strong>. Swelling and bruising ease markedly in 10–14 days; the full result settles in 3–6 months.",
        },
        {
          q: '"When can I fly?"',
          a: "Typically flying is appropriate on day 6. Final approval is given after the doctor's check-up.",
        },
        {
          q: '"Will there be scars?"',
          a: "Incisions are hidden within the hairline and behind the ears. After 6–12 months the scars become <strong>nearly invisible</strong>.",
        },
        {
          q: '"Which anesthesia is used?"',
          a: "Face + neck lift is performed under <strong>general anesthesia</strong>; a certified anesthesiologist monitors throughout.",
        },
        {
          q: '"Is there an age limit?"',
          a: "No strict age limit; most patients are 45–70. Eligibility depends on general health rather than age.",
        },
        {
          q: '"Can my companion come?"',
          a: "Of course. 1 companion is included at the hotel (same room). The hospital stay covers only the patient. A 2nd companion incurs an extra fee.",
        },
        {
          q: '"Isn\'t the price fixed?"',
          a: "Yes — <strong>a fixed €3,900</strong>, all-inclusive (flight excluded). Only if an add-on (e.g. eyelid surgery, fat transfer) is added is it priced separately.",
        },
        {
          q: '"Is the neck lift included?"',
          a: "Yes — the package covers <strong>face + neck lift together</strong>. The jaw-neck line is corrected in a single surgery.",
        },
        {
          q: '"How do I send the photos?"',
          a: "Send 4 angles on WhatsApp: front, right profile, left profile, slightly from above (jaw-neck visible). Then the doctor carries out the assessment.",
        },
        {
          q: '"How much is the deposit?"',
          a: "<strong>€300</strong> — if paid by Jul 31, the price and date are locked. It is deducted from the surgery price.",
        },
      ],
      urgency:
        '"Lock in your price with a <strong>€300 deposit</strong> until Jul 31 — treatment by Sep 30 at the latest, closed afterwards."',
      pitch:
        '"Your face + neck lift is planned at <strong>IME Clinic</strong> by <strong>Prof. Dr. Emre</strong>, <strong>at Erdem Hospital with the Deep Plane technique</strong> — an all-inclusive package of <strong>€3,900</strong>. Flight excluded."',
    },

    // ──────────────────────────────────────────────────────────
    // РУССКИЙ
    // ──────────────────────────────────────────────────────────
    ru: {
      name: "Подтяжка лица и шеи",
      specialtyTag: "Техника Deep Plane",
      hospitalNote: "в больнице Erdem",
      cardHospital: "больница Erdem",
      tagline:
        "Подтяжка лица и шеи, Prof. Dr. Emre. Техника Deep Plane, 2 ночи в больнице Erdem + 4 ночи в Ramada Encore. Трансферы включены.",
      price: "€3.900",
      priceNote:
        "фиксированный пакет «всё включено» · предоставляется в местной валюте",
      dates: {
        ad: "июнь–июль",
        deposit: "31 июля",
        treatment: "30 сентября 2026",
        stay: "6 ночей Стамбул",
      },
      packageItems: [
        "Операция подтяжки лица и шеи — <strong>Prof. Dr. Emre</strong> (техника Deep Plane / SMAS)",
        "Операция <strong>в больнице Erdem</strong> — общая анестезия + анестезиолог",
        "<strong>2 ночи в больнице</strong> (послеоперационное наблюдение)",
        "<strong>4 ночи проживания в отеле</strong> — Ramada Encore Basın Ekspres + <strong>1 сопровождающий включён</strong>",
        "Предоперационные обследования (кровь + ЭКГ) + оценка врача",
        "Онлайн предварительная оценка — определение пригодности по фото",
        "Послеоперационный осмотр + снятие швов",
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
          title: "Хирург-профессор — EBOPRAS",
          body: "Сертификат EBOPRAS, 18+ лет опыта, 2500+ операций по подтяжке лица. Другие кампании — Op./Specialist Dr. Это самый сильный аргумент доверия.",
        },
        {
          title: "Техника Deep Plane",
          body: 'Перемещает глубокие ткани лица (SMAS), а не только кожу → естественный вид + долговечный результат (10–15 лет). «Не натянутое, искусственное лицо, а естественно молодое.»',
        },
        {
          title: "Лицо и шея за одну операцию",
          body: "Подтяжка лица и шеи выполняется вместе; линия подбородка и шеи становится чёткой, одно восстановление, одна цена пакета.",
        },
        {
          title: "Операция в полноценной больнице",
          body: 'Не в отеле, а в больнице Erdem — анестезиолог, реанимация и экстренная помощь готовы в любой момент. Устраняет страх «А вдруг возникнет осложнение?». 2 ночи наблюдения в больнице (большинство конкурентов выписывают в тот же день).',
        },
        {
          title: "Бесплатная онлайн предварительная оценка",
          body: "Пришлите фото, и врач подтвердит вашу пригодность — всё проясняется с консультацией на вашем родном языке, ещё до посадки в самолёт.",
        },
      ],
      rules: [
        {
          badge: "R1",
          text: 'Цена <span class="hl">фиксированная €3.900</span> — всё включено (без авиабилета). Любое дополнительное вмешательство (блефаропластика, липофилинг и т.д.) оплачивается отдельно.',
        },
        {
          badge: "R2",
          text: "Авиабилет <strong>не включён</strong> — скажите с первого сообщения, без сюрпризов.",
        },
        {
          badge: "R3",
          text: "Проживание 6 ночей обязательно (2 ночи наблюдения в больнице + снятие швов/осмотр). <strong>Более короткое пребывание не принимается.</strong>",
        },
        {
          badge: "R4",
          text: "Пригодность к операции <strong>зависит от одобрения врача</strong> — пациент может быть признан непригодным по состоянию здоровья.",
        },
        {
          badge: "R5",
          text: 'Фиксация цены: с <span class="hl">депозитом €300</span>, <strong>до 31 июля</strong>.',
        },
        {
          badge: "R6",
          text: 'Лечение <span class="hl">не позднее 30 сентября</span>. После этого бронирование в рамках кампании не принимается.',
        },
        {
          badge: "!",
          text: 'Если поступает запрос на ревизию: «отдельная оценка через 1 год» — не обещайте заранее (отёк держится 6–12 месяцев).',
        },
      ],
      whatsapp:
        "Здравствуйте, [Имя], спасибо за интерес к нашей кампании по подтяжке лица и шеи в IME Clinic. Наш пакет: подтяжка лица и шеи Deep Plane + 6 ночей в Стамбуле (2 ночи наблюдения в больнице Erdem + 4 ночи в отеле Ramada Encore, 1 сопровождающий включён) + все трансферы — фиксированная цена «всё включено» €3.900 (без авиабилета). Операцию проводит сертифицированный EBOPRAS Prof. Dr. Emre. Для оценки пригодности достаточно 4 фото: спереди, правый профиль, левый профиль, слегка сверху (видны подбородок и шея). Пришлите в WhatsApp, и врач проведёт бесплатную оценку и составит ваш план лечения на вашем родном языке. До 31 июля депозит €300 фиксирует цену и дату, лечение не позднее 30 сентября.",
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
          a: "Операция проводится <strong>в больнице Erdem</strong>, в полностью оснащённой больничной среде — анестезиолог, реанимация и экстренная помощь готовы. Не в отеле, а в больнице.",
        },
        {
          q: '«Насколько долговечен результат?»',
          a: "Поскольку техника Deep Plane перемещает более глубокие ткани, результат сохраняется <strong>10–15 лет</strong>. Зависит от качества кожи и образа жизни.",
        },
        {
          q: '«Сколько длится восстановление?»',
          a: "Большинство пациентов возвращаются к обычной жизни через <strong>2–3 недели</strong>. Отёк и синяки заметно уменьшаются за 10–14 дней; окончательный результат формируется за 3–6 месяцев.",
        },
        {
          q: '«Когда я смогу лететь?»',
          a: "Обычно полёт допустим на 6-й день. Окончательное одобрение даётся после осмотра врача.",
        },
        {
          q: '«Останутся ли шрамы?»',
          a: "Разрезы скрыты в линии роста волос и за ушами. Через 6–12 месяцев шрамы становятся <strong>почти незаметными</strong>.",
        },
        {
          q: '«Какая анестезия используется?»',
          a: "Подтяжка лица и шеи выполняется под <strong>общей анестезией</strong>; сертифицированный анестезиолог наблюдает на всех этапах.",
        },
        {
          q: '«Есть ли возрастное ограничение?»',
          a: "Строгого ограничения нет; большинство пациентов — 45–70 лет. Пригодность зависит от общего состояния здоровья, а не от возраста.",
        },
        {
          q: '«Может ли приехать сопровождающий?»',
          a: "Конечно. 1 сопровождающий включён в отель (та же комната). Пребывание в больнице покрывает только пациента. За 2-го сопровождающего взимается дополнительная плата.",
        },
        {
          q: '«Разве цена не фиксированная?»',
          a: "Да — <strong>фиксированная €3.900</strong>, всё включено (без авиабилета). Только если добавляется дополнительное вмешательство (например, блефаропластика, липофилинг), оно оплачивается отдельно.",
        },
        {
          q: '«Подтяжка шеи включена?»',
          a: "Да — пакет включает <strong>подтяжку лица и шеи вместе</strong>. Линия подбородка и шеи корректируется за одну операцию.",
        },
        {
          q: '«Как мне отправить фото?»',
          a: "Отправьте 4 ракурса в WhatsApp: спереди, правый профиль, левый профиль, слегка сверху (видны подбородок и шея). Затем врач проводит оценку.",
        },
        {
          q: '«Сколько составляет депозит?»',
          a: "<strong>€300</strong> — при оплате до 31 июля цена и дата фиксируются. Он вычитается из стоимости операции.",
        },
      ],
      urgency:
        '«Зафиксируйте свою цену с <strong>депозитом €300</strong> до 31 июля — лечение не позднее 30 сентября, после чего закрыто.»',
      pitch:
        '«Вашу подтяжку лица и шеи планирует <strong>Prof. Dr. Emre</strong> в <strong>IME Clinic</strong>, <strong>в больнице Erdem по технике Deep Plane</strong> — пакет «всё включено» <strong>€3.900</strong>. Авиабилет не включён.»',
    },

    // ──────────────────────────────────────────────────────────
    // ESPAÑOL
    // ──────────────────────────────────────────────────────────
    es: {
      name: "Lifting Facial y de Cuello",
      specialtyTag: "Técnica Deep Plane",
      hospitalNote: "en el Hospital Erdem",
      cardHospital: "Hospital Erdem",
      tagline:
        "Lifting facial y de cuello, Prof. Dr. Emre. Técnica Deep Plane, 2 noches en el Hospital Erdem + 4 noches en Ramada Encore. Traslados incluidos.",
      price: "€3.900",
      priceNote:
        "paquete fijo todo incluido · se ofrece en moneda local",
      dates: {
        ad: "jun–jul",
        deposit: "31 jul",
        treatment: "30 sep 2026",
        stay: "6 noches Estambul",
      },
      packageItems: [
        "Operación de lifting facial y de cuello — <strong>Prof. Dr. Emre</strong> (técnica Deep Plane / SMAS)",
        "Operación <strong>en el Hospital Erdem</strong> — anestesia general + anestesiólogo",
        "<strong>2 noches de ingreso hospitalario</strong> (observación postoperatoria)",
        "<strong>4 noches de alojamiento en hotel</strong> — Ramada Encore Basın Ekspres + <strong>1 acompañante incluido</strong>",
        "Pruebas preoperatorias (sangre + ECG) + evaluación del médico",
        "Evaluación previa en línea — idoneidad basada en fotos",
        "Revisión postoperatoria + retirada de puntos",
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
          title: "Cirujano catedrático — EBOPRAS",
          body: "Certificado EBOPRAS, 18+ años de experiencia, 2500+ operaciones de lifting facial. Otras campañas son Op./Specialist Dr. — este es el argumento de confianza más fuerte.",
        },
        {
          title: "Técnica Deep Plane",
          body: 'Reposiciona los tejidos faciales profundos (SMAS), no solo la piel → un aspecto natural + resultado duradero (10–15 años). "No una cara tirante y artificial, sino naturalmente más joven."',
        },
        {
          title: "Cara y cuello en una sola operación",
          body: "El lifting facial y de cuello se realiza junto; la línea mandíbula-cuello se define, una sola recuperación, un solo precio de paquete.",
        },
        {
          title: "Operación dentro de un hospital completo",
          body: 'No en un hotel, sino en el Hospital Erdem — anestesiólogo, cuidados intensivos e intervención de urgencia listos en todo momento. Elimina el miedo de "¿Y si hay una complicación?". 2 noches de observación hospitalaria (la mayoría de los competidores dan el alta el mismo día).',
        },
        {
          title: "Evaluación previa en línea gratuita",
          body: "Envíe una foto y deje que el médico confirme su idoneidad — se aclara con asesoramiento en su propio idioma, antes de subir a un avión.",
        },
      ],
      rules: [
        {
          badge: "R1",
          text: 'El precio es <span class="hl">€3.900 fijo</span> — todo incluido (vuelo no incluido). Cualquier añadido (blefaroplastia, transferencia de grasa, etc.) se cotiza por separado.',
        },
        {
          badge: "R2",
          text: "El billete de avión <strong>no está incluido</strong> — dilo desde el primer mensaje, sin sorpresas.",
        },
        {
          badge: "R3",
          text: "La estancia de 6 noches es obligatoria (2 noches de observación hospitalaria + retirada de puntos/revisión). <strong>No se acepta una estancia más corta.</strong>",
        },
        {
          badge: "R4",
          text: "La idoneidad para la operación <strong>depende de la aprobación del médico</strong> — el paciente podría no ser apto por motivos de salud.",
        },
        {
          badge: "R5",
          text: 'Bloqueo de precio: con un <span class="hl">depósito de €300</span>, <strong>hasta el 31 jul</strong>.',
        },
        {
          badge: "R6",
          text: 'Tratamiento <span class="hl">a más tardar el 30 sep</span>. No se aceptan reservas después dentro de esta campaña.',
        },
        {
          badge: "!",
          text: 'Si se solicita una revisión: "evaluación aparte después de 1 año" — no lo prometas ahora (la inflamación dura 6–12 meses).',
        },
      ],
      whatsapp:
        "Hola [Nombre], gracias por su interés en nuestra campaña de lifting facial y de cuello en IME Clinic. Nuestro paquete: lifting facial y de cuello Deep Plane + 6 noches en Estambul (2 noches de observación en el Hospital Erdem + 4 noches en el hotel Ramada Encore, 1 acompañante incluido) + todos los traslados — un precio fijo todo incluido de €3.900 (vuelo no incluido). La operación la realiza el Prof. Dr. Emre, certificado EBOPRAS. Para la idoneidad bastan 4 fotos: de frente, perfil derecho, perfil izquierdo, ligeramente desde arriba (mandíbula-cuello visible). Envíelas por WhatsApp y el médico realizará una evaluación gratuita y preparará su plan de tratamiento en su propio idioma. Hasta el 31 de julio, un depósito de €300 bloquea el precio y la fecha, con tratamiento a más tardar el 30 de septiembre.",
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
          a: "La operación se realiza <strong>en el Hospital Erdem</strong>, en un entorno hospitalario totalmente equipado — anestesiólogo, cuidados intensivos e intervención de urgencia listos. No en una clínica, sino en un hospital.",
        },
        {
          q: '"¿Cuánto duran los resultados?"',
          a: "Como la técnica Deep Plane reposiciona los tejidos más profundos, el resultado dura <strong>10–15 años</strong>. Varía según la calidad de la piel y el estilo de vida.",
        },
        {
          q: '"¿Cuál es el tiempo de recuperación?"',
          a: "La mayoría de los pacientes vuelven a la vida normal en <strong>2–3 semanas</strong>. La inflamación y los hematomas disminuyen notablemente en 10–14 días; el resultado completo se asienta en 3–6 meses.",
        },
        {
          q: '"¿Cuándo podré volar?"',
          a: "Normalmente volar es apropiado el día 6. La aprobación definitiva se da tras la revisión del médico.",
        },
        {
          q: '"¿Quedarán cicatrices?"',
          a: "Las incisiones se ocultan dentro del cuero cabelludo y detrás de las orejas. Tras 6–12 meses las cicatrices se vuelven <strong>casi invisibles</strong>.",
        },
        {
          q: '"¿Qué anestesia se utiliza?"',
          a: "El lifting facial y de cuello se realiza bajo <strong>anestesia general</strong>; un anestesiólogo certificado supervisa en todo momento.",
        },
        {
          q: '"¿Hay límite de edad?"',
          a: "No hay un límite de edad estricto; la mayoría de los pacientes tienen 45–70 años. La idoneidad depende de la salud general más que de la edad.",
        },
        {
          q: '"¿Puede venir mi acompañante?"',
          a: "Por supuesto. 1 acompañante está incluido en el hotel (misma habitación). El ingreso hospitalario cubre solo al paciente. Un 2.º acompañante supone un coste adicional.",
        },
        {
          q: '"¿No es fijo el precio?"',
          a: "Sí — <strong>€3.900 fijo</strong>, todo incluido (vuelo no incluido). Solo si se añade un procedimiento adicional (p. ej. blefaroplastia, transferencia de grasa) se cotiza por separado.",
        },
        {
          q: '"¿Está incluido el lifting de cuello?"',
          a: "Sí — el paquete cubre <strong>lifting facial y de cuello juntos</strong>. La línea mandíbula-cuello se corrige en una sola operación.",
        },
        {
          q: '"¿Cómo envío las fotos?"',
          a: "Envíe 4 ángulos por WhatsApp: de frente, perfil derecho, perfil izquierdo, ligeramente desde arriba (mandíbula-cuello visible). Luego el médico realiza la evaluación.",
        },
        {
          q: '"¿Cuánto es el depósito?"',
          a: "<strong>€300</strong> — si se paga antes del 31 de julio, el precio y la fecha quedan bloqueados. Se descuenta del precio de la operación.",
        },
      ],
      urgency:
        '"Bloquee su precio con un <strong>depósito de €300</strong> hasta el 31 de julio — tratamiento a más tardar el 30 de septiembre, cerrado después."',
      pitch:
        '"Su lifting facial y de cuello lo planifica <strong>Prof. Dr. Emre</strong> en <strong>IME Clinic</strong>, <strong>en el Hospital Erdem con la técnica Deep Plane</strong> — un paquete todo incluido de <strong>€3.900</strong>. Vuelo no incluido."',
    },

    // ──────────────────────────────────────────────────────────
    // ITALIANO
    // ──────────────────────────────────────────────────────────
    it: {
      name: "Lifting Viso e Collo",
      specialtyTag: "Tecnica Deep Plane",
      hospitalNote: "presso l'ospedale Erdem",
      cardHospital: "ospedale Erdem",
      tagline:
        "Lifting viso e collo, Prof. Dr. Emre. Tecnica Deep Plane, 2 notti presso l'ospedale Erdem + 4 notti al Ramada Encore. Transfer inclusi.",
      price: "€3.900",
      priceNote: "pacchetto fisso tutto incluso · offerto in valuta locale",
      dates: {
        ad: "giu–lug",
        deposit: "31 lug",
        treatment: "30 set 2026",
        stay: "6 notti Istanbul",
      },
      packageItems: [
        "Intervento di lifting viso e collo — <strong>Prof. Dr. Emre</strong> (tecnica Deep Plane / SMAS)",
        "Intervento <strong>presso l'ospedale Erdem</strong> — anestesia generale + anestesista",
        "<strong>2 notti di ricovero ospedaliero</strong> (osservazione postoperatoria)",
        "<strong>4 notti di soggiorno in hotel</strong> — Ramada Encore Basın Ekspres + <strong>1 accompagnatore incluso</strong>",
        "Esami preoperatori (sangue + ECG) + valutazione del medico",
        "Valutazione preliminare online — idoneità basata sulle foto",
        "Controllo postoperatorio + rimozione dei punti",
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
          title: "Chirurgo professore — EBOPRAS",
          body: "Certificato EBOPRAS, 18+ anni di esperienza, 2500+ interventi di lifting viso. Le altre campagne sono Op./Specialist Dr. — questo è l'argomento di fiducia più forte.",
        },
        {
          title: "Tecnica Deep Plane",
          body: 'Riposiziona i tessuti profondi del viso (SMAS), non solo la pelle → aspetto naturale + risultato duraturo (10–15 anni). "Non un viso tirato e artificiale, ma naturalmente più giovane."',
        },
        {
          title: "Viso e collo in un solo intervento",
          body: "Il lifting di viso e collo viene eseguito insieme; la linea mandibola-collo si definisce, un solo recupero, un solo prezzo del pacchetto.",
        },
        {
          title: "Intervento in un ospedale completo",
          body: 'Non in un hotel, ma presso l\'ospedale Erdem — anestesista, terapia intensiva e intervento d\'urgenza pronti in ogni momento. Elimina la paura del "E se ci fosse una complicanza?". 2 notti di osservazione ospedaliera (la maggior parte dei concorrenti dimette lo stesso giorno).',
        },
        {
          title: "Valutazione preliminare online gratuita",
          body: "Invia una foto e lascia che il medico confermi la tua idoneità — si chiarisce con una consulenza nella tua lingua, prima ancora di salire su un aereo.",
        },
      ],
      rules: [
        {
          badge: "R1",
          text: 'Il prezzo è <span class="hl">€3.900 fisso</span> — tutto incluso (volo escluso). Qualsiasi aggiunta (blefaroplastica, lipofilling, ecc.) viene quotata a parte.',
        },
        {
          badge: "R2",
          text: "Il biglietto aereo <strong>non è incluso</strong> — dillo dal primo messaggio, senza sorprese.",
        },
        {
          badge: "R3",
          text: "Il soggiorno di 6 notti è obbligatorio (2 notti di osservazione ospedaliera + rimozione punti/controllo). <strong>Un soggiorno più breve non è accettato.</strong>",
        },
        {
          badge: "R4",
          text: "L'idoneità all'intervento <strong>dipende dall'approvazione del medico</strong> — il paziente potrebbe non risultare idoneo per motivi di salute.",
        },
        {
          badge: "R5",
          text: 'Blocco del prezzo: con un <span class="hl">acconto di €300</span>, <strong>entro il 31 lug</strong>.',
        },
        {
          badge: "R6",
          text: 'Trattamento <span class="hl">entro il 30 set</span>. Dopo non si accettano prenotazioni nell\'ambito di questa campagna.',
        },
        {
          badge: "!",
          text: 'Se viene richiesta una revisione: "valutazione separata dopo 1 anno" — non prometterlo ora (il gonfiore dura 6–12 mesi).',
        },
      ],
      whatsapp:
        "Salve [Nome], grazie per il suo interesse nella nostra campagna di lifting viso e collo presso IME Clinic. Il nostro pacchetto: lifting viso e collo Deep Plane + 6 notti a Istanbul (2 notti di osservazione presso l'ospedale Erdem + 4 notti all'hotel Ramada Encore, 1 accompagnatore incluso) + tutti i transfer — un prezzo fisso tutto incluso di €3.900 (volo escluso). L'intervento è eseguito dal Prof. Dr. Emre, certificato EBOPRAS. Per l'idoneità bastano 4 foto: frontale, profilo destro, profilo sinistro, leggermente dall'alto (mandibola-collo visibile). Le invii su WhatsApp e il medico effettuerà una valutazione gratuita e preparerà il suo piano di trattamento nella sua lingua. Entro il 31 luglio, un acconto di €300 blocca prezzo e data, con trattamento entro il 30 settembre.",
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
          a: "L'intervento si esegue <strong>presso l'ospedale Erdem</strong>, in un ambiente ospedaliero completamente attrezzato — anestesista, terapia intensiva e intervento d'urgenza pronti. Non in una clinica, ma in un ospedale.",
        },
        {
          q: '"Quanto durano i risultati?"',
          a: "Poiché la tecnica Deep Plane riposiziona i tessuti più profondi, il risultato dura <strong>10–15 anni</strong>. Varia in base alla qualità della pelle e allo stile di vita.",
        },
        {
          q: '"Qual è il tempo di recupero?"',
          a: "La maggior parte dei pazienti torna alla vita normale in <strong>2–3 settimane</strong>. Gonfiore ed ecchimosi si riducono nettamente in 10–14 giorni; il risultato completo si assesta in 3–6 mesi.",
        },
        {
          q: '"Quando potrò volare?"',
          a: "Di solito il volo è appropriato al 6° giorno. L'approvazione definitiva viene data dopo il controllo del medico.",
        },
        {
          q: '"Resteranno cicatrici?"',
          a: "Le incisioni sono nascoste nell'attaccatura dei capelli e dietro le orecchie. Dopo 6–12 mesi le cicatrici diventano <strong>quasi invisibili</strong>.",
        },
        {
          q: '"Quale anestesia viene usata?"',
          a: "Il lifting viso e collo viene eseguito in <strong>anestesia generale</strong>; un anestesista certificato monitora in ogni momento.",
        },
        {
          q: '"C\'è un limite di età?"',
          a: "Non c'è un limite di età rigido; la maggior parte dei pazienti ha 45–70 anni. L'idoneità dipende dalla salute generale più che dall'età.",
        },
        {
          q: '"Il mio accompagnatore può venire?"',
          a: "Certo. 1 accompagnatore è incluso in hotel (stessa camera). Il ricovero ospedaliero copre solo il paziente. Per un 2° accompagnatore è previsto un costo aggiuntivo.",
        },
        {
          q: '"Il prezzo non è fisso?"',
          a: "Sì — <strong>€3.900 fisso</strong>, tutto incluso (volo escluso). Solo se si aggiunge una procedura aggiuntiva (es. blefaroplastica, lipofilling) viene quotata a parte.",
        },
        {
          q: '"Il lifting del collo è incluso?"',
          a: "Sì — il pacchetto copre <strong>lifting viso e collo insieme</strong>. La linea mandibola-collo viene corretta in un solo intervento.",
        },
        {
          q: '"Come invio le foto?"',
          a: "Invii 4 angolazioni su WhatsApp: frontale, profilo destro, profilo sinistro, leggermente dall'alto (mandibola-collo visibile). Poi il medico effettua la valutazione.",
        },
        {
          q: '"Quanto è l\'acconto?"',
          a: "<strong>€300</strong> — se versato entro il 31 luglio, prezzo e data vengono bloccati. Viene detratto dal prezzo dell'intervento.",
        },
      ],
      urgency:
        '"Blocca il tuo prezzo con un <strong>acconto di €300</strong> entro il 31 luglio — trattamento entro il 30 settembre, poi chiuso."',
      pitch:
        '"Il tuo lifting viso e collo è pianificato dal <strong>Prof. Dr. Emre</strong> presso <strong>IME Clinic</strong>, <strong>all\'ospedale Erdem con la tecnica Deep Plane</strong> — un pacchetto tutto incluso di <strong>€3.900</strong>. Volo escluso."',
    },
  },
};
