// FUNCIONES PURAS

// Esta una función predecible

function sumar(a, b) {
    return a + b // 5 + 2 = 7
}

let total = 0

// // Esta función no es predecible, ya que depende de una variable externa (total) => estado del programa
// function sumar(valor) {
//     total += valor // total = 0 + 5 = 5
// }

function cuadrado(numero) {
    return numero * numero // 5 * 5 = 25
}

function convertirAMayusculas(texto) {
    return texto.toUpperCase() // "hola" => "HOLA"
}

// EFECTOS SECUNDARIOS (SIDE EFFECTS)

let contador = 0

function incrementarContador() {
    contador++ // contador = 0 + 1 = 1
    console.log(contador) // 1
}

incrementarContador() // 1
incrementarContador() // 2
incrementarContador() // 3

// =========================================

function imprimir(nombre) {
    console.log(nombre)
}

const frutas = []

function agregarFruta(fruta) {
    frutas.push(fruta) // frutas = ["manzana"]
    console.log(frutas) // ["manzana"]
}

agregarFruta('manzana') // ["manzana"]
agregarFruta('pera') // ["manzana", "pera"]
agregarFruta('naranja') // ["manzana", "pera", "naranja"]

function obtenerHora() {
    return Date.now()
}

obtenerHora()
obtenerHora()
