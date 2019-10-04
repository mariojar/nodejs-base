// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => a + b;

let saludo = () => `Hola mundo`;

console.log(saludo());


// console.log(sumar(10, 20));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre());