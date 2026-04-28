// Crea una estructura Contacto que contenga el nombre, el número de teléfono y
// el correo electrónico de una persona. Escribe un programa que permita ingresar
// la información de varios contactos y luego buscar un contacto por nombre.

#include <iostream>

using namespace std;

struct Contacto {
    string nombre;
    string telefono;
    string correo;
};

void llenarContactos(Contacto contactos[], int cantidadContactos) {

    for(int i = 0; i < cantidadContactos; i++){
      cout<<"\nContacto "<<i + 1<<": "<<endl;

      cout<<"Nombre: ";
      getline(cin, contactos[i].nombre);

      cout<<"Teléfono: ";
      getline(cin, contactos[i].telefono);

      cout<<"Correo: ";
      getline(cin, contactos[i].correo);
    }
}

int buscarContacto(Contacto contactos[], int cantidadContactos, string nombreBuscado) {

    for(int i = 0; i < cantidadContactos; i++){
        if(contactos[i].nombre == nombreBuscado){
            return i;
        }
    }

    return -1;
}

void mostrarContacto(Contacto c) {

    cout<<"\nCONTACTO ENCONTRADO: "<<endl;
    cout<<"Nombre: "<<c.nombre<<endl;
    cout<<"Teléfono: "<<c.telefono<<endl;
    cout<<"Correo: "<<c.correo<<endl;
}

int main() {

    int cantidadContactos;

    cout<<"Ingresa la cantidad de contactos: ";
    cin>>cantidadContactos;
    cin.ignore();

    Contacto contactos[20];

    llenarContactos(contactos, cantidadContactos);

    string nombreBuscado;
    cout<<"\nIngresa el nombre a buscar: ";
    getline(cin, nombreBuscado);

    int posicion = buscarContacto(contactos, cantidadContactos, nombreBuscado);

    if(posicion != -1){
        mostrarContacto(contactos[posicion]);
    }else{
        cout<<"Contacto no encontrado."<<endl;
    }

    return 0;
}
