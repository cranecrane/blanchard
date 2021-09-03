window.addEventListener('DOMContentLoaded', function() {

    const booksSlider = document.querySelector('.books-slider__container');
    let mySwiper;

    function tabletSlider() {
        if (window.innerWidth >= 768 && booksSlider.dataset.tablet == 'false') {
            mySwiper = new Swiper (booksSlider, {
            
                slidesPerView: 2,
                spaceBetween: 34,
                slidesPerGroup: 2,
                loop: false,
                slideClass: 'books-slider__slide',
                updateOnWindowResize: true,
                
                navigation: {
                    nextEl: '.books-slider__nav-btn-next',
                    prevEl: '.books-slider__nav-btn-prev',
                },

                pagination: {
                el: '.books-slider__pagination',
                type: 'fraction',
                },

                breakpoints: {
                    896: {
                      spaceBetween: 50,
                    },
                    1280: {
                      slidesPerView: 3,
                      slidesPerGroup: 3,
                      spaceBetween: 50,
                    },
                  }
            });
            booksSlider.dataset.tablet = 'true';
        }

        if (window.innerWidth < 768) {
            booksSlider.dataset.tablet = 'false';

            if (booksSlider.classList.contains('swiper-container-initialized')) {
                mySwiper.destroy();
            }
        }
    }

    tabletSlider();

    window.addEventListener('resize', () => {
        tabletSlider();
    });
})
