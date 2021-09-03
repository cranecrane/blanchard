window.addEventListener('DOMContentLoaded', function() {
    $( function() {
        $( "#accordion" ).accordion({
            active: 0,
            header: ".artists__header",
            collapsible: true,
            icons: false,
            heightStyle: "content"
        });
    } ); 
})
