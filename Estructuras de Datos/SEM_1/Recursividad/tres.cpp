// Calcula el enésimo número Fibonacci mediante una función recursiva.

// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

// fib(n) = fib(n - 1) + fib(n - 2)   si n > 1
// fib(0) = 0
// fib(1) = 1

#include <iostream>

using namespace std;

int fibonacci(int numero)
{

    if (numero == 0)
    {
        return 0;
    }

    if (numero == 1)
    {
        return 1;
    }

    return fibonacci(numero - 1) + fibonacci(numero - 2);
}

int main()
{

    int numero, resultado;

    cout << "Ingrese un número: ";
    cin >> numero;

    resultado = fibonacci(numero);

    cout << "El número de Fibonacci en la posición " << numero << " es: " << resultado << endl;

    return 0;
}