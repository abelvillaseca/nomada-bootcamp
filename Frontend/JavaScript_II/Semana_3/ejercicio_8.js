// Crea una función flecha llamada calcularIMC que reciba dos argumentos: peso en kilogramos y
// altura en metros. Debe devolver el Índice de Masa Corporal (IMC), calculado como IMC=peso/altura
// al cuadrado. Asegúrate de devolver el resultado redondeado a dos decimales.

const calcularIMC = (peso, altura) => {
  let imc = peso / altura ** 2 // peso / (altura * altura)
  imc = parseFloat(imc.toFixed(2)) // Redondear a 2 decimales y convertir a número
  return imc
}

// Ejemplo de uso:
console.log(calcularIMC(70, 1.75)) // 22.86
console.log(calcularIMC(80, 1.8)) // 24.69
console.log(calcularIMC(60, 1.6)) // 23.44  
