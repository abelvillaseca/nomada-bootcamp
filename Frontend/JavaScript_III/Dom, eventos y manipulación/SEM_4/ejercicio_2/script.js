const personas = [
    {
        nombre: "Hugo",
        edad: 25,
        ciudad: "Lima"
    },
    {
        nombre: "Paco",
        edad: 29,
        ciudad: "Lima"
    },
    {
        nombre: "Luis",
        edad: 17,
        ciudad: "Cajamarca"
    },
    {
        nombre: "Luciana",
        edad: 11,
        ciudad: "Pucallpa"
    }
];

const tabla = document.createElement("table");

const filaEncabezado = document.createElement("tr");

Object.keys(personas[0]).forEach(function (clave) {
    const th = document.createElement("th");
    th.textContent = clave;
    filaEncabezado.appendChild(th);
});

tabla.appendChild(filaEncabezado);

personas.forEach(function (persona, indice) {
    const fila = document.createElement("tr");

    if (indice % 2 !== 0) {
        fila.classList.add("par");
    }

    Object.values(persona).forEach(function (valor) {
        const td = document.createElement("td");
        td.textContent = valor;
        fila.appendChild(td);
    });

    tabla.appendChild(fila);
});

const contenedor = document.getElementById("contenedor");

contenedor.appendChild(tabla);