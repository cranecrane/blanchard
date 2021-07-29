window.addEventListener('DOMContentLoaded', function () {
    let menu = document.querySelector('.menu');
    let burger = document.querySelector('.burger');
    let body = document.querySelector('body');
    let vh = window.innerHeight * 0.01;
    
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    document.querySelectorAll('.burger').forEach(function(el) {

        el.addEventListener('click', function() { 

            menu.classList.add('menu--open'),
            burger.classList.add('menu--open');
            body.classList.add('body-hidden');

            if (window.innerHeight < window.innerWidth) {
                menu.classList.add('menu--overflow');
            } 
        });
    });

    document.querySelectorAll('.menu__close-btn').forEach(function(el) {

        el.addEventListener('click', function() { 

            menu.classList.remove('menu--open'),
            burger.classList.remove('menu--open');
            body.classList.remove('body-hidden');
        });
    });

    window.addEventListener('resize', function() {
        let vh = window.innerHeight * 0.01;

        document.documentElement.style.setProperty('--vh', `${vh}px`);
        menu.classList.toggle('menu--overflow');

        if (window.innerHeight > window.innerWidth) {
            menu.classList.remove('menu--overflow');
        }

        if (window.innerWidth >= 1280) {
            menu.classList.remove('menu--open');
            burger.classList.remove('menu--open');
            body.classList.remove('body-hidden');
        }
    });
})
