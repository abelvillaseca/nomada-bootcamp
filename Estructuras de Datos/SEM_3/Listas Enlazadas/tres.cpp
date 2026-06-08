// Crea un programa que permita al usuario ingresar una lista de números enteros. El programa debe
// incluir una función para eliminar un nodo de la lista en función de su valor. Finalmente, muestra
// los elementos restantes de la lista actualizada.

// 10 20 30 40 50
// 30
// 10 20 40 50 -> NULL

// delete nodoEliminar;

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

void eliminarElemento(Nodo *&cabeza, int numeroEliminar)
{
    if (cabeza == NULL)
    {
        cout << "La lista está vacía." << endl;
        return;
    }

    if (cabeza->dato == numeroEliminar)
    {
        Nodo *temp = cabeza;
        cabeza = cabeza->siguiente;
        delete temp;
        cout << "Elemento eliminado." << endl;
        return;
    }

    Nodo *anterior = cabeza;
    Nodo *actual = cabeza->siguiente;

    while (actual != NULL && actual->dato != numeroEliminar)
    {
        anterior = actual;
        actual = actual->siguiente;
    }

    if (actual == NULL)
    {
        cout << "El elemento no está en la lista." << endl;
        return;
    }

    anterior->siguiente = actual->siguiente;

    delete actual;

    cout << "Elemento eliminado correctamente." << endl;
}

int main()
{

    Nodo *cabeza = NULL;

    int cantidad, numero, numeroEliminar;

    cout << "¿Cuántos elemementos deseas en la lista?: ";
    cin >> cantidad;

    for (int i = 1; i <= cantidad; i++)
    {
        cout << "Ingresa el elemento " << i << ": ";
        cin >> numero; // 10

        insertarFinal(cabeza, numero);
    }

    cout << "\nIngresa el número a eliminar: ";
    cin >> numeroEliminar;

    cout << "Lista original: ";
    mostrarLista(cabeza);

    eliminarElemento(cabeza, numeroEliminar);

    cout << "Lista final: ";
    mostrarLista(cabeza);

    return 0;
}