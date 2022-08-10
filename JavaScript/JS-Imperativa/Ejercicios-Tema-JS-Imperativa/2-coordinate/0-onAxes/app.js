const { Console } = require("console-mpds");
const console = new Console();

const abcissa = console.readNumber('Dame la abcisa de la coordenada:');
const ordinate = console.readNumber('Dame la ordenada de la coordenada:');

const yesAbcissa = abcissa == 0 && ordinate != 0 ? 'está en el eje de abcisas' : '';
const yesOrdinate = ordinate == 0 && abcissa != 0 ? 'está en el eje de ordenadas' : '';

console.writeln(`La coordenada (${abcissa}, ${ordinate}) ${abcissa != 0 && ordinate != 0 ? 'no está en ningún eje' : ''}${yesAbcissa}${yesOrdinate}${abcissa == 0 && ordinate == 0 ? 'está en el eje de abcisas y de ordenadas ' : ''}`);