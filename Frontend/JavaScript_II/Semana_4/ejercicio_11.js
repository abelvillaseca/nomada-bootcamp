// Crea un arreglo con 3 frutas. Agrega una al final y otra al inicio. Luego elimina una del final y otra del inicio.

let frutas = ["Manzana", "Banana", "Naranja"];

console.log("Frutas iniciales:", frutas);

frutas.push("Uva"); // Agrega al final
console.log("Después de agregar al final:", frutas);

frutas.unshift("Fresa"); // Agrega al inicio
console.log("Después de agregar al inicio:", frutas);

frutas.pop(); // Elimina del final
console.log("Después de eliminar del final:", frutas);

frutas.shift(); // Elimina del inicio
console.log("Después de eliminar del inicio:", frutas);