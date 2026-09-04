// Modificar contenido h1

const title = document.getElementById('title')
console.log('Esto es lo que se extrajo: ', title)
console.log(title.textContent)

function changeTitle() {
    title.textContent = 'Hola Mundo'
}

let elementos = document.getElementsByClassName('parrafo')
console.log(elementos[1].textContent)

let divs = document.getElementsByTagName('div')
console.log(divs.length)

let elemento = document.querySelector('.texto')
console.log(elemento.textContent)

let elementos2 = document.querySelectorAll('.texto')
console.log(elementos2)
elementos2.forEach((el) => console.log(el.textContent))
