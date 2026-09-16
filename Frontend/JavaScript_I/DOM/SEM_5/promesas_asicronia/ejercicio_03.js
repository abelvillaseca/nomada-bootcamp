// Crea una función asíncrona llamada obtenerDatosUsuario que reciba un ID de usuario como argumento. La función debe realizar dos llamadas a la API de JSONPlaceholder: La primera para obtener los datos del usuario (https://jsonplaceholder.typicode.com/users/{id}). La segunda para obtener las publicaciones del usuario (https://jsonplaceholder.typicode.com/posts?userId={id}). Muestra el nombre del usuario y la cantidad de publicaciones en la consola. Maneja los posibles errores.

async function obtenerDatosUsuario(id) {
  try {
    // id = 1
    // https://jsonplaceholder.typicode.com/users/1
    const urlUsuario = `https://jsonplaceholder.typicode.com/users/${id}`;
    const respuestaUsuario = await fetch(urlUsuario);

    if (!respuestaUsuario.ok) {
      throw new Error(
        `Error al obtener el usuario: ${respuestaUsuario.status}`,
      );
    }

    const usuario = await respuestaUsuario.json();

    const urlPublicaciones = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
    const respuestaPublicaciones = await fetch(urlPublicaciones);

    if (!respuestaPublicaciones.ok) {
      throw new Error(
        `Error al obtener las publicaciones: ${respuestaPublicaciones.status}`,
      );
    }

    const publicaciones = await respuestaPublicaciones.json();

    console.log("Nombre del usuario: ", usuario.name);
    console.log("Cantidad de publicaciones: ", publicaciones.length);
  } catch (error) {
    console.error("Ocurrió un error: ", error);
  }
}

obtenerDatosUsuario(3);
