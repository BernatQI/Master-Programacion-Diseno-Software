# Ejercicios Tema Complejidad

### Expón un escenario donde un proceso se realice de todas las formas posibles combinando in/eficacia y in/eficiencia. Por ejemplo, comprar pan: trae pan o sustituto en poco tiempo y buen precio; trea o o sustituto pero a veces tardas años en volver o se gasta 100 veces más; ...

- Un jardinero que corta el césped en 15 minutos y lo deja perfecto, es eficiente y eficaz
- Un jardinero que corta el césped en 10 horas y lo deja perfecto, es ineficiente pero eficaz
- Un jardinero que corta el césped en 15 minutos y lo deja muy mal, es eficiente pero ineficaz
- Un jardinero que corta el césped en 10 horas y lo deja muy mal, es ineficiente e ineficaz

### Construye un frase que relacione: abstracción, encapsulación, modularización y jerarquización o en cualquiera de sus derivaciones (abstracto, encapsular, módulo, ...)

- La jerarquización permite clasificar y ordenar las piezas que componen un proyecto de software. Después de definir la jerarquía de las características esenciales, mediante abstracción, podemos modular las distintas clasificaciones, descomponiéndolas en piezas con poco acoplamiento entre ellas y alta cohesión entre los elementos de cada módulo. Para mantener, mejorar y ampliar las piezas que construimos a lo largo del tiempo, las encapsulamos, ocultando sus detalles, así los cambios en los detalles de una pieza no afectan a otras piezas.

### Explica qué combinaciones de alta/baja cohesión y alto/bajo acoplamiento son posibles en un módulo (pieza, elemento, persona en una organización, ...) a la vez

- En una empresa de jardinería hay 3 jardineros.

- Ejemplo de baja cohesión y bajo acoplamiento: cada jardinero tiene sus propias herramientas y vehículo. Trabaja cada cual con horario y estilo propio. Están poco acoplados. Cuando tienen que trabajar juntos les cuesta coordinar horarios y el estilo de trabajo. Están poco cohesionados.

- Ejemplo de alta cohesión y alto acoplamiento: Sólo disponen de un vehículo que deben ir a buscar a la sede central y tienen que compartir las herramientas, por lo que dependen los unos de los otros. Están muy acoplados. Tienen que trabajar juntos y coordinados. Están muy cohesionados.

### Describe un sistema complejo de tu elección indicando brevemente la jerarquía de módulos con su abstracción y encapsulación (... quizás con un diagrama sea más breve) y un sistema complejo que no tenga las características mencionadas

![Sistema_Complejo](/Complejidad/Ejercicios%20Tema%20Complejidad/img/ejercicio-complejidad-ejemplo-jerarquia-sistema-complejo.svg)

### Relaciona, con aproximadamente 50 palabras, las unidades de Conocimiento y Complejidad vistos anteriormente

- Un sistema complejo excede nuestra capacidad cognitiva, para gestionarlo de una forma simple, lo separamos en módulos y los clasificamos de forma jerárquica. Cada módulo es una abstracción de la información más importantes que encapsula los detalles, de forma cohesiva entre ellos (los detalles), para que se acople muy poco o nada con los otros módulos.