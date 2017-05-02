/* Carga la pagina de inicio. */
var inicio = function (req, res, next) {
	res.render('index', {
		scripts_pagina: '',
		validacion_pagina: ''
	});
}

/* Carga la pagina de inicio. */
var test = function (req, res, next) {
	res.render('test', {
		scripts_pagina: '',
		validacion_pagina: ''
	});
}

exports.inicio = inicio;
exports.test = test;