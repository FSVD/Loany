var express = require('express');
var router = express.Router();
var ctrlSistema = require('../controllers/ctrl_sistema.js');

/* Llama la funcion que carga la pagina que mostra la informacion del sistema. */
router.get('/informacion', ctrlSistema.informacion);


module.exports = router;