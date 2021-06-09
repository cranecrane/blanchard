window.addEventListener('DOMContentLoaded', function() {

    const element = document.querySelector('.select-filter');
    const choices = new Choices(element, {
        searchEnabled: false,
        shouldSort: false,
    });
    
    document.querySelectorAll('.select-filter').forEach(function(el) {
        let ariaLabel = el.getAttribute('aria-label');
        el.closest('.choices').setAttribute('aria-label', ariaLabel);
    });
})
