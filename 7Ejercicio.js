
//7.- Introducir tantas frases como queramos y contarlas. 

const prompt = require('prompt-sync')();

var frase = "0";
var count = -1;
do{
    frase = prompt("Escribe frases (si quieres detenerte escribe un 0):");
    count ++;
}while(frase != "0");

console.log("Escribiste "+ count+ " Frases")