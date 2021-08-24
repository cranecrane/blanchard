window.addEventListener('DOMContentLoaded', function() {

    const gallerySlider = new Swiper('.gallery-slider__container', {
        
        direction: 'horizontal',
        loop: true,
        slidesPerColumnFill: 'row',
        updateOnWindowResize: true,
        
        pagination: {
          el: '.gallery-slider__pagination',
          type: 'fraction',
        },
      
        navigation: {
          nextEl: '.gallery-slider__nav-btn-next',
          prevEl: '.gallery-slider__nav-btn-prev',
        },
        
        breakpoints: {
          768: {
            loop: false,
            slidesPerView: 2,
            slidesPerGroup: 2,
            slidesPerColumn: 2,
            spaceBetween: 34,
          },
          1440: {
            loop: false,
            slidesPerView: 3,
            slidesPerGroup: 3,
            slidesPerColumn: 2,
            spaceBetween: 50,
            speed: 600,
          },
        }
    });
})
