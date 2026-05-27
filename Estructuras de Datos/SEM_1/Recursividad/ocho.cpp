// Encuentra el máximo elemento de un arreglo usando recursividad.

// [4, 9, 2, 7] -> 9
// max([4, 9, 2, 7])
// 7 con 9 => 9
// 2 con 9 => 9
// 9 con 4 => 9
// max([4]) -> 4

// Max(n) = max(arreglo[n - 1], Max(n - 1))
// Caso base: Max(1) = arreglo[0]

#include <iostream>

using namespace std;

int buscarMaximo(int arreglo[], int n)
{

    // caso base
    if (n == 1)
    {
        return arreglo[0];
    }

    int maxRestante = buscarMaximo(arreglo, n - 1);
    return (arreglo[n - 1] > maxRestante) ? arreglo[n - 1] : maxRestante;

    // [3, 11, 7, 5]
    // buscarMaximo(arreglo, 4)
    // 5 con 11 => 11
    // 7 con 11 => 11
    // 11 con 3 => 11
    // return arreglo[0] -> 3
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

    int maximo = buscarMaximo(arreglo, tam);
    cout << "El máximo elemento del arreglo es: " << maximo << endl;

    return 0;
}