// Dado un array de nombres, utiliza forEach para crear un nuevo array con los nombres formateados
// en formato "Nombre Apellido" (solo con el primer nombre y apellido).

const nombres = ['juan perez', 'ana garcia', 'carlos lopez']

// split('')
// 'juan perez'.split(" ") => ['juan', 'perez']

// let palabra = 'juan'
// let capitalizado = palabra.charAt(0).toUpperCase() + palabra.slice(1)

let nombresFormateados = []

nombres.forEach(function (nombreCompleto) {
  let partes = nombreCompleto.split(' ')
  // partes = ['juan', 'perez']
  let nombre = partes[0]
  let apellido = partes[1]

  let nombreCapitalizado = nombre.charAt(0).toUpperCase() + nombre.slice(1)

  let apellidoCapitalizado =
    apellido.charAt(0).toUpperCase() + apellido.slice(1)

  let nombreFinal = nombreCapitalizado + ' ' + apellidoCapitalizado

  nombresFormateados.push(nombreFinal)
})

console.log('Nombres formateados: ', nombresFormateados)

// trim()
// split()
