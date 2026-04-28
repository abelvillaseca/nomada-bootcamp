// Escribe un programa que tome un número entero positivo y use un bucle while para calcular
// la suma de sus dígitos. Por ejemplo, si el número es 1234, la suma sería 1 + 2 + 3 + 4 = 10.

// 1234 => 1234 % 10 => 4 | 1234 / 10 => 123

// let numero = parseInt(prompt('Ingresa un número entero positivo'))

// while (numero <= 0 || isNaN(numero)) {
//   console.log('Número inválido. Debe ser un entero positivo.')
//   numero = parseInt(prompt('Ingresa un número entero positivo'))
// }

// let suma = 0

// while (numero > 0) {
//   let digito = numero % 10
//   suma = suma + digito
//   console.log('Dígito: ', digito, ' | Suma parcial: ', suma)
//   numero = Math.floor(numero / 10)
// }

// console.log('La suma de los dígitos es: ', suma)

// 2.9 => 2

let numero = prompt('Ingresa un número: ') // String
let suma = 0
let i = 0

while (i < numero.length) {
  suma += parseInt(numero[i])
  i++
}

console.log('La suma de todos los dígitos es: ', suma)
