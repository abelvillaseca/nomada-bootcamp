// Pide al usuario una palabra y calcula cuántas vocales tiene.

function contarVocales() {
  let palabra

  do {
    palabra = prompt('Ingresa una palabra: ') // peru

    if (!palabra) {
      console.log('Debes ingresar una palabra válida.')
    }
  } while (!palabra)

  palabra = palabra.toLowerCase()

  let contador = 0

  for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i] // letra = p

    if (
      letra === 'a' ||
      letra === 'e' ||
      letra === 'i' ||
      letra === 'o' ||
      letra === 'u'
    ) {
      contador++
    }
  }

  console.log('La palabra tiene: ', contador, ' vocales.')
}

contarVocales()
