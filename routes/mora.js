var express = require('express');
var router = express.Router();
var ctrlMora = require('../controllers/ctrl_mora.js');

/* Llama la funcion que carga la pagina para administrar los valores de la mora que se aplica a los prestamos. */
router.get('/administrar_mora', ctrlMora.administrarMora);

/* Llama la funcion que visualiza la pagina de modificacion de los datos de la mora que se aplica a los prestamos. */
router.get('/modificar_mora', ctrlMora.modificarMora);

/* Llama la funcion que guarda los valores de la mora que se aplica a los prestamos. */
router.post('/guardar_mora_modificada', ctrlMora.guardarMoraModificada);


module.exports = router;