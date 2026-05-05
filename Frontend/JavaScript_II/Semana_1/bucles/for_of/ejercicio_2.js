// Escribe un programa que reciba un array de palabras y cree un nuevo array con todas las palabras en mayúsculas.

// hola
// ['hola', 'como', 'estas']

const palabras = ['hola', 'mundo', 'javascript']
const enMayusculas = []

for (const palabra of palabras) {
  enMayusculas.push(palabra.toUpperCase())
}

console.log('Arreglo en mayúsculas:', enMayusculas)
