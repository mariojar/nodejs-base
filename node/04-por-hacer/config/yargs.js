//requieres

const descripcion = {

    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por crear'

}
const completado = {
    demand: true,
    alias: 'c',
    default: true,
    desc: 'Marca como completada o pendiente una tarea'

}
const argv = require('yargs')
    .command('listar', 'Imprime la lista de las tareas')
    .command('crear', 'Crea una tarea por realizar', descripcion)
    .command('actualizar', 'Actualiza una tarea por realizar', {
        descripcion,
        completado

    })
    .help()
    .argv;

module.exports = {
    argv
}