
//27.- Realizar la tabla de multiplicar de un numero entre 0 y 10

const prompt = require('prompt-sync')();

var numero = prompt("Introduce un numero del 0 al 10: ");

for (let i = 1; i <= 100; i++) {
    
    console.log(numero +" * "+i+" = "+(numero*i));
}