// Se tienen varias fechas y sus respectivas temperaturas. Busca una fecha y di cuál fue su temperatura

// string fecha => "2026-04-27"
// float temperatura

#include <iostream>

using namespace std;

struct Registro {
    string fecha;
    float temperatura;
};

void llenarRegistros(Registro registros[], int cantidadRegistros) {

    for(int i = 0; i < cantidadRegistros; i++){
      cout<<"\nRegistro "<<i + 1<<": "<<endl;

      cout<<"Fecha (DD-MM-AAAA): ";
      getline(cin, registros[i].fecha);

      cout<<"Temperatura: ";
      cin>>registros[i].temperatura;

      cin.ignore();
    }
}

int buscarFecha(Registro registros[], int cantidadRegistros, string fechaBuscada) {

    for(int i = 0; i < cantidadRegistros; i++){
      if(registros[i].fecha == fechaBuscada){
        return i;
      }
    }
    return -1;
}

void mostrarRegistro(Registro r) {
    cout<<"\nREGISTRO ENCONTRADO: "<<endl;
    cout<<"Fecha: "<<r.fecha<<endl;
    cout<<"Temperatura: "<<r.temperatura<<" °C"<<endl;
    cout<<endl;
}

int main() {

    int cantidadRegistros;

    cout<<"Ingresa la cantidad de registros: ";
    cin>>cantidadRegistros;
    cin.ignore();

    Registro registros[20];

    llenarRegistros(registros, cantidadRegistros);

    string fechaBuscada;
    cout<<"\nIngresa la fecha a buscar: ";
    getline(cin, fechaBuscada);

    int posicion = buscarFecha(registros, cantidadRegistros, fechaBuscada);

    if(posicion != -1){
      mostrarRegistro(registros[posicion]);
    }else {
      cout<<"No se encontró un registro en la fecha indicada."<<endl;
    }

    return 0;
}
