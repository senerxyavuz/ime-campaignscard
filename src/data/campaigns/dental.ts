import type { Campaign } from "../types";

// Dental — The All-Inclusive Smile kampanyası (5 dil)
export const dental: Campaign = {
  slug: "dental",
  theme: "cyan",
  icon: "🦷",
  status: "active",
  markets: ["ES", "IT", "EN", "FR"],
  doctor: "BHT Dentist",
  accreditation: "JCI · TEMOS · ISO",
  content: {
    // ──────────────────────────────────────────────────────────
    // TR — orijinal (campaigns.ts'ten birebir + hospitalNote)
    // ──────────────────────────────────────────────────────────
    tr: {
      name: "The All-Inclusive Smile",
      specialtyTag: "Diş Hekimliği — Dental Turizm",
      hospitalNote: "BHT Clinic hastanesi bünyesinde",
      tagline:
        "20 zirkonyum crown + uçak + 7 gece konaklama. Her şey dahil, 15 yıl garanti.",
      price: "€2.990",
      priceNote: "her şey dahil · UK için ~£2.590 · yerel para biriminde sunulur",
      dates: {
        ad: "1–30 Haziran",
        deposit: "30 Haziran",
        treatment: "31 Ağustos",
        stay: "7 gece İstanbul",
      },
      packageItems: [
        "20 zirkonyum crown — <strong>Ivoclar</strong> premium malzeme",
        "Diş çekimi / kanal tedavisi (gerekirse)",
        "Tüm röntgenler + ücretsiz konsültasyon",
        "Gelmeden önce online doktor görüşmesi + tedavi planı",
        "Gidiş-dönüş uçak bileti (€300'a kadar)",
        "7 gece konaklama — min. 4 yıldız otel",
        "1 refakatçi konaklaması",
        "Tüm havalimanı + klinik transferleri",
        "Tedavi tam teşekküllü <strong>hastane ortamında</strong>",
        "<strong>15 YIL GARANTİ</strong>",
      ],
      notIncluded: [
        "İmplant tedavisi — gerekirse ayrı fiyat",
        "Uçak biletinin €300'u aşan kısmı",
        "Vize / seyahat sigortası",
      ],
      advantages: [
        {
          title: "Hastane içinde klinik",
          body: 'IME Clinic, tam teşekküllü BHT Clinic hastanesi bünyesinde; tedavi hastane ortamında yapılır. "Ya komplikasyon olursa?" korkusunu yok eder — en güçlü koz.',
        },
        {
          title: "15.000+ uluslararası hasta",
          body: "Kanıtlanmış ölçek ve güven.",
        },
        {
          title: "Ivoclar premium malzeme",
          body: "Crown'larda uluslararası standartta dental materyal.",
        },
        {
          title: "15 yıl garanti",
          body: "Sektör standardı 5 yıl; biz 3 katı.",
        },
        {
          title: 'Gerçek "her şey dahil"',
          body: "Çekim, kanal, röntgen dahil; gizli ücret yok.",
        },
        {
          title: "Risksiz başlangıç",
          body: "Gelmeden önce ücretsiz online doktor görüşmesi + kendi dilinde tedavi planı.",
        },
        {
          title: "JCI · TEMOS · ISO akreditasyonu",
          body: "Uluslararası kalite standardı.",
        },
      ],
      rules: [
        {
          badge: "R2",
          text: 'Fiyat yalnızca <span class="hl">30 Haziran\'a kadar ≥€300 kapora</span> ile kilitlenir.',
        },
        {
          badge: "R3",
          text: 'Tedavi <span class="hl">en geç 31 Ağustos</span>\'ta tamamlanmalı.',
        },
        {
          badge: "R4",
          text: '<span class="hl">Eylül ve sonrası rezervasyon alınmaz.</span>',
        },
        {
          badge: "R5",
          text: "Uçak €300'a kadar; aşan kısmı hasta öder — görüşmede <strong>net söyle</strong>.",
        },
        {
          badge: "R6",
          text: "İmplant gerekirse ayrı fiyat — hastaya <strong>önceden bildir</strong>.",
        },
        {
          badge: "!",
          text: 'Kapora öncesi fiyat = "tahmini". "Kesin fiyat" sadece kapora sonrası.',
        },
      ],
      whatsapp:
        "Merhaba [Ad]! IME Clinic'ten [Koordinatör Adı]. The All-Inclusive Smile dental kampanyamızla ilgilendiğiniz için teşekkürler. Paketimiz: 20 zirkonyum crown + gidiş-dönüş uçak + 7 gece konaklama (1 refakatçi dahil) + tüm transferler, her şey dahil €2.990. Tedavi tam teşekküllü hastane ortamında, 15 yıl garantili. Gelmeden önce ücretsiz online doktor görüşmesi yapıp kendi dilinizde tedavi planınızı çıkarıyoruz. Dilerseniz mevcut diş fotoğraflarınızı WhatsApp'tan gönderin, ön değerlendirelim. 30 Haziran'a kadar kapora ile fiyat kilitlenir.",
      whatsappNotes: [
        {
          type: "yes",
          text: "<strong>Diş fotoğrafı gönderenler</strong> → online doktor görüşmesine öncelikli al",
        },
        {
          type: "warn",
          text: "<strong>İmplant ihtiyacı görünüyorsa</strong> → ayrı fiyat çıkacağını önceden bildir",
        },
        {
          type: "no",
          text: "Kapora sonrası sürpriz ücret <strong>çıkarma</strong> — güveni bozar",
        },
      ],
      faq: [
        {
          q: '"Eylül\'de gelebilir miyim?"',
          a: "Hayır — yaz kampanyası, tedavi 31 Ağustos'a kadar. Eylül ayrı görüşülür (kampanya dışı).",
        },
        {
          q: '"Uçağım €300\'dan pahalı?"',
          a: "Paket €300'a kadar karşılar; aşan kısmı siz tamamlarsınız.",
        },
        {
          q: '"Şimdi kapora vermesem fiyat geçerli mi?"',
          a: "Hayır — fiyat kapora ile kilitlenir. 30 Haziran'a kadar kapora yoksa garanti edilmez.",
        },
        {
          q: '"Hangi malzeme kullanılıyor?"',
          a: "Crown'larda premium Ivoclar dental malzeme — uluslararası standartta kalite.",
        },
        {
          q: '"Yurtdışında tedavi güvenli mi?"',
          a: "Tam teşekküllü hastane içindeyiz, tedavi hastane ortamında; JCI/TEMOS/ISO akrediteli; 15.000+ hasta.",
        },
        {
          q: '"İmplant gerekirse?"',
          a: "20 crown fiyata dahil; implant ayrı fiyatlandırılır, önceden bildirilir.",
        },
        {
          q: '"Memnun kalmazsam?"',
          a: "Zirkonyum crown'lar 15 yıl garantilidir.",
        },
      ],
      urgency:
        '"30 Haziran\'a kadar kapora ile fiyatınızı kilitleyin — yaz kontenjanı sınırlı, Eylül kapalı."',
      pitch:
        '"Gülüş tasarımınız <strong>IME Clinic</strong>\'te tam teşekküllü <strong>hastane ortamında</strong> planlanır — 20 zirkonyum crown, uçak + 7 gece konaklama dahil <strong>€2.990</strong>, üstelik <strong>15 yıl garanti</strong>."',
    },

    // ──────────────────────────────────────────────────────────
    // EN — English
    // ──────────────────────────────────────────────────────────
    en: {
      name: "The All-Inclusive Smile",
      specialtyTag: "Dentistry — Dental Tourism",
      hospitalNote: "within BHT Clinic hospital",
      tagline:
        "20 zirconium crowns + flight + 7 nights accommodation. All-inclusive, 15-year warranty.",
      price: "€2.990",
      priceNote:
        "all-inclusive · ~£2.590 for the UK · presented in your local currency",
      dates: {
        ad: "Jun 1–30",
        deposit: "Jun 30",
        treatment: "Aug 31",
        stay: "7 nights Istanbul",
      },
      packageItems: [
        "20 zirconium crowns — <strong>Ivoclar</strong> premium material",
        "Tooth extraction / root canal treatment (if needed)",
        "All X-rays + free consultation",
        "Online doctor consultation + treatment plan before you travel",
        "Round-trip flight ticket (up to €300)",
        "7 nights accommodation — min. 4-star hotel",
        "Accommodation for 1 companion",
        "All airport + clinic transfers",
        "Treatment in a full-service <strong>hospital setting</strong>",
        "<strong>15-YEAR WARRANTY</strong>",
      ],
      notIncluded: [
        "Implant treatment — separate price if needed",
        "Portion of the flight ticket exceeding €300",
        "Visa / travel insurance",
      ],
      advantages: [
        {
          title: "A clinic inside a hospital",
          body: 'IME Clinic operates within the full-service BHT Clinic hospital; treatment is carried out in a hospital setting. It eliminates the "What if there is a complication?" fear — our strongest card.',
        },
        {
          title: "15,000+ international patients",
          body: "Proven scale and trust.",
        },
        {
          title: "Ivoclar premium material",
          body: "Internationally certified dental material for the crowns.",
        },
        {
          title: "15-year warranty",
          body: "The industry standard is 5 years; we offer 3 times that.",
        },
        {
          title: 'A real "all-inclusive"',
          body: "Extraction, root canal and X-rays included; no hidden fees.",
        },
        {
          title: "Risk-free start",
          body: "Free online doctor consultation + a treatment plan in your own language before you travel.",
        },
        {
          title: "JCI · TEMOS · ISO accreditation",
          body: "International quality standard.",
        },
      ],
      rules: [
        {
          badge: "R2",
          text: 'The price is locked in only with a <span class="hl">deposit of ≥€300 by Jun 30</span>.',
        },
        {
          badge: "R3",
          text: 'Treatment must be completed <span class="hl">by Aug 31 at the latest</span>.',
        },
        {
          badge: "R4",
          text: '<span class="hl">No bookings accepted for September and after.</span>',
        },
        {
          badge: "R5",
          text: "Flight covered up to €300; the patient pays any excess — <strong>state this clearly</strong> during the conversation.",
        },
        {
          badge: "R6",
          text: "If an implant is needed, separate pricing applies — <strong>inform the patient in advance</strong>.",
        },
        {
          badge: "!",
          text: 'The pre-deposit price is an "estimate". A "firm price" only after the deposit.',
        },
      ],
      whatsapp:
        "Hello [Name]! This is [Coordinator Name] from IME Clinic. Thank you for your interest in our The All-Inclusive Smile dental campaign. Our package: 20 zirconium crowns + round-trip flight + 7 nights accommodation (1 companion included) + all transfers, all-inclusive €2.990. Treatment takes place in a full-service hospital setting, with a 15-year warranty. Before you travel we hold a free online doctor consultation and prepare your treatment plan in your own language. If you wish, send your current dental photos via WhatsApp and we'll do a preliminary assessment. The price is locked in with a deposit by Jun 30.",
      whatsappNotes: [
        {
          type: "yes",
          text: "<strong>Those who send dental photos</strong> → give priority for the online doctor consultation",
        },
        {
          type: "warn",
          text: "<strong>If an implant appears to be needed</strong> → inform in advance that a separate price will apply",
        },
        {
          type: "no",
          text: "Do <strong>not</strong> spring surprise fees after the deposit — it breaks trust",
        },
      ],
      faq: [
        {
          q: '"Can I come in September?"',
          a: "No — this is a summer campaign, treatment runs until Aug 31. September is discussed separately (outside the campaign).",
        },
        {
          q: '"What if my flight costs more than €300?"',
          a: "The package covers up to €300; you cover any excess.",
        },
        {
          q: '"Is the price valid if I don\'t pay a deposit now?"',
          a: "No — the price is locked in with the deposit. Without a deposit by Jun 30 it is not guaranteed.",
        },
        {
          q: '"Which material is used?"',
          a: "Premium Ivoclar dental material for the crowns — internationally certified quality.",
        },
        {
          q: '"Is treatment abroad safe?"',
          a: "We are inside a full-service hospital, treatment is in a hospital setting; JCI/TEMOS/ISO accredited; 15,000+ patients.",
        },
        {
          q: '"What if I need an implant?"',
          a: "20 crowns are included in the price; implants are priced separately and notified in advance.",
        },
        {
          q: '"What if I\'m not satisfied?"',
          a: "The zirconium crowns carry a 15-year warranty.",
        },
      ],
      urgency:
        '"Lock in your price with a deposit by Jun 30 — summer slots are limited, September is closed."',
      pitch:
        '"Your smile design is planned at <strong>IME Clinic</strong> in a full-service <strong>hospital setting</strong> — 20 zirconium crowns, flight + 7 nights accommodation included for <strong>€2.990</strong>, plus a <strong>15-year warranty</strong>."',
    },

    // ──────────────────────────────────────────────────────────
    // RU — Русский
    // ──────────────────────────────────────────────────────────
    ru: {
      name: "The All-Inclusive Smile",
      specialtyTag: "Стоматология — Стоматологический туризм",
      hospitalNote: "в составе больницы BHT Clinic",
      tagline:
        "20 циркониевых коронок + перелёт + 7 ночей проживания. Всё включено, гарантия 15 лет.",
      price: "€2.990",
      priceNote:
        "всё включено · для Великобритании ~£2.590 · предлагается в местной валюте",
      dates: {
        ad: "1–30 июня",
        deposit: "30 июня",
        treatment: "31 августа",
        stay: "7 ночей Стамбул",
      },
      packageItems: [
        "20 циркониевых коронок — премиальный материал <strong>Ivoclar</strong>",
        "Удаление зуба / лечение корневого канала (при необходимости)",
        "Все рентгеновские снимки + бесплатная консультация",
        "Онлайн-консультация врача + план лечения до приезда",
        "Авиабилет туда-обратно (до €300)",
        "7 ночей проживания — отель не ниже 4 звёзд",
        "Проживание 1 сопровождающего",
        "Все трансферы аэропорт + клиника",
        "Лечение в условиях полноценной <strong>больницы</strong>",
        "<strong>ГАРАНТИЯ 15 ЛЕТ</strong>",
      ],
      notIncluded: [
        "Имплантация — при необходимости отдельная цена",
        "Часть стоимости авиабилета, превышающая €300",
        "Виза / туристическая страховка",
      ],
      advantages: [
        {
          title: "Клиника внутри больницы",
          body: 'IME Clinic находится в составе полноценной больницы BHT Clinic; лечение проводится в условиях больницы. Это устраняет страх «А вдруг возникнет осложнение?» — наш сильнейший козырь.',
        },
        {
          title: "15 000+ международных пациентов",
          body: "Доказанный масштаб и доверие.",
        },
        {
          title: "Премиальный материал Ivoclar",
          body: "Стоматологический материал международного стандарта для коронок.",
        },
        {
          title: "Гарантия 15 лет",
          body: "Стандарт отрасли — 5 лет; у нас в 3 раза больше.",
        },
        {
          title: 'Настоящее «всё включено»',
          body: "Удаление, лечение каналов, рентген включены; скрытых платежей нет.",
        },
        {
          title: "Старт без риска",
          body: "Бесплатная онлайн-консультация врача + план лечения на вашем языке до приезда.",
        },
        {
          title: "Аккредитация JCI · TEMOS · ISO",
          body: "Международный стандарт качества.",
        },
      ],
      rules: [
        {
          badge: "R2",
          text: 'Цена фиксируется только при <span class="hl">депозите ≥€300 до 30 июня</span>.',
        },
        {
          badge: "R3",
          text: 'Лечение должно быть завершено <span class="hl">не позднее 31 августа</span>.',
        },
        {
          badge: "R4",
          text: '<span class="hl">Бронирования на сентябрь и позже не принимаются.</span>',
        },
        {
          badge: "R5",
          text: "Перелёт покрывается до €300; превышение оплачивает пациент — <strong>скажи об этом чётко</strong> во время беседы.",
        },
        {
          badge: "R6",
          text: "Если нужен имплант — отдельная цена; <strong>сообщи пациенту заранее</strong>.",
        },
        {
          badge: "!",
          text: 'Цена до депозита = «предварительная». «Точная цена» — только после депозита.',
        },
      ],
      whatsapp:
        "Здравствуйте, [Имя]! Это [Имя координатора] из IME Clinic. Спасибо за интерес к нашей стоматологической кампании The All-Inclusive Smile. Наш пакет: 20 циркониевых коронок + авиабилет туда-обратно + 7 ночей проживания (1 сопровождающий включён) + все трансферы, всё включено €2.990. Лечение проходит в условиях полноценной больницы, с гарантией 15 лет. До приезда мы проводим бесплатную онлайн-консультацию врача и составляем план лечения на вашем языке. При желании пришлите фотографии ваших зубов через WhatsApp, и мы проведём предварительную оценку. Цена фиксируется депозитом до 30 июня.",
      whatsappNotes: [
        {
          type: "yes",
          text: "<strong>Тех, кто прислал фото зубов</strong> → в приоритет на онлайн-консультацию врача",
        },
        {
          type: "warn",
          text: "<strong>Если видна потребность в импланте</strong> → заранее сообщи, что будет отдельная цена",
        },
        {
          type: "no",
          text: "Не <strong>выставляй</strong> неожиданных платежей после депозита — это подрывает доверие",
        },
      ],
      faq: [
        {
          q: '"Можно приехать в сентябре?"',
          a: "Нет — это летняя кампания, лечение до 31 августа. Сентябрь обсуждается отдельно (вне кампании).",
        },
        {
          q: '"Что если мой авиабилет дороже €300?"',
          a: "Пакет покрывает до €300; превышение доплачиваете вы.",
        },
        {
          q: '"Действует ли цена, если я не внесу депозит сейчас?"',
          a: "Нет — цена фиксируется депозитом. Без депозита до 30 июня она не гарантируется.",
        },
        {
          q: '"Какой материал используется?"',
          a: "Премиальный стоматологический материал Ivoclar для коронок — качество международного стандарта.",
        },
        {
          q: '"Безопасно ли лечение за рубежом?"',
          a: "Мы находимся внутри полноценной больницы, лечение в условиях больницы; аккредитация JCI/TEMOS/ISO; 15 000+ пациентов.",
        },
        {
          q: '"А если понадобится имплант?"',
          a: "20 коронок включены в цену; импланты оплачиваются отдельно и сообщаются заранее.",
        },
        {
          q: '"А если я останусь недоволен?"',
          a: "Циркониевые коронки имеют гарантию 15 лет.",
        },
      ],
      urgency:
        '"Зафиксируйте цену депозитом до 30 июня — летние места ограничены, сентябрь закрыт."',
      pitch:
        '"Дизайн вашей улыбки планируется в <strong>IME Clinic</strong> в условиях полноценной <strong>больницы</strong> — 20 циркониевых коронок, перелёт + 7 ночей проживания включены за <strong>€2.990</strong>, к тому же <strong>гарантия 15 лет</strong>."',
    },

    // ──────────────────────────────────────────────────────────
    // ES — Español
    // ──────────────────────────────────────────────────────────
    es: {
      name: "The All-Inclusive Smile",
      specialtyTag: "Odontología — Turismo Dental",
      hospitalNote: "dentro del hospital BHT Clinic",
      tagline:
        "20 coronas de circonio + vuelo + 7 noches de alojamiento. Todo incluido, 15 años de garantía.",
      price: "€2.990",
      priceNote:
        "todo incluido · ~£2.590 para el Reino Unido · se presenta en la moneda local",
      dates: {
        ad: "1–30 jun",
        deposit: "30 jun",
        treatment: "31 ago",
        stay: "7 noches Estambul",
      },
      packageItems: [
        "20 coronas de circonio — material premium <strong>Ivoclar</strong>",
        "Extracción dental / tratamiento de conducto (si es necesario)",
        "Todas las radiografías + consulta gratuita",
        "Consulta médica online + plan de tratamiento antes de viajar",
        "Billete de avión ida y vuelta (hasta €300)",
        "7 noches de alojamiento — hotel mín. 4 estrellas",
        "Alojamiento de 1 acompañante",
        "Todos los traslados aeropuerto + clínica",
        "Tratamiento en un <strong>entorno hospitalario</strong> completo",
        "<strong>15 AÑOS DE GARANTÍA</strong>",
      ],
      notIncluded: [
        "Tratamiento de implantes — precio aparte si es necesario",
        "Parte del billete de avión que supere los €300",
        "Visado / seguro de viaje",
      ],
      advantages: [
        {
          title: "Una clínica dentro de un hospital",
          body: 'IME Clinic se encuentra dentro del hospital completo BHT Clinic; el tratamiento se realiza en un entorno hospitalario. Elimina el miedo de «¿Y si hay una complicación?» — nuestra baza más fuerte.',
        },
        {
          title: "15.000+ pacientes internacionales",
          body: "Escala y confianza demostradas.",
        },
        {
          title: "Material premium Ivoclar",
          body: "Material dental de estándar internacional para las coronas.",
        },
        {
          title: "15 años de garantía",
          body: "El estándar del sector es 5 años; nosotros ofrecemos el triple.",
        },
        {
          title: 'Un auténtico «todo incluido»',
          body: "Extracción, endodoncia y radiografías incluidas; sin cargos ocultos.",
        },
        {
          title: "Comienzo sin riesgo",
          body: "Consulta médica online gratuita + un plan de tratamiento en tu propio idioma antes de viajar.",
        },
        {
          title: "Acreditación JCI · TEMOS · ISO",
          body: "Estándar de calidad internacional.",
        },
      ],
      rules: [
        {
          badge: "R2",
          text: 'El precio se bloquea únicamente con un <span class="hl">depósito de ≥€300 antes del 30 jun</span>.',
        },
        {
          badge: "R3",
          text: 'El tratamiento debe completarse <span class="hl">como muy tarde el 31 ago</span>.',
        },
        {
          badge: "R4",
          text: '<span class="hl">No se aceptan reservas para septiembre ni después.</span>',
        },
        {
          badge: "R5",
          text: "El vuelo se cubre hasta €300; el paciente paga el exceso — <strong>dilo con claridad</strong> durante la conversación.",
        },
        {
          badge: "R6",
          text: "Si se necesita un implante, se aplica un precio aparte — <strong>informa al paciente con antelación</strong>.",
        },
        {
          badge: "!",
          text: 'El precio antes del depósito es «estimado». El «precio en firme» solo después del depósito.',
        },
      ],
      whatsapp:
        "¡Hola [Nombre]! Soy [Nombre del coordinador] de IME Clinic. Gracias por tu interés en nuestra campaña dental The All-Inclusive Smile. Nuestro paquete: 20 coronas de circonio + vuelo ida y vuelta + 7 noches de alojamiento (1 acompañante incluido) + todos los traslados, todo incluido €2.990. El tratamiento se realiza en un entorno hospitalario completo, con 15 años de garantía. Antes de viajar realizamos una consulta médica online gratuita y preparamos tu plan de tratamiento en tu propio idioma. Si lo deseas, envía fotos de tus dientes por WhatsApp y haremos una evaluación preliminar. El precio se bloquea con un depósito antes del 30 jun.",
      whatsappNotes: [
        {
          type: "yes",
          text: "<strong>Quienes envíen fotos dentales</strong> → dales prioridad para la consulta médica online",
        },
        {
          type: "warn",
          text: "<strong>Si parece necesario un implante</strong> → informa con antelación de que habrá un precio aparte",
        },
        {
          type: "no",
          text: "<strong>No</strong> saques cargos sorpresa tras el depósito — rompe la confianza",
        },
      ],
      faq: [
        {
          q: '"¿Puedo venir en septiembre?"',
          a: "No — es una campaña de verano, el tratamiento es hasta el 31 ago. Septiembre se trata aparte (fuera de la campaña).",
        },
        {
          q: '"¿Y si mi vuelo cuesta más de €300?"',
          a: "El paquete cubre hasta €300; tú cubres el exceso.",
        },
        {
          q: '"¿El precio es válido si no pago un depósito ahora?"',
          a: "No — el precio se bloquea con el depósito. Sin depósito antes del 30 jun no se garantiza.",
        },
        {
          q: '"¿Qué material se utiliza?"',
          a: "Material dental premium Ivoclar para las coronas — calidad de estándar internacional.",
        },
        {
          q: '"¿Es seguro el tratamiento en el extranjero?"',
          a: "Estamos dentro de un hospital completo, el tratamiento es en entorno hospitalario; acreditados JCI/TEMOS/ISO; 15.000+ pacientes.",
        },
        {
          q: '"¿Y si necesito un implante?"',
          a: "Las 20 coronas están incluidas en el precio; los implantes se cotizan aparte y se notifican con antelación.",
        },
        {
          q: '"¿Y si no quedo satisfecho?"',
          a: "Las coronas de circonio tienen 15 años de garantía.",
        },
      ],
      urgency:
        '"Bloquea tu precio con un depósito antes del 30 jun — las plazas de verano son limitadas, septiembre está cerrado."',
      pitch:
        '"El diseño de tu sonrisa se planifica en <strong>IME Clinic</strong> en un <strong>entorno hospitalario</strong> completo — 20 coronas de circonio, vuelo + 7 noches de alojamiento incluidos por <strong>€2.990</strong>, además de <strong>15 años de garantía</strong>."',
    },

    // ──────────────────────────────────────────────────────────
    // IT — Italiano
    // ──────────────────────────────────────────────────────────
    it: {
      name: "The All-Inclusive Smile",
      specialtyTag: "Odontoiatria — Turismo Dentale",
      hospitalNote: "all'interno dell'ospedale BHT Clinic",
      tagline:
        "20 corone in zirconio + volo + 7 notti di soggiorno. Tutto incluso, 15 anni di garanzia.",
      price: "€2.990",
      priceNote:
        "tutto incluso · ~£2.590 per il Regno Unito · presentato nella valuta locale",
      dates: {
        ad: "1–30 giu",
        deposit: "30 giu",
        treatment: "31 ago",
        stay: "7 notti Istanbul",
      },
      packageItems: [
        "20 corone in zirconio — materiale premium <strong>Ivoclar</strong>",
        "Estrazione dentale / trattamento canalare (se necessario)",
        "Tutte le radiografie + consulenza gratuita",
        "Consulto medico online + piano di trattamento prima di partire",
        "Biglietto aereo andata e ritorno (fino a €300)",
        "7 notti di soggiorno — hotel min. 4 stelle",
        "Soggiorno di 1 accompagnatore",
        "Tutti i transfer aeroporto + clinica",
        "Trattamento in un <strong>ambiente ospedaliero</strong> completo",
        "<strong>15 ANNI DI GARANZIA</strong>",
      ],
      notIncluded: [
        "Trattamento implantare — prezzo a parte se necessario",
        "Parte del biglietto aereo che supera i €300",
        "Visto / assicurazione di viaggio",
      ],
      advantages: [
        {
          title: "Una clinica dentro un ospedale",
          body: 'IME Clinic si trova all\'interno dell\'ospedale completo BHT Clinic; il trattamento viene effettuato in ambiente ospedaliero. Elimina la paura «E se ci fosse una complicazione?» — la nostra carta più forte.',
        },
        {
          title: "15.000+ pazienti internazionali",
          body: "Scala e fiducia comprovate.",
        },
        {
          title: "Materiale premium Ivoclar",
          body: "Materiale dentale di standard internazionale per le corone.",
        },
        {
          title: "15 anni di garanzia",
          body: "Lo standard del settore è 5 anni; noi offriamo il triplo.",
        },
        {
          title: 'Un vero «tutto incluso»',
          body: "Estrazione, devitalizzazione e radiografie incluse; nessun costo nascosto.",
        },
        {
          title: "Avvio senza rischi",
          body: "Consulto medico online gratuito + un piano di trattamento nella tua lingua prima di partire.",
        },
        {
          title: "Accreditamento JCI · TEMOS · ISO",
          body: "Standard di qualità internazionale.",
        },
      ],
      rules: [
        {
          badge: "R2",
          text: 'Il prezzo si blocca solo con un <span class="hl">deposito di ≥€300 entro il 30 giu</span>.',
        },
        {
          badge: "R3",
          text: 'Il trattamento deve essere completato <span class="hl">entro il 31 ago al più tardi</span>.',
        },
        {
          badge: "R4",
          text: '<span class="hl">Non si accettano prenotazioni per settembre e oltre.</span>',
        },
        {
          badge: "R5",
          text: "Il volo è coperto fino a €300; l'eccedenza la paga il paziente — <strong>dillo chiaramente</strong> durante la conversazione.",
        },
        {
          badge: "R6",
          text: "Se serve un impianto, si applica un prezzo a parte — <strong>informa il paziente in anticipo</strong>.",
        },
        {
          badge: "!",
          text: 'Il prezzo prima del deposito è «stimato». Il «prezzo definitivo» solo dopo il deposito.',
        },
      ],
      whatsapp:
        "Ciao [Nome]! Sono [Nome del coordinatore] di IME Clinic. Grazie per l'interesse nella nostra campagna dentale The All-Inclusive Smile. Il nostro pacchetto: 20 corone in zirconio + volo andata e ritorno + 7 notti di soggiorno (1 accompagnatore incluso) + tutti i transfer, tutto incluso €2.990. Il trattamento si svolge in un ambiente ospedaliero completo, con 15 anni di garanzia. Prima di partire effettuiamo un consulto medico online gratuito e prepariamo il tuo piano di trattamento nella tua lingua. Se vuoi, invia le foto dei tuoi denti via WhatsApp e faremo una valutazione preliminare. Il prezzo si blocca con un deposito entro il 30 giu.",
      whatsappNotes: [
        {
          type: "yes",
          text: "<strong>Chi invia foto dentali</strong> → dai priorità per il consulto medico online",
        },
        {
          type: "warn",
          text: "<strong>Se sembra necessario un impianto</strong> → informa in anticipo che ci sarà un prezzo a parte",
        },
        {
          type: "no",
          text: "<strong>Non</strong> far comparire costi a sorpresa dopo il deposito — rovina la fiducia",
        },
      ],
      faq: [
        {
          q: '"Posso venire a settembre?"',
          a: "No — è una campagna estiva, il trattamento è fino al 31 ago. Settembre si valuta a parte (fuori campagna).",
        },
        {
          q: '"E se il mio volo costa più di €300?"',
          a: "Il pacchetto copre fino a €300; l'eccedenza la copri tu.",
        },
        {
          q: '"Il prezzo è valido se non verso un deposito ora?"',
          a: "No — il prezzo si blocca con il deposito. Senza deposito entro il 30 giu non è garantito.",
        },
        {
          q: '"Quale materiale viene usato?"',
          a: "Materiale dentale premium Ivoclar per le corone — qualità di standard internazionale.",
        },
        {
          q: '"È sicuro il trattamento all\'estero?"',
          a: "Siamo all'interno di un ospedale completo, il trattamento è in ambiente ospedaliero; accreditati JCI/TEMOS/ISO; 15.000+ pazienti.",
        },
        {
          q: '"E se mi serve un impianto?"',
          a: "Le 20 corone sono incluse nel prezzo; gli impianti sono quotati a parte e comunicati in anticipo.",
        },
        {
          q: '"E se non sono soddisfatto?"',
          a: "Le corone in zirconio hanno 15 anni di garanzia.",
        },
      ],
      urgency:
        '"Blocca il tuo prezzo con un deposito entro il 30 giu — i posti estivi sono limitati, settembre è chiuso."',
      pitch:
        '"Il design del tuo sorriso viene pianificato presso <strong>IME Clinic</strong> in un <strong>ambiente ospedaliero</strong> completo — 20 corone in zirconio, volo + 7 notti di soggiorno inclusi a <strong>€2.990</strong>, oltre a <strong>15 anni di garanzia</strong>."',
    },
  },
};
