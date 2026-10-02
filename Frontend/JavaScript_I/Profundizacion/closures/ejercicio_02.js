// Crea una función llamada crearSaludo que tome un saludo como argumento y devuelva una función que salude a una persona con ese saludo.

function crearSaludo(saludo) {
  function saludar(nombre) {
    return `${saludo}, ${nombre}!`;
  }
  return saludar;
}

const saludoHola = crearSaludo("Hola");
const saludoBuenosDias = crearSaludo("Buenos días");

console.log(saludoHola("Juan"));
console.log(saludoBuenosDias("María"));
