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
const peliculaSelect = document.getElementById("pelicula");
const cantidadInput = document.getElementById("cantidad");
const listaReservas = document.getElementById("listaReservas");
const listaPeliculas = document.getElementById("listaPeliculas");
const totalReservas = document.getElementById("totalReservas");
const totalEntradas = document.getElementById("totalEntradas");
const recaudacion = document.getElementById("recaudacion");
const estadoReservas = document.getElementById("estadoReservas");
const mensajeResumen = document.getElementById("mensajeResumen");

function cargarPeliculas() {
  peliculaSelect.innerHTML = `
    <option value="">
      Selecciona una película
    </option>
  `;

  peliculas.forEach((pelicula) => {
    peliculaSelect.innerHTML += `
      <option value="${pelicula.id}">
        ${pelicula.titulo}
      </option>
    `;
  });
}

function mostrarPeliculas() {
  const tarjetasPeliculas = peliculas.map((pelicula) => {
    const estado = pelicula.disponible ? "Disponible" : "Agotada";

    return `
      <article class="movie">
        <h3>${pelicula.titulo}</h3>
        <p>${pelicula.genero}</p>
        <p>${pelicula.duracion} minutos</p>
        <p>${estado}</p>
        <div class="movie-price">
          S/ ${pelicula.precio.toFixed(2)}
        </div>
      </article>
    `;
  });

  listaPeliculas.innerHTML = tarjetasPeliculas.join("");
}

function buscarPelicula(id) {
  return peliculas.find((pelicula) => {
    return pelicula.id === Number(id);
  });
}

function registrarReserva(event) {
  event.preventDefault();

  const nombre = nombreInput.value.trim();
  const peliculaId = peliculaSelect.value;
  const cantidad = Number(cantidadInput.value);

  if (nombre === "") {
    alert("Ingresa el nombre del cliente.");
    return;
  }

  if (peliculaId === "") {
    alert("Selecciona una película.");
    return;
  }

  if (cantidad <= 0) {
    alert("La cantidad debe ser mayor a cero.");
    return;
  }

  const pelicula = buscarPelicula(peliculaId);

  if (!pelicula) {
    alert("La película no existe.");
    return;
  }

  const total = pelicula.precio * cantidad;

  const nuevaReserva = {
    id: Date.now(),
    cliente: nombre,
    pelicula: pelicula.titulo,
    peliculaId: pelicula.id,
    cantidad: cantidad,
    total: total,
  };

  reservas.push(nuevaReserva);

  mostrarReservas();
  actualizarEstadisticas();
  actualizarResumen();

  nombreInput.value = "";
  peliculaSelect.value = "";
  cantidadInput.value = 1;
}

cargarPeliculas();
mostrarPeliculas();
