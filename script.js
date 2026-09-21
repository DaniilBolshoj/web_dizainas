document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { id: 'linine-sukne', name: 'Milano lininė midi suknelė', detail: 'Jūros / linas', price: 139, category: 'women', tag: 'Naujiena', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85', alt: 'Smėlio spalvos lininė midi suknelė' },
    { id: 'vilnos-megztinis', name: 'Verona kašmyro megztinis', detail: 'Žiemos balta / vilna', price: 89, category: 'women', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85', alt: 'Šviesus Verona kašmyro megztinis' },
    { id: 'placios-kelnes', name: 'Soho plačios tencelio kelnės', detail: 'Grafito / tencelis', price: 109, category: 'women', tag: 'Bestseller', image: 'https://www.baltasmiskas.lt/images/uploader/do/1122x1496.g/doke-tamsios-placios-kelnes-1.png?v=1787324637', alt: 'Grafito spalvos plačios tencelio kelnės' },
    { id: 'marskiniai', name: 'Classic Oxford marškiniai', detail: 'Balta / organinė medvilnė', price: 74, category: 'men', image: 'https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=85', alt: 'Balti Classic Oxford marškiniai' },
    { id: 'ilgas-paltas', name: 'Nordic vilnos paltas', detail: 'Karamelė / perdirbta vilna', price: 189, category: 'men', tag: 'Naujiena', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=900&q=85', alt: 'Karamelinis Nordic vilnos paltas' },
    { id: 'strukturuotas-svarkas', name: 'Malmö struktūruotas švarkas', detail: 'Alyvuogių / vilna', price: 159, category: 'men', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=85', alt: 'Alyvuogių Malmö struktūruotas švarkas' },
    { id: 'vaiku-kardiganas', name: 'Mėlynas Little Cloud kardiganas', detail: 'Mėlis / merino vilna', price: 64, category: 'kids', tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85', alt: 'Vaikiškas mėlynas merino kardiganas' },
    { id: 'vaiku-kelnes', name: 'Sandstone drobės kelnės', detail: 'Smėlio / ekologiška medvilnė', price: 52, category: 'kids', image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=85', alt: 'Smėlio spalvos vaikiškos drobės kelnės' },
    { id: 'vaiku-liemene', name: 'Forest quilted liemenė', detail: 'Miško / perdirbtas nailonas', price: 78, category: 'kids', tag: 'Naujiena', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85', alt: 'Miško žalumo vaikiška liemenė' },
    { id: 'odinis-batas', name: 'Roma odiniai loaferiai', detail: 'Juoda / oda', price: 149, category: 'shoes', tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85', alt: 'Juodi Roma odiniai loaferiai' },
    { id: 'minimalistiniai-sportbaciai', name: 'Copenhagen minimalistiniai sportbačiai', detail: 'Kreida / perdirbta guma', price: 119, category: 'shoes', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85', alt: 'Kreidos spalvos minimalistiniai sportbačiai' },
    { id: 'ziemos-aulinukai', name: 'Alpine žieminiai aulinukai', detail: 'Riešutų / oda', price: 169, category: 'shoes', tag: 'Naujiena', image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=85', alt: 'Riešutų spalvos žieminiai aulinukai' },
    { id: 'odinis-krepsys', name: 'Atelier odinis krepšys', detail: 'Espresso / oda', price: 129, category: 'accessories', tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85', alt: 'Espresso spalvos Atelier odinis krepšys' },
    { id: 'vilnos-salikas', name: 'Alba vilnos šalikas', detail: 'Pieno / vilna', price: 58, category: 'accessories', image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=900&q=85', alt: 'Pieno spalvos Alba vilnos šalikas' },
    { id: 'odinis-dirzas', name: 'Linea klasikinis diržas', detail: 'Juoda / oda', price: 49, category: 'accessories', image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=85', alt: 'Juodas Linea odinis diržas' }
  ];
  const variantPalettes = {
    women: [['Smėlio', '#cdbda8'], ['Juoda', '#202321'], ['Alyvuogių', '#68705b']],
    men: [['Karamelė', '#b9855b'], ['Navy', '#1d2d43'], ['Alyvuogių', '#68705b']],
    kids: [['Mėlis', '#8ba7b8'], ['Smėlio', '#cdbda8'], ['Miško', '#3d5547']],
    shoes: [['Juoda', '#202321'], ['Riešutų', '#805637'], ['Kreida', '#e8e2d7']],
    accessories: [['Espresso', '#4b3027'], ['Juoda', '#202321'], ['Pieno', '#e8e2d7']]
  };
  const variantImageOverrides = {
    'linine-sukne': ['1591369822096-ffd140ec948f', '1485968579580-b6d095142e6e', '1515372039744-b8f02a3ae446'],
    'vilnos-megztinis': ['1576566588028-4147f3842f27', '1512436991641-6745cdb1723f', '1551028719-00167b16eac5'],
    'placios-kelnes': ['1506629905607-d9c297d5f2e7', '1515886657613-9f3515b0c78f', '1506629905607-d9c297d5f2e7'],
    'marskiniai': ['1603252110481-7ba873bf42ab', '1596755389378-c31d21fd1273', '1602810318383-e386cc2a3ccf'],
    'ilgas-paltas': ['1539533018447-63fcce2678e3', '1515886657613-9f3515b0c78f', '1548883354-7622d03acc27'],
    'strukturuotas-svarkas': ['1594938298603-c8148c4dae35', '1507679799987-c73779587ccf', '1551488831-00ddcb6c6bd3'],
    'vaiku-kardiganas': ['1519457431-44ccd64a579b', '1519238263530-99bdd11df2ea', '1503919545889-aef636e10ad4'],
    'vaiku-kelnes': ['1503919545889-aef636e10ad4', '1519238263530-99bdd11df2ea', '1519457431-44ccd64a579b'],
    'vaiku-liemene': ['1519238263530-99bdd11df2ea', '1503919545889-aef636e10ad4', '1519457431-44ccd64a579b'],
    'odinis-batas': ['1543163521-1bf539c55dd2', '1608256246200-53e635b5b65f', '1542291026-7eec264c27ff'],
    'minimalistiniai-sportbaciai': ['1542291026-7eec264c27ff', '1543163521-1bf539c55dd2', '1608256246200-53e635b5b65f'],
    'ziemos-aulinukai': ['1608256246200-53e635b5b65f', '1543163521-1bf539c55dd2', '1542291026-7eec264c27ff'],
    'odinis-krepsys': ['1548036328-c9fa89d128fa', '1553062407-98eeb64c6a62', '1594223274516-0dff5b9b6c4a'],
    'vilnos-salikas': ['1520903920243-00d872a2d1c9', '1576871337632-b9aef4c17ab9', '1601924928376-2a7d4c7e5c8b'],
    'odinis-dirzas': ['1624222247344-550fb60583dc', '1523779917675-b6ed3a42a561', '1553062407-98eeb64c6a62']
  };
  products.forEach((product) => {
    const material = product.detail.split(' / ')[1];
    product.variants = variantPalettes[product.category].map(([label, swatch], index) => ({
      label,
      swatch,
      detail: `${label} / ${material}`,
      image: `https://images.unsplash.com/photo-${variantImageOverrides[product.id][index]}?auto=format&fit=crop&w=900&h=1200&q=85`
    }));
  });
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
  let activeCategory = 'all';
  let showAll = false;
  let searchTerm = '';
  let cart = [];
  let activeModalProduct = null;
  try { cart = JSON.parse(localStorage.getItem('forma-cart') || '[]'); } catch (error) { console.warn('Nepavyko atkurti krepšelio iš vietinės saugyklos.', error); cart = []; }

  const iconRefresh = () => window.lucide?.createIcons();
  const escapeHtml = (value) => value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[character]));
  const matchingProducts = () => products.filter((product) => {
    const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
    const searchMatch = `${product.name} ${product.detail}`.toLocaleLowerCase('lt').includes(searchTerm.toLocaleLowerCase('lt'));
    return categoryMatch && searchMatch;
  });
  const renderProducts = () => {
    const matches = matchingProducts();
    const visibleProducts = showAll ? matches : matches.slice(0, 9);
    total.textContent = String(matches.length).padStart(2, '0');
    grid.innerHTML = visibleProducts.length ? visibleProducts.map((product) => `<article class="product-card reveal" data-product-card="${product.id}"><button class="product-image product-image-${product.category}" data-view="${product.id}" aria-label="Peržiūrėti ${escapeHtml(product.name)}"><img data-product-image src="${product.variants[0].image}" alt="${escapeHtml(product.alt)}" width="900" height="1200" loading="lazy" decoding="async">${product.tag ? `<span class="product-tag ${product.tag === 'Bestseller' ? 'muted' : ''}">${product.tag}</span>` : ''}<span class="view-product">Peržiūrėti <b>↗</b></span></button><div class="product-info"><div><h3>${product.name}</h3><p data-product-detail>${product.variants[0].detail}</p></div><strong>${product.price} €</strong></div><div class="product-swatches" role="group" aria-label="Spalvos: ${escapeHtml(product.name)}">${product.variants.map((variant, index) => `<button class="color-swatch${index === 0 ? ' active' : ''}" type="button" data-variant="${index}" style="--swatch-color: ${variant.swatch}" aria-label="${escapeHtml(variant.label)}" aria-pressed="${index === 0}"></button>`).join('')}</div><button class="add-button" data-add="${product.id}">+ Į krepšelį</button></article>`).join('') : '<p class="no-results">Šioje kategorijoje produktų neradome.</p>';
    const showAllButton = document.querySelector('[data-show-all]');
    showAllButton.hidden = matches.length <= 9;
    showAllButton.innerHTML = showAll ? 'Rodyti mažiau <span>↗</span>' : 'Rodyti visus produktus <span>↘</span>';
    iconRefresh();
  };
  const updateCart = () => {
    const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = quantity;
    cartTotal.textContent = `${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)} €`;
    localStorage.setItem('forma-cart', JSON.stringify(cart));
    cartItems.innerHTML = cart.length ? cart.map((item) => `<div class="cart-line"><div><strong>${item.name}</strong><span>${item.price} €</span><div class="quantity-controls"><button data-decrease="${item.id}" aria-label="Sumažinti ${item.name} kiekį">−</button><span>${item.quantity}</span><button data-increase="${item.id}" aria-label="Padidinti ${item.name} kiekį">+</button></div></div><button aria-label="Pašalinti ${item.name}" data-remove="${item.id}">×</button></div>`).join('') : '<div class="empty-cart"><i data-lucide="shopping-bag"></i><p>Krepšelis kol kas tuščias.</p><span>Laikas atrasti savo naują favoritą.</span></div>';
    cartItems.querySelectorAll('[data-increase]').forEach((button) => button.addEventListener('click', () => changeQuantity(button.dataset.increase, 1)));
    cartItems.querySelectorAll('[data-decrease]').forEach((button) => button.addEventListener('click', () => changeQuantity(button.dataset.decrease, -1)));
    cartItems.querySelectorAll('[data-remove]').forEach((button) => button.addEventListener('click', () => { cart = cart.filter((item) => item.id !== button.dataset.remove); updateCart(); }));
    iconRefresh();
  };
  const changeQuantity = (id, delta) => { const item = cart.find((entry) => entry.id === id); if (item) item.quantity += delta; cart = cart.filter((entry) => entry.quantity > 0); updateCart(); };
  const addToCart = (id) => { const product = products.find((item) => item.id === id); const existing = cart.find((item) => item.id === id); existing ? existing.quantity += 1 : cart.push({ ...product, quantity: 1 }); updateCart(); toggleCart(true); toast.classList.add('show'); window.clearTimeout(window.toastTimer); window.toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2200); };
  const modal = document.querySelector('.product-modal');
  const openModal = (id, variantIndex = 0) => {
    activeModalProduct = products.find((item) => item.id === id);
    if (!activeModalProduct) return;
    const variant = activeModalProduct.variants[variantIndex] || activeModalProduct.variants[0];
    modal.querySelector('[data-modal-image]').src = variant.image;
    modal.querySelector('[data-modal-image]').alt = `${activeModalProduct.name} – ${variant.label}`;
    modal.querySelector('#modal-title').textContent = activeModalProduct.name;
    modal.querySelector('.modal-detail').textContent = variant.detail;
    modal.querySelector('.modal-price').textContent = `${activeModalProduct.price} €`;
    modal.querySelector('.modal-description').textContent = 'Laikui nepavaldus siluetas, sukurtas patogiai kasdienai ir ilgam dėvėjimui.';
    modal.querySelector('[data-sizes]').innerHTML = ['XS', 'S', 'M', 'L', 'XL'].map((size, index) => `<button type="button" class="${index === 2 ? 'selected' : ''}">${size}</button>`).join('');
    modal.querySelector('[data-colors]').innerHTML = activeModalProduct.variants.map((item, index) => `<button type="button" class="${index === variantIndex ? 'selected' : ''}" data-modal-variant="${index}">${escapeHtml(item.label)}</button>`).join('');
    modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); modal.querySelector('.modal-close').focus();
  };
  const closeModal = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); activeModalProduct = null; };
  const toggleCart = (isOpen) => { cartDrawer.classList.toggle('open', isOpen); overlay.classList.toggle('open', isOpen); cartDrawer.setAttribute('aria-hidden', String(!isOpen)); };
  const toggleMenu = (isOpen) => { document.querySelector('.mobile-nav').classList.toggle('open', isOpen); document.querySelector('.mobile-nav').setAttribute('aria-hidden', String(!isOpen)); document.querySelector('[data-menu]').setAttribute('aria-expanded', String(isOpen)); };
  grid.addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (!target || !grid.contains(target)) return;
    if (target.matches('[data-add]')) {
      addToCart(target.dataset.add);
      return;
    }
    if (target.matches('[data-view]')) {
      openModal(target.dataset.view, 0);
      return;
    }
    if (!target.matches('[data-variant]')) return;
    const card = target.closest('[data-product-card]');
    const product = products.find((item) => item.id === card?.dataset.productCard);
    const variantIndex = Number(target.dataset.variant);
    const variant = product?.variants[variantIndex];
    if (!card || !variant) return;
    card.querySelector('[data-product-image]').src = variant.image;
    card.querySelector('[data-product-image]').alt = `${product.name} – ${variant.label}`;
    card.querySelector('[data-product-detail]').textContent = variant.detail;
    card.querySelectorAll('[data-variant]').forEach((item) => {
      const active = item === target;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
  });
  document.querySelectorAll('.filter').forEach((filter) => filter.addEventListener('click', () => { activeCategory = filter.dataset.filter; showAll = false; document.querySelectorAll('.filter').forEach((item) => { item.classList.toggle('active', item === filter); item.setAttribute('aria-selected', String(item === filter)); }); renderProducts(); }));
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
    const variant = activeModalProduct.variants[Number(option.dataset.modalVariant)];
    modal.querySelector('[data-modal-image]').src = variant.image;
    modal.querySelector('[data-modal-image]').alt = `${activeModalProduct.name} – ${variant.label}`;
    modal.querySelector('.modal-detail').textContent = variant.detail;
    option.parentElement.querySelectorAll('button').forEach((item) => item.classList.toggle('selected', item === option));
  });
  modal.querySelector('.modal-add').addEventListener('click', () => { if (activeModalProduct) { addToCart(activeModalProduct.id); closeModal(); } });
  document.querySelector('[data-close-search]').addEventListener('click', () => { searchPanel.classList.remove('open'); searchPanel.setAttribute('aria-hidden', 'true'); });
  searchInput.addEventListener('input', (event) => { searchTerm = event.target.value.trim(); showAll = true; renderProducts(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { toggleCart(false); toggleMenu(false); closeModal(); searchPanel.classList.remove('open'); } });
  renderProducts();
  updateCart();
  iconRefresh();
});
