const { Console } = require("console-mpds");
const console = new Console();

const columns = console.readNumber(`¿Cuántas columnas quieres?:`);
const rows = console.readNumber(`¿Cuántas filas quieres?:`);

const rowOut = '* * * * *';
const rowIn = '*.......*';

let row0 = '';
let row1 = '';
let row2 = '';
let row3 = '';
let row4 = '';
for(let i = 0; i < columns; i++) {
    row0 += rowOut;
    row1 += rowIn;
    row2 += rowIn;
    row3 += rowIn;
    row4 += rowOut;
}

for(let i = 0; i < rows; i++) {
    console.writeln(`${row0}
${row1}
${row2}
${row3}
${row4}`);
}