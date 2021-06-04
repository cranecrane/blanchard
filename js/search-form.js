window.addEventListener('DOMContentLoaded', function () {
    let header = document.querySelector('.header');
    let btn = document.querySelector('.search-btn');

    document.querySelectorAll('.search-btn').forEach(function(el) {
        el.addEventListener('click', function() {
            if (btn.getAttribute('aria-label') == 'Открыть строку поиска') {
                btn.setAttribute('aria-label', 'Закрыть строку поиска');
            } else {
                btn.setAttribute('aria-label', 'Открыть строку поиска');
            }

            header.classList.toggle('open');
        });
    });

    window.addEventListener('resize', function() {
        if (window.outerWidth >= 1920) {
            header.classList.remove('open');
            btn.setAttribute('aria-label', 'Открыть строку поиска');
        }
    });
}) 
