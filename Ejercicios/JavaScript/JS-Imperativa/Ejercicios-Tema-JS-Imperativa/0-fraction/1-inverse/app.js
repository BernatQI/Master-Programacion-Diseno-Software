const { Console } = require("console-mpds");
const console = new Console();

const numerator = console.readNumber(`Introduce el numerador de la fracción:`);
const denominator = console.readNumber(`Introduce el denominador de la fracción:`);

let gcdNumerator = [];
let gcdDenominator = [];

for(let i = 2; i <= numerator; i++) {
    if(numerator % i == 0) {
        if(i < numerator) {
            gcdNumerator += [`${i},`];
        }else if (i == numerator) {
            gcdNumerator += [`${i}`];
        }
    }

    if(denominator % i == 0) {
        if(i < denominator) {
            gcdDenominator += [`${i},`];
        }else if (i == denominator) {
            gcdDenominator += [`${i}`];
        }
    }
}

let gcd = 1;
for(let i = 0; i < gcdNumerator.length; i++) {
    for(let j = 0; j < gcdDenominator.length; j++) {
        if(gcdNumerator[i] == gcdDenominator[j]) {
            gcd *= gcdNumerator[i];
        }
    }
}

console.writeln(`La fracción ${numerator}/${denominator} = ${numerator/gcd}/${denominator/gcd} invertida es la fracción ${denominator/gcd}/${numerator/gcd}`);