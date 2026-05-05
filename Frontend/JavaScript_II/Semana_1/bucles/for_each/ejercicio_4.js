// Dado un array de colores, utiliza forEach para contar cuántas veces aparece el color "rojo".

const colores = ['rojo', 'verde', 'azul', 'rojo', 'amarillo', 'rojo']

let contador = 0

// colores.forEach(function (color) {
//   if (color === 'rojo') {
//     contador++
//   }
// })

colores.forEach((color) => {
  if (color === 'rojo') contador++
})

console.log('El color rojo aparece: ', contador, ' veces.')

// elemento, indice, array
