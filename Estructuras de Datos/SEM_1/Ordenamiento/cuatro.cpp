// Dado un arreglo de números y un entero k, utiliza el método de selección para encontrar los k menores elementos del arreglo.

// [8, 3, 1, 9, 5, 2]
// k = 3
// [1, 2, 3]

// [1, 3, 8, 9, 5, 2]
// [1, 2, 8, 9, 5, 3]
// [1, 2, 3, 9, 5, 8]

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

void seleccionKMenores(int arr[], int tam, int k)
{
    int menor, aux;

    for (int i = 0; i < k; i++)
    {
        menor = i;
        for (int j = i + 1; j < tam; j++)
        {
            if (arr[j] < arr[menor])
            {
                menor = j;
            }
        }

        aux = arr[i];
        arr[i] = arr[menor];
        arr[menor] = aux;
    }
}

int main()
{

    int arreglo[20];
    int tam, k;

    cout << "Ingresa la cantidad de elementos en el arreglo: ";
    cin >> tam;

    ingresarDatos(arreglo, tam);

    cout << "Arreglo original: " << endl;
    mostrarArreglo(arreglo, tam);

    cout << "Ingresa el valor de k: ";
    cin >> k;

    if (k > tam || k <= 0)
    {
        cout << "Valor inválido." << endl;
        return 0;
    }

    seleccionKMenores(arreglo, tam, k);

    cout << "Los " << k << " menores elementos son: " << endl;
    for (int i = 0; i < k; i++)
    {
        cout << arreglo[i] << " ";
    }
    cout << endl;

    return 0;
}