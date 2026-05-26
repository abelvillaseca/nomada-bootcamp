// Crea un arreglo de herramientas.
// Accede y muestra la primera herramienta.
// Accede y muestra la tercera herramienta.
// Modifica la segunda herramienta por “Taladro”.
// Intenta acceder a un índice que no existe (ej. el índice 5).
// Ejecuta y verifica los resultados.

let herramientas = ["Martillo", "Destornillador", "Llave inglesa", "Sierra"];

function mostrarHerramientas() {
    console.log("Arreglo original:");
    console.log(herramientas);

    console.log("\nPrimera herramienta:");
    console.log(herramientas[0]);

    console.log("\nTercera herramienta:");
    console.log(herramientas[2]);

    herramientas[1] = "Taladro";
    console.log("\nArreglo después de modificar la segunda herramienta:");
    console.log(herramientas);

    console.log("\nIntentando acceder a un índice que no existe (índice 5):");
    console.log(herramientas[5]);
}

mostrarHerramientas();