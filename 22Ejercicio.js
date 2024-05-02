
//22.- Introducir una frase por teclado. Imprimirla cinco veces en filas consecutivas, pero cada
//impresión ir desplazada cuatro columnas hacia la derecha. 

const prompt = require('prompt-sync')();

var frase = prompt("Introduce una frase: ");
const desplazamiento = 4;
for (let i = 0; i < 5; i++) {
    //A la variable espacios, estamos asignandole espacios, y con la funcion repeat, decimos, 
    // cuantos espacios van a ser asignados a esa varaible
    let espacios = " ".repeat(i * desplazamiento);
    //Concatenamos nuestros espacios con la frase
    console.log(espacios + frase);
}
