// Calcula el factorial de un número mediante una función recursiva.

// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 0! = 1

// n! = n * (n - 1)!   si n > 0

// factorial(5)
// 5 * factorial(4)
// 5 * 4 * factorial(3)
// 5 * 4 * 3 * factorial(2)
// 5 * 4 * 3 * 2 * factorial(1)
// 5 * 4 * 3 * 2 * 1
// 120

#include <iostream>

using namespace std;

int factorial(int n)
{

    if (n == 0 || n == 1)
    {
        return 1;
    }

    return n * factorial(n - 1);
    // 5 * factorial(4)
    // 5 * (4 * factorial(3))
    // 5 * (4 * (3 * factorial(2)))
    // 5 * (4 * (3 * (2 * factorial(1))))
    // 5 * (4 * (3 * (2 * 1)))
    // 120
}

int main()
{
    int numero;
    cout << "Ingrese un número: ";
    cin >> numero; // 5

    int resultado = factorial(numero); // factorial(5)

    cout << "El factorial de " << numero << " es: " << resultado << endl;

    return 0;
}