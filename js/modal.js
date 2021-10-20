function showModal(trigger, modalBlock, closeBtn) {
    document.addEventListener('DOMContentLoaded', function() {
        let body = document.querySelector('body');
        let btn = document.querySelectorAll(trigger);
        let modal = document.querySelector(modalBlock);
        let close = document.querySelectorAll(closeBtn);
        
        btn.forEach((elem) => {
            elem.addEventListener('click', (e) => {
                let path = e.currentTarget.getAttribute('data-path');
                let target = document.querySelector(`[data-target=${path}]`);

                modal.classList.add('modal--visible');
                target.classList.add('modal__item--visible');
                body.classList.add('body-hidden');

                close.forEach((elem) => {
                    elem.addEventListener('click', () => {
                        if (modal.classList.contains('modal--visible')) {
                            modal.classList.remove('modal--visible');
                            target.classList.remove('modal__item--visible');
                            body.classList.remove('body-hidden');
                        }
                    });
                });
            });
        });
    });
}
showModal('.gallery-modal-btn', '.gallery-modals', '.gallery-modals__close-btn');


    

    // document.addEventListener('DOMContentLoaded', function() {
    //     let body = document.querySelector('body');
    //     let btn = document.querySelectorAll('.modal-btn');
    //     let modal = document.querySelector('.modal');
    //     let closeBtn = document.querySelectorAll('.modal__close-btn');
        
    //     btn.forEach((elem) => {
    //         elem.addEventListener('click', (e) => {
    //             let path = e.currentTarget.getAttribute('data-path');
    //             let target = document.querySelector(`[data-target=${path}]`);

    //             modal.classList.add('modal--visible');
    //             target.classList.add('modal__item--visible');
    //             body.classList.add('body-hidden');

    //             closeBtn.forEach((elem) => {
    //                 elem.addEventListener('click', () => {
    //                     if (modal.classList.contains('modal--visible')) {
    //                         modal.classList.remove('modal--visible');
    //                         target.classList.remove('modal__item--visible');
    //                         body.classList.remove('body-hidden');
    //                     }
    //                 });
    //             });
    //         })
    //     });
    // });
