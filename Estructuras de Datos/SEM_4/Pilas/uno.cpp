// Elabora un menú que permita gestionar una pila de números enteros y que tenga las siguientes opciones: apilar elemento,
// desapilar elemento, ver pila y destruir pila. Usa pilas estáticas.

#include <iostream>

using namespace std;

const int TOPE = 10;

bool pilaLlena(int cima)
{
    return cima == TOPE - 1;
}

bool pilaVacia(int cima)
{
    return cima == -1;
}

void apilar(int pila[], int &cima)
{
    if (pilaLlena(cima))
    {
        cout << "\nLa pila está llena." << endl;
        return;
    }

    int numero;

    cout << "Ingresa el elemento a apilar: ";
    cin >> numero;

    cima++;

    pila[cima] = numero;

    cout << "Elemento insertado correctamente." << endl;
}

void desapilar(int pila[], int &cima)
{
    if (pilaVacia(cima))
    {
        cout << "\nLa pila está vacía." << endl;
        return;
    }

    cout << "\nElemento eliminado: " << pila[cima] << endl;
    cima--;
}

void verPila(int pila[], int cima)
{
    if (pilaVacia(cima))
    {
        cout << "\nLa pila está vacía." << endl;
        return;
    }

    cout << "\n=== PILA ===" << endl;

    for (int i = cima; i >= 0; i--)
    {
        cout << pila[i] << endl;
    }
}

void destruirPila(int &cima)
{
    cima = -1;
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
    int pila[TOPE];

    int cima = -1;

    int opcion;

    do
    {
        mostrarMenu();
        cin >> opcion;

        switch (opcion)
        {
        case 1:
            apilar(pila, cima);
            break;
        case 2:
            desapilar(pila, cima);
            break;
        case 3:
            verPila(pila, cima);
            break;
        case 4:
            destruirPila(cima);
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