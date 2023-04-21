const { Console } = require("console-mpds");
const console = new Console();

console.writeln('Coordenada origen');
const abcissa1 = console.readNumber('Dame la abcisa de la coordenada:');
const ordinate1 = console.readNumber('Dame la ordenada de la coordenada:');

console.writeln('Coordenada origen');
const abcissa2 = console.readNumber('Dame la abcisa de la coordenada:');
const ordinate2 = console.readNumber('Dame la ordenada de la coordenada:');

console.writeln(`La coordenada origen (${abcissa1}, ${ordinate1}) y la coordenada destino (${abcissa2}, ${ordinate2}) ${abcissa1 == abcissa2 && ordinate1 != ordinate2 ? 'si' : 'no'} es un movimiento vertical`);