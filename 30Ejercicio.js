
//30.- Introducir dos números por teclado y mediante un menú, calcule su suma, su resta, su
//multiplicación o su división. 

const prompt = require('prompt-sync')();



function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multiplicacion(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if (num2 == 0) {
        return "No se puede dividir por cero";
    }
    return num1 / num2;
}
var opcion = 0;
var numero1;
var numero2;
while(opcion!=5){
    numero1 = parseInt(prompt("Introduce el primer número: "));
    numero2 = parseInt(prompt("Introduce el segundo número: "));

    console.log("Selecciona la operación que deseas realizar:");
    console.log("(1) Suma");
    console.log("(2) Resta");
    console.log("(3) Multiplicación");
    console.log("(4) División");
    console.log("(5) Salir");
    opcion = parseInt(prompt("-> "));
    switch (parseInt(opcion)) {
        case 1:
            console.log(numero1+" + "+numero2 +" = " + suma(numero1,numero2));
            break;
        case 2:
            console.log(numero1+" - "+numero2 +" = " + resta(numero1,numero2));
            break;
        case 3:
            console.log(numero1+" * "+numero2 +" = " + multiplicacion(numero1,numero2));
            break;
        case 4:
            console.log(numero1+" / "+numero2 +" = " + division(numero1,numero2));
            break;
        case 5:
            console.log("TERMINANDO PROGRAMA");
            break;
        default:
            console.log("OPCION INVALIDA")
    }
}
  
