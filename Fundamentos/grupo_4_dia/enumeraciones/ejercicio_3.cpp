// Desarrolla un programa que permita al usuario seleccionar un color primario del
// modelo RGB (Rojo, Verde, Azul) usando un enum. Luego, crea una función que muestre
// la combinación del color primario seleccionado con otro color secundario ingresado por el usuario.

// COLORES PRIMARIOS:
// ROJO
// VERDE
// AZUL

// COLORES SECUNDARIOS:
// CIAN (VERDE + AZUL)
// MAGENTA (ROJO + AZUL)
// AMARILLO (ROJO + VERDE)

#include <iostream>

using namespace std;

enum ColorPrimario {
    ROJO = 1,
    VERDE,
    AZUL
};

string obtenerNombrePrimario(ColorPrimario color) {

    switch(color) {
      case 1: return "Rojo";
      case 2: return "Verde";
      case 3: return "Azul";
      default: return "Desconocido";
    }
}

string obtenerNombreSecundario(int opcion) {

    switch(opcion) {
      case 1: return "Cian";
      case 2: return "Magenta";
      case 3: return "Amarillo";
      default: return "Desconocido";
    }
}

void combinarColores(ColorPrimario primario, int secundario) {
    string nombrePrimario = obtenerNombrePrimario(primario);
    string nombreSecundario = obtenerNombreSecundario(secundario);

    if(nombreSecundario == "Desconocido") {
      cout<<"Color secundario inválido."<<endl;
      return;
    }

    cout<<"Color primario elegido: "<<nombrePrimario<<endl;
    cout<<"Color secundario elegido: "<<nombreSecundario<<endl;

    cout<<"Combinación: "<<nombrePrimario<<" + "<<nombreSecundario<<endl;

    cout<<"Detalle de la mezcla: "<<endl;

    if(nombreSecundario == "Cian") {
      cout<<"Cian = Verde + Azul"<<endl;
    }else if(nombreSecundario == "Magenta") {
      cout<<"Magenta = Rojo + Azul"<<endl;
    }else if(nombreSecundario == "Amarillo") {
      cout<<"Amarillo = Rojo + Verde"<<endl;
    }
}

int main() {

    int opcionPrimario, opcionSecundario;

    cout<<"Selecciona un color primario: "<<endl;
    cout<<"1. Rojo"<<endl;
    cout<<"2. Verde"<<endl;
    cout<<"3. Azul"<<endl;
    cout<<"Ingresa la opción: ";
    cin>>opcionPrimario;

    cout<<"Selecciona un color secundario: "<<endl;
    cout<<"1. Cian"<<endl;
    cout<<"2. Magenta"<<endl;
    cout<<"3. Amarillo"<<endl;
    cout<<"Ingresa la opción: ";
    cin>>opcionSecundario;

    if(opcionPrimario < 1 || opcionPrimario > 3) {
      cout<<"Color primario inválido."<<endl;
      return 0;
    }

    ColorPrimario primario = (ColorPrimario)opcionPrimario;

    combinarColores(primario, opcionSecundario);

    return 0;
}
