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

- Hace referencia a las distintas partes que, de forma general, forman el software.

### Desarrolla por qué una aplicación de hoja de cálculo es un gestor (altas, bajas, modificaciones y consultas) de un sistema de información

- Porque permite añadir, eliminar, modificar y consultar datos. Estos datos persisten y pueden ser usados posteriormente.

### A partir de este diagrama, https://www.informationisbeautiful.net/visualizations/million-lines-of-code/ calcula aproximadamente el incremento medio de líneas diarias en photoshop desde la versión 1.0 de 1990 hasta la versión 6.0 de 2020

- La media es de 4018,265 lineas diarias de 1990 hasta 1993 (3 años enteros, ignorando año bisiesto)

### Resume el contenido del tema del Software con aproximadamente 50 palabras

- Software es la información que suministra el desarrollador a la computadora para que manipule de forma automática la información que suministrará el usuario.

- El software facilita a los seres humanos la capacidad de usar hardware para computar cantidades de información imposibles para su limitada capacidad mental.

- Consideramos que es un sistema de información efectivo cuando es eficaz realizando cálculos sin errores y eficiente cuando lo realiza con un bajo consumo de recursos y de forma sencilla para el usuario.

- CRUD es el tratamiento de la información mediante altas (Create), bajas (Delete), modificaciones (Update) y consultas (Read) en el sistema.

- Para que un Proyecto de Software se considere de calidad debemos tener en cuenta la Interrelación, el Ámbito, el Tiempo, el Coste, la Calidad y la Mantenibilidad. Construyendo un software Fluido, Flexible, Reusable y Fuerte.