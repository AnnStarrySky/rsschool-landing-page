(function () {
  const grid = document.querySelector('.catalog-grid');
  const tabs = document.querySelectorAll('.catalog-tab');
  const moreBtn = document.querySelector('.catalog-more-wrap');

  if (!grid || typeof products === 'undefined') return;

  function formatPrice(value) {
    return `$${value.toFixed(2)}`;
  }

  function showCategory(category) {
    const list = products.filter(p => p.category === category);
    
    grid.innerHTML = list.map(product => `
      <li class="catalog-card flex" data-id="${product.id}">
        <img src="${product.img}" alt="${product.name}" class="catalog-card-img">
        <div class="catalog-card-inner flex">
          <h3 class="catalog-card-title">${product.name}</h3>
          <p class="catalog-card-text">${product.description}</p>
          <h3 class="catalog-card-price">${formatPrice(product.basePrice)}</h3>
        </div>
      </li>
    `).join('');

    grid.classList.remove('catalog-grid-expanded');

    tabs.forEach(tab => {
      tab.classList.toggle('catalog-tab-active', tab.dataset.category === category);
    });

    if (moreBtn) {
      moreBtn.classList.toggle('has-hidden-items', list.length > 4);
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => showCategory(tab.dataset.category));
  });

  if (moreBtn) {
    moreBtn.addEventListener('click', () => {
      grid.classList.add('catalog-grid-expanded');
      moreBtn.classList.remove('has-hidden-items');
    });
  }

  showCategory('coffee');
})();