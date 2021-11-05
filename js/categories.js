(() => {
    window.addEventListener('DOMContentLoaded', function() {
        const btn = document.querySelector('.categories__btn');
    
        if (window.innerWidth < 768) {
            btn.removeAttribute('disabled');

            btn.addEventListener('click', function() {
                btn.classList.toggle('open');
            })
        } else {
            btn.setAttribute('disabled', '');
        }  
    })
})();
