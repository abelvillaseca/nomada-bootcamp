// Dado un arreglo de colores, elimina los dos del medio y reemplázalos por 'cian' y 'magenta’.

let colores = ["rojo", "naranja", "amarillo", "verde", "azul", "índigo"];

console.log("Colores originales:", colores);

colores.splice(2, 2, "cian", "magenta"); // Elimina 2 elementos a partir del índice 2 y agrega 'cian' y 'magenta'

console.log("Colores después de la modificación:", colores);