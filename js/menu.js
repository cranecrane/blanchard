window.addEventListener('DOMContentLoaded', function () {
    let menu = document.querySelector('.menu');
    let burger = document.querySelector('.menu__open-close-btn');
    let body = document.querySelector('body');
    let vh = window.innerHeight * 0.01;
    
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    document.querySelectorAll('.menu__open-close-btn').forEach(function(el) {

        el.addEventListener('click', function() { 
            if (burger.getAttribute('aria-label') == 'Открыть меню') {
                burger.setAttribute('aria-label', 'Закрыть меню');
            } else {
                burger.setAttribute('aria-label', 'Открыть меню');
            }

            menu.classList.toggle('menu--open'),
            burger.classList.toggle('menu--open');
            body.classList.toggle('body-hidden');

            if (window.innerHeight < window.innerWidth) {
                menu.classList.add('menu--overflow');
            }
        });
    });

    window.addEventListener('resize', function() {
        let vh = window.innerHeight * 0.01;

        document.documentElement.style.setProperty('--vh', `${vh}px`);
        menu.classList.toggle('menu--overflow');

        if (window.innerHeight > window.innerWidth) {
            menu.classList.remove('menu--overflow');
        }

        if (window.outerWidth >= 1920) {
            menu.classList.remove('menu--open');
            burger.classList.remove('menu--open');
            burger.setAttribute('aria-label', 'Открыть меню');
            body.classList.remove('body-hidden');
        }
    });
})
