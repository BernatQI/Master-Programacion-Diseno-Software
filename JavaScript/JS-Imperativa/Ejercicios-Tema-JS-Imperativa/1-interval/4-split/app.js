const { Console } = require("console-mpds");
const console = new Console();

let minInterval = console.readNumber('Introduce el mínimo del intervalo:');

let maxInterval = console.readNumber('Introduce el máximo del intervalo (superior o igual al mínimo):');

if(maxInterval <= minInterval) {
    do{
        console.writeln(`Error!!! El máximo debe ser superior o igual al máximo`);
        maxInterval = console.readNumber('Introduce el máximo del intervalo (superior o igual al mínimo):');
    }while(maxInterval <= minInterval);
}

let numIntervals = console.readNumber('Introduce una cantidad positiva de intervalos:');

if(numIntervals <= 0) {
    do{
        console.writeln(`Error!!! La cantidad debe ser positiva`);
        numIntervals = console.readNumber('Introduce una cantidad positiva de intervalos:');
    }while(numIntervals <= 0);
}

const interval = (maxInterval - minInterval) / numIntervals;

let msg = `El intervalo [${minInterval}, ${maxInterval}] dividido en ${numIntervals} intervalos son `;
for(let i = 0; i < numIntervals; i++) {
    if(i == 0) {
        maxInterval = minInterval + interval;
        msg += `[${minInterval}, ${maxInterval}], `;
    }else if(i !== numIntervals - 1) {
        minInterval += interval;
        maxInterval = minInterval + interval;
        msg += `[${minInterval}, ${maxInterval}], `;
    }else{
        minInterval += interval;
        maxInterval = minInterval + interval;
        msg += `y [${minInterval}, ${maxInterval}]`;
    }
}

console.writeln(msg);