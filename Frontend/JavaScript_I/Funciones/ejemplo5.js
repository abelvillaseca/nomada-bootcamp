const TASA_IMPUESTO = 0.18 // Ámbito global

function calcularTotal(items) {
    // ámbito función
    let subtotal = 0 // ámbito de función/bloque

    for (let i = 0; i < items.length; i++) {
        // i tiene scope de bloque por for
        let item = items[i] // item tiene scope de bloque
        subtotal += item.precio // subtotal = 1225
        console.log('Procesando item: ', item.nombre) // ¿Funciona?
    }

    const impuesto = subtotal * TASA_IMPUESTO // scope bloque / función
    let total = subtotal + impuesto // scope bloque / función

    // console.log('Último item procesado: ', item.nombre) // Error
    console.log('Subtotal calculado: ', subtotal) // Sí debe funcionar
    console.log('Impuesto: ', impuesto.toFixed(2)) // Sí debe funcionar

    return total
}

const carrito = [
    { nombre: 'Laptop', precio: 1200 },
    { nombre: 'Mouse', precio: 25 },
]

const totalAPagar = calcularTotal(carrito)

console.log('Tasa global: ', TASA_IMPUESTO) // Sí funciona
console.log('Total a pagar: ', totalAPagar.toFixed(2)) // Sí funciona
console.log('Subtotal fuera de función: ', subtotal) // No funciona
