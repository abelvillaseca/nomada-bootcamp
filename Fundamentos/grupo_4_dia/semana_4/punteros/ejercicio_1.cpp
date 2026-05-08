// Escribe un programa que utilice una función para intercambiar el valor de
// dos variables utilizando punteros. Muestra los valores de las variables
// antes y después del intercambio.

// Intercambio (swap)

// a = 10
// b = 20

// a = 20
// b = 10

#include <iostream>

using namespace std;

void intercambiar(int *a, int *b) {

    int temp;

    temp = *a;
    *a = *b;
    *b = temp;
}

int main() {

    int a, b;

    cout<<"Ingresa el valor de a: ";
    cin>>a;
    cout<<"Ingresa el valor de b: ";
    cin>>b;

    cout<<"\nVALORES ANTES DEL INTERCAMBIO: "<<endl;
    cout<<"a = "<<a<<endl;
    cout<<"b = "<<b<<endl;

    intercambiar(&a, &b);

    cout<<"\nVALORES DESPUÉS DEL INTERCAMBIO: "<<endl;
    cout<<"a = "<<a<<endl;
    cout<<"b = "<<b<<endl;

    return 0;
}
