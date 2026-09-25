// Crea una clase Libro y otra Biblioteca. La Biblioteca debe contener una lista de Libro y permitir agregarlos.

class Libro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }

  mostrarInformacion() {
    return `${this.titulo} - ${this.autor}`;
  }
}

class Biblioteca {
  constructor() {
    this.libros = [];
  }

  agregarLibro(libro) {
    this.libros.push(libro);
  }

  listarLibros() {
    for (const libro of this.libros) {
      console.log(libro.mostrarInformacion());
    }
  }
}

const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez");
const libro2 = new Libro("El Principito", "Antoine de Saint-Exupéry");

const biblioteca = new Biblioteca();

biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.listarLibros();
