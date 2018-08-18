window.onload = () => {
    initMap();
}

let map;
let infowindow;
let service;
let marker;

window.initMap = function() {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            let pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            map = new google.maps.Map(document.getElementById('map'), {
                center: pos,
                zoom: 15
            });
            infowindow = new google.maps.InfoWindow();
            service = new google.maps.places.PlacesService(map)
            service.nearbySearch({
                location: pos,
                radius: 1500,
                type: ['restaurant'],
            }, callback);
        })
}