// Dado un arreglo de precios de productos, ordénalos de mayor a menor utilizando el método burbuja.

// float precios[5] = {19.99, 5.49, 12.75, 3.99, 25.00};

#include <iostream>

using namespace std;

void ingresarPrecios(float precios[], int tam)
{
    for (int i = 0; i < tam; i++)
    {
        cout << "Ingresa el precio del producto " << i + 1 << ": ";
        cin >> precios[i];
    }
}

void mostrarPrecios(float precios[], int tam)
{
    for (int i = 0; i < tam; i++)
    {
        cout << precios[i] << " ";
    }
    cout << endl;
}

void ordenarBurbuja(float precios[], int tam)
{

    float aux;

    for (int i = 0; i < tam - 1; i++) // [45.5, 12, 78.9, 30.40]
    {
        for (int j = 0; j < tam - 1 - i; j++)
        {
            if (precios[j] < precios[j + 1]) // 12 < 78.9
            {
                aux = precios[j]; // aux = 12
                precios[j] = precios[j + 1]; // precios[1] = 78.9
                precios[j + 1] = aux; // precios[2] = 12
                // [45.5, 78.9, 12, 30.40]
                // [45.5, 78.9, 30.40, 12]
            }
        }
    }
}

int main()
{

    float precios[20];
    int tam;

    cout << "Ingresa la cantidad de precios: ";
    cin >> tam;

    ingresarPrecios(precios, tam);
    cout << "Precios ingresados: ";
    mostrarPrecios(precios, tam);
    ordenarBurbuja(precios, tam);
    cout << "Precios ordenados de mayor a menor: ";
    mostrarPrecios(precios, tam);

    return 0;
}