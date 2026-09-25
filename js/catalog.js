(function () {
    const grid = document.querySelector('.catalog-grid');
    const tabs = document.querySelectorAll('.catalog-tab');
    const moreBtn = document.querySelector('.catalog-more-wrap');

    const modal = document.querySelector('.modal');
    const overlay = modal.querySelector('.modal-overlay');
    const closeBtn = modal.querySelector('.modal-btn');

    let currentProduct = null;
    let selectedSize = null;
    const selectedAdditives = new Set();

    function formatPrice(price) {
        return `$${price.toFixed(2)}`;
    }

    function updateModalPrice() {
        if (!currentProduct) return;
        
        let totalPrice = currentProduct.basePrice;
        
        if (selectedSize) {
            totalPrice += selectedSize.price;
        }
        
        selectedAdditives.forEach(additiveId => {
            const additive = currentProduct.additives.find(a => String(a.id) === String(additiveId));
            if (additive) {
                totalPrice += additive.price;
            }
        });
        
        const modalPrice = modal.querySelector('.modal-total h3:last-child');
        modalPrice.textContent = formatPrice(totalPrice);
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

        if (moreBtn) {
            moreBtn.classList.toggle('has-hidden-items', categoryProducts.length > 4);
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            renderProducts(tab.dataset.category);
        });
    });

    if (moreBtn) {
        moreBtn.addEventListener('click', () => {
            grid.classList.add('catalog-grid-expanded');
            moreBtn.classList.remove('has-hidden-items');
        });
    }

    function openModal(product) {
        currentProduct = product; 
        selectedAdditives.clear(); 
        selectedSize = product.sizes[0]; 

        const modalImage = modal.querySelector('.modal-img img');
        const modalTitle = modal.querySelector('.modal-title');
        const modalDescription = modal.querySelector('.modal-descr p');
        const sizesContainer = modal.querySelector('.modal-sizes');
        const additivesContainer = modal.querySelector('.modal-additives');

        modalImage.src = product.img;
        modalImage.alt = product.name;
        modalTitle.textContent = product.name;
        modalDescription.textContent = product.description;

        sizesContainer.innerHTML = product.sizes.map((size, index) => `
            <div class="flex modal-option-item ${index === 0 ? 'modal-option-active' : ''}" data-size-id="${size.id}">
                <div class="flex modal-option-round">
                    <span>${size.label}</span>
                </div>
                <span class="modal-option-descr">${size.volume}</span>
            </div>
        `).join('');

        additivesContainer.innerHTML = product.additives.map((additive, index) => `
            <div class="flex modal-option-item" data-additive-id="${additive.id}">
                <div class="flex modal-option-round">
                    <span>${index + 1}</span>
                </div>
                <span class="modal-option-descr">${additive.label}</span>
            </div>
        `).join('');

        updateModalPrice(); 
        modal.classList.add('modal-open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('modal-open');
        document.body.style.overflow = '';
        currentProduct = null;
        selectedSize = null;
        selectedAdditives.clear();
    }

    grid.addEventListener('click', event => {
        const card = event.target.closest('.catalog-card');
        if (!card) return;
        
        const product = products.find(product => String(product.id) === card.dataset.id);
        if (product) {
            openModal(product);
        }
    });

    modal.addEventListener('click', event => {
        const optionItem = event.target.closest('.modal-option-item');
        if (!optionItem) return;
        
        if (optionItem.dataset.sizeId) {
            const sizeId = optionItem.dataset.sizeId;
            selectedSize = currentProduct.sizes.find(s => String(s.id) === sizeId);
            
            modal.querySelectorAll('.modal-sizes .modal-option-item').forEach(el => {
                el.classList.remove('modal-option-active');
            });
            optionItem.classList.add('modal-option-active');
        }

        if (optionItem.dataset.additiveId) {
            const additiveId = optionItem.dataset.additiveId;
            
            if (selectedAdditives.has(additiveId)) {
                selectedAdditives.delete(additiveId);
                optionItem.classList.remove('modal-option-active');
            } else {
                selectedAdditives.add(additiveId);
                optionItem.classList.add('modal-option-active');
            }
        }

        updateModalPrice();
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





