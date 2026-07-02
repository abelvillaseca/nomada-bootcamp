function mapear(elemento, nivel = 0) {

    const sangria = " ".repeat(nivel);
    console.log(sangria + elemento.tagName);

    for (const hijo of elemento.children) {
        mapear(hijo, nivel + 1);
    }

}

mapear(document.body);

// TextContent
// InnerHTML

// XSS(Cross-site Scripting)

const mensaje = document.getElementById("mensaje");

mensaje.innerHTML = "<strong>Hola mundo</strong>";