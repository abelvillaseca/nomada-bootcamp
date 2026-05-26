// Crea una lista de tareas vacía.
// Añade tres tareas al final usando push( ).
// Completa la última tarea (elimínala usando pop( )).
// Añade una tarea urgente al inicio usando unshift( ).
// Procesa la primera tarea (elimínala usando shift( )).
// Ejecuta y verifica cómo el arreglo cambia con cada operación.

let listaTareas = [];

function administrarTareas() {
    console.log("Lista de tareas inicial:", listaTareas);

    listaTareas.push("Comprar comida");
    listaTareas.push("Lavar el coche");
    listaTareas.push("Pagar facturas");
    console.log("Después de añadir tareas:", listaTareas);

    listaTareas.pop();
    console.log("Después de completar la última tarea:", listaTareas);

    listaTareas.unshift("Pagar recibo de agua");
    console.log("Después de añadir una tarea urgente al inicio:", listaTareas);

    listaTareas.shift();
    console.log("Después de procesar la primera tarea:", listaTareas);
}

administrarTareas();