
//5.-Hacer un programa que imprima los números impares hasta el 100 y que imprima cuantos impares hay. 

var count = 0;
function Numeros (){
    for(let i=1;i<=100;i+=2){
        console.log(i);
        count ++;
    }
    console.log("Hay "+count+" numeros impares")
}

Numeros()