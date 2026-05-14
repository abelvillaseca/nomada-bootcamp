// Crea una expresión de función asignada a una constante contieneCaracter. Debe aceptar dos strings:
// un texto y un carácter a buscar. Debe devolver true si el carácter se encuentra dentro del texto
// (ignorando mayúsculas/minúsculas) y false si no.

const contieneCaracter = function (texto, caracter) {
  texto = texto.toLowerCase() // Convertimos el texto a minúsculas para ignorar mayúsculas/minúsculas
  caracter = caracter.toLowerCase() // Convertimos el carácter a minúscula para ignorar mayúsculas/minúsculas

  let resultado = texto.includes(caracter)

  return resultado
}

// Ejemplo de uso:
console.log(contieneCaracter('Hola Mundo', 'o')) // true
console.log(contieneCaracter('Hola Mundo', 'O')) // true (ignora mayúsculas)
console.log(contieneCaracter('Hola Mundo', 'x')) // false
