const idsInvestigadores = [1, 2, 3, 4, 5];

let investigadores = [];

let seguimiento = [];

let colaExpediciones = [
  "Expedición Amazonas",
  "Expedición Andes",
  "Expedición Pacífico",
];

let historialExpediciones = [];

const listaInvestigadores = document.querySelector("#lista-investigadores");
const buscador = document.querySelector("#buscador");
const estado = document.querySelector("#estado");
const cantidadResultados = document.querySelector("#cantidad-resultados");
const investigadorSeleccionado = document.querySelector(
  "#investigador-seleccionado",
);
const listaSeguimiento = document.querySelector("#lista-seguimiento");
const totalInvestigadores = document.querySelector("total-investigadores");
const totalReportes = document.querySelector("#total-reportes");
const promedioReportes = document.querySelector("#promedio-reportes");
const totalSeguimiento = document.querySelector("#total-seguimiento");
const expedicionInput = document.querySelector("#expedicion");
const agregarExpedicion = document.querySelector("#agregar-expedicion");
const procesarExpedicion = document.querySelector("#procesar-expedicion");
const eliminarHistorial = document.querySelector("#eliminar-historial");
const colaInfo = document.querySelector("#cola-info");
const historialInfo = document.querySelector("#historial-info");
const resumenCiudades = document.querySelector("#resumen-ciudades");
const primerosInvestigadores = document.querySelector(
  "#primeros-investigadores",
);

async function obtenerInvestigador(id) {
  try {
    const urlUsuario = `https://jsonplaceholder.typicode.com/users/${id}`;
    const urlPosts = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

    const respuestaUsuario = await fetch(urlUsuario);

    if (!respuestaUsuario.ok) {
      throw new Error(
        `Error HTTP al obtener usuario ${id}: ${respuestaUsuario.status}`,
      );
    }

    const usuario = await respuestaUsuario.json();

    const respuestaPosts = await fetch(urlPosts);

    if (!respuestaPosts.ok) {
      throw new Error(
        `Error HTTP al obtener posts del usuario ${id}: ${respuestaPosts.status}`,
      );
    }

    const posts = await respuestaPosts.json();

    return {
      id: usuario.id,
      nombre: usuario.name,
      email: usuario.email,
      ciudad: usuario.address.city,
      reportes: posts.length,
      activo: true,
    };
  } catch (error) {
    throw error;
  }
}

async function cargarInvestigadores() {
  try {
    estado.textContent = "Consultando investigadores...";

    const promesas = idsInvestigadores.map((id) => {
      return obtenerInvestigador(id);
    });

    investigadores = await Promise.all(promesas);

    estado.textContent = "Investigadores cargados correctamente.";

    mostrarInvestigadores(investigadores);
    // actualizarEstadisticas();
    // mostrarInformacionAdicional();
  } catch (error) {
    estado.textContent = `No fue posible cargar los investigadores: ${error.message}`;
    console.error(error);
  }
}

function mostrarInvestigadores(lista) {
  listaInvestigadores.innerHTML = "";

  cantidadResultados.textContent = `${lista.length} resultados`;

  lista.forEach((investigador) => {
    const tarjeta = document.createElement("article");

    tarjeta.classList.add("card");

    tarjeta.innerHTML = `

      <h3>${investigador.nombre}</h3>
      <p>
        <strong>Email: </strong>
        ${investigador.email}
      </p>
      <p>
        <strong>Ciudad: </strong>
        ${investigador.ciudad}
      </p>
      <p>
        <strong>Reportes: </strong>
        ${investigador.reportes}
      </p>
      <p>
        <strong>Estado: </strong>
        ${investigador.activo ? "Activo" : "Inactivo"}
      </p>
      <div class="card-actions">
        <button class="btn-seleccionar">Seleccionar</button>
        <button class="btn-seguimiento">Seguimiento</button>
      </div>
    `;

    const botonSeleccionar = tarjeta.querySelector(".btn-seleccionar");

    botonSeleccionar.addEventListener("click", () => {
      seleccionarInvestigador(investigador.id);
    });

    const botonSeguimiento = tarjeta.querySelector(".btn-seguimiento");

    botonSeguimiento.addEventListener("click", () => {
      agregarSeguimiento(investigador.id);
    });

    listaInvestigadores.append(tarjeta);
  });
}

buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();

  const resultados = investigadores.filter((investigador) => {
    return investigador.nombre.toLowerCase().includes(texto);
  });

  mostrarInvestigadores(resultados);
});

function seleccionarInvestigador(id) {
  const indice = investigadores.findIndex((investigador) => {
    return investigador.id === id;
  });

  if (indice === -1) {
    return;
  }

  investigadores[indice].activo = true;

  investigadorSeleccionado.textContent = investigadores[indice].nombre;

  mostrarInvestigadores(investigadores);
}

cargarInvestigadores();
