// const sumar = function (a, b) {
//     return a + b
// }

const sumar = (a, b) => a + b // return implícito
const cuadrado = (numero) => numero * numero
const saludar = () => {
    console.log('Hola')
}
const obtenerMensaje = () => 'Hola mundo'

console.log(sumar(15, 5))
console.log(cuadrado(5))
saludar()
console.log(obtenerMensaje())

const calcularPrecioFinal = (precioBase) => {
    const igv = precioBase * 0.18
    const precioFinal = precioBase + igv
    return precioFinal
}

console.log(calcularPrecioFinal(100))
