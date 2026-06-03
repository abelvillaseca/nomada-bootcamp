// Escribe un programa que permita al usuario ingresar un arreglo. Luego, busca un número dado y muestra
// la posición de su primera y última aparición en el arreglo usando una función de búsqueda secuencial.

#include <iostream>

using namespace std;

// 10 25 30 25 40 25 50
// numBuscar = 25
// Primera aparición => 1
// Última aparición => 5

void buscarPrimeraUltima(int arr[], int tam, int numBuscar, int &primera, int &ultima)
{
    for (int i = 0; i < tam; i++) // i = 7
    {
        if (arr[i] == numBuscar) // 50 == 25?
        {
            if (primera == -1)
            {
                primera = i; // primera = 1
            }
            ultima = i; // ultima = 5
        }
    }
}

int main()
{

    int tam, numBuscar;

    cout << "Ingresa la cantidad de elementos: ";
    cin >> tam;

    int arr[tam];

    cout << "Ingresa los elementos del arreglo: " << endl;
    for (int i = 0; i < tam; i++)
    {
        cout << "Ingrese el elemento " << i + 1 << ": ";
        cin >> arr[i];
    }

    cout << "Ingresa el número a buscar: ";
    cin >> numBuscar;

    int primera = -1;
    int ultima = -1;

    buscarPrimeraUltima(arr, tam, numBuscar, primera, ultima);

    if (primera != -1)
    {
        cout << "\nPrimera aparición: " << primera << endl; // Primera aparición: 1
        cout << "\nÚltima aparición: " << ultima << endl;   // Última aparición: 5
    }
    else
    {
        cout << "\nNúmero no encontrado" << endl;
    }

    return 0;
}