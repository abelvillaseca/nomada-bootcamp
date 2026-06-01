// Escribe un programa que permita al usuario ingresar un arreglo y buscar un número específico.
// Implementa la búsqueda secuencial como una función.

#include <iostream>

using namespace std;

int busquedaSecuencial(int arr[], int tam, int numBuscado)
{
    for (int i = 0; i < tam; i++)
    {
        if (arr[i] == numBuscado)
        {
            return i;
        }
    }
    return -1;
}

int main()
{

    int tam;
    cout << "Ingrese el tamaño del arreglo: ";
    cin >> tam;

    int arr[tam];

    cout << "Ingrese los elementos del arreglo: " << endl;

    for (int i = 0; i < tam; i++)
    {
        cout << "Elemento " << i + 1 << ": ";
        cin >> arr[i];
    }

    int numBuscado;
    cout << "Ingrese el número a buscar: " << endl;
    cin >> numBuscado;

    int posicion = busquedaSecuencial(arr, tam, numBuscado);

    if (posicion != -1)
    {
        cout << "El número " << numBuscado << " se encuentra en la posición " << posicion << "." << endl;
    }
    else
    {
        cout << "El número " << numBuscado << " no se encuentra en el arreglo." << endl;
    }

    return 0;
}