window.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.burger').forEach(function(el) {
        el.addEventListener('click', function() {
            document.querySelector('.menu').classList.toggle('open'),
            document.querySelector('.burger').classList.toggle('open');
        });
    });

    window.addEventListener('resize', function() {
        if (window.outerWidth >= 1920) {
            document.querySelector('.menu').classList.remove('open'),
            document.querySelector('.burger').classList.remove('open');
        }
    });
})
