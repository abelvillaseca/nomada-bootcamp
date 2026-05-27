// Dado un arreglo de números enteros, ordénalo de menor a mayor utilizando el método burbuja o selección.

// Primera pasada
// [5, 3, 8, 1]
// [3, 5, 8, 1]
// [3, 5, 1, 8]

// Segunda pasada
// [3, 5, 1, 8]
// [3, 1, 5, 8]

// Tercera pasada
// [3, 1, 5, 8]
// [1, 3, 5, 8]

// Arreglo ordenado.

// a = 5
// b = 3

#include <iostream>

using namespace std;

void ingresarDatos(int arr[], int tam)
{

    for (int i = 0; i < tam; i++)
    {
        cout << "Ingrese el elemento " << i + 1 << ": ";
        cin >> arr[i];
    }
}

void mostrarArreglo(int arr[], int tam)
{
    for (int i = 0; i < tam; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

void ordenarBurbuja(int arr[], int tam)
{
    int aux;

    for (int i = 0; i < tam - 1; i++)
    {
        for (int j = 0; j < tam - 1 - i; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
        }
    }
}

int main()
{

    int tam;

    cout << "Ingrese el tamaño del arreglo: ";
    cin >> tam;

    int arr[tam];

    ingresarDatos(arr, tam);

    cout << "\nArreglo original: " << endl;
    mostrarArreglo(arr, tam);

    ordenarBurbuja(arr, tam);

    cout << "\nArreglo ordenado: " << endl;
    mostrarArreglo(arr, tam);

    return 0;
}