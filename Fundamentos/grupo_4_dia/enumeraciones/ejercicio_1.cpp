// Crea un programa que permita a un usuario elegir el tamaño de una pizza usando un enum.
// Los tamaños disponibles son Pequeña, Mediana, y Grande. Crea una función que reciba el
// tamaño seleccionado y muestre el precio correspondiente.

// P => 10
// M => 20
// G => 30

#include <iostream>

using namespace std;

enum TamPizza {
    PEQUENA = 1,
    MEDIANA,
    GRANDE
};

void mostrarPrecio(TamPizza tamano) {
    if(tamano == PEQUENA) {
      cout<<"Has elegido una pizza pequeña."<<endl;
      cout<<"Precio: S/. 10.00"<<endl;
    }else if(tamano == MEDIANA) {
      cout<<"Has elegido una pizza mediana."<<endl;
      cout<<"Precio: S/. 20.00"<<endl;
    }else if(tamano == GRANDE) {
      cout<<"Has elegido una pizza grande."<<endl;
      cout<<"Precio: S/. 30.00"<<endl;
    }else {
      cout<<"Opción inválida."<<endl;
    }
}

int main() {

    int opcion;

    cout<<"Selecciona el tamaño de pizza: "<<endl;
    cout<<"1. Pequeña"<<endl;
    cout<<"2. Mediana"<<endl;
    cout<<"3. Grande"<<endl;
    cout<<"Selecciona una opción: ";
    cin>>opcion;

    TamPizza tamano = (TamPizza)opcion; // CASTEO

    mostrarPrecio(tamano);

    return 0;
}
