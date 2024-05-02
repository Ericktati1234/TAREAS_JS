
//29.- Simular cien tiradas de dos dados y contar las veces que entre los dos suman 10. 


function simularTiradas() {
    let conteo = 0;
    let dado1;
    let dado2;
    for (let i =0; i <100; i++) {

        //Math.floor, redondea hacia abajo y Math.random da un valor entre 0 y 1
        dado1 = Math.floor(Math.random()*6) +1;
        dado2 = Math.floor(Math.random()*6) +1;
        //Sino le sumamos 1, nos pueden dar valores como 0 y no existe el 0 en un dado

        if (dado1 + dado2 == 10) {
            conteo++;
        }
    }
    return conteo;
}

var resultado = simularTiradas();
console.log("Se realizaron 100 tiradas de 2 dados, en las cuales "+resultado+" veces cayó 10");