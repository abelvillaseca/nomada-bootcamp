// Crea una clase Contador que maneje la cantidad de veces que se presiona un botón en una página web.
// La cuenta debe actualizarse en pantalla cada vez que el botón sea presionado.

class Contador {
  constructor(elementoContador) {
    this.elementoContador = elementoContador;
    this.cantidad = 0;
  }

  incrementar() {
    this.cantidad++;
    this.actualizarPantalla();
  }

  actualizarPantalla() {
    this.elementoContador.textContent = this.cantidad;
  }
}

const elementoContador = document.querySelector("#contador");
const botonIncrementar = document.querySelector("#btn-incrementar");

const contador = new Contador(elementoContador);

botonIncrementar.addEventListener("click", () => {
  contador.incrementar();
});
