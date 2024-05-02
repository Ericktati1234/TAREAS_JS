//21.- Hacer un programa que calcule independientemente la suma de los pares y los impares de
//los números entre 1 y 1000

function sumaPares(){
    let Resultado = 0;
    for (let i = 0; i <=1000; i+=2) {
        Resultado +=i
    }
    return Resultado;
}

function sumaImpares(){
    let Resultado = 0;
    for (let i = 1; i <=1000; i+=2) {
        Resultado +=i
    }
    return Resultado;
}

console.log("La suma de los numeros pares entre 1 y 1000 es: "+sumaPares());
console.log("La suma de los numeros impares entre 1 y 1000 es: "+sumaImpares());