const { Console } = require("console-mpds");
const console = new Console();

const WINTER = [351,80];
const SPRING = [81, 170];
const SUMMER = [171, 260];
const AUTUMN = [261, 350];

const day = console.readNumber(`Escriba un día (1-30):`);
const month = console.readNumber(`Escriba un mes (1-12):`);
const year = console.readNumber(`Escriba un año (1-...):`);

const dayOfYear = (month - 1) * 30 + day;
let season = '';

if((dayOfYear >= WINTER[0] || dayOfYear > 0) && dayOfYear <= WINTER[1]) {
    if(dayOfYear >= WINTER[1] - 30) {
        season += 'a finales de ';
    }else if(dayOfYear >= WINTER[1] - 60 && dayOfYear < WINTER[1] - 30) {
        season += 'a mediados de ';
    }else {
        season += 'a primeros de ';
    }
    season += 'invierno';
}else if(dayOfYear >= SPRING[0] && dayOfYear <= SPRING[1]) {
    if(dayOfYear >= SPRING[1] - 30) {
        season += 'a finales de ';
    }else if(dayOfYear >= SPRING[1] - 60 && dayOfYear < SPRING[1] - 30) {
        season += 'a mediados de ';
    }else {
        season += 'a primeros de ';
    }
    season += 'primavera';
}else if(dayOfYear >= SUMMER[0] && dayOfYear <= SUMMER[1]) {
    if(dayOfYear >= SUMMER[1] - 30) {
        season += 'a finales de ';
    }else if(dayOfYear >= SUMMER[1] - 60 && dayOfYear < SUMMER[1] - 30) {
        season += 'a mediados de ';
    }else {
        season += 'a primeros de ';
    }
    season += 'verano';
}else if(dayOfYear >= AUTUMN[0] && dayOfYear <= AUTUMN[1]) {
    if(dayOfYear >= AUTUMN[1] - 30) {
        season += 'a finales de ';
    }else if(dayOfYear >= AUTUMN[1] - 60 && dayOfYear < AUTUMN[1] - 30) {
        season += 'a mediados de ';
    }else {
        season += 'a primeros de ';
    }
    season += 'otoño';
}

console.writeln(`El día ${day} del ${month} de ${year} cae ${season}.`);