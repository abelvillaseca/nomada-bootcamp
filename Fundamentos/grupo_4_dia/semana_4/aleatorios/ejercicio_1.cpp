// Crea un programa que simule el lanzamiento de un dado de 6 caras. El usuario debe ingresar
// la cantidad de veces que desea lanzar el dado. El programa debe mostrar el resultado de cada
// lanzamiento y, al final, la cantidad de veces que apareció cada número (1 a 6).

#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int lanzarDado() {
  return (rand() % 6) + 1;
}

void mostrarResultados(int contador[]) {

    cout<<"\n=== RESULTADOS FINALES: ==="<<endl;

    for(int i = 0; i < 6; i++){
      cout<<"Número "<<(i + 1)<<" salió "<<contador[i]<<" veces."<<endl;
    }
}

void simularLanzamientos(int cantidadLanzamientos) {

    int contador[6] = {0, 0, 0, 0, 0, 0};

    cout<<"\n=== LANZAMIENTO DEL DATO: ==="<<endl;

    for(int i = 1; i <= cantidadLanzamientos; i++){
      int resultado = lanzarDado();

      cout<<"Lanzamiento "<<i<<": "<<resultado<<endl;

      contador[resultado - 1]++;
    }

    mostrarResultados(contador);
}

int main() {

    int cantidadLanzamientos;

    srand(time(0)); // Inicializar la semilla

    cout<<"¿Cuántas veces quieres lanzar el dado?: ";
    cin>>cantidadLanzamientos;

    if(cantidadLanzamientos <= 0){
      cout<<"Debes ingresar un número mayor a cero."<<endl;
      return 0;
    }

    simularLanzamientos(cantidadLanzamientos);

    return 0;
}
