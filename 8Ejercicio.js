
//8.- Hacer un programa que solo nos permita introducir S o N. 

const prompt = require('prompt-sync')();

var Respuesta = "Default"

while(Respuesta != "S" && Respuesta != "N"){
    Respuesta = prompt("Este programa solamente se terminará si escribes S Ó N: ");
}