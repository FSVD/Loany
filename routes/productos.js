var express = require('express');
var router = express.Router();
var ctrlProductos = require('../controllers/ctrl_productos.js');

/* Llama la funcion que carga la pagina para administrar los productos. */
router.get('/administrar_productos', ctrlProductos.administrarProductos);

/* Llama la funcion que carga el formulario para la creacion de un nuevo producto. */
router.get('/crear_producto', ctrlProductos.crearProducto);

/* Llama la funcion que guarda un nuevo producto en la base de datos. */
router.post('/guardar_producto', ctrlProductos.guardarProducto);

/* Llama la funcion que visualiza la ficha del producto. */
router.get('/visualizar_producto/:id_producto', ctrlProductos.visualizarProducto);

/* Llama la funcion que visualiza la pagina de modificacion de los datos del producto. */
router.get('/modificar_producto', ctrlProductos.modificarProducto);

/* Llama la funcion que guarda los datos modificados de un producto en la base de datos. */
router.post('/guardar_producto_modificado', ctrlProductos.guardarProductoModificado);

/* Llama la funcion que elimina el producto. */
router.get('/eliminar_producto/:id_producto', ctrlProductos.eliminarProducto);


module.exports = router;