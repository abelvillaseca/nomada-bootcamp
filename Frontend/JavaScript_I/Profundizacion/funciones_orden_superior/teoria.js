// Funciones de orden superior

// - Recibe otras funciones como argumentos
// - Devuelve otra función como resultado

// first-class citizens

// const saludar = function () {
//   return "Hola, Abel";
// };

// console.log(saludar());

// function ejecutarFuncion(funcion) {
//   funcion(); // saludar2()
// }

// function saludar2() {
//   console.log("Hola mundo");
// }

// ejecutarFuncion(saludar2);

// function sumar(a, b) {
//   return a + b;
// }

// const operacion = sumar; // referencia a la función

// console.log(operacion(10, 20));

// function ejecutar2(operacion, a, b) {
//   return operacion(a, b); // sumar(5, 3)
// }

// function multiplicar(a, b) {
//   return a * b;
// }

// console.log(ejecutar2(sumar, 5, 3));
// console.log(ejecutar2(multiplicar, 5, 3));

// function crearSaludo() {
//   return function () {
//     return "Hola, desarrollador";
//   };
// }

// const saludo = crearSaludo();
// console.log(saludo());

// // closures

// function procesarUsuario(nombre, callback) {
//   console.log(`Procesando al usuario: ${nombre}`);

//   callback();
// }

// function finalizar() {
//   console.log("Proceso finalizado");
// }

// procesarUsuario("Abel", finalizar);

// function calcular(a, b, callback) {
//   return callback(a, b);
// }

// const resultado = calcular(10, 5, (a, b) => {
//   return a - b;
// });

// console.log(resultado);

// const resultado = calcular(10, 5, (a, b) => a - b);

// METHOD CHAINING

const productos = [
  { nombre: "Laptop", precio: 5500, disponible: true },
  { nombre: "Mouse", precio: 379, disponible: true },
  { nombre: "Teclado", precio: 299, disponible: true },
  { nombre: "Monitor", precio: 1200, disponible: false },
  { nombre: "Audífonos", precio: 1299, disponible: true },
];

const resultado2 = productos
  .filter((producto) => producto.disponible)
  .map((producto) => ({ nombre: producto.nombre, precio: producto.precio }))
  .sort((a, b) => a.precio - b.precio);

console.log(resultado2);
