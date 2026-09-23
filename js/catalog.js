(function () {
    const grid = document.querySelector('.catalog-grid');
    const tabs = document.querySelectorAll('.catalog-tab');
    const moreBtn = document.querySelector('.catalog-more-wrap');

    const modal = document.querySelector('.modal');
    const overlay = modal.querySelector('.modal-overlay');
    const closeBtn = modal.querySelector('.modal-btn');

    function formatPrice(price) {
        return `$${price.toFixed(2)}`;
    }

    function createCard(product) {
        return `
            <li class="catalog-card flex" data-id="${product.id}">
                <img src="${product.img}" alt="${product.name}" class="catalog-card-img">

                <div class="catalog-card-inner flex">
                    <h3 class="catalog-card-title">${product.name}</h3>
                    <p class="catalog-card-text">${product.description}</p>
                    <h3 class="catalog-card-price">${formatPrice(product.basePrice)}</h3>
                </div>
            </li>
        `;
    }

    function renderProducts(category) {
        const categoryProducts = products.filter(product => product.category === category);

        grid.innerHTML = categoryProducts.map(createCard).join('');
        grid.classList.remove('catalog-grid-expanded');

        tabs.forEach(tab => {
            tab.classList.toggle('catalog-tab-active', tab.dataset.category === category);
        });

        moreBtn.classList.toggle('has-hidden-items', categoryProducts.length > 4);
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            renderProducts(tab.dataset.category);
        });
    });

    moreBtn.addEventListener('click', () => {
        grid.classList.add('catalog-grid-expanded');
        moreBtn.classList.remove('has-hidden-items');
    });

    function openModal(product) {
        const modalImage = modal.querySelector('.modal-img img');
        const modalTitle = modal.querySelector('.modal-title');
        const modalDescription = modal.querySelector('.modal-descr p');
        const modalPrice = modal.querySelector('.modal-total h3:last-child');
        const sizesContainer = modal.querySelector('.modal-sizes');
        const additivesContainer = modal.querySelector('.modal-additives');

        modalImage.src = product.img;
        modalImage.alt = product.name;
        modalTitle.textContent = product.name;
        modalDescription.textContent = product.description;
        modalPrice.textContent = formatPrice(product.basePrice);

        sizesContainer.innerHTML = product.sizes.map(size => `
            <div class="flex modal-option-item" data-size-id="${size.id}">
                <div class="flex modal-option-round">
                    <span>${size.label}</span>
                </div>
                <span class="modal-option-descr">${size.volume}</span>
            </div>
        `).join('');

        additivesContainer.innerHTML = product.additives.map(additive => `
            <div class="flex modal-option-item" data-additive-id="${additive.id}">
                <div class="flex modal-option-round">
                    <span>1</span>
                </div>
                <span class="modal-option-descr">${additive.label}</span>
            </div>
        `).join('');

        modal.classList.add('modal-open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('modal-open');
        document.body.style.overflow = '';
    }

    grid.addEventListener('click', event => {
        const card = event.target.closest('.catalog-card');
        const product = products.find(product => String(product.id) === card.dataset.id);
        openModal(product);
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && modal.classList.contains('modal-open')) {
            closeModal();
        }
    });

    renderProducts('coffee');

})();





