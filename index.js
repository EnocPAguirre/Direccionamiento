const express = require('express');

const app = express();

app.get('/home/a', function (req, res) {
    res.send('Hello World');
});

app.post('/', function (req, res) {
    res.send('Respuesta de tipo POST')
})
/*Direccionamiento que no se deriva de ningún método
HTTP, se utiliza para cargar funciones middleware*/

app.all('/secret', function(req, res, next) {
    console.log('Accesando a una sección secreta');
    next();
});

app.get('/secret', function (req, res){
    res.send('Secreto');
});

//Vías de acceso de ruta

app.get('/home/b', function (req, res, next) {
    res.send('Siguiente función de /');
    next();
}, function (req, res){
    res.send('Hola desde home B');
});

app.get('/acerca', function (req, res){
    res.send('acerca');
});

//Cualquiera que tenga a
app.get(/a/, function (req, res){
    res.send('Cualquier ruta con a');
});

//Terminación book
app.get(/.*book$/, function (req, res){
    res.send('Terminacion book');
});
//Manejadores de ruta

var rut1 = function (req, res, next) {
    console.log('A');
    next();
}

var rut2 = function (req, res, next) {
    console.log('B');
    next();
}

app.get('/HOME/rut', [rut1, rut2]);



app.listen(3000, function() {
    console.log('Servidor corriendo en el puerto 3000');
});




