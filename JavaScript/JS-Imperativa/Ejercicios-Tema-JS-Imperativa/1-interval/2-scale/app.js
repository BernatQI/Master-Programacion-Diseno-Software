const { Console } = require("console-mpds");
const console = new Console();

const minInterval = console.readNumber('Introduce el mínimo del intervalo:');
const maxInterval = console.readNumber('Introduce el máximo del intervalo (superior o igual al mínimo):');
const scale = console.readNumber('Introduce un factor de escala positivo:');

const long = (maxInterval - minInterval) / 2;
const midPoint = maxInterval - long;

console.writeln(`El intervalo [${minInterval}, ${maxInterval}] con factor de escala ${scale} es el intervalo [${midPoint - (long * scale)}, ${midPoint + (long * scale)}]`);