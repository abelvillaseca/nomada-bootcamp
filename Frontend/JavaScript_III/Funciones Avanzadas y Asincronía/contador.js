function crearContador() {
    let contador = 0

    return function () {
        contador++
        console.log(contador)
    }
}

const contar = crearContador()

contar()
contar()
contar()
contar()

// Primera llamada:
// const contar = crearContador()
// Execution Context
// contador = 0

// Primera ejecución:
// contar();
// 0 -> 1

// Segunda ejecución:
// contar();
// 1 -> 2
