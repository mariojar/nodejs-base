const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer')

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log(`Tarea : ${tarea.descripcion} con estado : ${tarea.completado}`)
        }
        break;
    case 'actualizar':
        console.log('Actualizar por hacer');
        break;
    default:
        console.log('Default por hacer');
        break;
}