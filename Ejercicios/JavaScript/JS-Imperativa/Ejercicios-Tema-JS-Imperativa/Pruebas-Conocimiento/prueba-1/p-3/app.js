const { Console } = require("console-mpds");
const console = new Console();

const userNumber = console.readNumber(`Dame el número de usuario (entre 0 y 1.000.000):`);
let numberRequest;

do {
    numberRequest = console.readNumber(`¿Qué número quieres comprobar (entre 0 y 1.000.000)?:`);
    
    if(numberRequest < userNumber) {
        console.writeln(`¿es igual o mayor que ${numberRequest}? Mayor`);
        console.writeln(`Por favor, prueba un número mayor.`);
    }else if(numberRequest > userNumber) {
        console.writeln(`¿es igual o mayor que ${numberRequest}? Menor`);
        numberRequest = console.writeln(`Por favor, prueba un número menor.`);
    }else{
        console.writeln(`¿es igual o mayor que ${numberRequest}? Igual`);
        console.writeln(`\n¡¡¡ENHORABUENA!!!`);
    }
}while(numberRequest !== userNumber);
