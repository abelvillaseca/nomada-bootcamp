// Desestructuración de Arreglos

// const usuario = ["Abel", 33, "Programador"];

// const nombre = usuario[0];
// const edad = usuario[1];

// console.log(nombre);
// console.log(edad);

// const [nombre, edad, profesion, estado = true] = usuario;

// console.log(nombre);
// console.log(edad);
// console.log(profesion);
// console.log(estado);

// const [a = 100, b = 200, c = 300] = [undefined, null];

// console.log(a);
// console.log(b);
// console.log(c);

// ?? => operador de coalescencia nula

// const datos = ["Abel", 33, ["Javascript", "Node.js", "SQL"]];

// const [nombre, edad, [lenguaje, backend, baseDatos]] = datos;

// console.log(baseDatos);

// a = 10 y b = 20

let a = 10;
let b = 20;

// let temp = a;
// a = b;
// b = temp;

// console.log("a = ", a);
// console.log("b = ", b);

[a, b] = [b, a];
console.log("a = ", a);
console.log("b = ", b);

// Desestructuración de objetos

const usuario = {
  nombre: "Abel",
  edad: 33,
  profesion: "Programador",
  ciudad: "Cajamarca",
};

// const nombre2 = usuario.nombre;

// console.log(nombre2);

const { nombre, edad, profesion } = usuario;

console.log(nombre);

function sumar(a, b, c) {
  return a + b + c;
}

const numeros = [10, 20, 30];

console.log(sumar(...numeros));

const numeros2 = [15, 80, 25, 100, 45];

const maximo = Math.max(...numeros2);
console.log(maximo);

// Spread = expande
// Rest = agrupa

const tecnologias = ["HTML", "CSS", "JavaScript", "Node.js", "Express"];

const [primero, segundo, ...resto] = tecnologias;

console.log(resto);

function sumar2(...numeros) {
  let total = 0;

  for (const numero of numeros) {
    total += numero;
  }

  return total;
}

console.log(sumar2(10, 20, 30, 40));
