// Dado un objeto con números como valores, encuentra el valor máximo.

const numeros = {
  a: 10,
  b: 25,
  c: 5,
  d: 30,
}

let maximo = -Infinity

for (const clave in numeros) {
  if (numeros[clave] > maximo) {
    maximo = numeros[clave]
  }
}

console.log('El valor máximo es: ', maximo)
