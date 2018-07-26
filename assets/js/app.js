window.onload = function() {
    initMap();
}

let map;
let infoWindow;

function initMap() {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            let pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            map = new google.maps.Map(document.getElementById('map'), {
                center: pos,
                zoom: 6
            });

            infoWindow = new google.maps.InfoWindow;


        }
    )
}