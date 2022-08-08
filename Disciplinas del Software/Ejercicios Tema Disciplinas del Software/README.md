# Ejercicios Tema Disciplinas del Software

### Modela el dominio de las siguientes palabras claves: Restaurante, Comensal, Terraza, Comedor, Desayuno, Comida, Cena, Menú, Carta, Plato, Ingrediente, Cebolla, Trigo, Envío, Crítico, Camarero, Cocinero, Jefe de Cocina, Cocina, Horno, Equipo, Jefe de Personal, Entrevista, Ensayo, Reglas, ..

![Diagrama_Ejercicio_Tema_Disciplinas_Software](/Disciplinas%20del%20Software/Ejercicios%20Tema%20Disciplinas%20del%20Software/img/diagrama-relacion-tema-disciplinas-software.svg)

~~~~
@startuml

Title Ejercicio Disciplinas del Software

class Restaurante
class Comensal
class Terraza
class Comedor
class Desayuno
class Comida
class Cena
class Menú
class Carta
class Plato
class Ingrediente
class Cebolla
class Trigo
class Envío
class Crítico
class Camarero
class Cocinero
class JefeDeCocina
class Cocina
class Horno
class Equipo
class JefeDePersonal
class Entrevista
class Ensayo
class Reglas

Comensal .left.> Restaurante
Crítico .right.> Restaurante

Restaurante *-down-> Equipo

Equipo .down.> Ensayo
Equipo .down.> Reglas

Cocina ---up-|> Restaurante

Cocina -down-> Camarero

Terraza --up-|> Restaurante
Comedor --up-|> Restaurante
Cocina -down-> Envío

Camarero -down-> Terraza
Camarero -down-> Comedor

Horno -up-|> Cocina

Equipo o-down-> JefeDePersonal
Equipo o-down-> JefeDeCocina
Equipo o-down-> Cocinero
Equipo o-down-> Camarero

JefeDePersonal -down-> Camarero
JefeDePersonal -down-> JefeDeCocina
JefeDePersonal -down-> Cocinero

JefeDePersonal .left.> Entrevista

Cocina o-right-> JefeDeCocina
Cocina o-down-> Cocinero

JefeDeCocina -down-> Cocinero

Camarero .left.> Plato

Restaurante --down-> Menú
Restaurante --down-> Carta

Carta --down-> Desayuno
Carta --down-> Comida
Carta --down-> Cena

Menú --down-> Comida
Menú --down-> Cena

Desayuno -down-> Plato
Comida -down-> Plato
Cena -down-> Plato

Ingrediente -up-|> Plato

Cebolla -up-|> Ingrediente
Trigo -up-|> Ingrediente

@enduml
~~~~

### Desarrolla, en no más de 50 palabras, una analogía entre la disciplina de requisitos de una aplicación software (requisito funcional, casos de uso/historia de usuario, requisito no funcional, interfaz gráfica y de comunicaciones, ...) y el negocio expuesto anteriormente

- Un restaurante ofrece Desayunos, Comidas y Cenas, en Menú o a la Carta. El Equipo se compone de un Jefe de Personal, Un Jefe de Cocina y Camareros.

- Si el Comensal quiere comer en la Terraza o el Comedor, le atenderá el Camarero, pero si prefiere la comida a domicilio, gestionará el pedido la Cocina.

### Desarrolla, en no más de 50 palabras, una analogía entre la disciplina de análisis y diseño de una aplicación software (modelo, vista, controlador, tecnologías, ...) y el negocio expuesto anteriormente

- Hay un Comedor, una Terraza y un Camarero con el que interactúan los Comensales, un Jefe de Personal y otro de Cocina que controlan el Equipo para que todo funcione correctamente, siguiendo las Reglas del negocio, y una Cocina en la que se preparan los platos con tecnologías como el Horno.

### Desarrolla, en no más de 50 palabras, una analogía entre la disciplina de implementación de una aplicación software (paquetes, clases, unitarias, ...) y el negocio expuesto anteriormente

- En el negocio se definen distintos roles y distintas formas de interactuar entre elementos (Cocina-Camarero, Camarero-Cliente, Cocinero-Horno) para brindar a los Comensales la mejor experiencia posible.

### Desarrolla, en no más de 50 palabras, una analogía entre la disciplina de pruebas de una aplicación software (fallos, calidad, validación, ...) y el negocio expuesto anteriormente

- Los Ensayos que realiza el Equipo antes de abrir del restaurante es un ejemplo de Prueba. De esta forma se aseguran que todo está organizado correctamente, y pueden realizar los ajustes correspondientes.