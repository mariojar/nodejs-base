/*
Async Await
*/

// let getNombre = async() => {
//     throw new Error('No existe un nombre para el usuario');
//     return 'Hello World'
// }

let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Hello World Promise');
        }, 5000);

    });
}


let saludo = async() => {
    console.log('Comienzo a esperar');
    let nombre = await getNombre();
    console.log('Ya termine de esperar');
    return `Hola ${nombre}`;

}


// getNombre().then(nombre => {
//     console.log(nombre);
// }).catch(e => console.log("Error de ASYNC", e));

// console.log(getNombre());

saludo().then(mensaje => {
    console.log(mensaje);
})