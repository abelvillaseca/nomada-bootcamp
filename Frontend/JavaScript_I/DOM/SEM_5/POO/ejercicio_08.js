// Crea una clase Usuario que muestre el nombre y la edad de una persona en una tarjeta dentro de la página web.

class Usuario {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  crearTarjeta() {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta");

    const titulo = document.createElement("h2");
    titulo.textContent = this.nombre;

    const edad = document.createElement("p");
    edad.textContent = `Edad: ${this.edad} años`;

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(edad);

    return tarjeta;
  }
}

const contenedorUsuarios = document.querySelector("#usuarios");

const usuario1 = new Usuario("Abel", 33);
const usuario2 = new Usuario("Juanita", 99);
const usuario3 = new Usuario("Carlos", 19);

contenedorUsuarios.appendChild(usuario1.crearTarjeta());
contenedorUsuarios.appendChild(usuario2.crearTarjeta());
contenedorUsuarios.appendChild(usuario3.crearTarjeta());
