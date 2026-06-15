// Elabora un menú que permita gestionar una pila de números enteros y que tenga las siguientes opciones: apilar elemento,
// desapilar elemento, ver pila y destruir pila. Usa pilas estáticas y las funciones predeficinas de stack (de la Standad
// Template Library de C++).

#include <iostream>
#include <stack>

using namespace std;

void apilar(stack<int> &pila)
{
    int numero;

    cout << "\nIngresa el elemento a apilar: ";
    cin >> numero;

    pila.push(numero);

    cout << "Elemento apilado correctamente." << endl;
}

void desapilar(stack<int> &pila)
{
    if (pila.empty())
    {
        cout << "\nLa pila está vacía." << endl;
        return;
    }

    cout << "\nElemento eliminado: " << pila.top() << endl;

    pila.pop();
}

void verPila(stack<int> pila)
{
    if (pila.empty())
    {
        cout << "\nLa pila está vacía." << endl;
        return;
    }

    cout << "\n=== PILA ===" << endl;

    while (!pila.empty())
    {
        cout << pila.top() << endl;
        pila.pop();
    }
}

void destruirPila(stack<int> &pila)
{
    while (!pila.empty())
    {
        pila.pop();
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
    stack<int> pila;

    int opcion;

    do
    {
        mostrarMenu();
        cin >> opcion;

        switch (opcion)
        {
        case 1:
            apilar(pila);
            break;
        case 2:
            desapilar(pila);
            break;
        case 3:
            verPila(pila);
            break;
        case 4:
            destruirPila(pila);
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