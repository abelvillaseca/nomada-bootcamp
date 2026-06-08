// Crea un programa que permita al usuario ingresar una lista de números enteros, los cuales serán almacenados en una
// lista enlazada simple. Luego, el programa debe imprimir todos los números almacenados en la lista.

#include <iostream>

using namespace std;

struct Nodo
{
    int dato;
    Nodo *siguiente;
};

void insertarAlFinal(Nodo *&cabeza, int numero)
{
    Nodo *nuevo = new Nodo();
    nuevo->dato = numero;
    nuevo->siguiente = nullptr;

    if (cabeza == NULL)
    {
        cabeza = nuevo;
    }
    else
    {
        Nodo *auxiliar = cabeza;

        while (auxiliar->siguiente != NULL)
        {
            auxiliar = auxiliar->siguiente;
        }

        auxiliar->siguiente = nuevo;
    }
}

void mostrarLista(Nodo *cabeza)
{
    if (cabeza == NULL)
    {
        cout << "\nLa lista está vacía." << endl;
        return;
    }

    Nodo *auxiliar = cabeza;

    cout << "\nElementos en la lista:" << endl;

    while (auxiliar != NULL)
    {
        cout << auxiliar->dato << " -> ";
        auxiliar = auxiliar->siguiente;
    }

    cout << "NULL" << endl;
}

int main()
{
    Nodo *cabeza = nullptr;

    int cantidad, numero;

    cout << "LISTA ENLAZADA SIMPLE: " << endl;

    cout << "\n¿Cuántos elementos deseas ingresar?: ";
    cin >> cantidad;

    for (int i = 1; i <= cantidad; i++)
    {
        cout << "Ingresa el número: " << ": ";
        cin >> numero;

        insertarAlFinal(cabeza, numero);
    }

    mostrarLista(cabeza);

    return 0;
}