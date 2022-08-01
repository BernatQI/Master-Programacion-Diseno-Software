# Ejercicios Tema Software

### Modela un diagrama de clases que relacione las siguientes palabras clave: software, hardware, firmware, dataware, middleware, peopleware

![Diagrama_Relación](/Software/Ejercicios%20Tema%20Software/img/diagrama-relacion-tema-software.svg)

~~~~
@startuml

Title Diagrama Relación: software, hardware, firmware, dataware, middleware, peopleware

class Software
class Hardware
class Firmware
class Dataware
class Middleware
class Peopleware

Peopleware -down-> Hardware
Peopleware -down-> Software
Software o-right-> Hardware

Dataware -up-|> Software
Middleware -up-|> Software
Firmware -up-|> Software

Firmware -up-> Hardware

@enduml
~~~~

### Comenta en qué medida es correcta la definición de software de la IEEE en el estándar 729: "Es el conjunto de los programas de cómputo, procedimientos, reglas, documentación y datos asociados, que forman parte de las operaciones de un sistema de computación"

- 

### Desarrolla por qué una aplicación de hoja de cálculo es un gestor (altas, bajas, modificaciones y consultas) de un sistema de información



### A partir de este diagrama, https://www.informationisbeautiful.net/visualizations/million-lines-of-code/ calcula aproximadamente el incremento medio de líneas diarias en photoshop desde la versión 1.0 de 1990 hasta la versión 6.0 de 2020



### Resume el contenido del tema del Software con aproximadamente 50 palabras