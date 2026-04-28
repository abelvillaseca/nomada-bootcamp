// Usa un bucle while para sumar los números del 1 al 50 e imprimir el resultado final.

// 1 + 2 + 3 + 4 + ... + 50

// acumulador suma = 0

let limite = parseInt(prompt('Ingresa el número límite (máximo 50): ')) // '50' => 50

let suma = 0

let i = 1

while (i <= limite) {
  suma = suma + i
  console.log('Paso: i = ', i, '| Suma parcial = ', suma)
  i++
}

console.log('La suma total es: ', suma)
