const { Console } = require("console-mpds");
const console = new Console();

console.writeln(`Primera duración:`);
const firstHours = console.readNumber(`Dame las horas:`);
const firstMinutes = console.readNumber(`Dame los minutos:`);
const firstSeconds = console.readNumber(`Dame los segundos:`);

console.writeln(`Segunda duración:`);
const secondHours = console.readNumber(`Dame las horas:`);
const secondMinutes = console.readNumber(`Dame los minutos:`);
const secondSeconds = console.readNumber(`Dame los segundos:`);

const sumMinutes = firstMinutes + secondMinutes;

const totalTime = (firstSeconds + secondSeconds) + (sumMinutes * 60) + (sumHours * 3600);
const extraMinute = firstSeconds + secondSeconds > 59 ? 1 : 0;
const extraHour = sumMinutes + extraMinute > 59 ? 1 : 0;

console.writeln(`La suma es ${(firstHours + secondHours) + extraHour}:${sumMinutes + extraMinute}:${totalTime % 60}`);