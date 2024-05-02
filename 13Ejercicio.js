
//13.- Imprimir y contar los números que son múltiplos de 2 o de 3 que hay entre 1 y 100. 

var Resultado2 = 0;
var Resultado3 = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0){
        Resultado2 ++;
        console.log(i);
    }
    if (i % 3 == 0){
        Resultado3 ++;
        if(i % 2 == 0){
            //Nada, ya fue impreso
        }else{
            console.log(i)
        }
    }
}
console.log("La cantidad de multiplos de 2 entre 1 y 100 son "+Resultado2);
console.log("La cantidad de multiplos de 3 entre 1 y 100 son "+Resultado3);