window.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.search-btn').forEach(function(el) {
        el.addEventListener('click', function() {
            document.querySelector('.header').classList.toggle('open');
        });
    });

    window.addEventListener('resize', function() {
        if (window.outerWidth >= 1920) {
            document.querySelector('.header').classList.remove('open');
        }
    });

}) 
