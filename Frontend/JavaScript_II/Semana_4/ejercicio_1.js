// Crea un arreglo de tus comidas favoritas

let comidas = ["Pizza", "Sushi", "Tacos", "Pasta", "Hamburguesa"];

function mostrarComidasFavoritas() {
    console.log("Mis comidas favoritas son:");
    for (let i = 0; i < comidas.length; i++) {
        console.log((i + 1) + ". " + comidas[i]);
    }
}

mostrarComidasFavoritas();