
//28.- Simular el lanzamiento de una moneda al aire e imprimir cara o cruz. 

function moneda() {
    
    // La funcion de math.random nos arroja un numero entre 0 y 1
    var resultado = Math.random();
    
    if (resultado < 0.5) {
        console.log("Cara");
    } else {
        console.log("Cruz");
    }
}

moneda();