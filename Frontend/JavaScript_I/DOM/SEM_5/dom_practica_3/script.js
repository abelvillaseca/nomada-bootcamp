const peliculas = [
  {
    id: 1,
    titulo: "Interstellar",
    genero: "Ciencia ficción",
    duracion: 169,
    precio: 18,
    disponible: true,
  },
  {
    id: 2,
    titulo: "El viaje de Chihiro",
    genero: "Animación",
    duracion: 125,
    precio: 15,
    disponible: true,
  },
  {
    id: 3,
    titulo: "Spider-Man: Across the Spider-Verse",
    genero: "Acción",
    duracion: 140,
    precio: 17,
    disponible: true,
  },
];

let reservas = [];

const formReserva = document.getElementById("formReserva");
const nombreInput = document.getElementById("nombre");
