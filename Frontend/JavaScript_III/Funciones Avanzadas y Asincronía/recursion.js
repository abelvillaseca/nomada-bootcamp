// function contar(numero) {
//     // CASO BASE
//     if (numero === 0) {
//         console.log(`Fin de la ejecución.`)
//         return
//     }

//     console.log(numero) // 5 4 3 2 1

//     contar(numero - 1)
// }

// contar(5)

// LLAMADA RECURSIVA: 5 -> 4 -> 3 -> 2 -> 1 => 0

// FACTORIAL DE UN NÚMERO
// 5! = 5 x 4 x 3 x 2 x 1 = 120

function factorial(numeroFactorial) {
    if (numeroFactorial === 1) {
        return 1
    }

    return numeroFactorial * factorial(numeroFactorial - 1)
}

console.log(factorial(5))

// Primera llamada
// factorial(5)
// 5 * 24 = 120

// Segunda llamada
// 4 * 6 = 24

// Tercera llamada
// 3 * 2 = 6

// Cuarta llamada
// 2 * 1 = 2

// Quinta llamada
// factorial(1)
// 1
