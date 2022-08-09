const { Console } = require("console-mpds");
const console = new Console();

const minInterval = console.readNumber('Introduce el mínimo del intervalo:');
const maxInterval = console.readNumber('Introduce el máximo del intervalo:');
const point = console.readNumber('Introduce un punto:');

console.writeln(`El intervalo [${minInterval},${maxInterval}] ${point >= minInterval && point <= maxInterval ? 'si' : `no`} incluye el punto ${point}`);