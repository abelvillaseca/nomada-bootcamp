// CÓDIGO SÍNCRONO
console.log("A");
console.log("B");
console.log("C");

// CÓDIGO ASÍNCRONO
console.log("A");

setTimeout(() => {
  console.log("B");
}, 2000);

console.log("C");

const usuarios = fetch("https://api.example.com/users");

// Fetch devuelve una promesa o promise
// Una promesa es un objeto que representa el resultado futuro de una operación asíncrona
