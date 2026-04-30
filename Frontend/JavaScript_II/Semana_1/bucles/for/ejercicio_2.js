// Escribe un programa que calcule la suma de todos los números del 1 al N, donde N es
// un número ingresado por el usuario.

// N = 5
// 1 + 2 + 3 + 4 + 5 = 15

let n = Number(prompt('Ingresa un número N: '))

function sumaN(num) {
  let suma = 0 // let suma => undefined

  for (let i = 1; i <= num; i++) {
    suma = suma + i

    console.log('Iteración ' + i + ': suma = ' + suma)
  }

  console.log('La suma total desde 1 hasta ' + num + ' es: ', suma)
}

sumaN(n)
