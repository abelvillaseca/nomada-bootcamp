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

// splice(inicio, cantidadElementosAEliminar, elemento1, elemento2, ..., elementoN): Elimina elementos del arreglo y devuelve una nueva
// copia del arreglo con los elementos eliminados. Si no elimina ningún elemento, devuelve un arreglo vacío.

let meses = ['Ene', 'Mar', 'Abr', 'Jun']
console.log('Arreglo original: ', meses)

let eliminados = meses.splice(1, 0, 'Feb')
console.log('Arreglo después de insertar Feb: ', meses) // ['Ene', 'Feb', 'Mar', 'Abr', 'Jun']

let eliminados2 = meses.splice(3, 2, 'Mayo', 'Junio')
console.log('Arreglo después reemplazar Mayo y Junio: ', meses) // ['Ene', 'Feb', 'Mar', 'Mayo', 'Junio']
console.log('Elementos eliminados: ', eliminados2) // ['Abr', 'Jun']

let eliminados3 = meses.splice(1, 1)
console.log('Arreglo después de eliminar Feb: ', meses) // ['Ene, 'Mar', 'Mayo', 'Junio']
console.log('Elementos eliminados: ', eliminados3) // ['Feb']

// ============================================================================

// NO MUTADORES

// slice(inicio, fin): Devuelve una copia de un arreglo.
let animales = ['Perro', 'Gato', 'Elefante', 'Tigre', 'Conejo']
let algunosAnimales = animales.slice(1, 3)
console.log(algunosAnimales) // ['Gato', 'Elefante']

let ultimosDos = animales.slice(-2)
console.log(ultimosDos) // ['Tigre', 'Conejo']

let copiaCompleta = animales.slice()
console.log(copiaCompleta) // ['Perro', 'Gato', 'Elefante', 'Tigre', 'Conejo']

// Crea una lista de invitados (let invitados = ["Ana", "Luis", "Maria", "Juan", "Sofia", "Carlos"];).
// Alugnos invitados llegan temprano (usa slice( ) para obtener los primeros 3)
// Juan no puede venir, hay que quitarlo y en su lugar añadir a “Elena” y “Pedro” (usa splice ( ))
// Solo queremos quedarnos con los 4 primeros invitados de la nueva lista (usa splice( ) para eliminar del 4to en adelante)
// Ejecuta y analiza cómo slice no cambia el original y cómo splice lo modifica y devuelve los elementos eliminados.

// concat(arreglo1, ..., arregloN): Devuelve una nueva copia de un arreglo uniendo los elementos de los arreglos especificados.
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = ['a', 'b']
let combinado = arr1.concat(arr2, arr3, 7, 'c')
console.log(combinado)
console.log(arr1) // [1, 2, 3]

// join(separador): Devuelve una cadena uniendo todos los elementos del arreglo con el separador especificado.
let palabras = ['Hola', 'Mundo', 'desde', 'JavaScript']
let fraseComa = palabras.join()
console.log(fraseComa) // Hola, Mundo, desde, JavaScript

// indexOf(elementoABuscar, inicio): Devuelve el primer índice de la primera aparición de elementoABuscar en el arreglo,
// o -1 si no se encuentra.
let numerosRepetidos = [10, 20, 30, 20, 40, 20]
console.log(numerosRepetidos.indexOf(20)) // 1
console.log(numerosRepetidos.indexOf(20, 2)) // 3
console.log(numerosRepetidos.indexOf(50))

// includes(elementoABuscar, inicio): Devuelve true si el arreglo contiene elementoABuscar, o false en caso contrario.

let letras = ['a', 'b', 'c', 'd', 'e', 'a']
console.log(letras.includes('c')) // true
console.log(letras.includes('f')) // false
console.log(letras.includes('a', 1))
console.log(letras.includes('b', 2))

// Crea dos listas de compras
// Combina ambas listas en una sola usando concat( )
// Crea un string legible de la lista completa para imprimir, separado por ", " usando join( )
// Verifica si "Plátano" está en la listaCompleta usando includes( )
// Encuentra la primera posición de "Leche" en listaCompleta usando indexOf( )
// Encuentra la siguiente posición de "Leche" comenzando la búsqueda después de la primera que encontraste
// Verifica si "Brócoli" está en la lista usando indexOf( ) y comparando con -1
// Ejecuta y analiza los resultados de cada método.

brocoliEnLaLista = listaCompleta.indexOf('Brócoli') // -1
// brocoliEnLaLista = -1
// console.log('¿Brócoli está en la lista?: ')
// if (brocoliEnLaLista === -1) {
//     console.log('No se encuentra')
// } else {
//     console.log('Se encuentra')
// }

console.log(
    `¿Brócoli está en la lista?: ${brocoliEnLaLista === -1 ? 'No se encuentra' : 'Se encuentra'}`
)
