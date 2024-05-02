
//34.- Usando el segundo ejemplo, hacer un programa que busque una nota en la lista. 

const prompt = require('prompt-sync')();

const calificaciones = new Array(10);

var sumaCalificaciones = 0;
var calificacion= 0.0;
for (let i = 0; i < 10; i++) {
    
    calificacion = parseFloat(prompt("Introduce la calificacion "+(i+1)+" :"));
    calificaciones[i] = calificacion;
    sumaCalificaciones += calificacion;
}

var media = sumaCalificaciones / 10;

//toFixed, nos permite limitar los decimales que puede mostrar a solo 2
console.log("La media de las calificaciones del alumno es "+media.toFixed(2));

calificacion = parseFloat(prompt("Escribe la calificacion que desees verificar si existe:"));

for (let i = 0; i < 10; i++) {
    if (calificaciones[i] === calificacion) {
        console.log("Existe en el indice "+i) 
    }
}
