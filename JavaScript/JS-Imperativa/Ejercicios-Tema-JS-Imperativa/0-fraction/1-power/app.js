const { Console } = require("console-mpds");
const console = new Console();

const numerator = console.readNumber('Introduce el numerador de la fracción:');
const denominator = console.readNumber('Introduce el denominador de la fracción:');
const exponent = console.readNumber('Introduce un exponente:');

console.writeln(`La fracción ${numerator}/${denominator} elevado a ${exponent} es la fracción ${denominator == 0 ? 1 : (numerator ** exponent)}/${exponent == 0 ? 1 : (denominator ** exponent)}`);