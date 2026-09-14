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

function mostrarReservas() {
  if (reservas.length === 0) {
    listaReservas.innerHTML = `
      <p class="empty">
        Todavía no existen reservas.
      </p>
    `;
    return;
  }

  const htmlReservas = reservas.map((reserva) => {
    return `
      <article class="reserva" data-id="${reserva.id}">
        <div class="reserva-info">
          <h3>${reserva.cliente}</h3>
          <p>
            ${reserva.pelicula}
            |
            ${reserva.cantidad}
            entrada(s)
          </p>
        </div>

        <div class="reserva-price">
          <strong>
            S/ ${reserva.total.toFixed(2)}
          </strong>

          <button class="delete-button" data-id="${reserva.id}">Eliminar</button>
        </div>
      </article>
    `;
  });

  listaReservas.innerHTML = htmlReservas.join("");

  const botonesEliminar = listaReservas.querySelectorAll(".delete-button");

  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarReserva);
  });

  estadoReservas.textContent = `${reservas.length} reserva(s)`;
  estadoReservas.classList.add("active");
}

function eliminarReserva(event) {
  const boton = event.target;

  const id = Number(boton.getAttribute("data-id"));

  const indice = reservas.findIndex((reserva) => {
    return reserva.id === id;
  });

  if (indice === -1) {
    return;
  }

  reservas.splice(indice, 1);

  mostrarReservas();
  actualizarEstadisticas();
  actualizarResumen();
}

function actualizarEstadisticas() {
  totalReservas.textContent = reservas.length;

  const entradas = reservas.reduce((total, reserva) => {
    return total + reserva.cantidad;
  }, 0);

  totalEntradas.textContent = entradas;

  const dinero = reservas.reduce((total, reserva) => {
    return total + reserva.total;
  }, 0);

  recaudacion.textContent = `S/ ${dinero.toFixed(2)}`;
}

function actualizarResumen() {
  if (reservas.length === 0) {
    mensajeResumen.textContent = "Aún no existen reservas.";
    return;
  }

  const entradas = reservas.reduce((total, reserva) => {
    return total + reserva.cantidad;
  }, 0);

  const dinero = reservas.reduce((total, reserva) => {
    return total + reserva.total;
  }, 0);

  const cantidadesPorPelicula = reservas.reduce((resultado, reserva) => {
    if (!resultado[reserva.pelicula]) {
      resultado[reserva.pelicula] = 0;
    }

    resultado[reserva.pelicula] += reserva.cantidad;

    return resultado;
  }, {});

  const ranking = Object.entries(cantidadesPorPelicula);

  const peliculaMasReservada = ranking.reduce((mayor, actual) => {
    return actual[1] > mayor[1] ? actual : mayor;
  });
}

cargarPeliculas();
mostrarPeliculas();
