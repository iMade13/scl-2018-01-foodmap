async function obtenerDatos() {
    const datos = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico');
    //     params: params,
    //     header: {
    //         'user-key': '6b35175611c53bff0c6fa3e2a3bc184b',
    //         'Accept': 'application/json'
    //     }
    const respuestaJSON = await datos.json();
    return {
        respuestaJSON
    }
}
// console.log(obtenerDatos().then(rest => console.log(rest)));

// Mostrar Establecimientos de la api
function mostrarEstablecimientos() {
    obtenerDatos()
        .then(datos => {
            const resultado = datos;
            // Muestra los pines en el Mapa
            //mostrarMapa(resultado);
        })
}

//Inicializar Mapa 
function initMap() {
    let latLng = { lat: -26.635831, lng: -70.525532 };
    // The map, centered at latLng
    let map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: latLng });
    let marker = new google.maps.Marker({ position: latLng, map: map });

}