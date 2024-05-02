
//35.- Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100, e
//imprimirla. 

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 100)+1;
}

//Comando consultado en internet, sobre la realizacion de una matriz 4 x 5
let matriz = Array.from({ length: 4 }, () => Array(5).fill(0));

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 5; j++) {
        matriz[i][j] = generarNumeroAleatorio();
    }
}

console.log("Matriz generada:");
for (let i = 0; i < 5; i++) {
    console.log(`[${matriz[0][i]}][${matriz[1][i]}][${matriz[2][i]}][${matriz[3][i]}]`);
}