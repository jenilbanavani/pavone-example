/**
 * PAVONE THICK SHAKE — DEDICATED DIGITAL ORDERING ENGINE
 * 
 * Manages:
 * - Dynamic categorized menu rendering with clean text rows
 * - Instant real-time multi-field search & category filters
 * - Sticky category navigation & ScrollSpy
 * - Synchronized inline quantity steppers [ - 1 + ]
 * - Desktop sticky sidebar cart & mobile bottom sticky cart bar
 * - Full Cart & Checkout Drawer with Takeaway / Delivery options
 * - Configurable WhatsApp order dispatch to official counter
 */

(function () {
  'use strict';

  // =========================================================================
  // STATE MANAGEMENT & LOCAL STORAGE
  // =========================================================================
  const STORAGE_KEY = 'pavone_craving_bag';
  const CUSTOMER_KEY = 'pavone_customer_details';

  let cart = loadCartFromStorage();
  let activeCategory = 'all';
  let searchQuery = '';
  let orderType = 'takeaway'; // 'takeaway' | 'delivery'

  function loadCartFromStorage() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('Could not load cart from storage:', e);
      return [];
    }
  }

  function saveCartToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.warn('Could not save cart to storage:', e);
    }
  }

  function loadCustomerDetails() {
    try {
      const data = localStorage.getItem(CUSTOMER_KEY);
      return data ? JSON.parse(data) : { name: '', phone: '', address: '', instructions: '' };
    } catch (e) {
      return { name: '', phone: '', address: '', instructions: '' };
    }
  }

  function saveCustomerDetails(details) {
    try {
      localStorage.setItem(CUSTOMER_KEY, JSON.stringify(details));
    } catch (e) {
      console.warn('Could not save customer details:', e);
    }
  }

  // =========================================================================
  // DOM READY INITIALIZATION
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initMenuRendering();
    initSearch();
    initCategoryNavigation();
    initCartUI();
    initCheckoutControls();
    initProductModal();
    initHeaderScroll();
    initMobileMenu();
    updateAllCartViews();
  });

  // =========================================================================
  // 1. MENU RENDERING (CATEGORIZED SECTIONS & CLEAN TEXT PRODUCT ROWS)
  // =========================================================================
  function initMenuRendering() {
    const menuSectionsContainer = document.getElementById('menuSectionsContainer');
    const categoryNavTrack = document.getElementById('categoryNavTrack');
    const categorySidebarList = document.getElementById('categorySidebarList');

    const products = window.PAVONE_MENU_PRODUCTS || [];
    const categories = window.PAVONE_CATEGORIES || [];

    // 1. Render Category Navigation Tabs (Mobile Horiz Bar + Desktop Sidebar)
    if (categoryNavTrack) {
      categoryNavTrack.innerHTML = `
        <button class="cat-pill active" data-category="all" aria-selected="true">
          <span class="cat-icon">✨</span>
          <span>ALL ITEMS</span>
        </button>
      ` + categories.map(cat => `
        <button class="cat-pill" data-category="${cat.id}">
          <span class="cat-icon">${cat.icon || '🥤'}</span>
          <span>${cat.name.toUpperCase()}</span>
        </button>
      `).join('');
    }

    if (categorySidebarList) {
      categorySidebarList.innerHTML = `
        <li class="sidebar-cat-item active" data-category="all">
          <a href="#all" class="sidebar-cat-link">
            <span class="cat-icon">✨</span>
            <span class="cat-text">All Menu Items</span>
          </a>
        </li>
      ` + categories.map(cat => {
        const count = products.filter(p => p.category === cat.id).length;
        return `
          <li class="sidebar-cat-item" data-category="${cat.id}">
            <a href="#cat-${cat.id}" class="sidebar-cat-link">
              <span class="cat-icon">${cat.icon || '🥤'}</span>
              <div class="sidebar-cat-info">
                <span class="cat-text">${cat.name}</span>
                <span class="cat-count">${count} items</span>
              </div>
            </a>
          </li>
        `;
      }).join('');
    }

    // 2. Render Categorized Sections & Clean Text-Based Menu Rows
    if (menuSectionsContainer) {
      menuSectionsContainer.innerHTML = categories.map(cat => {
        const catProducts = products.filter(p => p.category === cat.id);
        if (catProducts.length === 0) return '';

        return `
          <section class="menu-category-section" id="cat-${cat.id}" data-category-id="${cat.id}">
            <div class="category-editorial-header">
              <div class="cat-header-top">
                <div class="cat-title-wrap">
                  <span class="cat-badge-icon">${cat.icon || '🥤'}</span>
                  <h2 class="cat-title">${cat.name.toUpperCase()}</h2>
                  <span class="cat-spec-pill">${cat.specs || 'MENU'}</span>
                </div>
                <span class="cat-item-count">${catProducts.length} OPTIONS</span>
              </div>
              <p class="cat-desc">${cat.subtitle || ''}</p>
              <div class="cat-divider-line"></div>
            </div>

            <div class="category-product-grid">
              ${catProducts.map(p => renderProductRowHTML(p)).join('')}
            </div>
          </section>
        `;
      }).join('');
    }
  }

  function renderProductRowHTML(product) {
    return `
      <div class="menu-product-row text-pure" 
           id="product-${product.id}" 
           data-product-id="${product.id}"
           data-name="${product.name.toLowerCase()}"
           data-category="${product.category}"
           data-keywords="${(product.name + ' ' + (product.tag || '') + ' ' + (product.description || '')).toLowerCase()}">

        <div class="product-row-content">
          <div class="product-row-header">
            <div class="product-title-row">
              <h3 class="product-title" onclick="window.pavoneOrder.openProductModal('${product.id}')">${product.name}</h3>
              ${product.tag ? `<span class="product-tag-pill">${product.tag}</span>` : ''}
            </div>
            <div class="product-specs-line">
              <span class="product-size">${product.size || '250 ml'}</span>
              ${product.specs ? `<span class="product-spec-bullet">•</span><span class="product-spec-sub">${product.specs}</span>` : ''}
            </div>
          </div>
          
          <p class="product-desc" onclick="window.pavoneOrder.openProductModal('${product.id}')">${product.description || ''}</p>
          
          <div class="product-row-action">
            <div class="product-price-box">
              <span class="product-price-amount">${product.priceDisplay || '₹' + product.price}</span>
            </div>
            <div class="stepper-wrapper" data-product-id="${product.id}">
              ${renderStepperHTML(product.id)}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderStepperHTML(productId) {
    const cartItem = cart.find(item => item.id === productId);
    const qty = cartItem ? cartItem.qty : 0;

    if (qty > 0) {
      return `
        <div class="stepper-btn-group active" data-product-id="${productId}">
          <button class="btn-stepper minus" onclick="window.pavoneOrder.changeQty('${productId}', -1)" aria-label="Decrease quantity">−</button>
          <span class="stepper-qty">${qty}</span>
          <button class="btn-stepper plus" onclick="window.pavoneOrder.changeQty('${productId}', 1)" aria-label="Increase quantity">+</button>
        </div>
      `;
    } else {
      return `
        <button class="btn-add-initial" onclick="window.pavoneOrder.changeQty('${productId}', 1)">
          <span class="btn-plus-icon">+</span>
          <span>ADD</span>
        </button>
      `;
    }
  }

  // =========================================================================
  // 2. REAL-TIME SEARCH & FILTER
  // =========================================================================
  function initSearch() {
    const searchInput = document.getElementById('orderSearchInput');
    const searchClearBtn = document.getElementById('orderSearchClear');
    const searchStatusText = document.getElementById('searchStatusText');
    const noResultsState = document.getElementById('noResultsState');

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      if (searchClearBtn) {
        searchClearBtn.style.display = searchQuery ? 'flex' : 'none';
      }
      applyMenuFiltering();
    });

    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        searchClearBtn.style.display = 'none';
        searchInput.focus();
        applyMenuFiltering();
      });
    }

    const resetBtn = document.getElementById('resetSearchBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        activeCategory = 'all';
        if (searchClearBtn) searchClearBtn.style.display = 'none';
        updateCategoryNavPills('all');
        applyMenuFiltering();
      });
    }
  }

  function applyMenuFiltering() {
    const sections = document.querySelectorAll('.menu-category-section');
    const searchStatus = document.getElementById('searchStatusText');
    const noResults = document.getElementById('noResultsState');
    let totalVisible = 0;

    sections.forEach(section => {
      const catId = section.getAttribute('data-category-id');
      const categoryMatches = activeCategory === 'all' || activeCategory === catId;
      const rows = section.querySelectorAll('.menu-product-row');
      let sectionVisibleCount = 0;

      rows.forEach(row => {
        const keywords = row.getAttribute('data-keywords') || '';
        const name = row.getAttribute('data-name') || '';
        const searchMatches = !searchQuery || keywords.includes(searchQuery) || name.includes(searchQuery);

        if (categoryMatches && searchMatches) {
          row.style.display = 'flex';
          sectionVisibleCount++;
          totalVisible++;
        } else {
          row.style.display = 'none';
        }
      });

      if (sectionVisibleCount > 0) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });

    // Update search status message
    if (searchStatus) {
      if (searchQuery) {
        searchStatus.innerHTML = `Showing <strong>${totalVisible}</strong> cravings matching "<em>${escapeHTML(searchQuery)}</em>"`;
        searchStatus.style.display = 'block';
      } else {
        searchStatus.style.display = 'none';
      }
    }

    // Empty state
    if (noResults) {
      noResults.style.display = totalVisible === 0 ? 'block' : 'none';
    }
  }

  function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // =========================================================================
  // 3. STICKY CATEGORY NAVIGATION & SCROLLSPY
  // =========================================================================
  function initCategoryNavigation() {
    const pills = document.querySelectorAll('.cat-pill');
    const sidebarItems = document.querySelectorAll('.sidebar-cat-item');

    // Horizontal Pills Click
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        const targetCategory = pill.getAttribute('data-category');
        activeCategory = targetCategory;
        updateCategoryNavPills(targetCategory);

        if (targetCategory === 'all') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const targetSection = document.getElementById(`cat-${targetCategory}`);
          if (targetSection) {
            const navOffset = 140;
            const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: elementPosition - navOffset, behavior: 'smooth' });
          }
        }

        applyMenuFiltering();
      });
    });

    // Desktop Sidebar Links
    sidebarItems.forEach(item => {
      const link = item.querySelector('.sidebar-cat-link');
      if (link) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetCategory = item.getAttribute('data-category');
          activeCategory = targetCategory;
          updateCategoryNavPills(targetCategory);

          if (targetCategory === 'all') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const targetSection = document.getElementById(`cat-${targetCategory}`);
            if (targetSection) {
              const navOffset = 85;
              const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
              window.scrollTo({ top: elementPosition - navOffset, behavior: 'smooth' });
            }
          }

          applyMenuFiltering();
        });
      }
    });

    // ScrollSpy for Active Category
    let isUserScrolling = false;
    window.addEventListener('scroll', () => {
      if (isUserScrolling || searchQuery) return;
      
      const sections = document.querySelectorAll('.menu-category-section');
      const scrollPos = window.scrollY + 180;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const catId = section.getAttribute('data-category-id');

        if (scrollPos >= top && scrollPos < top + height) {
          updateCategoryNavPills(catId, false);
        }
      });
    }, { passive: true });
  }

  function updateCategoryNavPills(categoryId, centerPill = true) {
    const pills = document.querySelectorAll('.cat-pill');
    const sidebarItems = document.querySelectorAll('.sidebar-cat-item');

    pills.forEach(pill => {
      const match = pill.getAttribute('data-category') === categoryId;
      pill.classList.toggle('active', match);
      pill.setAttribute('aria-selected', match ? 'true' : 'false');

      if (match && centerPill) {
        pill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });

    sidebarItems.forEach(item => {
      const match = item.getAttribute('data-category') === categoryId;
      item.classList.toggle('active', match);
    });
  }

  // =========================================================================
  // 4. CART & SYNCHRONIZED QUANTITY ADJUSTMENT
  // =========================================================================
  function changeQty(productId, delta) {
    const products = window.PAVONE_MENU_PRODUCTS || [];
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
      cart[existingIndex].qty += delta;
      if (cart[existingIndex].qty <= 0) {
        cart.splice(existingIndex, 1);
      }
    } else if (delta > 0) {
      cart.push({
        id: product.id,
        name: product.name,
        category: product.category,
        categoryLabel: product.categoryLabel,
        size: product.size || '250 ml',
        price: product.price,
        qty: delta,
        image: product.image || null
      });
    }

    saveCartToStorage();
    updateAllCartViews();
    updateProductStepperUI(productId);
  }

  function updateProductStepperUI(productId) {
    const stepperWrappers = document.querySelectorAll(`.stepper-wrapper[data-product-id="${productId}"]`);
    stepperWrappers.forEach(wrap => {
      wrap.innerHTML = renderStepperHTML(productId);
    });
  }

  function updateAllCartViews() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const config = window.PAVONE_CONFIG || {};

    // 1. Header Badges
    document.querySelectorAll('.cart-count-badge').forEach(badge => {
      badge.textContent = totalItems;
      badge.style.display = totalItems > 0 ? 'inline-flex' : 'none';
    });

    // 2. Mobile Sticky Bottom Bar
    const mobileBottomBar = document.getElementById('mobileBottomCartBar');
    const mobileBottomCount = document.getElementById('mobileBottomCount');
    const mobileBottomTotal = document.getElementById('mobileBottomTotal');

    if (mobileBottomBar) {
      if (totalItems > 0) {
        mobileBottomBar.classList.add('visible');
        if (mobileBottomCount) mobileBottomCount.textContent = `${totalItems} ${totalItems === 1 ? 'ITEM' : 'ITEMS'}`;
        if (mobileBottomTotal) mobileBottomTotal.textContent = `${config.CURRENCY_SYMBOL || '₹'}${subtotal}`;
      } else {
        mobileBottomBar.classList.remove('visible');
      }
    }

    // 3. Desktop Sidebar Cart & Cart Drawer
    renderCartList('desktopCartItemList', 'desktopCartSubtotal', 'desktopOrderBtn');
    renderCartList('drawerCartItemList', 'drawerCartSubtotal', 'drawerOrderBtn');

    // 4. Update all on-card steppers in case of bulk cart edits
    const products = window.PAVONE_MENU_PRODUCTS || [];
    products.forEach(p => {
      updateProductStepperUI(p.id);
    });
  }

  function renderCartList(listId, subtotalId, orderBtnId) {
    const listElement = document.getElementById(listId);
    const subtotalElement = document.getElementById(subtotalId);
    const orderBtn = document.getElementById(orderBtnId);
    const config = window.PAVONE_CONFIG || {};
    const currency = config.CURRENCY_SYMBOL || '₹';

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    if (subtotalElement) {
      subtotalElement.textContent = `${currency}${subtotal}`;
    }

    if (!listElement) return;

    if (cart.length === 0) {
      listElement.innerHTML = `
        <div class="empty-cart-view">
          <div class="empty-cart-icon">🥤</div>
          <p class="empty-title">Your Craving Bag is Empty</p>
          <p class="empty-sub">Pick from 90+ artisanal thickshakes, scoops, and brownies!</p>
        </div>
      `;
      if (orderBtn) {
        orderBtn.disabled = true;
        orderBtn.classList.add('disabled');
      }
      return;
    }

    if (orderBtn) {
      orderBtn.disabled = false;
      orderBtn.classList.remove('disabled');
    }

    listElement.innerHTML = cart.map(item => `
      <div class="cart-row-item" data-id="${item.id}">
        <div class="cart-row-info">
          <div class="cart-row-title">${item.name}</div>
          <div class="cart-row-meta">
            <span class="cart-row-size">${item.size}</span>
            <span class="cart-row-unit-price">• ${currency}${item.price} each</span>
          </div>
        </div>
        <div class="cart-row-right">
          <div class="cart-row-stepper">
            <button class="cart-ctrl-btn minus" onclick="window.pavoneOrder.changeQty('${item.id}', -1)" aria-label="Reduce quantity">−</button>
            <span class="cart-ctrl-qty">${item.qty}</span>
            <button class="cart-ctrl-btn plus" onclick="window.pavoneOrder.changeQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
          </div>
          <div class="cart-row-total">${currency}${item.price * item.qty}</div>
        </div>
      </div>
    `).join('');
  }

  function initCartUI() {
    const openCartBtns = document.querySelectorAll('.btn-open-cart, .btn-cart-trigger, #mobileBottomCartBar');
    const closeCartBtns = document.querySelectorAll('.drawer-close-btn, .cart-drawer-overlay');
    const cartOverlay = document.querySelector('.cart-drawer-overlay');

    function openCart() {
      if (cartOverlay) cartOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeCart() {
      if (cartOverlay) cartOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    openCartBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openCart();
      });
    });

    closeCartBtns.forEach(btn => {
      if (btn === cartOverlay) {
        btn.addEventListener('click', (e) => {
          if (e.target === cartOverlay) closeCart();
        });
      } else {
        btn.addEventListener('click', closeCart);
      }
    });
  }

  // =========================================================================
  // 5. CHECKOUT & WHATSAPP ORDER DISPATCH
  // =========================================================================
  function initCheckoutControls() {
    const customer = loadCustomerDetails();

    // Fill customer inputs if previously stored
    const nameInputs = document.querySelectorAll('.checkout-input-name');
    const phoneInputs = document.querySelectorAll('.checkout-input-phone');
    const addressInputs = document.querySelectorAll('.checkout-input-address');
    const instructionInputs = document.querySelectorAll('.checkout-input-instructions');

    nameInputs.forEach(i => { i.value = customer.name || ''; });
    phoneInputs.forEach(i => { i.value = customer.phone || ''; });
    addressInputs.forEach(i => { i.value = customer.address || ''; });
    instructionInputs.forEach(i => { i.value = customer.instructions || ''; });

    // Order type toggles (Takeaway vs Delivery)
    const typeButtons = document.querySelectorAll('.order-type-btn');
    typeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        orderType = btn.getAttribute('data-type');
        typeButtons.forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-type') === orderType);
        });

        // Show/hide address field
        const addressWrappers = document.querySelectorAll('.delivery-address-group');
        addressWrappers.forEach(wrap => {
          wrap.style.display = orderType === 'delivery' ? 'block' : 'none';
        });
      });
    });

    // Order Action Buttons (WhatsApp or API)
    const orderSubmitBtns = document.querySelectorAll('.btn-submit-order');
    orderSubmitBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        handleOrderSubmission(btn);
      });
    });
  }

  function handleOrderSubmission(triggerBtn) {
    if (cart.length === 0) {
      alert('Your Craving Bag is empty. Please add items before placing your order!');
      return;
    }

    // Determine values from the closest form or general inputs
    const form = triggerBtn.closest('.checkout-form-container') || document;
    const nameInput = form.querySelector('.checkout-input-name') || document.querySelector('.checkout-input-name');
    const phoneInput = form.querySelector('.checkout-input-phone') || document.querySelector('.checkout-input-phone');
    const addressInput = form.querySelector('.checkout-input-address') || document.querySelector('.checkout-input-address');
    const instructionInput = form.querySelector('.checkout-input-instructions') || document.querySelector('.checkout-input-instructions');

    const name = nameInput ? nameInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const address = addressInput ? addressInput.value.trim() : '';
    const instructions = instructionInput ? instructionInput.value.trim() : '';

    if (!name) {
      alert('Please enter your name so we know who this order is for.');
      if (nameInput) nameInput.focus();
      return;
    }

    if (orderType === 'delivery' && !address) {
      alert('Please enter your delivery address in Surat (Street / Area / Landmark).');
      if (addressInput) addressInput.focus();
      return;
    }

    // Save customer details for return visits
    saveCustomerDetails({ name, phone, address, instructions });

    const config = window.PAVONE_CONFIG || {};

    // Build structured WhatsApp message
    let msg = `Hello ${config.STORE_NAME || 'Pavone Thick Shake'}!\n\n`;
    msg += `I'd like to place an order:\n\n`;

    let subtotal = 0;
    cart.forEach(item => {
      const lineTotal = item.price * item.qty;
      subtotal += lineTotal;
      msg += `${item.qty} × ${item.name} — ₹${lineTotal}\n`;
    });

    msg += `\nTotal: ₹${subtotal}\n\n`;
    msg += `Name: ${name}\n`;
    if (phone) msg += `Phone: ${phone}\n`;
    msg += `Order type: ${orderType === 'delivery' ? 'Delivery' : 'Takeaway'}\n`;
    
    if (orderType === 'delivery' && address) {
      msg += `Delivery Address: ${address}\n`;
    }

    if (instructions) {
      msg += `Special Instructions: ${instructions}\n`;
    }

    msg += `\nThank you!`;

    const whatsappNumber = config.WHATSAPP_NUMBER || '919537570515';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  }

  // =========================================================================
  // 6. PRODUCT QUICK VIEW MODAL
  // =========================================================================
  function initProductModal() {
    const modalOverlay = document.getElementById('productDetailModal');
    const modalCloseBtn = document.getElementById('productModalClose');

    if (!modalOverlay) return;

    function closeModal() {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeModal);
    }

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  function openProductModal(productId) {
    const products = window.PAVONE_MENU_PRODUCTS || [];
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modalOverlay = document.getElementById('productDetailModal');
    const modalBody = document.getElementById('productModalBody');

    modalBody.innerHTML = `
      <div class="product-modal-inner text-only">
        <div class="modal-product-details">
          <div class="modal-category-badge">${product.categoryLabel || 'Pavone Signature'}</div>
          <h2 class="modal-product-title">${product.name}</h2>
          <div class="modal-specs-bar">
            <span class="modal-spec-size">✨ ${product.size || '250 ml'}</span>
            <span class="modal-spec-sep">•</span>
            <span class="modal-spec-pure">100% Whole Dairy Milk Cream</span>
          </div>
          <p class="modal-product-desc">${product.description || 'Artisan recipe crafted fresh on order.'}</p>
          
          <div class="modal-footer-action">
            <div class="modal-price-tag">${product.priceDisplay || '₹' + product.price}</div>
            <div class="stepper-wrapper" data-product-id="${product.id}">
              ${renderStepperHTML(product.id)}
            </div>
          </div>
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // =========================================================================
  // 7. HEADER SCROLL & MOBILE MENU
  // =========================================================================
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navDrawer = document.querySelector('.mobile-nav-drawer');
    const navOverlay = document.querySelector('.mobile-nav-overlay');
    const closeBtn = document.querySelector('.mobile-nav-close');
    const navLinks = document.querySelectorAll('.mobile-nav-links a');

    if (!toggle || !navDrawer) return;

    function openMenu() {
      navDrawer.classList.add('active');
      if (navOverlay) navOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      navDrawer.classList.remove('active');
      if (navOverlay) navOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      if (navDrawer.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (navOverlay) navOverlay.addEventListener('click', closeMenu);
    navLinks.forEach(l => l.addEventListener('click', closeMenu));
  }

  // Global API exposed for onclick handlers
  window.pavoneOrder = {
    changeQty,
    openProductModal
  };

})();
