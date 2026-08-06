// ALMACENAMIENTO

// localstorage.setItem('nombre', 'Juan')

// localstorage.setItem('edad', 30)

// console.log(typeof localstorage.getItem('edad'))

const usuario = {
    nombre: 'Juan',
    edad: 30,
}

localstorage.setItem('usuario', JSON.stringify(usuario))

const texto = localstorage.getItem('usuario')
const usuario = JSON.parse(texto)

// {
//     nombre: 'Juan',
// }

// [Object object]

// String(usuario)
// usuario.toString()

// API localStorage
// setItem()
// getItem()
// removeItem()
// clear()
// key()
// length
