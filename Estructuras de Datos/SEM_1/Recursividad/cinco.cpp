// Obtén el producto de dos enteros a y b de manera recursiva.

// 3 x 4 =  3 + 3 + 3 + 3 = 12

#include <iostream>

using namespace std;

int multiplicacion(int a, int b)
{

    if (b == 0)
    {
        return 0;
    }

    return a + multiplicacion(a, b - 1);
    // 3 + multiplicacion(3, 3)
    // 3 + (3 + multiplicacion(3, 2))
    // 3 + (3 + (3 + multiplicacion(3, 1)))
    // 3 + (3 + (3 + (3 + multiplicacion(3, 0))))
    // 3 + (3 + (3 + (3 + 0)))
    // 12
}

int main()
{

    int a, b;

    cout << "Ingrese el primer número: ";
    cin >> a; // 3
    cout << "Ingrese el segundo número: ";
    cin >> b; // 4

    int resultado = multiplicacion(a, b);

    cout << "El resultado de " << a << " x " << b << " es: " << resultado << endl;

    return 0;
}