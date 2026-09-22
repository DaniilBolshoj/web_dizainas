document.addEventListener('DOMContentLoaded', () => {
  /* ---------------------------------------------------------------------
     1) PRODUKTŲ DUOMENYS
     Kiekvienas produktas turi savo unikalius "colors" (spalvos pavadinimas
     + tiksli HEX reikšmė). Nuotrauka kiekvienam variantui generuojama
     automatiškai (žr. createVariantImage žemiau), todėl spalva ir
     nuotrauka VISADA sutampa – nebelieka atsitiktinių/pasikartojančių
     ar prekei nepriklausančių vaizdų.
  --------------------------------------------------------------------- */
  const products = [
    { id: 'linine-sukne', name: 'Milano lininė midi suknelė', price: 139, category: 'women', tag: 'Naujiena', material: 'linas', icon: 'dress', alt: 'Lininė midi suknelė',
      description: 'Lengva, laisvo kirpimo lininė suknelė vasaros karščiams ir tylioms vakaro valandoms.', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    { id: 'vilnos-megztinis', name: 'Verona kašmyro megztinis', price: 89, category: 'women', material: 'vilna', icon: 'sweater', alt: 'Kašmyro megztinis',
      description: 'Minkštas kašmyro megztinis apvalia iškirpte – jaukumas be papildomo svorio.', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    { id: 'placios-kelnes', name: 'Soho plačios tencelio kelnės', price: 109, category: 'women', tag: 'Bestseller', material: 'tencelis', icon: 'pants', alt: 'Plačios tencelio kelnės',
      description: 'Plataus silueto tencelio kelnės su aukštu liemeniu, tinkančios prie beveik visko.', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    { id: 'marskiniai', name: 'Classic Oxford marškiniai', price: 74, category: 'men', material: 'organinė medvilnė', icon: 'shirt', alt: 'Oxford marškiniai',
      description: 'Klasikiniai oksfordo marškiniai iš organinės medvilnės – tinka tiek darbui, tiek laisvalaikiui.', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    { id: 'ilgas-paltas', name: 'Nordic vilnos paltas', price: 189, category: 'men', tag: 'Naujiena', material: 'perdirbta vilna', icon: 'coat', alt: 'Vilnos paltas',
      description: 'Ilgas vilnos paltas švariomis linijomis, sukurtas šaltajam sezonui.', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    { id: 'strukturuotas-svarkas', name: 'Malmö struktūruotas švarkas', price: 159, category: 'men', material: 'vilna', icon: 'jacket', alt: 'Struktūruotas švarkas',
      description: 'Struktūruotas vilnos švarkas su aiškiu siluetu kasdieniniams deriniams.', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    { id: 'vaiku-kardiganas', name: 'Mėlynas Little Cloud kardiganas', price: 64, category: 'kids', tag: 'Bestseller', material: 'merino vilna', icon: 'cardigan', alt: 'Vaikiškas kardiganas',
      description: 'Švelnus merino vilnos kardiganas vaikams – šiltas, bet nesunkus.', sizes: ['92', '98', '104', '110', '116', '122'] },
    { id: 'vaiku-kelnes', name: 'Sandstone drobės kelnės', price: 52, category: 'kids', material: 'ekologiška medvilnė', icon: 'pants', alt: 'Vaikiškos drobės kelnės',
      description: 'Patvarios ekologiškos medvilnės kelnės, sukurtos aktyvioms vaikų dienoms.', sizes: ['92', '98', '104', '110', '116', '122'] },
    { id: 'vaiku-liemene', name: 'Forest quilted liemenė', price: 78, category: 'kids', tag: 'Naujiena', material: 'perdirbtas nailonas', icon: 'vest', alt: 'Vaikiška liemenė',
      description: 'Prasegama pikuota liemenė be rankovių – papildomas šilumos sluoksnis žaidimams lauke.', sizes: ['92', '98', '104', '110', '116', '122'] },
    { id: 'odinis-batas', name: 'Roma odiniai loaferiai', price: 149, category: 'shoes', tag: 'Bestseller', material: 'oda', icon: 'shoe-loafer', alt: 'Odiniai loaferiai',
      description: 'Minimalistiniai odiniai loaferiai su švelniu blizgesiu ir patogiu vidpadžiu.', sizes: ['38', '39', '40', '41', '42', '43', '44'] },
    { id: 'minimalistiniai-sportbaciai', name: 'Copenhagen minimalistiniai sportbačiai', price: 119, category: 'shoes', material: 'perdirbta guma', icon: 'shoe-sneaker', alt: 'Minimalistiniai sportbačiai',
      description: 'Švarios linijos ir perdirbtos gumos vidpadis – kasdieniai sportbačiai be triukšmo.', sizes: ['38', '39', '40', '41', '42', '43', '44'] },
    { id: 'ziemos-aulinukai', name: 'Alpine žieminiai aulinukai', price: 169, category: 'shoes', tag: 'Naujiena', material: 'oda', icon: 'boot', alt: 'Žieminiai aulinukai',
      description: 'Šilti odiniai aulinukai su patvaria padu žiemos sąlygoms.', sizes: ['38', '39', '40', '41', '42', '43', '44'] },
    { id: 'odinis-krepsys', name: 'Atelier odinis krepšys', price: 129, category: 'accessories', tag: 'Bestseller', material: 'oda', icon: 'bag', alt: 'Odinis krepšys',
      description: 'Erdvus odinis krepšys su vidinėmis kišenėmis kasdieniams daiktams.', sizes: ['Universalus dydis'] },
    { id: 'vilnos-salikas', name: 'Alba vilnos šalikas', price: 58, category: 'accessories', material: 'vilna', icon: 'scarf', alt: 'Vilnos šalikas',
      description: 'Minkštas vilnos šalikas, kuris papildo bet kokį žieminį įvaizdį.', sizes: ['Universalus dydis'] },
    { id: 'odinis-dirzas', name: 'Linea klasikinis diržas', price: 49, category: 'accessories', material: 'oda', icon: 'belt', alt: 'Odinis diržas',
      description: 'Klasikinis odinis diržas su metaline sagtimi – tinka beveik prie visų kelnių.', sizes: ['Universalus dydis'] }
  ];

  const colorPalettes = {
    women: [['Smėlio', '#cdbda8'], ['Juoda', '#202321'], ['Alyvuogių', '#68705b']],
    men: [['Karamelė', '#b9855b'], ['Navy', '#1d2d43'], ['Alyvuogių', '#68705b']],
    kids: [['Mėlis', '#8ba7b8'], ['Smėlio', '#cdbda8'], ['Miško', '#3d5547']],
    shoes: [['Juoda', '#202321'], ['Riešutų', '#805637'], ['Kreida', '#e8e2d7']],
    accessories: [['Espresso', '#4b3027'], ['Juoda', '#202321'], ['Pieno', '#e8e2d7']]
  };

  /* ---------------------------------------------------------------------
     2) SPALVOS -> NUOTRAUKOS GENERAVIMAS
     Kadangi realių studijinių nuotraukų kiekvienam spalvos variantui
     neturime, o siuntimasis iš atsitiktinių išorinių nuorodų buvo
     pagrindinė klaidų priežastis (nesutampantys / pasikartojantys /
     "sudužę" paveikslėliai), kiekvienam variantui vietoje to SAUGIAI
     sugeneruojame SVG paveikslėlį: tikslus prekės kontūras + TIKSLIAI
     ta HEX spalva, kurią vartotojas pasirinko. Tokiu būdu spalva ir
     nuotrauka niekada negali nesutapti, o vaizdas niekada "nedūžta".
  --------------------------------------------------------------------- */
  const svgIcons = {
    dress: '<path d="M-6,-18 Q0,-13 6,-18 L8,-6 L13,20 L-13,20 L-8,-6 Z"/>',
    sweater: '<path d="M-9,-16 Q0,-11 9,-16 L9,16 L-9,16 Z"/><path d="M-9,-15 L-17,-3 L-13,2 L-7,-7 Z"/><path d="M9,-15 L17,-3 L13,2 L7,-7 Z"/>',
    cardigan: '<path d="M-1,-16 L-9,-14 L-9,16 L-1,16 Z"/><path d="M1,-16 L9,-14 L9,16 L1,16 Z"/><path d="M-9,-15 L-17,-3 L-13,2 L-7,-7 Z"/><path d="M9,-15 L17,-3 L13,2 L7,-7 Z"/>',
    shirt: '<path d="M-9,-16 Q0,-12 9,-16 L9,16 L-9,16 Z"/><path d="M-3,-16 L0,-9 L3,-16"/><path d="M-9,-15 L-15,-6 L-12,-1 L-7,-8 Z"/><path d="M9,-15 L15,-6 L12,-1 L7,-8 Z"/>',
    coat: '<path d="M-10,-16 Q0,-11 10,-16 L11,20 L-11,20 Z"/><path d="M-4,-16 L-7,-2 M4,-16 L7,-2"/><path d="M-10,-15 L-18,4 L-14,9 L-8,-6 Z"/><path d="M10,-15 L18,4 L14,9 L8,-6 Z"/>',
    jacket: '<path d="M-10,-15 Q0,-10 10,-15 L10,14 L-10,14 Z"/><path d="M0,-9 L0,14"/><path d="M-10,-14 L-17,0 L-13,5 L-7,-7 Z"/><path d="M10,-14 L17,0 L13,5 L7,-7 Z"/>',
    vest: '<path d="M-8,-14 Q0,-9 8,-14 L8,15 L-8,15 Z"/><path d="M-8,-13 Q-12,-4 -8,4"/><path d="M8,-13 Q12,-4 8,4"/>',
    pants: '<path d="M-9,-16 L9,-16 L9,-4 L2,-4 L2,18 L-2,18 L-2,-4 L-9,-4 Z"/>',
    'shoe-loafer': '<path d="M-14,6 Q-15,-4 -5,-8 L8,-5 Q17,-2 17,5 L17,9 L-14,9 Z"/><path d="M-6,-6 L-3,2"/>',
    'shoe-sneaker': '<path d="M-14,6 Q-15,-2 -6,-6 L9,-3 Q18,0 18,6 L18,9 L-14,9 Z"/><path d="M-4,-4 L2,-1 M-2,-2 L4,1 M0,0 L6,3"/>',
    boot: '<path d="M-9,10 L-9,-15 L-1,-15 L-1,-3 L15,-3 Q19,-1 19,5 L19,10 Z"/>',
    bag: '<path d="M-11,-4 L-11,14 Q-11,17 -8,17 L8,17 Q11,17 11,14 L11,-4 Z"/><path d="M-6,-4 Q-6,-15 0,-15 Q6,-15 6,-4"/>',
    scarf: '<path d="M-16,-8 Q-6,-16 4,-8 Q12,-1 20,-7"/><path d="M-16,3 Q-6,-5 4,3 Q12,10 20,4"/>',
    belt: '<rect x="-18" y="-2.5" width="36" height="5" rx="1"/><rect x="-4.5" y="-6" width="9" height="12" rx="1"/>'
  };

  const relativeLuminance = (hex) => {
    const clean = hex.replace('#', '');
    const channel = (part) => {
      const value = parseInt(part, 16) / 255;
      return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
    };
    const r = channel(clean.substring(0, 2));
    const g = channel(clean.substring(2, 4));
    const b = channel(clean.substring(4, 6));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const inkFor = (hex) => (relativeLuminance(hex) > 0.45 ? '#1d2520' : '#f4f2ec');

  const createVariantImage = (product, color) => {
    const ink = inkFor(color.hex);
    const icon = svgIcons[product.icon] || svgIcons.shirt;
    const name = escapeHtml(product.name).toUpperCase();
    const colorLabel = escapeHtml(color.name).toUpperCase();
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1200">
      <defs><radialGradient id="vg" cx="50%" cy="40%" r="75%"><stop offset="0%" stop-color="#000000" stop-opacity="0"/><stop offset="100%" stop-color="#000000" stop-opacity="0.16"/></radialGradient></defs>
      <rect width="900" height="1200" fill="${color.hex}"/>
      <rect width="900" height="1200" fill="url(#vg)"/>
      <g transform="translate(450,540) scale(11)" fill="none" stroke="${ink}" stroke-width="0.55" stroke-linejoin="round" stroke-linecap="round" opacity="0.88">${icon}</g>
      <text x="64" y="1108" fill="${ink}" font-family="Helvetica, Arial, sans-serif" font-size="24" letter-spacing="3" opacity="0.8">${name}</text>
      <text x="64" y="1148" fill="${ink}" font-family="Helvetica, Arial, sans-serif" font-size="34" font-weight="700" letter-spacing="0.5">${colorLabel}</text>
    </svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  };

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[character]));
  }

  /* Kiekvienam produktui sugeneruojame variantų sąrašą: spalva + tiksliai
     tos spalvos nuotrauka + atnaujintas aprašomasis tekstas. */
  products.forEach((product) => {
    const palette = colorPalettes[product.category] || colorPalettes.men;
    product.variants = palette.map(([label, hex]) => {
      const color = { name: label, hex };
      return {
        label,
        swatch: hex,
        detail: `${label} / ${product.material}`,
        image: createVariantImage(product, color)
      };
    });
  });

  /* ---------------------------------------------------------------------
     3) DOM NUORODOS IR BŪSENA
  --------------------------------------------------------------------- */
  const grid = document.querySelector('#product-grid');
  const total = document.querySelector('#product-total');
  const cartDrawer = document.querySelector('.cart-drawer');
  const cartItems = document.querySelector('.cart-items');
  const cartCount = document.querySelector('.bag-count');
  const cartTotal = document.querySelector('.cart-total');
  const overlay = document.querySelector('.overlay');
  const toast = document.querySelector('.toast');
  const searchPanel = document.querySelector('.search-panel');
  const searchInput = document.querySelector('#search-input');
  const modal = document.querySelector('.product-modal');

  let activeCategory = 'all';
  let showAll = false;
  let searchTerm = '';
  let cart = [];
  let activeModalProduct = null;
  let activeModalVariant = 0;

  try {
    cart = JSON.parse(localStorage.getItem('forma-cart') || '[]');
  } catch (error) {
    console.warn('Nepavyko atkurti krepšelio iš vietinės saugyklos.', error);
    cart = [];
  }

  const iconRefresh = () => window.lucide?.createIcons();

  const matchingProducts = () => products.filter((product) => {
    const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
    const haystack = `${product.name} ${product.material}`.toLocaleLowerCase('lt');
    const searchMatch = haystack.includes(searchTerm.toLocaleLowerCase('lt'));
    return categoryMatch && searchMatch;
  });

  /* ---------------------------------------------------------------------
     4) PRODUKTŲ TINKLELIO ATVAIZDAVIMAS
  --------------------------------------------------------------------- */
  const renderProducts = () => {
    const matches = matchingProducts();
    const visibleProducts = showAll ? matches : matches.slice(0, 9);
    total.textContent = String(matches.length).padStart(2, '0');
    grid.innerHTML = visibleProducts.length
      ? visibleProducts.map((product) => `
        <article class="product-card reveal" data-product-card="${product.id}">
          <button class="product-image product-image-${product.category}" data-view="${product.id}" aria-label="Peržiūrėti ${escapeHtml(product.name)}">
            <img data-product-image src="${product.variants[0].image}" alt="${escapeHtml(product.alt)} – ${escapeHtml(product.variants[0].label)}" width="900" height="1200" loading="lazy" decoding="async">
            ${product.tag ? `<span class="product-tag ${product.tag === 'Bestseller' ? 'muted' : ''}">${product.tag}</span>` : ''}
            <span class="view-product">Peržiūrėti <b>↗</b></span>
          </button>
          <div class="product-info">
            <div><h3>${escapeHtml(product.name)}</h3><p data-product-detail>${escapeHtml(product.variants[0].detail)}</p></div>
            <strong>${product.price} €</strong>
          </div>
          <div class="product-swatches" role="group" aria-label="Spalvos: ${escapeHtml(product.name)}">
            ${product.variants.map((variant, index) => `<button class="color-swatch${index === 0 ? ' active' : ''}" type="button" data-variant="${index}" style="--swatch-color: ${variant.swatch}" aria-label="${escapeHtml(variant.label)}" aria-pressed="${index === 0}"></button>`).join('')}
          </div>
          <button class="add-button" data-add="${product.id}">+ Į krepšelį</button>
        </article>`).join('')
      : '<p class="no-results">Šioje kategorijoje produktų neradome.</p>';
    const showAllButton = document.querySelector('[data-show-all]');
    showAllButton.hidden = matches.length <= 9;
    showAllButton.innerHTML = showAll ? 'Rodyti mažiau <span>↗</span>' : 'Rodyti visus produktus <span>↘</span>';
    iconRefresh();
  };

  /* ---------------------------------------------------------------------
     5) KREPŠELIS
  --------------------------------------------------------------------- */
  const updateCart = () => {
    const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = quantity;
    cartTotal.textContent = `${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)} €`;
    localStorage.setItem('forma-cart', JSON.stringify(cart));
    cartItems.innerHTML = cart.length
      ? cart.map((item) => `
        <div class="cart-line">
          <div>
            <strong>${escapeHtml(item.name)}</strong>
            <span>${item.price} €</span>
            <div class="quantity-controls">
              <button data-decrease="${item.id}" aria-label="Sumažinti ${escapeHtml(item.name)} kiekį">−</button>
              <span>${item.quantity}</span>
              <button data-increase="${item.id}" aria-label="Padidinti ${escapeHtml(item.name)} kiekį">+</button>
            </div>
          </div>
          <button aria-label="Pašalinti ${escapeHtml(item.name)}" data-remove="${item.id}">×</button>
        </div>`).join('')
      : '<div class="empty-cart"><i data-lucide="shopping-bag"></i><p>Krepšelis kol kas tuščias.</p><span>Laikas atrasti savo naują favoritą.</span></div>';
    cartItems.querySelectorAll('[data-increase]').forEach((button) => button.addEventListener('click', () => changeQuantity(button.dataset.increase, 1)));
    cartItems.querySelectorAll('[data-decrease]').forEach((button) => button.addEventListener('click', () => changeQuantity(button.dataset.decrease, -1)));
    cartItems.querySelectorAll('[data-remove]').forEach((button) => button.addEventListener('click', () => { cart = cart.filter((item) => item.id !== button.dataset.remove); updateCart(); }));
    iconRefresh();
  };

  const changeQuantity = (id, delta) => {
    const item = cart.find((entry) => entry.id === id);
    if (item) item.quantity += delta;
    cart = cart.filter((entry) => entry.quantity > 0);
    updateCart();
  };

  const addToCart = (id) => {
    const product = products.find((item) => item.id === id);
    if (!product) return;
    const existing = cart.find((item) => item.id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
    }
    updateCart();
    toggleCart(true);
    toast.classList.add('show');
    window.clearTimeout(window.toastTimer);
    window.toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2200);
  };

  /* ---------------------------------------------------------------------
     6) GREITA PERŽIŪRA (QUICK VIEW) – VISADA RODO BŪTENT PASPAUSTĄ PREKĘ
  --------------------------------------------------------------------- */
  const renderModalVariant = (variantIndex) => {
    if (!activeModalProduct) return;
    const variant = activeModalProduct.variants[variantIndex] || activeModalProduct.variants[0];
    activeModalVariant = variantIndex;
    const image = modal.querySelector('[data-modal-image]');
    image.src = variant.image;
    image.alt = `${activeModalProduct.name} – ${variant.label}`;
    modal.querySelector('.modal-detail').textContent = variant.detail;
    modal.querySelector('[data-colors]').querySelectorAll('button').forEach((button, index) => {
      button.classList.toggle('selected', index === variantIndex);
    });
  };

  const openModal = (id, variantIndex = 0) => {
    const product = products.find((item) => item.id === id);
    if (!product) return;
    activeModalProduct = product;
    modal.querySelector('#modal-title').textContent = product.name;
    modal.querySelector('.modal-price').textContent = `${product.price} €`;
    modal.querySelector('.modal-description').textContent = product.description;
    modal.querySelector('[data-sizes]').innerHTML = product.sizes
      .map((size, index) => `<button type="button" class="${index === Math.floor(product.sizes.length / 2) ? 'selected' : ''}">${escapeHtml(size)}</button>`).join('');
    modal.querySelector('[data-colors]').innerHTML = product.variants
      .map((variant, index) => `<button type="button" class="${index === variantIndex ? 'selected' : ''}" data-modal-variant="${index}">${escapeHtml(variant.label)}</button>`).join('');
    renderModalVariant(variantIndex);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('.modal-close').focus();
  };

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    activeModalProduct = null;
    activeModalVariant = 0;
  };

  const toggleCart = (isOpen) => {
    cartDrawer.classList.toggle('open', isOpen);
    overlay.classList.toggle('open', isOpen);
    cartDrawer.setAttribute('aria-hidden', String(!isOpen));
  };

  const toggleMenu = (isOpen) => {
    document.querySelector('.mobile-nav').classList.toggle('open', isOpen);
    document.querySelector('.mobile-nav').setAttribute('aria-hidden', String(!isOpen));
    document.querySelector('[data-menu]').setAttribute('aria-expanded', String(isOpen));
  };

  /* ---------------------------------------------------------------------
     7) ĮVYKIŲ RIŠIKLIAI
  --------------------------------------------------------------------- */
  grid.addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (!target || !grid.contains(target)) return;

    if (target.matches('[data-add]')) {
      addToCart(target.dataset.add);
      return;
    }

    if (target.matches('[data-view]')) {
      const card = target.closest('[data-product-card]');
      const activeSwatch = card?.querySelector('.color-swatch.active');
      const currentVariant = activeSwatch ? Number(activeSwatch.dataset.variant) : 0;
      openModal(target.dataset.view, currentVariant);
      return;
    }

    if (!target.matches('[data-variant]')) return;
    const card = target.closest('[data-product-card]');
    const product = products.find((item) => item.id === card?.dataset.productCard);
    const variantIndex = Number(target.dataset.variant);
    const variant = product?.variants[variantIndex];
    if (!card || !product || !variant) return;

    /* Akimirksniu pakeičiame BŪTENT ŠIOS kortelės nuotrauką, aprašymą ir aktyvų rėmelį */
    const image = card.querySelector('[data-product-image]');
    image.src = variant.image;
    image.alt = `${product.alt} – ${variant.label}`;
    card.querySelector('[data-product-detail]').textContent = variant.detail;
    card.querySelectorAll('[data-variant]').forEach((item) => {
      const active = item === target;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
  });

  document.querySelectorAll('.filter').forEach((filter) => filter.addEventListener('click', () => {
    activeCategory = filter.dataset.filter;
    showAll = false;
    document.querySelectorAll('.filter').forEach((item) => {
      item.classList.toggle('active', item === filter);
      item.setAttribute('aria-selected', String(item === filter));
    });
    renderProducts();
  }));

  document.querySelector('[data-show-all]').addEventListener('click', () => { showAll = !showAll; renderProducts(); });
  document.querySelectorAll('[data-cart]').forEach((button) => button.addEventListener('click', () => toggleCart(true)));
  document.querySelectorAll('[data-close-cart]').forEach((button) => button.addEventListener('click', () => toggleCart(false)));
  document.querySelector('[data-menu]').addEventListener('click', () => toggleMenu(true));
  document.querySelector('[data-close-menu]').addEventListener('click', () => toggleMenu(false));
  document.querySelectorAll('.mobile-nav a').forEach((link) => link.addEventListener('click', () => toggleMenu(false)));
  document.querySelectorAll('[data-mobile-filter]').forEach((button) => button.addEventListener('click', () => {
    const filter = document.querySelector(`[data-filter="${button.dataset.mobileFilter}"]`);
    filter?.click();
    toggleMenu(false);
    document.querySelector('#kolekcija')?.scrollIntoView({ behavior: 'smooth' });
  }));

  document.querySelector('[data-search]').addEventListener('click', () => { searchPanel.classList.add('open'); searchPanel.setAttribute('aria-hidden', 'false'); searchInput.focus(); });
  document.querySelector('[data-close-modal]').addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
  modal.addEventListener('click', (event) => {
    const option = event.target.closest('[data-modal-variant]');
    if (!option || !activeModalProduct) return;
    renderModalVariant(Number(option.dataset.modalVariant));
  });
  modal.querySelector('.modal-add').addEventListener('click', () => { if (activeModalProduct) { addToCart(activeModalProduct.id); closeModal(); } });
  document.querySelector('[data-close-search]').addEventListener('click', () => { searchPanel.classList.remove('open'); searchPanel.setAttribute('aria-hidden', 'true'); });
  searchInput.addEventListener('input', (event) => { searchTerm = event.target.value.trim(); showAll = true; renderProducts(); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { toggleCart(false); toggleMenu(false); closeModal(); searchPanel.classList.remove('open'); searchPanel.setAttribute('aria-hidden', 'true'); }
  });

  renderProducts();
  updateCart();
  iconRefresh();
});
