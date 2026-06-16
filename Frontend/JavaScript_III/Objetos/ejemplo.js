// let persona = {
//     nombre: 'Carlos',
//     saludar: function () {
//         console.log(this.nombre);
//     }
// }

// persona.saludar();

let persona = {
    nombre: 'Carlos',
    saludar: () => {
        console.log(this.nombre);
    }
}

persona.saludar();