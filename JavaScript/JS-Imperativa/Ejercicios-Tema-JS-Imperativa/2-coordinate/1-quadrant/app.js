const { Console } = require("console-mpds");
const console = new Console();

const abcissa = console.readNumber('Dame la abcisa de la coordenada:');
const ordinate = console.readNumber('Dame la ordenada de la coordenada:');

const firstQuadrant = abcissa >= 0 && ordinate >= 0 ? '1' : '';
const secondQuadrant = abcissa >= 0 && ordinate <= 0 ? '2' : '';
const thirdQuadrant = abcissa <= 0 && ordinate <= 0 ? '3' : '';
const fourthQuadrant = abcissa <= 0 && ordinate >= 0 ? '4' : '';

console.writeln(`La coordenada (${abcissa}, ${ordinate}) está en el ${firstQuadrant}${secondQuadrant}${thirdQuadrant}${fourthQuadrant}º cuadrante.`);