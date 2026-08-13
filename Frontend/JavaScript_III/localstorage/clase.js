const usuario = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid',
}

localStorage.setItem('usuario', JSON.stringify(usuario))

const usuario = localStorage.getItem('usuario')

if (usuario !== null) {
    console.log('Existe un usuario en el localStorage')
}
