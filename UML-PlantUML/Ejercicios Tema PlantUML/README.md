# Ejercicios Tema PlantUML

### Modela con UML el cuadro de "Las Meninas de Velázquez" de tal forma que se observe qué diferencias existen con otros cuadros en los que el observador no se siente dentro de la escena (Pista: relaciones entre observador, personajes y posiciones)

![Meninas_PlantUML](/UML-PlantUML/Ejercicios%20Tema%20PlantUML/meninas-plantuml.-3.png)

~~~~
@startuml

Title Las Meninas de Velázquez

Object Observer
Object King
Object Queen
Object Court
Object Artist
Object JoséNieto

Object Position
Object Front
Object POV
Object Depth

Position *-down-> Front
Position *-down-> Depth
Position *-down-> POV

Observer .-down-> POV
POV o-down-> King
POV o-down-> Queen

Front o-down-> Court
Front o-down-> Artist

Depth o-down-> JoséNieto

@enduml
~~~~

### Dada la tabla de verdad (combinaciones de cierto y falso) de la "puerta" XOR (especificación en tabla verde de https://es.wikipedia.org/wiki/Puerta_XOR), escribe la expresión lógica de la salida (tercera columna) correspondiente a la entrada (primeras 2 columnas)

A && !B || !A && B

### Comenta la posible incorrección del siguiente diagrama: https://www.planttext.com/api/plantuml/svg/RP7D2eCm48Jl-nIBzxo0b6AXHOyzz5vM8n8RioM9s48Vlchyg_IKPUPRTeOapfFrRQC1I6lkxerwALC159gSmvDH3McWt7bBXSUWPcr3XYSajMJgqZ90WF7m4P8x8sOiFAkyBimJ2d6SJc6CHQia0N1Ub_t5wChsyOw36o4vV0x2Of_PaDxQSX3aujyKNzggD8hZ46I4_A9c_yWvs8vD0JQBGoE1F_Pc7ZkDKPTAUpSaNHj3KXhPVyKN

- Los nombres deberían escribirse en inglés
- La primera letra del objeto debería ser minúscula
- La clase abstracta Humano no puede instanciar objetos
- Sólo pueden tener relación de herencia entre clases, no entre objetos

### Realiza un modelo (...esencial ... aproximadamente, no más de 20 tipos de entidad y algún diagrama de actividad o estados para algún proceso) de este mismo master de Programación y Diseño del Software

![Master_MPDS_PlantUML](/UML-PlantUML/Ejercicios%20Tema%20PlantUML/master-mpds.svg)

~~~~
@startuml

Title Master MPDS

Class Master
Class Teacher
Class Student
Class Unit
Class Rol
Class Project
Class Test
Class Exposition
Class Viewer
Class Active
Class Critic
Class Artist

Master *-down-> Teacher
Master *-down-> "*" Student
Master *--down-> "52" Unit

Teacher -down-> Unit
Student -down-> Unit

Student *-down-> Rol

Unit *-down-> Project
Unit *-down-> Test
Unit *-down-> Exposition

Rol <|-down- Viewer
Rol <|--down- Active

Active <|-down- Artist
Active <|-down- Critic

Rol --> Exposition

Project --> Active
Test --> Active

@enduml
~~~~