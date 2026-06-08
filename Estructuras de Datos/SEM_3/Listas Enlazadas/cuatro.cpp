// Crea un programa que permita al usuario ingresar una lista de números enteros en una lista enlazada simple.
// Luego, implementa una función que invierta el orden de los elementos de la lista. Finalmente, muestra la lista invertida.

// 10 -> 20 -> 30 -> 40 -> 50 -> NULL
// 50 -> 40 -> 30 -> 20 -> 10 -> NULL

// anterior, actual, siguiente

#include <iostream>

using namespace std;

struct Nodo
{
    int dato;
    Nodo *siguiente;
};

void invertirLista(Nodo *&cabeza)
{
    Nodo *anterior = NULL;
    Nodo *actual = cabeza;
    Nodo *siguiente = NULL;

    while (actual != NULL)
    {
        siguiente = actual->siguiente;
        actual->siguiente = anterior;
        anterior = actual;
        actual = siguiente;
    }

    cabeza = anterior;
}

// 10->20->30->40->50
// anterior = NULL
// actual = 10
// siguiente = 20

// 10 -> NULL

// anterior = 10
// actual = 20

// NULL <- 10
// 20 -> 30 -> 40 -> 50 -> NULL
// actual = 20

// 20 -> 30
// 20 -> 10 -> NULL
// anterior = 20
// actual = 30

int main()
{

    return 0;
}