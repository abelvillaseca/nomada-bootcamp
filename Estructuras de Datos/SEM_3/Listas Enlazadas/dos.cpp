// Escribe un programa que permita al usuario ingresar una lista de números en una lista enlazada simple.
// El programa debe incluir una opción para insertar un nuevo número en una posición específica. Finalmente,
// imprime los elementos de la lista actualizada.

// Ingresa una lista de elementos: 10 20 30 40 -> NULL / nullptr
// Ingresa el número a insertar: 25
// Ingresa la posición en donde insertarás el nuevo número: 3

// 10 20 25 30 40 -> NULL

#include <iostream>

using namespace std;

struct Nodo
{
    int dato;
    Nodo *siguiente;
};

void insertarFinal(Nodo *&cabeza, int numero)
{
    Nodo *nuevo = new Nodo();

    nuevo->dato = numero;
    nuevo->siguiente = NULL;

    if (cabeza == NULL)
    {
        cabeza = nuevo;
    }
    else
    {
        Nodo *temp = cabeza;

        while (temp->siguiente != NULL)
        {
            temp = temp->siguiente;
        }
        temp->siguiente = nuevo;
    }
}

void insertarEnPosicion(Nodo *&cabeza, int numero, int posicion)
{
    Nodo *nuevo = new Nodo();

    nuevo->dato = numero;
    nuevo->siguiente = NULL;

    // 25 -> NULL

    if (posicion == 1)
    {
        nuevo->siguiente = cabeza;
        cabeza = nuevo;
        return;
    }

    // 10 20 30 40 -> NULL

    Nodo *temp = cabeza;

    int contador = 1;

    while (temp != NULL && contador < posicion - 1)
    {
        temp = temp->siguiente;
        contador++;
    }

    if (temp == NULL)
    {
        cout << "\nPosición inválidad." << endl;
        delete nuevo;
        return;
    }

    nuevo->siguiente = temp->siguiente; // 25->30
    temp->siguiente = nuevo;

    // 10->20->25->30->40->NULL
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
    Nodo *cabeza = NULL;

    int cantidad, numero, nuevoNuemero, posicion;

    cout << "¿Cuántos elemementos deseas en la lista?: ";
    cin >> cantidad;

    for (int i = 1; i <= cantidad; i++)
    {
        cout << "Ingresa el elemento " << i << ": ";
        cin >> numero;

        insertarFinal(cabeza, numero);
    }

    cout << "\nIngresa el nuevo elemento a insertar: ";
    cin >> nuevoNuemero;

    cout << "Ingresa la posición donde insertar: ";
    cin >> posicion;

    cout << "Lista original: ";
    mostrarLista(cabeza);

    insertarEnPosicion(cabeza, nuevoNuemero, posicion);

    cout << "Lista final: ";
    mostrarLista(cabeza);

    return 0;
}