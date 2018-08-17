window.onload = () => {
    initMap();
}

let map;
let infowindow;
let service;



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
            service = new google.maps.places.PlacesService(map)
            service.nearbySearch({
                location: pos,
                radius: 1500,
                type: ['restaurant'],
            }, callback);

            function callback(results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        createMarker(results[i]);
                        console.log(results[i])
                    }
                    // let rest = results.type[0]
                    // let buscador = document.getElementById("buscar").value
                    // document.addEventListener('onkeyup', () => {
                    //     const filtro = rest.filter(filtro => filtro.type.indexOf(buscador) !== -1)
                    //     console.log(filtro)
                    // })
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
    });

    let contenido =
        `Nombre: ${place.name}</br>
        Direccion: ${place.vicinity}`;


    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(contenido);
        infowindow.open(map, this);
    });

    google.maps.event.addListener(marker, 'click', (function() {
        return function() {
            namePlace.innerHTML = (`Local: ${place.name}`);
            addressPlace.innerHTML = (`Dirección: ${place.vicinity}`);
            photoId.innerHTML = (`Rating: ${place.rating}`);
            $("#info-modal").modal('show')
            let photo = place.photos[0].getUrl({ "maxWidth": 150 });
            showPhotos.innerHTML = `<img src="${photo}" alt="" height="150">`

        }
    })(marker));
}