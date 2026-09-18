document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  const cart = document.querySelector('.cart-drawer');
  const overlay = document.querySelector('.overlay');
  const cartItems = document.querySelector('.cart-items');
  const cartCount = document.querySelector('.bag-count');
  const cartTotal = document.querySelector('.cart-total');
  const toast = document.querySelector('.toast');
  const items = [];

  const updateCart = () => {
    cartCount.textContent = items.length;
    cartTotal.textContent = `${items.reduce((sum, item) => sum + item.price, 0)} €`;
    if (!items.length) {
      cartItems.innerHTML = '<div class="empty-cart"><i data-lucide="shopping-bag"></i><p>Krepšelis kol kas tuščias.</p><span>Laikas atrasti savo naują favoritą.</span></div>';
    } else {
      cartItems.innerHTML = items.map((item, index) => `<div class="cart-line"><span>${item.name}</span><strong>${item.price} €</strong><button aria-label="Pašalinti ${item.name}" data-remove="${index}">×</button></div>`).join('');
      document.querySelectorAll('[data-remove]').forEach(button => button.addEventListener('click', () => { items.splice(Number(button.dataset.remove), 1); updateCart(); }));
    }
    lucide.createIcons();
  };

  const openCart = () => { cart.classList.add('open'); overlay.classList.add('open'); cart.setAttribute('aria-hidden', 'false'); };
  const closeCart = () => { cart.classList.remove('open'); overlay.classList.remove('open'); cart.setAttribute('aria-hidden', 'true'); };
  document.querySelectorAll('[data-cart]').forEach(button => button.addEventListener('click', openCart));
  document.querySelectorAll('[data-close-cart]').forEach(button => button.addEventListener('click', closeCart));

  document.querySelectorAll('[data-add]').forEach(button => button.addEventListener('click', () => {
    items.push({ name: button.dataset.add, price: Number(button.dataset.price) });
    updateCart();
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2200);
  }));

  document.querySelectorAll('.filter').forEach(filter => filter.addEventListener('click', () => {
    document.querySelector('.filter.active').classList.remove('active');
    filter.classList.add('active');
    const category = filter.dataset.filter;
    const visible = [...document.querySelectorAll('.product-card')].filter(card => category === 'all' || card.dataset.category === category);
    document.querySelectorAll('.product-card').forEach(card => card.classList.toggle('hidden', !visible.includes(card)));
    document.querySelector('#product-total').textContent = String(visible.length).padStart(2, '0');
  }));

  document.querySelector('[data-menu]').addEventListener('click', () => {
    document.querySelector('.desktop-nav').classList.toggle('mobile-open');
  });
});