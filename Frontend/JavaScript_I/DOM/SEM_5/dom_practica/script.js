const botonColorTitulo = document.getElementById("btnColorTitulo");

botonColorTitulo.addEventListener("click", function () {
  const titulo = document.getElementsByClassName("titulo");
  const primerTitulo = titulo[0];
  primerTitulo.style.color = "red";
});

const elemento = document.querySelector(".elementoDestacado");

elemento.addEventListener("click", function () {
  elemento.style.backgroundColor = "yellow";
});

const enlaces = document.querySelectorAll("a");

enlaces.forEach(function (enlace) {
  console.log(enlace.href);
});
