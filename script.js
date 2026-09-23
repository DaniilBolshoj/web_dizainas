document.addEventListener('DOMContentLoaded', () => {
  /* ---------------------------------------------------------------------
     1) PRODUKTŲ DUOMENYS
     Kiekvienas produktas turi:
       - baseImage: TIKRĄ, patikrintą Unsplash nuotrauką (realus drabužis/
         avalynė/aksesuaras, jokių scheminių piešinių).
       - colors: sąrašą spalvų. Pirma spalva ("real") yra būtent ta spalva,
         kurioje šis konkretus Unsplash kadras ir buvo nufotografuotas –
         ji rodoma be jokių pakeitimų, kaip originali nuotrauka.
       - Kitos dvi spalvos generuojamos IŠ TOS PAČIOS realios nuotraukos
         naudojant canvas – pikselių šviesumas paverčiamas į tikslią
         pasirinktą HEX spalvą (duotone metodas), todėl:
           a) nuotrauka išlieka fotografiška (audinio klostės, šešėliai,
              tekstūra), o ne piešinys;
           b) spalva VISADA tiksliai atitinka mygtuką, nes skaičiuojama
              matematiškai iš to paties HEX, o ne ieškoma atskiro
              (galimai neteisingo ar neveikiančio) nuotraukos adreso.
  --------------------------------------------------------------------- */
  const products = [
    { id: 'linine-sukne', name: 'Milano lininė midi suknelė', price: 139, category: 'women', tag: 'Naujiena',
      baseImage: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
      description: 'Lengva, laisvo kirpimo lininė suknelė vasaros karščiams ir tylioms vakaro valandoms.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [{ name: 'Smėlio', hex: '#cdbda8', real: true }, { name: 'Juoda', hex: '#202321' }, { name: 'Alyvuogių', hex: '#68705b' }] },
    { id: 'vilnos-megztinis', name: 'Verona kašmyro megztinis', price: 89, category: 'women',
      baseImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27',
      description: 'Minkštas kašmyro megztinis apvalia iškirpte – jaukumas be papildomo svorio.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [{ name: 'Kreida', hex: '#ece7dc', real: true }, { name: 'Juoda', hex: '#202321' }, { name: 'Alyvuogių', hex: '#68705b' }] },
    { id: 'placios-kelnes', name: 'Soho plačios tencelio kelnės', price: 109, category: 'women', tag: 'Bestseller',
      baseImage: 'https://images.unsplash.com/photo-1767631338127-8cd80ee2f9df',
      description: 'Plataus silueto tencelio kelnės su aukštu liemeniu, tinkančios prie beveik visko.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [{ name: 'Grafito', hex: '#4b4f4c', real: true }, { name: 'Smėlio', hex: '#cdbda8' }, { name: 'Juoda', hex: '#202321' }] },
    { id: 'marskiniai', name: 'Classic Oxford marškiniai', price: 74, category: 'men',
      baseImage: 'https://images.unsplash.com/photo-1603252110481-7ba873bf42ab',
      description: 'Klasikiniai oksfordo marškiniai iš organinės medvilnės – tinka tiek darbui, tiek laisvalaikiui.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [{ name: 'Balta', hex: '#f2efe7', real: true }, { name: 'Navy', hex: '#1d2d43' }, { name: 'Grafito', hex: '#4b4f4c' }] },
    { id: 'ilgas-paltas', name: 'Nordic vilnos paltas', price: 189, category: 'men', tag: 'Naujiena',
      baseImage: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3',
      description: 'Ilgas vilnos paltas švariomis linijomis, sukurtas šaltajam sezonui.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [{ name: 'Karamelė', hex: '#b9855b', real: true }, { name: 'Juoda', hex: '#202321' }, { name: 'Alyvuogių', hex: '#68705b' }] },
    { id: 'strukturuotas-svarkas', name: 'Malmö struktūruotas švarkas', price: 159, category: 'men',
      baseImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35',
      description: 'Struktūruotas vilnos švarkas su aiškiu siluetu kasdieniniams deriniams.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [{ name: 'Alyvuogių', hex: '#68705b', real: true }, { name: 'Karamelė', hex: '#b9855b' }, { name: 'Navy', hex: '#1d2d43' }] },
    { id: 'vaiku-kardiganas', name: 'Mėlynas Little Cloud kardiganas', price: 64, category: 'kids', tag: 'Bestseller',
      baseImage: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b',
      description: 'Švelnus merino vilnos kardiganas vaikams – šiltas, bet nesunkus.',
      sizes: ['92', '98', '104', '110', '116', '122'],
      colors: [{ name: 'Mėlis', hex: '#8ba7b8', real: true }, { name: 'Smėlio', hex: '#cdbda8' }, { name: 'Miško', hex: '#3d5547' }] },
    { id: 'vaiku-kelnes', name: 'Sandstone drobės kelnės', price: 52, category: 'kids',
      baseImage: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4',
      description: 'Patvarios ekologiškos medvilnės kelnės, sukurtos aktyvioms vaikų dienoms.',
      sizes: ['92', '98', '104', '110', '116', '122'],
      colors: [{ name: 'Smėlio', hex: '#cdbda8', real: true }, { name: 'Mėlis', hex: '#8ba7b8' }, { name: 'Miško', hex: '#3d5547' }] },
    { id: 'vaiku-liemene', name: 'Forest quilted liemenė', price: 78, category: 'kids', tag: 'Naujiena',
      baseImage: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea',
      description: 'Prasegama pikuota liemenė be rankovių – papildomas šilumos sluoksnis žaidimams lauke.',
      sizes: ['92', '98', '104', '110', '116', '122'],
      colors: [{ name: 'Miško', hex: '#3d5547', real: true }, { name: 'Smėlio', hex: '#cdbda8' }, { name: 'Mėlis', hex: '#8ba7b8' }] },
    { id: 'odinis-batas', name: 'Roma odiniai loaferiai', price: 149, category: 'shoes', tag: 'Bestseller',
      baseImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2',
      description: 'Minimalistiniai odiniai loaferiai su švelniu blizgesiu ir patogiu vidpadžiu.',
      sizes: ['38', '39', '40', '41', '42', '43', '44'],
      colors: [{ name: 'Juoda', hex: '#202321', real: true }, { name: 'Riešutų', hex: '#805637' }, { name: 'Kreida', hex: '#e8e2d7' }] },
    { id: 'minimalistiniai-sportbaciai', name: 'Copenhagen minimalistiniai sportbačiai', price: 119, category: 'shoes',
      baseImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      description: 'Švarios linijos ir perdirbtos gumos vidpadis – kasdieniai sportbačiai be triukšmo.',
      sizes: ['38', '39', '40', '41', '42', '43', '44'],
      colors: [{ name: 'Kreida', hex: '#e8e2d7', real: true }, { name: 'Juoda', hex: '#202321' }, { name: 'Riešutų', hex: '#805637' }] },
    { id: 'ziemos-aulinukai', name: 'Alpine žieminiai aulinukai', price: 169, category: 'shoes', tag: 'Naujiena',
      baseImage: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f',
      description: 'Šilti odiniai aulinukai su patvaria padu žiemos sąlygoms.',
      sizes: ['38', '39', '40', '41', '42', '43', '44'],
      colors: [{ name: 'Riešutų', hex: '#805637', real: true }, { name: 'Juoda', hex: '#202321' }, { name: 'Kreida', hex: '#e8e2d7' }] },
    { id: 'odinis-krepsys', name: 'Atelier odinis krepšys', price: 129, category: 'accessories', tag: 'Bestseller',
      baseImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa',
      description: 'Erdvus odinis krepšys su vidinėmis kišenėmis kasdieniams daiktams.',
      sizes: ['Universalus dydis'],
      colors: [{ name: 'Espresso', hex: '#4b3027', real: true }, { name: 'Juoda', hex: '#202321' }, { name: 'Pieno', hex: '#e8e2d7' }] },
    { id: 'vilnos-salikas', name: 'Alba vilnos šalikas', price: 58, category: 'accessories',
      baseImage: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9',
      description: 'Minkštas vilnos šalikas, kuris papildo bet kokį žieminį įvaizdį.',
      sizes: ['Universalus dydis'],
      colors: [{ name: 'Pieno', hex: '#e8e2d7', real: true }, { name: 'Espresso', hex: '#4b3027' }, { name: 'Juoda', hex: '#202321' }] },
    { id: 'odinis-dirzas', name: 'Linea klasikinis diržas', price: 49, category: 'accessories',
      baseImage: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc',
      description: 'Klasikinis odinis diržas su metaline sagtimi – tinka beveik prie visų kelnių.',
      sizes: ['Universalus dydis'],
      colors: [{ name: 'Juoda', hex: '#202321', real: true }, { name: 'Espresso', hex: '#4b3027' }, { name: 'Pieno', hex: '#e8e2d7' }] }
  ];

  const photoParams = 'auto=format&fit=crop&w=900&h=1200&q=80';
  products.forEach((product) => { product.baseImage = `${product.baseImage}?${photoParams}`; });

  /* ---------------------------------------------------------------------
     2) TIKSLUS SPALVOS PRITAIKYMAS REALIAI NUOTRAUKAI (canvas duotone)
     Realios nuotraukos šviesumo (luminance) žemėlapis paverčiamas į
     gradientą tarp tamsaus atspalvio ir TIKSLIOS pasirinktos HEX
     spalvos – todėl gautas vaizdas ir toliau atrodo kaip fotografija
     (matosi audinio klostės, šešėliai), bet spalva 100 % atitinka
     paspaustą mygtuką.
  --------------------------------------------------------------------- */
  const hexToRgb = (hex) => {
    const clean = hex.replace('#', '');
    return {
      r: parseInt(clean.substring(0, 2), 16),
      g: parseInt(clean.substring(2, 4), 16),
      b: parseInt(clean.substring(4, 6), 16)
    };
  };

  const tintCache = new Map();
  const tintPhoto = (url, hex) => {
    const key = `${url}__${hex}`;
    if (tintCache.has(key)) return tintCache.get(key);
    const promise = new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = img.naturalWidth || 900;
          canvas.height = img.naturalHeight || 1200;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = frame.data;
          const target = hexToRgb(hex);
          const shadow = { r: target.r * 0.22, g: target.g * 0.22, b: target.b * 0.22 };
          for (let i = 0; i < data.length; i += 4) {
            const luminance = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255;
            data[i] = shadow.r + (target.r - shadow.r) * luminance;
            data[i + 1] = shadow.g + (target.g - shadow.g) * luminance;
            data[i + 2] = shadow.b + (target.b - shadow.b) * luminance;
          }
          ctx.putImageData(frame, 0, 0);
          resolve(canvas.toDataURL('image/jpeg', 0.86));
        } catch (error) {
          console.warn('Nepavyko pritaikyti spalvos nuotraukai, rodoma originali.', error);
          resolve(url);
        }
      };
      img.onerror = () => resolve(url);
      img.src = url;
    });
    tintCache.set(key, promise);
    return promise;
  };

  /* Grąžina konkretaus varianto nuotraukos adresą: reali spalva = originali
     nuotrauka be pakeitimų; kitos spalvos = Promise<string> su pritaikyta spalva. */
  const variantImage = (product, color) => (color.real ? Promise.resolve(product.baseImage) : tintPhoto(product.baseImage, color.hex));

  const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[character]));

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

  try {
    cart = JSON.parse(localStorage.getItem('forma-cart') || '[]');
  } catch (error) {
    console.warn('Nepavyko atkurti krepšelio iš vietinės saugyklos.', error);
    cart = [];
  }

  /* ---------------------------------------------------------------------
     4) STABILUS MOBILUS MENIU / SCROLL-LOCK
     Kai atidarytas krepšelis, hamburger meniu, paieška ar produkto
     peržiūra, fonas užrakinamas (body position: fixed + overflow: hidden),
     kad puslapis nešokinėtų ir neslinktų po atidarytu meniu. Naudojamas
     raktų rinkinys (Set), kad keli vienu metu atidaryti sluoksniai
     neatrakintų fono per anksti.
  --------------------------------------------------------------------- */
  const lockedBy = new Set();
  let savedScrollY = 0;
  const applyBodyLock = () => {
    const shouldLock = lockedBy.size > 0;
    const isLocked = document.body.classList.contains('scroll-locked');
    if (shouldLock && !isLocked) {
      savedScrollY = window.scrollY || window.pageYOffset || 0;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${savedScrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.classList.add('scroll-locked');
      document.documentElement.classList.add('scroll-locked');
    } else if (!shouldLock && isLocked) {
      document.body.classList.remove('scroll-locked');
      document.documentElement.classList.remove('scroll-locked');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.paddingRight = '';
      window.scrollTo(0, savedScrollY);
    }
  };
  const lockScroll = (key, shouldLock) => {
    if (shouldLock) lockedBy.add(key); else lockedBy.delete(key);
    applyBodyLock();
  };

  const iconRefresh = () => window.lucide?.createIcons();

  const matchingProducts = () => products.filter((product) => {
    const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
    const haystack = `${product.name} ${product.colors[0].name}`.toLocaleLowerCase('lt');
    const searchMatch = haystack.includes(searchTerm.toLocaleLowerCase('lt'));
    return categoryMatch && searchMatch;
  });

  /* ---------------------------------------------------------------------
     5) PRODUKTŲ TINKLELIO ATVAIZDAVIMAS
  --------------------------------------------------------------------- */
  const renderProducts = () => {
    const matches = matchingProducts();
    const visibleProducts = showAll ? matches : matches.slice(0, 9);
    total.textContent = String(matches.length).padStart(2, '0');
    grid.innerHTML = visibleProducts.length
      ? visibleProducts.map((product) => `
        <article class="product-card reveal" data-product-card="${product.id}">
          <button class="product-image product-image-${product.category}" data-view="${product.id}" aria-label="Peržiūrėti ${escapeHtml(product.name)}">
            <img data-product-image src="${product.baseImage}" alt="${escapeHtml(product.name)} – ${escapeHtml(product.colors[0].name)}" width="900" height="1200" loading="lazy" decoding="async">
            ${product.tag ? `<span class="product-tag ${product.tag === 'Bestseller' ? 'muted' : ''}">${product.tag}</span>` : ''}
            <span class="view-product">Peržiūrėti <b>↗</b></span>
          </button>
          <div class="product-info">
            <div><h3>${escapeHtml(product.name)}</h3><p data-product-detail>${escapeHtml(product.colors[0].name)}</p></div>
            <strong>${product.price} €</strong>
          </div>
          <div class="product-swatches" role="group" aria-label="Spalvos: ${escapeHtml(product.name)}">
            ${product.colors.map((color, index) => `<button class="color-swatch${index === 0 ? ' active' : ''}" type="button" data-color-index="${index}" style="--swatch-color: ${color.hex}" aria-label="${escapeHtml(color.name)}" aria-pressed="${index === 0}"></button>`).join('')}
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
     6) KREPŠELIS
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
     7) GREITA PERŽIŪRA (QUICK VIEW) – VISADA TOS PAČIOS PASPAUSTOS PREKĖS DUOMENYS
  --------------------------------------------------------------------- */
  const renderModalVariant = (colorIndex) => {
    if (!activeModalProduct) return;
    const color = activeModalProduct.colors[colorIndex] || activeModalProduct.colors[0];
    const image = modal.querySelector('[data-modal-image]');
    image.alt = `${activeModalProduct.name} – ${color.name}`;
    modal.querySelector('.modal-detail').textContent = color.name;
    modal.querySelector('[data-colors]').querySelectorAll('button').forEach((button, index) => {
      button.classList.toggle('selected', index === colorIndex);
    });
    variantImage(activeModalProduct, color).then((src) => {
      if (activeModalProduct && activeModalProduct.colors[colorIndex] === color) image.src = src;
    });
  };

  const openModal = (id, colorIndex = 0) => {
    const product = products.find((item) => item.id === id);
    if (!product) return;
    activeModalProduct = product;
    modal.querySelector('#modal-title').textContent = product.name;
    modal.querySelector('.modal-price').textContent = `${product.price} €`;
    modal.querySelector('.modal-description').textContent = product.description;
    modal.querySelector('[data-sizes]').innerHTML = product.sizes
      .map((size, index) => `<button type="button" class="${index === Math.floor(product.sizes.length / 2) ? 'selected' : ''}">${escapeHtml(size)}</button>`).join('');
    modal.querySelector('[data-colors]').innerHTML = product.colors
      .map((color, index) => `<button type="button" class="${index === colorIndex ? 'selected' : ''}" data-modal-color="${index}">${escapeHtml(color.name)}</button>`).join('');
    renderModalVariant(colorIndex);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('.modal-close').focus();
    lockScroll('modal', true);
  };

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    activeModalProduct = null;
    lockScroll('modal', false);
  };

  const toggleCart = (isOpen) => {
    cartDrawer.classList.toggle('open', isOpen);
    overlay.classList.toggle('open', isOpen);
    cartDrawer.setAttribute('aria-hidden', String(!isOpen));
    lockScroll('cart', isOpen);
  };

  const toggleMenu = (isOpen) => {
    document.querySelector('.mobile-nav').classList.toggle('open', isOpen);
    document.querySelector('.mobile-nav').setAttribute('aria-hidden', String(!isOpen));
    document.querySelector('[data-menu]').setAttribute('aria-expanded', String(isOpen));
    lockScroll('menu', isOpen);
  };

  const openSearch = () => {
    searchPanel.classList.add('open');
    searchPanel.setAttribute('aria-hidden', 'false');
    searchInput.focus();
    lockScroll('search', true);
  };

  const closeSearch = () => {
    searchPanel.classList.remove('open');
    searchPanel.setAttribute('aria-hidden', 'true');
    lockScroll('search', false);
  };

  /* ---------------------------------------------------------------------
     8) ĮVYKIŲ RIŠIKLIAI
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
      const currentColorIndex = activeSwatch ? Number(activeSwatch.dataset.colorIndex) : 0;
      openModal(target.dataset.view, currentColorIndex);
      return;
    }

    if (!target.matches('[data-color-index]')) return;
    const card = target.closest('[data-product-card]');
    const product = products.find((item) => item.id === card?.dataset.productCard);
    const colorIndex = Number(target.dataset.colorIndex);
    const color = product?.colors[colorIndex];
    if (!card || !product || !color) return;

    /* Akimirksniu pažymime aktyvų mygtuką ir tekstą; nuotrauka atnaujinama,
       kai tik būna paruošta TIKSLIAI ta spalva (dažniausiai iš talpyklos – beveik akimirksniu). */
    card.querySelector('[data-product-detail]').textContent = color.name;
    card.querySelectorAll('[data-color-index]').forEach((item) => {
      const active = item === target;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    const image = card.querySelector('[data-product-image]');
    variantImage(product, color).then((src) => {
      const stillActive = card.querySelector('.color-swatch.active') === target;
      if (stillActive) {
        image.src = src;
        image.alt = `${product.name} – ${color.name}`;
      }
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

  document.querySelector('[data-search]').addEventListener('click', openSearch);
  document.querySelector('[data-close-search]').addEventListener('click', closeSearch);
  document.querySelector('[data-close-modal]').addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
  modal.addEventListener('click', (event) => {
    const option = event.target.closest('[data-modal-color]');
    if (!option || !activeModalProduct) return;
    renderModalVariant(Number(option.dataset.modalColor));
  });
  modal.querySelector('.modal-add').addEventListener('click', () => { if (activeModalProduct) { addToCart(activeModalProduct.id); closeModal(); } });
  searchInput.addEventListener('input', (event) => { searchTerm = event.target.value.trim(); showAll = true; renderProducts(); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { toggleCart(false); toggleMenu(false); closeModal(); closeSearch(); }
  });

  renderProducts();
  updateCart();
  iconRefresh();
});