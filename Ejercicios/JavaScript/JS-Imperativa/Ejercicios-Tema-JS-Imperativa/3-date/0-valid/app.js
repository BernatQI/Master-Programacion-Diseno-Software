const { Console } = require("console-mpds");
const console = new Console();

const day = console.readNumber('Dame el día:');
const month = console.readNumber('Dame el mes:');
const year = console.readNumber('Dame el año:');

console.writeln(`La fecha ${day}/${month}/${year} ${(day > 0 && day <= 30) && (month > 0 && month <= 12) && (year >= 0 && year <= 99) ? 'sí' : 'no'} es válida`);