// Dado un array de números, utiliza forEach para imprimir cada número por separado.

let numeros = []

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
    console.log('Elemento en posición ' + indice + ': ' + numero)
  })
}
