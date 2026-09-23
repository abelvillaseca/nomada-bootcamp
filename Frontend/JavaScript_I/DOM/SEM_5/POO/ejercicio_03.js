// Crea una clase Producto con propiedades privadas #nombre y #precio. Implementa getters y setters para acceder y modificar
// los valores, asegurando que el precio no sea negativo.

class Producto {
  #nombre;
  #precio;

  constructor(nombre, precio) {
    this.#nombre = nombre;
    this.precio = precio;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  get precio() {
    return this.#precio;
  }

  set precio(nuevoPrecio) {
    if (nuevoPrecio < 0) {
      throw new Error("El precio no puede ser negativo.");
    }
    this.#precio = nuevoPrecio;
  }
}

const producto = new Producto("Laptop", 3000);

console.log(producto.nombre);
console.log(producto.precio);

producto.nombre = "MacBook";

console.log(producto.nombre);

producto.precio = 5500;

console.log(producto.precio);

producto.precio = -500;

console.log(producto.precio);
