// Crea una función llamada crearContador que devuelva una función interna. La función interna debe incrementar y
// devolver un contador privado cada vez que se llame.

function crearContador() {
  let contador = 0; // Variable privada

  function incrementarContador() {
    contador++; // Incrementa el contador privado
    return contador; // Devuelve el valor actualizado del contador
  }

  return incrementarContador; // Devuelve la función interna
}

const contador = crearContador(); // Crea una instancia del contador

console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
