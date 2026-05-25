// Usando recursividad, determina si un número es par o impar.

// n = 8
// 8 - 2 = 6
// 6 - 2 = 4
// 4 - 2 = 2
// 2 - 2 = 0 (par)

// n = 7
// 7 - 2 = 5
// 5 - 2 = 3
// 3 - 2 = 1 (impar)

// n = 0 (par)
// n = 1 (impar)

#include <iostream>

using namespace std;

bool esPar(int numero)
{

    if (numero == 0)
    {
        return true;
    }

    if (numero == 1)
    {
        return false;
    }

    return esPar(numero - 2);
}

int main()
{

    int numero;
    cout << "Ingrese un número: ";
    cin >> numero; // 4

    if (esPar(numero))
    {
        cout << "El número " << numero << " es par." << endl;
    }
    else
    {
        cout << "El número " << numero << " es impar." << endl;
    }

    return 0;
}