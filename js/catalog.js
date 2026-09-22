(function () {
  const grid = document.querySelector('.catalog-grid');
  const tabs = document.querySelectorAll('.catalog-tab');

  if (!grid || tabs.length === 0 || typeof products === 'undefined') return;

  function formatPrice(value) {
    return `$${value.toFixed(2)}`;
  }

  function renderCards(data) {
    grid.innerHTML = data.map(product => `
      <li class="catalog-card" data-id="${product.id}">
        <img src="${product.img}" alt="${product.name}" class="catalog-card-img">
        <div class="catalog-card-inner">
          <h3 class="catalog-card-title">${product.name}</h3>
          <p class="catalog-card-text">${product.description}</p>
          <p class="catalog-card-price">${formatPrice(product.basePrice)}</p>
        </div>
      </li>
    `).join('');
  }

  function showCategory(category) {
    const list = products.filter(p => p.category === category);
    renderCards(list);

    tabs.forEach(tab => {
      tab.classList.toggle('catalog-tab-active', tab.dataset.category === category);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      showCategory(tab.dataset.category);
    });
  });

  showCategory('coffee');
})();