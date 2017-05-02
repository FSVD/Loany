var express = require('express');
var router = express.Router();
var ctrlPrestamos = require('../controllers/ctrl_prestamos.js');

/* Llama la funcion que carga el buscador de los prestamos. */
router.get('/cargar_buscador_prestamos', ctrlPrestamos.cargarBuscadorPrestamos);

/* Llama la funcion que ejecuta la busqueda de prestamos. */
router.get('/buscar_prestamos', ctrlPrestamos.buscarPrestamos);

/* Llama la funcion que carga el formulario para la creacion de un nuevo prestamo. */
router.get('/crear_prestamo', ctrlPrestamos.crearPrestamo);

/* Llama la funcion que guarda un nuevo prestamo en la base de datos. */
router.post('/guardar_prestamo', ctrlPrestamos.guardarPrestamo);

/* Llama la funcion que visualiza la ficha del prestamo. */
router.get('/visualizar_prestamo/:id_prestamo/:id_producto/:id_solicitud/:id_cliente_datos_identificativos/:id_cliente_historial', ctrlPrestamos.visualizarPrestamo);

/* Llama la funcion que visualiza la pagina de modificacion de los datos del prestamo. */
router.get('/modificar_prestamo', ctrlPrestamos.modificarPrestamo);

/* Llama la funcion que guarda los datos modificados de un prestamo en la base de datos. */
router.post('/guardar_prestamo_modificado', ctrlPrestamos.guardarPrestamoModificado);

/* Llama la funcion que recupera el numero de dias que corresponden a una forma de pago en concreto. */
router.get('/recuperar_datos_forma_pago', ctrlPrestamos.recuperarDatosFormaPago);

/* Llama la funcion que elimina el prestamo. */
router.get('/eliminar_prestamo/:id_prestamo', ctrlPrestamos.eliminarPrestamo);

/* Llama la funcion que actualiza el estado de una cuota. */
router.get('/actualizar_estado_cuota', ctrlPrestamos.actualizarEstadoCuota);


module.exports = router;