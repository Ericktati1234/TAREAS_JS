
//9.- Introducir un número por teclado y que nos diga si es positivo o negativo. 

const prompt = require('prompt-sync')();

var Respuesta = 0;

Respuesta = prompt("Introduce un numero:");

if (Respuesta == ''){
    console.log("Error")
}else if(Respuesta < 0){
    console.log("El numero que introdujiste es negativo")
} else{
    console.log("El numero que introdujiste es positivo")
}
