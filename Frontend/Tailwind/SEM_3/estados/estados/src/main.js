import './style.css'

const html = document.documentElement

const themeBtn = document.querySelector('#themeBtn')
const menuBtn = document.querySelector('#menuBtn')
const mobileMenu = document.querySelector('#mobileMenu')

themeBtn.addEventListener('click', () => {
    html.classList.toggle('dark')
})

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
})
