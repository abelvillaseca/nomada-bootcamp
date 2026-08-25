// Crear un cajero automático simplificado.

// El usuario comienza con:

// Saldo: S/ 1000

// Debe tener un menú:

// 1 → Consultar saldo
// 2 → Depositar dinero
// 3 → Retirar dinero
// 4 → Salir

// El programa debe continuar mostrando el menú hasta que el usuario seleccione 4.

// Para simplificar el ejercicio, simula las opciones mediante variables.

function consultarSaldo(saldo) {
    return saldo
}

function depositar(saldo, monto) {
    if (monto <= 0) {
        return saldo
    }

    return saldo + monto
}

function retirar(saldo, monto) {
    if (monto <= 0) {
        return saldo
    }

    if (monto > saldo) {
        return saldo
    }

    return saldo - monto
}

let saldo = 1000
let opcion = 1

let continuar = true

while (continuar) {
    switch (opcion) {
        case 1:
            console.log(`Saldo actual: ${consultarSaldo(saldo)}`)
            opcion = 2
            break
        case 2:
            saldo = depositar(saldo, 500)
            console.log(`Depósito realizado. Saldo actual: ${saldo}`)
            opcion = 3
            break
        case 3:
            saldo = retirar(saldo, 200)
            console.log(`Retiro realizado. Saldo actual: ${saldo}`)
            opcion = 4
            break
        case 4:
            continuar = false
            console.log(`Gracias por usar el cajero automático simplificado.`)
            break
        default:
            continuar = false
            console.log(`Opción no válida.`)
            break
    }
}
