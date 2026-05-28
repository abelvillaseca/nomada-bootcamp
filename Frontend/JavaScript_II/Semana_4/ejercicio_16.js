// Dado un arreglo de comentarios, reemplaza cualquier palabra ofensiva (ej: "tonto") por "***".

// .replace(/tonto/g, "***") es una expresión regular que busca todas las ocurrencias de la palabra "tonto" en el comentario 
// y las reemplaza por "***".

let comentarios = [
    "Eres un tonto",
    "No me gusta tu trabajo",
    "Eres un tonto y un inútil",
    "¡Qué tonto eres!"
];

console.log("Comentarios originales:");

for (let comentario of comentarios) {
    console.log(comentario);
}

console.log("\nComentarios filtrados:");

for (let i = 0; i < comentarios.length; i++) {
    let comentarioActual = comentarios[i];

    if (comentarioActual.includes("tonto")) {
        comentarioActual = comentarioActual.replace("tonto", "***");
    }
    console.log(comentarioActual);
}