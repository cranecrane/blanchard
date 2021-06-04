window.addEventListener('DOMContentLoaded', function () {
    let menu = document.querySelector('.menu');
    let burger = document.querySelector('.burger');

    document.querySelectorAll('.burger').forEach(function(el) {

        el.addEventListener('click', function() { 
            if (burger.getAttribute('aria-label') == 'Открыть меню') {
                burger.setAttribute('aria-label', 'Закрыть меню');
            } else {
                burger.setAttribute('aria-label', 'Открыть меню');
            }

            menu.classList.toggle('open'),
            burger.classList.toggle('open');
        });
    });

    window.addEventListener('resize', function() {
        if (window.outerWidth >= 1920) {
            menu.classList.remove('open'),
            burger.classList.remove('open');
            burger.setAttribute('aria-label', 'Открыть меню');
        }
    });
})
