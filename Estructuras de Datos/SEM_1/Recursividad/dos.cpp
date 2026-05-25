// Usando métodos recursivos, obtén la suma de los n primeros números naturales positivos.

// n = 5
// 1 + 2 + 3 + 4 + 5 = 15

// suma(n) = 1 + 2 + 3 + ... + n

// suma(5)
// = 5 + suma(4)
// = 5 + (4 + suma(3))
// = 5 + (4 + (3 + suma(2)))
// = 5 + (4 + (3 + (2 + suma(1))))
// = 5 + (4 + (3 + (2 + 1)))
// = 15

#include <iostream>

using namespace std;

int sumaNaturalesPositivos(int n)
{
    if (n == 1)
    {
        return 1;
    }

    return n + sumaNaturalesPositivos(n - 1);
    // 5 + sumaNaturalesPositivos(4)
    // 5 + (4 + sumaNaturalesPositivos(3))
    // 5 + (4 + (3 + sumaNaturalesPositivos(2)))
    // 5 + (4 + (3 + (2 + sumaNaturalesPositivos(1))))
    // 5 + (4 + (3 + (2 + 1)))
    // 15
}

int main()
{

    int numero, resultado;

    cout << "Ingrese un número: ";
    cin >> numero;

    resultado = sumaNaturalesPositivos(numero);

    cout << "La suma de los " << numero << " primeros números naturales positivos es: " << resultado << endl;

    return 0;
}