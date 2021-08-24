window.addEventListener('DOMContentLoaded', function() {
    let openListBtn = document.querySelector('.events-slider__more-btn');
    let cards = document.querySelectorAll('.events-slider__slide');

    checkHideCount('events-slider__slide--hidden', cards);

    openListBtn.addEventListener('click', function() {
        toggleClass(cards, 'events-slider__slide--hidden', getIndex());
        openListBtn.classList.toggle('open--events-list');
        changeHTML(openListBtn, 'open--events-list', 'Показать меньше', 'Все события');
    })

    function changeHTML(elem, triggerClass, value1, value2) {
        if (elem.classList.contains(triggerClass)) {
            openListBtn.innerHTML = value1;
        } else {
            openListBtn.innerHTML = value2;
        }

        window.addEventListener('resize', function () {
            openListBtn.classList.toggle(triggerClass);
            changeHTML(elem, triggerClass, value1, value2);
        })
    }

    function checkHideCount(hideClass, arr) {
        removeClass(hideClass, arr);
        toggleClass(arr, hideClass, getIndex());

        window.addEventListener('resize', function() {
            checkHideCount(hideClass, arr);
        })
    }

    function toggleClass(arr, toggleClass, from) {
        if (from == -1) {
            return 0;
        } else {
            while (from < arr.length) {
                arr[from].classList.toggle(toggleClass);
                from++;
            }
        }
    }

    function removeClass(removeClass, arr) {
        for (let elem of arr) {
            elem.classList.remove(removeClass);
        }
    }

    function getIndex() {
        if (window.innerWidth >= 768 && window.innerWidth < 896) {
            return 2;
        } else if (window.innerWidth >= 896) {
            return 3;
        } else {
            return -1;
        }
    }
})
