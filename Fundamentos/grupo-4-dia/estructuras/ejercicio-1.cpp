// Crea una estructura Estudiante que contenga un array de 5 calificaciones.
// Luego, crea una función para calcular el promedio de las calificaciones y
// otra para mostrar los datos del estudiante.

#include <iostream>

using namespace std;

struct Estudiante {
    string nombre;
    float calificaciones[5];
};

void llenarEstudiante(Estudiante &e) {

    cout<<"Ingresa el nombre del estudiante: ";
    getline(cin, e.nombre);

    for(int i = 0; i < 5; i++){
      cout<<"Ingresa la calificación "<<i + 1<<": ";
      cin>>e.calificaciones[i];
    }

    cin.ignore();
}

float calcularPromedio(Estudiante e) {

    float suma = 0;

    for(int i = 0; i < 5; i++){
      suma += e.calificaciones[i];
    }

    float promedio = suma / 5;

    return promedio;
}

void mostrarEstudiante(Estudiante e) {

    cout<<"=== DATOS DEL ESTUDIANTE ==="<<endl;

    cout<<"Nombre: "<<e.nombre<<endl;

    cout<<"Calificaciones: ";
    for(int i = 0; i < 5; i++){
      cout<<e.calificaciones[i]<<" ";
    }

    cout<<endl;

    float promedio = calcularPromedio(e);

    cout<<"Promedio: "<<promedio<<endl;
}

int main() {

    Estudiante est;

    llenarEstudiante(est);
    mostrarEstudiante(est);

    return 0;
}
