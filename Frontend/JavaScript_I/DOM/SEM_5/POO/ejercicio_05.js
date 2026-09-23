// Crea una clase Persona y otra Direccion. Haz que una Persona pueda tener una Direccion asociada.

class Direccion {
  constructor(calle, ciudad, pais) {
    this.calle = calle;
    this.ciudad = ciudad;
    this.pais = pais;
  }

  mostrarDireccion() {
    return `${this.calle}, ${this.ciudad}, ${this.pais}`;
  }
}

class Persona {
  constructor(nombre, direccion) {
    this.nombre = nombre;
    this.direccion = direccion;
  }

  mostrarInformacion() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Dirección: ${this.direccion.mostrarDireccion()}`);
  }
}

const direccion = new Direccion(
  "Av. Mártires de Uchuracay",
  "Cajamarca",
  "Perú",
);

const persona = new Persona("Edgard", direccion);

persona.mostrarInformacion();
