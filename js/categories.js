window.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('.categories__btn');

    function  filterCategories() {
        let screenWidth = window.innerWidth;
        
        if (window.innerWidth < 768) {
            btn.removeAttribute('disabled');

            btn.addEventListener('click', function() {
                btn.classList.toggle('open');
            })
        } else {
            btn.setAttribute('disabled', '');
        }

        window.addEventListener('resize', function() {
            let resizedWidth = window.innerWidth;

            if (screenWidth != resizedWidth) {
                filterCategories();
            }
        });
    }
    filterCategories();    
})
