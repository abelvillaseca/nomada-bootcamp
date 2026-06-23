// getElementById("id") => 1 elemento o null
// getElementsByClassName("clase") => HTMLCollection viva
// getElementsByTagName("p") => HTMLCollection viva
// querySelector("css") -> 1 elemento o null
// querySelectorAll("css") => NodeList estática

// Colección (lista) de elementos HTML => Es similar a un arreglo, pero no es un arreglo

let parrafos = document.getElementsByTagName("p");

console.log(parrafos[0]); // Primer párrafo
console.log(parrafos[1]); // Segundo párrafo

console.log(parrafos.length);
