// Dado un array de nombres, usa map( ) para convertirlos a mayúsculas.

const nombres = ["abel", "carlos", "ana", "mariana", "juan"];

const nombresMayusculas = nombres.map((nombre) => {
  return nombre.toUpperCase();
});

console.log(nombresMayusculas);
