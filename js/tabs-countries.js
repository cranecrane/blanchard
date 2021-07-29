document.addEventListener('DOMContentLoaded', function() {
    function tabs(tabBtn, tabActiveClass, contentActiveClass) {
        document.querySelectorAll(tabBtn).forEach(function(btn) {
            btn.addEventListener('click', function(event) {
                const path = event.currentTarget.dataset.path;
    
                document.querySelectorAll('.' + tabActiveClass).forEach(function(el) {
                    if (el.innerHTML != btn.innerHTML || el.dataset.path != path) {
                        el.classList.remove(tabActiveClass);
                        console.log(el);
                    }
                })
                btn.classList.add(tabActiveClass);
    
                document.querySelectorAll('.' + contentActiveClass).forEach(function(content) {
                    content.classList.remove(contentActiveClass);
                })
    
                document.querySelectorAll(`[data-target="${path}"]`).forEach(function(content) {
                    content.classList.add(contentActiveClass);
                })
            })
        })
    }

    tabs('.tabs-countries__btn', 'tabs-countries__btn--active', 'artists__nav-item--active');
    tabs('.artists__item-btn', 'artists__item-btn--active', 'artists-cards__item--active');
})

