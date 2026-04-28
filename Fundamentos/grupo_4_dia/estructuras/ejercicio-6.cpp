// Crea una estructura Libro que contenga el título, el autor, el año de publicación y
// el número de páginas de un libro. Implementa un programa que permita ingresar la
// información de varios libros y luego muestre los libros que tienen más de 300 páginas
// y que fueron publicados después del año 2000.

#include <iostream>

using namespace std;

struct Libro {
    string titulo;
    string autor;
    int anio;
    int paginas;
};

void llenarLibros(Libro libros[], int cantidadLibros) {

    for(int i = 0; i < cantidadLibros; i++){
      cout<<"\nLibro "<<i + 1<<": "<<endl;

      cout<<"Título: ";
      getline(cin, libros[i].titulo);

      cout<<"Autor: ";
      getline(cin, libros[i].autor);

      cout<<"Año de publicación: ";
      cin>>libros[i].anio;

      cout<<"Número de páginas: ";
      cin>>libros[i].paginas;

      cin.ignore();
    }
}

void mostrarLibro(Libro l) {

    cout<<"\nTítulo: "<<l.titulo<<endl;
    cout<<"Autor: "<<l.autor<<endl;
    cout<<"Año de publicación: "<<l.anio<<endl;
    cout<<"Páginas: "<<l.paginas<<endl;
}

void mostrarLibrosFiltrados(Libro libros[], int cantidadLibros) {

    bool encontrado = false;

    cout<<"\nLIBROS ENCONTRADOS: "<<endl;

    for(int i = 0; i < cantidadLibros; i++){
        if(libros[i].paginas > 300 && libros[i].anio > 2000){
            mostrarLibro(libros[i]);
            encontrado = true;
        }
    }

    if(!encontrado){
      cout<<"No se encontró ningún libro que cumpla la condición."<<endl;
    }
}

int main() {

    int cantidadLibros;

    cout<<"Ingresa la cantidad de libros: ";
    cin>>cantidadLibros;
    cin.ignore();

    Libro libros[20];

    llenarLibros(libros, cantidadLibros);

    mostrarLibrosFiltrados(libros, cantidadLibros);

    return 0;
}
