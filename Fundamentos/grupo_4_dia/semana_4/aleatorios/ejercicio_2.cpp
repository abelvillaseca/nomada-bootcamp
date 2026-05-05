// Crea un programa en el que la computadora elija un número aleatorio entre 1 y 100.
// El usuario debe intentar adivinar el número. El programa indicará si el número ingresado
// es mayor o menor que el número a adivinar. El juego termina cuando el usuario acierta, y
// el programa debe mostrar cuántos intentos tomó.

// genero el aleatorio => 60
// 10 => el número es muy bajo.
// 100 => el número es muy alto.
// 60 => acertaste, te tomó 3 intentos.

#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int generarAleatorio(){

    return (rand() % 100) + 1;
}

void jugar(int numeroSecreto){

    int numeroUsuario;
    int intentos = 0;

    cout<<"\n=== ADIVINA EL NÚMERO: ==="<<endl;
    cout<<"Estoy pensando en un número entre 1 y 100..."<<endl;

    do{

      cout<<"\nIngresa tu número: ";
      cin>>numeroUsuario;

      intentos++;

      if(numeroUsuario < numeroSecreto){
        cout<<"Muy bajo. Intenta de nuevo.";
      }else if(numeroUsuario > numeroSecreto){
        cout<<"Muy alto. Intenta de nuevo.";
      }else{
        cout<<"\nCorrecto, adivinaste el número."<<endl;
        cout<<"\nLo lograste en: "<<intentos<<" intentos."<<endl;
      }

    }while(numeroUsuario != numeroSecreto);
}

int main() {

    srand(time(0));

    int numeroSecreto = generarAleatorio();

    cout<<"Número secreto generado: "<<numeroSecreto<<endl;

    jugar(numeroSecreto);

    return 0;
}
