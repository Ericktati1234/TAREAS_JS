
//18.- Hacer un programa que cuente las veces que aparece una determinada letra en una frase
//que introduciremos por teclado. 

const prompt = require('prompt-sync')();

const frase = prompt("Introduce una frase: ");

const letra = prompt("Introduce una letra para buscar en la frase: ");

var contador = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() == letra.toLowerCase()) {
        contador++;
    }
}

console.log("La letra "+letra+" aparece "+contador+" veces en la frase.");
