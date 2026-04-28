// Crea un programa que imprima todos los números pares en un rango ingresado por teclado utilizando un bucle while.

// numero % 2 === 0 => PAR

let inicio = parseInt(prompt('Ingresa el límite inferior: '))
let fin = parseInt(prompt('Ingresa el límite superior: '))

let i = inicio

while (i <= fin) {
  if (i % 2 === 0) {
    console.log('Número par encontrado: ', i)
  }
  i++
}

console.log('Proceso terminado.')
