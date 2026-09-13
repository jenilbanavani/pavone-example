/**
 * PAVONE THICK SHAKE — CORE INTERACTIVE JAVASCRIPT
 * Editorial Slider, Craving Cart, Menu Filter, and Localized WhatsApp Checkout
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initMenuFilter();
  initCravingCart();
  initHeaderScroll();
  initMobileMenu();
});

/* ==========================================================================
   1. HERO EDITORIAL SLIDER
   ========================================================================== */
function initHeroSlider() {
  const slides = document.querySelectorAll('.shake-slide');
  const dashes = document.querySelectorAll('.progress-dash');
  const counterCurrent = document.querySelector('.counter-current');
  const prevBtn = document.querySelector('.slider-arrow-btn.prev');
  const nextBtn = document.querySelector('.slider-arrow-btn.next');
  const nextFlavorTitle = document.querySelector('.next-flavor-title');
  const heroSection = document.querySelector('.hero-section');
  const heroStage = document.querySelector('.hero-stage');

  if (!slides.length) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoplayTimer = null;
  const autoplayDelay = 3000; // 3 seconds display time per slide

  function showSlide(index) {
    // Normalise index
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    // Update slides
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentIndex);
    });

    // Update progress dashes
    dashes.forEach((dash, idx) => {
      dash.classList.toggle('active', idx === currentIndex);
    });

    // Update counter
    if (counterCurrent) {
      counterCurrent.textContent = String(currentIndex + 1).padStart(2, '0');
    }

    // Update next flavor preview indicator
    if (nextFlavorTitle) {
      const nextIdx = (currentIndex + 1) % totalSlides;
      const nextName = slides[nextIdx]?.getAttribute('data-flavor-name') || 'NEXT SHAKE';
      nextFlavorTitle.textContent = nextName.toUpperCase();
    }
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, autoplayDelay);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  const nextIndicator = document.querySelector('.slider-next-indicator');
  if (nextIndicator) {
    nextIndicator.addEventListener('click', () => {
      nextSlide();
      startAutoplay();
    });
  }

  // Button Controls
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoplay();
    });
  }

  // Dashes direct click
  dashes.forEach((dash, idx) => {
    dash.addEventListener('click', () => {
      showSlide(idx);
      startAutoplay();
    });
  });

  // Pause on desktop hover over hero section; resume on leave
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoplay);
    heroSection.addEventListener('mouseleave', startAutoplay);
  }

  // Touch swipe support for mobile
  if (heroStage) {
    let touchStartX = 0;
    let touchEndX = 0;

    heroStage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroStage.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > 40) {
        if (swipeDistance < 0) nextSlide();
        else prevSlide();
        startAutoplay();
      }
    }
  }

  // Initialize first slide and start 3s timer
  showSlide(0);
  startAutoplay();
}

/* ==========================================================================
   2. MENU CATEGORY FILTER
   ========================================================================== */
function initMenuFilter() {
  const filterBtns = document.querySelectorAll('.category-btn');
  const menuCards = document.querySelectorAll('.menu-card');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetCategory = btn.getAttribute('data-category');

      menuCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (targetCategory === 'all' || cardCategory === targetCategory) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   3. CRAVING CART & WHATSAPP CHECKOUT
   ========================================================================== */
const cartState = [];

function initCravingCart() {
  const openCartBtns = document.querySelectorAll('.btn-open-cart, .btn-cart-trigger');
  const closeCartBtns = document.querySelectorAll('.drawer-close-btn, .cart-drawer-overlay');
  const cartOverlay = document.querySelector('.cart-drawer-overlay');
  const orderBtns = document.querySelectorAll('.btn-card-order');
  const cartBody = document.querySelector('.drawer-body');
  const cartTotalAmount = document.querySelector('.cart-total-amount');
  const cartBadgeCounters = document.querySelectorAll('.cart-count-badge');
  const whatsappCheckoutBtn = document.querySelector('.btn-whatsapp-order');

  function updateCartUI() {
    if (!cartBody) return;

    // Update badge counts
    const totalItems = cartState.reduce((sum, item) => sum + item.qty, 0);
    cartBadgeCounters.forEach(badge => {
      badge.textContent = totalItems;
      badge.style.display = totalItems > 0 ? 'inline-flex' : 'none';
    });

    // Calculate total price (INR)
    const totalPrice = cartState.reduce((sum, item) => sum + (item.price * item.qty), 0);
    if (cartTotalAmount) {
      cartTotalAmount.textContent = `₹${totalPrice}`;
    }

    // Render cart items
    if (cartState.length === 0) {
      cartBody.innerHTML = `
        <div class="empty-cart-msg">
          <p style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--burgundy-primary);">Your Craving Bag is Empty</p>
          <p>Explore our menu and add your favorite Pavone thickshakes!</p>
        </div>
      `;
      if (whatsappCheckoutBtn) {
        whatsappCheckoutBtn.style.opacity = '0.5';
        whatsappCheckoutBtn.style.pointerEvents = 'none';
      }
      return;
    }

    if (whatsappCheckoutBtn) {
      whatsappCheckoutBtn.style.opacity = '1';
      whatsappCheckoutBtn.style.pointerEvents = 'auto';
    }

    cartBody.innerHTML = cartState.map((item, index) => `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">₹${item.price} each</div>
        </div>
        <div class="cart-item-controls">
          <button class="cart-qty-btn" onclick="changeCartQty(${index}, -1)">−</button>
          <span style="font-weight: 700; width: 20px; text-align: center;">${item.qty}</span>
          <button class="cart-qty-btn" onclick="changeCartQty(${index}, 1)">+</button>
        </div>
      </div>
    `).join('');
  }

  // Add Item to cart
  orderBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.menu-card');
      const name = card.querySelector('.card-title').textContent.trim();
      const priceText = card.querySelector('.card-price-badge').textContent.replace(/[^\d]/g, '');
      const price = parseInt(priceText, 10) || 160;

      const existingItem = cartState.find(item => item.name === name);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        cartState.push({ name, price, qty: 1 });
      }

      updateCartUI();
      openCart();
    });
  });

  // Global quantity changer
  window.changeCartQty = function(index, delta) {
    if (cartState[index]) {
      cartState[index].qty += delta;
      if (cartState[index].qty <= 0) {
        cartState.splice(index, 1);
      }
      updateCartUI();
    }
  };

  function openCart() {
    if (cartOverlay) cartOverlay.classList.add('active');
  }

  function closeCart() {
    if (cartOverlay) cartOverlay.classList.remove('active');
  }

  openCartBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openCart();
  }));

  closeCartBtns.forEach(btn => {
    if (btn === cartOverlay) {
      btn.addEventListener('click', (e) => {
        if (e.target === cartOverlay) closeCart();
      });
    } else {
      btn.addEventListener('click', closeCart);
    }
  });

  // WhatsApp Order Submission
  if (whatsappCheckoutBtn) {
    whatsappCheckoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (cartState.length === 0) return;

      let msg = `*PAVONE THICK SHAKE ORDER INQUIRY*\n`;
      msg += `📍 Location: Mota Varachha, Surat\n`;
      msg += `--------------------------------\n`;
      let total = 0;
      cartState.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        msg += `• ${item.qty}x ${item.name} (₹${itemTotal})\n`;
      });
      msg += `--------------------------------\n`;
      msg += `*Total Amount: ₹${total}*\n\n`;
      msg += `Please confirm availability and preparation time for pickup / delivery at Mota Varachha. Thank you!`;

      const encodedMsg = encodeURIComponent(msg);
      const whatsappUrl = `https://wa.me/919537570515?text=${encodedMsg}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  updateCartUI();
}

/* ==========================================================================
   4. SCROLL & NAVBAR DYNAMICS
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   5. MOBILE MENU
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const navDrawer = document.querySelector('.mobile-nav-drawer');
  const closeBtn = document.querySelector('.mobile-nav-close');
  const navLinks = document.querySelectorAll('.mobile-nav-links a');

  if (!toggle) return;

  toggle.addEventListener('click', () => {
    if (navDrawer) navDrawer.classList.toggle('active');
  });

  if (closeBtn && navDrawer) {
    closeBtn.addEventListener('click', () => {
      navDrawer.classList.remove('active');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navDrawer) navDrawer.classList.remove('active');
    });
  });
}
