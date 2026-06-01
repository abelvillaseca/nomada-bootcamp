// Escribe un programa que permita al usuario ingresar un arreglo y busque la frecuencia de un número dado usando
// una función y la búsqueda secuencial.

// 5, 8, 3, 2, 8, 7, 8

#include <iostream>

using namespace std;

int frecuencia(int arr[], int tam, int numBuscado)
{
    int contador = 0;
    for (int i = 0; i < tam; i++)
    {
        if (arr[i] == numBuscado)
        {
            contador++;
        }
    }
    return contador;
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
        cin >> arr[i];
    }

    int numBuscado;
    cout << "Ingrese el número a buscar: ";
    cin >> numBuscado;

    int resultado = frecuencia(arr, tam, numBuscado);
    cout << "La frecuencia del número " << numBuscado << " es: " << resultado << endl;

    return 0;
}