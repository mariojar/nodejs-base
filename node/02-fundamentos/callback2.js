let empleados = [{
    id: 1,
    nombre: 'Fernando'
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


let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find((empleado) => empleado.id === id);

    if (!empleadoDB) {
        callback(`1.) No existe el empleado ${id}`, null);
    } else {
        callback(`5.) empleadoDB ${empleadoDB.nombre}`);
        return empleadoDB;
    }
}

let empleado = getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(`6.) ${err}`);
    } else {
        return console.log(`7.) ${empleado.nombre}`);
    }
});

console.log(`2.) Empleado trovato ${empleado.nombre}`);

let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find((salario) => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No existe salario para el empleado ${empleado.nombre}`, null);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            id: empleado.id,
            salario: salarioDB.salario
        });
    }
}

getSalario(empleado, (err, response) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`El salario del empleado ${response.nombre} es de ${response.salario} y el 
        id es ${response.id}`);
    }
});