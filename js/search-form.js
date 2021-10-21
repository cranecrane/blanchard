window.addEventListener('DOMContentLoaded', function () {
    let header = document.querySelector('.header');
    let btn = document.querySelector('.search-btn');
    let pageContent = document.querySelector('main');

    document.querySelectorAll('.search-btn').forEach(function(el) {
        el.addEventListener('click', function() {
            if (btn.getAttribute('aria-label') == 'Открыть строку поиска') {
                btn.setAttribute('aria-label', 'Закрыть строку поиска');
            } else {
                btn.setAttribute('aria-label', 'Открыть строку поиска');
            }
            header.classList.toggle('search-form--open');
        });
    });

    window.addEventListener('click', (event) => {
        let target = event.target;

        if (!target.closest('.search-form') && !target.closest('.search-btn')) {
            if (window.outerWidth < 1280 && header.classList.contains('search-form--open')) {
                if (btn.getAttribute('aria-label') == 'Открыть строку поиска') {
                    btn.setAttribute('aria-label', 'Закрыть строку поиска');
                } else {
                    btn.setAttribute('aria-label', 'Открыть строку поиска');
                }
                header.classList.toggle('search-form--open');
            }
        }
    })
    window.addEventListener('resize', function() {
        if (window.outerWidth >= 1920) {
            header.classList.remove('search-form--open');
            btn.setAttribute('aria-label', 'Открыть строку поиска');
        }
    });
}) 
