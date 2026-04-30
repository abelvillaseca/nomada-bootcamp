// Crea una union que permita almacenar un char o un int, que permita evidenciar
// cómo cambiar el valor almacenado afecta al contenido de la union.

#include <iostream>

using namespace std;

union Dato
{
    int numero; // 4 bytes
    char letra; // 1 byte
};

void ingresarEntero(Dato &d) {
    cout<<"Ingresa un número entero: ";
    cin>>d.numero;
}

void ingresarChar(Dato &d) {
    cout<<"Ingresa una letra: ";
    cin>>d.letra;
}

void mostrar(Dato d) {
    cout<<"\n=== Estado actual de la unión: ==="<<endl;
    cout<<"Como entero: "<<d.numero<<endl;
    cout<<"Como caracter: "<<d.letra<<endl;
}

int main() {

    Dato d;

    int opcion;

    cout<<"=== MENÚ ==="<<endl;
    cout<<"1. Ingresar un entero"<<endl;
    cout<<"2. Ingresar un caracter"<<endl;
    cout<<"Seleccione una opción: ";
    cin>>opcion;

    if(opcion == 1){
      ingresarEntero(d);
      mostrar(d);
    }else if(opcion == 2){
      ingresarChar(d);
      mostrar(d);

      cout<<"\nAhora cambiaremos a entero..."<<endl;
      ingresarEntero(d);
      mostrar(d);
    }else{
      cout<<"Opción inválida."<<endl;
    }

    return 0;
}

// Binario 01000001 => 'A'

// 00000000 00000000 00000000 01000001
