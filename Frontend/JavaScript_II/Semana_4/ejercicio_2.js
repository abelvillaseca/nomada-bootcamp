// Crea un arreglo con las edades de 3 personas imaginarias.

let edades = [25, 30, 35];

function mostrarEdades() {
    console.log("Las edades de las personas son:");
    for (let i = 0; i < edades.length; i++) {
        console.log((i + 1) + ". " + edades[i] + " años");
    }
}

mostrarEdades();