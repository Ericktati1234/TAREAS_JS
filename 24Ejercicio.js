
//24.- Comprobar si un número mayor o igual que la unidad es primo. 

const prompt = require('prompt-sync')();

var bandera = true;

var numero = prompt("Introduce un numero: ");

for (let i = numero; i > 1; i--) {
    
    if(numero%i==0 && numero !=i){
        bandera =false;
    }
}
if (bandera){
    console.log(numero + " es un numero primo")
}else{
    console.log(numero + " no es un numero primo")
}



