// Escribe un programa que encuentre el valor máximo de un arreglo de
// enteros usando una función que manipule punteros.

// [10, 20, 30, 40]
// max = 10

#include <iostream>

using namespace std;

int encontrarMaximo(int *arr, int tam) {

    int maximo = *arr;

    for(int i = 1; i < tam; i++){
      if(*(arr + i) > maximo){
        maximo = *(arr + i);
      }
    }

    return maximo;
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

    int maximo = encontrarMaximo(arr, tam);

    cout<<"\nEl valor máximo es: "<<maximo<<endl;

    delete[] arr;

    return 0;
}
