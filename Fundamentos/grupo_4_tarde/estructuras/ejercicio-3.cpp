// Crear una estructura Producto para almacenar el nombre, precio y cantidad en
// stock de un producto en una tienda. El programa permitirá al usuario ingresar
// los datos de varios productos, luego buscará el producto con el mayor precio
// y el que tenga la mayor cantidad en stock, y mostrará sus detalles.

#include <iostream>

using namespace std;

struct Producto {
    string nombre;
    float precio;
    int stock;
};

void llenarProductos(Producto productos[], int cantidad) {

    for(int i = 0; i < cantidad; i++){

      cout<<"\nProducto "<<i + 1<<": "<<endl;

      cout<<"Nombre: ";
      getline(cin, productos[i].nombre);

      cout<<"Precio: ";
      cin>>productos[i].precio;

      cout<<"Stock: ";
      cin>>productos[i].stock;

      cin.ignore();

    }
}

int buscarMayorPrecio(Producto productos[], int cantidad) {

    int mayor = 0;

    for(int i = 1; i < cantidad; i++){
      if(productos[i].precio > productos[mayor].precio){
        mayor = i;
      }
    }

    return mayor; // mayor => posición
}

int buscarMayorStock(Producto productos[], int cantidad) {

    int mayor = 0;

    for(int i = 1; i < cantidad; i++){
      if(productos[i].stock > productos[mayor].stock){
        mayor = i;
      }
    }

    return mayor; // mayor => posición
}

void mostrarProducto(Producto p) {

    cout<<"\nNombre: "<<p.nombre<<endl;
    cout<<"Precio: "<<p.precio<<endl;
    cout<<"Stock: "<<p.stock<<endl;

}

int main() {

    int cantidad;

    cout<<"Ingresa la cantidad de productos: ";
    cin>>cantidad;

    cin.ignore();

    Producto productos[50]; // Instancia => Objeto

    llenarProductos(productos, cantidad);

    int posMayorPrecio = buscarMayorPrecio(productos, cantidad);
    int posMayorStock = buscarMayorStock(productos, cantidad);

    cout<<"\nPRODUCTO CON MAYOR PRECIO: ";
    mostrarProducto(productos[posMayorPrecio]);

    cout<<"\nPRODUCTO CON MAYOR STOCK: ";
    mostrarProducto(productos[posMayorStock]);

    return 0;
}
