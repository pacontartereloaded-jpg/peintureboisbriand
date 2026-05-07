// Peinture Boisbriand — interactions snap
(function () {
  'use strict';

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  // FAQ accordion
  var details = document.querySelectorAll('.faq-list details');
  details.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) {
        details.forEach(function (other) { if (other !== d) other.open = false; });
      }
    });
  });

  // Reveal-on-scroll (snap, fast)
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.18 });
    document.querySelectorAll('.section-title, .day, .svc, .step, .galerie-grid figure, .temoignages-grid blockquote').forEach(function (el) {
      el.classList.add('reveal');
      io.observe(el);
    });
  }
})();
