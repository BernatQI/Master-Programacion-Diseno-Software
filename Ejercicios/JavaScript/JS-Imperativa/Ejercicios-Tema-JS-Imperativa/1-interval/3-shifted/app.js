const { Console } = require("console-mpds");
const console = new Console();

const minInterval = console.readNumber('Introduce el mínimo del intervalo:');
const maxInterval = console.readNumber('Introduce el máximo del intervalo (superior o igual al mínimo):');
const shiftFactor = console.readNumber('Introduce un factor de desplazamiento:');

console.writeln(`El intervalo [${minInterval}, ${maxInterval}] con factor de desplazamiento ${shiftFactor} es el intervalo [${minInterval + shiftFactor}, ${maxInterval + shiftFactor}]`)