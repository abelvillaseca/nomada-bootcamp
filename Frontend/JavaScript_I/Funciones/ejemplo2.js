// Funciones expresadas o Expresión de función

const saludar = function (nombre) {
    console.log(`Hola ${nombre}`)
}

saludar('Abel')

const sumar = function (a, b) {
    return a + b
}

const resultado = sumar(10, 5)
console.log(resultado)

const multiplicar = function calcularMultiplicacion(a, b) {
    return a * b
}

const resultado2 = multiplicar(10, 5)
console.log(resultado2)
