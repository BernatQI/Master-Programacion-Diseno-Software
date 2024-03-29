const { Console } = require("console-mpds");
const console = new Console();

console.writeln('Primer intervalo:')
const minInterval1 = console.readNumber('Introduce el mínimo del intervalo:');
const maxInterval1 = console.readNumber('Introduce el máximo del intervalo (superior o igual al mínimo):');


console.writeln('Segundo intervalo:')
const minInterval2 = console.readNumber('Introduce el mínimo del intervalo:');
const maxInterval2 = console.readNumber('Introduce el máximo del intervalo (superior o igual al mínimo):');

console.writeln(`El intervalo [${minInterval1}, ${maxInterval1}] \
${(minInterval2 >= minInterval1 && minInterval2 <= maxInterval1) || (maxInterval2 >= minInterval1 && maxInterval2 <= maxInterval1) ? 'si' : 'no'} \
intersecta con el intervalo [${minInterval2}, ${maxInterval2}]`);