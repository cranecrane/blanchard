(() => {
    function getIndex() {
        if (window.innerWidth >= 768 && window.innerWidth < 896) {
            return 2;
        } else if (window.innerWidth >= 896) {
            return 3;
        } else {
            return -1;
        }
    }

    window.addEventListener('DOMContentLoaded', function() {
        const openListBtn = document.querySelector('.events-slider__more-btn');
        const container = document.querySelector('.events__list');
    
        function checkHidden() {
            container.children.forEach(e => {
                e.classList.remove('events-slider__slide--hidden');
            });
            if (getIndex() !== -1) {
                for (let i = getIndex(); i < container.children.length; i++) {
                    container.children[i].classList.add('events-slider__slide--hidden');
                }
            }
        }
        checkHidden();
        window.addEventListener('resize', () => {
            checkHidden();
            container.classList.remove('open');
            openListBtn.textContent = 'Все события';
        });
        
        openListBtn.addEventListener('click', function () {

            if (container.classList.contains('open')) {
                container.classList.remove('open');
                for (let i = getIndex(); i < container.children.length; i++) {
                    container.children[i].classList.add('events-slider__slide--hidden');
                }
                this.textContent = 'Все события';

                let scroll = new SmoothScroll();
                scroll.animateScroll(container.closest('section').offsetTop - 50);
                scroll.destroy();
            } else {
                container.classList.add('open');
                container.children.forEach( card => {
                    card.classList.remove('events-slider__slide--hidden');
                });
                this.textContent = 'Показать меньше';
            }
        });    
    })
})();
