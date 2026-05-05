// Dado un objeto que contiene números como valores, calcula la suma de todos los valores.

const ventas = {
  enero: 1200,
  febrero: 1500,
  marzo: 1800,
}

let suma = 0

for (const mes in ventas) {
  suma += ventas[mes]
}

console.log('La suma total de las ventas es: ', suma)
