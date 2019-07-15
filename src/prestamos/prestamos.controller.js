/* Incluye el modulo para las peticiones a base de datos. */
//----------------------------------------------------------

var db = require("../../config/db_development");


/* Crea el objeto que define las variables del buscador. */
//---------------------------------------------------------

var variables_pagina_buscador = {

	// PROPIEDADES ELEMENTOS PAGINA
	// ----------------------------

	// Define el nombre de la pagina:
	nombre_pagina: "Buscar prestamos",

	// Carga los scripts especificos para la pagina:
	scripts_pagina: '<script src="/scripts/scr_buscador_prestamos.js"></script>',
    
	// Grupo de asignacion:
    valor_pr_grupo: {
        seleccionado: "0"
    },
	
    // Producto seleccionado:
    valor_pr_producto: {
        seleccionado: "0"
    },
    
    // Cantidad desde seleccionada:
    valor_pr_cantidad_desde: {
        seleccionado: "0"
    },
    
    // Cantidad hasta seleccionada:
    valor_pr_cantidad_hasta: {
        seleccionado: "0"
    },

    // Vectores para la generación de elementos HTML dinamicos:
    lista_productos: [],
	lista_grupos: [],
    lista_cantidades: []

};


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

	// Define las propiedades para la tercera ventana modal:
	titulo_ventana_modal_3: "",
	texto_ventana_modal_3: "",
	comando_btn_confirmacion_3: "",

	// Define las propiedades para la cuarta ventana modal:
	titulo_ventana_modal_4: "",
	texto_ventana_modal_4: "",
	comando_btn_confirmacion_4: "",

	// Carga los scripts especificos para la pagina:
	scripts_pagina: "",

	// Define las propiedades del formulario:
	valor_id_formulario: "",
	valor_metodo_formulario: "",
	valor_action_formulario: "",

	// Define el estado de los elementos del formulario:
	estado_control_formulario: "",
	visibilidad: "",
	visibilidad_pr_fecha_finalizacion: "",

	// DATOS PRESTAMO
	// --------------

	valor_id_solicitud: 0,
	valor_nombre_cliente: "",
	valor_pr_id: 0,

	valor_pr_nombre_producto: "",
	valor_pr_interes_mensual: "",
	valor_pr_cantidad: "",
	valor_pr_forma_pago: {
		seleccionado: "no_seleccionado"
	},
	valor_pr_gastos_activacion: "",
	valor_pr_amortizacion: {
		seleccionado: "no_seleccionado"
	},
	valor_pr_cuotas: {
		seleccionado: "no_seleccionado"
	},
	valor_pr_total_devolucion: "",
	valor_pr_fecha_activacion: "",
	valor_pr_fecha_caducidad: "",
	valor_pr_fecha_finalizacion: "",
	valor_pr_comentarios: "",

	// Vectores para la generación de elementos HTML dinamicos:
	lista_id_formas_pago: [],
	lista_nombres_formas_pago: [],
	lista_amortizaciones: [],
	lista_cuotas: []
};


/* Define las propiedades de los elementos de la pagina de creacion de un nuevo prestamo. */
//------------------------------------------------------------------------------------------

function inicializaPaginaCreacionPrestamo() {

	// PROPIEDADES ELEMENTOS PAGINA
	// ----------------------------

	// Define el nombre de la pagina:
	variables_pagina.nombre_pagina = 'Crear prestamo';

	// Define las propiedades para la primera ventana modal (Cancelacion de la operacion de creacion):
	variables_pagina.titulo_ventana_modal_1 = 'Cancelar introduccion datos';
	variables_pagina.texto_ventana_modal_1 = 'Los datos no han sido guardados.<br>Esta seguro que desea cancelar la creacion del prestamo?';
	variables_pagina.comando_btn_confirmacion_1 = '<a href="/" class="btn btn-primary">Confirmar</a>';

	// Define las propiedades para la segunda ventana modal (Guardado de nuevo prestamo):
	variables_pagina.titulo_ventana_modal_2 = 'Guardar prestamo';
	variables_pagina.texto_ventana_modal_2 = 'Esta guardando un nuevo prestamo.<br>Desea confirmar la operacion?';
	variables_pagina.comando_btn_confirmacion_2 = '<button class="btn btn-success" type="submit" form="formulario_prestamo" id="envia_formulario">Confirmar</button>';

	// Carga los scripts especificos para la pagina:
	variables_pagina.scripts_pagina = '<script src="/scripts/scr_prestamos.js"></script>';

	// Define las propiedades del formulario:
	variables_pagina.valor_id_formulario = "formulario_prestamo";
	variables_pagina.valor_metodo_formulario = "method=post";
	variables_pagina.valor_action_formulario = "action=/guardar_prestamo";

	// Define el estado de los elementos del formulario:
	variables_pagina.estado_control_formulario = "";
	variables_pagina.visibilidad = "";
};


/* Define las propiedades de los elementos de la pagina de modificacion de un prestamo. */
//----------------------------------------------------------------------------------------

function inicializaPaginaModificacionPrestamo() {

	// PROPIEDADES ELEMENTOS PAGINA
	// ----------------------------

	// Define el nombre de la pagina:
	variables_pagina.nombre_pagina = 'Modificar prestamo';

	// Define las propiedades para la primera ventana modal (Cancelacion de la operacion de modificacion):
	variables_pagina.titulo_ventana_modal_1 = 'Cancelar introduccion datos';
	variables_pagina.texto_ventana_modal_1 = 'Los datos no han sido guardados.<br>Esta seguro que desea cancelar la modificacion del los datos del prestamo?';
	variables_pagina.comando_btn_confirmacion_1 = '<a href="/" class="btn btn-primary">Confirmar</a>';

	// Define las propiedades para la segunda ventana modal (Actualizacion de los datos del prestamo):
	variables_pagina.titulo_ventana_modal_2 = 'Guardar prestamo';
	variables_pagina.texto_ventana_modal_2 = 'Esta guardando los datos actualizados del prestamo.<br>Desea confirmar la operacion?';
	variables_pagina.comando_btn_confirmacion_2 = '<button class="btn btn-success" type="submit" form="formulario_prestamo" id="envia_formulario">Confirmar</button>';

	// Carga los scripts especificos para la pagina:
	variables_pagina.scripts_pagina = '<script src="/scripts/scr_prestamos.js"></script>';

	// Define los atriutos del formulario:
	variables_pagina.valor_id_formulario = "formulario_prestamo";
	variables_pagina.valor_metodo_formulario = "method=post";
	variables_pagina.valor_action_formulario = "action=/guardar_prestamo_modificado";

	// Define el estado de los elementos del formulario:
	variables_pagina.estado_control_formulario = "";
	variables_pagina.visibilidad = "";
};


/* Define las propiedades de los elementos de la ficha del prestamo. */
//---------------------------------------------------------------------

function inicializaFichaPrestamo() {

	// PROPIEDADES ELEMENTOS PAGINA
	// ----------------------------

	// Define el nombre de la pagina:
	variables_pagina.nombre_pagina = 'Ficha prestamo';

	// Define las propiedades para la primera ventana modal (Eliminacion del prestamo):
	variables_pagina.titulo_ventana_modal_1 = 'Eliminar prestamo';
	variables_pagina.texto_ventana_modal_1 = 'Está intentando eliminar el prestamo, la operacion no es reversible.<br>Desea confirmar la operacion?';

	// Define las propiedades para la tecera ventana modal (Finalizacion de una cuota):
	variables_pagina.titulo_ventana_modal_3 = 'Finalizar cuota';
	variables_pagina.texto_ventana_modal_3 = 'Esta marcando la cuota como finalizada.<br>Asegurese de que el pago haya sido efectuado antes de finalizar la cuota.<br>Desea confirmar la operacion?';
	variables_pagina.comando_btn_confirmacion_3 = '<button class="btn btn-success cambia_estado_cuota" type="button">Confirmar</button>';

	// Define las propiedades para la cuarta ventana modal (Reactivacion de una cuota):
	variables_pagina.titulo_ventana_modal_4 = 'Reactivar cuota';
	variables_pagina.texto_ventana_modal_4 = 'Esta reactivando una cuota que habia sido marcada como finalizada.<br>Desea confirmar la operacion?';
	variables_pagina.comando_btn_confirmacion_4 = '<button class="btn btn-success cambia_estado_cuota" type="button">Confirmar</button>';

	// Carga los scripts especificos para la pagina:
	variables_pagina.scripts_pagina = '<script src="/scripts/scr_prestamos.js"></script>';

	// Define las propiedades del formulario:
	variables_pagina.valor_id_formulario = "formulario_prestamo";
	variables_pagina.valor_metodo_formulario = "method=get";
	variables_pagina.valor_action_formulario = "action=/modificar_prestamo";

	// Define el estado de los elementos del formulario:
	variables_pagina.estado_control_formulario = "disabled";
	variables_pagina.visibilidad = "ocultado";
};


/* Inicializa los elementos del buscador de prestamos y renderiza la pagina. */
//----------------------------------------------------------------------------

function inicializaBuscadorPrestamos(res) {

    // Inicializa lo vectores para la generación de elementos HTML dinamicos.
    variables_pagina_buscador.lista_productos = [];
	variables_pagina_buscador.lista_grupos = [];
    variables_pagina_buscador.lista_cantidades = [];

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
		
    	// Recupera los productos.
    	db.query('SELECT pd_id, pd_nombre FROM productos', function (err, result) {
    	    if (err) throw err;
    	    
    	    for (n in result) variables_pagina_buscador.lista_productos.push({
    	        id_producto: result[n].pd_id,
    	        nombre_producto: result[n].pd_nombre
    	    });
    	
    	    // Ordena los productos alfabeticamente.
    	    variables_pagina_buscador.lista_productos.sort(function (a, b) {
    	        if (a.nombre_producto > b.nombre_producto) {
    	            return 1;
    	        }
    	        if (a.nombre_producto < b.nombre_producto) {
    	            return -1;
    	        }
    	        // "a" tiene que ser igual a "b"
    	        return 0;
    	    });
    	    
    	    // Recupera la cantidad minima entre todos los productos.
    	    db.query('SELECT pd_importe_minimo FROM productos WHERE pd_importe_minimo=(SELECT MIN(pd_importe_minimo) FROM productos);', function (err, result) {
    	        if (err) throw err;
    	        
    	        var cantidad_minima = result[0].pd_importe_minimo;
    	        
    	        // Recupera la cantidad maxima entre todos los productos.
    	        db.query('SELECT pd_importe_maximo FROM productos WHERE pd_importe_maximo=(SELECT MAX(pd_importe_maximo) FROM productos);', function (err, result) {
    	            if (err) throw err;
    	            
    	            var cantidad_maxima = result[0].pd_importe_maximo;
    	            
    	            var opcion = cantidad_minima;
    	            var incremento = 500;
    	            
    	            // Rellena el vector de cantidades para los selectores del buscador.
    	            do {
    	                variables_pagina_buscador.lista_cantidades.push(opcion);
    	                
    	                // Define los incrementos en funcion de la cantidad.
    	                if (opcion == 10000) {incremento = 1000}
    	                else if (opcion == 25000) {incremento = 5000}
    	                else if (opcion == 100000) {incremento = 50000}
    	                else if (opcion == 500000) {incremento = 100000}
    	                
    	                opcion += incremento;
    	                
    	            } while (opcion <= cantidad_maxima);
    	            
    	            // Renderiza la pagina de crecion pasandole el objeto que define su contenido.
    	            res.render('buscador_prestamos', variables_pagina_buscador);
    	        });
    	    });
    	});
	});
};


/* Carga el buscador de los prestamos. */
//--------------------------------------

var cargarBuscadorPrestamos = function (req, res, next) {
    
	console.log("Inicializando el buscador de prestamos");

    // Inicializa el buscador y renderiza la pagina.
    inicializaBuscadorPrestamos(res);
};


/* Ejecuta la busqueda de prestamos. */
//--------------------------------------

var buscarPrestamos = function (req, res, next) {
	
	console.log("Recuperando resultados e inicializando el buscador de prestamos");
	
	console.log(req.query);
	
    // Inicializa el buscador y renderiza la pagina.
    inicializaBuscadorPrestamos(res);
};


/* Visualiza la pagina para la creacion de un nuevo prestamo. */
// -------------------------------------------------------------

var crearPrestamo = function (req, res, next) {

	console.log("Creando prestamo");

	// Asigna los datos del cliente y de la solicitud a las variables de pagina.
	variables_pagina.valor_sl_id = req.query.sl_id;
	variables_pagina.valor_pd_id = req.query.sl_producto;
	variables_pagina.valor_cl_id = req.query.cl_id;
	variables_pagina.valor_cl_id_historial = req.query.cl_id_historial;

	// Genera la fecha de activacion en el formato aceptado por el tag input (AAAA-MM-DD).
	var objeto_fecha = new Date();
	var dia_activacion = ("0" + objeto_fecha.getDate()).slice(-2);
	var mes_activacion = objeto_fecha.getMonth() + 1;
	if (mes_activacion < 10) mes_activacion = "0" + mes_activacion;
	var ano_activacion = objeto_fecha.getFullYear();
	var fecha_activacion = dia_activacion + '/' + mes_activacion + '/' + ano_activacion;

	// Inicializa la pagina.

	inicializaPaginaCreacionPrestamo();

	variables_pagina.visibilidad_pr_fecha_finalizacion = "hidden";

	// Inicializa los valores del formulario para la creacion de un nuevo prestamo.

	// DATOS PRESTAMO
	// --------------

	variables_pagina.valor_pr_id = "";
	variables_pagina.valor_pr_fecha_activacion = fecha_activacion;
	variables_pagina.valor_pr_cantidad = req.query.sl_cantidad_solicitada;
	variables_pagina.valor_pr_amortizacion = {
		seleccionado: "no_seleccionado"
	};
	variables_pagina.valor_pr_cuotas = {
		seleccionado: "no_seleccionado"
	};
	variables_pagina.valor_pr_forma_pago = {
		seleccionado: "no_seleccionado"
	};
	variables_pagina.valor_pr_fecha_caducidad = "";
	variables_pagina.valor_pr_fecha_finalizacion = "",
		variables_pagina.valor_pr_comentarios = "";

	// Inicializa lo vectores para la generación de elementos HTML dinamicos.
	variables_pagina.lista_id_formas_pago = [];
	variables_pagina.lista_nombres_formas_pago = [];
	variables_pagina.lista_amortizaciones = [];

	// Recupera el nombre y el apellido del cliente.
	db.query('SELECT cl_nombre, cl_apellido FROM clientes_datos_identificativos WHERE cl_id = ? LIMIT 1', [variables_pagina.valor_cl_id], function (err, result) {
		if (err) throw err;

		variables_pagina.valor_nombre_cliente = result[0].cl_nombre + " " + result[0].cl_apellido;

		// Recupera los datos del producto seleccionado para el prestamo.
		db.query('SELECT pd_nombre, pd_interes_mensual, pd_max_cuotas, pd_gastos_activacion FROM productos WHERE pd_id = ? LIMIT 1', [variables_pagina.valor_pd_id], function (err, result) {
			if (err) throw err;

			variables_pagina.valor_pr_nombre_producto = result[0].pd_nombre;
			variables_pagina.valor_pr_gastos_activacion = result[0].pd_gastos_activacion;
			variables_pagina.valor_pr_interes_mensual = result[0].pd_interes_mensual;
			variables_pagina.pd_max_cuotas = result[0].pd_max_cuotas;
			variables_pagina.valor_pr_total_devolucion = "";

			// Recupera los tipos de amortizacion.
			db.query('SELECT * FROM amortizaciones', function (err, result) {
				if (err) throw err;

				for (n in result) variables_pagina.lista_amortizaciones.push({
					id_amortizacion: result[n].am_id,
					nombre_amortizacion: result[n].am_nombre
				});

				// Recupera las formas de pago disponibles para el producto seleccionado.
				db.query('SELECT * FROM productos_has_formas_pago WHERE productos_pd_id = ?', [variables_pagina.valor_pd_id], function (err, result) {
					if (err) throw err;

					// Declara el contador de peticiones a base de datos para operaciones de seleccion ciclica que determinara cuando renderizar la pagina.
					var peticion_db = 0;

					// Selecciona desde la tabla intermedia las formas de pago disponibles para el producto.
					for (i in result) {

						variables_pagina.lista_id_formas_pago.push(result[i].formas_pago_fp_id);

						db.query('SELECT fp_nombre FROM formas_pago WHERE fp_id = ? LIMIT 1', [variables_pagina.lista_id_formas_pago[i]], function (err, result) {
							if (err) throw err;

							variables_pagina.lista_nombres_formas_pago.push(result[0].fp_nombre);

							// Incrementa el contador de peticiones.
							peticion_db++;

							// Verifica si se ha ejecutado la ultima peticion en base de datos y en caso afirmativo renderiza la pagina de creacion pasandole el objeto que define su contenido.
							if (peticion_db == parseInt(i) + 1) res.render('creacion_modificacion_prestamo', variables_pagina);
						});
					};
				});
			});
		});
	});
};


/* Guarda los datos del nuevo prestamo en la base de datos y visualiza su ficha. */
//---------------------------------------------------------------------------------

var guardarPrestamo = function (req, res, next) {

	console.log("Guardando nuevo prestamo");

	// ... (Valida los datos recibidos en la peticion y si la operacion ha tenido exito ejecuta el codigo que sigue).

	// Recupera los elementos desde el datepicker para generar el formato de fecha reconocido por MySQL.
	var elementos_fecha_activacion = req.body.pr_fecha_activacion.split("/");
	var elementos_fecha_caducidad = req.body.pr_fecha_caducidad.split("/");

	// Convierte las fechas en el formato reconocido por MySQL.
	var fecha_activacion = new Date(elementos_fecha_activacion[2], elementos_fecha_activacion[1] - 1, elementos_fecha_activacion[0]);
	var fecha_caducidad = new Date(elementos_fecha_caducidad[2], elementos_fecha_caducidad[1] - 1, elementos_fecha_caducidad[0]);

	// Recupera los valores de la mora actualizados a la fecha de activacion del prestamo.
	db.query('SELECT mr_cargo, mr_dias_gracia, frecuencias_mora_fr_id, mr_gastos_recobro FROM mora', function (err, result) {
		if (err) throw err

		var cargo_mora_prestamo = result[0].mr_cargo;
		var dias_gracia_mora_prestamo = result[0].mr_dias_gracia;
		var tipo_frecuencia_mora_prestamo = result[0].frecuencias_mora_fr_id;
		var gastos_recobro_mora_prestamo = result[0].mr_gastos_recobro;

		// Recupera los dias relativos al tipo de frecuencia asociada a la mora.
		db.query('SELECT fr_intervalo_dias FROM frecuencias_mora WHERE fr_id = ? LIMIT 1', [tipo_frecuencia_mora_prestamo], function (err, result) {
			if (err) throw err

			var intervalo_dias_mora_prestamo = result[0].fr_intervalo_dias;

			// Guarda los datos validados en base de datos y si la operacion ha tenido exito ejecuta el codigo que sigue.
			db.query('INSERT INTO prestamos SET ?', {

				solicitudes_sl_id: req.body.sl_id,
				pr_nombre_producto: req.body.pr_nombre_producto,
				pr_interes_mensual: req.body.pr_interes_mensual,
				pr_cantidad: req.body.pr_cantidad,
				pr_forma_pago: req.body.pr_forma_pago,
				pr_gastos_activacion: req.body.pr_gastos_activacion,
				pr_amortizacion: req.body.pr_amortizacion,
				pr_cuotas: req.body.pr_cuotas,
				pr_total_devolucion: req.body.pr_total_devolucion,
				pr_comentarios: req.body.pr_comentarios,
				pr_estado: 1, // Estado activo.
				pr_fecha_activacion: fecha_activacion,
				pr_fecha_caducidad: fecha_caducidad,
				pr_fecha_ultima_modificacion: fecha_activacion,
				pr_cargo_mora: cargo_mora_prestamo,
				pr_dias_gracia_mora: dias_gracia_mora_prestamo,
				pr_dias_frecuencia_mora: intervalo_dias_mora_prestamo,
				pr_gastos_recobro_mora: gastos_recobro_mora_prestamo

			}, function (err, result) {
				if (err) throw err;

				var id_prestamo = result.insertId;

				// CALCULAS LOS DATOS PARA LAS CUOTAS Y LOS GUARDA EN BASE DE DATOS
				//-----------------------------------------------------------------

				var fecha_activacion = elementos_fecha_activacion[0] + "/" + elementos_fecha_activacion[1] + "/" + elementos_fecha_activacion[2];
				var cuotas_prestamo = parseInt(req.body.pr_cuotas);
				var capital = parseInt(req.body.pr_cantidad);
				var total_devolucion = req.body.pr_total_devolucion;
				var forma_pago = req.body.pr_forma_pago;
				var tipo_amortizacion = req.body.pr_amortizacion;
				var interes_mensual = req.body.pr_interes_mensual;

				db.query('SELECT fp_meses, fp_dias FROM formas_pago WHERE fp_id = ? LIMIT 1', [forma_pago], function (err, result) {
					if (err) throw err

					var dias_forma_pago = result[0].fp_dias;
					var meses_forma_pago = result[0].fp_meses;
					var interes_nominal_anual_aplicado = parseInt((interes_mensual) * 12);
					var interes_amortizacion = (Number((interes_nominal_anual_aplicado / 100) / 12)) * meses_forma_pago;
					var dias_a_sumar;
					var fecha_pago;
					var cantidad_cuota;
					var capital_restante = capital;
					var cuotas_restantes = cuotas_prestamo;
					var intereses_cuota;
					var capital_cuota;

					// Variables de control.
					var intereses_capital = 0;
					var capital_devuelto = 0;

					for (z = 1; z <= cuotas_prestamo; z++) {

						// Calcula la fecha de pago de cada cuota.
						dias_a_sumar = z * dias_forma_pago;
						fecha_pago = sumarDiasFecha(dias_a_sumar, fecha_activacion, forma_pago);

						// Calcula la catidad de la cuota en base al tipo de amortizacion francesa (cuota fija).
						cantidad_cuota = calcularCantidadCuotaAmortizacionFrancesa(capital_restante, interes_amortizacion, cuotas_restantes, meses_forma_pago);

						// Calcula la parte de la cuota que corresponde a intereses. 
						intereses_cuota = capital_restante * interes_amortizacion;

						// Calcula la parte de la cuota que corresponde al capital amortizado.
						capital_cuota = cantidad_cuota - intereses_cuota;

						// Actualiza el capital que queda para deber.
						capital_restante = capital_restante - capital_cuota;
						if (capital_restante < 0) capital_restante = 0;

						// Actualiza el numero de cuotas restantes.
						cuotas_restantes -= 1;

						intereses_capital += intereses_cuota;
						capital_devuelto += capital_cuota;

						total_devolucion = parseFloat(capital_devuelto) + parseFloat(intereses_capital);

						db.query('INSERT INTO cuotas SET ?', {
							prestamos_pr_id: id_prestamo,
							estados_cuota_ec_id: 1,
							ct_cantidad: cantidad_cuota,
							ct_amortizado: capital_cuota,
							ct_intereses: intereses_cuota,
							ct_fecha_pago: fecha_pago,
							ct_saldo_prestamo: capital_restante,
							ct_cantidad_mora: 0

						}, function (err, result) {
							if (err) throw err;

						});
					};
				});

				// Redirecciona a la pagina de visualizacion pasando el id del grupo a la funcion.
				res.redirect("/visualizar_prestamo/:" + id_prestamo + "/:" + req.body.pd_id + "/:" + req.body.sl_id + "/:" + req.body.cl_id + "/:" + req.body.cl_id_historial);

			});
		});
	});
};


/* Visualiza la pagina con el formulario para la modificacion de los datos del prestamo. */
//-----------------------------------------------------------------------------------------

var modificarPrestamo = function (req, res, next) {

	console.log("Modificando prestamo");

	// Recupera los datos del prestamo para su succesiva modificacion.

	// Asigna los datos del cliente y de la solicitud a las variables de pagina.
	variables_pagina.valor_sl_id = req.query.sl_id;
	variables_pagina.valor_pd_id = req.query.pd_id;
	variables_pagina.valor_cl_id = req.query.cl_id;
	variables_pagina.valor_cl_id_historial = req.query.cl_id_historial;

	// Inicializa la pagina que se mostrará tras haber recuperado los datos y asigna los valores recuperados a los campos del formulario.

	// PROPIEDADES ELEMENTOS PAGINA
	// ----------------------------

	inicializaPaginaModificacionPrestamo();

	// DATOS PRESTAMO
	// --------------

	variables_pagina.valor_id_solicitud = req.query.sl_id;
	variables_pagina.valor_pr_id = req.query.pr_id;
	variables_pagina.valor_pr_fecha_activacion = req.query.pr_fecha_activacion;
	variables_pagina.valor_pr_nombre_producto = req.query.pr_nombre_producto;
	variables_pagina.valor_pr_cantidad = req.query.pr_cantidad;
	variables_pagina.valor_pr_gastos_activacion = req.query.pr_gastos_activacion;
	variables_pagina.valor_pr_interes_mensual = req.query.pr_interes_mensual;
	variables_pagina.valor_pr_amortizacion = {
		seleccionado: req.query.pr_amortizacion
	};
	variables_pagina.valor_pr_cuotas = {
		seleccionado: req.query.pr_cuotas
	};
	variables_pagina.valor_pr_forma_pago = {
		seleccionado: req.query.pr_forma_pago
	};
	variables_pagina.valor_pr_total_devolucion = req.query.pr_total_devolucion;
	variables_pagina.valor_pr_fecha_caducidad = req.query.pr_fecha_caducidad;
	variables_pagina.valor_pr_comentarios = req.query.pr_comentarios;

	// Inicializa lo vectores para la generación de elementos HTML dinamicos.
	variables_pagina.lista_id_formas_pago = [];
	variables_pagina.lista_nombres_formas_pago = [];
	variables_pagina.lista_amortizaciones = [];

	// Recupera el nombre y el apellido del cliente.
	db.query('SELECT cl_nombre, cl_apellido FROM clientes_datos_identificativos WHERE cl_id = ? LIMIT 1', [variables_pagina.valor_cl_id], function (err, result) {
		if (err) throw err;

		variables_pagina.valor_nombre_cliente = result[0].cl_nombre + " " + result[0].cl_apellido;

		// Recupera los tipos de amortizacion.
		db.query('SELECT * FROM amortizaciones', function (err, result) {
			if (err) throw err

			for (n in result) variables_pagina.lista_amortizaciones.push({
				id_amortizacion: result[n].am_id,
				nombre_amortizacion: result[n].am_nombre
			});

			// Recupera el numero maximo de cuotas para el producto seleccionado.
			db.query('SELECT pd_max_cuotas FROM productos WHERE pd_id = ? LIMIT 1', [req.query.pd_id], function (err, result) {
				if (err) throw err

				variables_pagina.pd_max_cuotas = result[0].pd_max_cuotas;

				// Recupera las formas de pago disponibles para el producto seleccionado.
				db.query('SELECT * FROM productos_has_formas_pago WHERE productos_pd_id = ?', [req.query.pd_id], function (err, result) {
					if (err) throw err;

					// Declara el contador de peticiones a base de datos para operaciones de seleccion ciclica que determinara cuando renderizar la pagina.
					var peticion_db = 0;

					// Selecciona desde la tabla intermedia las formas de pago disponibles para el producto.
					for (z in result) {

						variables_pagina.lista_id_formas_pago.push(result[z].formas_pago_fp_id);

						db.query('SELECT fp_nombre FROM formas_pago WHERE fp_id = ? LIMIT 1', [variables_pagina.lista_id_formas_pago[z]], function (err, result) {
							if (err) throw err;

							variables_pagina.lista_nombres_formas_pago.push(result[0].fp_nombre);

							// Incrementa el contador de peticiones.
							peticion_db++;

							// Verifica si se ha ejecutado la ultima peticion en base de datos y en caso afirmativo renderiza la pagina de creacion pasandole el objeto que define su contenido.
							if (peticion_db == parseInt(z) + 1) res.render('creacion_modificacion_prestamo', variables_pagina);
						});
					};
				});
			});
		});
	});
};


/* Guarda los datos modificados de un prestamo en la base de datos y visualiza su ficha. */
//----------------------------------------------------------------------------------------

var guardarPrestamoModificado = function (req, res, next) {

	console.log("Guardando prestamo modificado");

	var id_prestamo = req.body.pr_id;

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
	//var fecha_finalizacion = ano_modificacion+'-'+mes_modificacion+'-'+dia_modificacion;

	// Guarda los datos validados en base de datos y si la operacion ha tenido exito redirecciona a la funcion que carga la ficha del grupo.
	db.query('UPDATE prestamos SET ? WHERE pr_id = ?', [{

		solicitudes_sl_id: req.body.sl_id,
		pr_nombre_producto: req.body.pr_nombre_producto,
		pr_interes_mensual: req.body.pr_interes_mensual,
		pr_cantidad: req.body.pr_cantidad,
		pr_forma_pago: req.body.pr_forma_pago,
		pr_gastos_activacion: req.body.pr_gastos_activacion,
		pr_amortizacion: req.body.pr_amortizacion,
		pr_cuotas: req.body.pr_cuotas,
		pr_total_devolucion: req.body.pr_total_devolucion,
		pr_comentarios: req.body.pr_comentarios + "\n\nPrestamo renegociado el dia: " + dia_modificacion + "-" + mes_modificacion + "-" + ano_modificacion,
		pr_estado: 1, // Estado activo.
		pr_fecha_activacion: req.body.pr_fecha_activacion,
		pr_fecha_caducidad: req.body.pr_fecha_caducidad,
		pr_fecha_ultima_modificacion: fecha_modificacion,

	}, id_prestamo], function (err, result) {
		if (err) throw err;

		// Redirecciona a la pagina de visualizacion pasando el id del grupo a la funcion.
		res.redirect("/visualizar_prestamo/:" + id_prestamo + "/:" + req.body.pd_id + "/:" + req.body.sl_id + "/:" + req.body.cl_id + "/:" + req.body.cl_id_historial);
	});
};


/* Visualiza la ficha del prestamo. */
//------------------------------------

var visualizarPrestamo = function (req, res, next) {

	console.log("Visualizando prestamo");

	// Recupera los parametros enviados con la llamada a la funcion.
	var id_prestamo = req.params.id_prestamo.slice(1);
	var id_producto = req.params.id_producto.slice(1);
	var id_solicitud = req.params.id_solicitud.slice(1);
	var id_cliente_datos_identificativos = req.params.id_cliente_datos_identificativos.slice(1);
	var id_cliente_historial = req.params.id_cliente_historial.slice(1);

	// Los asigna a las variables de pagina.
	variables_pagina.valor_pr_id = id_prestamo
	variables_pagina.valor_pd_id = id_producto;
	variables_pagina.valor_sl_id = id_solicitud;
	variables_pagina.valor_cl_id = id_cliente_datos_identificativos;
	variables_pagina.valor_cl_id_historial = id_cliente_historial;

	// Recupera el nombre y el apellido del cliente.
	db.query('SELECT cl_nombre, cl_apellido FROM clientes_datos_identificativos WHERE cl_id = ? LIMIT 1', [id_cliente_datos_identificativos], function (err, result) {
		if (err) throw err;

		variables_pagina.valor_nombre_cliente = result[0].cl_nombre + " " + result[0].cl_apellido;

		// Recupera los datos del prestamo desde base de datos.
		db.query('SELECT * FROM prestamos WHERE pr_id = ? AND solicitudes_sl_id = ? LIMIT 1', [id_prestamo, id_solicitud], function (err, result) {
			if (err) throw err

			// Si existe el resultados lo mostra sino redirecciona a la pagina de error.
			if (result[0] != undefined) {

				// Inicizliza la ficha del prestamo en la que se mostraran los datos que se acaban de recuperar.

				// PROPIEDADES ELEMENTOS PAGINA
				// ----------------------------

				inicializaFichaPrestamo();

				// Define la propiedad para el boton de eliminacion pasandole los parametros.
				variables_pagina.comando_btn_confirmacion_1 = '<a href="/eliminar_prestamo/:' + id_prestamo + '" class="btn btn-danger">Confirmar</a>';

				// Asigna los valores recuperados a los campos del formulario.

				// DATOS PRESTAMO
				// --------------

				// Recupera los elementos desde el datepicker para generar el formato de fecha reconocido por MySQL.
				var elementos_fecha_activacion = result[0].pr_fecha_activacion.split("-");
				var elementos_fecha_caducidad = result[0].pr_fecha_caducidad.split("-");

				// Convierte las fechas en el formato reconocido por MySQL.
				var fecha_activacion = elementos_fecha_activacion[2] + "/" + elementos_fecha_activacion[1] + "/" + elementos_fecha_activacion[0];
				var fecha_caducidad = elementos_fecha_caducidad[2] + "/" + elementos_fecha_caducidad[1] + "/" + elementos_fecha_caducidad[0];

				variables_pagina.valor_id_solicitud = result[0].solicitudes_sl_id;
				variables_pagina.valor_pr_id = result[0].pr_id;
				variables_pagina.valor_pr_fecha_activacion = fecha_activacion;
				variables_pagina.valor_pr_nombre_producto = result[0].pr_nombre_producto;
				variables_pagina.valor_pr_cantidad = result[0].pr_cantidad;
				variables_pagina.valor_pr_gastos_activacion = result[0].pr_gastos_activacion;
				variables_pagina.valor_pr_interes_mensual = result[0].pr_interes_mensual;
				variables_pagina.valor_pr_amortizacion = {
					seleccionado: result[0].pr_amortizacion
				};
				variables_pagina.valor_pr_cuotas = {
					seleccionado: result[0].pr_cuotas
				};
				variables_pagina.valor_pr_forma_pago = {
					seleccionado: result[0].pr_forma_pago
				};
				variables_pagina.valor_pr_total_devolucion = result[0].pr_total_devolucion;
				variables_pagina.valor_pr_fecha_caducidad = fecha_caducidad;
				variables_pagina.valor_pr_comentarios = result[0].pr_comentarios;

				// Inicializa lo vectores para la generación de elementos HTML dinamicos.
				variables_pagina.lista_id_formas_pago = [];
				variables_pagina.lista_nombres_formas_pago = [];
				variables_pagina.lista_amortizaciones = [];
				variables_pagina.lista_cuotas = [];

				db.query('SELECT pr_estado, pr_fecha_finalizacion, pr_cargo_mora, pr_dias_gracia_mora, pr_dias_frecuencia_mora, pr_gastos_recobro_mora FROM prestamos WHERE pr_id = ?', [id_prestamo], function (err, result) {
					if (err) throw err

					if (result[0].pr_estado == 1 || result[0].pr_estado == 2) {
						variables_pagina.valor_pr_fecha_finalizacion = null;
						variables_pagina.visibilidad_pr_fecha_finalizacion = "hidden";
						if (result[0].pr_estado == 1) {
							variables_pagina.valor_info_prestamo = "<br><div class=\"alert alert-info\"><strong>Informacion: </strong>El prestamo esta activado.</div>";
						} else {
							variables_pagina.valor_info_prestamo = "<br><div class=\"alert alert-danger\"><strong>Informacion: </strong>El prestamo esta en mora.</div>";
						}
					} else if (result[0].pr_estado == 3 || result[0].pr_estado == 4) {
						var elementos_fecha_finalizacion = result[0].pr_fecha_finalizacion.split("-");
						variables_pagina.valor_pr_fecha_finalizacion = elementos_fecha_finalizacion[2] + "/" + elementos_fecha_finalizacion[1] + "/" + elementos_fecha_finalizacion[0];;
						variables_pagina.visibilidad_pr_fecha_finalizacion = "";
						if (result[0].pr_estado == 3) {
							var elementos_fecha_finalizacion = result[0].pr_fecha_finalizacion.split("-");
							var formato_fecha_finalizacion_DD_MM_AAAA = elementos_fecha_finalizacion[2] + "-" + elementos_fecha_finalizacion[1] + "-" + elementos_fecha_finalizacion[0];
							variables_pagina.valor_info_prestamo = "<br><div class=\"alert alert-success\"><span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\">&nbsp;</span><strong>Informacion: </strong>El prestamo ha sido finalizado el dia: <strong>" + formato_fecha_finalizacion_DD_MM_AAAA + "</strong></div>";
						} else {
							var elementos_fecha_finalizacion = result[0].pr_fecha_finalizacion.split("-");
							var formato_fecha_finalizacion_DD_MM_AAAA = elementos_fecha_finalizacion[2] + "-" + elementos_fecha_finalizacion[1] + "-" + elementos_fecha_finalizacion[0];
							variables_pagina.valor_info_prestamo = "<br><div class=\"alert alert-danger\"><span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\">&nbsp;</span><strong>Informacion: </strong>El prestamo ha sido finalizado con mora el dia: <strong>" + formato_fecha_finalizacion_DD_MM_AAAA + "</strong></div>";
						}
					}

					variables_pagina.valor_info_penalizacion_incumplimiento_pago = "<br><strong>Penalización por incumplimineto de pago de las cuotas.</strong><br>Al producirse el incumplimiento se sumarán a la cantidad de la cuota gastos de recobro por un valor de " + result[0].pr_gastos_recobro_mora + " RD$, mas un interes moratorio del " + result[0].pr_cargo_mora + "% cada " + result[0].pr_dias_frecuencia_mora + " dia(s) a partir de " + result[0].pr_dias_gracia_mora + " dia(s) despues de la fecha de vencimiento.<br><br><br>";

					// Recupera los tipos de amortizacion.
					db.query('SELECT * FROM amortizaciones', function (err, result) {
						if (err) throw err

						for (n in result) variables_pagina.lista_amortizaciones.push({
							id_amortizacion: result[n].am_id,
							nombre_amortizacion: result[n].am_nombre
						});

						// Recupera el numero maximo de cuotas para el producto seleccionado.
						db.query('SELECT pd_max_cuotas FROM productos WHERE pd_id = ? LIMIT 1', [id_producto], function (err, result) {
							if (err) throw err

							variables_pagina.pd_max_cuotas = result[0].pd_max_cuotas;

							// Recupera las formas de pago disponibles para el producto seleccionado.
							db.query('SELECT * FROM productos_has_formas_pago WHERE productos_pd_id = ?', [id_producto], function (err, result) {
								if (err) throw err;

								// Declara el contador de peticiones a base de datos para operaciones de seleccion ciclica que determinara cuando renderizar la pagina.
								var peticion_db = 0;

								// Selecciona desde la tabla intermedia las formas de pago disponibles para el producto.
								for (z in result) {

									variables_pagina.lista_id_formas_pago.push(result[z].formas_pago_fp_id);


									db.query('SELECT fp_nombre FROM formas_pago WHERE fp_id = ? LIMIT 1', [variables_pagina.lista_id_formas_pago[z]], function (err, result) {
										if (err) throw err;

										variables_pagina.lista_nombres_formas_pago.push(result[0].fp_nombre);

										// Incrementa el contador de peticiones.
										peticion_db++;

										// Verifica si se ha ejecutado la ultima peticion en base de datos y en caso afirmativo recupera las cuotas del prestamo y renderiza la pagina de creacion pasandole el objeto que define su contenido.
										if (peticion_db == parseInt(z) + 1) {

											// Inicializa el contador de peticiones.
											peticion_db = 0;

											var datos_cuota = [];

											// Recupera los datos de cada cuota.
											db.query('SELECT estados_cuota_ec_id, ct_id, ct_cantidad, ct_amortizado, ct_intereses, ct_saldo_prestamo, ct_fecha_pago, ct_cantidad_mora FROM cuotas WHERE prestamos_pr_id = ?', [id_prestamo], function (err, result) {
												if (err) throw err

												for (i in result) {

													var elementos_fecha = result[i].ct_fecha_pago.split("-");
													var formato_fecha_DD_MM_AAAA = elementos_fecha[2] + "-" + elementos_fecha[1] + "-" + elementos_fecha[0];
													var color_estado;

													if (result[i].estados_cuota_ec_id == 2 || result[i].estados_cuota_ec_id == 4) {
														color_estado = 3;
													} else if (result[i].estados_cuota_ec_id == 3) {
														color_estado = 0;
													} else {
														color_estado = 999;
													}

													datos_cuota.push({
														ct_id: result[i].ct_id,
														ct_numero: parseInt(i) + 1,
														ct_cantidad: (result[i].ct_cantidad).toFixed(2),
														ct_amortizado: (result[i].ct_amortizado).toFixed(2),
														ct_intereses: (result[i].ct_intereses).toFixed(2),
														ct_saldo_prestamo: (result[i].ct_saldo_prestamo).toFixed(2),
														ct_fecha_pago: formato_fecha_DD_MM_AAAA,
														ct_cantidad_mora: (result[i].ct_cantidad_mora).toFixed(2),
														ct_total_pago: (result[i].ct_cantidad + result[i].ct_cantidad_mora).toFixed(2),
														ct_color_estado: color_estado,
														id_celda_estado: "estado_cuota_" + result[i].estados_cuota_ec_id
													});

													// Recupera el nombre del estado en el que se encuentra la cuota.
													db.query('SELECT ec_nombre FROM estados_cuota WHERE ec_id = ?', [result[i].estados_cuota_ec_id], function (err, result) {
														if (err) throw err

														datos_cuota[peticion_db].ct_estado = result[0].ec_nombre;

														// Incrementa el contador de peticiones.
														peticion_db++;

														if (peticion_db == parseInt(i) + 1) {

															variables_pagina.lista_cuotas = datos_cuota;

															//console.log(variables_pagina);

															res.render('visualizacion_prestamo', variables_pagina);
														};
													});
												};
											});
										};
									});
								};
							});
						});
					});
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


/* Elimina el prestamo. */
//------------------------

var eliminarPrestamo = function (req, res, next) {

	var id_prestamo = req.params.id_prestamo.slice(1);

	console.log("Eliminando prestamo " + id_prestamo);

	var fecha_actual = new Date();
	var fecha_eliminacion = fecha_actual.getDate() + "-" + (fecha_actual.getMonth() + 1) + "-" + fecha_actual.getFullYear();

	// Elimina las cuotas.
	db.query('DELETE FROM cuotas WHERE prestamos_pr_id = ?', [id_prestamo], function (err, result) {
		if (err) throw err;

		// Recupera el id de la solicitud del prestamo.
		db.query('SELECT solicitudes_sl_id FROM prestamos WHERE pr_id = ? LIMIT 1', [id_prestamo], function (err, result) {
			if (err) throw err;

			var id_solicitud = result[0].solicitudes_sl_id;

			// Elimina el prestamo.
			db.query('DELETE FROM prestamos WHERE pr_id = ? LIMIT 1', [id_prestamo], function (err, result) {
				if (err) throw err;

				// Recupera el contenido del campo comentarios de la solicitud para añadir la fecha de eliminacion del prestamo.
				db.query('SELECT sl_comentarios FROM solicitudes WHERE sl_id = ?', [id_solicitud], function (err, result) {
					if (err) throw err;

					var comentarios_solicitud = result[0].sl_comentarios;

					// Actualiza la solicitud.
					db.query('UPDATE solicitudes SET ? WHERE sl_id =? LIMIT 1', [{
						sl_prestamo_finalizado: 0,
						sl_estado: 1,
						sl_comentarios: comentarios_solicitud + "\n\nEl prestamo ha sido eliminado el dia: " + fecha_eliminacion
					}, id_solicitud], function (err, result) {
						if (err) throw err

						// Recupera los datos del cliente para redireccionar a la ficha de la solicitud del prestamo.
						db.query('SELECT clientes_cl_id, clientes_historial_cl_id_historial FROM solicitudes WHERE sl_id = ? LIMIT 1', [id_solicitud], function (err, result) {
							if (err) throw err

							// Redirecciona a la ficha de la solicitud.
							res.redirect("/visualizar_solicitud/:" + id_solicitud + "/:" + result[0].clientes_cl_id + "/:" + result[0].clientes_historial_cl_id_historial);
						});
					});
				});
			});
		})
	});
};


/* Recupera el numero de dias que corresponden a una forma de pago en concreto. */
//--------------------------------------------------------------------------------

var recuperarDatosFormaPago = function (req, res, next) {

	var forma_pago = req.query.forma_pago;

	db.query('SELECT fp_meses, fp_dias FROM formas_pago WHERE fp_id = ? LIMIT 1', [forma_pago], function (err, result) {
		if (err) throw err

		var meses_forma_pago = result[0].fp_meses;
		var dias_forma_pago = result[0].fp_dias;
		res.send(JSON.stringify({
			meses_forma_pago: meses_forma_pago,
			dias_forma_pago: dias_forma_pago
		}));
	});
};


/* Suma dias a una fecha para calcular la fecha de pago de las cuotas. */
//-----------------------------------------------------------------------

var sumarDiasFecha = function (dias_a_sumar, fecha_activacion, forma_pago) {

	console.log("Dias a sumar: " + dias_a_sumar + ", a partir del " + fecha_activacion + ", con pago " + forma_pago);

	//var fecha_activacion_prestamo = fecha_activacion.replace(/-/g, "/"); // Sustituye el guion con la barra.
	var elementos_fecha_activacion_prestamo = fecha_activacion.split("/");
	var fecha_activacion_prestamo = elementos_fecha_activacion_prestamo[2] + "-" + elementos_fecha_activacion_prestamo[1] + "-" + elementos_fecha_activacion_prestamo[0];
	var fecha_pago = new Date(fecha_activacion_prestamo);
	fecha_pago.setDate(fecha_pago.getDate() + parseInt(dias_a_sumar));

	console.log("Fecha pago calculada: " + fecha_pago)

	var ano_pago = fecha_pago.getFullYear();
	var mes_pago = fecha_pago.getMonth() + 1;
	var dia_pago = fecha_pago.getDate();

	if (forma_pago != 1) {
		if (dia_pago != parseInt(elementos_fecha_activacion_prestamo[0])) {
			//console.log("Dia activacion: " + elementos_fecha_activacion_prestamo[2]);
			//console.log("Dia pago calculado: " + dia_pago);

			if (mes_pago == 2 && elementos_fecha_activacion_prestamo[0] > 28 || ((mes_pago == 4 || mes_pago == 6 || mes_pago == 9 || mes_pago == 11) && elementos_fecha_activacion_prestamo[0] > 30)) {
				dia_pago = 1;
				mes_pago = fecha_pago.getMonth() + 2;
				//console.log("Mes pago actualizado: " + mes_pago);
			} else {
				do {
					fecha_pago.setDate(fecha_pago.getDate() + parseInt(1));
					dia_pago = fecha_pago.getDate();
					mes_pago = fecha_pago.getMonth() + 1;

					//console.log("Incremento un dia: " + fecha_pago);

				} while (dia_pago != elementos_fecha_activacion_prestamo[0]);
			}

			//console.log("Dia pago actualizado: " + dia_pago);

		};
	};

	mes_pago = (mes_pago < 10) ? ("0" + mes_pago) : mes_pago;
	dia_pago = (dia_pago < 10) ? ("0" + dia_pago) : dia_pago;
	var fecha_pago_establecida = ano_pago + "-" + mes_pago + "-" + dia_pago;

	//console.log("Fecha pago adaptada: " + fecha_pago_establecida);
	//console.log("----------------------------------");

	return fecha_pago_establecida;
};


/* Calcula la cantidad de cada cuota con el tipo de amortizacion fija. */
//-----------------------------------------------------------------------

var calcularCantidadCuotaAmortizacionFrancesa = function (capital, interes, numero_cuotas, meses_forma_pago) {

	var margen_aproximacion = 0;
	var cantidad_cuota = (capital + margen_aproximacion) * (interes * Math.pow(1 + parseFloat(interes), numero_cuotas)) / (Math.pow(1 + parseFloat(interes), numero_cuotas) - 1);

	return cantidad_cuota;
};


/* Actualiza el estado de una cuota. */
//-------------------------------------

var actualizarEstadoCuota = function (req, res, next) {

	var id_cuota = req.query.id_cuota;

	var fecha_actual = new Date();
	var fecha_cambio_estado = fecha_actual.getFullYear() + "-" + (fecha_actual.getMonth() + 1) + "-" + fecha_actual.getDate();

	// Recupera los datos de la cuota que hay que actualizar.
	db.query('SELECT prestamos_pr_id, estados_cuota_ec_id, ct_cantidad_mora FROM cuotas WHERE ct_id = ? LIMIT 1', [id_cuota], function (err, result) {
		if (err) throw err

		var id_prestamo = result[0].prestamos_pr_id;
		var mora_cuota = result[0].ct_cantidad_mora;
		var estado_cuota = result[0].estados_cuota_ec_id;

		if (estado_cuota == 1 || estado_cuota == 2) {

			console.log("Finalizando cuota");

			// Actualiza el estado de la cuota.
			db.query('UPDATE cuotas SET ? WHERE ct_id = ?', [{

				estados_cuota_ec_id: estado_cuota + 2

			}, id_cuota], function (err, result) {
				if (err) throw err

				console.log("Estado cuota actualizado");

				// Verifica si hay cuota activas o en mora para el prestamo.
				db.query('SELECT ct_id FROM cuotas WHERE prestamos_pr_id = ? AND (estados_cuota_ec_id = ? OR estados_cuota_ec_id = ?) LIMIT 1', [id_prestamo, 1, 2], function (err, result) {
					if (err) throw err

					if (result[0] == undefined) {

						db.query('SELECT pr_estado FROM prestamos WHERE pr_id = ? LIMIT 1', [id_prestamo], function (err, result) {
							if (err) throw err

							var estado_prestamo = result[0].pr_estado;

							db.query('UPDATE prestamos SET ? WHERE pr_id = ?', [{

								pr_estado: estado_prestamo + 2,
								pr_fecha_finalizacion: fecha_cambio_estado

							}, id_prestamo], function (err, result) {
								if (err) throw err

								console.log("Prestamo finalizado el dia: " + fecha_cambio_estado);

								db.query('SELECT solicitudes_sl_id FROM prestamos WHERE pr_id = ? LIMIT 1', [id_prestamo], function (err, result) {
									if (err) throw err

									db.query('UPDATE solicitudes SET ? WHERE sl_id = ?', [{

										sl_prestamo_finalizado: 1,

									}, result[0].solicitudes_sl_id], function (err, result) {
										if (err) throw err

										console.log("Solicitud actualizada");

										res.send(JSON.stringify({
											mora_cuota: mora_cuota,
											estado_cuota: estado_cuota
										}));
									});
								});
							});
						});
					} else {

						console.log("Prestamo todavia activo");

						res.send(JSON.stringify({
							mora_cuota: mora_cuota,
							estado_cuota: estado_cuota
						}));

					};
				});
			});
		} else if (estado_cuota == 3 || estado_cuota == 4) {

			console.log("Activando cuota");

			// Actualiza el estado de la cuota.
			db.query('UPDATE cuotas SET ? WHERE ct_id = ?', [{

				estados_cuota_ec_id: estado_cuota - 2

			}, id_cuota], function (err, result) {
				if (err) throw err

				console.log("Estado cuota actualizado");

				db.query('SELECT pr_estado, solicitudes_sl_id FROM prestamos WHERE pr_id = ? LIMIT 1', [id_prestamo], function (err, result) {
					if (err) throw err

					var estado_prestamo = result[0].pr_estado;
					var id_solicitud = result[0].solicitudes_sl_id;

					if (estado_prestamo == 3 || estado_prestamo == 4) {

						db.query('UPDATE prestamos SET ? WHERE pr_id = ?', [{

							pr_estado: estado_prestamo - 2,

						}, id_prestamo], function (err, result) {
							if (err) throw err

							console.log("Prestamo activado: " + fecha_cambio_estado);

							db.query('UPDATE solicitudes SET ? WHERE sl_id = ?', [{

								sl_prestamo_finalizado: 0,

							}, id_solicitud], function (err, result) {
								if (err) throw err

								console.log("Solicitud actualizada");

								res.send(JSON.stringify({
									mora_cuota: mora_cuota,
									estado_cuota: estado_cuota
								}));
							});
						});
					} else {

						console.log("Prestamo gia activo");

						res.send(JSON.stringify({
							mora_cuota: mora_cuota,
							estado_cuota: estado_cuota
						}));
					};
				});
			});
		};
	});
};


/* Programa los temporizadores y activa el calculo de la mora para las cuotas de los prestamos. */
//------------------------------------------------------------------------------------------------

var inicializarCalculoMora = setTimeout(inicializarTemporizadoresCalculoMora, 1); // Lanza el calculo al arrancar el servidor.
var lanzarTemporizadorCalculoMora;
var calcularMora;


function inicializarTemporizadoresCalculoMora(req, res, next) {

	var tiempo_actual = new Date();
	var hora_actual = tiempo_actual.getHours();
	var minutos_actuales = tiempo_actual.getMinutes();
	var segundos_actuales = tiempo_actual.getSeconds();
	var total_milisegundos_actuales = ((hora_actual * 3600 * 1000) + (minutos_actuales * 60 * 1000) + (segundos_actuales * 1000));
	var tiempo_restante = 86400000 - total_milisegundos_actuales; // 86400000 es el equivalente de 24 horas.

	// Crea el temporizador que lanza el calculo de la mora a la hora prestablecida cada dia.
	lanzarTemporizadorCalculoMora = setTimeout(temporizadorCalculoMora, tiempo_restante);

	// Elimina el timeout que inicializa el calculo de la mora.
	clearTimeout(inicializarCalculoMora);

	// Lanza el calculo al arrancar.
	calcularMora();

};


function temporizadorCalculoMora() {

	// Lanza el temporizador que calcula la mora a las horas 24:00 de cada dia.
	calcularMora = setInterval(calcularMora, 86400000);

	// Elimina el timeout que lanza el temporizador para el calculo de la mora ciclica.
	clearTimeout(lanzarTemporizadorCalculoMora);

};


function calcularMora() {

	console.log("Calculando mora");

	var fecha = new Date();
	var dia = fecha.getDate();
	if (dia < 10) dia = "0" + dia;
	var mes = fecha.getMonth();
	var ano = fecha.getFullYear();

	var fecha_actual = new Date(ano, mes, dia);

	// Recupera los prestamos que todavia no han sido finalizados.
	db.query('SELECT pr_id, pr_cargo_mora, pr_dias_gracia_mora, pr_dias_frecuencia_mora, pr_gastos_recobro_mora FROM prestamos WHERE (pr_estado = ? || pr_estado = ?)', [1, 2], function (err, result) {
		if (err) throw err

		if (result[0] != undefined) {

			for (i in result) {

				var id_prestamo = result[i].pr_id;
				var cargo_mora = result[i].pr_cargo_mora;
				var dias_gracia_mora = result[i].pr_dias_gracia_mora;
				var dias_frecuencia_mora = result[i].pr_dias_frecuencia_mora;
				var gastos_recobro_mora = result[i].pr_gastos_recobro_mora;

				// Recupera los datos de las cuotas de cada prestamo que todavia no han sido finalizadas.
				db.query('SELECT ct_id, ct_cantidad, ct_fecha_pago, estados_cuota_ec_id, ct_cantidad_mora FROM cuotas WHERE prestamos_pr_id = ? AND (estados_cuota_ec_id = ? || estados_cuota_ec_id = ?)', [id_prestamo, 1, 2], function (err, result) {
					if (err) throw err

					for (i in result) {

						var id_cuota = result[i].ct_id;
						var cantidad_cuota = result[i].ct_cantidad;
						var fecha_pago_recuperada = result[i].ct_fecha_pago;
						var elementos_fecha_pago_recuperada = fecha_pago_recuperada.split("-");
						var fecha_pago_cuota = new Date(elementos_fecha_pago_recuperada[0], elementos_fecha_pago_recuperada[1] - 1, elementos_fecha_pago_recuperada[2]);
						var fecha_activacion_mora = new Date(fecha_pago_cuota);
						fecha_activacion_mora.setDate(fecha_pago_cuota.getDate() + parseInt(dias_gracia_mora));
						var estado_cuota = result[i].estados_cuota_ec_id;
						var monto_mora = 0;

						//console.log("Fecha actual: " + fecha_actual);
						//console.log("Fecha activacion mora: " + fecha_activacion_mora);

						// Verifica si la cuota está en mora.
						if (fecha_actual > fecha_activacion_mora) {

							console.log("La cuota " + result[i].ct_id + " està en mora");

							// Calcula los dias transcurridos a partir de la fecha de activacion de la mora (en milisegundos).
							var dias_transcurridos_desde_activacion_mora = (fecha_actual - fecha_activacion_mora) / 86400000;
							//console.log(dias_transcurridos_desde_activacion_mora);

							// Verifica si la cuota ya estaba en mora, si no lo estaba aplica los gastos de recobro.	
							if (estado_cuota == 1) {
								estado_cuota = 2;

								db.query('UPDATE prestamos SET ? WHERE pr_id = ?', [{

									pr_estado: 2,

								}, id_prestamo], function (err, result) {
									if (err) throw err

									console.log("Estado prestamo actualizado");

								});
							};

							// Calcula la mora diaria.
							monto_mora = gastos_recobro_mora + (cantidad_cuota * (parseInt(dias_transcurridos_desde_activacion_mora / dias_frecuencia_mora) / 365) * (cargo_mora / 100));

							db.query('UPDATE cuotas SET ? WHERE ct_id = ?', [{

								estados_cuota_ec_id: estado_cuota,
								ct_cantidad_mora: monto_mora

							}, id_cuota], function (err, result) {
								if (err) throw err

								console.log("Estado cuota y monto mora actualizados");

							});

						} else {

							console.log("La cuota " + result[i].ct_id + " no està en mora");

						};
					};
				});
			};

		} else {

			console.log("No hay prestamos activos o en mora");

		};
	});
};


/* Exporta las funciones del controller. */
//-----------------------------------------

exports.cargarBuscadorPrestamos = cargarBuscadorPrestamos;
exports.buscarPrestamos = buscarPrestamos;
exports.crearPrestamo = crearPrestamo;
exports.guardarPrestamo = guardarPrestamo;
exports.modificarPrestamo = modificarPrestamo;
exports.guardarPrestamoModificado = guardarPrestamoModificado;
exports.visualizarPrestamo = visualizarPrestamo;
exports.eliminarPrestamo = eliminarPrestamo;
exports.recuperarDatosFormaPago = recuperarDatosFormaPago;
exports.actualizarEstadoCuota = actualizarEstadoCuota;