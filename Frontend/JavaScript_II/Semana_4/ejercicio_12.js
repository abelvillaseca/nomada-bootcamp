// Dado un arreglo de números del 1 al 10, obtén un nuevo arreglo que contenga del número 4 al 7.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Arreglo original:", numeros);

let subArreglo = numeros.slice(3, 7); // El índice 3 es el número 4 y el índice 7 es el número 8 (no incluido)

console.log("Nuevo arreglo con números del 4 al 7:", subArreglo);