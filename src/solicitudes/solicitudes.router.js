var ctrlSolicitudes = require('./solicitudes.controller');

function http() {

    var self = this;

    self.configure = function (app) {

        /* Llama la funcion que carga el buscador de las solicitudes. */
        app.get('/cargar_buscador_solicitudes', ctrlSolicitudes.cargarBuscadorSolicitudes);

        /* Llama la funcion que ejecuta la busqueda de solicitudes. */
        app.get('/buscar_solicitudes', ctrlSolicitudes.buscarSolicitudes);

        /* Llama la funcion que carga el formulario para la creacion de una nueva solicitud. */
        app.get('/crear_solicitud', ctrlSolicitudes.crearSolicitud);

        /* Llama la funcion que guarda una nueva solicitud en la base de datos. */
        app.post('/guardar_solicitud', ctrlSolicitudes.guardarSolicitud);

        /* Llama la funcion que visualiza la ficha de la solicitud. */
        app.get('/visualizar_solicitud/:id_solicitud/:id_cliente_datos_identificativos/:id_cliente_historial', ctrlSolicitudes.visualizarSolicitud);

        /* Llama la funcion que visualiza la pagina de modificacion de los datos de la solicitud. */
        app.get('/modificar_solicitud', ctrlSolicitudes.modificarSolicitud);

        /* Llama la funcion que guarda los datos modificados de una solicitud en la base de datos. */
        app.post('/guardar_solicitud_modificada', ctrlSolicitudes.guardarSolicitudModificada);

        /* Llama la funcion que calcula las cantidades que hay que cargar en la select de la ficha solicitud. */
        app.get('/calcular_cantidades', ctrlSolicitudes.calcularCantidadesProducto);

        /* Llama la funcion que recupera la cantidad solicitada en la solicitud. */
        app.get('/recuperar_cantidad_solicitada', ctrlSolicitudes.recuperarCantidadSolicitada);

        /* Llama la funcion que recupera el prestamo relacionado a la solicitud aproada. */
        app.get('/recuperar_prestamo', ctrlSolicitudes.recuperarPrestamo);

        /* Llama la funcion que elimina la solicitud. */
        app.get('/eliminar_solicitud/:id_solicitud', ctrlSolicitudes.eliminarSolicitud);

    }
}

module.exports = new http();