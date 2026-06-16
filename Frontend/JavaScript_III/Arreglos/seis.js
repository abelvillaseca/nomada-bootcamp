// Encadena los tres métodos en una sola expresión para resolver un problema real.

// Requerimientos

// - Arreglo de productos con { nombre, precio }.
// - Aplica IGV con map, quédate con los que cuestan más de 100 con filter, y suma sus precios con reduce.
// - Todo en una sola cadena de métodos encadenados.
// - Explica en comentarios qué arreglo entra y sale en cada paso.

const readline = require("readline-sync");

let productos = [];

let cantidadProductos = Number(readline.question("¿Cuántos productos deseas ingresar?: "));

for (let i = 0; i < cantidadProductos; i++) {
    console.log(`\nProducto ${i + 1}`);
    let nombre = readline.question("Nombre del producto: ");
    let precio = Number(readline.question("Precio del producto: "));

    productos.push({ nombre, precio });
}

let total = productos.map(function (producto) {
    return {
        nombre: producto.nombre,
        precio: producto.precio * 1.18
    };
}).filter(function (producto) {
    return producto.precio > 100;
}).reduce(function (acumulador, producto) {
    return acumulador + producto.precio;
}, 0);

console.log(`\nTotal: S/. ${total.toFixed(2)}`);