// Elabora un programa que implemente una pila para verificar si una expresión matemática está correctamente
// balanceada. La expresión puede contener paréntesis, corchetes y llaves. El programa debe ser capaz de verificar
// si cada apertura de un símbolo tiene su correspondiente cierre.

// (), [], {}
// (5 + 8) => Válido
// {[(5 + 8) * 3]} => Válido
// {(]} => No Válido

// LIFO => Last in first out

#include <iostream>
#include <stack>
#include <string>

using namespace std;

bool esPar(char apertura, char cierre)
{
    return (apertura == '(' && cierre == ')') ||
           (apertura == '[' && cierre == ']') ||
           (apertura == '{' && cierre == '}');
}

bool estaBalanceada(string expresion)
{
    stack<char> pila;

    for (char caracter : expresion)
    {
        if (caracter == '(' || caracter == '[' || caracter == '{')
        {
            pila.push(caracter);
        }
        else if (caracter == ')' || caracter == ']' || caracter == '}')
        {
            if (pila.empty())
            {
                return false;
            }

            if (!esPar(pila.top(), caracter))
            {
                return false;
            }

            pila.pop();
        }
    }

    return pila.empty();
}

int main()
{
    string expresion;

    cout << "Ingresa una expresión matemática: ";
    getline(cin, expresion); // {[(5 + 8) * 3]}

    if (estaBalanceada(expresion))
    {
        cout << "\nLa expresión está balanceada." << endl;
    }
    else
    {
        cout << "\nLa expresión no está balanceada." << endl;
    }

    return 0;
}