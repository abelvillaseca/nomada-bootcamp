// Escribe un programa que pida al usuario un número y siga pidiéndolo hasta que introduzca uno mayor a 10.

function pedirNumero() {
  let numero

  do {
    numero = Number(prompt('Ingresa un número mayor a 10: '))
    if (numero <= 10) {
      alert('El número debe ser mayor a 10. Intenta nuevamente.')
    }
  } while (numero <= 10)

  console.log('Correcto, ingresaste un número mayor a 10. ', numero)
}

pedirNumero()
