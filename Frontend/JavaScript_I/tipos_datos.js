// Var ya no se usa
var nombre = 'Juan'

{
    nombre = 'Pedro'
}

console.log(nombre)

// ECMASCRIPT => Es el conjunto de normas que dan la estandarización del lenguaje JavaScript

// let ES6 (2015) => block scope
let nombre2 = 'Abel'
nombre2 = 'Juan' // correcto
// let nombre2 = 'Pedro' // incorrecto

// if (true) {
//     let edad = 30
//     console.log(edad)
// }

// console.log(edad)

// const ES6 (2015) => block scope
const nombre3 = 'Abel'
// nombre3 = 'Juan' // incorrecto
// const nombre3 = 'Pedro' // incorrecto

const usuario = {
    nombre: 'Abel',
    edad: 33,
}

usuario.nombre = 'Juan' // correcto

// usuario = {} // incorrecto

const frutas = ['manzana', 'pera', 'uva']
frutas.push('naranja') // correcto
// frutas[];

// TIPOS DE DATOS EN JAVASCRIPT
// PRIMITIVOS: number, string, boolean, null, undefined, object, symbol
// OBJETOS: object, array, function, Date, map, set, etc
// Extra: NaN, Infinity

const numero = 100 // number
const nombre4 = `Abel` // string => backticks
const esVerdadero = true // boolean
const esFalso = false // boolean

// 10 + 20 = 30
// "10" + "20" = "1020"

// TIPADO DINAMICO => No es necesario declarar el tipo de dato de una variable, ya que este se asigna
// automáticamente según el valor que se le asigne a la variable

const nombre_usuario = 'Abel'
const mensaje = `Hola ${nombre_usuario}, bienvenido a la clase de JavaScript` // string => backticks
console.log(mensaje)

// Length es una propiedad
const nombre_curso = 'JavaScript'
console.log(nombre_curso.length) // 10

// métodos de string
// toUpperCase() => convierte a mayúsculas
console.log(nombre_curso.toUpperCase()) // JAVASCRIPT
// toLowerCase() => convierte a minúsculas
console.log(nombre_curso.toLowerCase()) // javascript
// trim() => elimina los espacios en blanco al inicio y al final de un string
console.log(nombre_curso.trim()) // JavaScript
// includes() => determina si un string contiene un determinado valor
console.log(nombre_curso.includes('Script')) // true
// startsWith() => determina si un string comienza con un determinado valor
console.log(nombre_curso.startsWith('Java')) // true
// endsWith() => determina si un string termina con un determinado valor
console.log(nombre_curso.endsWith('Script')) // true

// NUMBERS
const edad = 33
const precio = 10.5
const temperatura = -5

// OPERADORES
// + => suma
// - => resta
// * => multiplicación
// / => división
// % => módulo (resto de la división)
// ** => potencia

// Infinity
// console.log(Infinity) - // => infinito positivo
//     Infinity
// console.log(-Infinity) // => infinito negativo

// // NaN => Not a Number
// console.log(NaN) // => Not a Number

// // UNDEFINED => undefined
// let edad2
// console.log(edad2) // => undefined

// // NULL
// let edad3 = null
// console.log(edad3) // => null

console.log(typeof null)

typeof null === 'object' // true

valor === null // false
