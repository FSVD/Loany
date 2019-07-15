/* Carga la pagina de inicio. */
var inicio = function (req, res, next) {
	res.render('index', {
		scripts_pagina: '',
		validacion_pagina: ''
	});
}

exports.inicio = inicio;