// Crea un arreglo de precios.
// Itera e imprime cada precio usando un bucle for clásico, mostrando el índice.
// Itera e imprime cada precio usando forEach( ) con función flecha, mostrando un mensaje.
// Itera e imprime cada precio usando for…of, solo el valor.
// Itera usando for…in y observa los índices como strings (para demostrar).

function mostrarPrecios() {

    let precios = [10.99, 5.49, 20.00, 15.75];

    console.log('ARREGLO DE PRECIOS: ');
    console.log(precios);

    console.log('\nUSANDO FOR CLÁSICO: ');
    for (let i = 0; i < precios.length; i++) { // 3
        console.log(`Índice ${i}: Precio $${precios[i]}`);
    }

    console.log('\nUSANDO forEach CON FUNCIÓN FLECHA: ');
    precios.forEach((precio, index) => {
        console.log(`Producto en posición ${index} tiene un precio de $${precio}`);
    });

    console.log('\nUSANDO for…of: ');
    for (let precio of precios) {
        console.log(`Precio: $${precio}`);
    }

    console.log('\nUSANDO for…in: ');
    for (let index in precios) {
        console.log(`Índice (como string) ${index}: Precio $${precios[index]} - Tipo de índice: ${typeof index}`);
    }
}

mostrarPrecios();