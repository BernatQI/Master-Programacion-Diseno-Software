# Ejercicios Tema DOM SVG

### Escribe una expresión XPath para obtener el nombre del país de capital con mayor latitud a partir de countries.xml (disponible desde la documentación)

~~~~
//latlng[./text() = max(//latlng[1]/text())]/../name
~~~~

### Describe razonadamente en base a los conceptos de temas anteriores las consecuencias de la ausencia de un estándar como, por ejemplo, antes de la especificación de DOM

- Debido a la "Guerra de los Navegadores", los proyectos de Software usados en los navegadores requerían software específico para los distintos navegadores y sus versiones posteriores, aumentando y dificultando mucho los siguientes puntos clave:

    - Complejidad
        - Orden
            - Abstracción
        - Tiempo
        - Espacio
        - Costes
    - Compromiso
        - Eficacia
            - Seguridad
        - Eficiencia
            - Reusabilidad

### Describe en 50 palabras las similitudes y diferencias entre los lenguajes SVG y HTML

- Ambos son marcos de trabajo XML para publicar información,son escalables, tienen el DOM, y son combinables con CSS y JavaScript. HTML estructura la información, SVG pinta la información y tiene animaciones. HTML puede contener SVG, pero SVG no puede contener HTML.

### Escribe un documento SVG para mostrar un cuadrado que encierra un círculo

![Ejercicio_SVG](/DOM-SVG/Ejercicios%20Tema%20DOM-SVG/svg/ejercicio-svg.svg)

~~~~
<svg width="300px" height="300px" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="x" y="0" width="300" height="300" stroke="black" fill="none" />
        <circle cx="150" cy="150" r="150" stroke="black" fill="none" />
</svg>
~~~~

### Cuántos y cuáles son los nodos del arbol DOM del siguiente documento XML: https://raw.githubusercontent.com/USantaTecla-tech-xml/src/master/4-como/1-documentoBienFormado/2-atributos/elementoMixtoV1.xml

- 13 nodos en total

    - 1 nodo "documento"
    - 1 nodo "xml"
    - 1 nodo "elementoMixto"
    - 2 nodos "subElemento"
    - 3 nodos "atributo"
    - 5 nodos "texto"