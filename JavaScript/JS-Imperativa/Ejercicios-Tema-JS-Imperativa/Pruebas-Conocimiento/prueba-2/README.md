- Escribe un código que determine si una cadenas de caracteres es un palíndromo, sin considerar espacios intermedios ni acentos de la cadena. P.e.: "Dabale arroz a la zorra el abad" sí es un palímdromo

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

- Escribe un código que a partir de un número de filas y columnas muestre por pantalla una retícula correspondiente de cuadrados de 5x5 asteriscos rellenos de puntos
