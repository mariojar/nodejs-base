require('./config/config');

const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.get('/usuario', function(req, res) {
    res.json('Hello World');
})

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body,
            mess: "new entry"
        });
    }
})

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    //res.json(`Hello World put del id ${id}`);
    res.json({
        id
    })
})

app.delete('/usuario', function(req, res) {
    res.json('Hello World delete');
})

app.listen(process.env.PORT, () => {
    console.log('Listening on port ', process.env.PORT);
});