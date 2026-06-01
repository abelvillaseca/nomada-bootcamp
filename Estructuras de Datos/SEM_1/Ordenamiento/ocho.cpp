// Dado un arreglo de enteros desordenado, implementa el algoritmo Merge Sort para ordenar el arreglo de menor a mayor.

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

void merge(int arr[], int inicio, int medio, int fin)
{
    int tamIzquierdo = medio - inicio + 1;
    int tamDerecho = fin - medio;

    int izquierda[20];
    int derecha[20];

    for (int i = 0; i < tamIzquierdo; i++)
    {
        izquierda[i] = arr[inicio + i];
    }

    for (int j = 0; j < tamDerecho; j++)
    {
        derecha[j] = arr[medio + 1 + j];
    }

    int i = 0, j = 0, k = inicio;

    while (i < tamIzquierdo && j < tamDerecho)
    {
        if (izquierda[i] <= derecha[j])
        {
            arr[k] = izquierda[i];
            i++;
        }
        else
        {
            arr[k] = derecha[j];
            j++;
        }
        k++;
    }

    while (i < tamIzquierdo)
    {
        arr[k] = izquierda[i];
        i++;
        k++;
    }

    while (j < tamDerecho)
    {
        arr[k] = derecha[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int inicio, int fin)
{
    if (inicio < fin)
    {
        int medio = (inicio + fin) / 2;

        mergeSort(arr, inicio, medio);
        mergeSort(arr, medio + 1, fin);

        merge(arr, inicio, medio, fin);
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

    mergeSort(arr, 0, tam - 1);

    cout << "Arreglo ordenado: " << endl;
    mostrarArreglo(arr, tam);

    return 0;
}