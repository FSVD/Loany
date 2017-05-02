var express = require('express');
var router = express.Router();
var ctrlGrupos = require('../controllers/ctrl_grupos.js');

/* Llama la funcion que carga el buscador de los grupos. */
router.get('/cargar_buscador_grupos', ctrlGrupos.cargarBuscadorGrupos);

/* Llama la funcion que ejecuta la busqueda de grupos. */
router.get('/buscar_grupos', ctrlGrupos.buscarGrupos);

/* Llama la funcion que carga el formulario para la creacion de un nuevo grupo. */
router.get('/crear_grupo', ctrlGrupos.crearGrupo);

/* Llama la funcion que guarda un nuevo ggruporupo en la base de datos. */
router.post('/guardar_grupo', ctrlGrupos.guardarGrupo);

/* Llama la funcion que visualiza la ficha del grupo. */
router.get('/visualizar_grupo/:id_grupo', ctrlGrupos.visualizarGrupo);

/* Llama la funcion que visualiza la pagina de modificacion de los datos del grupo. */
router.get('/modificar_grupo', ctrlGrupos.modificarGrupo);

/* Llama la funcion que guarda los datos modificados de un grupo en la base de datos. */
router.post('/guardar_grupo_modificado', ctrlGrupos.guardarGrupoModificado);

/* Llama la funcion que elimina el grupo. */
router.get('/eliminar_grupo/:id_grupo', ctrlGrupos.eliminarGrupo);


module.exports = router;