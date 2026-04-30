// Escribe un programa que calcule el factorial de un número ingresado por el usuario.
// El factorial de un número n se calcula como: n!=n×(n−1)×(n−2)×…×1n!=n×(n−1)×(n−2)×…×1.

// 5! = 5 x 4 x 3 x 2 x 1 = 120
// Se define para números enteros >= 0
// 0! = 1
// 1! = 1

let n = Number(prompt('Ingresa un número para calcular su factorial: '))

function factorial(num) {
  if (num < 0) {
    alert('El factorial no está definido para números negativos.')
    return
  }

  let factorial = 1

  for (let i = 1; i <= num; i++) {
    factorial = factorial * i
    console.log('Iteración ' + i + ': factorial = ' + factorial)
  }

  console.log('El factorial de ' + num + ' es: ' + factorial)
}

factorial(n)
