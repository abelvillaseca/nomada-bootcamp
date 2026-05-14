// Crea una función declarada llamada generarSaludo que acepte dos argumentos:
// un nombre y un saludo (ej. "Hola", "Qué tal"). El saludo debe tener un valor por
// defecto de "Hola". La función debe devolver un string con el saludo personalizado, por ejemplo, "Hola, Ana!".

function generarSaludo(nombre, saludo = 'Hola') {
  return `${saludo}, ${nombre}!`
}

// Ejemplo de uso:
console.log(generarSaludo('Ana')) // "Hola, Ana!"
console.log(generarSaludo('Carlos', 'Qué tal')) // "Qué tal, Carlos!"
