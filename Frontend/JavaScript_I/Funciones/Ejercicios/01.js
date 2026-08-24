// Crear una calculadora que reciba dos números y una operación:

// 1 → Sumar
// 2 → Restar
// 3 → Multiplicar
// 4 → Dividir

// El programa debe utilizar una función diferente para cada operación.

// Además:

// Si se intenta dividir entre cero, debe mostrar un mensaje de error.
// Si la opción no existe, debe indicar que la operación es inválida.
// El resultado debe ser devuelto mediante return.

function sumar(numero1, numero2) {
    const resultado = numero1 + numero2
    return resultado
}

function restar(numero1, numero2) {
    const resultado = numero1 - numero2
    return resultado
}

function multiplicar(numero1, numero2) {
    const resultado = numero1 * numero2
    return resultado
}

function dividir(numero1, numero2) {
    if (numero2 === 0) {
        return 'Error: No se puede dividir por cero'
        // return null
    }
    const resultado = numero1 / numero2
    return resultado
}

const numero1 = 20
const numero2 = 5

const opcion = 2

let resultado

switch (opcion) {
    case 1:
        resultado = sumar(numero1, numero2)
        break
    case 2:
        resultado = restar(numero1, numero2)
        break
    case 3:
        resultado = multiplicar(numero1, numero2)
        break
    case 4:
        resultado = dividir(numero1, numero2)
        break
    default:
        console.log('Opción inválida')
        break
}

console.log(`El resultado de la operación ${opcion} es ${resultado}`)
