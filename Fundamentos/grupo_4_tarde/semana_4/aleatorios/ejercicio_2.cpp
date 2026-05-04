// Crea un programa en el que la computadora elija un número aleatorio entre 1 y 100.
// El usuario debe intentar adivinar el número. El programa indicará si el número ingresado
// es mayor o menor que el número a adivinar. El juego termina cuando el usuario acierta,
// y el programa debe mostrar cuántos intentos tomó.

#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int generarAleatorio() {
    return (rand() % 100) + 1;
}

void jugar(int secreto) {
    int numeroUsuario;
    int intentos = 0;

    cout<<"\nJUEGO ADIVINA EL NÚMERO: "<<endl;
    cout<<"Estoy pensando en un número entre 1 y 100..."<<endl;

    do{
      cout<<"\nIngresa tu número: ";
      cin>>numeroUsuario;

      intentos++;

      if(numeroUsuario < secreto) {
        cout<<"Muy bajo, intenta de nuevo.";
      }else if(numeroUsuario > secreto) {
        cout<<"Muy alto, intenta de nuevo.";
      }else {
        cout<<"\nCorrecto, adivinaste el número."<<endl;
        cout<<"\nLo lograste en: "<<intentos<<" intentos."<<endl;
      }

    }while(numeroUsuario != secreto);
}

int main() {

    srand(time(0));

    int secreto = generarAleatorio();

    cout<<"\nNÚMERO SECRETO GENERADO: "<<secreto<<endl;

    jugar(secreto);

    return 0;
}
