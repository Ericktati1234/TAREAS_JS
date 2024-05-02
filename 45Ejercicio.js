
//45.- Tenemos el archivo DATOS.DAT con la misma estructura anterior, que esta indexado por el
//campo ID. Crear un programa que nos permita consultar un registro siempre que queramos


/*
    NOTA: Al igual que los otros programas, este no mostrara que encontro o no encontró hasta que el
    programa ya haya finalizado
*/

const fs = require('fs');
const prompt = require('prompt-sync')();

const archivoDatos = 'DATOS.DAT';


function buscarRegistroPorID(idBuscado) {
    
    fs.readFile(archivoDatos, 'utf8', (err, data) => {
        if (err) {
            console.log('Hubo un error al leer el archivo:', err);
            return;
        }

        const registros = data.trim().split('\n');

        for (let i = 0; i < registros.length; i++) {
            const registro = registros[i];
            const campos = registro.split(',');

            //Utilizamos el mismo procedimiento para buscar un registro para eliminar, pero ahora solo 
            // para buscar
            const id = campos[0]; 

            if (id === idBuscado) {
                //Si se logra encontrar ese registro solamente lo imprimimos
                console.log('Registro encontrado:', registro);
                return;
                //return nos regresa a la ejecucion del while
            }
        }

        // Si no se encuentra ningún registro con el ID buscado, imprimos este mensaje
        console.log('No se encontró ningún registro con el ID', idBuscado);
    });
}


let continuar = 1;
while (continuar !=0) {
    
    const idBuscado = prompt('Introduce el ID que deseas buscar o escribe (0) ');

    if (idBuscado == 0) {
        console.log('Saliendo del programa.');
        continuar =0;
    } else {
        buscarRegistroPorID(idBuscado);
    }
}


