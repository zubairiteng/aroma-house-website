/**
 * AROMA HOUSE - Core Interactive Controller
 * Lightweight Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initSizeSelectors();
  initCommercialPlayer();
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
 * TV Commercial Player & Story Timeline Sync
 */
function initCommercialPlayer() {
  const video = document.querySelector('.cinema-video-layer');
  const tabs = document.querySelectorAll('.timeline-step-btn');
  const slides = document.querySelectorAll('.story-slide');

  if (!video || !tabs.length) return;

  const sceneDuration = 3.0; // 3 seconds per scene

  // Sync timeline tabs with video playback time
  video.addEventListener('timeupdate', () => {
    const activeIdx = Math.min(Math.floor(video.currentTime / sceneDuration), tabs.length - 1);
    
    tabs.forEach((tab, idx) => {
      if (idx === activeIdx) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    if (slides.length) {
      slides.forEach((slide, idx) => {
        if (idx === activeIdx) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    }
  });

  // Clicking a timeline tab jumps to that scene
  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      video.currentTime = idx * sceneDuration;
      video.play().catch(() => {});
    });
  });
}
