//Mostrar restaurants de la API
// document.addEventListener('cargarContenido', () => {
//     function showRestaurants() {
//         obtenerDatos()
//             .then(datos => {
//                 console.log(datos);
//             })
//     }
// })

// const buscador = document.querySelector('#buscar input');

// buscador.addEventListener('input', () => {
//     // Si es mayor a 5, buscar sugerencias
//     if (buscador.value.length > 3) {
//         // Obtener sugerencias que sean parte de la busqueda
//         ui.obtenerSugerencias(buscador.value);
//     } else if (buscador.value.length === 0) {
//         // Reiniciar el mapa
//         initMap();
//         // Mostrar los pines
//         showRestaurants();
//     }
// });