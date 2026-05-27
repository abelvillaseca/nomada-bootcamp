// Lee un número en base 10 y muestre su equivalente en base 2 por métodos recursivos.

#include <iostream>

using namespace std;

void convertirABase2(int numero)
{

    if (numero > 1) // 13 > 1
    {
        convertirABase2(numero / 2); 
        // convertirABase2(6) -> residuo 1
        // convertirABase2(3) -> residuo 0
        // convertirABase2(1) -> residuo 1
        // convertirABase2(0) -> residuo 1
    }
    cout << numero % 2;
}

int main()
{

    int numero;
    cout << "Ingrese un número en base 10: ";
    cin >> numero; // 13

    cout << "Su equivalente en base 2 es: ";
    convertirABase2(numero);
    cout << endl;

    return 0;
}