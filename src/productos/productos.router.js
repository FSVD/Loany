var ctrlProductos = require('./productos.controller');

function http() {

    var self = this;

    self.configure = function (app) {

        /* Llama la funcion que carga la pagina para administrar los productos. */
        app.get('/administrar_productos', ctrlProductos.administrarProductos);

        /* Llama la funcion que carga el formulario para la creacion de un nuevo producto. */
        app.get('/crear_producto', ctrlProductos.crearProducto);

        /* Llama la funcion que guarda un nuevo producto en la base de datos. */
        app.post('/guardar_producto', ctrlProductos.guardarProducto);

        /* Llama la funcion que visualiza la ficha del producto. */
        app.get('/visualizar_producto/:id_producto', ctrlProductos.visualizarProducto);

        /* Llama la funcion que visualiza la pagina de modificacion de los datos del producto. */
        app.get('/modificar_producto', ctrlProductos.modificarProducto);

        /* Llama la funcion que guarda los datos modificados de un producto en la base de datos. */
        app.post('/guardar_producto_modificado', ctrlProductos.guardarProductoModificado);

        /* Llama la funcion que elimina el producto. */
        app.get('/eliminar_producto/:id_producto', ctrlProductos.eliminarProducto);
    }
}

module.exports = new http();