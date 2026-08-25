// Crear una función:

// esPrimo(numero)

// que determine si un número es primo.

// Un número primo es aquel que:

// Es mayor que 1 y solamente puede dividirse exactamente entre 1 y él mismo.

// Ejemplos:

// 2 → primo
// 3 → primo
// 4 → no primo
// 5 → primo
// 6 → no primo
// 7 → primo

// Después crear otra función:

// contarPrimos(inicio, fin)

// que determine cuántos números primos existen dentro de un rango.

function esPrimo(numero) {
    if (numero < 2) {
        return false
    }

    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            // 10 % 2 === 0 (divisible)
            return false
        }
    }
    return true
}

function contarPrimos(inicio, fin) {
    let contador = 0
    for (let numero = inicio; numero <= fin; numero++) {
        if (esPrimo(numero)) {
            contador++
        }
    }
    return contador
}

const inicio = 1
const fin = 10

for (let numero = inicio; numero <= fin; numero++) {
    if (esPrimo(numero)) {
        console.log(`${numero} es primo`)
    } else {
        console.log(`${numero} no es primo`)
    }
}

const cantidadPrimos = contarPrimos(inicio, fin)

console.log(`Existen ${cantidadPrimos} números primos entre ${inicio} y ${fin}`)
