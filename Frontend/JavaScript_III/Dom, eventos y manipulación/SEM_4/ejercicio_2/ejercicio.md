Tabla dinámica desde datos
Genera una tabla HTML completa a partir de un arreglo de objetos, construyéndola en memoria y 
agregándola al DOM una sola vez (aplicando lo que vimos sobre reflow).

Requerimientos
- Parte de un arreglo de objetos { nombre, edad, ciudad } (mínimo 4).
- Crea una <table>, una fila de encabezados con las claves y una fila por cada objeto.
- Usa createElement, forEach, Object.keys y Object.values.
- Aplica una clase a las filas pares para lograr un efecto "cebra".
- Inserta la tabla en el DOM una sola vez, ya completamente armada.