// Crea un programa que imprima la tabla de multiplicar del 5 (del 1 al 10).

let numero = Number(
  prompt('Ingresa un número para ver su tabla de multiplicar: ')
)

function tablaMultiplicar(num) {
  for (let i = 1; i <= 10; i++) {
    let resultado = num * i
    console.log(num + ' x ' + i + ' = ' + resultado)
  }
}

tablaMultiplicar(numero)
