window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.art-direction-select').forEach(function(el) {
        const choices = new Choices(el, {
            searchEnabled: false,
        })
    })

    document.querySelectorAll('.choices__list--dropdown').forEach(function(el) {
        el.dataset.simplebar = '';
    }) 
})