// Crea una función declarada encontrarMaximo que reciba un array de números como argumento.
// La función debe devolver el número más grande dentro del array. Si el array está vacío,
// debe devolver undefined.

function encontrarMaximo(numeros) { // [1, 5, 3, 9, 2]
  if(numeros.length === 0) {
    return undefined;
  }

  let maximo = numeros[0]; // Asumimos que el primer número es el máximo inicialmente

  for(let i = 1; i < numeros.length; i++) {
    if(numeros[i] > maximo) { // numeros[1] = 5 // 5 > 1
      maximo = numeros[i]; // Actualizamos el máximo si encontramos un número mayor
    }
  }
  return maximo; // Devolvemos el número más grande encontrado
}

// Ejemplo de uso:
console.log(encontrarMaximo([1, 5, 3, 9, 2])) // 9
console.log(encontrarMaximo([])) // undefined
console.log(encontrarMaximo([-10, -5, -3, -1])) // -1 (el número más grande en este caso es el menos negativo)
