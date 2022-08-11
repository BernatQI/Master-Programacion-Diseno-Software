const { Console } = require("console-mpds");
const console = new Console();

const day = console.readNumber('Dame el día:');
const month = console.readNumber('Dame el mes:');
const year = console.readNumber('Dame el año:');

const prevMonth = month == 1 ? 12 : month - 1;
const prevYear = year == 0 ? 99 : year - 1;

console.writeln(`La fecha ${day}/${month}/${year} y la anterior es \
${day == 1 ? 30 : day - 1}/\
${(day == 1) ? prevMonth : month}/\
${(day == 1 && month == 1) ? prevYear : year}`);