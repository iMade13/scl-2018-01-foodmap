//Inicializar Mapa 
function initMap() {
    let latLng = { lat: -26.635831, lng: -70.525532 };
    // The map, centered at latLng
    let map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: latLng });
    let marker = new google.maps.Marker({ position: latLng, map: map });


}

function cargarAPI() {
    fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico')
        .then(function(res) {

            return res.json();
        })
        .then(function mostrarEstablecimientos(data) {
            //let respuesta = '';
            data.forEach(function(datos) {
                console.log(datos)
            })
        })
}

console.log(cargarAPI().then(res => console.log(res)));



//Mostrar Establecimientos de la api
// function mostrarMapa(datos) {
//     // Recorrer establecimientos
//     datos.forEach(dato => {
//         console.log(dato);
//     })
// }
// console.log(mostrarMapa());

//     params: params,
//     header: {
//         'user-key': '6b35175611c53bff0c6fa3e2a3bc184b',
//         'Accept': 'application/json'
// 
// fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico')
//     .then(response => response.json())
//     .then(data => {
//         return obtenerDatos(data);
//     })

// const obtenerDatos = data => {
//     data.forEach(element => {
//         console.log(element)
//     })
// }