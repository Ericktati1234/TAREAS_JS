// 15.- Introducir dos números por teclado. Imprimir los números naturales que hay entre ambos
//números empezando por el más pequeño, contar cuántos hay y cuántos de ellos son pares.
//Calcular la suma de los impares. 

const prompt = require('prompt-sync')();

let numero1 = parseInt(prompt("Introduce el primer número: "));
let numero2 = parseInt(prompt("Introduce el segundo número: "));


let menor = 0;
let mayor = 0;
if (numero1<numero2){
    menor = numero1;
    mayor = numero2;
}else{
    menor = numero2;
    mayor = numero1;
}


let numeros = mayor-menor;
let cantidadPares = 0;
let sumaImpares = 0;

for (let i = menor; i <= mayor; i++) {
    console.log(i);
    if (i % 2 === 0) {
        cantidadPares++;
    } else {
        sumaImpares += i;
    }
}

// Imprimir los resultados finales
console.log("Cantidad de números en total: "+numeros);
console.log("Cantidad de números pares: "+cantidadPares);
console.log("Suma de los números impares: "+sumaImpares);
