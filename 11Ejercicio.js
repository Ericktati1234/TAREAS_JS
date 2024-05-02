
//11.- Imprimir y contar los múltiplos de 3 desde el uno hasta un número que introducimos por teclado. 

const prompt = require('prompt-sync')();

var numero = prompt("Introduce un numero:");
var count = 0;
for (var i = 1; i <= numero; i++) {
    if (i % 3 == 0){
        count ++;
        console.log(i);
    }
}
console.log("Hay "+count+" multiplos de 3 desde el 1 hasta el numero introducido")