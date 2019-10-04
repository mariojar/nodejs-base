const fs = require('fs');

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            throw err;

    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = []
    }

}

let listadoPorHacer = [];

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}



module.exports = {
    crear,
    getListado

};