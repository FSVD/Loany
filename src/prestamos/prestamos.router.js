var ctrlPrestamos = require('./prestamos.controller');

function http() {

    var self = this;

    self.configure = function (app) {

        /* Llama la funcion que carga el buscador de los prestamos. */
        app.get('/cargar_buscador_prestamos', ctrlPrestamos.cargarBuscadorPrestamos);

        /* Llama la funcion que ejecuta la busqueda de prestamos. */
        app.get('/buscar_prestamos', ctrlPrestamos.buscarPrestamos);

        /* Llama la funcion que carga el formulario para la creacion de un nuevo prestamo. */
        app.get('/crear_prestamo', ctrlPrestamos.crearPrestamo);

        /* Llama la funcion que guarda un nuevo prestamo en la base de datos. */
        app.post('/guardar_prestamo', ctrlPrestamos.guardarPrestamo);

        /* Llama la funcion que visualiza la ficha del prestamo. */
        app.get('/visualizar_prestamo/:id_prestamo/:id_producto/:id_solicitud/:id_cliente_datos_identificativos/:id_cliente_historial', ctrlPrestamos.visualizarPrestamo);

        /* Llama la funcion que visualiza la pagina de modificacion de los datos del prestamo. */
        app.get('/modificar_prestamo', ctrlPrestamos.modificarPrestamo);

        /* Llama la funcion que guarda los datos modificados de un prestamo en la base de datos. */
        app.post('/guardar_prestamo_modificado', ctrlPrestamos.guardarPrestamoModificado);

        /* Llama la funcion que recupera el numero de dias que corresponden a una forma de pago en concreto. */
        app.get('/recuperar_datos_forma_pago', ctrlPrestamos.recuperarDatosFormaPago);

        /* Llama la funcion que elimina el prestamo. */
        app.get('/eliminar_prestamo/:id_prestamo', ctrlPrestamos.eliminarPrestamo);

        /* Llama la funcion que actualiza el estado de una cuota. */
        app.get('/actualizar_estado_cuota', ctrlPrestamos.actualizarEstadoCuota);
    }
}

module.exports = new http();