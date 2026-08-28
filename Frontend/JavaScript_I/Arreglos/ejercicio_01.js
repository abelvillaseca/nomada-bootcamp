// Desarrollar un programa que permita administrar una lista de pedidos de una cafetería utilizando arreglos y funciones.

// El programa deberá permitir:

// Crear una lista inicial de productos.
// Agregar nuevos productos al final.
// Agregar un pedido prioritario al inicio.
// Retirar el último pedido registrado.
// Procesar el primer pedido de la cola.
// Consultar cuántos pedidos existen.
// Crear una copia parcial de los pedidos.
// Reemplazar determinados pedidos.
// Combinar dos listas de pedidos.
// Convertir una lista en un texto legible.
// Buscar productos específicos.
// Determinar si un producto existe.
// Generar información mediante funciones declaradas, funciones expresión y funciones flecha.

// Al iniciar el programa existe la siguiente lista:

// [
//     "Café americano",
//     "Capuchino",
//     "Té verde",
//     "Chocolate caliente"
// ]

// Durante el funcionamiento del sistema deben realizarse las siguientes operaciones:

// Parte 1 — Nuevos pedidos

// Agregar al final:

// "Latte"
// "Espresso"

// utilizando push().

// Posteriormente llega un cliente con un pedido prioritario:

// "Frappé especial"

// Este pedido debe colocarse al principio utilizando unshift().

// El último pedido registrado debe cancelarse.

// Utilizar pop() y guardar el producto eliminado para mostrar qué pedido fue cancelado.

// Después, procesar el primer pedido de la lista utilizando shift().

// Mostrar qué pedido fue procesado.

// Parte 3 — Estado de la cola

// Mostrar cuántos pedidos quedan utilizando length.

// Parte 4 — Crear una vista parcial

// La cafetería quiere mostrar solamente los primeros tres pedidos pendientes.

// Utilizar slice().

// La lista original no debe modificarse.

// Parte 5 — Modificar pedidos

// Se detecta que el segundo pedido pendiente:

// "Capuchino"

// debe ser reemplazado por:

// "Capuchino grande"
// "Capuchino sin azúcar"

// Utilizar splice().

// Mostrar qué elemento fue eliminado por splice().

// Parte 6 — Segunda sucursal

// Una segunda sucursal tiene estos pedidos:

// [
//     "Mocaccino",
//     "Té chai",
//     "Cheesecake"
// ]

// Combinar ambas listas utilizando concat().

// Parte 7 — Generar un reporte

// Convertir la lista completa en un texto utilizando join(", ").

// El resultado debe poder imprimirse de esta forma:

// Mocaccino, Té chai, Cheesecake, ...
// Parte 8 — Buscar productos

// Comprobar si existe:

// "Espresso"

// utilizando includes().

// Después encontrar la posición de:

// "Capuchino grande"

// utilizando indexOf().

// Parte 9 — Funciones

// Crear:

// Una función declarada llamada mostrarCantidadPedidos().
// Una función expresión llamada obtenerPrimerPedido().
// Una función flecha llamada pedidoExiste().

// Cada función debe cumplir una responsabilidad específica.

let pedidos = ['Café americano', 'Capuchino', 'Té verde', 'Chocolate caliente']

console.log('================================================')
console.log('PEDIDOS INICIALES')
console.log('================================================')

console.log(pedidos)

pedidos.push('Latte', 'Espresso')

console.log('================================================')
console.log('DESPUÉS DE AGREGAR PEDIDOS')
console.log('================================================')

console.log(pedidos)

pedidos.unshift('Frappé especial')

console.log('================================================')
console.log('PEDIDO PRIORITARIO')
console.log('================================================')

console.log(pedidos)

const pedidoCancelado = pedidos.pop()

console.log('================================================')
console.log('PEDIDO CANCELADO')
console.log('================================================')

console.log(`Pedido cancelado: ${pedidoCancelado}`)

console.log(pedidos)

const pedidoProcesado = pedidos.shift()

console.log('================================================')
console.log('PEDIDO PROCESADO')
console.log('================================================')

console.log(`Pedido procesado: ${pedidoProcesado}`)

console.log(pedidos)

console.log('================================================')
console.log('CANTIDAD DE PEDIDOS ACTUALMENTE')
console.log('================================================')

console.log(`Pedidos pendientes: ${pedidos.length}`)

const primerosPedidos = pedidos.slice(0, 3)

console.log('================================================')
console.log('PRIMEROS TRES PEDIDOS')
console.log('================================================')

console.log(`Estos son los 3 primeros pedidos: ${primerosPedidos}`)

console.log('Lista original: ')
console.log(pedidos)

// indice 0 -> Café americano
// indice 1 -> Capuchino
// indice 2 -> Té verde
// indice 3 -> Chocolate caliente
// indice 4 -> Latte

const pedidosReemplazados = pedidos.splice(1, 1, 'Capuchino grande', 'Capuchino sin azúcar')

console.log('================================================')
console.log('PEDIDO REEMPLAZADO')
console.log('================================================')

console.log(`Pedido eliminado: ${pedidosReemplazados}`)

console.log('Lista después de splice():')
console.log(pedidos)

const pedidosSucursal2 = ['Mocaccino', 'Té chai', 'Cheesecake']

console.log('================================================')
console.log('PEDIDOS SUCURSAL 2')
console.log('================================================')

console.log(pedidosSucursal2)

const listaCompleta = pedidos.concat(pedidosSucursal2)

console.log('================================================')
console.log('LISTA COMPLETA')
console.log('================================================')

console.log(listaCompleta)

const reporte = listaCompleta.join(', ')

console.log('================================================')
console.log('REPORTE DE PEDIDOS')
console.log('================================================')

console.log(reporte)

const existeEspresso = listaCompleta.includes('Espresso')

console.log('================================================')
console.log('BÚSQUEDA DE ESPRESSO')
console.log('================================================')

console.log(`¿Existe Espresso?: ${existeEspresso}`)

const posicionCapuchino = listaCompleta.indexOf('Capuchino grande')

console.log('================================================')
console.log('POSICIÓN DEL CAPUCHINO')
console.log('================================================')

console.log(`Posición: ${posicionCapuchino}`)

function mostrarCantidadPedidos(lista) {
    console.log(`Cantidad de pedidos: ${lista.length}`)
}

console.log('================================================')
console.log('FUNCIÓN DECLARADA')
console.log('================================================')

mostrarCantidadPedidos(listaCompleta)

const obtenerPrimerPedido = function (lista) {
    return lista[0]
}

const primerPedido = obtenerPrimerPedido(listaCompleta)

console.log('================================================')
console.log('FUNCIÓN DE EXPRESIÓN')
console.log('================================================')

console.log(`Primer pedido: ${primerPedido}`)

const pedidoExiste = (lista, producto) => {
    return lista.includes(producto)
}

const existeCheesecake = pedidoExiste(listaCompleta, 'Cheesecake')

console.log('================================================')
console.log('FUNCIÓN FLECHA')
console.log('================================================')

console.log(`¿Existe cheesecake?: ${existeCheesecake}`)

const obtenerCantidad = (lista) => lista.length

const cantidadTotal = obtenerCantidad(listaCompleta)

console.log('================================================')
console.log('CANTIDAD TOTAL')
console.log('================================================')

console.log(`Pedidos totales: ${cantidadTotal}`)
