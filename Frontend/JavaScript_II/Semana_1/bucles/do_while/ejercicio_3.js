// El programa debe generar un número aleatorio entre 1 y 10. Luego, pide al usuario que lo
// adivine hasta que lo haga correctamente.

function adivinarNumero() {
  // Math.random() => genera un número entre 0 y 1 (0.0...0.999...)
  // Math.floor => 1 a 10

  let numeroSecreto = Math.floor(Math.random() * 10) + 1

  console.log('Número generado: ', numeroSecreto)

  let numeroUsuario

  do {
    numeroUsuario = Number(prompt('Adivina el número entre 1 y 10: '))

    if (numeroUsuario < numeroSecreto) {
      alert('Número muy bajo, intenta nuevamente.')
    } else if (numeroUsuario > numeroSecreto) {
      alert('Número muy alto, intenta nuevamente.')
    }
  } while (numeroUsuario != numeroSecreto)

  console.log('Adivinaste, el número secreto era: ', numeroSecreto)
}

adivinarNumero()
