// Se tiene una cola con hombres muy traviesos. Por ello, se ordena dividir la cola en una de hombres y otra de mujeres.

// HHMHMMMH

// HHHH
// MMMM

#include <iostream>

using namespace std;

struct Nodo
{
    string nombre;
    char sexo;
    Nodo *siguiente;
};

void encolar(Nodo *&frente, Nodo *&final, string nombre, char sexo)
{
    Nodo *nuevo = new Nodo();

    nuevo->nombre = nombre;
    nuevo->sexo = sexo;
    nuevo->siguiente = NULL;

    if (frente == NULL)
    {
        frente = nuevo;
        final = nuevo;
    }
    else
    {
        final->siguiente = nuevo;
        final = nuevo;
    }
}

void dividirCola(Nodo *original, Nodo *&frenteH, Nodo *&finalH, Nodo *&frenteM, Nodo *&finalM)
{
    Nodo *aux = original;

    while (aux != NULL)
    {
        if (aux->sexo == 'H')
        {
            encolar(frenteH, finalH, aux->nombre, aux->sexo);
        }
        else
        {
            encolar(frenteM, finalM, aux->nombre, aux->sexo);
        }

        aux = aux->siguiente;
    }
}

void destruirCola(Nodo *&frente, Nodo *&final)
{
    while (frente != NULL)
    {
        Nodo *aux = frente;
        frente = frente->siguiente;
        delete aux;
    }
    final = NULL;
}

void mostrarCola(Nodo *frente)
{
    if (frente == NULL)
    {
        cout << "La cola está vacía." << endl;
        return;
    }

    Nodo *aux = frente;

    while (aux != NULL)
    {
        cout << aux->nombre << " (" << aux->sexo << ")" << endl;
        aux = aux->siguiente;
    }
}

int main()
{
    Nodo *frente = NULL;
    Nodo *final = NULL;

    Nodo *frenteH = NULL;
    Nodo *finalH = NULL;

    Nodo *frenteM = NULL;
    Nodo *finalM = NULL;

    int cantidad;

    cout << "Ingresa la cantidad de personas: ";
    cin >> cantidad; // 8

    cin.ignore();

    for (int i = 1; i <= cantidad; i++)
    {
        string nombre;
        char sexo;

        cout << "Datos de la persona " << i << ": " << endl;
        cout << "Nombre: "; // Pedro
        getline(cin, nombre);

        cout << "Sexo (H/M): "; // H
        cin >> sexo;

        cin.ignore();

        encolar(frente, final, nombre, sexo);
    }

    dividirCola(frente, frenteH, finalH, frenteM, finalM);

    cout << "\nCOLA DE HOMBRES: " << endl;
    mostrarCola(frenteH);

    cout << "\nCOLA DE MUJERES: " << endl;
    mostrarCola(frenteM);

    destruirCola(frente, final);
    destruirCola(frenteH, finalH);
    destruirCola(frenteM, finalM);

    return 0;
}