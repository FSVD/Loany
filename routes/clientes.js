var express = require('express');
var router = express.Router();
var ctrlClientes = require('../controllers/ctrl_clientes.js');

/* Llama la funcion que carga el buscador de los clientes. */
router.get('/cargar_buscador_clientes', ctrlClientes.cargarBuscadorClientes);

/* Llama la funcion que ejecuta la busqueda de clientes. */
router.get('/buscar_clientes', ctrlClientes.buscarClientes);

/* Llama la funcion que carga el formulario para la creacion de un nuevo cliente. */
router.get('/crear_cliente', ctrlClientes.crearCliente);

/* Llama la funcion que guarda un nuevo cliente en la base de datos. */
router.post('/guardar_cliente', ctrlClientes.guardarCliente);

/* Llama la funcion que visualiza la ficha del cliente. */
router.get('/visualizar_cliente/:id_cliente_datos_identificativos/:id_cliente_historial', ctrlClientes.visualizarCliente);

/* Llama la funcion que visualiza la pagina de modificacion de los datos del cliente. */
router.get('/modificar_cliente', ctrlClientes.modificarCliente);

/* Llama la funcion que guarda los datos modificados de un cliente en la base de datos. */
router.post('/guardar_cliente_modificado', ctrlClientes.guardarClienteModificado);

/* Llama la funcion que verifica si el cliente ya existe. */
router.post('/verificar_cliente', ctrlClientes.verificarCliente);

/* Llama la funcion que elimina el cliente. */
router.get('/eliminar_cliente/:id_cliente_datos_identificativos', ctrlClientes.eliminarCliente);

/* Llama la funcion que visualiza las solicitudes del cliente. */
router.get('/visualizar_solicitudes_cliente/:id_cliente_datos_identificativos', ctrlClientes.visualizarSolicitudesCliente);


module.exports = router;