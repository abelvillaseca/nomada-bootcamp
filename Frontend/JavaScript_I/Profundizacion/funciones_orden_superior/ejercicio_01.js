// Escribe una función que tome un array de objetos y el nombre de una propiedad como argumentos,
// y devuelva un nuevo array ordenado por el valor de esa propiedad. Utiliza el método sort( ).

// 1. un array de objetos
// 2. el nombre de la propiedad por la cual queremos ordenar

// [...objetos]

function ordenarPorPropiedad(objetos, propiedad) {
  const copia = [...objetos];

  copia.sort((a, b) => {
    // a[propiedad] => a["edad"]
    const valorA = a[propiedad];
    const valorB = b[propiedad];

    if (valorA < valorB) {
      return -1;
    }

    if (valorA > valorB) {
      return 1;
    }

    return 0;
  });

  return copia;
}

const usuarios = [
  { nombre: "Carlos", edad: 28 },
  { nombre: "Abel", edad: 33 },
  { nombre: "María", edad: 24 },
  { nombre: "Lucía", edad: 30 },
];

const usuariosPorEdad = ordenarPorPropiedad(usuarios, "nombre");

console.log(usuariosPorEdad);
