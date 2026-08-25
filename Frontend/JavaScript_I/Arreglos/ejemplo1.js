// FORMA LITERAL DE ARREGLOS

const frutas = ['manzana', 'pera', 'lima', 'anana']
const numeros = [1, 2, 3, 4, 5]
const mixto = [10, 'hola', true, null]
const vacio = []

console.log(`Fruta seleccionada: ${frutas[3]}`)

// FORMA CONSTRUCTOR DE ARREGLOS

let colores = new Array('rojo', 'verde', 'azul')
let soloLongitud = new Array(5)
console.log(soloLongitud)

// Crea un arreglo de herramientas y haz lo siguiente:
// 1. Accede y muestra la primera herramienta.
// 2. Accede y muestra la tercera herramienta.
// 3. Modifica la segunda herramienta por "Taladro".
// 4. Intenta acceder a un índice que no existe.
// 5. Ejecuta y verifica los resultados.

let electrodomesticos = ['electrocutador', 'electrocutador de agua', 'electrocutador de aceite']
console.log(electrodomesticos.length)

electrodomesticos.push('tostadora')
console.log(electrodomesticos.length)

console.log(electrodomesticos[electrodomesticos.length - 1])

console.log(electrodomesticos)

// MÉTODOS COMUNES DE ARREGLOS

// MUTADORES:

// push(elemento1, elemento2, ..., elementoN): Añade elementos al final del arreglo.
let deportes = ['Fútbol', 'Basket']
let nuevaLongitud = deportes.push('Tenis', 'Voley')
console.log(deportes)
console.log(nuevaLongitud) // 4

// pop(): Elimina el último elemento del arreglo. Devuelve el elemento eliminado. Si el arreglo está vacío, devuelve undefined.
let series = ['Serie A', 'Serie B', 'Serie C']
let ultimaSerie = series.pop()
console.log(series)
console.log(ultimaSerie) // Serie C

// shift(): Elimina el primer elemento del arreglo. Devuelve el elemento eliminado. Si el arreglo está vacío, devuelve undefined.
let peliculas = ['El hombre que mató a un ratón', 'El ratón y el ratón', 'El ratón']
let primeraPelicula = peliculas.shift()
console.log(peliculas)
console.log(primeraPelicula) // El hombre que mató a un ratón

// unshift(elemento1, elemento2, ..., elementoN): Añade elementos al principio del arreglo.
let canciones = ['Canción X', 'Canción Y']
canciones.unshift('Canción Z', 'Canción W')
console.log(canciones)

// Simula una lista de tareas usando estos métodos:
// Crea una lista de tareas vacía.
// Añade tres tareas a la lista usando push()
// Completa la última tarea en la lista usando pop()
// Añade una tarea urgente al principio de la lista usando unshift()
// Procesa la primera tarea en la lista usando shift()
// Ejecuta y verifica los resultados.

// ============================================================================

// NO MUTADORES
