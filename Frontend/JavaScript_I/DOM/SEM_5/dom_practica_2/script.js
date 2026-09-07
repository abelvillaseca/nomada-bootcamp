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
