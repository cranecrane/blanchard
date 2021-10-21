window.addEventListener('DOMContentLoaded', function() {

    const eventsSlider = document.querySelector('.events-slider__container');
    let mySwiper;

    function mobileSlider() {
        if (window.innerWidth < 768 && eventsSlider.dataset.mobile == 'false') {
            mySwiper = new Swiper (eventsSlider, {
            
                slidesPerView: 1,
                spaceBetween: 27,
                loop: false,
                slideClass: 'events-slider__slide',
                updateOnWindowResize: true,
                
                pagination: {
                el: '.events-slider__pagination',
                type: 'bullets',
                clickable: true,
                },
            });
            eventsSlider.dataset.mobile = 'true';
        }

        if (window.innerWidth >= 768) {
            eventsSlider.dataset.mobile = 'false';

            if (eventsSlider.classList.contains('swiper-container-initialized')) {
                mySwiper.destroy();
            }
        }
    }

    mobileSlider();

    window.addEventListener('resize', () => {
        mobileSlider();
    });
})
