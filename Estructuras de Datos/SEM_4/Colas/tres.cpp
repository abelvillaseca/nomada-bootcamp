// Se tienen dos colas y se desea unirlas de tal manera que se intercalen sus elementos. Escriba un programa que haga esa tarea.

// COLA A => 10 20 30
// COLA B => 5 15 25

// COLA RESULTANTE => 10 5 20 15 30 25

// 10 -> 5 -> 20

#include <iostream>

using namespace std;

struct Nodo
{
    int dato;
    Nodo *siguiente;
};

void encolar(Nodo *&frente, Nodo *&final, int valor)
{

    Nodo *nuevo = new Nodo(); // NODO VACIO

    nuevo->dato = valor; // 10
    nuevo->siguiente = NULL;

    if (frente == NULL)
    {
        frente = nuevo;
        final = nuevo;
    }
    else
    {
        final->siguiente = nuevo;
        final = nuevo;
    }
}

int desencolar(Nodo *&frente, Nodo *&final)
{
    // if (frente == NULL)
    // {
    //     cout << "\nLa cola está vacía." << endl;
    //     return;
    // }

    Nodo *aux = frente;

    int valor = aux->dato;

    // cout << "\nElemento eliminado: " << aux->dato << endl;
    frente = frente->siguiente;

    if (frente == NULL)
    {
        final = NULL;
    }

    delete aux;

    return valor;
}

void verCola(Nodo *frente)
{
    if (frente == NULL)
    {
        cout << "\nLa cola está vacía." << endl;
        return;
    }

    Nodo *aux = frente;

    // cout << "\nContenido de la cola: " << endl;

    while (aux != NULL)
    {
        cout << aux->dato << " ";
        aux = aux->siguiente;
    }

    cout << endl;
}

void intercalarColas(
    Nodo *&frenteA,
    Nodo *&finalA,

    Nodo *&frenteB,
    Nodo *&finalB,

    Nodo *&frenteR,
    Nodo *&finalR)
{
    while (frenteA != NULL && frenteB != NULL)
    {
        encolar(frenteR, finalR, desencolar(frenteA, finalA));
        encolar(frenteR, finalR, desencolar(frenteB, finalB));
    }

    while (frenteA != NULL)
    {
        encolar(frenteR, finalR, desencolar(frenteA, finalA));
    }

    while (frenteB != NULL)
    {
        encolar(frenteR, finalR, desencolar(frenteB, finalB));
    }
}

void destruirCola(Nodo *&frente, Nodo *&final)
{
    while (frente != NULL)
    {
        Nodo *aux = frente;
        frente = frente->siguiente;
        delete aux;
    }

    final = NULL;

    cout << "\nLa cola fue destruida correctamente." << endl;
}

int main()
{
    Nodo *frenteA = NULL;
    Nodo *finalA = NULL;

    Nodo *frenteB = NULL;
    Nodo *finalB = NULL;

    Nodo *frenteR = NULL;
    Nodo *finalR = NULL;

    int nA, nB, valor;

    cout << "Cantidad de elementos de la cola A: ";
    cin >> nA;

    for (int i = 1; i <= nA; i++)
    {
        cout << "Elemento " << i << ": ";
        cin >> valor;

        encolar(frenteA, finalA, valor);
    }

    cout << "Cantidad de elementos de la cola B: ";
    cin >> nB;

    for (int i = 1; i <= nB; i++)
    {
        cout << "Elemento " << i << ": ";
        cin >> valor;

        encolar(frenteB, finalB, valor);
    }

    intercalarColas(frenteA, finalA, frenteB, finalB, frenteR, finalR);

    cout << "\nCola intercalada: " << endl;
    verCola(frenteR);

    destruirCola(frenteR, finalR);

    return 0;
}