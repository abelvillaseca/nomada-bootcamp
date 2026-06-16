// Usa indexOf e includes para buscar dentro de un arreglo:

// - Arreglo de frutas con al menos 5 frutas
// - Función buscar(fruta) que retorne la posición o el texto "no encontrado" si no está.
// - Usa includes para verificar la existencia antes de buscar la posición.

let frutas = [
    'manzana',
    'pera',
    'mango',
    'uva',
    'plátano'
];

function buscar(fruta) {
    if (frutas.includes(fruta)) {
        let posicion = frutas.indexOf(fruta);
        return posicion;
    } else {
        return 'No encontrado';
    }
}

let resultado = buscar('taperiba');

if (resultado != 'No encontrado') {
    console.log(`La fruta se encuentra en la posición ${resultado}`);
} else {
    console.log(resultado);
}