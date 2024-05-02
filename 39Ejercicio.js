

//39.- Crear una tabla de 3 paginas, 4 filas y 5 columnas donde el primer elemento valga 1, el
//segundo 2, el tercero 3 y así sucesivamente. 

//Codigo extraido de internet sobre la creacion de una matriz cubica
let matrizCubica = Array.from({ length: 3 }, () =>
    Array.from({ length: 4 }, () => Array(5).fill(0))
);

let contador = 1;

for (let pagina = 0; pagina < 3; pagina++) {
    for (let fila = 0; fila < 4; fila++) {
        for (let columna = 0; columna < 5; columna++) {
            matrizCubica[pagina][fila][columna] = contador;
            contador++;
        }
    }
}

console.log("Matriz cúbica (3 páginas, 4 filas, 5 columnas) con valores secuenciales:");
for (let pagina = 0; pagina < 3; pagina++) {
    console.log("Pagina "+pagina)
    for (let fila = 0; fila < 4; fila++) {
        //join nos permite definir que caracter exista entre los valores que imprimimos de una lista, array, etc
        console.log("["+matrizCubica[pagina][fila].join('][')+"]");
    }
    //Separamos las paginas
    console.log(""); 
}