

//44.- Con el archivo DATOS.DAT listar todos los registros cuyo estado sea uno determinado que
//introduciremos por teclado. 

const fs = require('fs');
const prompt = require('prompt-sync')();

const archivoDatos = 'DATOS.DAT';


function listarRegistrosPorEstado() {
    
    const estadoBuscado = prompt('Introduce el estado que deseas buscar: ');

    //Realizamos el mismo procedimiento de division de registros y de campos
    fs.readFile(archivoDatos, 'utf8', (err, data) => {
        if (err) {
            console.log('Hubo un error al leer el archivo:', err);
            return;
        }

        const registros = data.trim().split('\n');

        //Esta variable nos permite simplemente verificar si encontramos un registro 
        //Con el estado que buscamos
        let encontrado = false;

        for (let i = 0; i < registros.length; i++) {
            const registro = registros[i];
            const campos = registro.split(',');

            //Ahora en vez de buscar un id, buscamos un estado, asi que extraemos el estado
            const estado = campos[4]; 

            //Y lo verificamos, si es asi, mostramos un mensaje de que si fue encontrado
            if (estado === estadoBuscado) {
                
                console.log('Registro encontrado:', registro);

                //Y cambiamos nuestra bandera a verdadero
                encontrado = true;
            }
        }

        //La bandera de encontrado, solo nos ayuda a imprimir este mensaje en caso de no encontrarlo
        if (!encontrado) {
            console.log('No se encontraron registros con el estado', estadoBuscado);
        }
    });
}

listarRegistrosPorEstado();
