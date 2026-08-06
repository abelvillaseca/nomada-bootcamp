// Ejemplo 1
// const usuario = {
//     nombre: 'Juan',
//     edad: 30,
//     ciudad: 'Madrid',
//     saludar() {
//         console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
//     },
//     telefono: undefined,
// }

// const resultado = JSON.stringify(usuario)
// console.log(resultado) // {"nombre":"Juan","edad":30,"ciudad":"Madrid"}
// console.log(typeof resultado) // string

// Ejemplo 2
// const usuarioJSON = `{
//     "nombre": "Juan",
//     "edad": 30,
//     "ciudad": "Madrid",
// }`

// console.log(typeof usuario) // object
// console.log(typeof usuarioJSON) // string

// Serializar

// const producto = {
//     id: 1,
//     nombre: 'Camiseta',
//     precio: 19.99,
//     disponible: true,
// }

// JSON.parse(JSON.stringify(producto)) // { id: 1, nombre: 'Camiseta', precio: 19.99, disponible: true }

// La firma de stringify es: JSON.stringify(valor, replacer, space)

// const usuario = {
//     nombre: 'Juan',
//     edad: 30,
// }

// const json = JSON.stringify(usuario, function (key, value) {
//     if (key === 'edad') {
//         return 'OCULTO'
//     }

//     return value
// })

// console.log(json)

// console.log(JSON.stringify(usuario, null, '---'))

// JSON.parse()

const texto = `{
    "nombre": "Juan",
    "edad": 30
}`

const usuario = JSON.parse(texto)

console.log(usuario.nombre)
console.log(usuario.edad)

// {
//     "nombre": "Juan",
//     "edad": 30
// }

