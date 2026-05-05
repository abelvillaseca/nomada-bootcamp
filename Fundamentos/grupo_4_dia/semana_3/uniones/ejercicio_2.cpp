// Utiliza una unión para representar un punto en un plano, permitiendo almacenar
// las coordenadas en formato cartesiano (X e Y) o en formato polar (radio y ángulo).

#include <iostream>

using namespace std;

struct Cartesiano {
    float x;
    float y;
};

struct Polar {
    float r;
    float angulo; // grados
};

union Punto {
    Cartesiano c;
    Polar p;
};

void ingresarCartesiano(Punto &p) {
    cout<<"Ingresa coordenada X: ";
    cin>>p.c.x;

    cout<<"Ingresa coordenada Y: ";
    cin>>p.c.y;
}

void ingresarPolar(Punto &p) {
    cout<<"Ingresa el radio: ";
    cin>>p.p.r;

    cout<<"Ingresa ángulo (grados): ";
    cin>>p.p.angulo;
}

void mostrar(Punto p, int tipo) {
    cout<<"\nDATOS DEL PUNTO: "<<endl;

    if(tipo == 1) {
      cout<<"Formato cartesiano: "<<endl;
      cout<<"X = "<<p.c.x<<endl;
      cout<<"Y = "<<p.c.y<<endl;
    }else {
      cout<<"Formato polar: "<<endl;
      cout<<"Radio = "<<p.p.r<<endl;
      cout<<"Ángulo = "<<p.p.angulo<<endl;
    }
}

int main() {

    Punto p;
    int tipo;

    cout<<"TIPO DE COORDENADAS: "<<endl;
    cout<<"1. Cartesiano (X, Y)"<<endl;
    cout<<"2. Polar (Radio, Ángulo)"<<endl;
    cout<<"Seleccione una opción: ";
    cin>>tipo;

    if(tipo == 1) {
      ingresarCartesiano(p);
    }else if(tipo == 2) {
      ingresarPolar(p);
    }else {
      cout<<"Opción inválida."<<endl;
      return 0;
    }

    mostrar(p, tipo);

    return 0;
}
