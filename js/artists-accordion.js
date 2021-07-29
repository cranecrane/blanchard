window.addEventListener('DOMContentLoaded', function(){
    
    $( function() {
        $( "#accordion" ).accordion({
            active: 0,
            header: ".artists__header",
            collapsible: true,
            icons: false,
            heightStyle: "content"
        });
    } );

    function calcHeight() {
        let container = document.querySelectorAll('.artists__list');

        if (window.innerWidth < 768) {
            container.forEach(function(el) {
                el.style.height = '';
            })
        } else {
            let blockHeight = 96;;
            let blockCapacity;

            if ((window.innerWidth >= 768 && window.innerWidth < 896) || (window.innerWidth >= 1600)) {
                blockCapacity = 9;
                
            } else if (window.innerWidth >= 896 && window.innerWidth < 1599) {
                blockCapacity = 6;
            }

            container.forEach(function(el) {
                let currentCount = el.childElementCount;
                let factor = currentCount / blockCapacity;
    
                el.style.height = Math.ceil(factor) * blockHeight + 'px';
            })

            window.addEventListener('resize', function() {
                calcHeight();
            });
        }
    }

    calcHeight();  
})
