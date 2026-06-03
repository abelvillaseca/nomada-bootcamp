// Escribe un programa que permita al usuario ingresar un arreglo, lo ordene y busque un número usando una función de búsqueda binaria.

#include <iostream>

using namespace std;

void ordenarArregloBurbuja(int arr[], int tam)
{
    for (int i = 0; i < tam - 1; i++)
    {
        for (int j = 0; j < tam - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int busquedaBinaria(int arr[], int tam, int numBuscar)
{
    int izquierda = 0;     // 2
    int derecha = tam - 1; // 2

    // 12 25 33 45 60 78 90

    while (izquierda <= derecha)
    {
        int medio = (izquierda + derecha) / 2; // medio = (0 + 2) / 2 = 1

        if (arr[medio] == numBuscar) // arreglo[3] == 45 // 33 == 45
        {
            return medio; // Número encontrado, devuelve el índice
        }

        if (numBuscar < arr[medio]) // 33 < 25
        {
            derecha = medio - 1; // Buscar en la mitad izquierda => derecha = 3 - 1 = 2
        }
        else
        {
            izquierda = medio + 1; // Buscar en la mitad derecha
        }
    }
    return -1; // Número no encontrado
}

int main()
{
    int tam, numBuscar;

    cout << "Ingrese el tamaño del arreglo: ";
    cin >> tam;

    int arr[tam];

    for (int i = 0; i < tam; i++)
    {
        cout << "Ingrese el elemento " << i + 1 << ": ";
        cin >> arr[i];
    }

    ordenarArregloBurbuja(arr, tam);

    cout << "Arreglo ordenado: " << endl;
    for (int i = 0; i < tam; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    cout << "Ingrese el número a buscar: ";
    cin >> numBuscar; // 33

    int resultado = busquedaBinaria(arr, tam, numBuscar);

    if (resultado != -1)
    {
        cout << "Número encontrado en el índice: " << resultado << endl;
    }
    else
    {
        cout << "Número no encontrado" << endl;
    }

    return 0;
}