/**
 * AROMA HOUSE - Core Interactive Controller
 * Lightweight Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initSizeSelectors();
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

  // Close menu when a link inside is clicked
  drawer.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on Escape key
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
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    const sizeButtons = card.querySelectorAll('.size-btn');
    const priceDisplay = card.querySelector('.price-display-value');
    const selectedSizeLabel = card.querySelector('.current-size-label');

    if (!sizeButtons.length || !priceDisplay) return;

    sizeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetSize = btn.getAttribute('data-size');
        const targetPrice = btn.getAttribute('data-price');

        // Update active button state
        sizeButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        // Update price display
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
