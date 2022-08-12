const { Console } = require("console-mpds");
const console = new Console();

const minInterval = console.readNumber('Introduce el mínimo del intervalo:');
const maxInterval = console.readNumber('Introduce el máximo del intervalo (superior o igual al mínimo):');
const numIntervals = console.readNumber('Introduce una cantidad positiva de intervalos:');

const length = (maxInterval - minInterval) / numIntervals;

console.writeln(`Error`);const { Console } = require("console-mpds");
const console = new Console();

