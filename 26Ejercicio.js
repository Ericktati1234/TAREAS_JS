
//26.- Introducir una frase por teclado e imprimirla en el centro de la pantalla. 

const prompt = require('prompt-sync')();

const frase = prompt("Introduce una frase: ");

const anchoPantalla = 150; 

//La frase no puede estar tan larga, maximo del tamaño de la pantalla
const longitudFrase = frase.length;

//La funcion math.floor redondea el numero que queramos
const espaciosNecesarios = Math.floor((anchoPantalla - longitudFrase) / 2);

const espacios = " ".repeat(espaciosNecesarios);

console.log(espacios + frase);