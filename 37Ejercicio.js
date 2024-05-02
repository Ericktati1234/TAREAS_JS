

//37.-Cargar las notas de los alumnos de un colegio en función del número de cursos y del número
//de alumnos por curso. 


const prompt = require('prompt-sync')();

var numCursos = parseInt(prompt("Introduce el número de cursos: "));

var numAlumnosPorCurso = parseInt(prompt("Introduce el número de alumnos por curso: "));

var notas = Array.from({ length: numCursos }, () => Array(numAlumnosPorCurso).fill(0));
var calificacion = 0.0;
for (let curso = 0; curso < numCursos; curso++) {
    console.log("Curso numero "+(curso+1));
    for (let alumno = 0; alumno < numAlumnosPorCurso; alumno++) {
        calificacion = parseFloat(prompt(`Introduce la calificación del alumno ${alumno + 1}: `));
        notas[curso][alumno] = calificacion;
    }
}

console.log("\nNotas de los alumnos por curso:");
for (let curso = 0; curso < numCursos; curso++) {
    console.log("Curso numero "+(curso+1));
    for (let alumno = 0; alumno < numAlumnosPorCurso; alumno++) {
        console.log("Alumno "+(alumno+1)+" : "+notas[curso][alumno])
    }
}
