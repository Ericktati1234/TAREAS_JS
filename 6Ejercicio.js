

//6.- Hacer un programa que imprima todos los números naturales que hay desde el uno hasta un número que introducimos por teclado. 

//Si se esta trabajando con windows talvez sea necesario descargar la libreria de prompt, con el siguiente comando:
//  npm install prompt-sync

//Luego debemos de indicarle a prompt (nuestro comando a utilizar) que libreria utilizar con el siguiente comando:
const prompt = require('prompt-sync')();

var numero = prompt("Introduce un número:");


for (var i = 1; i <= numero; i++) {
    console.log(i);
}


//Este programa fue probado en Windows 11, probablemente linux tenga default el comando prompt