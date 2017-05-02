/* Incluye el modulo para las peticiones a base de datos. */
//----------------------------------------------------------

var db = require("../config/db_development");


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

	// DATOS PRODUCTO
	// --------------

	valor_pd_id: "",

	valor_pd_nombre: "",
	valor_pd_importe_minimo: {
		seleccionado: "no_seleccionado"
	},
	valor_pd_importe_maximo: {
		seleccionado: "no_seleccionado"
	},
	valor_pd_montos: {
		seleccionado: "no_seleccionado"
	},
	valor_pd_interes_mensual: {
		seleccionado: "no_seleccionado"
	},
	valor_pd_max_cuotas: {
		seleccionado: "no_seleccionado"
	},
	valor_pd_gastos_activacion: {
		seleccionado: "no_seleccionado"
	},
	valor_pd_comentarios: "",
	valor_pd_forma_pago: "",

	// Indicador de eliminacion permitida:
	valor_eliminacion_permitida: 1,

	// Vectores para la generación de elementos HTML dinamicos:
	lista_formas_pago: [],
	formas_pago_seleccionadas: [],
	lista_productos: [],
};


/* Define las propiedades de los elementos de la pagina de creacion de un nuevo producto. */
//------------------------------------------------------------------------------------------

function inicializaPaginaCreacionProducto() {

	// PROPIEDADES ELEMENTOS PAGINA
	// ----------------------------

	// Define el nombre de la pagina:
	variables_pagina.nombre_pagina = 'Crear producto';

	// Define las propiedades para la primera ventana modal (Cancelacion de la operacion de creacion):
	variables_pagina.titulo_ventana_modal_1 = 'Cancelar introduccion datos';
	variables_pagina.texto_ventana_modal_1 = 'Los datos no han sido guardados.<br>Esta seguro que desea cancelar la creacion del producto?';
	variables_pagina.comando_btn_confirmacion_1 = '<a href="/" class="btn btn-primary">Confirmar</a>';

	// Define las propiedades para la segunda ventana modal (Guardado de nuevo producto):
	variables_pagina.titulo_ventana_modal_2 = 'Guardar producto';
	variables_pagina.texto_ventana_modal_2 = 'Esta guardando un nuevo producto.<br>Desea confirmar la operacion?';
	variables_pagina.comando_btn_confirmacion_2 = '<button class="btn btn-success" type="submit" form="formulario_producto" id="envia_formulario">Confirmar</button>';

	// Carga los scripts especificos para la pagina:
	variables_pagina.scripts_pagina = '<script src="/scripts/scr_productos.js"></script>';

	// Define las propiedades del formulario:
	variables_pagina.valor_id_formulario = "formulario_producto";
	variables_pagina.valor_metodo_formulario = "method=post";
	variables_pagina.valor_action_formulario = "action=/guardar_producto";

	// Define el estado de los elementos del formulario:
	variables_pagina.estado_control_formulario = "";
	variables_pagina.visibilidad = "";
};


/* Define las propiedades de los elementos de la pagina de modificacion de un producto. */
//----------------------------------------------------------------------------------------

function inicializaPaginaModificacionProducto() {

	// PROPIEDADES ELEMENTOS PAGINA
	// ----------------------------

	// Define el nombre de la pagina:
	variables_pagina.nombre_pagina = 'Modificar producto';

	// Define las propiedades para la primera ventana modal (Cancelacion de la operacion de modificacion):
	variables_pagina.titulo_ventana_modal_1 = 'Cancelar introduccion datos';
	variables_pagina.texto_ventana_modal_1 = 'Los datos no han sido guardados.<br>Esta seguro que desea cancelar la modificacion del los datos del producto?';
	variables_pagina.comando_btn_confirmacion_1 = '<a href="/" class="btn btn-primary">Confirmar</a>';

	// Define las propiedades para la segunda ventana modal (Actualizacion de los datos del producto):
	variables_pagina.titulo_ventana_modal_2 = 'Guardar producto';
	variables_pagina.texto_ventana_modal_2 = 'Esta guardando los datos actualizados del producto.<br>La operacion de modificacion de los datos no afectará a los prestamos que ya se hayan concedido.<br>Desea confirmar la operacion?';
	variables_pagina.comando_btn_confirmacion_2 = '<button class="btn btn-success" type="submit" form="formulario_producto" id="envia_formulario">Confirmar</button>';

	// Carga los scripts especificos para la pagina:
	variables_pagina.scripts_pagina = '<script src="/scripts/scr_productos.js"></script>';

	// Define los atriutos del formulario:
	variables_pagina.valor_id_formulario = "formulario_producto";
	variables_pagina.valor_metodo_formulario = "method=post";
	variables_pagina.valor_action_formulario = "action=/guardar_producto_modificado";

	// Define el estado de los elementos del formulario:
	variables_pagina.estado_control_formulario = "";
	variables_pagina.visibilidad = "";
};


/* Define las propiedades de los elementos de la ficha del producto. */
//---------------------------------------------------------------------

function inicializaFichaProducto() {

	// PROPIEDADES ELEMENTOS PAGINA
	// ----------------------------

	// Define el nombre de la pagina:
	variables_pagina.nombre_pagina = 'Ficha producto';

	// Define las propiedades para la primera ventana modal (Eliminacion del producto):
	variables_pagina.titulo_ventana_modal_1 = 'Eliminar producto';
	variables_pagina.texto_ventana_modal_1 = 'Está intentando eliminar el producto, la operacion no es reversible.<br>Desea confirmar la operacion?';

	// Carga los scripts especificos para la pagina:
	variables_pagina.scripts_pagina = '<script src="/scripts/scr_productos.js"></script>';

	// Define las propiedades del formulario:
	variables_pagina.valor_id_formulario = "formulario_producto";
	variables_pagina.valor_metodo_formulario = "method=get";
	variables_pagina.valor_action_formulario = "action=/modificar_producto";

	// Define el estado de los elementos del formulario:
	variables_pagina.estado_control_formulario = "disabled";
	variables_pagina.visibilidad = "ocultado";
};


/* Carga la pagina para administrar los productos. */
// --------------------------------------------------

var administrarProductos = function (req, res, next) {

	db.query('SELECT pd_id, pd_nombre, pd_importe_minimo, pd_importe_maximo, pd_interes_mensual, pd_max_cuotas, pd_gastos_activacion, pd_estado FROM productos', function (err, result) {
		if (err) throw err

		var lista_productos = [];
		var estado_producto;

		for (i in result) {

			if (result[i].pd_estado == 1) {
				estado_producto = "Activo";
			} else if (result[i].pd_estado == 2) {
				estado_producto = "Inactivo";
			};

			lista_productos.push({
				pd_id: result[i].pd_id,
				pd_nombre: result[i].pd_nombre,
				pd_importe_minimo: (result[i].pd_importe_minimo).toFixed(2),
				pd_importe_maximo: (result[i].pd_importe_maximo).toFixed(2),
				pd_interes_mensual: (result[i].pd_interes_mensual).toFixed(2),
				pd_max_cuotas: result[i].pd_max_cuotas,
				pd_gastos_activacion: (result[i].pd_gastos_activacion).toFixed(2),
				pd_estado: estado_producto
			});

			if (i == result.length - 1) {

				res.render('administracion_productos', {

					nombre_pagina: 'Productos',

					// Carga los scripts especificos para la pagina:
					scripts_pagina: '<script src="/scripts/scr_productos.js"></script>',

					// Vectores para la generación de elementos HTML dinamicos:
					lista_productos: lista_productos
				});
			};
		};
	});

};


/* Visualiza la pagina para la creacion de un nuevo producto. */
// -------------------------------------------------------------

var crearProducto = function (req, res, next) {

	console.log("Creando producto");

	// Inicializa la pagina.

	inicializaPaginaCreacionProducto();

	// Inicializa los valores del formulario para la creacion de un nuevo producto.

	// DATOS PRODUCTO
	// --------------

	variables_pagina.valor_pd_id = "";
	variables_pagina.valor_pd_nombre = "";
	variables_pagina.valor_pd_importe_minimo = {
		seleccionado: "no_seleccionado"
	};
	variables_pagina.valor_pd_importe_maximo = {
		seleccionado: "no_seleccionado"
	};
	variables_pagina.valor_pd_montos = {
		seleccionado: "no_seleccionado"
	};
	variables_pagina.valor_pd_interes_mensual = {
		seleccionado: "no_seleccionado"
	};
	variables_pagina.valor_pd_max_cuotas = {
		seleccionado: "no_seleccionado"
	};
	variables_pagina.valor_pd_gastos_activacion = {
		seleccionado: "no_seleccionado"
	};
	variables_pagina.valor_pd_forma_pago = "";
	variables_pagina.valor_pd_comentarios = "";
	variables_pagina.valor_pd_estado = {
		seleccionado: 1
	};

	// Inicializa lo vectores para la generación de elementos HTML dinamicos.
	variables_pagina.lista_formas_pago = [];
	variables_pagina.formas_pago_seleccionadas = [];

	// Recupera las formas de pago..
	db.query('SELECT * FROM formas_pago', function (err, result) {
		if (err) throw err;

		for (n in result) variables_pagina.lista_formas_pago.push({
			id_forma_pago: result[n].fp_id,
			nombre_forma_pago: result[n].fp_nombre
		});

		// Renderiza la pagina de crecion pasandole el objeto que define su contenido.
		res.render('creacion_modificacion_producto', variables_pagina);
	});
};


/* Guarda los datos del nuevo producto en la base de datos y visualiza su ficha. */
//---------------------------------------------------------------------------------

var guardarProducto = function (req, res, next) {

	console.log("Guardando nuevo producto");

	var formas_pago_seleccionadas = req.body.pd_forma_pago;

	// ... (Valida los datos recibidos en la peticion y si la operacion ha tenido exito ejecuta el codigo que sigue).

	// Genera la fecha de creacion.
	var objeto_fecha = new Date();
	var dia_creacion = objeto_fecha.getDate();
	var mes_creacion = objeto_fecha.getMonth() + 1;
	var ano_creacion = objeto_fecha.getFullYear();
	var hora_creacion = objeto_fecha.getHours();
	var minuto_creacion = objeto_fecha.getMinutes();
	var segundo_creacion = objeto_fecha.getSeconds();
	var fecha_creacion = ano_creacion + '-' + mes_creacion + '-' + dia_creacion + ' ' + hora_creacion + ':' + minuto_creacion + ':' + segundo_creacion;

	// Guarda los datos validados en base de datos y si la operacion ha tenido exito ejecuta el codigo que sigue.
	db.query('INSERT INTO productos SET ?', {

		// Datos producto:
		pd_nombre: req.body.pd_nombre,
		pd_importe_minimo: req.body.pd_importe_minimo,
		pd_importe_maximo: req.body.pd_importe_maximo,
		pd_montos: req.body.pd_montos,
		pd_interes_mensual: req.body.pd_interes_mensual,
		pd_max_cuotas: req.body.pd_max_cuotas,
		pd_gastos_activacion: req.body.pd_gastos_activacion,
		pd_comentarios: req.body.pd_comentarios,
		pd_estado: req.body.pd_estado,
		pd_fecha_creacion: fecha_creacion,
		pd_fecha_ultima_modificacion: fecha_creacion,

	}, function (err, result) {
		if (err) throw err;

		// Recupera el id del producto que acaba de guardar
		var id_producto = result.insertId;

		// Declara el contador de peticiones a base de datos para operaciones de insercion ciclica que determinara cuando redireccionar a la pagina.
		var peticion_db = 0;

		// Inserta las claves primarias en la tabla intermedia que define las formas de pago disponibles para el producto.
		for (i in formas_pago_seleccionadas) {

			db.query('INSERT INTO productos_has_formas_pago SET ?', {

				productos_pd_id: id_producto,
				formas_pago_fp_id: formas_pago_seleccionadas[i]

			}, function (err, result) {
				if (err) throw err;

				// Incrementa el contador de peticiones.
				peticion_db++;

				// Redirecciona a la pagina de visualizacion pasando el id del producto a la funcion.
				if (peticion_db == parseInt(i) + 1) res.redirect("/visualizar_producto/:" + id_producto);
			});
		};
	});
};


/* Visualiza la pagina con el formulario para la modificacion de los datos del producto. */
//-----------------------------------------------------------------------------------------

var modificarProducto = function (req, res, next) {

	console.log("Modificando producto");

	// Recupera los datos del producto desde la ficha del producto para su modificacion.
	// Inicializa la pagina que se mostrará tras haber recuperado los datos y asigna los valores recuperados a los campos del formulario.

	// PROPIEDADES ELEMENTOS PAGINA
	// ----------------------------

	inicializaPaginaModificacionProducto();

	// DATOS PRODUCTO
	// --------------

	variables_pagina.valor_pd_id = req.query.pd_id;
	variables_pagina.valor_pd_nombre = req.query.pd_nombre;
	variables_pagina.valor_pd_importe_minimo = {
		seleccionado: req.query.pd_importe_minimo
	};
	variables_pagina.valor_pd_importe_maximo = {
		seleccionado: req.query.pd_importe_maximo
	};
	variables_pagina.valor_pd_montos = {
		seleccionado: req.query.pd_montos
	};
	variables_pagina.valor_pd_interes_mensual = {
		seleccionado: req.query.pd_interes_mensual
	};
	variables_pagina.valor_pd_max_cuotas = {
		seleccionado: req.query.pd_max_cuotas
	};
	variables_pagina.valor_pd_gastos_activacion = {
		seleccionado: req.query.pd_gastos_activacion
	};
	variables_pagina.valor_pd_comentarios = req.query.pd_comentarios;
	variables_pagina.valor_pd_estado = {
		seleccionado: req.query.pd_estado
	};

	// Inicializa lo vectores para la generación de elementos HTML dinamicos.
	variables_pagina.lista_formas_pago = [];
	variables_pagina.formas_pago_seleccionadas = [];

	// Recupera las formas de pago.
	db.query('SELECT * FROM formas_pago', function (err, result) {
		if (err) throw err;

		for (n in result) variables_pagina.lista_formas_pago.push({
			id_forma_pago: result[n].fp_id,
			nombre_forma_pago: result[n].fp_nombre
		});

		// Declara el contador de peticiones a base de datos para operaciones de seleccion ciclica que determinara cuando renderizar la pagina.
		var peticion_db = 0;

		// Selecciona desde la tabla intermedia las formas de pago disponibles para el producto.
		for (z in result) {

			db.query('SELECT * FROM productos_has_formas_pago WHERE productos_pd_id = ? AND formas_pago_fp_id = ?', [variables_pagina.valor_pd_id, result[z].fp_id], function (err, result) {
				if (err) throw err;

				// Verifica la formas de pago aparece entre las que ha sido seleccionada para el producto.
				if (result[0] != undefined) {
					variables_pagina.formas_pago_seleccionadas.push("seleccionada")
				} else {
					variables_pagina.formas_pago_seleccionadas.push("no_seleccionada")
				}

				// Incrementa el contador de peticiones.
				peticion_db++;

				// Verifica si se ha ejecutado la ultima peticion en base de datos y en caso afirmativo renderiza la pagina de crecion pasandole el objeto que define su contenido.
				if (peticion_db == parseInt(z) + 1) res.render('creacion_modificacion_producto', variables_pagina);
			});
		};
	});
};


/* Guarda los datos modificados de un producto en la base de datos y visualiza su ficha. */
//----------------------------------------------------------------------------------------

var guardarProductoModificado = function (req, res, next) {

	console.log("Guardando producto modificado");

	var id_producto = req.body.pd_id;

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

	// Guarda los datos validados en base de datos y si la operacion ha tenido exito ejecuta el codigo que sigue).
	db.query('UPDATE productos SET ? WHERE pd_id = ?', [{

		// Datos producto:
		pd_nombre: req.body.pd_nombre,
		pd_importe_minimo: req.body.pd_importe_minimo,
		pd_importe_maximo: req.body.pd_importe_maximo,
		pd_montos: req.body.pd_montos,
		pd_interes_mensual: req.body.pd_interes_mensual,
		pd_max_cuotas: req.body.pd_max_cuotas,
		pd_gastos_activacion: req.body.pd_gastos_activacion,
		pd_comentarios: req.body.pd_comentarios,
		pd_estado: req.body.pd_estado,
		pd_fecha_ultima_modificacion: fecha_modificacion

	}, id_producto], function (err, result) {
		if (err) throw err;

		// Elimina todas las asociaciones entre las formas de pago y el producto antes de volver a insertar las nuevas despues de la modificacion.
		db.query('DELETE FROM productos_has_formas_pago WHERE productos_pd_id = ?', [id_producto], function (err, result) {
			if (err) throw err;

			// Declara el contador de peticiones a base de datos para operaciones de seleccion ciclica que determinara cuando redireccionar a la pagina.
			var peticion_db = 0;

			// Inserta las claves primarias en la tabla intermedia que define las formas de pago disponibles para el producto.
			for (i in req.body.pd_forma_pago) {

				db.query('INSERT INTO productos_has_formas_pago SET ?', {

					productos_pd_id: id_producto,
					formas_pago_fp_id: req.body.pd_forma_pago[i]

				}, function (err, result) {
					if (err) throw err;

					// Incrementa el contador de peticiones.
					peticion_db++;

					// Verifica si se ha ejecutado la ultima peticion en base de datos y en caso afirmativo redirecciona a la pagina de visualizacion.
					if (peticion_db == req.body.pd_forma_pago.length) res.redirect("/visualizar_producto/:" + id_producto);
				});
			}
		});
	});
};


/* Visualiza la ficha del producto. */
//------------------------------------

var visualizarProducto = function (req, res, next) {

	console.log("Visualizando producto");

	// Recupera el parametro enviado con la llamada a la funcion.
	var id_producto = req.params.id_producto.slice(1);

	// Lo asigna a la variable de pagina.
	variables_pagina.valor_pd_id = id_producto;

	// Verifica si hay alguna solicitud para el producto.
	db.query('SELECT sl_id FROM solicitudes WHERE productos_pd_id = ? LIMIT 1', [id_producto], function (err, result) {
		if (err) throw err;

		if (result[0] == undefined) {
			variables_pagina.valor_eliminacion_permitida = 1;
			variables_pagina.valor_info_producto = ""
		} else {
			variables_pagina.valor_eliminacion_permitida = 0;
			variables_pagina.valor_info_producto = "El boton de eliminacion esta desabilitado porque hay solicitudes para este producto."
		}

		// Recupera los datos de un producto desde base de datos.
		db.query('SELECT * FROM productos WHERE pd_id = ? LIMIT 1', [id_producto], function (err, result) {
			if (err) throw err;

			// Si existe el resultados lo mostra sino redirecciona a la pagina de error.
			if (result[0] != undefined) {

				// Inicizliza la ficha del producto en la que se mostraran los datos que se acaban de recuperar.

				// PROPIEDADES ELEMENTOS PAGINA
				// ----------------------------

				inicializaFichaProducto();

				// Define la propiedad para el boton de eliminacion pasandole los parametros.
				variables_pagina.comando_btn_confirmacion_1 = '<a href="/eliminar_producto/:' + id_producto + '" class="btn btn-danger">Confirmar</a>';

				// Asigna los valores recuperados a los campos del formulario.

				// DATOS PRODUCTO
				// --------------

				variables_pagina.valor_pd_nombre = result[0].pd_nombre;
				variables_pagina.valor_pd_importe_minimo = {
					seleccionado: result[0].pd_importe_minimo
				};
				variables_pagina.valor_pd_importe_maximo = {
					seleccionado: result[0].pd_importe_maximo
				};
				variables_pagina.valor_pd_montos = {
					seleccionado: result[0].pd_montos
				};
				variables_pagina.valor_pd_interes_mensual = {
					seleccionado: result[0].pd_interes_mensual
				};
				variables_pagina.valor_pd_max_cuotas = {
					seleccionado: result[0].pd_max_cuotas
				};
				variables_pagina.valor_pd_gastos_activacion = {
					seleccionado: result[0].pd_gastos_activacion
				};
				variables_pagina.valor_pd_comentarios = result[0].pd_comentarios;
				variables_pagina.valor_pd_estado = {
					seleccionado: result[0].pd_estado
				};

				// Inicializa lo vectores para la generación de elementos HTML dinamicos.
				variables_pagina.lista_formas_pago = [];
				variables_pagina.formas_pago_seleccionadas = [];

				// Recupera las formas de pago.
				db.query('SELECT * FROM formas_pago', function (err, result) {
					if (err) throw err;

					for (n in result) variables_pagina.lista_formas_pago.push({
						id_forma_pago: result[n].fp_id,
						nombre_forma_pago: result[n].fp_nombre
					});

					// Declara el contador de peticiones a base de datos para operaciones de seleccion ciclica que determinara cuando renderizar la pagina.
					var peticion_db = 0;

					// Selecciona desde la tabla intermedia las formas de pago disponibles para el producto.
					for (z in result) {

						db.query('SELECT * FROM productos_has_formas_pago WHERE productos_pd_id = ? AND formas_pago_fp_id = ?', [id_producto, result[z].fp_id], function (err, result) {
							if (err) throw err;

							// Verifica la formas de pago aparece entre las que ha sido seleccionada para el producto.
							if (result[0] != undefined) {
								variables_pagina.formas_pago_seleccionadas.push("seleccionada")
							} else {
								variables_pagina.formas_pago_seleccionadas.push("no_seleccionada")
							}

							// Incrementa el contador de peticiones.
							peticion_db++;

							// Verifica si se ha ejecutado la ultima peticion en base de datos y en caso afirmativo renderiza la pagina de crecion pasandole el objeto que define su contenido.
							if (peticion_db == parseInt(z) + 1) res.render('visualizacion_producto', variables_pagina);
						});
					};
				});

			} else {

				res.render('error', {
					titulo: "Algo ha ido mal",
					subtitulo: "La pagina que estabas buscando no ha sido encontrada.",
					message: "URL incorrecta.",
					error: {
						stack: "Has intentado acceder a una URL que no existe."
					}
				});
			};
		});
	});
};


/* Elimina el producto. */
//------------------------

var eliminarProducto = function (req, res, next) {

	var id_producto = req.params.id_producto.slice(1);

	console.log("Eliminando producto " + id_producto);

	// Elimina desde la tabla intermedia las asociasiones entre las formas de pago disponibles y el producto.
	db.query('DELETE FROM productos_has_formas_pago WHERE productos_pd_id = ?', [id_producto], function (err, result) {
		if (err) throw err;

		// Elimina el producto.
		db.query('DELETE FROM productos WHERE pd_id = ?', [id_producto], function (err, result) {
			if (err) throw err;

			// Redirecciona a la pagina de inicio.
			res.redirect("/");
		});
	});
};


/* Exporta las funciones del controller. */
//-----------------------------------------

exports.administrarProductos = administrarProductos;
exports.crearProducto = crearProducto;
exports.guardarProducto = guardarProducto;
exports.modificarProducto = modificarProducto;
exports.guardarProductoModificado = guardarProductoModificado;
exports.visualizarProducto = visualizarProducto;
exports.eliminarProducto = eliminarProducto;