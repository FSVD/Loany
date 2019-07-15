/* Carga la pagina que mostra la informacion del sistema. */
var informacion = function (req, res, next) {
	res.render('informacion', {
		nombre_pagina: 'Informacion sistema'
	});
};

exports.informacion = informacion;