Crea una carpeta con index.html y estilos.css conectados. Dentro del HTML pon: tu nombre en un <h1>, 
tu rol en un <p>, y un enlace <a> a tu red social favorita. Luego, solo desde el CSS, consigue que:

- El fondo de la página sea un gris muy claro.
- El <h1> tenga un color distinto al del texto normal.
- Toda la página use una tipografía sans-serif.

Al terminar, abre las DevTools, selecciona tu <h1> y localiza en el panel Styles la regla de color que escribiste.

=====================================

Te doy este HTML fijo. No puedes modificarlo. Todo debe resolverse desde el CSS usando selectores:

index.html (no modificar)
<ul class="tareas">
  <li>Estudiar selectores</li>
  <li class="hecho">Instalar VS Code</li>
  <li>Crear primer CSS</li>
</ul>
Consigue que:

- Los <li> dentro de .tareas no muestren la viñeta de lista.

- El primer <li> esté en negrita.
Los <li> con clase hecho aparezcan tachados y en gris.

- Antes de cada tarea NO hecha aparezca un ▸ de color cian (usa ::before y :not()).

=====================================

Diseñar una página sencilla para una
cafetería aplicando los conceptos
básicos de CSS vistos hasta el momento.