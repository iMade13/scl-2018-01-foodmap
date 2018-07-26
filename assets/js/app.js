window.onload = () => {
    initMap();
}

let map;
let infowindow;


function initMap() {
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
            let service = new google.maps.places.PlacesService(map)
            service.nearbySearch({
                location: pos,
                radius: 2000,
                type: ['restaurant']
            }, callback);

            function callback(results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        createMarker(results[i]);
                        //console.log(results[i])

                    }
                }
            }
        },
    )
}

function createMarker(place) {
    let marker = new google.maps.Marker({
        map: map,
        name: place.name,
        position: place.geometry.location,
        address: place.vicinity,
        photo: place.icon
    });

    let contenido =
        `Nombre: ${place.name}</br>
        Direccion: ${place.vicinity}`;

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(contenido);
        infowindow.open(map, this);
    });
}