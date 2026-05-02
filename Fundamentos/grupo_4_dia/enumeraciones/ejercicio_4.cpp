// Crea un programa en C++ que use un enum class llamado Transporte, que represente
// diferentes tipos de transporte: Automovil, Bicicleta, Avion, Tren, Barco.
// El programa debe permitir al usuario seleccionar un tipo de transporte ingresando un número
// del 1 al 5. Luego, debes mostrar un mensaje indicando el transporte seleccionado y si ese
// transporte es considerado rápido o lento.

// - Automovil y Avion deben ser considerados rápidos.
// - Bicicleta, Tren, y Barco deben ser considerados lentos.

#include <iostream>

using namespace std;

enum class Transporte {
    AUTOMOVIL = 1,
    BICICLETA,
    AVION,
    TREN,
    BARCO
};

string obtenerNombre(Transporte t) {
  switch(t) {
    case Transporte::AUTOMOVIL: return "Automóvil";
    case Transporte::BICICLETA: return "Bicicleta";
    case Transporte::AVION: return "Avión";
    case Transporte::TREN: return "Tren";
    case Transporte::BARCO: return "Barco";
    default: return "Desconocido";
  }
}

void evaluarVelocidad(Transporte t) {
    if(t == Transporte::AUTOMOVIL || t == Transporte::AVION){
      cout<<"Este transporte es RÁPIDO."<<endl;
    }else {
      cout<<"Este transporte es LENTO."<<endl;
    }
}

int main() {

    int opcion;

    cout<<"Selecciona un tipo de transporte: "<<endl;
    cout<<"1. Automóvil"<<endl;
    cout<<"2. Bicicleta"<<endl;
    cout<<"3. Avión"<<endl;
    cout<<"4. Tren"<<endl;
    cout<<"5. Barco"<<endl;
    cout<<"Ingresa la opción: ";
    cin>>opcion;

    if(opcion >= 1 && opcion <= 5) {
      Transporte t = static_cast<Transporte>(opcion); // 1

      string nombre = obtenerNombre(t); // nombre = Automóvil

      cout<<"Transporte seleccionado: "<<nombre<<endl;

      evaluarVelocidad(t);
    }else {
      cout<<"Opción inválida."<<endl;
    }

    return 0;
}
