// Practica añadir, modificar y eliminar propiedades de un objeto.

// Requerimientos

// Objeto producto con nombre y precio.
// Añade una propiedad stock.
// Modifica el precio.
// Elimina nombre con delete e imprime el objeto en cada paso.

const readline = require("readline-sync");

let nombre = readline.question("Ingresa el nombre del producto: ");

let precio = Number(readline.question("Ingresa el precio del producto: "));

let producto = {
    nombre: nombre,
    precio: precio
};

console.log("\nObjeto original: ");
console.log(producto);

let stock = Number(readline.question("\nIngresa el stock del producto: "));

producto.stock = stock;

console.log("\nObjeto después de agregar stock: ");
console.log(producto);

let nuevoPrecio = Number(readline.question("\nIngresa el nuevo precio: "));

producto.precio = nuevoPrecio;

console.log("\nObjeto después de modificar el precio: ");
console.log(producto);

delete producto.nombre;

console.log("\nObjeto después de eliminar el nombre: ");
console.log(producto);