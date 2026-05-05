// Dado un array de números, utiliza forEach para crear un nuevo array que contenga los cuadrados
// de los números del array original.

let numeros = []
let cuadrados = []

let cantidad = parseInt(prompt('¿Cuántos números deseas ingresas?: '))

if (isNaN(cantidad) || cantidad <= 0) {
  alert('Cantidad inválida.')
} else {
  for (let i = 0; i < cantidad; i++) {
    let num = parseInt(prompt('Ingresa el número #' + (i + 1)))
    numeros.push(num)
  }

  console.log('Arreglo ingresado: ', numeros)

  numeros.forEach(function (numero, indice) {
    let cuadrado = numero * numero
    cuadrados.push(cuadrado)
  })

  console.log('Arreglo de cuadrados: ', cuadrados)
}
