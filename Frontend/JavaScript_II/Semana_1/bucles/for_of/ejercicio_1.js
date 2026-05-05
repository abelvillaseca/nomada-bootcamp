// Dado un array de números, calcula la suma total de sus elementos utilizando for...of.

const numeros = [3, 7, 2, 10, 5]

let suma = 0

for (const num of numeros) {
  suma += num
}

console.log(`La suma total es: ${suma}`)
