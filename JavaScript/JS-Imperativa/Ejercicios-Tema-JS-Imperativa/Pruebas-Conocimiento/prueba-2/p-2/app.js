const { Console } = require("console-mpds");
const console = new Console();

let numbers = [];
let singleNumber;
do{
    singleNumber = console.readNumber(`Dame un númer entre 1 y 9 (Escribe 0 para terminar):`);
    if(singleNumber != 0) {
        numbers += [singleNumber];
    }
}while(singleNumber != 0);

let isAscendent = true;
let previousNumber;
for(let i = 1; i < numbers.length && isAscendent == true; i++) {
    previousNumber = numbers[i - 1];
    isAscendent = ++previousNumber == numbers[i];
}

console.writeln(`La serie "${numbers}" ${isAscendent ? 'SI' : 'NO'} es ascendente`);