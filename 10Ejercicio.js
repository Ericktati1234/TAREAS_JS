
//10.- Introducir un número por teclado y que nos diga si es par o impar. 

const prompt = require('prompt-sync')();

var Respuesta = 0;

Respuesta = prompt("Introduce un numero:");

if (Respuesta == ''){
    console.log("Error")
}else if(Respuesta % 2 != 0){
    console.log("El numero que introdujiste es impar")
} else{
    console.log("El numero que introdujiste es par")
}
