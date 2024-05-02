
//12.- Hacer un programa que imprima los números del 1 al 100 y que calcule la suma de todos los 
// números pares por un lado, y por otro, la de todos los impares. 

var ResultadoPar = 0;
var ResultadoImpar = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0){
        ResultadoPar +=i;
    }else {
        ResultadoImpar +=i;
    }
    console.log(i);
}
console.log("El resultado de las suma de todos los numeros pares es "+ResultadoPar);
console.log("El resultado de las suma de todos los numeros impares es "+ResultadoImpar);