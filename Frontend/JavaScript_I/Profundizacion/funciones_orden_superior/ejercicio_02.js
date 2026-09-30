// Escribe una función que tome un array y una función de condición como argumentos, y devuelva true si todos los elementos
// del array cumplen la condición, o false en caso contrario. Utiliza el método every( ).

// 1. Un arreglo
// 2. Una función de condición

function todosCumplen(array, condicion) {
  return array.every(condicion);
}

const edades = [25, 30, 40, 55];

const esMayorEdad = (edad) => {
  return edad >= 18;
};

const resultado = todosCumplen(edades, esMayorEdad);

console.log(resultado);
