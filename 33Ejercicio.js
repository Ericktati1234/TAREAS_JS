
//33.- Hacer un programa que lea las calificaciones de un alumno en 10 asignaturas, las almacene
//en y calcule e imprima su media. 

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
