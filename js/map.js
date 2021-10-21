ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.75846806898367,37.60108849999989],
        zoom: 14,
        controls: []
        }, {
            suppressMapOpenBlock: true
        }
    );

    var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'icons/placemark.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-3, -42]
    });

    myMap.geoObjects.add(myPlacemark);
}
