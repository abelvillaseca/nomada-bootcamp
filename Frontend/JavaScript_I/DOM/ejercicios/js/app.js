const boton = document.getElementById('btnCambiar')

boton.addEventListener('click', function () {
    const input = document.getElementById('nombre')
    input.value = 'Carlos'
})

const botnImg = document.getElementById('btnImagen')

botnImg.addEventListener('click', function () {
    const img = document.getElementById('imagen')
    img.src = 'images/dos.png'
    // img.setAttribute('src', 'images/dos.png')
})

const botonContar = document.getElementById('btnContar')
const resultado = document.getElementById('contador')

botonContar.addEventListener('click', function () {
    const elementos = document.getElementsByTagName('li')
    const cantidad = elementos.length
    resultado.textContent = `El documento tiene ${cantidad} elementos`
})
