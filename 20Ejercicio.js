
//20.- Calcular el factorial de un número, mediante funciones. 


function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i; 
    }
    return resultado;
}

const prompt = require('prompt-sync')();

const numero1 = prompt("Introduce un numero: ");

console.log("El factorial de "+numero1+" es igual a "+factorial(numero1));

