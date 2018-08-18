let contenido;

window.createMarker = function(place) {
    marker = new google.maps.Marker({
            map: map,
            name: place.name,
            position: place.geometry.location,
            address: place.vicinity,
        })
        //(marker)

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(contenido);
        infowindow.open(map, this);

        contenido =
            `Nombre: ${place.name}</br>
  Direccion: ${place.vicinity}
  `;
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