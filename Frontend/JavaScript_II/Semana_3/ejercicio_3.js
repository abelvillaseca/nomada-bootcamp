// Crea una función flecha concisa llamada celsiusAFahrenheit que tome una temperatura en
// grados Celsius como argumento y devuelva la temperatura equivalente en grados Fahrenheit.
// La fórmula es: F=(C×9/5)+32

const celsiusAFahrenheit = (celsius) => (celsius * 9) / 5 + 32

let f1 = celsiusAFahrenheit(0) // 32
let f2 = celsiusAFahrenheit(100) // 212
console.log('0°C = ' + f1 + '°F')
console.log('100°C = ' + f2 + '°F')

// Ejemplo de función flecha no concisa (con cuerpo de función):
// const celsiusAFahrenheit2 = (celsius) => {
//   (celsius * 9) / 5 + 32 // No devuelve nada, por lo que el resultado es undefined
// }
