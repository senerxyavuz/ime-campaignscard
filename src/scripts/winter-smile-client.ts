// IME Clinic — All-Inclusive Smile Campaign Client
// Strict Single URL architecture (https://www.imeclinic.com/all-inclusive-smile/)
// Dynamic in-place language switching, genuine clinical results modal, video showcase

type LangCode = 'en' | 'tr' | 'ru' | 'es' | 'it';

const FLAG_SVGS: Record<LangCode, string> = {
  en: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="22" height="15"><clipPath id="en-c"><path d="M0 0v30h60V0z"/></clipPath><clipPath id="en-d"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath><g clip-path="url(#en-c)"><path d="M0 0v30h60V0z" fill="#012169"/><path d="m0 0 60 30m0-30L0 30" stroke="#fff" stroke-width="6"/><path d="m0 0 60 30m0-30L0 30" clip-path="url(#en-d)" stroke="#C8102E" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></g></svg>`,
  tr: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 -30000 90000 60000"><path fill="#e30a17" d="M0-30000h90000v60000H0z"/><path fill="#fff" d="m41750 0 13568-4408-8386 11541V-7133l8386 11541zm925 8021a15000 15000 0 1 1 0-16042 12000 12000 0 1 0 0 16042z"/></svg>`,
  ru: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" width="22" height="15"><path fill="#fff" d="M0 0h9v3H0z"/><path fill="#d52b1e" d="M0 3h9v3H0z"/><path fill="#0039a6" d="M0 2h9v2H0z"/></svg>`,
  es: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="22" height="15"><rect width="3" height="2" fill="#c60b1e"/><rect width="3" height="1" y=".5" fill="#ffc400"/></svg>`,
  it: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 3 2"><path fill="#009246" d="M0 0h3v2H0z"/><path fill="#fff" d="M1 0h2v2H1z"/><path fill="#ce2b37" d="M2 0h1v2H2z"/></svg>`
};

function init() {
  // If user landed on /tr/all-inclusive-smile/ or /ru/..., redirect to single canonical root /all-inclusive-smile/?lang=...
  if (typeof window !== 'undefined' && window.location) {
    const pathname = window.location.pathname;
    const match = pathname.match(/^\/(tr|ru|es|it)\/all-inclusive-smile\/?$/);
    if (match) {
      const targetLang = match[1];
      const newUrl = '/all-inclusive-smile/?lang=' + targetLang + (window.location.hash || '');
      window.location.replace(newUrl);
      return;
    }
  }

  // Load translations data from the embedded JSON tag
  let translations: Record<string, any> = {};
  const dataEl = document.getElementById('smile-translations');
  if (dataEl && dataEl.textContent) {
    try {
      translations = JSON.parse(dataEl.textContent);
    } catch (e) {
      console.error('Failed to parse translations', e);
    }
  }

  const langTrigger = document.getElementById('lang-trigger');
  const langMenu = document.getElementById('lang-menu');
  const activeFlagIcon = document.getElementById('active-flag');
  const activeLangCode = document.getElementById('active-lang-code');
  const langItems = document.querySelectorAll<HTMLAnchorElement>('.Dw-EXq_item');

  function getInitialLang(): LangCode {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang') as LangCode | null;
    if (urlLang && ['en', 'tr', 'ru', 'es', 'it'].includes(urlLang)) {
      return urlLang;
    }
    const stored = localStorage.getItem('ime_smile_lang') as LangCode | null;
    if (stored && ['en', 'tr', 'ru', 'es', 'it'].includes(stored)) {
      return stored;
    }
    const htmlLang = document.documentElement.lang as LangCode;
    if (htmlLang && ['en', 'tr', 'ru', 'es', 'it'].includes(htmlLang)) {
      return htmlLang;
    }
    return 'en';
  }

  let currentLang: LangCode = getInitialLang();

  function applyLanguage(lang: LangCode, updateUrl: boolean = false) {
    currentLang = lang;
    const dict = translations[lang];
    if (!dict) return;

    // Update <html lang>
    document.documentElement.lang = lang;
    document.documentElement.dir = 'ltr';

    // Update document title and meta description
    if (dict.metaTitle) document.title = dict.metaTitle;
    const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDesc && dict.metaDesc) metaDesc.content = dict.metaDesc;

    // Update text elements with data-i18n
    const elements = document.querySelectorAll<HTMLElement>('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update trigger UI
    if (activeFlagIcon && FLAG_SVGS[lang]) {
      activeFlagIcon.innerHTML = FLAG_SVGS[lang];
    }
    if (activeLangCode) {
      activeLangCode.textContent = lang.toUpperCase();
    }

    // Update active state in dropdown
    langItems.forEach(item => {
      const itemLang = item.getAttribute('data-lang');
      if (itemLang === lang) {
        item.setAttribute('aria-current', 'true');
      } else {
        item.removeAttribute('aria-current');
      }
    });

    // Persist choice
    try {
      localStorage.setItem('ime_smile_lang', lang);
    } catch {}

    // Update URL query strictly within /all-inclusive-smile/
    if (updateUrl && window.history && window.history.replaceState) {
      const newQuery = lang === 'en' ? '' : '?lang=' + lang;
      const targetUrl = '/all-inclusive-smile/' + newQuery + (window.location.hash || '');
      window.history.replaceState(null, '', targetUrl);
    }
  }

  // Initial application if language from query/storage differs from SSR
  if (currentLang !== document.documentElement.lang) {
    applyLanguage(currentLang, false);
  }

  // Dropdown toggle
  if (langTrigger && langMenu) {
    langTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langMenu.style.display !== 'none';
      langMenu.style.display = isOpen ? 'none' : 'grid';
      langTrigger.setAttribute('aria-expanded', String(!isOpen));
    });

    document.addEventListener('click', (e) => {
      if (!langMenu.contains(e.target as Node) && !langTrigger.contains(e.target as Node)) {
        langMenu.style.display = 'none';
        langTrigger.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && langMenu.style.display !== 'none') {
        langMenu.style.display = 'none';
        langTrigger.setAttribute('aria-expanded', 'false');
        langTrigger.focus();
      }
    });
  }

  // Item click handler (in-place dynamic switch without navigating away)
  langItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const chosenLang = item.getAttribute('data-lang') as LangCode;
      if (chosenLang && ['en', 'tr', 'ru', 'es', 'it'].includes(chosenLang)) {
        applyLanguage(chosenLang, true);
        if (langMenu && langTrigger) {
          langMenu.style.display = 'none';
          langTrigger.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Direct WhatsApp Button click handler
  const whatsappButtons = document.querySelectorAll<HTMLElement>('.cta-whatsapp-btn');
  whatsappButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const dict = translations[currentLang] || translations.en || {};
      const msg = dict.whatsappMessage || "Hello IME Clinic, I would like to get information about the All-Inclusive Smile campaign in Istanbul.";
      const url = `https://api.whatsapp.com/send?phone=905465248334&text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });

  // Clinical Results Image Zoom Dialog
  const imageDialog = document.getElementById('image-dialog');
  const imageDialogImg = document.getElementById('image-dialog-img') as HTMLImageElement | null;
  const imageDialogClose = document.getElementById('image-dialog-close');
  const resultCards = document.querySelectorAll<HTMLElement>('.result-card');

  resultCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      if (img && imageDialog && imageDialogImg) {
        imageDialogImg.src = img.src;
        imageDialogImg.alt = img.alt || 'Clinical Result';
        imageDialog.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeImageDialog() {
    if (imageDialog) {
      imageDialog.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (imageDialogClose) {
    imageDialogClose.addEventListener('click', closeImageDialog);
  }
  if (imageDialog) {
    imageDialog.addEventListener('click', (e) => {
      if (e.target === imageDialog) {
        closeImageDialog();
      }
    });
  }

  // Video Showcase Dialog
  const videoDialog = document.getElementById('video-dialog');
  const videoDialogClose = document.getElementById('video-dialog-close');
  const videoContainer = document.getElementById('video-dialog-container');
  const videoCards = document.querySelectorAll<HTMLElement>('.showcase-video');

  const videoSources: Record<string, string> = {
    '0': 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1', // tour
    '1': 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1', // doctor
    '2': 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1', // design
    '3': 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1', // lab
    '4': 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1', // reveal
    '5': 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1'  // journey
  };

  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      const vidIndex = card.getAttribute('data-video-index') || '0';
      if (videoDialog && videoContainer) {
        videoDialog.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeVideoDialog() {
    if (videoDialog) {
      videoDialog.classList.remove('active');
      document.body.style.overflow = '';
      if (videoContainer) videoContainer.innerHTML = '';
    }
  }

  if (videoDialogClose) {
    videoDialogClose.addEventListener('click', closeVideoDialog);
  }
  if (videoDialog) {
    videoDialog.addEventListener('click', (e) => {
      if (e.target === videoDialog) {
        closeVideoDialog();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeImageDialog();
      closeVideoDialog();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
