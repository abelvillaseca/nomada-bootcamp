// Crea un programa que le pida al usuario ingresar números uno por uno. El programa debe
// terminar cuando el usuario ingrese un número negativo. Al final, imprime cuál fue el número mayor que ingresó.

// let mayor = null
// let numero = parseInt(prompt('Ingresa un número (negativo para terminar): ')) // 5

// while (numero >= 0) {
//   if (mayor === null || numero > mayor) {
//     mayor = numero // 10
//     console.log('Nuevo mayor encontrado: ', mayor) // mayor = 10
//   }

//   numero = parseInt(prompt('Ingresa otro número (negativo para terminar): ')) // -1
// }

// if (mayor === null) {
//   console.log('No se ingresaron números positivos')
// } else {
//   console.log(`El número mayor fue: ${mayor}`)
// }

let mayor = null
let numero

while (true) {
  numero = parseInt(prompt('Ingresa otro número (negativo para terminar):'))

  if (isNaN(numero)) {
    console.log('Ingresa un número válido')
    continue
  }

  if (numero < 0) {
    break
  }

  if (mayor === null || numero > mayor) {
    mayor = numero
  }
}

console.log(
  mayor === null ? 'No se ingresaron números válidos.' : 'El mayor es: ' + mayor
)
