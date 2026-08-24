// Crear una función llamada:

// analizarNumeros(inicio, fin)

// que recorra todos los números desde inicio hasta fin.

// Debe determinar:

// Cuántos números pares existen.
// Cuántos números impares existen.
// Cuántos son múltiplos de 5.
// La suma de todos los números.

function analizarNumeros(inicio, fin) {
    let contadorPares = 0
    let contadorImpares = 0
    let constadorMultiplos = 0
    let suma = 0

    for (let numero = inicio; numero <= fin; numero++) {
        suma += numero // suma = suma + numero
        if (numero % 2 === 0) {
            contadorPares++
        } else {
            contadorImpares++
        }
        if (numero % 5 === 0) {
            constadorMultiplos++
        }
    }
    return `
        Números pares: ${contadorPares}
        Números impares: ${contadorImpares}
        Números múltiplos de 5: ${constadorMultiplos}
        Suma: ${suma}
    `
}

const inicio = 1
const fin = 10

const resultado = analizarNumeros(inicio, fin)
console.log(resultado)
