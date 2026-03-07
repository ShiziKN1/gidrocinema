// ===== SLIDER =====
let current = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');

function goToSlide(n) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}
function changeSlide(dir) { goToSlide(current + dir); }
setInterval(() => changeSlide(1), 5000);

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

// ===== TRANSLATIONS =====
const translations = {
  ru: {
    "network": "сеть кинотеатров",
    "movies": "Фильмы",
    "cinemas": "Кинотеатры",
    "announcements": "Анонсы",
    "login": "Войти",
    "now_playing": "Сейчас в кино",
    "genre": "Жанр: ",
    "year": "Год: ",
    "footer_contacts": "Контакты",
    "footer_feedback": "Обратная связь",
    "footer_newsletter": "Рассылка",
    "footer_ads": "Уведомление о рекламе",
    "footer_faq": "FAQ",
    "footer_vacancies": "Вакансии",
    "footer_rules": "Правила посещения кинотеатров",
    "lang_ru": "Рус",
    "lang_kg": "Кырг",
    "lang_en": "Eng"
  },
  kg: {
    "network": "кинотеатрлар тармагы",
    "movies": "Тасмалар",
    "cinemas": "Кинотеатрлар",
    "announcements": "Анонстор",
    "login": "Кирүү",
    "now_playing": "Азыр кинодо",
    "genre": "Жанры: ",
    "year": "Жылы: ",
    "footer_contacts": "Байланыштар",
    "footer_feedback": "Кайтарым байланыш",
    "footer_newsletter": "Жазылуу",
    "footer_ads": "Жарнама жөнүндө билдирүү",
    "footer_faq": "КБС (FAQ)",
    "footer_vacancies": "Ваканшялар",
    "footer_rules": "Кинотеатрларга баруу эрежелери",
    "lang_ru": "Рус",
    "lang_kg": "Кырг",
    "lang_en": "Eng"
  },
  en: {
    "network": "cinema network",
    "movies": "Movies",
    "cinemas": "Cinemas",
    "announcements": "Announcements",
    "login": "Login",
    "now_playing": "Now in cinema",
    "genre": "Genre: ",
    "year": "Year: ",
    "footer_contacts": "Contacts",
    "footer_feedback": "Feedback",
    "footer_newsletter": "Newsletter",
    "footer_ads": "Ad Notice",
    "footer_faq": "FAQ",
    "footer_vacancies": "Vacancies",
    "footer_rules": "Cinema Rules",
    "lang_ru": "Rus",
    "lang_kg": "Kgz",
    "lang_en": "Eng"
  }
};

let currentLang = 'ru';

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang]?.[key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.querySelectorAll('.lang-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.lang-link').forEach(l => l.classList.remove('active'));
    // Активируем оба — в десктоп и мобильном меню
    document.querySelectorAll(`.lang-link[data-lang="${link.getAttribute('data-lang')}"]`)
      .forEach(l => l.classList.add('active'));
    const lang = link.getAttribute('data-lang');
    if (lang) setLanguage(lang);
  });
});

// Дефолтный язык — Рус
setLanguage('ru');