window.addEventListener('DOMContentLoaded', function() {
    tippy(document.querySelectorAll('.tooltip'), {
        content(reference) {
          const id = reference.getAttribute('data-template');
          const template = document.getElementById(id);
          return template.innerHTML;
        },
        allowHTML: true,
        theme: 'amethyst',
    });
})
