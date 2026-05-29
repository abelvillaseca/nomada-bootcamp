// Dado un arreglo de enteros desordenado, se debe implementar el algoritmo de ordenamiento Insertion Sort 
// para organizar los elementos de menor a mayor.

// [7, 4, 5, 2]
// [4, 7, 5, 2]
// [4, 5, 7, 2]
// [2, 4, 5, 7]

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

void insertionSort(int arreglo[], int tam)
{

    int key;

    int j;

    for (int i = 1; i < tam; i++) // [7, 4, 5, 2]
    {
        key = arreglo[i]; // key = 4
        j = i - 1; // j = 7

        while (j >= 0 && arreglo[j] > key) // 7 > 4
        {
            arreglo[j + 1] = arreglo[j]; // [7, 7, 5, 2] => [4, 7, 5, 2]
            j--; 
        }
        arreglo[j + 1] = key;
    }
}

int main()
{

    int arreglo[20];
    int tam;

    cout << "Ingrese el tamaño del arreglo: ";
    cin >> tam;

    ingresarDatos(arreglo, tam);
    cout << "Arreglo original: ";
    mostrarArreglo(arreglo, tam);

    insertionSort(arreglo, tam);
    cout << "Arreglo ordenado: ";
    mostrarArreglo(arreglo, tam);

    return 0;
}