// Sistema de Atención de Clientes en una Tienda

// Una tienda desea simular la atención de clientes usando arreglos en JavaScript.

// Debes crear un programa que permita administrar una fila de clientes realizando diferentes operaciones sobre el arreglo.

// 1. Crear un arreglo vacío llamado colaClientes.
// 2. Crear funciones para:
//     - Agregar clientes normales al final de la cola usando push().
//     - Agregar clientes VIP al inicio usando unshift().
//     - Atender al primer cliente usando shift().
//     - Cancelar el último cliente usando pop().
//     - Mostrar el estado actual de la cola.
// 3. Simular varias operaciones de atención.
// 4. Mostrar en consola cómo cambia la cola después de cada operación.

// Debes usar:

// Arreglos
// Funciones
// Manipulación dinámica de datos
// Métodos:
// - push()
// - pop()
// - unshift()
// - shift()

let colaClientes = [];

function mostrarCola() {

    if (colaClientes.length === 0) {
        console.log("La cola de clientes está vacía.");
    } else {
        console.log("Estado actual de la cola:", colaClientes);
    }
}

function agregarClienteNormal(nombre) {

    colaClientes.push(nombre);

    console.log(`Cliente normal "${nombre}" agregado al final de la cola.`);
}

function agregarClienteVIP(nombre) {

    colaClientes.unshift(nombre);

    console.log(`Cliente VIP "${nombre}" agregado al inicio de la cola.`);
}

function atenderCliente() {

    if (colaClientes.length === 0) {
        console.log("No hay clientes para atender.");
    } else {
        const clienteAtendido = colaClientes.shift();
        console.log(`Cliente "${clienteAtendido}" ha sido atendido.`);
    }
}

function cancelarUltimoCliente() {

    if (colaClientes.length === 0) {
        console.log("No hay clientes para cancelar.");
    } else {
        const clienteCancelado = colaClientes.pop();
        console.log(`Cliente "${clienteCancelado}" ha sido cancelado de la cola.`);
    }
}

agregarClienteNormal("Juan"); // ["Juan"]
agregarClienteNormal("María"); // ["Juan", "María"]

mostrarCola();

agregarClienteVIP("Abel"); // ["Abel", "Juan", "María"]

mostrarCola();

atenderCliente();

mostrarCola(); // ["Juan", "María"]

cancelarUltimoCliente();

mostrarCola(); // ["Juan"]