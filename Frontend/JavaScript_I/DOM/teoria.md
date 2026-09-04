D = Document
O = Object
M = Model

parsing = parseo => convertir un string a un objeto

API = Application Programming Interface

nodos de elemento: las etiquetas de HTML
nodos de texto: los textos o el contenido de las etiquetas
nodos de atributo: los atributos de las etiquetas (class, id, href, etc)

MÉTODOS PARA OBTENER INFORMACIÓN DEL DOM

1. getElementById(id)
2. getElementsByClassName(class): devuelve una HTMLCollection viva (dinámica)
3. getElementsByTagName(tag): devuelve una HTMLCollection viva (dinámica)
4. querySelector(selector): devuelve el primer elemento que coincida con el selector
5. querySelectorAll(selector): devuelve una NodeList estática

Colección viva vs estática

EJERCICIOS:

1. Cambia el valor de un campo de entrada con getElementById
2. Cambia una imagen a otra al hacer clic en un botón
3. Muestra en pantalla cuántos elementos <li> tiene una lista
4. Crear un h1 con class=“titulo”. Usa getElementByClassName para cambiar su color a rojo cuando se haga clic en un botón
5. Selecciona el primer elemento con la clase "elementoDestacado" usando querySelector y cambia su color de fondo a amarillo.
6. Selecciona todos los enlaces (<a>) en el documento usando querySelectorAll y muestra la URL de cada enlace en la consola.
7. Selecciona todos los elementos <p> que tienen la clase “destacado” usando querySelectorAll y cambia su tamaño de fuente a 18px
8. Verifica si el elemento con el ID “miElemento” coincide con el selector CSS ".miClase". Usa matches()
