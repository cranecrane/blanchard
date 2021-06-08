window.addEventListener('DOMContentLoaded', function() {

    const gallerySlider = new Swiper('.swiper-container', {
        
        direction: 'horizontal',
        loop: true,
        slidesPerColumnFill: 'row',
        updateOnWindowResize: true,
        
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
          },
          1920: {
            loop: false,
            slidesPerView: 3,
            slidesPerGroup: 3,
            slidesPerColumn: 2,
            spaceBetween: 50,
          },
        }
    });
      
    window.onresize = function() {
        location.reload();
    }
})
