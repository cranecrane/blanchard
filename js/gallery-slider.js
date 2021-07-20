window.addEventListener('DOMContentLoaded', function() {

    const gallerySlider = new Swiper('.swiper-container', {
        
        direction: 'horizontal',
        loop: true,
        slidesPerColumnFill: 'row',
        updateOnWindowResize: true,
        speed: 400,
        
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        breakpoints: {
          768: {
            loop: false,
            slidesPerView: 2,
            slidesPerGroup: 2,
            slidesPerColumn: 2,
            spaceBetween: 34,
            speed: 600,
          },
          1440: {
            loop: false,
            slidesPerView: 3,
            slidesPerGroup: 3,
            slidesPerColumn: 2,
            spaceBetween: 50,
            speed: 1000,
          },
        }
    });
})
