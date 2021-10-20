document.addEventListener('DOMContentLoaded', function() {
    var heroSlider = new Swiper('.hero__slider', {
        loop: true,
        touchRatio: 0,
        updateOnWindowResize: true,

        speed: 2000,
        autoplay: {
            delay: 4000,
        },
        effect: 'fade',
    });
});