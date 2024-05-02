
//14.- Hacer un programa que imprima el mayor y el menor de una serie de cinco números que
//vamos introduciendo por teclado. 

const prompt = require('prompt-sync')();

var Resultado = [0, 0, 0, 0, 0];

var indiceMenor = 0;
var indiceMayor = 0;

for (var i = 0; i < 5; i++) {
    Resultado[i] = parseFloat(prompt("Introduce el número " + (i + 1) + ":"));

    if (Resultado[i] < Resultado[indiceMenor]) {
        indiceMenor = i;
    }

    if (Resultado[i] > Resultado[indiceMayor]) {
        indiceMayor = i; 
    }
}

//
console.log("El número menor de los que introdujiste es: "+ Resultado[indiceMenor]);
console.log("El número mayor de los que introdujiste es: "+ Resultado[indiceMayor]);

