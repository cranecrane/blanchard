(function() {
    document.addEventListener('DOMContentLoaded', () => {
        let activeBtnClass = 'artists__item-btn--active';
        let activeCardClass = 'artists-cards__item--active';

        document.querySelectorAll('.artists__item-btn').forEach(function(btn) {
            btn.addEventListener('click', function(event) {
                let path = event.currentTarget.dataset.path;
                let targetElem = document.querySelector(`[data-target="${path}"]`);
    
                document.querySelectorAll('.' + activeBtnClass).forEach(function(el) {
                    if (el.innerHTML != btn.innerHTML) {
                        el.classList.remove(activeBtnClass);
                    }
                });
                btn.classList.add(activeBtnClass);
    
                document.querySelectorAll('.' + activeCardClass).forEach(function(content) {
                    content.classList.remove(activeCardClass);
                });
                document.querySelectorAll(`[data-target="${path}"]`).forEach(function(content) {
                    content.classList.add(activeCardClass);
                });
    
                if (window.innerWidth < 768) {
                    let scroll = new SmoothScroll();
                    scroll.animateScroll(targetElem.offsetTop);
                    scroll.destroy();
                }
            });
        });
    })
})();