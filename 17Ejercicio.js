
//17.- Imprimir, contar y sumar los múltiplos de 2 que hay entre una serie de números, tal que el
//segundo sea mayor o igual que el primero. 

const prompt = require('prompt-sync')();

var Resultado = [0, 0, 0, 0, 0];
var aux = 0;
Resultado[0] = parseFloat(prompt("Introduce un numero :"));

for (let i = 1; i < 5; i++) {
    aux = 0;
    Resultado[i] = parseFloat(prompt("Introduce un numero mayor al anterior introducido:"));

    for (let j = Resultado[i-1]; j <= Resultado[i]; j++) {
        aux += j;
        console.log(j)
    }
    console.log("Hay "+(Resultado[i]-Resultado[i-1])+" Numeros entre los 2 numeros introducidos");
    console.log("La suma de los numeros entre esos 2 numeros es "+aux);
}
