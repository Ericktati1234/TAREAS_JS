

//41. Hacer un programa que nos permita dar altas en el archivo DATOS.DAT, cuyos campos son:
//ID, NOMBRE, APELLIDOS, DIRECCIÓN y ESTADO

// importamos con el nombre fs la libreria fs

const fs = require('fs');
const prompt = require('prompt-sync')();

//Damos de alta nuestro archivo
var archivoDatos = 'DATOS.DAT';

function agregarRegistro() {
    
    let id = prompt('Introduce el ID: ');
    let nombre = prompt('Introduce el nombre: ');
    let apellidos = prompt('Introduce los apellidos: ');
    let direccion = prompt('Introduce la dirección: ');
    let estado = prompt('Introduce el estado: ');

    //Necesitamos concatenar en una sola linea nuestra informacion
    let registro = `${id},${nombre},${apellidos},${direccion},${estado}\n`;

    // Agregar nuestro registro en el archivo Datos.Dat
    fs.appendFile(archivoDatos, registro, (err) => {
        if (err) {
            console.log('Hubo un error al agregar el registro:', err);
        } else {
            console.log('Registro agregado correctamente.');
        }
    });
}

agregarRegistro();
