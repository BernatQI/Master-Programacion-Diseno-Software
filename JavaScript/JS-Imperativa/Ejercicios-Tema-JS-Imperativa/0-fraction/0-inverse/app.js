const { Console } = require("console-mpds");
const console = new Console();

const numerator = console.readNumber('Introduce el numerador de la fracción:');
const denominator = console.readNumber('Introduce el denominador de la fracción:');

console.writeln(`La fracción ${numerator}/${denominator} invertida es la fracción ${denominator}/${numerator}`);