// Crea una función asíncrona llamada obtenerMultiplesUsuarios que reciba un arreglo de IDs de usuario como argumento. La función debe realizar una llamada a la API de JSONPlaceholder para cada ID de usuario. Utiliza Promise.all para esperar a que todas las llamadas se completen. Muestra los nombres de todos los usuarios en la consola.

// 1. Crear una petición fetch() para cada ID
// 2. Utilizar Promise.all() para esperar todas las peticiones y luego mostrar los nombres

async function obtenerMultiplesUsuarios(ids) {
  try {
    const promesas = ids.map(async (id) => {
      // si id = 3
      // https://jsonplaceholder.typicode.com/users/3
      const url = `https://jsonplaceholder.typicode.com/users/${id}`;
      const respuesta = await fetch(url);

      if (!respuesta.ok) {
        throw new Error(
          `Error al obtener el usuario ${id}: ${respuesta.status}`,
        );
      }

      const usuario = await respuesta.json();

      return usuario;

      // [ Promise, Promise, Promise]
    });

    const usuarios = await Promise.all(promesas);

    usuarios.forEach((usuario) => {
      console.log(usuario.name);
    });
  } catch (error) {
    console.error("Ocurrió un error: ", error.message);
  }
}

const idsUsuarios = [1, 2, 3, 4, 5];

obtenerMultiplesUsuarios(idsUsuarios);
