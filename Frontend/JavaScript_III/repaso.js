// Declaración de un arreglo

const frutas = ["manzana", "fresa", "pera"]
// const numeros = [10, 20, 30]
const vacio = []
const mixto = [1, "hola", true]

// Acceder por los índices

console.log(frutas[2]);

// Longitud de un arreglo

// console.log(numeros.length);

// Métodos comunes
const pila = ['a', 'b', 'c']

pila.push('d');
console.log(pila);

pila.unshift('z');
console.log(pila);

pila.pop();
console.log(pila);

console.log(pila.join(' - '));

// Métodos avanzados: map, filter, reduce

// map => Crea un nuevo arreglo del mismo tamaño, aplicando una función a cada elemento.
// filter => Crea un nuevo arreglo solo con los que cumplen una condición.
// reduce => Combina TODOS los elementos en un solo valor.

const numeros = [1, 2, 3, 4, 5, 6]

// 2, 4, 6, 8, 10, 12
const resultado = numeros.map(n => n * 2).filter(n => n > 4).reduce((acc, n) => acc + n, 0)

console.log(resultado); // 36
