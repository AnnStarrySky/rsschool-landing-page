(function () {
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slider-slide');
    const btnPrev = document.querySelector('.slider-btn-prev');
    const btnNext = document.querySelector('.slider-btn-next');
    const dots = document.querySelectorAll('.slider-dot');

    let currentSlide = 1;
    let isTransitioning = false;

    const firstSlide = slides[0].cloneNode(true);
    const lastSlide = slides[slides.length - 1].cloneNode(true);

    track.appendChild(firstSlide);
    track.insertBefore(lastSlide, track.firstElementChild);

    function updateDots() {
        dots.forEach(dot => dot.classList.remove('slider-dot-active'));
        let dotIndex = currentSlide - 1;

        if (currentSlide === 0) {
            dotIndex = slides.length - 1;
        } else if (currentSlide === slides.length + 1) {
            dotIndex = 0;
        }

        dots[dotIndex].classList.add('slider-dot-active');
    }

    function showSlide() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
    }

    btnNext.addEventListener('click', () => {
        if (isTransitioning) return;
        
        isTransitioning = true;
        currentSlide++;
        showSlide();

        if (currentSlide === slides.length + 1) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentSlide = 1;
                showSlide();

                setTimeout(() => {
                    track.style.transition = 'transform 0.5s ease';
                    isTransitioning = false;
                }, 50);
            }, 500);
        } else {
            setTimeout(() => { isTransitioning = false; }, 500);
        }
    });

    btnPrev.addEventListener('click', () => {
        if (isTransitioning) return;
        
        isTransitioning = true;
        currentSlide--;
        showSlide();

        if (currentSlide === 0) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentSlide = slides.length;
                showSlide();

                setTimeout(() => {
                    track.style.transition = 'transform 0.5s ease';
                    isTransitioning = false;
                }, 50);
            }, 500);
        } else {
            setTimeout(() => { isTransitioning = false; }, 500);
        }
    });

    showSlide();
})();
