const { Console } = require("console-mpds");
const console = new Console();

const numerator = console.readNumber(`Introduce el numerador de la fracción:`);
const denominator = console.readNumber(`Introduce el denominador de la fracción:`);

let mcdNumerator = [];
let mcdDenominator = [];

for(let i = 2; i <= numerator; i++) {
    if(numerator % i == 0 && i < numerator){
        mcdNumerator += [`${i},`];
    }else if (numerator % i == 0 && i == numerator) {
        mcdNumerator += [`${i}`];
    }
}

for(let i = 2; i <= denominator; i++) {
    if(denominator % i == 0 && i < denominator){
        mcdDenominator += [`${i},`];
    }else if (denominator % i == 0 && i == denominator) {
        mcdDenominator += [`${i}`];
    }
}

let mcd = 1;
for(let i = 0; i < mcdNumerator.length; i++) {
    for(let j = 0; j < mcdDenominator.length; j++) {
        if(mcdNumerator[i] == mcdDenominator[j]) {
            mcd *= mcdNumerator[i];
        }
    }
}

console.writeln(`La fracción ${numerator}/${denominator} = ${numerator/mcd}/${denominator/mcd} invertida es la fracción ${denominator/mcd}/${numerator/mcd}`);