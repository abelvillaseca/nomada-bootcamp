// Proyecto integrador: un objeto biblioteca que gestione una colección de libros (arreglo de objetos) con métodos que usen this.

// Requerimientos

// Objeto biblioteca con propiedad libros (arreglo de objetos { titulo, autor, disponible }).
// Método agregar(libro) que use push sobre this.libros.
// Método prestar(titulo) que busque el libro y ponga disponible en false.
// Método disponibles() que use filter y retorne solo los libros disponibles.
// Método listar() que recorra con forEach e imprima cada título y su estado.
// Datos ingresados por teclado

const readline = require("readline-sync");

let biblioteca = {
    libros: [],
    agregar: function (libro) {
        this.libros.push(libro);
    },
    prestar: function (titulo) {
        let libro = this.libros.find(
            function (libro) {
                return libro.titulo === titulo;
            }
        );

        if (libro) {
            if (libro.disponible) {
                libro.disponible = false;
                console.log("\nLibro prestado correctamente.");
            } else {
                console.log("\nEl libro ya fue prestado anteriormente.");
            }
        } else {
            console.log("\nLibro no encontrado.");
        }
    },
    disponibles: function () {
        return this.libros.filter(
            function (libro) {
                return libro.disponible;
            }
        );
    },
    listar: function () {
        this.libros.forEach(
            function (libro) {
                console.log(libro.titulo + " => " + (libro.disponible ? "Disponible" : "Prestado"));
            }
        );
    }
};

for (let i = 1; i <= 2; i++) {
    console.log("Libro " + i);

    let titulo = readline.question("Título: ");
    let autor = readline.question("Autor: ");

    let libro = {
        titulo: titulo,
        autor: autor,
        disponible: true
    };

    biblioteca.agregar(libro); // this.libros.push(libro)
}

biblioteca.listar();

let tituloBuscar = readline.question("\nIngresa el título del libro a prestar: ");

biblioteca.prestar(tituloBuscar);

biblioteca.listar();

console.log(biblioteca.disponibles());
