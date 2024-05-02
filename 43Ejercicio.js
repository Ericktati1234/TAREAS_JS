
//43.- Dado el archivo DATOS.DAT, realizar un programa que nos permita realizar modificaciones
//cuantas veces deseemos. 

//NOTA. Existe un detalle en la insercion y eliminacion de datos, no se nos va a permitir observar cambios
// nuestro documento de datos, hasta que se termine de ejecutar nuestro programa, por lo tanto, CUIDADO con 
// la insercion y borrado de datos

const fs = require('fs');
const prompt = require('prompt-sync')();

const archivoDatos = 'DATOS.DAT';

function darDeBaja() {
    
    //Vamor a buscar el registro desde su id
    const idBaja = prompt('Introduce el ID del registro que deseas dar de baja: ');

    //Leemos todo nuestro archivo, comando extraido de internet
    fs.readFile(archivoDatos, 'utf8', (err, data) => {
        if (err) {
            console.log('Hubo un error al leer el archivo:', err);
            return;
        }

        //Guardamos en una variable (en este caso es un arreglo), seleccionandolos por cada enter
        //(Cada fila es un registro diferente)
        var registros = data.trim().split('\n');

        //Haremos una variable que sera de tipo arreglo y almanecara toda la nueva informacion filtrada
        // evitando seleccionar la informacion que deseamos borrar
        const registrosFiltrados = [];
        for (let i = 0; i < registros.length; i++) {

            let registro = registros[i];
            
            //Dividimos cada registro por cada coma que exista
            let campos = registro.split(',');
        
            // El valor antes de la primera coma es nuestro id y se almacena en el campo[0]
            // Comparamos el valor de todos los registros en su campo 0, para ver si no es igual 
            // al que queremos eliminar, si no es igual, vamos añadiendo ese registro en nuestro 
            // arreglo de registros, con la funcion push
        
            if (campos[0] !== idBaja) {
                registrosFiltrados.push(registro);
            }
        }
        
        //Ahora volvemos a unir nuestros registros por medio de filas
        var nuevoContenido = registrosFiltrados.join('\n');

        //Por ultimo escribimos esta informacion en nuestro documento
        fs.writeFile(archivoDatos, nuevoContenido, err => {
            if (err) {
                console.log('Hubo un error al escribir en el archivo:', err);
            } else {
                console.log('Registro dado de baja correctamente.');
            }
        });
    });
}


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


let opcion = 0;

while (opcion != 3) {
    console.log("Selecciona la operación que deseas realizar:");
    console.log("(1) Agregar un registro");
    console.log("(2) Dar de baja un registro");
    console.log("(3) Salir");

    opcion = parseInt(prompt("-> "));

    switch (opcion) {
        case 1:
            agregarRegistro();
            break;
        case 2:
            darDeBaja();
            break;
        case 3:
            console.log("Saliendo del programa");
            break;
        default:
            console.log("Opción inválida");
    }
}
