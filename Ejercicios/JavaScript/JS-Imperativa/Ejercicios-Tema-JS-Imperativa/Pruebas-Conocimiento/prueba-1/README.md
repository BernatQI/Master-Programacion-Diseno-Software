### Escribe un código que determine si una cadenas de caracteres es un palíndromo, sin considerar espacios intermedios ni acentos de la cadena. P.e.: "Dabale arroz a la zorra el abad" sí es un palímdromo

~~~~
const sentence = console.readString('Dame una frase:');

let char = '';

const consonants = ['a', 'A', 'á', 'Á', 'à', 'À', 'e', 'E', 'é', 'É', 'è', 'È', 'i', 'I', 'í', 'Í', 'ì', 'Ì', 'o', 'O', 'ó', 'Ó', 'ò', 'Ò', 'u', 'U', 'ú', 'Ú', 'ù', 'Ù', 'b', 'B', 'c', 'C', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'ñ', 'Ñ', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'X', 'z', 'Z'];

for(let i = 0; i < sentence.length; i++) {

    for(let j = 0; j < consonants.length; j++) {

        let lowerChar = '';
        if(sentence[i] == consonants[j] && j % 2 != 0) {
            lowerChar = consonants[j - 1];
        }else if(sentence[i] == consonants[j] && j % 2 == 0){
            char += sentence[i];
        }else{
            lowerChar = '';
        }
        switch(lowerChar) {
            case 'á':
            case 'à':
                char += 'a';
                break;
            case 'é':
            case 'è':
                char += 'e';
                break;
            case 'í':
            case 'ì':
                char += 'i';
                break;
            case 'ó':
            case 'ò':
                char += 'o';
                break;
            case 'ú':
            case 'ù':
                char += 'u';
                break;
            default:
                char += lowerChar;
        }
    }
}
let middleChar;
if(char.length % 2 == 0) {
    middleChar = char.length / 2;
}else{
    middleChar = (char.length + 1) / 2;
}

let isPalindrome;
let i = 0;
let j = char.length - 1;
do{
    isPalindrome = char[i] == char[j];
    i++;
    j--;
}while(i < middleChar && isPalindrome);

console.writeln(`"${sentence}" ${isPalindrome ? 'Sí' : 'No'} es un palíndromo`);
~~~~

- Escribe un código que determine si una serie de números positivos (terminada en 0) está ordenada ascendentemente

~~~~
const { Console } = require("console-mpds");
const console = new Console();

let numbers = [];
let singleNumber
do{
    singleNumber = console.readNumber(`Dame un númer entre 1 y 9 (Escribe 0 para terminar):`);
    if(singleNumber != 0) {
        numbers += [singleNumber];
    }
}while(singleNumber != 0);

let isAscendent = true;
let number;
for(let i = 1; i < numbers.length && isAscendent == true; i++) {
    number = numbers[i - 1];
    isAscendent = ++number == numbers[i];
}

console.writeln(`La serie "${numbers}" ${isAscendent ? 'SI' : 'NO'} es ascendente`);
~~~~

- Escribe un código para "adivinar" el número del usuario en 0 y 1.000.000 inclusives mediante la búsqueda binaria: ¿es igual o mayor que 500.000? Mayor; ¿es igual o mayor que 750.000? ... Igual

~~~~
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
~~~~

### Escribe un código que a partir de un número de filas y columnas muestre por pantalla una retícula correspondiente de cuadrados de 5x5 asteriscos rellenos de puntos

~~~~
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
~~~~

### ¿Qué diferencias existen entre una expresión y una sentencia?

- Una Expresión es una combinación de operandos (literales, variables y constantes) y operadores (prefijos, infijos, sufijos y ternarios) cuya evaluación devuelve un valor de tipo primitivo.

- Las sentencias contienen expresiones que pueden ser simples mediante la mención de los datos o literales, o expresiones compuestas mediante la combinación de operadores. Sirven para Crear, modificar, eliminar o consultar datos.

- Una expresión se evalúa y siempre develve un valor (mayormente de tipo primitivo), mentras que la sentencia ejecuta una acción (evalúa expresiones). Una expresión no puede contener sentencias, pero sí al revés.

### ¿Qué criterio aplicas para escoger entre una sentencia while y do/while?

- Escojo la sentencia "while" si necesito que se ejecute de "0" a "n" veces.
- Escojo la sentencia "do/while" si necesito que se ejecute de "1" a "n" veces.

### ¿Qué criterio aplicas para escoger entre una sentencia for y otra iterativa?

- Escojo la sentencia "for" cuando quiero que se ejecute un número concreto de veces.

### ¿Qué diferencias existen entre los valores de tipo string y de tipo array?

- Los valores de tipo string son valores primitivos inmutables y no tienen propiedades (excepto "length" en el string), mientras que los "arrays" son ebjetos que pueden tener valores heterogeneos de tipo primitivo (por ejemplo, de tipo "string") u objeto.

### ¿Qué diferencias existen entre los valores de tipo primitivo y los valores que no son de tipo primitivo, como los arrays?

- En JavaScript los "arrays" son objetos que contienen valores heterogeneos de tipo primitivo.