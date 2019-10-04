let empleados = [{
    id: 1,
    nombre: 'Javier'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}]

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find((empleado) => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe el empleado ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}



let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => empleado.id === salario.id)
        if (!salarioDB) {
            reject(`No existe un salario para el empleado ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
        }
    })
}


var index = 1;
// getEmpleado(index).then(responseEmpleado => {
//     getSalario(responseEmpleado).then(responseSalario => {
//         console.log(`El salario del empleado ${responseSalario.nombre} es de ${responseSalario.salario}`);
//     }, (err) => console.log(err));
// }, (err) => console.log(err));

getEmpleado(index).then(responseEmpleado => {
        return getSalario(responseEmpleado);
    })
    .then(responseSalario => {
        console.log(`El salario del empleado ${responseSalario.nombre} es de ${responseSalario.salario}`);
    }).catch(err => {
        console.log(err);
    })
    