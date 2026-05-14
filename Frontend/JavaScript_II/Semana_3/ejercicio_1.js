// Crea una función declarada llamada calculadora que acepte tres argumentos: dos números y
// una cadena que represente la operación ('sumar', 'restar', 'multiplicar', 'dividir').
// La función debe devolver el resultado de la operación aplicada a los dos números. Si la
// operación no es válida, debe devolver null.

function calculadora(num1, num2, operacion) {
  switch (operacion) {
    case 'sumar':
      return num1 + num2
    case 'restar':
      return num1 - num2
    case 'multiplicar':
      return num1 * num2
    case 'dividir':
      if (num2 !== 0) {
        return num1 / num2
      } else {
        return null // No se puede dividir por cero
      }
    default:
      return null // Operación no válida
  }
}

// Ejemplo de uso:
console.log(calculadora(10, 5, 'sumar')) // 15
console.log(calculadora(10, 5, 'restar')) // 5
console.log(calculadora(10, 5, 'multiplicar')) // 50
console.log(calculadora(10, 5, 'dividir')) // 2
