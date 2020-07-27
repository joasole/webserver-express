const hbs = require('hbs');

//express helper

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('capitalizar', (texto) => { // hace notacion camello con estapcio

    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');

});