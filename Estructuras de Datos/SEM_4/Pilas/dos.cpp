// Elabora un menú que permita gestionar una pila de números enteros y que tenga las siguientes opciones: apilar elemento,
// desapilar elemento, ver pila y destruir pila. Usa pilas dinámicas. 

#include <iostream>

using namespace std;

struct Nodo
{
    int dato;
    Nodo *siguiente;
};

bool pilaVacia(Nodo *tope)
{
    return tope == NULL;
}

void apilar(Nodo *&tope)
{
    int numero;

    cout << "\nIngresa el elemento a apilar: ";
    cin >> numero;

    Nodo *nuevo = new Nodo();

    nuevo->dato = numero;
    nuevo->siguiente = tope;

    tope = nuevo;

    cout << "Elemento insertado correctamente." << endl;
}

void desapilar(Nodo *&tope)
{
    if (pilaVacia(tope))
    {
        cout << "\nLa pila está vacía." << endl;
        return;
    }

    Nodo *aux = tope;

    cout << "\nElemento eliminado: " << aux->dato << endl;

    tope = tope->siguiente;

    delete aux;
}

void verPila(Nodo *tope)
{
    if (pilaVacia(tope))
    {
        cout << "\nLa pila está vacía." << endl;
        return;
    }

    cout << "\n=== PILA ===" << endl;

    Nodo *aux = tope;

    while (aux != NULL)
    {
        cout << aux->dato << endl;
        aux = aux->siguiente;
    }
}

void destruirPila(Nodo *&tope)
{
    while (tope != NULL)
    {
        Nodo *aux = tope;
        tope = tope->siguiente;
        delete aux;
    }

    cout << "\nLa pila fue destruida correctamente." << endl;
}

void mostrarMenu()
{
    cout << "\n======================" << endl;
    cout << "\n   MENÚ DE LA PILA   " << endl;
    cout << "\n======================" << endl;
    cout << "\n1. Apilar elemento";
    cout << "\n2. Desapilar elemento";
    cout << "\n3. Ver pila";
    cout << "\n4. Destruir pila";
    cout << "\n5. Salir";
    cout << "\nSelecciona una opción: ";
}

int main()
{
    Nodo *tope = NULL;

    int opcion;

    do
    {
        mostrarMenu();
        cin >> opcion;

        switch (opcion)
        {
        case 1:
            apilar(tope);
            break;
        case 2:
            desapilar(tope);
            break;
        case 3:
            verPila(tope);
            break;
        case 4:
            destruirPila(tope);
            break;
        case 5:
            cout << "\nSaliendo..." << endl;
            break;
        default:
            cout << "\nOpción inválida." << endl;
        }

    } while (opcion != 5);

    return 0;
}