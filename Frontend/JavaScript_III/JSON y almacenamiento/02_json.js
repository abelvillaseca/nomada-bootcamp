// Convertir un documento JSON a un objeto de JavaScript

const usuarioJSON = `{
    "nombre": "Juan",
    "edad": 30,
    "activo": true
}`

// Try...catch
// Nos sirve para manejar errores en el código, en este caso si el JSON no es válido,
// se lanzará un error y podremos capturarlo para manejarlo de manera adecuada.

// try {
//     // código que podría lanzar un error
// } catch (error) {
//     // Código para manejar el error
// }

const texto = `{
    "nombre": "Juan"
}`

try {
    const usuario = JSON.parse(texto)
    console.log(usuario)
} catch (error) {
    console.log('Error al convertir el JSON a objeto de JavaScript:', error.message)
}
