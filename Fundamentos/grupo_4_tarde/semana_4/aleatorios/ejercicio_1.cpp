// Crea un programa que simule el lanzamiento de un dado de 6 caras. El usuario debe ingresar
// la cantidad de veces que desea lanzar el dado. El programa debe mostrar el resultado de cada
// lanzamiento y, al final, la cantidad de veces que apareció cada número (1 a 6).

// Cantidad de lanzamientos
// Generar aleatorios
// Mostrar los resultados
// Contar cuántas veces aparece cada número

#include <iostream>
#include <cstdlib> // Para rand() y srand()
#include <ctime> // Para el tiempo => time()

using namespace std;

int lanzarDado() {
    return (rand() % 6) + 1;
}

void mostrarResultados(int contador[]) {
    cout<<"\nRESULTADOS FINALES: "<<endl;

    for(int i = 0; i < 6; i++) {
      cout<<"Número "<<(i + 1)<<" salió "<<contador[i]<<" veces."<<endl;
    }
}

void simularLanzamientos(int cantidadLanzamientos) {

    int contador[6] = {0, 0, 0, 0, 0, 0};

    cout<<"\n=== LANZAMIENTOS DEL DADO: "<<endl;

    for(int i = 1; i <= cantidadLanzamientos; i++) {
      int resultado = lanzarDado(); // 3

      cout<<"Lanzamiento "<<i<<": "<<resultado<<endl;

      contador[resultado - 1]++;
    }

    mostrarResultados(contador);

}

int main() {

    int cantidadLanzamientos;

    srand(time(0)); // Inicializamos la semilla

    cout<<"Ingresa la cantidad de lanzamientos del dado: ";
    cin>>cantidadLanzamientos;

    if(cantidadLanzamientos <= 0 || cantidadLanzamientos > 6) {
      cout<<"Debe ingresar un número en el rango de 1 - 6";
      return 0;
    }

    simularLanzamientos(cantidadLanzamientos);

    return 0;
}
