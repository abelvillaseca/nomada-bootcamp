// Escribe un programa que solicite una contraseña al usuario (puedes asignarla directamente
// en el código como "1234"). El programa debe seguir pidiendo la contraseña hasta que el usuario
// la introduzca correctamente.

const password = '1234'
let input
let intentos = 3

while (intentos > 0) {
  input = prompt('Ingresa la contraseña')

  if (input === password) {
    alert('Acceso concedido')
    break
  } else {
    intentos--
    alert(`Incorrecto, intentos restante: ${intentos}`)
  }
}

if (intentos === 0) {
  alert('Acceso bloqueado.')
}
