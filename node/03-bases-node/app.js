//requieres

const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./manejoArchivos-multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        console.log('crear');
        break;
    default:
        console.log('comando no reconocido');
}


// const fs = require('express'); extensiones hechas por otros
// const fs = require('./somedirectory/somefile'); files que yo he creato y quiero usar
// let argvW = process.argv;
// let parametro = argvW[2];
// let base = parametro.split('=')[1];

console.log(argv);