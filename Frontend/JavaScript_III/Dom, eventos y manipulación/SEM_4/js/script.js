function mapear(elemento, nivel = 0) {

    const sangria = " ".repeat(nivel);
    console.log(sangria + elemento.tagName);

    for (const hijo of elemento.children) {
        mapear(hijo, nivel + 1);
    }

}

mapear(document.body);