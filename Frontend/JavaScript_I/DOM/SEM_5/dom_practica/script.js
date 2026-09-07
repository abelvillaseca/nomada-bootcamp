const botonColorTitulo = document.getElementById("btnColorTitulo");

botonColorTitulo.addEventListener("click", function () {
  const titulo = document.getElementsByClassName("titulo");
  const primerTitulo = titulo[0];
  primerTitulo.style.color = "red";
});
