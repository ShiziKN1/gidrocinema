(function () {
  'use strict';

  // ——— Hero slider (только на главной) ———
  var slides = document.querySelectorAll('.hero-slide');
  var dots = document.querySelectorAll('.dot');
  if (slides.length && dots.length) {
    var current = 0;
    function goToSlide(n) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (n + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }
    window.changeSlide = function (dir) { goToSlide(current + dir); };
    window.goToSlide = function (n) { goToSlide(n); };
    setInterval(function () { goToSlide(current + 1); }, 5000);
  }

  // ——— Переключение языка ———
  function changeLang(lang) {
    var elements = document.querySelectorAll('[data-ru]');
    var key = 'data-' + lang;
    elements.forEach(function (el) {
      var text = el.getAttribute(key);
      if (text !== null && text !== undefined) el.textContent = text;
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
    document.querySelectorAll('.lang-link').forEach(function (link) {
      link.classList.remove('active');
      var l = link.textContent.toLowerCase();
      if ((lang === 'ru' && l.indexOf('рус') !== -1) ||
          (lang === 'kg' && l.indexOf('кырг') !== -1) ||
          (lang === 'en' && l.indexOf('eng') !== -1)) link.classList.add('active');
    });
  }
  window.changeLang = changeLang;

  document.querySelectorAll('.lang-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var lang = link.getAttribute('onclick');
      if (lang) {
        var m = lang.match(/changeLang\s*\(\s*['"]?(\w+)['"]?\s*\)/);
        if (m) changeLang(m[1]);
      }
    });
  });

  var savedLang = (function () { try { return localStorage.getItem('lang'); } catch (e) { return null; } })() || 'ru';
  changeLang(savedLang);

  function setModalOpen(open) {
    document.body.style.overflow = open ? 'hidden' : '';
    document.body.style.paddingRight = open ? (window.innerWidth - document.documentElement.clientWidth + 'px') : '';
  }

  // ——— Модалка «О фильме»: #info (showInfo/closeInfo) ———
  function showInfo() {
    var el = document.getElementById('info');
    if (el) {
      el.classList.add('show');
      setModalOpen(true);
    }
  }
  function closeInfo() {
    var el = document.getElementById('info');
    if (el) {
      el.classList.remove('show');
      setModalOpen(false);
    }
  }
  window.showInfo = showInfo;
  window.closeInfo = closeInfo;

  // ——— Модалка #filmInfo (кнопка .btn-alpha и #closeInfo) ———
  var filmInfo = document.getElementById('filmInfo');
  var closeInfoBtn = document.getElementById('closeInfo');
  var btnAlpha = document.querySelector('.btn-alpha');
  if (filmInfo && closeInfoBtn) {
    if (btnAlpha) {
      btnAlpha.addEventListener('click', function () {
        filmInfo.classList.add('show');
        setModalOpen(true);
      });
    }
    closeInfoBtn.addEventListener('click', function () {
      filmInfo.classList.remove('show');
      setModalOpen(false);
    });
  }

  // Закрытие по клику на оверлей (и #info, и #filmInfo)
  document.addEventListener('click', function (e) {
    if (e.target.id === 'filmInfo') {
      e.target.classList.remove('show');
      setModalOpen(false);
    }
    if (e.target.id === 'info') {
      e.target.classList.remove('show');
      setModalOpen(false);
    }
  });

  // ——— Кнопка «Наверх» ———
  var backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ——— Мобильное меню ———
  function toggleMenu() {
    var menu = document.querySelector('.menu');
    if (menu) menu.classList.toggle('open');
  }
  window.toggleMenu = toggleMenu;

  // Закрытие меню по клику вне его (на мобильных)
  document.addEventListener('click', function (e) {
    var menu = document.querySelector('.menu');
    if (menu && menu.classList.contains('open') && !menu.contains(e.target) && !e.target.classList.contains('hamburger')) {
      menu.classList.remove('open');
    }
  });
})();
