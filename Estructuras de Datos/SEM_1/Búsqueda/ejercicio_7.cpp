// Escribe un programa que realice una búsqueda secuencial recursiva en un arreglo

// for => Recorrido secuencial tradicional
// Una función recursiva (que se llama a sí misma)

// n (o tam) = 5
// if tam >= 5 (caso base)
// 10 20 30 40 50
// Buscar 30
// Posición = 2

#include <iostream>

using namespace std;

int buscaElemento(int arreglo[], int tam, int numeroABuscar, int posicion)
{
    if (posicion >= tam)
    {
        return -1;
    }

    if (arreglo[posicion] == numeroABuscar)
    {
        return posicion;
    }

    return buscaElemento(arreglo, tam, numeroABuscar, posicion + 1);
}

int main()
{

    int tam;

    cout << "Ingresa la cantidad de elementos del arreglo: ";
    cin >> tam;

    int arreglo[tam];

    for (int i = 0; i < tam; i++)
    {
        cout << "Elemento [" << i << "]: ";
        cin >> arreglo[i];
    }

    int numeroABuscar;

    cout << "Ingresa el número a buscar: ";
    cin >> numeroABuscar;

    int posicion = buscaElemento(arreglo, tam, numeroABuscar, 0);

    if (posicion != -1)
    {
        cout << "\nNúmero encontrado en la posición: " << posicion << endl;
    }
    else
    {
        cout << "\nNúmero no encontrado." << endl;
    }

    return 0;
}