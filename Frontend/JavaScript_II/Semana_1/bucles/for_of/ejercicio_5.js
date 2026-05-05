// Escribe un programa que reciba un array de palabras y calcule la suma de la longitud de todas ellas.

const palabras = ['perro', 'gato', 'elefante', 'sol']

let sumaLongitudes = 0

for (const palabra of palabras) {
  sumaLongitudes += palabra.length
}

console.log('La suma de longitudes es: ', sumaLongitudes)
