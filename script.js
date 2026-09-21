document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { id: 'linine-sukne', name: 'Lininė suknelė', detail: 'Jūros / linas', price: 139, category: 'women', tag: 'Naujiena', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85', alt: 'Smėlio spalvos lininė suknelė' },
    { id: 'vilnos-megztinis', name: 'Vilnos megztinis', detail: 'Žiemos balta / vilna', price: 89, category: 'women', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85', alt: 'Šviesus vilnos megztinis' },
    { id: 'placios-kelnes', name: 'Plačios kelnės', detail: 'Grafito / tencelis', price: 109, category: 'women', tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1506629905607-d9c297d5f2e7?auto=format&fit=crop&w=900&q=85', alt: 'Tamsios plačios kelnės' },
    { id: 'marskiniai', name: 'Kasdieniai marškiniai', detail: 'Balta / organinė medvilnė', price: 74, category: 'men', image: 'https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=85', alt: 'Balti kasdieniai marškiniai' },
    { id: 'ilgas-paltas', name: 'Ilgas paltas', detail: 'Karamelė / perdirbta vilna', price: 189, category: 'men', tag: 'Naujiena', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=900&q=85', alt: 'Rudas ilgas paltas' },
    { id: 'strukturuotas-svarkas', name: 'Struktūruotas švarkas', detail: 'Alyvuogių / vilna', price: 159, category: 'men', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=85', alt: 'Struktūruotas alyvuogių švarkas' },
    { id: 'vaiku-kardiganas', name: 'Minkštas kardiganas', detail: 'Mėlis / merino vilna', price: 64, category: 'kids', tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85', alt: 'Vaikiškas megztinis' },
    { id: 'vaiku-kelnes', name: 'Drobės kelnės', detail: 'Smėlio / ekologiška medvilnė', price: 52, category: 'kids', image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=85', alt: 'Vaikiškos drobės kelnės' },
    { id: 'vaiku-liemene', name: 'Dygsniuota liemenė', detail: 'Miško / perdirbtas nailonas', price: 78, category: 'kids', tag: 'Naujiena', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85', alt: 'Vaikiška žalia liemenė' },
    { id: 'odinis-batas', name: 'Odiniai loaferiai', detail: 'Juoda / oda', price: 149, category: 'shoes', tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85', alt: 'Juodi odiniai loaferiai' },
    { id: 'minimalistiniai-sportbaciai', name: 'Minimalistiniai sportbačiai', detail: 'Kreida / perdirbta guma', price: 119, category: 'shoes', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85', alt: 'Šviesūs minimalistiniai sportbačiai' },
    { id: 'ziemos-aulinukai', name: 'Žiemos aulinukai', detail: 'Riešutų / oda', price: 169, category: 'shoes', tag: 'Naujiena', image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=85', alt: 'Rudi žieminiai aulinukai' },
    { id: 'odinis-krepsys', name: 'Kasdienis krepšys', detail: 'Espresso / oda', price: 129, category: 'accessories', tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85', alt: 'Rudas odinis krepšys' },
    { id: 'vilnos-salikas', name: 'Vilnos šalikas', detail: 'Pieno / vilna', price: 58, category: 'accessories', image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=900&q=85', alt: 'Šviesus vilnos šalikas' },
    { id: 'odinis-dirzas', name: 'Klasikinis diržas', detail: 'Juoda / oda', price: 49, category: 'accessories', image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=85', alt: 'Juodas odinis diržas' }
  ];
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
    grid.innerHTML = visibleProducts.length ? visibleProducts.map((product) => `<article class="product-card reveal"><a class="product-image" href="#${product.id}"><img src="${product.image}" alt="${escapeHtml(product.alt)}" width="900" height="1200" loading="lazy" decoding="async">${product.tag ? `<span class="product-tag ${product.tag === 'Bestseller' ? 'muted' : ''}">${product.tag}</span>` : ''}<span class="view-product">Peržiūrėti <b>↗</b></span></a><div class="product-info"><div><h3>${product.name}</h3><p>${product.detail}</p></div><strong>${product.price} €</strong></div><button class="add-button" data-add="${product.id}">+ Į krepšelį</button></article>`).join('') : '<p class="no-results">Šioje kategorijoje produktų neradome.</p>';
    const showAllButton = document.querySelector('[data-show-all]');
    showAllButton.hidden = matches.length <= 9;
    showAllButton.innerHTML = showAll ? 'Rodyti mažiau <span>↗</span>' : 'Rodyti visus produktus <span>↘</span>';
    grid.querySelectorAll('[data-add]').forEach((button) => button.addEventListener('click', () => addToCart(button.dataset.add)));
    iconRefresh();
  };
  const updateCart = () => {
    const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = quantity;
    cartTotal.textContent = `${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)} €`;
    cartItems.innerHTML = cart.length ? cart.map((item) => `<div class="cart-line"><div><strong>${item.name}</strong><span>${item.quantity} × ${item.price} €</span></div><button aria-label="Pašalinti ${item.name}" data-remove="${item.id}">×</button></div>`).join('') : '<div class="empty-cart"><i data-lucide="shopping-bag"></i><p>Krepšelis kol kas tuščias.</p><span>Laikas atrasti savo naują favoritą.</span></div>';
    cartItems.querySelectorAll('[data-remove]').forEach((button) => button.addEventListener('click', () => { cart = cart.filter((item) => item.id !== button.dataset.remove); updateCart(); }));
    iconRefresh();
  };
  const addToCart = (id) => { const product = products.find((item) => item.id === id); const existing = cart.find((item) => item.id === id); existing ? existing.quantity += 1 : cart.push({ ...product, quantity: 1 }); updateCart(); toast.classList.add('show'); window.clearTimeout(window.toastTimer); window.toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2200); };
  const toggleCart = (isOpen) => { cartDrawer.classList.toggle('open', isOpen); overlay.classList.toggle('open', isOpen); cartDrawer.setAttribute('aria-hidden', String(!isOpen)); };
  const toggleMenu = (isOpen) => { document.querySelector('.mobile-nav').classList.toggle('open', isOpen); document.querySelector('.mobile-nav').setAttribute('aria-hidden', String(!isOpen)); document.querySelector('[data-menu]').setAttribute('aria-expanded', String(isOpen)); };
  document.querySelectorAll('.filter').forEach((filter) => filter.addEventListener('click', () => { activeCategory = filter.dataset.filter; showAll = false; document.querySelectorAll('.filter').forEach((item) => { item.classList.toggle('active', item === filter); item.setAttribute('aria-selected', String(item === filter)); }); renderProducts(); }));
  document.querySelector('[data-show-all]').addEventListener('click', () => { showAll = !showAll; renderProducts(); });
  document.querySelectorAll('[data-cart]').forEach((button) => button.addEventListener('click', () => toggleCart(true)));
  document.querySelectorAll('[data-close-cart]').forEach((button) => button.addEventListener('click', () => toggleCart(false)));
  document.querySelector('[data-menu]').addEventListener('click', () => toggleMenu(true));
  document.querySelector('[data-close-menu]').addEventListener('click', () => toggleMenu(false));
  document.querySelectorAll('.mobile-nav a').forEach((link) => link.addEventListener('click', () => toggleMenu(false)));
  document.querySelector('[data-search]').addEventListener('click', () => { searchPanel.classList.add('open'); searchPanel.setAttribute('aria-hidden', 'false'); searchInput.focus(); });
  document.querySelector('[data-close-search]').addEventListener('click', () => { searchPanel.classList.remove('open'); searchPanel.setAttribute('aria-hidden', 'true'); });
  searchInput.addEventListener('input', (event) => { searchTerm = event.target.value.trim(); showAll = true; renderProducts(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { toggleCart(false); toggleMenu(false); searchPanel.classList.remove('open'); } });
  renderProducts();
  updateCart();
  iconRefresh();
});
