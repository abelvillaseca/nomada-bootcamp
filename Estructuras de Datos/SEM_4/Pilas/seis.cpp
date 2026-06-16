// Elabora un programa que simule el historial de acciones de un editor de texto utilizando una pila.

// Cada acción realizada por el usuario (por ejemplo: Escribió una palabra, Borró una línea, Copió un texto, etc.)
// debe almacenarse en la pila.

// El programa debe mostrar el siguiente menú:

// Registrar una acción. => push!!!!!!!!!!!!!!!!!!
// Deshacer la última acción. => pop!!!!!!
// Mostrar el historial de acciones. => LEER LA PILA
// Borrar todo el historial. => DESTRUIR PILA
// Salir.

// El programa debe implementar todas las operaciones mediante funciones y utilizar la clase stack de la Standard
// Template Library (STL).

#include <iostream>

using namespace std;

void registrarAccion(stack<string> &historial)
{
    string accion;
    cout << "Ingresa la acción realizada: ";
    cin.ignore();
    getline(cin, accion);

    historial.push(accion);

    cout << "\nAcción registrada correctamente." << endl;
}

void deshacerAccion(stack<string> &historial)
{
    if (historial.empty())
    {
        cout << "\nNo existen acciones para deshacer." << endl;
        return;
    }

    cout << "\nSe deshizo la acción: " << historial.top() << endl;
    historial.pop();
}

void mostrarHistorial(stack<string> historial)
{
    if (historial.empty())
    {
        cout << "\nEl historial está vacío." << endl;
        return;
    }

    cout << "=== HISTORIAL ===" << endl;

    while (!historial.empty())
    {
        cout << " - " << historial.top() << endl;
        historial.pop();
    }
}

void borrarHistorial(stack<string> &historial)
{
    while (!historial.empty())
    {
        historial.pop();
    }

    cout << "\nHistorial eliminado correctamente." << endl;
}

void mostrarMenu()
{
    cout << "\n============================" << endl;
    cout << "\n   HISTORIAL DE ACCIONES   " << endl;
    cout << "\n============================" << endl;
    cout << "\n1. Registrar una acción";
    cout << "\n2. Deshacer última acción";
    cout << "\n3. Mostrar historial";
    cout << "\n4. Borrar historial";
    cout << "\n5. Salir";
    cout << "\nSelecciona una opción: ";
}

int main()
{

    stack<string> historial;

    int opcion;

    do
    {
        mostrarMenu();
        cin >> opcion;

        switch (opcion)
        {
        case 1:
            registrarAccion(historial);
            break;
        case 2:
            deshacerAccion(historial);
            break;
        case 3:
            mostrarHistorial(historial);
            break;
        case 4:
            borrarHistorial(historial);
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