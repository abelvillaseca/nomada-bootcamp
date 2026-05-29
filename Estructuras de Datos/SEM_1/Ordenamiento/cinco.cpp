// Dada una matriz (arreglo bidimensional), ordena cada fila de manera ascendente utilizando el método burbuja o selección.

// matriz de 3 x 3

// 4, 2, 7
// 1, 9, 3
// 8, 5, 6

// Primera fila ordenada: 2, 4, 7
// Segunda fila ordenada: 1, 3, 9
// Tercera fila ordenada: 5, 6, 8

#include <iostream>

using namespace std;

void ingresarMatriz(int matriz[][20], int filas, int columnas)
{
    for (int i = 0; i < filas; i++)
    {
        for (int j = 0; j < columnas; j++)
        {
            cout << "Ingresa el elemento [" << i + 1 << "][" << j + 1 << "]: ";
            cin >> matriz[i][j];
        }
    }
}

void mostrarMatriz(int matriz[][20], int filas, int columnas)
{
    for (int i = 0; i < filas; i++)
    {
        for (int j = 0; j < columnas; j++)
        {
            cout << matriz[i][j] << " ";
        }
        cout << endl;
    }
}

void ordenarFilasBurbuja(int matriz[][20], int filas, int columnas)
{
    int aux;

    for (int i = 0; i < filas; i++)
    {
        for (int j = 0; j < columnas - 1; j++)
        {
            for (int k = 0; k < columnas - 1 - j; k++)
            {
                if (matriz[i][k] > matriz[i][k + 1])
                {
                    aux = matriz[i][k];
                    matriz[i][k] = matriz[i][k + 1];
                    matriz[i][k + 1] = aux;
                }
            }
        }
    }
}

int main()
{
    int matriz[20][20];
    int filas, columnas;

    cout << "Ingresa el número de filas: ";
    cin >> filas;
    cout << "Ingresa el número de columnas: ";
    cin >> columnas;

    ingresarMatriz(matriz, filas, columnas);
    cout << "Matriz original:" << endl;
    mostrarMatriz(matriz, filas, columnas);

    ordenarFilasBurbuja(matriz, filas, columnas);
    cout << "Matriz ordenada:" << endl;
    mostrarMatriz(matriz, filas, columnas);

    return 0;
}