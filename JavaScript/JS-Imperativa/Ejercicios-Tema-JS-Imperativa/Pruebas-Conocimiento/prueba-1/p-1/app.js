const { Console } = require("console-mpds");
const console = new Console();

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