// Dado un arreglo de cadenas que representan nombres de estudiantes, ordénalos alfabéticamente (de A a Z) utilizando
// el método de selección (Selection Sort).

// string nombres[6] = {"Carlos", "Ana", "Luis", "Beatriz", "David", "Elena"};

#include <iostream>

using namespace std;

void ingresarNombres(string nombres[], int tam)
{
    for (int i = 0; i < tam; i++)
    {
        cout << "Ingresa el nombre del estudiante " << i + 1 << ": ";
        getline(cin, nombres[i]);
    }
}

void mostrarNombres(string nombres[], int tam)
{
    for (int i = 0; i < tam; i++)
    {
        cout << nombres[i] << endl;
    }
}

void ordenarSeleccion(string nombres[], int tam)
{

    int menor;
    string aux;

    for (int i = 0; i < tam - 1; i++)
    {
        menor = i;
        for (int j = i + 1; j < tam; j++)
        {
            if (nombres[j] < nombres[menor])
            {
                menor = j;
            }
        }

        aux = nombres[i];
        nombres[i] = nombres[menor];
        nombres[menor] = aux;
    }
}

int main()
{

    string nombres[20];

    int tam;

    cout << "Ingresa la cantidad de estudiantes: ";
    cin >> tam;

    cin.ignore(); // Limpiar el buffer de entrada

    ingresarNombres(nombres, tam);

    cout << "\nNombres originales: " << endl;
    mostrarNombres(nombres, tam);

    ordenarSeleccion(nombres, tam);

    cout << "\nNombres ordenados: " << endl;
    mostrarNombres(nombres, tam);

    return 0;
}