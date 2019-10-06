const express = require('express');

const app = express();


app.use(express.static(__dirname + '/public'))


app.get('/saludo', (req, res) => {
    //res.send('Hello World')
    let salida = {
        nombre: 'mario',
        edad: 43,
        url: req.url
    };

    res.send(salida)
})


app.get('/data', (req, res) => {
    res.send('Hola data')
})

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
})