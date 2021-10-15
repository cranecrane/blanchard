(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var scroll = new SmoothScroll('a[href*="#"]', {
            speed: 500,
            easing: 'easeInOutCubic'
        });
    });
})();
