document.addEventListener('DOMContentLoaded', () => {
  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // Animated counters
  const counters = document.querySelectorAll('[data-count]');
  const animateCounter = (el) => {
    const raw = el.getAttribute('data-count');
    if (!/^\d+$/.test(raw)) return;
    const end = parseInt(raw, 10);
    const prefix = el.getAttribute('data-prefix') || '';
    const duration = 900;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = prefix + Math.floor(progress * end);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = prefix + end;
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window && counters.length) {
    const io2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          io2.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach((el) => io2.observe(el));
  }

  // Subtle parallax on hero background
  const heroBg = document.querySelector('.hero-v2-bg');
  const hero = document.querySelector('.hero-v2');
  if (heroBg && hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', () => {
      const rect = hero.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        const offset = window.scrollY * 0.15;
        heroBg.style.transform = 'translateY(' + offset + 'px)';
      }
    }, { passive: true });
  }
});
