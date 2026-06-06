import type { Campaign } from "../types";

// İmplant — The Permanent Smile (All-on-Four) kampanyası
// NOT: TR orijinal içeriktir; EN/RU/ES/IT profesyonel çevirilerdir.
export const implant: Campaign = {
  slug: "implant",
  theme: "purple",
  icon: "🦷",
  status: "active",
  markets: ["ES", "IT", "EN", "FR"],
  doctor: "BHT Dentist",
  accreditation: "JCI · TEMOS · ISO",
  content: {
    tr: {
      name: "The Permanent Smile",
      specialtyTag: "Diş İmplantı — All-on-Four",
      hospitalNote: "BHT Clinic hastanesi bünyesinde",
      tagline:
        "2 çene All-on-Four sabit diş + 2 gece konaklama. BioArt implant, kısa sürede sabit çözüm.",
      price: "1.500€",
      priceNote:
        "8 implant — 2 çene All-on-Four · implant başına 149€ · 2 gece otel + transfer + çekimler dahil · kalıcı kron hariç",
      dates: {
        ad: "1–30 Haziran",
        deposit: "30 Haziran",
        treatment: "31 Ağustos",
        stay: "2 gece İstanbul",
      },
      packageItems: [
        "2 çene <strong>All-on-Four</strong> implant cerrahisi — toplam <strong>8 implant</strong> (üst + alt)",
        "<strong>BioArt</strong> marka implant sistemi",
        "<strong>Gerekli diş çekimleri</strong> — ücretsiz dahil",
        "Aynı seansta <strong>geçici sabit diş</strong> (uygun vakalarda hemen yükleme)",
        "Operasyon öncesi muayene + panoramik röntgen",
        "Online ön değerlendirme (panoramik film / fotoğraf bazlı)",
        "<strong>2 gece</strong> konaklama",
        "Havalimanı + otel ↔ klinik tüm transferleri",
        "Cerrahi <strong>BHT Clinic hastanesi bünyesinde</strong>",
        "Hasta danışmanı — süreç boyunca tek temas",
      ],
      notIncluded: [
        "Kalıcı kron / final köprü protezi",
        "Kemik grefti / sinüs lifting (gerekirse ayrı)",
        "Uçak bileti",
        "Ekstra gece konaklama",
        "Vize / seyahat sigortası",
      ],
      advantages: [
        {
          title: "All-on-Four — kısa sürede sabit diş",
          body: 'Dört implantla tüm çene; uygun vakalarda aynı seansta geçici sabit dişlerle otele dönülür. Aylarca dişsiz kalma yok. "Tek seferde çözülsün" diyen hasta için en güçlü koz.',
        },
        {
          title: "Hastane ortamında cerrahi",
          body: 'BHT Clinic hastanesi bünyesinde — anestezi uzmanı ve acil altyapı hazır. "Ya bir şey olursa?" korkusunu yok eder.',
        },
        {
          title: "BioArt implant sistemi",
          body: "Uluslararası standartta implant — uzun ömür ve güçlü kemik entegrasyonu hedeflenir.",
        },
        {
          title: "Kısa konaklama — 2 gece",
          body: "Yoğun bir program değil; cerrahi + ertesi gün kontrol 2 günde tamamlanır. Az izin, az masraf.",
        },
        {
          title: "Ücretsiz online ön değerlendirme",
          body: "Panoramik filmini ya da ağız içi fotoğrafını gönder; uygunluğunu ve kendi dilinde tedavi planını öğren — uçağa atlamadan netleşir.",
        },
        {
          title: "Tek temas — hasta danışmanı",
          body: "Transfer, dil, randevu, soru — hepsi tek kişi üzerinden.",
        },
      ],
      rules: [
        {
          badge: "R1",
          text: 'Komple paket <span class="hl">1.500€</span> — 2 çene All-on-Four, 8 implant (<strong>implant başına 149€</strong>). Gerekli çekimler, 2 gece otel ve transferler dahil. <strong>Kalıcı kron/köprü dahil değil.</strong>',
        },
        {
          badge: "R2",
          text: "All-on-Four uygunluğu <strong>panoramik film + doktor onayına bağlı</strong> — kemik yetersizse greft gerekebilir (ayrı fiyat).",
        },
        {
          badge: "R3",
          text: "Uçak bileti <strong>dahil değil</strong> — ilk mesajdan söyle, sürpriz çıkarma.",
        },
        {
          badge: "R4",
          text: "Paket <strong>implant + geçici sabit diş</strong> içerir; kalıcı protez bu kampanya kapsamı dışındadır — hastaya net söyle.",
        },
        {
          badge: "R5",
          text: 'Fiyat kilidi: <span class="hl">€150 kapora</span> ile, 30 Haziran\'a kadar. Tedavi en geç 31 Ağustos.',
        },
        {
          badge: "!",
          text: 'İmplant marka adı tanıtımda öne çıkarılmaz — iç bilgidir; hastaya <strong>"uluslararası standart implant"</strong> de.',
        },
      ],
      whatsapp:
        "Merhaba [Ad]! IME Clinic'ten [Koordinatör Adı]. All-on-Four implant kampanyamızla ilgilendiğiniz için teşekkürler. Çözümümüz: komple paket 1.500€ (2 çene All-on-Four, toplam 8 implant; implant başına 149€) + 2 gece İstanbul konaklaması + tüm transferler. Gerekli diş çekimleri ücretsiz dahildir. Cerrahi, BHT Clinic hastanesi bünyesinde yapılır; uygun vakalarda aynı seansta geçici sabit dişlerinizle otele dönersiniz. Uygunluğunuzu netleştirmek için panoramik diş röntgeniniz (ya da ağız içi fotoğraflarınız) yeterli — WhatsApp'tan gönderin, 24 saat içinde ücretsiz doktor değerlendirmesi yapıp kendi dilinizde tedavi planınızı çıkaralım. Not: kalıcı protez bu kampanya kapsamı dışındadır. 30 Haziran'a kadar €150 kapora ile fiyat ve tarih kilitlenir.",
      whatsappNotes: [
        {
          type: "yes",
          text: "<strong>Panoramik film / ağız içi fotoğraf gönderenler</strong> → doktor değerlendirmesine öncelikli al",
        },
        {
          type: "warn",
          text: "<strong>Kemik kaybı / greft ihtimali</strong> → ek işlem çıkabileceğini önceden bildir",
        },
        {
          type: "warn",
          text: "<strong>Kalıcı protez beklentisi</strong> → bunun kampanya kapsamı dışında olduğunu net söyle",
        },
      ],
      faq: [
        {
          q: '"All-on-Four nedir?"',
          a: "Çene başına dört implantla tüm dişlerin sabit protezle yenilenmesi. Dişsiz ya da çok dişi sorunlu hastalar için kısa sürede sabit çözüm.",
        },
        {
          q: '"Aynı gün dişli çıkar mıyım?"',
          a: "Uygun vakalarda evet — aynı seansta geçici sabit dişler takılır; geçici sabit dişlerinizle otele dönersiniz.",
        },
        {
          q: '"Fiyat ne kadar?"',
          a: "Komple paket <strong>1.500€</strong> — 2 çene All-on-Four (8 implant), implant başına 149€. Gerekli çekimler, 2 gece otel ve transferler dahil; kalıcı kron/köprü ayrı planlanır.",
        },
        {
          q: '"Kron dahil mi?"',
          a: "Bu kampanya All-on-Four implant + geçici sabit diş içindir. <strong>Kalıcı kron/köprü ayrı planlanır ve fiyatlandırılır.</strong>",
        },
        {
          q: '"2 gece yeterli mi?"',
          a: "Cerrahi ve ertesi gün kontrol için yeterli. Tek ziyaret yeterli; kalıcı protez bu kampanya kapsamı dışındadır.",
        },
        {
          q: '"Yurtdışında implant güvenli mi?"',
          a: "Cerrahi, <strong>JCI · TEMOS · ISO</strong> akrediteli BHT Clinic hastanesi bünyesinde yapılır — klinik değil, tam hastane güvencesi.",
        },
        {
          q: '"Ben uygun muyum?"',
          a: "Panoramik film + doktor değerlendirmesiyle netleşir. Filmini ya da ağız içi fotoğraflarını WhatsApp'tan gönder.",
        },
        {
          q: '"Hangi implant kullanılıyor?"',
          a: "Uluslararası standartta bir implant sistemi; marka ve detayı değerlendirmede hekim açıklar.",
        },
        {
          q: '"Uçak dahil mi?"',
          a: "Hayır — uçak hariç. 2 gece konaklama ve tüm transferler dahil. Bu ayrımı baştan söylüyoruz.",
        },
        {
          q: '"Kemik yetersizse?"',
          a: "Greft / sinüs lifting gerekebilir; bu ek işlem ayrı planlanır ve fiyatlandırılır. Panoramik film sonrası netleşir.",
        },
        {
          q: '"Eylül\'de gelebilir miyim?"',
          a: "Tedavi en geç 31 Ağustos. Bu tarihten sonra kampanya kapsamında rezervasyon alınmaz.",
        },
      ],
      urgency:
        '"30 Haziran\'a kadar <strong>€150 kapora</strong> ile yerinizi ayırtın — yaz kontenjanı sınırlı, tedavi en geç 31 Ağustos."',
      pitch:
        '"All-on-Four ile 2 çenenizde 8 implant + sabit dişlere <strong>BHT Clinic hastanesi bünyesinde</strong> kavuşun — <strong>komple paket 1.500€</strong>, çekimler ve 2 gece otel dahil, uluslararası standart implant. Uçak ve kalıcı kron hariç."',
    },
    en: {
      name: "The Permanent Smile",
      specialtyTag: "Dental Implants — All-on-Four",
      hospitalNote: "within BHT Clinic hospital",
      tagline:
        "All-on-Four fixed teeth on both jaws + 2 nights' stay. BioArt implants, a fixed solution in a short time.",
      price: "€1,500",
      priceNote:
        "8 implants — All-on-Four on both jaws · €149 per implant · 2 nights' hotel + transfers + extractions included · permanent crowns not included",
      dates: {
        ad: "Jun 1–30",
        deposit: "Jun 30",
        treatment: "Aug 31",
        stay: "2 nights Istanbul",
      },
      packageItems: [
        "<strong>All-on-Four</strong> implant surgery on both jaws — <strong>8 implants</strong> in total (upper + lower)",
        "<strong>BioArt</strong> brand implant system",
        "<strong>Necessary tooth extractions</strong> — included free of charge",
        "<strong>Temporary fixed teeth</strong> in the same session (immediate loading in suitable cases)",
        "Pre-operative examination + panoramic X-ray",
        "Online preliminary assessment (based on panoramic film / photos)",
        "<strong>2 nights</strong> accommodation",
        "All airport + hotel ↔ clinic transfers",
        "Surgery <strong>within BHT Clinic hospital</strong>",
        "Patient consultant — single point of contact throughout the process",
      ],
      notIncluded: [
        "Permanent crowns / final bridge prosthesis",
        "Bone graft / sinus lift (separately if needed)",
        "Flight ticket",
        "Extra night's accommodation",
        "Visa / travel insurance",
      ],
      advantages: [
        {
          title: "All-on-Four — fixed teeth in a short time",
          body: 'A full jaw with four implants; in suitable cases you return to the hotel the same session with temporary fixed teeth. No months without teeth. The strongest card for the patient who says "let it be solved in one go".',
        },
        {
          title: "Surgery in a hospital setting",
          body: 'Within BHT Clinic hospital — anaesthesiologist and emergency infrastructure ready. It removes the "what if something goes wrong?" fear.',
        },
        {
          title: "BioArt implant system",
          body: "An implant of international standard — long lifespan and strong osseointegration are targeted.",
        },
        {
          title: "Short stay — 2 nights",
          body: "Not a packed schedule; surgery + next-day check-up are completed in 2 days. Less time off, less cost.",
        },
        {
          title: "Free online preliminary assessment",
          body: "Send your panoramic film or an intraoral photo; learn your suitability and your treatment plan in your own language — it becomes clear before you ever board a plane.",
        },
        {
          title: "Single point of contact — patient consultant",
          body: "Transfers, language, appointments, questions — all through one person.",
        },
      ],
      rules: [
        {
          badge: "R1",
          text: 'Full package <span class="hl">€1,500</span> — All-on-Four on both jaws, 8 implants (<strong>€149 per implant</strong>). Necessary extractions, 2 nights\' hotel and transfers included. <strong>Permanent crowns/bridge not included.</strong>',
        },
        {
          badge: "R2",
          text: "All-on-Four suitability <strong>depends on panoramic film + doctor approval</strong> — if the bone is insufficient, a graft may be required (separate price).",
        },
        {
          badge: "R3",
          text: "The flight ticket is <strong>not included</strong> — state it from the first message, no surprises.",
        },
        {
          badge: "R4",
          text: "The package includes <strong>implants + temporary fixed teeth</strong>; the permanent prosthesis is outside the scope of this campaign — tell the patient clearly.",
        },
        {
          badge: "R5",
          text: 'Price lock: with a <span class="hl">€150 deposit</span>, until Jun 30. Treatment by Aug 31 at the latest.',
        },
        {
          badge: "!",
          text: 'The implant brand name is not highlighted in promotion — it is internal information; tell the patient <strong>"international-standard implant"</strong>.',
        },
      ],
      whatsapp:
        "Hello [Name]! This is [Coordinator Name] from IME Clinic. Thank you for your interest in our All-on-Four implant campaign. Our solution: a full package of €1,500 (All-on-Four on both jaws, 8 implants in total; €149 per implant) + 2 nights' stay in Istanbul + all transfers. Any necessary tooth extractions are included free of charge. Surgery is performed within BHT Clinic hospital; in suitable cases you return to the hotel in the same session with your temporary fixed teeth. To confirm your suitability, your panoramic dental X-ray (or your intraoral photos) is enough — send it via WhatsApp, and within 24 hours we will carry out a free doctor's assessment and prepare your treatment plan in your own language. Note: permanent prosthesis is outside the scope of this campaign. With a €150 deposit until Jun 30, the price and dates are locked.",
      whatsappNotes: [
        {
          type: "yes",
          text: "<strong>Those who send a panoramic film / intraoral photo</strong> → give priority for the doctor's assessment",
        },
        {
          type: "warn",
          text: "<strong>Bone loss / possible graft</strong> → inform in advance that an additional procedure may arise",
        },
        {
          type: "warn",
          text: "<strong>Expectation of permanent prosthesis</strong> → clearly state that this is outside the scope of the campaign",
        },
      ],
      faq: [
        {
          q: '"What is All-on-Four?"',
          a: "Renewing all teeth with a fixed prosthesis using four implants per jaw. A fixed solution in a short time for edentulous patients or those with many problematic teeth.",
        },
        {
          q: '"Will I leave with teeth the same day?"',
          a: "In suitable cases, yes — temporary fixed teeth are placed in the same session; you return to the hotel with your temporary fixed teeth.",
        },
        {
          q: '"How much does it cost?"',
          a: "The full package is <strong>€1,500</strong> — All-on-Four on both jaws (8 implants), €149 per implant. Necessary extractions, 2 nights' hotel and transfers are included; permanent crowns/bridge are planned separately.",
        },
        {
          q: '"Are crowns included?"',
          a: "This campaign covers All-on-Four implants + temporary fixed teeth. <strong>Permanent crowns/bridge are planned and priced separately.</strong>",
        },
        {
          q: '"Are 2 nights enough?"',
          a: "Enough for the surgery and the next-day check-up. A single visit is enough; the permanent prosthesis is outside the scope of this campaign.",
        },
        {
          q: '"Are implants abroad safe?"',
          a: "Surgery is performed within the <strong>JCI · TEMOS · ISO</strong> accredited BHT Clinic hospital — not a clinic, but full hospital assurance.",
        },
        {
          q: '"Am I suitable?"',
          a: "It becomes clear with a panoramic film + doctor's assessment. Send your film or your intraoral photos via WhatsApp.",
        },
        {
          q: '"Which implant is used?"',
          a: "An implant system of international standard; the brand and details are explained by the dentist during the assessment.",
        },
        {
          q: '"Is the flight included?"',
          a: "No — the flight is excluded. 2 nights' accommodation and all transfers are included. We state this distinction from the start.",
        },
        {
          q: '"What if there is insufficient bone?"',
          a: "A graft / sinus lift may be required; this additional procedure is planned and priced separately. It becomes clear after the panoramic film.",
        },
        {
          q: '"Can I come in September?"',
          a: "Treatment is by Aug 31 at the latest. No reservations are taken under the campaign after this date.",
        },
      ],
      urgency:
        '"Reserve your place with a <strong>€150 deposit</strong> until Jun 30 — summer capacity is limited, treatment by Aug 31 at the latest."',
      pitch:
        '"Get 8 implants + fixed teeth on both jaws with All-on-Four <strong>within BHT Clinic hospital</strong> — <strong>full package €1,500</strong>, extractions and 2 nights\' hotel included, with international-standard implants. Flight and permanent crowns excluded."',
    },
    ru: {
      name: "The Permanent Smile",
      specialtyTag: "Зубные импланты — All-on-Four",
      hospitalNote: "в составе больницы BHT Clinic",
      tagline:
        "Несъёмные зубы All-on-Four на обе челюсти + 2 ночи проживания. Импланты BioArt, несъёмное решение за короткий срок.",
      price: "1.500€",
      priceNote:
        "8 имплантов — All-on-Four на обе челюсти · 149€ за имплант · 2 ночи в отеле + трансферы + удаления зубов включены · постоянные коронки не включены",
      dates: {
        ad: "1–30 июня",
        deposit: "30 июня",
        treatment: "31 августа",
        stay: "2 ночи Стамбул",
      },
      packageItems: [
        "Имплантационная операция <strong>All-on-Four</strong> на обе челюсти — всего <strong>8 имплантов</strong> (верхняя + нижняя)",
        "Система имплантов марки <strong>BioArt</strong>",
        "<strong>Необходимые удаления зубов</strong> — включены бесплатно",
        "<strong>Временные несъёмные зубы</strong> в тот же приём (немедленная нагрузка в подходящих случаях)",
        "Предоперационный осмотр + панорамный снимок",
        "Онлайн-предварительная оценка (на основе панорамного снимка / фотографий)",
        "Проживание <strong>2 ночи</strong>",
        "Все трансферы аэропорт + отель ↔ клиника",
        "Операция <strong>в составе больницы BHT Clinic</strong>",
        "Персональный консультант — единый контакт на протяжении всего процесса",
      ],
      notIncluded: [
        "Постоянные коронки / финальный мостовидный протез",
        "Костный трансплантат / синус-лифтинг (отдельно при необходимости)",
        "Авиабилет",
        "Дополнительная ночь проживания",
        "Виза / туристическая страховка",
      ],
      advantages: [
        {
          title: "All-on-Four — несъёмные зубы за короткий срок",
          body: 'Вся челюсть на четырёх имплантах; в подходящих случаях вы возвращаетесь в отель в тот же приём с временными несъёмными зубами. Никаких месяцев без зубов. Самый сильный аргумент для пациента, который говорит «пусть решится за один раз».',
        },
        {
          title: "Операция в условиях больницы",
          body: 'В составе больницы BHT Clinic — врач-анестезиолог и инфраструктура неотложной помощи наготове. Это устраняет страх «а вдруг что-то случится?».',
        },
        {
          title: "Система имплантов BioArt",
          body: "Имплант международного стандарта — нацелен на долгий срок службы и прочную остеоинтеграцию.",
        },
        {
          title: "Короткое пребывание — 2 ночи",
          body: "Не напряжённая программа; операция + контроль на следующий день завершаются за 2 дня. Меньше отгулов, меньше расходов.",
        },
        {
          title: "Бесплатная онлайн-предварительная оценка",
          body: "Отправьте свой панорамный снимок или внутриротовую фотографию; узнайте о своей пригодности и план лечения на вашем языке — всё проясняется ещё до того, как вы сядете в самолёт.",
        },
        {
          title: "Единый контакт — персональный консультант",
          body: "Трансфер, язык, запись, вопросы — всё через одного человека.",
        },
      ],
      rules: [
        {
          badge: "R1",
          text: 'Комплексный пакет <span class="hl">1.500€</span> — All-on-Four на обе челюсти, 8 имплантов (<strong>149€ за имплант</strong>). Необходимые удаления, 2 ночи в отеле и трансферы включены. <strong>Постоянные коронки/мост не включены.</strong>',
        },
        {
          badge: "R2",
          text: "Пригодность для All-on-Four <strong>зависит от панорамного снимка + одобрения врача</strong> — при недостатке кости может потребоваться трансплантат (отдельная цена).",
        },
        {
          badge: "R3",
          text: "Авиабилет <strong>не включён</strong> — скажите об этом с первого сообщения, без сюрпризов.",
        },
        {
          badge: "R4",
          text: "Пакет включает <strong>импланты + временные несъёмные зубы</strong>; постоянный протез не входит в рамки этой кампании — чётко скажите пациенту.",
        },
        {
          badge: "R5",
          text: 'Фиксация цены: при <span class="hl">задатке €150</span>, до 30 июня. Лечение не позднее 31 августа.',
        },
        {
          badge: "!",
          text: 'Название марки импланта не выделяется в рекламе — это внутренняя информация; пациенту говорите <strong>«имплант международного стандарта»</strong>.',
        },
      ],
      whatsapp:
        "Здравствуйте, [Имя]! Это [Имя координатора] из IME Clinic. Спасибо за интерес к нашей кампании по имплантам All-on-Four. Наше решение: комплексный пакет 1.500€ (All-on-Four на обе челюсти, всего 8 имплантов; 149€ за имплант) + 2 ночи проживания в Стамбуле + все трансферы. Необходимые удаления зубов включены бесплатно. Операция проводится в составе больницы BHT Clinic; в подходящих случаях вы возвращаетесь в отель в тот же приём с вашими временными несъёмными зубами. Чтобы уточнить вашу пригодность, достаточно вашего панорамного снимка зубов (или внутриротовых фотографий) — отправьте его в WhatsApp, и в течение 24 часов мы проведём бесплатную оценку врача и составим план лечения на вашем языке. Примечание: постоянный протез не входит в рамки этой кампании. При задатке €150 до 30 июня цена и даты фиксируются.",
      whatsappNotes: [
        {
          type: "yes",
          text: "<strong>Те, кто прислал панорамный снимок / внутриротовую фотографию</strong> → берём в приоритет на оценку врача",
        },
        {
          type: "warn",
          text: "<strong>Потеря кости / вероятность трансплантата</strong> → заранее предупредите о возможной дополнительной процедуре",
        },
        {
          type: "warn",
          text: "<strong>Ожидание постоянного протеза</strong> → чётко скажите, что это не входит в рамки кампании",
        },
      ],
      faq: [
        {
          q: '"Что такое All-on-Four?"',
          a: "Восстановление всех зубов несъёмным протезом с помощью четырёх имплантов на челюсть. Несъёмное решение за короткий срок для пациентов без зубов или с множеством проблемных зубов.",
        },
        {
          q: '"Уйду ли я с зубами в тот же день?"',
          a: "В подходящих случаях да — в тот же приём устанавливаются временные несъёмные зубы; вы возвращаетесь в отель с вашими временными несъёмными зубами.",
        },
        {
          q: '"Сколько это стоит?"',
          a: "Комплексный пакет <strong>1.500€</strong> — All-on-Four на обе челюсти (8 имплантов), 149€ за имплант. Необходимые удаления, 2 ночи в отеле и трансферы включены; постоянные коронки/мост планируются отдельно.",
        },
        {
          q: '"Включены ли коронки?"',
          a: "Эта кампания включает импланты All-on-Four + временные несъёмные зубы. <strong>Постоянные коронки/мост планируются и оплачиваются отдельно.</strong>",
        },
        {
          q: '"Достаточно ли 2 ночей?"',
          a: "Достаточно для операции и контроля на следующий день. Одного визита достаточно; постоянный протез не входит в рамки этой кампании.",
        },
        {
          q: '"Безопасны ли импланты за границей?"',
          a: "Операция проводится в составе аккредитованной по <strong>JCI · TEMOS · ISO</strong> больницы BHT Clinic — не клиника, а полная гарантия больницы.",
        },
        {
          q: '"Подхожу ли я?"',
          a: "Это проясняется с помощью панорамного снимка + оценки врача. Отправьте свой снимок или внутриротовые фотографии в WhatsApp.",
        },
        {
          q: '"Какой имплант используется?"',
          a: "Система имплантов международного стандарта; марку и детали врач объясняет во время оценки.",
        },
        {
          q: '"Включён ли авиабилет?"',
          a: "Нет — авиабилет не включён. 2 ночи проживания и все трансферы включены. Мы говорим об этом разграничении с самого начала.",
        },
        {
          q: '"А если кости недостаточно?"',
          a: "Может потребоваться трансплантат / синус-лифтинг; эта дополнительная процедура планируется и оплачивается отдельно. Это проясняется после панорамного снимка.",
        },
        {
          q: '"Могу ли я приехать в сентябре?"',
          a: "Лечение не позднее 31 августа. После этой даты бронирование в рамках кампании не принимается.",
        },
      ],
      urgency:
        '"Забронируйте своё место с <strong>задатком €150</strong> до 30 июня — летние квоты ограничены, лечение не позднее 31 августа."',
      pitch:
        '"Получите 8 имплантов + несъёмные зубы на обеих челюстях с All-on-Four <strong>в составе больницы BHT Clinic</strong> — <strong>комплексный пакет 1.500€</strong>, удаления и 2 ночи в отеле включены, с имплантами международного стандарта. Авиабилет и постоянные коронки не включены."',
    },
    es: {
      name: "The Permanent Smile",
      specialtyTag: "Implantes dentales — All-on-Four",
      hospitalNote: "dentro del hospital BHT Clinic",
      tagline:
        "Dientes fijos All-on-Four en ambas arcadas + 2 noches de alojamiento. Implantes BioArt, una solución fija en poco tiempo.",
      price: "1.500€",
      priceNote:
        "8 implantes — All-on-Four en ambas arcadas · 149€ por implante · 2 noches de hotel + traslados + extracciones incluidas · coronas permanentes no incluidas",
      dates: {
        ad: "1–30 jun",
        deposit: "30 jun",
        treatment: "31 ago",
        stay: "2 noches Estambul",
      },
      packageItems: [
        "Cirugía de implantes <strong>All-on-Four</strong> en ambas arcadas — <strong>8 implantes</strong> en total (superior + inferior)",
        "Sistema de implantes de la marca <strong>BioArt</strong>",
        "<strong>Extracciones dentales necesarias</strong> — incluidas gratis",
        "<strong>Dientes fijos provisionales</strong> en la misma sesión (carga inmediata en casos adecuados)",
        "Examen preoperatorio + radiografía panorámica",
        "Valoración preliminar online (basada en radiografía panorámica / fotos)",
        "<strong>2 noches</strong> de alojamiento",
        "Todos los traslados aeropuerto + hotel ↔ clínica",
        "Cirugía <strong>dentro del hospital BHT Clinic</strong>",
        "Asesor del paciente — un único punto de contacto durante todo el proceso",
      ],
      notIncluded: [
        "Coronas permanentes / prótesis de puente final",
        "Injerto óseo / elevación de seno (aparte si es necesario)",
        "Billete de avión",
        "Noche de alojamiento adicional",
        "Visado / seguro de viaje",
      ],
      advantages: [
        {
          title: "All-on-Four — dientes fijos en poco tiempo",
          body: 'Una arcada completa con cuatro implantes; en casos adecuados regresas al hotel en la misma sesión con dientes fijos provisionales. Sin meses sin dientes. La carta más fuerte para el paciente que dice "que se resuelva de una vez".',
        },
        {
          title: "Cirugía en entorno hospitalario",
          body: 'Dentro del hospital BHT Clinic — anestesista e infraestructura de urgencias listos. Elimina el miedo de "¿y si pasa algo?".',
        },
        {
          title: "Sistema de implantes BioArt",
          body: "Un implante de estándar internacional — se busca larga durabilidad y una fuerte osteointegración.",
        },
        {
          title: "Estancia corta — 2 noches",
          body: "No es un programa apretado; la cirugía + el control del día siguiente se completan en 2 días. Menos días libres, menos gastos.",
        },
        {
          title: "Valoración preliminar online gratuita",
          body: "Envía tu radiografía panorámica o una foto intraoral; conoce tu idoneidad y tu plan de tratamiento en tu propio idioma — queda claro antes de subir a un avión.",
        },
        {
          title: "Un único contacto — asesor del paciente",
          body: "Traslados, idioma, citas, preguntas — todo a través de una sola persona.",
        },
      ],
      rules: [
        {
          badge: "R1",
          text: 'Paquete completo <span class="hl">1.500€</span> — All-on-Four en ambas arcadas, 8 implantes (<strong>149€ por implante</strong>). Extracciones necesarias, 2 noches de hotel y traslados incluidos. <strong>Coronas/puente permanentes no incluidos.</strong>',
        },
        {
          badge: "R2",
          text: "La idoneidad para All-on-Four <strong>depende de la radiografía panorámica + la aprobación del médico</strong> — si el hueso es insuficiente, puede requerirse un injerto (precio aparte).",
        },
        {
          badge: "R3",
          text: "El billete de avión <strong>no está incluido</strong> — dilo desde el primer mensaje, sin sorpresas.",
        },
        {
          badge: "R4",
          text: "El paquete incluye <strong>implantes + dientes fijos provisionales</strong>; la prótesis permanente queda fuera del alcance de esta campaña — díselo claramente al paciente.",
        },
        {
          badge: "R5",
          text: 'Bloqueo de precio: con <span class="hl">depósito de €150</span>, hasta el 30 jun. Tratamiento como muy tarde el 31 ago.',
        },
        {
          badge: "!",
          text: 'El nombre de la marca del implante no se destaca en la promoción — es información interna; al paciente dile <strong>"implante de estándar internacional"</strong>.',
        },
      ],
      whatsapp:
        "¡Hola [Nombre]! Soy [Nombre del coordinador] de IME Clinic. Gracias por tu interés en nuestra campaña de implantes All-on-Four. Nuestra solución: un paquete completo de 1.500€ (All-on-Four en ambas arcadas, 8 implantes en total; 149€ por implante) + 2 noches de alojamiento en Estambul + todos los traslados. Las extracciones dentales necesarias están incluidas gratis. La cirugía se realiza dentro del hospital BHT Clinic; en casos adecuados regresas al hotel en la misma sesión con tus dientes fijos provisionales. Para confirmar tu idoneidad, basta con tu radiografía dental panorámica (o tus fotos intraorales) — envíala por WhatsApp y en 24 horas haremos una valoración médica gratuita y prepararemos tu plan de tratamiento en tu propio idioma. Nota: la prótesis permanente queda fuera del alcance de esta campaña. Con un depósito de €150 hasta el 30 jun, el precio y las fechas quedan bloqueados.",
      whatsappNotes: [
        {
          type: "yes",
          text: "<strong>Quienes envíen una radiografía panorámica / foto intraoral</strong> → dar prioridad para la valoración médica",
        },
        {
          type: "warn",
          text: "<strong>Pérdida ósea / posible injerto</strong> → avisa con antelación de que puede surgir un procedimiento adicional",
        },
        {
          type: "warn",
          text: "<strong>Expectativa de prótesis permanente</strong> → indica con claridad que esto queda fuera del alcance de la campaña",
        },
      ],
      faq: [
        {
          q: '"¿Qué es All-on-Four?"',
          a: "La renovación de todos los dientes con una prótesis fija mediante cuatro implantes por arcada. Una solución fija en poco tiempo para pacientes sin dientes o con muchos dientes problemáticos.",
        },
        {
          q: '"¿Saldré con dientes el mismo día?"',
          a: "En casos adecuados, sí — en la misma sesión se colocan dientes fijos provisionales; regresas al hotel con tus dientes fijos provisionales.",
        },
        {
          q: '"¿Cuánto cuesta?"',
          a: "El paquete completo es de <strong>1.500€</strong> — All-on-Four en ambas arcadas (8 implantes), 149€ por implante. Las extracciones necesarias, 2 noches de hotel y los traslados están incluidos; las coronas/puente permanentes se planifican aparte.",
        },
        {
          q: '"¿Están incluidas las coronas?"',
          a: "Esta campaña incluye implantes All-on-Four + dientes fijos provisionales. <strong>Las coronas/puente permanentes se planifican y se cotizan aparte.</strong>",
        },
        {
          q: '"¿Son suficientes 2 noches?"',
          a: "Suficientes para la cirugía y el control del día siguiente. Una sola visita es suficiente; la prótesis permanente queda fuera del alcance de esta campaña.",
        },
        {
          q: '"¿Son seguros los implantes en el extranjero?"',
          a: "La cirugía se realiza dentro del hospital BHT Clinic, acreditado por <strong>JCI · TEMOS · ISO</strong> — no es una clínica, sino la garantía total de un hospital.",
        },
        {
          q: '"¿Soy apto?"',
          a: "Queda claro con una radiografía panorámica + la valoración del médico. Envía tu radiografía o tus fotos intraorales por WhatsApp.",
        },
        {
          q: '"¿Qué implante se usa?"',
          a: "Un sistema de implantes de estándar internacional; la marca y los detalles los explica el odontólogo durante la valoración.",
        },
        {
          q: '"¿Está incluido el avión?"',
          a: "No — el avión no está incluido. Las 2 noches de alojamiento y todos los traslados sí lo están. Indicamos esta distinción desde el principio.",
        },
        {
          q: '"¿Y si no hay hueso suficiente?"',
          a: "Puede requerirse un injerto / elevación de seno; este procedimiento adicional se planifica y se cotiza aparte. Queda claro tras la radiografía panorámica.",
        },
        {
          q: '"¿Puedo venir en septiembre?"',
          a: "El tratamiento es como muy tarde el 31 ago. Tras esta fecha no se aceptan reservas dentro de la campaña.",
        },
      ],
      urgency:
        '"Reserva tu plaza con <strong>depósito de €150</strong> hasta el 30 jun — el cupo de verano es limitado, tratamiento como muy tarde el 31 ago."',
      pitch:
        '"Consigue 8 implantes + dientes fijos en ambas arcadas con All-on-Four <strong>dentro del hospital BHT Clinic</strong> — <strong>paquete completo 1.500€</strong>, extracciones y 2 noches de hotel incluidas, con implantes de estándar internacional. Avión y coronas permanentes no incluidos."',
    },
    it: {
      name: "The Permanent Smile",
      specialtyTag: "Impianti dentali — All-on-Four",
      hospitalNote: "all'interno dell'ospedale BHT Clinic",
      tagline:
        "Denti fissi All-on-Four su entrambe le arcate + 2 notti di soggiorno. Impianti BioArt, una soluzione fissa in poco tempo.",
      price: "1.500€",
      priceNote:
        "8 impianti — All-on-Four su entrambe le arcate · 149€ per impianto · 2 notti in hotel + transfer + estrazioni incluse · corone permanenti non incluse",
      dates: {
        ad: "1–30 giu",
        deposit: "30 giu",
        treatment: "31 ago",
        stay: "2 notti Istanbul",
      },
      packageItems: [
        "Chirurgia implantare <strong>All-on-Four</strong> su entrambe le arcate — <strong>8 impianti</strong> in totale (superiore + inferiore)",
        "Sistema implantare di marca <strong>BioArt</strong>",
        "<strong>Estrazioni dentali necessarie</strong> — incluse gratuitamente",
        "<strong>Denti fissi provvisori</strong> nella stessa seduta (carico immediato nei casi idonei)",
        "Visita preoperatoria + radiografia panoramica",
        "Valutazione preliminare online (basata su radiografia panoramica / foto)",
        "<strong>2 notti</strong> di soggiorno",
        "Tutti i transfer aeroporto + hotel ↔ clinica",
        "Chirurgia <strong>all'interno dell'ospedale BHT Clinic</strong>",
        "Consulente del paziente — un unico punto di contatto per l'intero percorso",
      ],
      notIncluded: [
        "Corone permanenti / protesi a ponte finale",
        "Innesto osseo / rialzo del seno (a parte se necessario)",
        "Biglietto aereo",
        "Notte di soggiorno aggiuntiva",
        "Visto / assicurazione di viaggio",
      ],
      advantages: [
        {
          title: "All-on-Four — denti fissi in poco tempo",
          body: 'Un\'intera arcata con quattro impianti; nei casi idonei torni in hotel nella stessa seduta con denti fissi provvisori. Niente mesi senza denti. La carta più forte per il paziente che dice "che si risolva in una volta sola".',
        },
        {
          title: "Chirurgia in ambiente ospedaliero",
          body: 'All\'interno dell\'ospedale BHT Clinic — anestesista e infrastruttura d\'emergenza pronti. Elimina la paura del "e se succede qualcosa?".',
        },
        {
          title: "Sistema implantare BioArt",
          body: "Un impianto di standard internazionale — si puntano lunga durata e una solida osteointegrazione.",
        },
        {
          title: "Soggiorno breve — 2 notti",
          body: "Non è un programma fitto; la chirurgia + il controllo del giorno dopo si completano in 2 giorni. Meno permessi, meno spese.",
        },
        {
          title: "Valutazione preliminare online gratuita",
          body: "Invia la tua radiografia panoramica o una foto intraorale; scopri la tua idoneità e il tuo piano di trattamento nella tua lingua — è chiaro ancora prima di salire su un aereo.",
        },
        {
          title: "Un unico contatto — consulente del paziente",
          body: "Transfer, lingua, appuntamenti, domande — tutto tramite un'unica persona.",
        },
      ],
      rules: [
        {
          badge: "R1",
          text: 'Pacchetto completo <span class="hl">1.500€</span> — All-on-Four su entrambe le arcate, 8 impianti (<strong>149€ per impianto</strong>). Estrazioni necessarie, 2 notti in hotel e transfer inclusi. <strong>Corone/ponte permanenti non inclusi.</strong>',
        },
        {
          badge: "R2",
          text: "L'idoneità all'All-on-Four <strong>dipende dalla radiografia panoramica + dall'approvazione del medico</strong> — se l'osso è insufficiente può servire un innesto (prezzo a parte).",
        },
        {
          badge: "R3",
          text: "Il biglietto aereo <strong>non è incluso</strong> — dillo dal primo messaggio, nessuna sorpresa.",
        },
        {
          badge: "R4",
          text: "Il pacchetto include <strong>impianti + denti fissi provvisori</strong>; la protesi permanente è esclusa dall'ambito di questa campagna — dillo chiaramente al paziente.",
        },
        {
          badge: "R5",
          text: 'Blocco prezzo: con <span class="hl">acconto di €150</span>, entro il 30 giu. Trattamento entro il 31 ago al più tardi.',
        },
        {
          badge: "!",
          text: 'Il nome della marca dell\'impianto non viene messo in evidenza nella promozione — è informazione interna; al paziente di\' <strong>"impianto di standard internazionale"</strong>.',
        },
      ],
      whatsapp:
        "Ciao [Nome]! Sono [Nome del coordinatore] di IME Clinic. Grazie per il tuo interesse alla nostra campagna di impianti All-on-Four. La nostra soluzione: un pacchetto completo di 1.500€ (All-on-Four su entrambe le arcate, 8 impianti in totale; 149€ per impianto) + 2 notti di soggiorno a Istanbul + tutti i transfer. Le estrazioni dentali necessarie sono incluse gratuitamente. La chirurgia viene eseguita all'interno dell'ospedale BHT Clinic; nei casi idonei torni in hotel nella stessa seduta con i tuoi denti fissi provvisori. Per confermare la tua idoneità è sufficiente la tua radiografia dentale panoramica (o le tue foto intraorali) — inviala su WhatsApp e entro 24 ore faremo una valutazione medica gratuita e prepareremo il tuo piano di trattamento nella tua lingua. Nota: la protesi permanente è esclusa dall'ambito di questa campagna. Con un acconto di €150 entro il 30 giu, il prezzo e le date vengono bloccati.",
      whatsappNotes: [
        {
          type: "yes",
          text: "<strong>Chi invia una radiografia panoramica / foto intraorale</strong> → dai priorità per la valutazione medica",
        },
        {
          type: "warn",
          text: "<strong>Perdita ossea / possibile innesto</strong> → comunica in anticipo che può emergere una procedura aggiuntiva",
        },
        {
          type: "warn",
          text: "<strong>Aspettativa di protesi permanente</strong> → indica chiaramente che è esclusa dall'ambito della campagna",
        },
      ],
      faq: [
        {
          q: '"Che cos\'è l\'All-on-Four?"',
          a: "Il rinnovo di tutti i denti con una protesi fissa tramite quattro impianti per arcata. Una soluzione fissa in poco tempo per pazienti senza denti o con molti denti problematici.",
        },
        {
          q: '"Uscirò con i denti lo stesso giorno?"',
          a: "Nei casi idonei sì — nella stessa seduta si applicano denti fissi provvisori; torni in hotel con i tuoi denti fissi provvisori.",
        },
        {
          q: '"Quanto costa?"',
          a: "Il pacchetto completo è di <strong>1.500€</strong> — All-on-Four su entrambe le arcate (8 impianti), 149€ per impianto. Le estrazioni necessarie, 2 notti in hotel e i transfer sono inclusi; le corone/ponte permanenti sono pianificate a parte.",
        },
        {
          q: '"Le corone sono incluse?"',
          a: "Questa campagna comprende impianti All-on-Four + denti fissi provvisori. <strong>Le corone/ponte permanenti sono pianificate e quotate a parte.</strong>",
        },
        {
          q: '"Bastano 2 notti?"',
          a: "Sufficienti per la chirurgia e il controllo del giorno dopo. Una sola visita è sufficiente; la protesi permanente è esclusa dall'ambito di questa campagna.",
        },
        {
          q: '"Gli impianti all\'estero sono sicuri?"',
          a: "La chirurgia viene eseguita all'interno dell'ospedale BHT Clinic, accreditato <strong>JCI · TEMOS · ISO</strong> — non una clinica, ma la piena garanzia di un ospedale.",
        },
        {
          q: '"Sono idoneo?"',
          a: "Si chiarisce con una radiografia panoramica + la valutazione del medico. Invia la tua radiografia o le tue foto intraorali su WhatsApp.",
        },
        {
          q: '"Quale impianto viene usato?"',
          a: "Un sistema implantare di standard internazionale; la marca e i dettagli vengono spiegati dall'odontoiatra durante la valutazione.",
        },
        {
          q: '"L\'aereo è incluso?"',
          a: "No — l'aereo è escluso. Le 2 notti di soggiorno e tutti i transfer sono inclusi. Indichiamo questa distinzione fin dall'inizio.",
        },
        {
          q: '"E se l\'osso è insufficiente?"',
          a: "Può servire un innesto / rialzo del seno; questa procedura aggiuntiva è pianificata e quotata a parte. Si chiarisce dopo la radiografia panoramica.",
        },
        {
          q: '"Posso venire a settembre?"',
          a: "Il trattamento è entro il 31 ago al più tardi. Dopo questa data non si accettano prenotazioni nell'ambito della campagna.",
        },
      ],
      urgency:
        '"Prenota il tuo posto con <strong>acconto di €150</strong> entro il 30 giu — i posti estivi sono limitati, trattamento entro il 31 ago al più tardi."',
      pitch:
        '"Ottieni 8 impianti + denti fissi su entrambe le arcate con All-on-Four <strong>all\'interno dell\'ospedale BHT Clinic</strong> — <strong>pacchetto completo 1.500€</strong>, estrazioni e 2 notti in hotel incluse, con impianti di standard internazionale. Aereo e corone permanenti esclusi."',
    },
  },
};
