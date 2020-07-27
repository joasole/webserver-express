const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

/// conocer el puuerto con herocus

const port = process.env.PORT || 3000;

/// publico un directorio
app.use(express.static(__dirname + '/public'));



//express hbs engine

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'JOANITA',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {

    });
});



app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
});








///##### codigo modificado 



// app.get('/', function (req, res) { // es un funcion la re rescribo
//app.get('/', (req, res) => {

//res.send('hola mundo ')
/* 
    let salida = {
        nombre: 'JOANITA',
        edad: 30,
        url: req.url
    }
    res.send(salida); */

//  {  app.get('/data', (req, res) => {
//         res.send('hola data ')

//     })}


/// modificacion2

//express hbs engine
/* 
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'JOANITA',
        anio: new Date().getFullYear() ///genera el año de manera dinamica
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear() ///genera el año de manera dinamica
    });
});



app.listen(3000, () => {
    console.log('escuchando en el puerto 3000');
});
 */