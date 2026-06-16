// Escribe un menú que permita gestionar una cola de números enteros y que tenga las siguientes opciones:
// 	- Encolar elemento
// 	- Desencolar elemento
// 	- Ver cola
// 	- Destruir cola

#include <iostream>

using namespace std;

struct Nodo
{
    int dato;
    Nodo *siguiente;
};

void encolar(Nodo *&frente, Nodo *&final)
{

    int numero;
    cout << "Ingresa un número: ";
    cin >> numero;

    Nodo *nuevo = new Nodo(); // NODO VACIO

    nuevo->dato = numero; // 10
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

    cout << "\nElemento agregado correctamente." << endl;
}

void desencolar(Nodo *&frente, Nodo *&final)
{
    if (frente == NULL)
    {
        cout << "\nLa cola está vacía." << endl;
        return;
    }

    Nodo *aux = frente;

    cout << "\nElemento eliminado: " << aux->dato << endl;
    frente = frente->siguiente;

    if (frente == NULL)
    {
        final = NULL;
    }

    delete aux;
}

void verCola(Nodo *frente)
{
    if (frente == NULL)
    {
        cout << "\nLa cola está vacía." << endl;
        return;
    }

    Nodo *aux = frente;

    cout << "\nContenido de la cola: " << endl;

    while (aux != NULL)
    {
        cout << aux->dato << " ";
        aux = aux->siguiente;
    }

    cout << endl;
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

void mostrarMenu()
{
    cout << "\n==========================" << endl;
    cout << "\n   MENÚ DE COLA   " << endl;
    cout << "\n==========================" << endl;
    cout << "\n1. Encolar";
    cout << "\n2. Desencolar";
    cout << "\n3. Ver cola";
    cout << "\n4. Destruir cola";
    cout << "\n5. Salir";
    cout << "\nSelecciona una opción: ";
}

int main()
{
    Nodo *frente = NULL;
    Nodo *final = NULL;

    int opcion, numero;

    do
    {
        mostrarMenu();
        cin >> opcion;

        switch (opcion)
        {
        case 1:
            encolar(frente, final);
            break;
        case 2:
            desencolar(frente, final);
            break;
        case 3:
            verCola(frente);
            break;
        case 4:
            destruirCola(frente, final);
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