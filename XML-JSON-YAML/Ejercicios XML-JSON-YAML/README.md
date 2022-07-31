# Ejercicios Tema XML-JSON-YAML

### ¿La alternatia entre XML, JSON y YAML es una cuestión de eficacia y/o eficiencia? Razona la respuesta y "estima" justificadamente un porcentaje de mejora entre las tres soluciones (p.e. 30% más eficaz, 50% más eficiente, ...)

- Es una cuestión de eficiencia principalmente, pues las tres alternativas son eficientes transfiriendo datos, pero JSON es más eficiente que XML, y YAML es un poco más eficiente que JSON, ya que requieren escribir menos respectivaente.

### Edita el yaml correspondiente para la transmisión de esta información: https://www.planttext.com/api/plantuml/svg/FOqn2e0m40JxUyNMGXhB899dHBkBMWHY3fApKl-kWbhj30oigyf5jpKHJObhXSTEh2M6JSKYPlsjjGWYQU5CvrSFxuv47jrXp4qUZJ4z1bXCaZX8OOsIYToIv-Vf0W00

classes:
    class: X
        to: Y
        - down
        - parte: colaboration
        to: Z
        - down
        - derivada
    - atributo: int
    - atributo2: boolean
    class: Y
    class: Z

### ¿Tendría sentido un documento con estructura de xml cuya información (ubicada entre las etiquetas de abrir y cerrar) respetara a su vez la estructura de json o yaml? Razona la respuesta y, en caso afirmativo, expón un posible escenario

Sí, tendría sentido que una entrada de datos en formato XML sea procesada proceso y se genere una salida de datos en formato JSON o YAML.

Ejemplo:

#### XML

<object>
    <key>property1</key>
    <value>information1</value>
</object>
<object>
    <key>property2</key>
    <value>information2</value>
</object>

--------

#### JSON

{
    "property1" : "information1"
}
{
    "property2" : "information2"
}

--------

#### YAML

property1: information1
property2: information2

### Sabiendo que el factorial de 0 es 1 y en cualquier otro caso n es n * factorial(n-1) y que potencia de una base elevado a 0 es 1 y en cualquier otro caso una base elevada a e es b* potencia(b, e-1) y que la suma de un número mas 0 es el número y en cualquier otro caso un numero más n es la suma del siguiente al número más n-1 ... escribe un documento json para estructurar este tipo de definiciones



### En JSON y YAML existen objetos (colecciones heterogéneas de características) y array (colecciones homogéneas de características). Explica con tus palabras cómo llevar a XML estos conceptos