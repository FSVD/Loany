var ctrlSistema = require('./sistema.controller');

function http() {

    var self = this;

    self.configure = function (app) {

        /* Llama la funcion que carga la pagina que mostra la informacion del sistema. */
        app.get('/informacion', ctrlSistema.informacion);
    }
}

module.exports = new http();