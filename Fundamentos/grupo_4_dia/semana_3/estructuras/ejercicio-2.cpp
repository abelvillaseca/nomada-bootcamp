// Crear una estructura Libro para almacenar el título, autor y año de publicación.
// Después, crear una función que reciba un objeto de tipo Libro y muestre los datos del libro.

#include <iostream>

using namespace std;

struct Libro {
    string titulo;
    string autor;
    int anio;
};

void llenarLibro(Libro &l) {

    cout<<"Ingresa el título del libro: ";
    getline(cin, l.titulo);

    cout<<"Ingresa el autor del libro: ";
    getline(cin, l.autor);

    cout<<"Ingresa el año de publicación del libro: ";
    cin>>l.anio;

    cin.ignore();
}

void mostrarLibro(Libro l) {

    cout<<"DATOS DEL LIBRO: "<<endl;

    cout<<"Título: "<<l.titulo<<endl;
    cout<<"Autor: "<<l.autor<<endl;
    cout<<"Año de publicación: "<<l.anio<<endl;
}

int main() {

    Libro lib;

    llenarLibro(lib);
    mostrarLibro(lib);

    return 0;
}
