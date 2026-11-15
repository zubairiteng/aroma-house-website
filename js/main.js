/**
 * AROMA HOUSE - Core Interactive Controller
 * Lightweight Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initSizeSelectors();
  initFullscreenHeroSlideshow();
});

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
    drawer.classList.toggle('open');
    document.body.style.overflow = !isExpanded ? 'hidden' : '';
  });

  drawer.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
      toggleBtn.focus();
    }
  });
}

/**
 * Product Size Selector & Price Switcher
 */
function initSizeSelectors() {
  const cards = document.querySelectorAll('.fragrance-card, .product-card');

  cards.forEach(card => {
    const sizeButtons = card.querySelectorAll('.size-pill-btn, .size-btn');
    const priceDisplay = card.querySelector('.price-amount-highlight, .price-display-value');
    const selectedSizeLabel = card.querySelector('.current-size-label');

    if (!sizeButtons.length || !priceDisplay) return;

    sizeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetSize = btn.getAttribute('data-size');
        const targetPrice = btn.getAttribute('data-price');

        sizeButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        if (targetPrice) {
          priceDisplay.textContent = targetPrice;
        }

        if (selectedSizeLabel) {
          selectedSizeLabel.textContent = targetSize;
        }
      });
    });
  });
}

/**
 * Full-Bleed Background Hero Slideshow Controller
 * Synchronizes background widescreen slides with timeline pills & prices
 */
function initFullscreenHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-bg-slide');
  const pills = document.querySelectorAll('.slide-pill-trigger');
  const titleDisplay = document.getElementById('hero-active-title');
  const priceDisplay = document.getElementById('hero-active-price');
  const heroSection = document.querySelector('.hero-fullscreen-section');

  if (!slides.length || !pills.length) return;

  let currentIdx = 0;
  let slideTimer = null;
  const slideInterval = 4500; // 4.5 seconds per fragrance slide

  function goToSlide(targetIdx) {
    if (targetIdx < 0 || targetIdx >= slides.length) return;
    currentIdx = targetIdx;

    slides.forEach((slide, idx) => {
      if (idx === currentIdx) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    pills.forEach((pill, idx) => {
      const isCurrent = idx === currentIdx;
      pill.classList.toggle('active', isCurrent);
      pill.setAttribute('aria-selected', String(isCurrent));
    });

    const activePill = pills[currentIdx];
    if (activePill) {
      const name = activePill.getAttribute('data-name');
      const price = activePill.getAttribute('data-price');
      if (titleDisplay && name) titleDisplay.textContent = name;
      if (priceDisplay && price) priceDisplay.textContent = price;
    }
  }

  function startTimer() {
    stopTimer();
    slideTimer = setInterval(() => {
      const nextIdx = (currentIdx + 1) % slides.length;
      goToSlide(nextIdx);
    }, slideInterval);
  }

  function stopTimer() {
    if (slideTimer) {
      clearInterval(slideTimer);
      slideTimer = null;
    }
  }

  // Clickable interactive pills
  pills.forEach((pill, idx) => {
    pill.addEventListener('click', () => {
      goToSlide(idx);
      startTimer();
    });
  });

  // Pause on hover
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopTimer);
    heroSection.addEventListener('mouseleave', startTimer);
  }

  // Initialize auto-rotation
  startTimer();
}
