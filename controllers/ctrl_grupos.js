/* Incluye el modulo para las peticiones a base de datos. */
//----------------------------------------------------------

var db = require("../config/db_development");


/* Crea el objeto que define las variables del buscador. */
//---------------------------------------------------------

var variables_pagina_buscador = {

	// PROPIEDADES ELEMENTOS PAGINA
	// ----------------------------

	// Define el nombre de la pagina:
	nombre_pagina: "Buscar grupos",

	// Carga los scripts especificos para la pagina:
	scripts_pagina: '<script src="/scripts/scr_buscador_grupos.js"></script>',
    
    // Grupo de asignacion:
    valor_gr_grupo: {
        seleccionado: "0"
    },

    // Vectores para la generación de elementos HTML dinamicos:
    lista_grupos: [],

};


/* Crea el objeto que define las variables de la pagina. */
//---------------------------------------------------------

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

	// DATOS GRUPO
	// -----------

	valor_gr_id: "",

	valor_gr_nombre: "",
	valor_gr_comision: {
		seleccionado: "no_seleccionado"
	},
	valor_gr_nombre_referente: "",
	valor_gr_apellido_referente: "",
	valor_gr_telefono: "",
	valor_gr_fax: {
		seleccionado: "no_seleccionado"
	},
	valor_gr_correo_electronico: {
		seleccionado: "no_seleccionado"
	},
	valor_gr_comentarios: "",
	valor_gr_estado: {
		seleccionado: "1"
	},

	// Indicador de eliminacion permitida:
	valor_eliminacion_permitida: 1
};


/* Define las propiedades de los elementos de la pagina de creacion de un nuevo grupo. */
//---------------------------------------------------------------------------------------

function inicializaPaginaCreacionGrupo() {

	// PROPIEDADES ELEMENTOS PAGINA
	// ----------------------------

	// Define el nombre de la pagina:
	variables_pagina.nombre_pagina = 'Crear grupo';

	// Define las propiedades para la primera ventana modal (Cancelacion de la operacion de creacion):
	variables_pagina.titulo_ventana_modal_1 = 'Cancelar introduccion datos';
	variables_pagina.texto_ventana_modal_1 = 'Los datos no han sido guardados.<br>Esta seguro que desea cancelar la creacion del grupo?';
	variables_pagina.comando_btn_confirmacion_1 = '<a href="/" class="btn btn-primary">Confirmar</a>';

	// Define las propiedades para la segunda ventana modal (Guardado de nuevo grupo):
	variables_pagina.titulo_ventana_modal_2 = 'Guardar grupo';
	variables_pagina.texto_ventana_modal_2 = 'Esta guardando un nuevo grupo.<br>Desea confirmar la operacion?';
	variables_pagina.comando_btn_confirmacion_2 = '<button class="btn btn-success" type="submit" form="formulario_grupo" id="envia_formulario">Confirmar</button>';

	// Carga los scripts especificos para la pagina:
	variables_pagina.scripts_pagina = '<script src="/scripts/scr_grupos.js"></script>';

	// Define las propiedades del formulario:
	variables_pagina.valor_id_formulario = "formulario_grupo";
	variables_pagina.valor_metodo_formulario = "method=post";
	variables_pagina.valor_action_formulario = "action=/guardar_grupo";

	// Define el estado de los elementos del formulario:
	variables_pagina.estado_control_formulario = "";
	variables_pagina.visibilidad = "";
};


/* Define las propiedades de los elementos de la pagina de modificacion de un grupo. */
//-------------------------------------------------------------------------------------

function inicializaPaginaModificacionGrupo() {

	// PROPIEDADES ELEMENTOS PAGINA
	// ----------------------------

	// Define el nombre de la pagina:
	variables_pagina.nombre_pagina = 'Modificar grupo';

	// Define las propiedades para la primera ventana modal (Cancelacion de la operacion de modificacion):
	variables_pagina.titulo_ventana_modal_1 = 'Cancelar introduccion datos';
	variables_pagina.texto_ventana_modal_1 = 'Los datos no han sido guardados.<br>Esta seguro que desea cancelar la modificacion del los datos del grupo?';
	variables_pagina.comando_btn_confirmacion_1 = '<a href="/" class="btn btn-primary">Confirmar</a>';

	// Define las propiedades para la segunda ventana modal (Actualizacion de los datos del grupo):
	variables_pagina.titulo_ventana_modal_2 = 'Guardar grupo';
	variables_pagina.texto_ventana_modal_2 = 'Esta guardando los datos actualizados del grupo.<br>Desea confirmar la operacion?';
	variables_pagina.comando_btn_confirmacion_2 = '<button class="btn btn-success" type="submit" form="formulario_grupo" id="envia_formulario">Confirmar</button>';

	// Carga los scripts especificos para la pagina:
	variables_pagina.scripts_pagina = '<script src="/scripts/scr_grupos.js"></script>';

	// Define los atriutos del formulario:
	variables_pagina.valor_id_formulario = "formulario_grupo";
	variables_pagina.valor_metodo_formulario = "method=post";
	variables_pagina.valor_action_formulario = "action=/guardar_grupo_modificado";

	// Define el estado de los elementos del formulario:
	variables_pagina.estado_control_formulario = "";
	variables_pagina.visibilidad = "";
};


/* Define las propiedades de los elementos de la ficha del grupo. */
//------------------------------------------------------------------

function inicializaFichaGrupo() {

	// PROPIEDADES ELEMENTOS PAGINA
	// ----------------------------

	// Define el nombre de la pagina:
	variables_pagina.nombre_pagina = 'Ficha grupo';

	// Define las propiedades para la primera ventana modal (Eliminacion del grupo):
	variables_pagina.titulo_ventana_modal_1 = 'Eliminar grupo';
	variables_pagina.texto_ventana_modal_1 = 'Está intentando eliminar el grupo, la operacion no es reversible.<br>Desea confirmar la operacion?';

	// Carga los scripts especificos para la pagina:
	variables_pagina.scripts_pagina = '<script src="/scripts/scr_grupos.js"></script>';

	// Define las propiedades del formulario:
	variables_pagina.valor_id_formulario = "formulario_grupo";
	variables_pagina.valor_metodo_formulario = "method=get";
	variables_pagina.valor_action_formulario = "action=/modificar_grupo";

	// Define el estado de los elementos del formulario:
	variables_pagina.estado_control_formulario = "disabled";
	variables_pagina.visibilidad = "ocultado";
};


/* Inicializa los elementos del buscador de grupos y renderiza la pagina. */
//----------------------------------------------------------------------------

function inicializaBuscadorGrupos(res) {

    // Inicializa lo vectores para la generación de elementos HTML dinamicos.
    variables_pagina_buscador.lista_grupos = [];

    // Recupera los grupos.
    db.query('SELECT gr_id, gr_nombre FROM grupos', function (err, result) {
        if (err) throw err;

        for (m in result) variables_pagina_buscador.lista_grupos.push({
            id_grupo: result[m].gr_id,
            nombre_grupo: result[m].gr_nombre
        });

        // Ordena los grupos alfabeticamente.
        variables_pagina_buscador.lista_grupos.sort(function (a, b) {
            if (a.nombre_grupo > b.nombre_grupo) {
                return 1;
            }
            if (a.nombre_grupo < b.nombre_grupo) {
                return -1;
            }
            // "a" tiene que ser igual a "b"
            return 0;
        });
  
        // Renderiza la pagina de crecion pasandole el objeto que define su contenido.
        res.render('buscador_grupos', variables_pagina_buscador);
    });
};


/* Carga el buscador de los grupos. */
//--------------------------------------

var cargarBuscadorGrupos = function (req, res, next) {
	
    console.log("Inicializando el buscador de grupos");

    // Inicializa el buscador y renderiza la pagina.
    inicializaBuscadorGrupos(res);
};


/* Ejecuta la busqueda de grupos. */
//--------------------------------------

var buscarGrupos = function (req, res, next) {
	
	console.log("Recuperando resultados e inicializando el buscador de grupos");
	
	console.log(req.query);
	
    // Inicializa el buscador y renderiza la pagina.
    inicializaBuscadorGrupos(res);
};


/* Visualiza la pagina para la creacion de un nuevo grupo. */
// ----------------------------------------------------------

var crearGrupo = function (req, res, next) {

	console.log("Creando grupo");

	// Inicializa la pagina.

	inicializaPaginaCreacionGrupo();

	// Inicializa los valores del formulario para la creacion de un nuevo grupo.

	// DATOS GRUPO
	// -----------

	variables_pagina.valor_gr_nombre = "";
	variables_pagina.valor_gr_comision = {
		seleccionado: "no_seleccionado"
	};
	variables_pagina.valor_gr_nombre_referente = "";
	variables_pagina.valor_gr_apellido_referente = "";
	variables_pagina.valor_gr_telefono = "";
	variables_pagina.valor_gr_fax = "";
	variables_pagina.valor_gr_correo_electronico = "";
	variables_pagina.valor_gr_comentarios = "";
	variables_pagina.valor_gr_estado = {
		seleccionado: "1"
	};

	// Renderiza la pagina de crecion pasandole el objeto que define su contenido.
	res.render('creacion_modificacion_grupo', variables_pagina);
};


/* Guarda los datos del nuevo grupo en la base de datos y visualiza su ficha. */
//------------------------------------------------------------------------------

var guardarGrupo = function (req, res, next) {

	console.log("Guardando nuevo grupo");

	// ... (Valida los datos recibidos en la peticion y si la operacion ha tenido exito ejecuta el codigo que sigue).

	// Genera la fecha de creacion
	var objeto_fecha = new Date();
	var dia_creacion = objeto_fecha.getDate();
	var mes_creacion = objeto_fecha.getMonth() + 1;
	var ano_creacion = objeto_fecha.getFullYear();
	var hora_creacion = objeto_fecha.getHours();
	var minuto_creacion = objeto_fecha.getMinutes();
	var segundo_creacion = objeto_fecha.getSeconds();
	var fecha_creacion = ano_creacion + '-' + mes_creacion + '-' + dia_creacion + ' ' + hora_creacion + ':' + minuto_creacion + ':' + segundo_creacion;

	// Guarda los datos validados en base de datos y si la operacion ha tenido exito redirecciona a la funcion que carga la ficha del grupo.
	db.query('INSERT INTO grupos SET ?', {

		// Datos grupo:
		gr_nombre: req.body.gr_nombre,
		gr_comision: req.body.gr_comision,
		gr_nombre_referente: req.body.gr_nombre_referente,
		gr_apellido_referente: req.body.gr_apellido_referente,
		gr_telefono: req.body.gr_telefono,
		gr_fax: req.body.gr_fax,
		gr_correo_electronico: req.body.gr_correo_electronico,
		gr_comentarios: req.body.gr_comentarios,
		gr_estado: req.body.gr_estado,
		gr_fecha_creacion: fecha_creacion,
		gr_fecha_ultima_modificacion: fecha_creacion,

	}, function (err, result) {
		if (err) throw err;

		// Recupera el id del grupo que acaba de guardar y redirecciona a la pagina de visualizacion.
		var id_grupo = result.insertId;
		res.redirect("/visualizar_grupo/:" + id_grupo);
	});
};


/* Visualiza la pagina con el formulario para la modificacion de los datos del grupo. */
//--------------------------------------------------------------------------------------

var modificarGrupo = function (req, res, next) {

	console.log("Modificando grupo");

	// Recupera los datos del grupo desde la ficha del grupo para su modificacion.
	// Inicializa la pagina que se mostrará tras haber recuperado los datos y asigna los valores recuperados a los campos del formulario.

	// PROPIEDADES ELEMENTOS PAGINA
	// ----------------------------

	inicializaPaginaModificacionGrupo();

	// DATOS GRUPO
	// -----------

	variables_pagina.valor_gr_id = req.query.gr_id;

	variables_pagina.valor_gr_nombre = req.query.gr_nombre;
	variables_pagina.valor_gr_comision = {
		seleccionado: req.query.gr_comision
	};
	variables_pagina.valor_gr_nombre_referente = req.query.gr_nombre_referente;
	variables_pagina.valor_gr_apellido_referente = req.query.gr_apellido_referente;
	variables_pagina.valor_gr_telefono = req.query.gr_telefono;
	variables_pagina.valor_gr_fax = req.query.gr_fax;
	variables_pagina.valor_gr_correo_electronico = req.query.gr_correo_electronico;
	variables_pagina.valor_gr_comentarios = req.query.gr_comentarios;
	variables_pagina.valor_gr_estado = {
		seleccionado: req.query.gr_estado
	};

	// Renderiza la pagina de crecion pasandole el objeto que define su contenido.
	res.render('creacion_modificacion_grupo', variables_pagina);
};


/* Guarda los datos modificados de un grupo en la base de datos y visualiza su ficha. */
//--------------------------------------------------------------------------------------

var guardarGrupoModificado = function (req, res, next) {

	console.log("Guardando grupo modificado");

	var id_grupo = req.body.gr_id;

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
	db.query('UPDATE grupos SET ? WHERE gr_id = ?', [{

		// Datos grupo:
		gr_nombre: req.body.gr_nombre,
		gr_comision: req.body.gr_comision,
		gr_nombre_referente: req.body.gr_nombre_referente,
		gr_apellido_referente: req.body.gr_apellido_referente,
		gr_telefono: req.body.gr_telefono,
		gr_fax: req.body.gr_fax,
		gr_correo_electronico: req.body.gr_correo_electronico,
		gr_comentarios: req.body.gr_comentarios,
		gr_estado: req.body.gr_estado,
		gr_fecha_ultima_modificacion: fecha_modificacion

	}, id_grupo], function (err, result) {
		if (err) throw err;

		// Redirecciona a la pagina de visualizacion pasando el id del grupo a la funcion.
		res.redirect("/visualizar_grupo/:" + id_grupo);
	});
};


/* Visualiza la ficha del grupo. */
//---------------------------------

var visualizarGrupo = function (req, res, next) {

	console.log("Visualizando grupo");

	// Recupera el parametro enviado con la llamada a la funcion.
	var id_grupo = req.params.id_grupo.slice(1);

	// Lo asigna a la variable de pagina.
	variables_pagina.valor_gr_id = id_grupo;

	// Verifica si hay algun cliente asignado al grupo.
	db.query('SELECT cl_id_historial FROM clientes_historial WHERE grupos_gr_id = ? LIMIT 1', [id_grupo], function (err, result) {
		if (err) throw err;

		if (result[0] == undefined) {
			variables_pagina.valor_eliminacion_permitida = 1;
			variables_pagina.valor_info_grupo = ""
		} else {
			variables_pagina.valor_eliminacion_permitida = 0;
			variables_pagina.valor_info_grupo = "El boton de eliminacion esta desabilitado porque hay clientes que pertenecen al grupo."
		}

		// Recupera los datos del grupo desde base de datos.
		db.query('SELECT * FROM grupos WHERE gr_id = ? LIMIT 1', [id_grupo], function (err, result) {
			if (err) throw err;

			// Si existe el resultados lo mostra sino redirecciona a la pagina de error.
			if (result[0] != undefined) {

				// Inicizliza la ficha del grupo en la que se mostraran los datos que se acaban de recuperar.

				// PROPIEDADES ELEMENTOS PAGINA
				// ----------------------------

				inicializaFichaGrupo();

				// Define la propiedad para el boton de eliminacion pasandole los parametros.
				variables_pagina.comando_btn_confirmacion_1 = '<a href="/eliminar_grupo/:' + id_grupo + '" class="btn btn-danger">Confirmar</a>';

				// Asigna los valores recuperados a los campos del formulario.

				// DATOS GRUPO
				// -----------

				variables_pagina.valor_gr_nombre = result[0].gr_nombre;
				variables_pagina.valor_gr_comision = {
					seleccionado: result[0].gr_comision
				};
				variables_pagina.valor_gr_nombre_referente = result[0].gr_nombre_referente;
				variables_pagina.valor_gr_apellido_referente = result[0].gr_apellido_referente;
				variables_pagina.valor_gr_telefono = result[0].gr_telefono;
				variables_pagina.valor_gr_fax = result[0].gr_fax;
				variables_pagina.valor_gr_correo_electronico = result[0].gr_correo_electronico;
				variables_pagina.valor_gr_comentarios = result[0].gr_comentarios;
				variables_pagina.valor_gr_estado = {
					seleccionado: result[0].gr_estado
				};

				// Renderiza la pagina de visualizacion pasandole el objeto que define su contenido.
				res.render('visualizacion_grupo', variables_pagina);

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


/* Elimina el grupo. */
//-----------------------

var eliminarGrupo = function (req, res, next) {

	var id_grupo = req.params.id_grupo.slice(1);

	console.log("Eliminando grupo " + id_grupo);

	// Elimina el grupo.
	db.query('DELETE FROM grupos WHERE gr_id = ?', [id_grupo], function (err, result) {
		if (err) throw err;

		// Redirecciona a la pagina de inicio.
		res.redirect("/");
	});
};


/* Exporta las funciones del controller. */
//-----------------------------------------

exports.cargarBuscadorGrupos = cargarBuscadorGrupos;
exports.buscarGrupos = buscarGrupos;
exports.crearGrupo = crearGrupo;
exports.guardarGrupo = guardarGrupo;
exports.modificarGrupo = modificarGrupo;
exports.guardarGrupoModificado = guardarGrupoModificado;
exports.visualizarGrupo = visualizarGrupo;
exports.eliminarGrupo = eliminarGrupo;