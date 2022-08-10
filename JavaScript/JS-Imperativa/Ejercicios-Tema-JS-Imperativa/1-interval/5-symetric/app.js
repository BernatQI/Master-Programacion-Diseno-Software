const { Console } = require("console-mpds");
const console = new Console();

const minInterval = console.readNumber('Introduce el mínimo del intervalo:');
const maxInterval = console.readNumber('Introduce el máximo del intervalo (superior o igual al mínimo):');

console.writeln(`El intervalo [${minInterval}, ${maxInterval}] simétrico al origen es [${- maxInterval}, ${- minInterval}]`);