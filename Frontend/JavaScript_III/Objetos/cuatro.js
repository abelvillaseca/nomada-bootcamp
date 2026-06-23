// Usa notación de corchetes para acceder a propiedades cuyo nombre está en una variable.

// Requerimientos

// Objeto menu con varios platos y sus precios.
// Función precioDe(plato) que reciba el nombre del plato como texto.
// Debe usar menu[plato] para devolver el precio.
// Si el plato no existe, retorna "No disponible".

const readline = require('readline-sync');

let menu = {
    "ceviche": 35,
    "Lomo Saltado": 32,
    "Arroz con Pollo": 22,
    "Ají de Gallina": 28,
    "Tallarines Verdes": 25
};

let plato = readline.question("Ingresa el nombre del plato: ");

function precioDe(plato) {
    if (menu[plato] != undefined) {
        return "S/ " + menu[plato];
    }

    return "Plato no disponible.";
}

console.log("Precio: " + precioDe(plato));