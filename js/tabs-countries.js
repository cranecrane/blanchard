document.addEventListener('DOMContentLoaded', function() {
    let tabs = document.querySelectorAll('.tabs-countries__btn');
    let activeTabClass = 'tabs-countries__btn--active';
    let activeListClass = 'artists__nav-item--active';
    let activeBtnClass = 'artists__item-btn--active';
    let activeCardClass = 'artists-cards__item--active';


    tabs.forEach(function(btn) {
        btn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;

            document.querySelectorAll('.' + activeTabClass).forEach(function(el) {
                if (el.dataset.path != path) {
                    el.classList.remove(activeTabClass);
                }
            });
            btn.classList.add(activeTabClass);

            document.querySelectorAll('.' + activeListClass).forEach(function(content) {
                content.classList.remove(activeListClass);
            });
            document.querySelectorAll('.' + activeBtnClass).forEach(function(btn) {
                btn.classList.remove(activeBtnClass);
            });
            document.querySelectorAll('.' + activeCardClass).forEach(function(card) {
                card.classList.remove(activeCardClass);
            });

            let content = document.querySelectorAll(`[data-target="${path}"]`);
            content.forEach(function(list) {
                list.classList.add(activeListClass);
                
                if (content[0] == list) {
                    let activeBtn = list.querySelector('.artists__item-btn');

                    if (activeBtn == null) {
                        document.querySelector('.empty-block--column').classList.add(activeCardClass);
                    } else {
                        let artistPath = activeBtn.dataset.path;
                        
                        activeBtn.classList.add(activeBtnClass);
                        document.querySelector(`[data-target="${artistPath}"]`).classList.add(activeCardClass);
                    }
                } 
            });
        })
    })
})
