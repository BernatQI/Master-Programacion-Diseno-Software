const { Console } = require("console-mpds");
const console = new Console();

const age = console.readNumber('Dame tu edad:');

const ageOver1 = `l año que pasado tenías ${age - 1} año${age == 2 ? '' : 's'}
y el año que viene tendrás ${age +1} años`;

console.writeln(`E${age == 0 ? `l año que viene tendrás 1 año` : ageOver1}`);