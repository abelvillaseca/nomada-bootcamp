// Dado un arreglo de precios sin IGV, genera uno nuevo con el IGV (18%) incluido: 
// - Arreglo precios = [100, 250, 80]. 
// - Usa map para crear preciosConIGV multiplicando cada uno por 1.18. 
// - El arreglo original NO debe modificarse (compruébalo imprimiéndolo después). 
// - Redondea cada resultado a 2 decimales con .toFixed(2).

let precios = [100, 250, 80]

let preciosConIGV = precios.map(
    function (precio) {
        return (precio * 1.18).toFixed(2)
    }
)

console.log(`\nPrecios originales: ${precios}`);
console.log(`\nPrecios con IGV: ${preciosConIGV}`);

console.log(`\nPrecios originales: ${precios}`);