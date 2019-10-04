//requieres

// const fs = require('express'); extensiones hechas por otros
// const fs = require('./somedirectory/somefile'); files que yo he creato y quiero usar


const fs = require('fs');


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, rejec) => {

        if (!Number(base)) {
            rejec(`${base} No es un numero`);
            return;
        }

        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                throw err;
            else
                resolve(`tablas/tabla-${base}.txt`)
        });
    });
}

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}