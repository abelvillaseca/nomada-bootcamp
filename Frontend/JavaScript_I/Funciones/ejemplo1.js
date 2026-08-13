saludar('Luis')

function saludar(nombre) {
    console.log(`Hola ${nombre}, cómo estás.`)
}

// console.log(nombre) // undefined

// var nombre = 'Abel'

// console.log(nombre) // TDZ => ReferenceError

// let nombre = 'Abel'

// Temporal Dead Zone (TDZ)

function despedir(nombre = 'amigo/a') {
    console.log('Adiós, ' + nombre)
}

despedir('Carlos')
despedir()
despedir('Lucho')

// Ejercicio práctico:

// Crea una función que calcule el precio final de un producto añadiendo el IGV (18%)
// La función debe llamarse calcularPrecioFinal, precioBase será su parámetro
// IGV = precioBase * 0.18
// precioFinal = precioBase + IGV
// Muestra los resultados llamando a la función varias veces con diferentes precios base

function calcularPrecioFinal(precioBase) {
    const igv = precioBase * 0.18
    const precioFinal = precioBase + igv
    // return precioFinal
    console.log(`El precio final es: ${precioFinal}`)
}

// console.log(calcularPrecioFinal(100))
// const resultado = calcularPrecioFinal(100)
// console.log(`Precio final: ${resultado}`)
calcularPrecioFinal(100)

