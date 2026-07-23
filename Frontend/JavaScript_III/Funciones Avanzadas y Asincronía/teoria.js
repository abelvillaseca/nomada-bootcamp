// function mostrarBienvenida(nombre, curso) {
//     console.log(`Bienvenido ${nombre}.`)
//     console.log(`Has sido inscrito correctamente en el curso de ${curso}`)
//     console.log(`Muchos éxitos en tu aprendizaje`)
// }

// mostrarBienvenida('Abel', 'JavaScript')
// mostrarBienvenida('Carlos', 'POO')

// 1. Global Execution Context
// const nombre = "Abel"
// function saludar(){}
// console.log(nombre);
// 2. Function Execution Context
// 3. Eval Execution Context
// eval()

// Execution Context
// - Creation Phase =>
// 1. window => global => globalThis
// 2. Se crea el scope
// 3. Aparece el hosting
// 4. Registro de funciones

// - Execution Phase

// hoisting
// scope
// clousures
// this
// asincronía

function crearSaludo() {
    const mensaje = 'Hola desde un Clousure'

    return function () {
        console.log(mensaje)
    }
}

const saludar = crearSaludo()

saludar()
