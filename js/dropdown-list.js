window.addEventListener('DOMContentLoaded', function () {
    let openClass = 'open';
    let dropdownBtn = document.querySelectorAll('.dropdown-list__btn');
    let dropdownContent = document.querySelectorAll('.dropdown-list__content');
    let pageContent = document.querySelector('main');

    dropdownBtn.forEach(function(el) {
        el.addEventListener('click', function() {
            for(let elem of dropdownContent) {
                if ((elem.classList.contains(openClass)) && !(el.nextElementSibling.classList.contains(openClass))) {
                    elem.classList.remove(openClass);
                }
            }
            el.nextElementSibling.classList.toggle(openClass);
            el.classList.toggle(openClass);
        });

        window.addEventListener('resize', function() {
            if (window.outerWidth < 1920) {
                el.nextElementSibling.classList.remove('open');
                el.classList.remove('open');
            }
        });
    });

    pageContent.addEventListener('click', function() {
        dropdownContent.forEach(function(el) {
            el.classList.remove(openClass);
        });

        dropdownBtn.forEach(function(el) {
            el.classList.remove(openClass);
        });
    });
})
