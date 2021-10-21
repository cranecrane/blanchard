window.addEventListener('DOMContentLoaded', function() {
    let inputTel = document.querySelector("input[type='tel']");
    let im = new Inputmask("+7 (999) 999-99-99");

    im.mask(inputTel);

    let validateForms = function(target, maskedInput) {
        new JustValidate(target, {
            rules: {
                name: {
                    required: true,
                    minLength: 2,
                    maxLength: 30,
                },
                tel: {
                    required: true,
                    function: () => {
                        const phone = maskedInput.inputmask.unmaskedvalue()
                        return Number(phone) && phone.length === 10
                    }
                },
            },
            messages: {
                name: {
                    required: 'Недопустимый формат',
                    minLength: 'Имя должно содержать не меньше 2 символов',
                    maxLength: 'Имя должно содержать не больше 30 символов'
                },
                tel: {
                    required: 'Недопустимый формат',
                    function: 'В номере телефона должно быть 10 символов'
                }
            },
            colorWrong: '#d11616',

            //отправка формы:
            submitHandler: function(form) {
                let formData = new FormData(form);
                let xhr = new XMLHttpRequest();
    
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            let body = document.querySelector('body');
                            let modal = document.querySelector('.form-modal');
                            let close = document.querySelector('.form-modal__close-btn');
                            
                            modal.classList.add('modal--visible');
                            body.classList.add('body-hidden');
                            close.addEventListener('click', () => {
                                if (modal.classList.contains('modal--visible')) {
                                    modal.classList.remove('modal--visible');
                                    body.classList.remove('body-hidden');
                                console.log('form');

                                }
                            });
                            modal.addEventListener('click', (event) => {
                                let target = event.target;
                                console.log('form');
                                
                                if (target.children[0] === document.querySelector('.form-modal__container')) {
                                    modal.classList.remove('modal--visible');
                                    body.classList.remove('body-hidden');
                                    console.log('form');
                                }
                            });
                        }
                    }
                }
                xhr.open('POST', 'mail.php', true);
                xhr.send(formData);
    
                form.reset();
            }
        });
    }
    validateForms('.form', inputTel);
});
