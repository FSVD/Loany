var ctrlIndex = require('./index.controller');

function http() {

    var self = this;

    self.configure = function (app) {

        /* Llama la funcion que carga la portada. */
        app.get('/', ctrlIndex.inicio);
    }
}

module.exports = new http();