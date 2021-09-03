window.addEventListener('DOMContentLoaded', function() {
    const partnersSlider = new Swiper('.partners-slider__container', {
        slideClass: 'partners-slider__slide',
        direction: 'horizontal',
        loop: true,
        updateOnWindowResize: true,
      
        navigation: {
          nextEl: '.partners-slider__nav-btn-next',
          prevEl: '.partners-slider__nav-btn-prev',
        },
        
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 34,
          },
          896: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }
    });
})
