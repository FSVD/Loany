var express = require('express');
var router = express.Router();
var ctrlIndex = require('../controllers/ctrl_index.js');

/* Llama la funcion que carga la portada. */
router.get('/', ctrlIndex.inicio);


module.exports = router;