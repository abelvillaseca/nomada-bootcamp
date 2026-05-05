// Dado un array de números, crea un nuevo array que contenga solo los números pares.

const numeros = [4, 7, 11, 12, 9, 20, 33, 18]

const pares = []

for (const num of numeros) {
  if (num % 2 === 0) {
    pares.push(num)
  }
}

console.log('Números pares: ', pares)
