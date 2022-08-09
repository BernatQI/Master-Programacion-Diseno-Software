const { Console } = require("console-mpds");
const console = new Console();

console.writeln(`Primera fracción:`);
const numerator1 = console.readNumber(`Introduce el numerador de la fracción:`);
const denominator1 = console.readNumber(`Introduce el denominador de la fracción:`);

console.writeln(`Segunda fracción:`);
const numerator2 = console.readNumber(`Introduce el numerador de la fracción:`);
const denominator2 = console.readNumber(`Introduce el denominador de la fracción:`);

console.writeln(`La suma de la fracción ${numerator1}/${denominator1} y la fracción ${numerator2}/${denominator2} es la fracción ${numerator1*numerator2}/${denominator1*denominator2}`);