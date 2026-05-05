// Escribe un programa que mediante un menú, gestione los datos de un conjunto de
// alumnos en un curso determinado. Deberá tener las opciones de ingreso, consulta,
// modificación, eliminación y listado.

// C => CREATE (Crear)
// R => READ (Leer)
// U => UPDATE (Actualizar)
// D => DELETE (Eliminar)

#include <iostream>

using namespace std;

struct Alumno {
    int codigo;
    string nombre;
    float nota;
};

int buscarAlumno(Alumno alumnos[], int contador, int codigo) {

    for(int i = 0; i < contador; i++){
      if(alumnos[i].codigo == codigo){
        return i;
      }
    }

    return -1;
}

void agregarAlumno(Alumno alumnos[], int &contador) {

    cout<<"\nAGREGAR ALUMNO"<<endl;

    cout<<"Código: ";
    cin>>alumnos[contador].codigo;
    cin.ignore();

    cout<<"Nombre: ";
    getline(cin, alumnos[contador].nombre);

    cout<<"Nota: ";
    cin>>alumnos[contador].nota;

    contador++;
}

void consultarAlumno(Alumno alumnos[], int contador) {

    int codigo;
    cout<<"\nIngresa el código a buscar: ";
    cin>>codigo;
    cin.ignore();

    int posicion = buscarAlumno(alumnos, contador, codigo);

    if(posicion != -1){
      cout<<"\nALUMNO ENCONTRADO"<<endl;
      cout<<"Código: "<<alumnos[posicion].codigo<<endl;
      cout<<"Nombre: "<<alumnos[posicion].nombre<<endl;
      cout<<"Nota: "<<alumnos[posicion].nota<<endl;
    }else {
      cout<<"\nAlumno no encontrado."<<endl;
    }
}

void modificarAlumno(Alumno alumnos[], int contador) {

    int codigo;
    cout<<"\nIngresa el código a buscar: ";
    cin>>codigo;
    cin.ignore();

    int posicion = buscarAlumno(alumnos, contador, codigo);

    if(posicion != -1){
      cout<<"\nINGRESA LOS NUEVOS DATOS: "<<endl;

      cout<<"Nuevo nombre: ";
      getline(cin, alumnos[posicion].nombre);

      cout<<"Nueva nota: ";
      cin>>alumnos[posicion].nota;

      cout<<"Alumno modificado correctamente."<<endl;

    }else {
      cout<<"\nAlumno no encontrado."<<endl;
    }
}

void eliminarAlumno(Alumno alumnos[], int &contador) {

    int codigo;
    cout<<"\nIngresa el código a buscar: ";
    cin>>codigo;

    int posicion = buscarAlumno(alumnos, contador, codigo);

    if(posicion != -1){
      for(int i = posicion; i < contador - 1; i++){
        alumnos[i] = alumnos[i + 1];
      }
      contador--;

      cout<<"Alumno eliminado correctamente."<<endl;
    }else {
      cout<<"Alumno no encontrado."<<endl;
    }
}

void listarAlumnos(Alumno alumnos[], int contador) {

    cout<<"\nLISTADO DE ALUMNOS: "<<endl;

    for(int i = 0; i < contador; i++){
      cout<<"\nAlumno "<<i + 1<<": "<<endl;
      cout<<"Código: "<<alumnos[i].codigo<<endl;
      cout<<"Nombre: "<<alumnos[i].nombre<<endl;
      cout<<"Nota: "<<alumnos[i].nota<<endl;
    }
}

int main() {

    Alumno alumnos[50];
    int contador = 0;
    int opcion;

    do{
      cout<<"=== MENÚ ==="<<endl;
      cout<<"1. Agregar alumno"<<endl;
      cout<<"2. Consultar alumno"<<endl;
      cout<<"3. Modificar alumno"<<endl;
      cout<<"4. Eliminar alumno"<<endl;
      cout<<"5. Listar alumnos"<<endl;
      cout<<"6. Salir"<<endl;
      cout<<"Opción: ";
      cin>>opcion;

      switch(opcion){
        case 1: agregarAlumno(alumnos, contador);
                break;
        case 2: consultarAlumno(alumnos, contador);
                break;
        case 3: modificarAlumno(alumnos, contador);
                break;
        case 4: eliminarAlumno(alumnos, contador);
                break;
        case 5: listarAlumnos(alumnos, contador);
                break;
        case 6: cout<<"Saliendo..."<<endl;
                break;
        default: cout<<"Opción inválida."<<endl;
      }

    }while(opcion != 6);

    return 0;
}
