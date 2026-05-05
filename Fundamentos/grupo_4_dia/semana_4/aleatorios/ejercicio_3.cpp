// Crea un programa que simule un sorteo de lotería en el que el usuario puede elegir 5 números
// diferentes entre 1 y 50. El programa debe generar 5 números aleatorios entre 1 y 50 como el
// resultado del sorteo y luego comparar los números elegidos por el usuario con los generados.
// El programa debe mostrar cuántos números acertó.

#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

bool existe(int arr[], int size, int valor){

    for(int i = 0; i < size; i++){
      if(arr[i] == valor){
        return true;
      }
    }
    return false;
}

void ingresarNumerosUsuario(int arr[]) {

    int num;
    int i = 0;

    cout<<"\nIngresa tus 5 números (1 - 50, sin repetir)"<<endl;

    while(i < 5){
      cout<<"Número "<<(i + 1)<<": ";
      cin>>num;

      if(num < 1 || num > 50){
        cout<<"Error: el número debe estar entre 1 y 50."<<endl;
        continue;
      }

      if(existe(arr, i, num)){
        cout<<"Error: número repetido."<<endl;
        continue;
      }

      arr[i] = num;
      i++;
    }
}

void generarSorteo(int arr[]) {

    int num;
    int i = 0;

    while(i < 5){
      num = (rand() % 50) + 1;
      arr[i] = num;
      i++;
    }
}

int contarAciertos(int usuario[], int sorteo[]) {

    int aciertos = 0;

    for(int i = 0; i < 5; i++){
      for(int j = 0; j < 5; j++){
        if(usuario[i] == sorteo[j]){
          aciertos++;
        }
      }
    }
    return aciertos;
}

void mostrarArreglo(int arr[], int size) {

    for(int i = 0; i < size; i++){
      cout<<arr[i]<<" ";
    }
    cout<<endl;
}

int main() {

    srand(time(0));

    int usuario[5];
    int sorteo[5];

    ingresarNumerosUsuario(usuario);
    generarSorteo(sorteo);

    cout<<"\nTus números elegidos son: ";
    mostrarArreglo(usuario, 5);

    cout<<"\nNúmeros del sorteo: ";
    mostrarArreglo(sorteo, 5);

    int aciertos = contarAciertos(usuario, sorteo);

    cout<<"\nAcertaste: "<<aciertos<<" números."<<endl;

    return 0;
}
