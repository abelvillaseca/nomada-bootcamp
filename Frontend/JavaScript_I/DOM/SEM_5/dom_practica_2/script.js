// Crea un campo de texto donde el usuario pueda escribir. Debajo, muestra cuántos caracteres ha escrito en tiempo real utilizando textContent​
const texto = document.getElementById("texto");
const contador = document.getElementById("contador");

texto.addEventListener("input", () => {
  const contenido = texto.value;
  const cantidad = contenido.length;
  contador.textContent = `${cantidad} caracteres`;
});

// Crea un botón que, al hacer clic, cambie el color de un texto dentro de un <p>. Usa innerHTML para modificar la etiqueta de manera dinámica.​
const botonColor = document.getElementById("btnColor");
const mensaje = document.getElementById("mensaje");

botonColor.addEventListener("click", () => {
  mensaje.innerHTML = `<span style="color: blue;">Este es un texto con color azul.</span>`;
});

// Crea un párrafo con un mensaje y un botón que lo reemplace por una imagen utilizando outerHTML.
const botonReemplazar = document.getElementById("btnReemplazar");
const mensajeImagen = document.getElementById("mensajeImagen");

botonReemplazar.addEventListener("click", function () {
  mensajeImagen.outerHTML = `
    <img
      class="imagen-reemplazo"
      src="https://elcomercio.pe/resizer/v2/KRKOINCP7JGR7KWT4HNBDSJPDA.jpg?auth=8a023522ad969a505c109d936b7e56d4948d7b7e88b9df5ec736e46b8db0d567&width=1200&height=800&quality=75&smart=true"
      alt="Imagen de Rick Sánchez"
    >
  `;
});
