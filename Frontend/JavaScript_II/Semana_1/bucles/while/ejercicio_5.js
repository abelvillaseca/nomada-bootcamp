// Escribe un programa que pida al usuario un número del 1 al 10 y use un bucle while para imprimir
// su tabla de multiplicar (del 1 al 10).

let num = parseInt(prompt('Ingresa un número del 1 al 10:'))

while (num < 1 || num > 10) {
  alert('Número inválido. Debe ser un número entre 1 y 10')
  num = parseInt(prompt('Ingresa un número del 1 al 10:'))
}

let i = 1

while (i <= 10) {
  let resultado = num * i
  console.log(num + 'x' + i + ' = ' + resultado)
  i++
}
