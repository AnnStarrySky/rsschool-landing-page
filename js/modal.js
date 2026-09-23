(function () {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.modal-overlay');
  const closeBtn = document.querySelector('.modal-btn');
  const grid = document.querySelector('.catalog-grid');

  function openModal() {
    modal.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('modal-open');
    document.body.style.overflow = '';
  }

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.catalog-card');
    if (!card) return; 
    openModal();
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('modal-open')) {
      closeModal();
    }
  });
})();