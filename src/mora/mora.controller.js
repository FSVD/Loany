/* Incluye el modulo para las peticiones a base de datos. */
//----------------------------------------------------------

var db = require("../../config/db_development");


/* Crea el objeto que define las variables de la pagina */
//--------------------------------------------------------

var variables_pagina = {

	// PROPIEDADES ELEMENTOS PAGINA
	// ----------------------------

	// Define el nombre de la pagina:
	nombre_pagina: "",

	// Define las propiedades para la primera ventana modal:
	titulo_ventana_modal_1: "",
	texto_ventana_modal_1: "",
	comando_btn_confirmacion_1: "",

	// Define las propiedades para la segunda ventana modal:
	titulo_ventana_modal_2: "",
	texto_ventana_modal_2: "",
	comando_btn_confirmacion_2: "",

	// Carga los scripts especificos para la pagina:
	scripts_pagina: "",

	// Define las propiedades del formulario:
	valor_id_formulario: "",
	valor_metodo_formulario: "",
	valor_action_formulario: "",

	// Define el estado de los elementos del formulario:
	estado_control_formulario: "",
	visibilidad: "",

	// DATOS MORA
	// ----------

	valor_mr_cargo: {
		seleccionado: "no_seleccionado"
	},
	valor_mr_cargo_minimo: 0,
	valor_mr_cargo_maximo: 0,
	valor_mr_dias_gracia: {
		seleccionado: "no_seleccionado"
	},
	valor_mr_dias_gracia_minimo: 0,
	valor_mr_dias_gracia_maximo: 0,
	valor_mr_frecuencia: {
		seleccionado: "no_seleccionado"
	},
	valor_mr_gastos_recobro: {
		seleccionado: "no_seleccionado"
	},
	valor_mr_gastos_recobro_minimo: 0,
	valor_mr_gastos_recobro_maximo: 0,
	valor_mr_cobro_compulsivo: {
		seleccionado: "no_seleccionado"
	},

	// Vectores para la generación de elementos HTML dinamicos:
	lista_frecuencias_mora: [],
};


/* Define las propiedades de los elementos de la pagina de administracion de la mora. */
//--------------------------------------------------------------------------------------

function inicializaPaginaAdministracionMora() {

	// PROPIEDADES ELEMENTOS PAGINA
	// ----------------------------

	// Define el nombre de la pagina:
	variables_pagina.nombre_pagina = 'Administrar mora';

	// Carga los scripts especificos para la pagina:
	variables_pagina.scripts_pagina = '<script src="/scripts/scr_mora.js"></script>';

	// Define los atriutos del formulario:
	variables_pagina.valor_id_formulario = "formulario_mora";
	variables_pagina.valor_metodo_formulario = "method=get";
	variables_pagina.valor_action_formulario = "action=/modificar_mora";

	// Define el estado de los elementos del formulario:
	variables_pagina.estado_control_formulario = "disabled";
	variables_pagina.visibilidad = "ocultado";
};


/* Define las propiedades de los elementos de la pagina de modificacion de la mora. */
//------------------------------------------------------------------------------------

function inicializaPaginaModificacionMora() {

	// PROPIEDADES ELEMENTOS PAGINA
	// ----------------------------

	// Define el nombre de la pagina:
	variables_pagina.nombre_pagina = 'Modificar mora';

	// Define las propiedades para la primera ventana modal (Cancelacion de la operacion de modificacion):
	variables_pagina.titulo_ventana_modal_1 = 'Cancelar modificacion configuracion';
	variables_pagina.texto_ventana_modal_1 = 'Los datos no han sido guardados.<br>Esta seguro que desea cancelar la operacion de modificacion del los datos de la mora que se aplicará a los prestamos?';
	variables_pagina.comando_btn_confirmacion_1 = '<a href="/" class="btn btn-primary">Confirmar</a>';

	// Define las propiedades para la segunda ventana modal (Actualizacion de los datos de la mora):
	variables_pagina.titulo_ventana_modal_2 = 'Guardar configuracion';
	variables_pagina.texto_ventana_modal_2 = 'Esta guardando la configuracion de la mora aplicada a los prestamos.<br>La configuracion actual se aplicara a todos los prestamos que se crearan a partir de ahora, la mora aplicada a los prestamos ya concedidos quedara invariada.<br>Desea confirmar la operacion?';
	variables_pagina.comando_btn_confirmacion_2 = '<button class="btn btn-success" type="submit" form="formulario_mora" id="envia_formulario">Confirmar</button>';

	// Carga los scripts especificos para la pagina:
	variables_pagina.scripts_pagina = '<script src="/scripts/scr_mora.js"></script>';

	// Define los atriutos del formulario:
	variables_pagina.valor_id_formulario = "formulario_mora";
	variables_pagina.valor_metodo_formulario = "method=post";
	variables_pagina.valor_action_formulario = "action=/guardar_mora_modificada";

	// Define el estado de los elementos del formulario:
	variables_pagina.estado_control_formulario = "";
	variables_pagina.visibilidad = "";
};


/* Visualiza la pagina para la administracion de la mora. */
// ---------------------------------------------------------

var administrarMora = function (req, res, next) {

	console.log("Administrando mora");

	// Inicializa la pagina.

	inicializaPaginaAdministracionMora();

	// Recupera los datos de la mora desde base de datos.
	db.query('SELECT * FROM mora WHERE mr_id = ? LIMIT 1', [1], function (err, result) {
		if (err) throw err;

		// Inicizliza la pagina de administracion de la mora en la que se mostraran los datos que se acaban de recuperar.

		// PROPIEDADES ELEMENTOS PAGINA
		// ----------------------------

		inicializaPaginaAdministracionMora();

		// Asigna los valores recuperados a los campos del formulario.

		// DATOS MORA
		// ----------

		variables_pagina.valor_mr_cargo = {
			seleccionado: result[0].mr_cargo
		};;
		variables_pagina.valor_mr_dias_gracia = {
			seleccionado: result[0].mr_dias_gracia
		};
		variables_pagina.valor_mr_frecuencia = {
			seleccionado: result[0].frecuencias_mora_fr_id
		};
		variables_pagina.valor_mr_gastos_recobro = {
			seleccionado: result[0].mr_gastos_recobro
		};
		variables_pagina.valor_mr_cobro_compulsivo = {
			seleccionado: result[0].mr_cobro_compulsivo
		};

		// Inicializa las variables para la generación de elementos HTML dinamicos.
		variables_pagina.valor_mr_cargo_minimo = result[0].mr_cargo_minimo;
		variables_pagina.valor_mr_cargo_maximo = result[0].mr_cargo_maximo;
		variables_pagina.valor_mr_incremento_cargo = result[0].mr_incremento_cargo;
		variables_pagina.valor_mr_dias_gracia_minimo = result[0].mr_dias_gracia_minimo;
		variables_pagina.valor_mr_dias_gracia_maximo = result[0].mr_dias_gracia_maximo;
		variables_pagina.valor_mr_gastos_recobro_minimo = result[0].mr_gastos_recobro_minimo;
		variables_pagina.valor_mr_gastos_recobro_maximo = result[0].mr_gastos_recobro_maximo;
		variables_pagina.valor_mr_incremento_gastos_recobro = result[0].mr_incremento_gastos_recobro;

		// Inicializa lo vectores para la generación de elementos HTML dinamicos.
		variables_pagina.lista_frecuencias_mora = [];

		// Recupera las frequencias de la mora.
		db.query('SELECT fr_id, fr_nombre FROM frecuencias_mora', function (err, result) {
			if (err) throw err;

			for (n in result) variables_pagina.lista_frecuencias_mora.push({
				id_frecuencia_mora: result[n].fr_id,
				nombre_frecuencia_mora: result[n].fr_nombre
			});

			// Renderiza la pagina de visualizacion pasandole el objeto que define su contenido.
			res.render('administracion_mora', variables_pagina);
		});
	});
};


/* Visualiza la pagina para la modificacion de la mora. */
// -------------------------------------------------------

var modificarMora = function (req, res, next) {

	console.log("Modificando mora");

	// Inicializa la pagina.

	inicializaPaginaModificacionMora();

	// Recupera los datos de la mora desde el formulario.

	// Inicializa los valores del formulario para la modificacion de la mora.

	// DATOS MORA
	// ----------

	variables_pagina.valor_mr_cargo = {
		seleccionado: req.query.mr_cargo
	};
	variables_pagina.valor_mr_dias_gracia = {
		seleccionado: req.query.mr_dias_gracia
	};
	variables_pagina.valor_mr_frecuencia = {
		seleccionado: req.query.mr_frecuencia
	};
	variables_pagina.valor_mr_gastos_recobro = {
		seleccionado: req.query.mr_gastos_recobro
	};
	variables_pagina.valor_mr_cobro_compulsivo = {
		seleccionado: req.query.mr_cobro_compulsivo
	};

	// Recupera los datos de la mora desde base de datos.
	db.query('SELECT * FROM mora WHERE mr_id = ? LIMIT 1', [1], function (err, result) {
		if (err) throw err;

		// Inicizliza la pagina de administracion de la mora en la que se mostraran los datos que se acaban de recuperar.

		// PROPIEDADES ELEMENTOS PAGINA
		// ----------------------------

		inicializaPaginaModificacionMora();

		// Asigna los valores recuperados a los campos del formulario.

		// DATOS MORA
		// ----------

		// Inicializa lo vectores para la generación de elementos HTML dinamicos.
		variables_pagina.valor_mr_cargo_minimo = result[0].mr_cargo_minimo;
		variables_pagina.valor_mr_cargo_maximo = result[0].mr_cargo_maximo;
		variables_pagina.valor_mr_incremento_cargo = result[0].mr_incremento_cargo;
		variables_pagina.valor_mr_dias_gracia_minimo = result[0].mr_dias_gracia_minimo;
		variables_pagina.valor_mr_dias_gracia_maximo = result[0].mr_dias_gracia_maximo;
		variables_pagina.valor_mr_gastos_recobro_minimo = result[0].mr_gastos_recobro_minimo;
		variables_pagina.valor_mr_gastos_recobro_maximo = result[0].mr_gastos_recobro_maximo;
		variables_pagina.valor_mr_incremento_gastos_recobro = result[0].mr_incremento_gastos_recobro;

		// Inicializa lo vectores para la generación de elementos HTML dinamicos.
		variables_pagina.lista_frecuencias_mora = [];

		// Recupera las frequencias de la mora.
		db.query('SELECT fr_id, fr_nombre FROM frecuencias_mora', function (err, result) {
			if (err) throw err;

			for (n in result) variables_pagina.lista_frecuencias_mora.push({
				id_frecuencia_mora: result[n].fr_id,
				nombre_frecuencia_mora: result[n].fr_nombre
			});

			// Renderiza la pagina de crecion pasandole el objeto que define su contenido.
			res.render('modificacion_mora', variables_pagina);
		});
	});

};


/* Guarda los datos modificados de la mora en la base de datos y visualiza la pagina de administracion. */
//--------------------------------------------------------------------------------------------------------

var guardarMoraModificada = function (req, res, next) {

	console.log("Guardando mora modificada");

	var id_mora = 1;

	// ... (Valida los datos recibidos en la peticion y si la operacion ha tenido exito ejecuta el codigo que sigue).

	// Genera la fecha de ultima modificacion.
	var objeto_fecha = new Date();
	var dia_modificacion = objeto_fecha.getDate();
	var mes_modificacion = objeto_fecha.getMonth() + 1;
	var ano_modificacion = objeto_fecha.getFullYear();
	var hora_modificacion = objeto_fecha.getHours();
	var minuto_modificacion = objeto_fecha.getMinutes();
	var segundo_modificacion = objeto_fecha.getSeconds();
	var fecha_modificacion = ano_modificacion + '-' + mes_modificacion + '-' + dia_modificacion + ' ' + hora_modificacion + ':' + minuto_modificacion + ':' + segundo_modificacion;

	// Guarda los datos validados en base de datos y si la operacion ha tenido exito redirecciona a la funcion que carga la ficha del grupo.
	db.query('UPDATE mora SET ? WHERE mr_id = ?', [{

		// Datos mora:
		mr_cargo: req.body.mr_cargo,
		mr_dias_gracia: req.body.mr_dias_gracia,
		frecuencias_mora_fr_id: req.body.mr_frecuencia,
		mr_gastos_recobro: req.body.mr_gastos_recobro,
		mr_cobro_compulsivo: req.body.mr_cobro_compulsivo,
		mr_fecha_modificacion: fecha_modificacion

	}, id_mora], function (err, result) {
		if (err) throw err;

		// Redirecciona a la pagina de visualizacion pasando el id del grupo a la funcion.
		res.redirect("/administrar_mora");
	});
};


/* Exporta las funciones del controller. */
//-----------------------------------------

exports.administrarMora = administrarMora;
exports.modificarMora = modificarMora;
exports.guardarMoraModificada = guardarMoraModificada;