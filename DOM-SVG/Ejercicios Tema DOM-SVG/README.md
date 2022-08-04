# Ejercicios Tema DOM SVG

### Escribe una expresión XPath para obtener el nombre del país de capital con mayor latitud a partir de countries.xml (disponible desde la documentación)

~~~~
//latlng[./text() = max(//latlng[1]/text())]/../name
~~~~

### Describe razonadamente en base a los conceptos de temas anteriores las consecuencias de la ausencia de un estándar como, por ejemplo, antes de la especificación de DOM

- Debido a la "Guerra de los Navegadores", los proyectos de Software usados en los navegadores requerían software específico para los distintos navegadores y sus versiones posteriores, aumentando y dificultando mucho los siguientes puntos clave:

    - Complejidad
    - Reusabilidad
    - Seguridad
    - Eficacia
    - Eficiencia
    - Tiempo
    - Costes
    - Abstracción


### Describe en 50 palabras las similitudes y diferencias entre los lenguajes SVG y HTML



### Escribe un documento SVG para mostrar un cuadrado que encierra un círculo



### Cuántos y cuáles son los nodos del arbol DOM del siguiente documento XML: https://raw.githubusercontent.com/USantaTecla-tech-xml/src/master/4-como/1-documentoBienFormado/2-atributos/elementoMixtoV1.xml