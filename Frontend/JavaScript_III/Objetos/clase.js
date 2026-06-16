const persona = {
    nombre: "Abel",
    edad: 33,
    ciudad: "Cajamarca"
}

// clave => key (texto)
// valor => value (número, texto, arreglo, otro objeto, función)

console.log(persona.nombre);

const clave = "edad";
console.log(persona[clave]);

const auto = { marca: "Toyota" };

auto.modelo = "Corolla";
auto.marca = "Honda";
delete auto.modelo;

console.log(auto);

// MÉTODOS EN OBJETOS

const calculadora = {
    valor: 0,
    sumar(n) {
        this.valor += n; // valor = 5 + 5
        return this.valor; // 10
    }
};

console.log(calculadora.sumar(5));
console.log(calculadora.sumar(5));

// ITERAR SOBRE OBJETOS

// for...in => claves, una por una
// Object.keys(obj) => arreglo de claves: ['nombre', 'edad']
// Object.values(obj) => arreglo de valores: ['Abel', 33]
// Object.entries(obj) => arreglo de pares [clave, valor]

for (const clave in persona) {
    console.log(clave + ": " + persona[clave]);
}

console.log(Object.keys(persona));
console.log(Object.values(persona));
console.log(Object.entries(persona));
