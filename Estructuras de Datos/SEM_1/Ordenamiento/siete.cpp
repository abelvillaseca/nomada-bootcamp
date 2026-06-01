// Dado un arreglo de enteros desordenado, implementa el algoritmo de ordenamiento Quick Sort para ordenar el arreglo de menor a mayor.

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

int particion(int arr[], int inicio, int fin)
{
    int pivote = arr[fin];
    int i = inicio - 1;

    for (int j = inicio; j < fin; j++)
    {
        if (arr[j] < pivote)
        {
            i++;
            int aux = arr[i];
            arr[i] = arr[j];
            arr[j] = aux;
        }
    }

    int aux = arr[i + 1];
    arr[i + 1] = arr[fin];
    arr[fin] = aux;

    return i + 1;
}

void quickSort(int arr[], int inicio, int fin) // inicio = 0, fin = 4
{ // [8, 3, 1, 7, 4] 
    if (inicio < fin)
    {
        int pivote = particion(arr, inicio, fin);

        quickSort(arr, inicio, pivote - 1);
        quickSort(arr, pivote + 1, fin);
    }
}

int main()
{

    int tam;

    cout << "Ingrese el tamaño del arreglo: ";
    cin >> tam;

    int arr[tam];

    cout << "Ingrese los elementos del arreglo:" << endl;
    ingresarDatos(arr, tam);

    cout << "Arreglo desordenado: " << endl;
    mostrarArreglo(arr, tam);

    quickSort(arr, 0, tam - 1);

    cout << "Arreglo ordenado: " << endl;
    mostrarArreglo(arr, tam);

    return 0;
}