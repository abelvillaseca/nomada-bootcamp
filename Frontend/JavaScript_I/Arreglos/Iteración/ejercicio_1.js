let calificaciones = [12, 10, 9, 18]

for (let i = 0; i < calificaciones.length; i++) {
    console.log(`Índice ${i}: calificación ${calificaciones[i]}`)
}

const precios = [100, 200, 300, 400]

for (let i = 0; i < precios.length; i++) {
    precios[i] = precios[i] * 0.9
}

console.log(precios)

const productos = ['laptop', 'mouse', 'teclado', 'monitor']

let encontrado = false

for (let i = 0; i < productos.length; i++) {
    if (productos[i] === 'Teclado') {
        encontrado = true
        break
    }
}

console.log(encontrado)

const frutas = ['Manzana', 'Plátano', 'Naranja']

for (const fruta of frutas) {
    console.log(fruta)
}

// for (const indice in frutas) {
//     console.log(indice)
// }

frutas.forEach(function (fruta) {
    console.log(fruta)
})

frutas.forEach((fruta) => {
    console.log(fruta)
})

frutas.forEach((fruta, indice) => {
    console.log(`${indice}: ${fruta}`)
})

// forEach(valor, indice, arreglo){

// }

frutas.forEach((fruta, indice, arreglo) => {
    console.log(fruta)
    console.log(indice)
    console.log(arreglo)
})

const resultado = frutas.forEach((fruta) => {
    return fruta // undefined
})

//map()
const numeros = [10, 20, 30, 40]

const dobles = numeros.map((numero) => {
    return numero * 2
})

console.log(dobles)

// filter()
const edades = [12, 18, 25, 15, 30]

const mayores = edades.filter((edad) => {
    return edad >= 18
})

console.log(mayores)

// find()

const primeraEdadMayor = edades.find((edad) => {
    return edad >= 18
})

console.log(primeraEdadMayor)

// findIndex()
const posicion = edades.findIndex((edad) => edad >= 18)

console.log(posicion)

numeros.indexOf(20)
numeros.find((numero) => numero > 15)

// some()
const existeMayor = edades.some((edad) => edad >= 18)

console.log(existeMayor)

// every()
const todosSonMayores = edades.every((edad) => edad >= 18)

console.log(todosSonMayores)

// reduce()
// 10, 20, 30, 40
const suma = numeros.reduce((acumulador, numero) => {
    return acumulador + numero // 100
}, 0)

console.log(suma)

// let suma = 0

// for (let i = 0; i < numeros.length; i++) {
//     suma += numeros[i] // suma = 100
// }

const total = precios.reduce((total, precio) => total + precio, 0)
console.log(total)

// Encadenamiento de métodos
const precios2 = [100, 200, 300, 400]
// Quiero obtener los precios mayores a 150
// Aplicar el 10% de descuento
// Obtener el total
const total2 = precios2
    .filter((precio) => precio > 150) // 200, 300, 400
    .map((precio) => precio * 0.1) // 20, 30, 40
    .reduce((suma, precio) => suma + precio, 0) // 90

console.log(total2) // 90

// ===============================================================

const productos2 = [
    {
        nombre: 'Laptop',
        precio: 5000,
        stock: 5,
    },
    {
        nombre: 'Mouse',
        precio: 400,
        stock: 20,
    },
    {
        nombre: 'Teclado',
        precio: 900,
        stock: 0,
    },
    {
        nombre: 'Monitor',
        precio: 1200,
        stock: 8,
    },
]

// Obtén los nombres de los productos
// Obtén los productos disponibles
// El primer producto que cueste más de 1000
// El total de productos en stock
// Saber si existe algún producto sin stock
// Saber si todos tienen precio mayor a 50

const nombres = productos2.map((producto) => {
    return producto.nombre
})

console.log(nombres)

const disponibles = productos2.filter((producto) => {
    return producto.stock > 0
})

console.log(disponibles)

const productoMayorAMil = productos2.find((producto) => {
    return producto.precio > 1000
})

console.log(productoMayorAMil)

const stockTotal = productos2.reduce((total, producto) => {
    return total + producto.stock
}, 0)

console.log(stockTotal)

const existeSinStock = productos2.some((producto) => {
    return producto.stock === 0
})

console.log(existeSinStock)

const todosSuperan50 = productos2.every((producto) => {
    return producto.precio > 50
})

console.log(todosSuperan50)
