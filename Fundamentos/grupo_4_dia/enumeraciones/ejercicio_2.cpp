// Escribe un programa que utilice un enum class para representar los días de la semana.
// El usuario deberá ingresar un número del 1 al 7 para seleccionar un día. El programa deberá
// mostrar el nombre del día correspondiente y si es un día laboral o un día de fin de semana.
// Usa funciones para manejar la lógica.

// :: => operador de alcance

#include <iostream>

using namespace std;

enum class DiaSemana {
    LUNES = 1,
    MARTES,
    MIERCOLES,
    JUEVES,
    VIERNES,
    SABADO,
    DOMINGO
};

void mostrarDia(DiaSemana dia) {
    switch(dia) {
      case DiaSemana::LUNES:
          cout<<"Día: Lunes"<<endl;
          break;
      case DiaSemana::MARTES:
          cout<<"Día: Martes"<<endl;
          break;
      case DiaSemana::MIERCOLES:
          cout<<"Día: Miércoles"<<endl;
          break;
      case DiaSemana::JUEVES:
          cout<<"Día: jueves"<<endl;
          break;
      case DiaSemana::VIERNES:
          cout<<"Día: Viernes"<<endl;
          break;
      case DiaSemana::SABADO:
          cout<<"Día: Sábado"<<endl;
          break;
      case DiaSemana::DOMINGO:
          cout<<"Día: Domingo"<<endl;
          break;
    }
}

void tipoDia(DiaSemana dia) {
    if(dia == DiaSemana::SABADO || dia == DiaSemana::DOMINGO) {
      cout<<"Es fin de semana."<<endl;
    }else {
      cout<<"Es día laboral."<<endl;
    }
}

int main() {

    int numero;

    cout<<"Selecciona un día de la semana: "<<endl;
    cout<<"1. Lunes"<<endl;
    cout<<"2. Martes"<<endl;
    cout<<"3. Miércoles"<<endl;
    cout<<"4. Jueves"<<endl;
    cout<<"5. Viernes"<<endl;
    cout<<"6. Sábado"<<endl;
    cout<<"7. Domingo"<<endl;
    cout<<"Ingresa un número (1 - 7): ";
    cin>>numero;

    if(numero >= 1 && numero <= 7) {
      DiaSemana dia = static_cast<DiaSemana>(numero);

      mostrarDia(dia);
      tipoDia(dia);
    }else {
      cout<<"Número inválido."<<endl;
    }

    return 0;
}
