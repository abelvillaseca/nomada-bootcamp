// Escribe un programa que imprima los números del 10 al 1 en orden descendente usando un bucle while.

let inicio = parseInt(prompt('Ingresa el límite superior: '))
let fin = parseInt(prompt('Ingresa el límite inferior: '))

let i = inicio

while (i >= fin) {
  console.log('Valor actual: ', i)
  i--
}

console.log('Proceso terminado.')
