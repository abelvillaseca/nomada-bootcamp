// Escribe un programa que pida al usuario el tamaño de un arreglo y
// luego sus elementos. Usa punteros para calcular el promedio de los
// números almacenados en el arreglo.

// [10, 20, 30, 40]

#include <iostream>

using namespace std;

float calcularPromedio(int *arr, int tam) {

    int suma = 0;

    for(int i = 0; i < tam; i++){
      suma += *(arr + i); // suma = 100
    }

    float promedio = (float)suma / tam; // promedio = 100 / 4 = 25

    return promedio;
}

int main() {

    int tam;

    cout<<"Ingresa el tamaño del arreglo: ";
    cin>>tam;

    if(tam <= 0) {
      cout<<"El tamaño debe ser mayor a cero."<<endl;
      return 0;
    }

    int *arr = new int[tam];

    cout<<"\nIngresa los elementos del arreglo: "<<endl;
    for(int i = 0; i < tam; i++){
      cout<<"Elemento ["<<i<<"]: ";
      cin>>*(arr + i); // Aritmética de punteros
    }

    float resultado = calcularPromedio(arr, tam);

    cout<<"\nEl promedio es: "<<resultado<<endl;

    delete[] arr;

    return 0;
}
