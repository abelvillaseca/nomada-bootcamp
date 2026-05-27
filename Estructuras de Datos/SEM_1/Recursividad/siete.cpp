// Calcula la suma de los elementos de un arreglo. Usa funciones recursivas.

// [10, 20, 30, 40] -> 100
// suma = arreglo[0] + suma(arreglo[1...n-1])
// s(n) = a[n - 1] + s(n - 1)
// s(0) = 0

// [5, 3, 8, 2] -> 18

// 5 + 13 = 18
// 3 + 10 = 13
// 8 + 2 = 10
// 2 + 0 = 2
// 0

#include <iostream>

using namespace std;

int sumar(int arreglo[], int n)
{

    if (n == 0)
    {
        return 0;
    }

    return arreglo[n - 1] + sumar(arreglo, n - 1);
}

int main()
{

    int arreglo[20];

    int tam;
    cout << "Ingrese el número de elementos del arreglo: ";
    cin >> tam;

    for (int i = 0; i < tam; i++)
    {
        cout << "Ingrese el elemento " << i + 1 << ": ";
        cin >> arreglo[i];
    }

    int resultado = sumar(arreglo, tam);
    cout << "La suma de los elementos del arreglo es: " << resultado << endl;

    return 0;
}