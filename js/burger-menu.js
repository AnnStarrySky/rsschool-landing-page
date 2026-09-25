(function () {
    let burgerBtn = document.querySelector('.burger-btn');
    let burgerMenu = document.querySelector('.burger-menu');
    let burgerLinks = document.querySelectorAll('.nav-list-burger .link');

    function openBurger(){
        burgerBtn.addEventListener('click', () => {
            if (burgerBtn.classList.contains('active')) {
                closeBurger();
            } else {
                burgerMenu.classList.add('burger-menu-open');
                document.body.style.overflow = 'hidden';
                burgerBtn.classList.add('active');
            }
        });
    }

    function closeBurger(){
        document.body.style.overflow = '';
        burgerMenu.classList.remove('burger-menu-open');
        burgerBtn.classList.remove('active');
    }

    burgerLinks.forEach(link =>{
        link.addEventListener('click', (event) => {
            closeBurger();
        })
    })

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && burgerBtn.classList.contains('active')) {
            closeBurger();
        }
    });

    openBurger();
})();    
