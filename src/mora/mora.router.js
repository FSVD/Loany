var ctrlMora = require('./mora.controller');

function http() {

    var self = this;

    self.configure = function (app) {

        /* Llama la funcion que carga la pagina para administrar los valores de la mora que se aplica a los prestamos. */
        app.get('/administrar_mora', ctrlMora.administrarMora);

        /* Llama la funcion que visualiza la pagina de modificacion de los datos de la mora que se aplica a los prestamos. */
        app.get('/modificar_mora', ctrlMora.modificarMora);

        /* Llama la funcion que guarda los valores de la mora que se aplica a los prestamos. */
        app.post('/guardar_mora_modificada', ctrlMora.guardarMoraModificada);
    }
}

module.exports = new http();