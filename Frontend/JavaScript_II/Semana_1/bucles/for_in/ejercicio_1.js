// Dado un objeto con varias propiedades, cuenta cuántas veces aparece la propiedad nombre.

// const persona = {
//     nombre: 'Juan',
//     apellido: 'Pérez',
//     edad: 30,
//     nombre: 'Carlos',
//     ciudad: 'Lima',
//     nombre: 'Laura’
// };

const persona = {
  nombre: 'Juan',
  apellido: 'Pérez',
  edad: 30,
  ciudad: 'Tangamandapio',
  nombre: 'Pepe',
  nombre: 'Lucho',
}

// Object.keys(persona)

let contador = 0

for (const propiedad in persona) {
  if (propiedad === 'nombre') {
    contador++
  }
}

console.log('La palabra "nombre" apareció: ', contador, 'veces')
