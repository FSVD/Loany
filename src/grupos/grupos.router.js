var ctrlGrupos = require('./grupos.controller');

function http() {

    var self = this;

    self.configure = function (app) {

        /* Llama la funcion que carga el buscador de los grupos. */
        app.get('/cargar_buscador_grupos', ctrlGrupos.cargarBuscadorGrupos);

        /* Llama la funcion que ejecuta la busqueda de grupos. */
        app.get('/buscar_grupos', ctrlGrupos.buscarGrupos);

        /* Llama la funcion que carga el formulario para la creacion de un nuevo grupo. */
        app.get('/crear_grupo', ctrlGrupos.crearGrupo);

        /* Llama la funcion que guarda un nuevo grupo en la base de datos. */
        app.post('/guardar_grupo', ctrlGrupos.guardarGrupo);

        /* Llama la funcion que visualiza la ficha del grupo. */
        app.get('/visualizar_grupo/:id_grupo', ctrlGrupos.visualizarGrupo);

        /* Llama la funcion que visualiza la pagina de modificacion de los datos del grupo. */
        app.get('/modificar_grupo', ctrlGrupos.modificarGrupo);

        /* Llama la funcion que guarda los datos modificados de un grupo en la base de datos. */
        app.post('/guardar_grupo_modificado', ctrlGrupos.guardarGrupoModificado);

        /* Llama la funcion que elimina el grupo. */
        app.get('/eliminar_grupo/:id_grupo', ctrlGrupos.eliminarGrupo);
    }
}

module.exports = new http();