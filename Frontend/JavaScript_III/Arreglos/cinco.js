// Calcula el total a pagar de un carrito de compras usando reduce.

// - Arreglo carrito con objetos {producto, precio, cantidad}
// - Usa reduce para sumar precio * cantidad de cada item
// - El acumulador debe empezar en 0
// - Retorna el total formateado como S/ 345.00

// Laptop 6000 1
// Mouse 80 2
// Teclado 150 1

const readline = require("readline-sync");

let carrito = [];

let cantidadProductos = Number(readline.question("¿Cuántos productos deseas ingresar?: "));

for (let i = 0; i < cantidadProductos; i++) {
    console.log(`\nProducto ${i + 1}`);
    let producto = readline.question("Nombre del producto: ");
    let precio = Number(readline.question("Precio del producto: "));
    let cantidad = Number(readline.question("Cantidad del producto: "));

    carrito.push({ producto, precio, cantidad });
}

let total = carrito.reduce(
    function (acumulador, item) {
        return acumulador + (item.precio * item.cantidad);
    }, 0
);

console.log("\nCARRITO DE COMPRAS: ");
console.log(carrito);

console.log(`\nTotal a pagar: S/ ${total.toFixed(2)}`);
