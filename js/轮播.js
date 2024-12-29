 document.addEventListener('DOMContentLoaded', function () {
            const carousel = document.querySelector('.carousel');
            const items = carousel.querySelectorAll('.carousel-item');
            const dots = carousel.querySelectorAll('.carousel-dot');
            const prev = carousel.querySelector('.carousel-prev');
            const next = carousel.querySelector('.carousel-next');
            let currentSlide = 0;
            let slideInterval;

            function showSlide(index) {
                items.forEach(item => item.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));

                currentSlide = index;
                if (currentSlide >= items.length) currentSlide = 0;
                if (currentSlide < 0) currentSlide = items.length - 1;

                items[currentSlide].classList.add('active');
                dots[currentSlide].classList.add('active');
            }

            function nextSlide() {
                showSlide(currentSlide + 1);
            }

            function prevSlide() {
                showSlide(currentSlide - 1);
            }

            function startSlideShow() {
                slideInterval = setInterval(nextSlide, 5000);
            }

            function stopSlideShow() {
                clearInterval(slideInterval);
            }

            prev.addEventListener('click', () => {
                prevSlide();
                stopSlideShow();
                startSlideShow();
            });

            next.addEventListener('click', () => {
                nextSlide();
                stopSlideShow();
                startSlideShow();
            });

            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showSlide(index);
                    stopSlideShow();
                    startSlideShow();
                });
            });

            carousel.addEventListener('mouseenter', stopSlideShow);
            carousel.addEventListener('mouseleave', startSlideShow);

            startSlideShow();
        });