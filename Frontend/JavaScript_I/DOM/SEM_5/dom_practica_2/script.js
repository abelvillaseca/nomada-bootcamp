// Crea un campo de texto donde el usuario pueda escribir. Debajo, muestra cuántos caracteres ha escrito en tiempo real utilizando textContent​
const texto = document.getElementById("texto");
const contador = document.getElementById("contador");

texto.addEventListener("input", () => {
  const contenido = texto.value;
  const cantidad = contenido.length;
  contador.textContent = `${cantidad} caracteres`;
});
