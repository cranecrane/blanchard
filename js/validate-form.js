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
                            console.log('Отправлено');
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
