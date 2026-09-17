// Crea una función que haga una solicitud a la API https://jsonplaceholder.typicode.com/posts y muestre los primeros 5 títulos de los posts en consola. Implementa el manejo de errores.

async function obtenerPrimerosPosts() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const respuesta = await fetch(url); // GET

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    } // 400 404 500

    const posts = await respuesta.json();

    const primerosPosts = posts.slice(0, 5); // 0, 1, 2, 3, 4

    const titulos = primerosPosts.map((post) => {
      return post.title;
    });

    console.log("Primeros 5 títulos: ");

    titulos.forEach((titulo, indice) => {
      console.log(`${indice + 1}. ${titulo}`);
    });
  } catch (error) {
    console.error("Ocurrió un error: ", error);
  }
}

obtenerPrimerosPosts();
