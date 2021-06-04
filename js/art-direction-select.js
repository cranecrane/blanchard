window.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.art-direction-select').forEach(function(el) {
        const choices = new Choices(el, {
            searchEnabled: false,
            shouldSort: false,
        });
    });

    document.querySelectorAll('.choices__list--dropdown').forEach(function(el) {
        el.dataset.simplebar = '';
    });
    
    document.querySelectorAll('.art-direction-select').forEach(function(el) {
        let ariaLabel = el.getAttribute('aria-label');
        el.closest('.choices').setAttribute('aria-label', ariaLabel);
    });
})