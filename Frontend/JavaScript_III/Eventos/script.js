// const boton = document.getElementById("btn");
// const input = document.querySelector("input")

// boton.addEventListener("click", () => {
//     alert("Hiciste clic en el botón");
// });

// input.addEventListener("keydown", (e) => {
//     console.log(e.key);
//     console.log(e.target);
//     console.log(e.currentTarget);
//     console.log(e.type);
// });

// const botones = document.querySelectorAll("button");
const lista = document.getElementById("lista");

// botones.forEach((boton) => {
//     boton.addEventListener("click", () => {
//         console.log("Botón presionado.");
//     });
// });

lista.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        console.log("Botón presionado.");
    }
});

const enlace = document.getElementById("enlace");

enlace.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("La navegación fue cancelada");
});

const padre = document.getElementById("padre");
const hijo = document.getElementById("hijo");

padre.addEventListener("click", () => {
    console.log("Se hizo click en el padre");
});

hijo.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Se hizo click en el hijo");
});