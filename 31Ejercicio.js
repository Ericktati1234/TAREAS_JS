
//31.- Hacer un programa que nos permita introducir un número por teclado y sobre él se realicen
//las siguientes operaciones: comprobar si es primo, hallar su factorial o imprimir su tabla de
//multiplicar. 


const prompt = require('prompt-sync')();


function primo(numero) {
    let bandera= true;
    for (let i = numero; i > 1; i--) {
    
        if(numero%i==0 && numero !=i){
            bandera =false;
        }
    }
    if (bandera){
        console.log(numero + " es un numero primo");
    }else{
        console.log(numero + " no es un numero primo");
    }
}

function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i; 
    }
    console.log("Su factorial es: "+resultado);
}

function tablaMultiplicacion(numero) {
    for (let i = 1; i <= 100; i++) {
    
        console.log(numero +" * "+i+" = "+(numero*i));
    }
}


var opcion = 0;
var numero;

while(opcion!=4){
    if(opcion == 0){
        numero = parseInt(prompt("Introduce el número: "));
    }
    console.log("Selecciona la operación que deseas realizar:");
    console.log("(0) Cambiar numero");
    console.log("(1) Comprobar si es primo");
    console.log("(2) Hallar su factorial");
    console.log("(3) Imprimir su tabla de multiplicar");
    console.log("(4) Salir");
    opcion = parseInt(prompt("-> "));
    switch (parseInt(opcion)) {
        case 0:
            console.log("CAMBIANDO NUMERO");
            break;
        case 1:
            primo(numero);
            break;
        case 2:
            factorial(numero);
            break;
        case 3:
            tablaMultiplicacion(numero);
            break;
        case 4:
            console.log("TERMINANDO PROGRAMA");
            break;
        default:
            console.log("OPCION INVALIDA")
    }
}
  
