const { Console } = require("console-mpds");
const console = new Console();

const minInterval = console.readNumber('Introduce el mínimo del intervalo:');
const maxInterval = console.readNumber('Introduce el máximo del intervalo:');


console.writeln(`La longitud del intervalo [${minInterval},${maxInterval}] es ${maxInterval - minInterval}`);