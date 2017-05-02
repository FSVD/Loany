/* Incluye el modulo para las peticiones a base de datos. */
//----------------------------------------------------------

var db = require("../config/db_development");


/* Crea el objeto que define las variables del buscador. */
//---------------------------------------------------------

var variables_pagina_buscador = {

    // PROPIEDADES ELEMENTOS PAGINA
    // ----------------------------

    // Define el nombre de la pagina:
    nombre_pagina: "Buscar clientes",

    // Carga los scripts especificos para la pagina:
    scripts_pagina: '<script src="/scripts/scr_buscador_clientes.js"></script>',

    // Grupo de asignacion:
    valor_cl_grupo: {
        seleccionado: "0"
    },

    // Vectores para la generación de elementos HTML dinamicos:
    lista_grupos: [],

};

/* Crea el objeto que define las variables de la pagina. */
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
    estado_control_formulario_modificacion: "",
    visibilidad: "",

    // Define el limite maximo de la fecha de nacimiento:
    limite_max_fecha_nacimiento: "",

    // DATOS CLIENTE
    // -------------

    valor_cl_id: "",
    valor_cl_id_historial: "",

    // Datos identificativos:
    valor_cl_nombre: "",
    valor_cl_apellido: "",
    valor_cl_fecha_nacimiento: "",
    valor_cl_tipo_documento: {
        seleccionado: "no_seleccionado"
    },
    valor_cl_numero_documento: "",

    // Datos personales:
    valor_cl_celular: "",
    valor_cl_otro_numero: "",
    valor_cl_correo_electronico: "",
    valor_cl_estado_civil: {
        seleccionado: "0"
    },
    valor_cl_hijos: {
        seleccionado: "no_seleccionado"
    },
    valor_cl_nombre_conyuge: "",
    valor_cl_apellido_conyuge: "",

    // Residencia:
    valor_cl_direccion_residencia: "",
    valor_cl_codigo_postal: "",
    valor_cl_ciudad: "",
    valor_cl_pais: "",
    valor_cl_tiempo_residiendo: {
        seleccionado: "0"
    },
    valor_cl_propiedad: {
        seleccionado: "0"
    },
    valor_cl_pago_mensual: "",
    valor_cl_telefono_residencia: "",
    valor_cl_nombre_propietario: "",
    valor_cl_apellido_propietario: "",

    // Informacion academica y laboral:
    valor_cl_nivel_academico: {
        seleccionado: "0"
    },
    valor_cl_titulo: "",
    valor_cl_centro_estudio: "",
    valor_cl_empresa: "",
    valor_cl_telefono_empresa: "",
    valor_cl_cargo: "",
    valor_cl_antiguedad: {
        seleccionado: "0"
    },
    valor_cl_cobro: {
        seleccionado: "0"
    },

    valor_cl_ingreso_mensual: "",
    valor_cl_conyuge_nivel_academico: {
        seleccionado: "0"
    },
    valor_cl_conyuge_titulo: "",
    valor_cl_conyuge_centro_estudio: "",
    valor_cl_conyuge_empresa: "",
    valor_cl_conyuge_telefono_empresa: "",
    valor_cl_conyuge_cargo: "",
    valor_cl_conyuge_antiguedad: {
        seleccionado: "0"
    },
    valor_cl_conyuge_ingreso_mensual: "",
    valor_cl_conyuge_cobro: {
        seleccionado: "0"
    },

    // Otras fuentes de ingresos e informacion financiera:
    valor_cl_otra_fuente_ingresos: {
        seleccionado: "0"
    },
    valor_cl_otra_ocupacion: "",
    valor_cl_otra_empresa: "",
    valor_cl_telefono_otra_empresa: "",
    valor_cl_otro_ingreso_mensual: "",
    valor_cl_nombre_banco_1: "",
    valor_cl_numero_cuenta_1: "",
    valor_cl_nombre_banco_2: "",
    valor_cl_numero_cuenta_2: "",
    valor_cl_nombre_banco_tarjeta_1: "",
    valor_cl_limite_credito_tarjeta_1: "",
    valor_cl_nombre_banco_tarjeta_2: "",
    valor_cl_limite_credito_tarjeta_2: "",

    // Datos del vehiculo:
    valor_cl_marca_vehiculo: "",
    valor_cl_modelo_vehiculo: "",
    valor_cl_ano_vehiculo: "",
    valor_cl_placa_vehiculo: "",
    valor_cl_valor_vehiculo: "",

    // Referencias:
    valor_cl_nombre_completo_relacion_1: "",
    valor_cl_tipo_relacion_1: {
        seleccionado: "0"
    },
    valor_cl_telefono_relacion_1: "",
    valor_cl_nombre_completo_relacion_2: "",
    valor_cl_tipo_relacion_2: {
        seleccionado: "0"
    },
    valor_cl_telefono_relacion_2: "",

    // Grupo de asignacion:
    valor_cl_grupo: {
        seleccionado: "0"
    },

    // Informacion adiccional:
    valor_cl_comentarios: "",

    // Indicador de existencia de alguna solicitud:
    valor_cl_existencia_solicitudes: 0,

    // Indicador de existencia de una solocitud activa (pendiente o aprobada):
    valor_cl_existencia_prestamo_activo: 0,

    // Indicador de existencia de un historial de datos actualizado:
    valor_cl_existencia_historial_actualizado: 0,

    // Indicador del total de solicitudes existentes para el cliente:
    valor_total_solicitudes: 0,

    // Vectores para la generación de elementos HTML dinamicos:
    lista_grupos: [],
    lista_cobros: [],
};


/* Define las propiedades de los elementos de la pagina de creacion de un nuevo cliente. */
//-----------------------------------------------------------------------------------------

function inicializaPaginaCreacionCliente() {

    // PROPIEDADES ELEMENTOS PAGINA
    // ----------------------------

    // Define el nombre de la pagina:
    variables_pagina.nombre_pagina = 'Crear cliente';

    // Define las propiedades para la primera ventana modal (Cancelacion de la operacion de creacion):
    variables_pagina.titulo_ventana_modal_1 = 'Cancelar introduccion datos';
    variables_pagina.texto_ventana_modal_1 = 'Los datos no han sido guardados.<br>Esta seguro que desea cancelar la creacion del nuevo cliente?';
    variables_pagina.comando_btn_confirmacion_1 = '<a href="/" class="btn btn-primary">Confirmar</a>';

    // Define las propiedades para la segunda ventana modal (Guardado de nuevo cliente):
    variables_pagina.titulo_ventana_modal_2 = 'Guardar cliente';
    variables_pagina.texto_ventana_modal_2 = 'Esta guardando un nuevo cliente.<br>Desea confirmar la operacion?';
    variables_pagina.comando_btn_confirmacion_2 = '<button class="btn btn-success" type="submit" form="formulario_cliente" id="envia_formulario">Confirmar</button>';

    // Carga los scripts especificos para la pagina:
    variables_pagina.scripts_pagina = '<script src="/scripts/scr_clientes.js"></script>';

    // Define las propiedades del formulario:
    variables_pagina.valor_id_formulario = "formulario_cliente";
    variables_pagina.valor_metodo_formulario = "method=post";
    variables_pagina.valor_action_formulario = "action=/guardar_cliente";

    // Define el estado de los elementos del formulario:
    variables_pagina.estado_control_formulario = "";
    variables_pagina.estado_control_formulario_modificacion = "";
    variables_pagina.visibilidad = "";

    // Define el limite maximo de la fecha de nacimiento:
    var limite_max_fecha_nacimiento = new Date();
    var dia = limite_max_fecha_nacimiento.getDate();
    if (dia < 10) dia = "0" + dia;
    var mes = limite_max_fecha_nacimiento.getMonth() + 1;
    var ano = limite_max_fecha_nacimiento.getFullYear() - 18;
    variables_pagina.limite_max_fecha_nacimiento = ano + "-" + mes + "-" + dia;
};


/* Define las propiedades de los elementos de la pagina de modificacion de un cliente. */
//---------------------------------------------------------------------------------------

function inicializaPaginaModificacionCliente() {

    // PROPIEDADES ELEMENTOS PAGINA
    // ----------------------------

    // Define el nombre de la pagina:
    variables_pagina.nombre_pagina = 'Modificar cliente';

    // Define las propiedades para la primera ventana modal (Cancelacion de la operacion de modificacion):
    variables_pagina.titulo_ventana_modal_1 = 'Cancelar introduccion datos';
    variables_pagina.texto_ventana_modal_1 = 'Los datos no han sido guardados.<br>Esta seguro que desea cancelar la modificacion del los datos del cliente?';
    variables_pagina.comando_btn_confirmacion_1 = '<a href="/" class="btn btn-primary">Confirmar</a>';

    // Define las propiedades para la segunda ventana modal (Actualizacion de los datos del cliente):
    variables_pagina.titulo_ventana_modal_2 = 'Guardar cliente';
    variables_pagina.texto_ventana_modal_2 = 'Esta guardando los datos actualizados del cliente.<br>Desea confirmar la operacion?';
    variables_pagina.comando_btn_confirmacion_2 = '<button class="btn btn-success" type="submit" form="formulario_cliente" id="envia_formulario">Confirmar</button>';

    // Carga los scripts especificos para la pagina:
    variables_pagina.scripts_pagina = '<script src="/scripts/scr_clientes.js"></script>';

    // Define los atriutos del formulario:
    variables_pagina.valor_id_formulario = "formulario_cliente";
    variables_pagina.valor_metodo_formulario = "method=post";
    variables_pagina.valor_action_formulario = "action=/guardar_cliente_modificado";

    // Define el estado de los elementos del formulario:
    variables_pagina.estado_control_formulario = "";
    variables_pagina.estado_control_formulario_modificacion = "disabled";
    variables_pagina.visibilidad = "";
};


/* Define las propiedades de los elementos de la ficha cliente. */
//----------------------------------------------------------------

function inicializaFichaCliente() {

    // PROPIEDADES ELEMENTOS PAGINA
    // ----------------------------

    // Define el nombre de la pagina:
    variables_pagina.nombre_pagina = 'Ficha cliente';

    // Define las propiedades para la primera ventana modal (Eliminacion del cliente):
    variables_pagina.titulo_ventana_modal_1 = 'Eliminar cliente';
    variables_pagina.texto_ventana_modal_1 = 'Está intentando eliminar el cliente, la operacion no es reversible,<br>si ha sido creada alguna solicitud o ha sido activado un prestamo y se confirma la eliminacion del cliente se eliminaran todos los datos asociados a el.<br>Desea confirmar la operacion?';

    // Carga los scripts especificos para la pagina:
    variables_pagina.scripts_pagina = '<script src="/scripts/scr_clientes.js"></script>';

    // Define las propiedades del formulario:
    variables_pagina.valor_id_formulario = "formulario_cliente";
    variables_pagina.valor_metodo_formulario = "method=get";
    variables_pagina.valor_action_formulario = "action=/modificar_cliente";

    // Define el estado de los elementos del formulario:
    variables_pagina.estado_control_formulario = "disabled";
    variables_pagina.estado_control_formulario_modificacion = "";
    variables_pagina.visibilidad = "ocultado";
};


/* Inicializa los elementos del buscador de clientes y renderiza la pagina. */
//----------------------------------------------------------------------------

function inicializaBuscadorClientes(res) {

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
        res.render('buscador_clientes', variables_pagina_buscador);
    });
};


/* convierte una fecha en el formato MySQL. */
//--------------------------------------------

var convertirFecha = function(fecha) {
	
    var elementos_fecha = fecha.split("/")
    
	// Convierte la fecha en el formato reconocido por MySQL (AAAA-MM-DD).
    var fechaMysql = elementos_fecha[2]+"-"+elementos_fecha[1]+"-"+elementos_fecha[0];
	
	return fechaMysql;
}

/* Carga el buscador de los clientes. */
//--------------------------------------

var cargarBuscadorClientes = function (req, res, next) {

    console.log("Inicializando el buscador de clientes");

    // Inicializa el buscador y renderiza la pagina.
    inicializaBuscadorClientes(res);
};


/* Ejecuta la busqueda de clientes. */
//--------------------------------------

var buscarClientes = function (req, res, next) {
	
	console.log("Recuperando resultados e inicializando el buscador de clientes");
	
	// EJEMPLO BUSQUEDA EN MAS TABLAS
	var datosBusqueda = req.query;
    var condicionSelectWhere = "SELECT 	cl_id, cl_nombre, cl_apellido, cl_fecha_nacimiento, cl_tipo_documento, cl_numero_documento,	cl_id_historial, grupos_gr_id, cl_celular, cl_correo_electronico, sl_id, pr_id FROM clientes_datos_identificativos LEFT JOIN clientes_historial ON cl_id = clientes_datos_identificativos_cl_id LEFT JOIN solicitudes ON cl_id = clientes_cl_id LEFT JOIN prestamos ON sl_id = solicitudes_sl_id WHERE (clientes_cl_id = cl_id AND clientes_historial_cl_id_historial = cl_id_historial)";
    var valoresCondicion = [];
	
	console.log(datosBusqueda);
	
	if (datosBusqueda.cl_nombre != '') {
		condicionSelectWhere += " AND cl_nombre = ?";
		valoresCondicion.unshift(datosBusqueda.cl_nombre);
	}
	
	if (datosBusqueda.cl_apellido != '') {
		condicionSelectWhere += " AND cl_apellido = ?";
		valoresCondicion.push(datosBusqueda.cl_apellido);
	}
	
	if (datosBusqueda.cl_fecha_nacimiento != '') {
		condicionSelectWhere += " AND cl_fecha_nacimiento = ?";
		valoresCondicion.push(convertirFecha(datosBusqueda.cl_fecha_nacimiento));
	}
	
	if (datosBusqueda.cl_cedula != '') {
		condicionSelectWhere += " AND cl_numero_documento = ?";
		valoresCondicion.push(datosBusqueda.cl_cedula);
	}
	
	if (datosBusqueda.cl_celular != '') {
		condicionSelectWhere += " AND cl_celular = ?";
		valoresCondicion.push(datosBusqueda.cl_celular);
	}
	
	if (datosBusqueda.cl_correo_electronico != '') {
		condicionSelectWhere += " AND cl_correo_electronico = ?";
		valoresCondicion.push(datosBusqueda.cl_correo_electronico);
	}
	
	if (datosBusqueda.cl_grupo != 0) {
		condicionSelectWhere += " AND grupos_gr_id = ?";
		valoresCondicion.push(datosBusqueda.cl_grupo);
	}
	
	if (datosBusqueda.cl_fecha_creacion_desde != '') {
		condicionSelectWhere += " AND (cl_fecha_creacion >= ? AND cl_fecha_creacion <= ?)";
		valoresCondicion.push(convertirFecha(datosBusqueda.cl_fecha_creacion_desde));
		valoresCondicion.push(convertirFecha(datosBusqueda.cl_fecha_creacion_hasta));	
	}
    
    if (datosBusqueda.cl_solvencia != 0) {
        condicionSelectWhere += " AND (pr_estado = ? OR pr_estado = ?)";
        if (datosBusqueda.cl_solvencia == 1) {
		    valoresCondicion.push(1);
		    valoresCondicion.push(3);
        } else if (datosBusqueda.cl_solvencia == 2) {
		    valoresCondicion.push(2);
		    valoresCondicion.push(4);
        }
	}
    
    if (datosBusqueda.cl_estado_solicitud != 0) {
		condicionSelectWhere += " AND sl_estado = ?";
		valoresCondicion.push(datosBusqueda.cl_estado_solicitud);
	}
    
	console.log(condicionSelectWhere);
	console.log(valoresCondicion);
	
    db.query(condicionSelectWhere, valoresCondicion, function (err, result) {
        if (err) throw err
        
        console.log(result);
        console.log(result.length);
		
		// Inicializa el buscador y renderiza la pagina.
    	inicializaBuscadorClientes(res);
    });
};


/* Visualiza la pagina para la creacion de un nuevo cliente. */
//-------------------------------------------------------------

var crearCliente = function (req, res, next) {

    console.log("Creando cliente");

    // Inicializa la pagina.

    // PROPIEDADES ELEMENTOS PAGINA
    // ----------------------------

    inicializaPaginaCreacionCliente();

    // Inicializa los valores del formulario para la creacion de un nuevo cliente.

    // DATOS CLIENTE
    // -------------

    variables_pagina.valor_cl_id = "";
    variables_pagina.valor_cl_id_historial = "";

    // Datos identificativos:
    variables_pagina.valor_cl_nombre = "";
    variables_pagina.valor_cl_apellido = "";
    variables_pagina.valor_cl_fecha_nacimiento = "";
    variables_pagina.valor_cl_tipo_documento = {
        seleccionado: "no_seleccionado"
    };
    variables_pagina.valor_cl_numero_documento = "";

    // Datos personales:
    variables_pagina.valor_cl_celular = "";
    variables_pagina.valor_cl_otro_numero = "";
    variables_pagina.valor_cl_correo_electronico = "";
    variables_pagina.valor_cl_estado_civil = {
        seleccionado: "0"
    };
    variables_pagina.valor_cl_hijos = {
        seleccionado: "no_seleccionado"
    };
    variables_pagina.valor_cl_nombre_conyuge = "";
    variables_pagina.valor_cl_apellido_conyuge = "";

    // Residencia:
    variables_pagina.valor_cl_direccion_residencia = "";
    variables_pagina.valor_cl_codigo_postal = "";
    variables_pagina.valor_cl_ciudad = "";
    variables_pagina.valor_cl_pais = "";
    variables_pagina.valor_cl_tiempo_residiendo = {
        seleccionado: "0"
    };
    variables_pagina.valor_cl_propiedad = {
        seleccionado: "0"
    };
    variables_pagina.valor_cl_pago_mensual = "";
    variables_pagina.valor_cl_telefono_residencia = "";
    variables_pagina.valor_cl_nombre_propietario = "";
    variables_pagina.valor_cl_apellido_propietario = "";

    // Informacion academica y laboral:
    variables_pagina.valor_cl_nivel_academico = {
        seleccionado: "0"
    };
    variables_pagina.valor_cl_titulo = "";
    variables_pagina.valor_cl_centro_estudio = "";
    variables_pagina.valor_cl_empresa = "";
    variables_pagina.valor_cl_telefono_empresa = "";
    variables_pagina.valor_cl_cargo = "";
    variables_pagina.valor_cl_antiguedad = {
        seleccionado: "0"
    };
    variables_pagina.valor_cl_ingreso_mensual = "";
    variables_pagina.valor_cl_cobro = {
        seleccionado: "0"
    };
    variables_pagina.valor_cl_conyuge_nivel_academico = {
        seleccionado: "0"
    };
    variables_pagina.valor_cl_conyuge_titulo = "";
    variables_pagina.valor_cl_conyuge_centro_estudio = "";
    variables_pagina.valor_cl_conyuge_empresa = "";
    variables_pagina.valor_cl_conyuge_telefono_empresa = "";
    variables_pagina.valor_cl_conyuge_cargo = "";
    variables_pagina.valor_cl_conyuge_antiguedad = {
        seleccionado: "0"
    };
    variables_pagina.valor_cl_conyuge_ingreso_mensual = "";
    variables_pagina.valor_cl_conyuge_cobro = "";

    // Otras fuentes de ingresos e informacion financiera:
    variables_pagina.valor_cl_otra_fuente_ingresos = {
        seleccionado: "0"
    };
    variables_pagina.valor_cl_otra_ocupacion = "";
    variables_pagina.valor_cl_otra_empresa = "";
    variables_pagina.valor_cl_telefono_otra_empresa = "";
    variables_pagina.valor_cl_otro_ingreso_mensual = "";
    variables_pagina.valor_cl_nombre_banco_1 = "";
    variables_pagina.valor_cl_numero_cuenta_1 = "";
    variables_pagina.valor_cl_nombre_banco_2 = "";
    variables_pagina.valor_cl_numero_cuenta_2 = "";
    variables_pagina.valor_cl_nombre_banco_tarjeta_1 = "";
    variables_pagina.valor_cl_limite_credito_tarjeta_1 = "";
    variables_pagina.valor_cl_nombre_banco_tarjeta_2 = "";
    variables_pagina.valor_cl_limite_credito_tarjeta_2 = "";

    // Datos del vehiculo:
    variables_pagina.valor_cl_marca_vehiculo = "";
    variables_pagina.valor_cl_modelo_vehiculo = "";
    variables_pagina.valor_cl_ano_vehiculo = "";
    variables_pagina.valor_cl_placa_vehiculo = "";
    variables_pagina.valor_cl_valor_vehiculo = "";

    // Referencias:
    variables_pagina.valor_cl_nombre_completo_relacion_1 = "";
    variables_pagina.valor_cl_tipo_relacion_1 = {
        seleccionado: "0"
    };
    variables_pagina.valor_cl_telefono_relacion_1 = "";
    variables_pagina.valor_cl_nombre_completo_relacion_2 = "";
    variables_pagina.valor_cl_tipo_relacion_2 = {
        seleccionado: "0"
    };
    variables_pagina.valor_cl_telefono_relacion_2 = "";

    // Grupo de asignacion:
    variables_pagina.valor_cl_grupo = {
        seleccionado: "0"
    };

    // Informacion adiccional:
    variables_pagina.valor_cl_comentarios = "";

    // Indicador de existencia de alguna solicitud:
    variables_pagina.valor_cl_existencia_solicitudes = 0;

    // Indicador de existencia de una solocitud activa (pendiente o aprobada):
    variables_pagina.valor_cl_existencia_prestamo_activo = 0;

    // Indicador de existencia de un historial de datos actualizado:
    variables_pagina.valor_cl_existencia_historial_actualizado = 0,

    // Inicializa lo vectores para la generación de elementos HTML dinamicos.
    variables_pagina.lista_cobros = [];
    variables_pagina.lista_grupos = [];

    // Recupera las formas de cobro.
    db.query('SELECT fc_id, fc_nombre FROM formas_cobro', function (err, result) {
        if (err) throw err;

        for (n in result) variables_pagina.lista_cobros.push({
            id_forma_cobro: result[n].fc_id,
            nombre_forma_cobro: result[n].fc_nombre
        });

        // Recupera los grupos.
        db.query('SELECT gr_id, gr_nombre FROM grupos WHERE gr_estado = ?', ['1'], function (err, result) {
            if (err) throw err;

            for (m in result) variables_pagina.lista_grupos.push({
                id_grupo: result[m].gr_id,
                nombre_grupo: result[m].gr_nombre
            });
			
			// Ordena los grupos alfabeticamente.
        	variables_pagina.lista_grupos.sort(function (a, b) {
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
            res.render('creacion_modificacion_cliente', variables_pagina);
        });
    });
};


/* Guarda los datos del nuevo cliente en la base de datos y visualiza su ficha. */
//--------------------------------------------------------------------------------

var guardarCliente = function (req, res, next) {

    console.log("Guardando nuevo cliente");

    // Remplaza con valores null las cadenas vacias generadas por los inputs no oblicatorios en los que no se introducen valores para prevenir posibles errores de tipo a nivel de DB para los campos numericos (int, decimal).
    var remplaza_cl_conyuge_nivel_academico_vacio = req.body.cl_conyuge_nivel_academico;
    var remplaza_cl_conyuge_antiguedad_vacio = req.body.cl_conyuge_antiguedad;
    var remplaza_cl_conyuge_ingreso_mensual_vacio = req.body.cl_conyuge_ingreso_mensual;
    var remplaza_cl_conyuge_cobro_vacio = req.body.cl_conyuge_cobro;
    var remplaza_cl_otra_fuente_ingresos_vacio = req.body.cl_otra_fuente_ingresos;
    var remplaza_cl_otro_ingreso_mensual_vacio = req.body.cl_otro_ingreso_mensual;
    var remplaza_cl_limite_credito_tarjeta_2_vacio = req.body.cl_limite_credito_tarjeta_2;

    if (remplaza_cl_conyuge_nivel_academico_vacio == '') remplaza_cl_conyuge_nivel_academico_vacio = null;
    if (remplaza_cl_conyuge_antiguedad_vacio == '') remplaza_cl_conyuge_antiguedad_vacio = null;
    if (remplaza_cl_conyuge_ingreso_mensual_vacio == '') remplaza_cl_conyuge_ingreso_mensual_vacio = null;
    if (remplaza_cl_conyuge_cobro_vacio == '') remplaza_cl_conyuge_cobro_vacio = null;
    if (remplaza_cl_otra_fuente_ingresos_vacio == '') remplaza_cl_otra_fuente_ingresos_vacio = null;
    if (remplaza_cl_otro_ingreso_mensual_vacio == '') remplaza_cl_otro_ingreso_mensual_vacio = null;
    if (remplaza_cl_limite_credito_tarjeta_2_vacio == '') remplaza_cl_limite_credito_tarjeta_2_vacio = null;

    // Verifica si el cliente ya existe por medio del numero de documento.
    db.query('SELECT cl_id FROM clientes_datos_identificativos WHERE cl_tipo_documento = ? AND cl_numero_documento = ? LIMIT 1', [req.body.cl_tipo_documento, req.body.cl_numero_documento], function (err, result) {
        if (err) throw err

        // Si existe redirecciona a la pagina de origen sino lo guarda en base de datos.
        if (result[0] != undefined) {

            // Redirecciona a la pagina de origen.
            console.log("El cliente ya existe y se llama: " + result[0].cl_nombre + " " + result[0].cl_apellido);
            res.redirect('back');

        } else {

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

            // Recupera los elementos desde el datepicker para generar el formato de fecha reconocido por MySQL.
            var elementos_fecha_nacimiento = req.body.cl_fecha_nacimiento.split("/");

            // Convierte la fecha de nacimiento en el formato reconocido por MySQL.
            var fecha_nacimiento = new Date(elementos_fecha_nacimiento[2], elementos_fecha_nacimiento[1] - 1, elementos_fecha_nacimiento[0]);

            // Guarda los datos del cliente en base de datos y si la operacion ha tenido exito redirecciona a la funcion que carga la ficha del cliente.
            db.query('INSERT INTO clientes_datos_identificativos SET ?', {

                // Datos identificativos cliente:
                cl_nombre: req.body.cl_nombre,
                cl_apellido: req.body.cl_apellido,
                cl_fecha_nacimiento: fecha_nacimiento,
                cl_tipo_documento: req.body.cl_tipo_documento,
                cl_numero_documento: req.body.cl_numero_documento,
                cl_fecha_creacion: fecha_creacion

            }, function (err, result) {
                if (err) throw err;

                // Recupera el id del cliente que se acaba de guardar.
                var id_cliente_datos_identificativos = result.insertId;

                db.query('INSERT INTO clientes_historial SET ?', {

                    // Claves foraneas:
                    clientes_datos_identificativos_cl_id: id_cliente_datos_identificativos,
                    grupos_gr_id: req.body.cl_grupo,

                    // Datos personales:
                    cl_celular: req.body.cl_celular,
                    cl_otro_numero: req.body.cl_otro_numero,
                    cl_correo_electronico: req.body.cl_correo_electronico,
                    cl_estado_civil: req.body.cl_estado_civil,
                    cl_hijos: req.body.cl_hijos,
                    cl_nombre_conyuge: req.body.cl_nombre_conyuge,
                    cl_apellido_conyuge: req.body.cl_apellido_conyuge,

                    // Residencia:
                    cl_direccion_residencia: req.body.cl_direccion_residencia,
                    cl_codigo_postal: req.body.cl_codigo_postal,
                    cl_ciudad: req.body.cl_ciudad,
                    cl_pais: req.body.cl_pais,
                    cl_tiempo_residiendo: req.body.cl_tiempo_residiendo,
                    cl_propiedad: req.body.cl_propiedad,
                    cl_pago_mensual: req.body.cl_pago_mensual,
                    cl_telefono_residencia: req.body.cl_telefono_residencia,
                    cl_nombre_propietario: req.body.cl_nombre_propietario,
                    cl_apellido_propietario: req.body.cl_apellido_propietario,

                    // Informacion academica y laboral:
                    cl_nivel_academico: req.body.cl_nivel_academico,
                    cl_titulo: req.body.cl_titulo,
                    cl_centro_estudio: req.body.cl_centro_estudio,
                    cl_empresa: req.body.cl_empresa,
                    cl_telefono_empresa: req.body.cl_telefono_empresa,
                    cl_cargo: req.body.cl_cargo,
                    cl_antiguedad: req.body.cl_antiguedad,
                    cl_ingreso_mensual: req.body.cl_ingreso_mensual,
                    cl_cobro: req.body.cl_cobro,
                    cl_conyuge_nivel_academico: remplaza_cl_conyuge_nivel_academico_vacio,
                    cl_conyuge_titulo: req.body.cl_conyuge_titulo,
                    cl_conyuge_centro_estudio: req.body.cl_conyuge_centro_estudio,
                    cl_conyuge_empresa: req.body.cl_conyuge_empresa,
                    cl_conyuge_telefono_empresa: req.body.cl_conyuge_telefono_empresa,
                    cl_conyuge_cargo: req.body.cl_conyuge_cargo,
                    cl_conyuge_antiguedad: remplaza_cl_conyuge_antiguedad_vacio,
                    cl_conyuge_ingreso_mensual: remplaza_cl_conyuge_ingreso_mensual_vacio,
                    cl_conyuge_cobro: remplaza_cl_conyuge_cobro_vacio,

                    // Otras fuentes de ingresos e informacion financiera:
                    cl_otra_fuente_ingresos: remplaza_cl_otra_fuente_ingresos_vacio,
                    cl_otra_ocupacion: req.body.cl_otra_ocupacion,
                    cl_otra_empresa: req.body.cl_otra_empresa,
                    cl_telefono_otra_empresa: req.body.cl_telefono_otra_empresa,
                    cl_otro_ingreso_mensual: remplaza_cl_otro_ingreso_mensual_vacio,
                    cl_nombre_banco_1: req.body.cl_nombre_banco_1,
                    cl_numero_cuenta_1: req.body.cl_numero_cuenta_1,
                    cl_nombre_banco_2: req.body.cl_nombre_banco_2,
                    cl_numero_cuenta_2: req.body.cl_numero_cuenta_2,
                    cl_nombre_banco_tarjeta_1: req.body.cl_nombre_banco_tarjeta_1,
                    cl_limite_credito_tarjeta_1: req.body.cl_limite_credito_tarjeta_1,
                    cl_nombre_banco_tarjeta_2: req.body.cl_nombre_banco_tarjeta_2,
                    cl_limite_credito_tarjeta_2: remplaza_cl_limite_credito_tarjeta_2_vacio,

                    // Datos del vehiculo:
                    cl_marca_vehiculo: req.body.cl_marca_vehiculo,
                    cl_modelo_vehiculo: req.body.cl_modelo_vehiculo,
                    cl_ano_vehiculo: req.body.cl_ano_vehiculo,
                    cl_placa_vehiculo: req.body.cl_placa_vehiculo,
                    cl_valor_vehiculo: req.body.cl_valor_vehiculo,

                    // Referencias:
                    cl_nombre_completo_relacion_1: req.body.cl_nombre_completo_relacion_1,
                    cl_tipo_relacion_1: req.body.cl_tipo_relacion_1,
                    cl_telefono_relacion_1: req.body.cl_telefono_relacion_1,
                    cl_nombre_completo_relacion_2: req.body.cl_nombre_completo_relacion_2,
                    cl_tipo_relacion_2: req.body.cl_tipo_relacion_2,
                    cl_telefono_relacion_2: req.body.cl_telefono_relacion_2,

                    // Informacion adiccional:
                    cl_comentarios: req.body.cl_comentarios,

                    // Fecha creacion:
                    cl_fecha_creacion_historial: fecha_creacion,

                    // Fecha modificacion:
                    cl_fecha_modificacion_historial: fecha_creacion

                }, function (err, result) {
                    if (err) throw err;

                    // Recupera el id del historial que se acaba de guardar y redirecciona a la pagina de visualizacion. 
                    var id_cliente_historial = result.insertId;
                    res.redirect("/visualizar_cliente/:" + id_cliente_datos_identificativos + "/:" + id_cliente_historial);
                });
            });
        }
    });

};


/* Visualiza la pagina con el formulario para la modificacion de los datos de un cliente. */
//------------------------------------------------------------------------------------------

var modificarCliente = function (req, res, next) {

    console.log("Modificando cliente");

    // Recupera los datos del cliente desde la ficha del cliente para su modificacion.
    // Inicializa la pagina que se mostrará tras haber recuperado los datos y asigna los valores a los campos del formulario.

    // PROPIEDADES ELEMENTOS PAGINA
    // ----------------------------

    inicializaPaginaModificacionCliente();

    // DATOS CLIENTE
    // -------------

    variables_pagina.valor_cl_id = req.query.cl_id;
    variables_pagina.valor_cl_id_historial = req.query.cl_id_historial;

    // Datos identificativos:
    variables_pagina.valor_cl_nombre = req.query.cl_nombre;
    variables_pagina.valor_cl_apellido = req.query.cl_apellido;
    variables_pagina.valor_cl_fecha_nacimiento = req.query.cl_fecha_nacimiento;
    variables_pagina.valor_cl_tipo_documento = {
        seleccionado: req.query.cl_tipo_documento
    };
    variables_pagina.valor_cl_numero_documento = req.query.cl_numero_documento;

    // Datos personales:
    variables_pagina.valor_cl_celular = req.query.cl_celular;
    variables_pagina.valor_cl_otro_numero = req.query.cl_otro_numero;
    variables_pagina.valor_cl_correo_electronico = req.query.cl_correo_electronico;
    variables_pagina.valor_cl_estado_civil = {
        seleccionado: req.query.cl_estado_civil
    };
    variables_pagina.valor_cl_hijos = {
        seleccionado: req.query.cl_hijos
    };
    variables_pagina.valor_cl_nombre_conyuge = req.query.cl_nombre_conyuge;
    variables_pagina.valor_cl_apellido_conyuge = req.query.cl_apellido_conyuge;

    // Residencia:
    variables_pagina.valor_cl_direccion_residencia = req.query.cl_direccion_residencia;
    variables_pagina.valor_cl_codigo_postal = req.query.cl_codigo_postal;
    variables_pagina.valor_cl_ciudad = req.query.cl_ciudad;
    variables_pagina.valor_cl_pais = req.query.cl_pais;
    variables_pagina.valor_cl_tiempo_residiendo = {
        seleccionado: req.query.cl_tiempo_residiendo
    };
    variables_pagina.valor_cl_propiedad = {
        seleccionado: req.query.cl_propiedad
    };
    variables_pagina.valor_cl_pago_mensual = req.query.cl_pago_mensual;
    variables_pagina.valor_cl_telefono_residencia = req.query.cl_telefono_residencia;
    variables_pagina.valor_cl_nombre_propietario = req.query.cl_nombre_propietario;
    variables_pagina.valor_cl_apellido_propietario = req.query.cl_apellido_propietario;

    // Informacion academica y laboral:
    variables_pagina.valor_cl_nivel_academico = {
        seleccionado: req.query.cl_nivel_academico
    };
    variables_pagina.valor_cl_titulo = req.query.cl_titulo;
    variables_pagina.valor_cl_centro_estudio = req.query.cl_centro_estudio;
    variables_pagina.valor_cl_empresa = req.query.cl_empresa;
    variables_pagina.valor_cl_telefono_empresa = req.query.cl_telefono_empresa;
    variables_pagina.valor_cl_cargo = req.query.cl_cargo;
    variables_pagina.valor_cl_antiguedad = {
        seleccionado: req.query.cl_antiguedad
    };
    variables_pagina.valor_cl_ingreso_mensual = req.query.cl_ingreso_mensual;
    variables_pagina.valor_cl_cobro = {
        seleccionado: req.query.cl_cobro
    };
    variables_pagina.valor_cl_conyuge_nivel_academico = {
        seleccionado: req.query.cl_conyuge_nivel_academico
    };
    variables_pagina.valor_cl_conyuge_titulo = req.query.cl_conyuge_titulo;
    variables_pagina.valor_cl_conyuge_centro_estudio = req.query.cl_conyuge_centro_estudio;
    variables_pagina.valor_cl_conyuge_empresa = req.query.cl_conyuge_empresa;
    variables_pagina.valor_cl_conyuge_telefono_empresa = req.query.cl_conyuge_telefono_empresa;
    variables_pagina.valor_cl_conyuge_cargo = req.query.cl_conyuge_cargo;
    variables_pagina.valor_cl_conyuge_antiguedad = {
        seleccionado: req.query.cl_conyuge_antiguedad
    };
    variables_pagina.valor_cl_conyuge_ingreso_mensual = req.query.cl_conyuge_ingreso_mensual;
    variables_pagina.valor_cl_conyuge_cobro = {
        seleccionado: req.query.cl_conyuge_cobro
    };

    // Otras fuentes de ingresos e informacion financiera:
    variables_pagina.valor_cl_otra_fuente_ingresos = {
        seleccionado: req.query.cl_otra_fuente_ingresos
    };
    variables_pagina.valor_cl_otra_ocupacion = req.query.cl_otra_ocupacion;
    variables_pagina.valor_cl_otra_empresa = req.query.cl_otra_empresa;
    variables_pagina.valor_cl_telefono_otra_empresa = req.query.cl_telefono_otra_empresa;
    variables_pagina.valor_cl_otro_ingreso_mensual = req.query.cl_otro_ingreso_mensual;
    variables_pagina.valor_cl_nombre_banco_1 = req.query.cl_nombre_banco_1;
    variables_pagina.valor_cl_numero_cuenta_1 = req.query.cl_numero_cuenta_1;
    variables_pagina.valor_cl_nombre_banco_2 = req.query.cl_nombre_banco_2;
    variables_pagina.valor_cl_numero_cuenta_2 = req.query.cl_numero_cuenta_2;
    variables_pagina.valor_cl_nombre_banco_tarjeta_1 = req.query.cl_nombre_banco_tarjeta_1;
    variables_pagina.valor_cl_limite_credito_tarjeta_1 = req.query.cl_limite_credito_tarjeta_1;
    variables_pagina.valor_cl_nombre_banco_tarjeta_2 = req.query.cl_nombre_banco_tarjeta_2;
    variables_pagina.valor_cl_limite_credito_tarjeta_2 = req.query.cl_limite_credito_tarjeta_2;

    // Datos del vehiculo:
    variables_pagina.valor_cl_marca_vehiculo = req.query.cl_marca_vehiculo;
    variables_pagina.valor_cl_modelo_vehiculo = req.query.cl_modelo_vehiculo;
    variables_pagina.valor_cl_ano_vehiculo = req.query.cl_ano_vehiculo;
    variables_pagina.valor_cl_placa_vehiculo = req.query.cl_placa_vehiculo;
    variables_pagina.valor_cl_valor_vehiculo = req.query.cl_valor_vehiculo;

    // Referencias:
    variables_pagina.valor_cl_nombre_completo_relacion_1 = req.query.cl_nombre_completo_relacion_1;
    variables_pagina.valor_cl_tipo_relacion_1 = {
        seleccionado: req.query.cl_tipo_relacion_1
    };
    variables_pagina.valor_cl_telefono_relacion_1 = req.query.cl_telefono_relacion_1;
    variables_pagina.valor_cl_nombre_completo_relacion_2 = req.query.cl_nombre_completo_relacion_2;
    variables_pagina.valor_cl_tipo_relacion_2 = {
        seleccionado: req.query.cl_tipo_relacion_2
    };
    variables_pagina.valor_cl_telefono_relacion_2 = req.query.cl_telefono_relacion_2;

    // Grupo de asignacion:
    variables_pagina.valor_cl_grupo = {
        seleccionado: req.query.cl_grupo
    };

    // Informacion adiccional:
    variables_pagina.valor_cl_comentarios = req.query.cl_comentarios;

    // Indicador de existencia de alguna solocitud:
    variables_pagina.valor_cl_existencia_solicitudes = req.query.cl_existencia_solicitudes;

    // Indicador de existencia de una solocitud activa (pendiente o aprobada):
    variables_pagina.valor_cl_existencia_prestamo_activo = req.query.cl_existencia_prestamo_activo;

    // Indicador de existencia de un historial de datos actualizado:
    variables_pagina.valor_cl_existencia_historial_actualizado = req.query.cl_existencia_historial_actualizado;

    // Inicializa lo vectores para la generación de elementos HTML dinamicos.
    variables_pagina.lista_cobros = [];
    variables_pagina.lista_grupos = [];

    // Recupera las formas de cobro.
    db.query('SELECT fc_id, fc_nombre FROM formas_cobro', function (err, result) {
        if (err) throw err;

        for (n in result) variables_pagina.lista_cobros.push({
            id_forma_cobro: result[n].fc_id,
            nombre_forma_cobro: result[n].fc_nombre
        });

        // Recupera los grupos.
        db.query('SELECT gr_id, gr_nombre FROM grupos WHERE gr_estado = ?', ['1'], function (err, result) {
            if (err) throw err;

            for (m in result) variables_pagina.lista_grupos.push({
                id_grupo: result[m].gr_id,
                nombre_grupo: result[m].gr_nombre
            });
			
			// Ordena los grupos alfabeticamente.
        	variables_pagina.lista_grupos.sort(function (a, b) {
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
            res.render('creacion_modificacion_cliente', variables_pagina);
        });
    });
};


/* Guarda los datos modificados de un cliente en la base de datos y visualiza su ficha. */
//----------------------------------------------------------------------------------------

var guardarClienteModificado = function (req, res, next) {

    console.log("Guardando cliente modificado");

    var id_cliente_datos_identificativos = req.body.cl_id;
    var id_cliente_historial = req.body.cl_id_historial;

    // Remplaza con valores null las cadenas vacias generadas por los inputs no oblicatorios en los que no se introducen valores para prevenir posibles errores de tipo a nivel de DB para los campos numericos (int, decimal).
    var remplaza_cl_conyuge_nivel_academico_vacio = req.body.cl_conyuge_nivel_academico;
    var remplaza_cl_conyuge_antiguedad_vacio = req.body.cl_conyuge_antiguedad;
    var remplaza_cl_conyuge_ingreso_mensual_vacio = req.body.cl_conyuge_ingreso_mensual;
    var remplaza_cl_conyuge_cobro_vacio = req.body.cl_conyuge_cobro;
    var remplaza_cl_otra_fuente_ingresos_vacio = req.body.cl_otra_fuente_ingresos;
    var remplaza_cl_otro_ingreso_mensual_vacio = req.body.cl_otro_ingreso_mensual;
    var remplaza_cl_limite_credito_tarjeta_2_vacio = req.body.cl_limite_credito_tarjeta_2;

    if (remplaza_cl_conyuge_nivel_academico_vacio == '') remplaza_cl_conyuge_nivel_academico_vacio = null;
    if (remplaza_cl_conyuge_antiguedad_vacio == '') remplaza_cl_conyuge_antiguedad_vacio = null;
    if (remplaza_cl_conyuge_ingreso_mensual_vacio == '') remplaza_cl_conyuge_ingreso_mensual_vacio = null;
    if (remplaza_cl_conyuge_cobro_vacio == '') remplaza_cl_conyuge_cobro_vacio = null;
    if (remplaza_cl_otra_fuente_ingresos_vacio == '') remplaza_cl_otra_fuente_ingresos_vacio = null;
    if (remplaza_cl_otro_ingreso_mensual_vacio == '') remplaza_cl_otro_ingreso_mensual_vacio = null;
    if (remplaza_cl_limite_credito_tarjeta_2_vacio == '') remplaza_cl_limite_credito_tarjeta_2_vacio = null;

    // ... (Valida los datos recibidos en la peticion y si la operacion ha tenido exito ejecuta el codigo que sigue).

    // Verifica si existe una solicitud para el historial de datos corriente, si existe genera un nuevo historial sino actualiza el historial corriente.
    db.query('SELECT sl_id FROM solicitudes WHERE clientes_cl_id = ? AND clientes_historial_cl_id_historial = ? LIMIT 1', [id_cliente_datos_identificativos, id_cliente_historial], function (err, result) {
        if (err) throw err;

        if (result[0] != undefined) {

            // Genera la fecha de creacion del nuevo historial de datos.
            var objeto_fecha = new Date();
            var dia_creacion = objeto_fecha.getDate();
            var mes_creacion = objeto_fecha.getMonth() + 1;
            var ano_creacion = objeto_fecha.getFullYear();
            var hora_creacion = objeto_fecha.getHours();
            var minuto_creacion = objeto_fecha.getMinutes();
            var segundo_creacion = objeto_fecha.getSeconds();
            var fecha_creacion = ano_creacion + '-' + mes_creacion + '-' + dia_creacion + ' ' + hora_creacion + ':' + minuto_creacion + ':' + segundo_creacion;

            // Guarda los datos validados en base de datos y si la operacion ha tenido exito redirecciona a la funcion que carga la ficha del cliente.
            db.query('INSERT INTO clientes_historial SET ?', {

                // Claves foraneas:
                clientes_datos_identificativos_cl_id: id_cliente_datos_identificativos,
                grupos_gr_id: req.body.cl_grupo,

                // Datos personales:
                cl_celular: req.body.cl_celular,
                cl_otro_numero: req.body.cl_otro_numero,
                cl_correo_electronico: req.body.cl_correo_electronico,
                cl_estado_civil: req.body.cl_estado_civil,
                cl_hijos: req.body.cl_hijos,
                cl_nombre_conyuge: req.body.cl_nombre_conyuge,
                cl_apellido_conyuge: req.body.cl_apellido_conyuge,

                // Residencia:
                cl_direccion_residencia: req.body.cl_direccion_residencia,
                cl_codigo_postal: req.body.cl_codigo_postal,
                cl_ciudad: req.body.cl_ciudad,
                cl_pais: req.body.cl_pais,
                cl_tiempo_residiendo: req.body.cl_tiempo_residiendo,
                cl_propiedad: req.body.cl_propiedad,
                cl_pago_mensual: req.body.cl_pago_mensual,
                cl_telefono_residencia: req.body.cl_telefono_residencia,
                cl_nombre_propietario: req.body.cl_nombre_propietario,
                cl_apellido_propietario: req.body.cl_apellido_propietario,

                // Informacion academica y laboral:
                cl_nivel_academico: req.body.cl_nivel_academico,
                cl_titulo: req.body.cl_titulo,
                cl_centro_estudio: req.body.cl_centro_estudio,
                cl_empresa: req.body.cl_empresa,
                cl_telefono_empresa: req.body.cl_telefono_empresa,
                cl_cargo: req.body.cl_cargo,
                cl_antiguedad: req.body.cl_antiguedad,
                cl_ingreso_mensual: req.body.cl_ingreso_mensual,
                cl_cobro: req.body.cl_cobro,
                cl_conyuge_nivel_academico: remplaza_cl_conyuge_nivel_academico_vacio,
                cl_conyuge_titulo: req.body.cl_conyuge_titulo,
                cl_conyuge_centro_estudio: req.body.cl_conyuge_centro_estudio,
                cl_conyuge_empresa: req.body.cl_conyuge_empresa,
                cl_conyuge_telefono_empresa: req.body.cl_conyuge_telefono_empresa,
                cl_conyuge_cargo: req.body.cl_conyuge_cargo,
                cl_conyuge_antiguedad: remplaza_cl_conyuge_antiguedad_vacio,
                cl_conyuge_ingreso_mensual: remplaza_cl_conyuge_ingreso_mensual_vacio,
                cl_conyuge_cobro: remplaza_cl_conyuge_cobro_vacio,

                // Otras fuentes de ingresos e informacion financiera:
                cl_otra_fuente_ingresos: remplaza_cl_otra_fuente_ingresos_vacio,
                cl_otra_ocupacion: req.body.cl_otra_ocupacion,
                cl_otra_empresa: req.body.cl_otra_empresa,
                cl_telefono_otra_empresa: req.body.cl_telefono_otra_empresa,
                cl_otro_ingreso_mensual: remplaza_cl_otro_ingreso_mensual_vacio,
                cl_nombre_banco_1: req.body.cl_nombre_banco_1,
                cl_numero_cuenta_1: req.body.cl_numero_cuenta_1,
                cl_nombre_banco_2: req.body.cl_nombre_banco_2,
                cl_numero_cuenta_2: req.body.cl_numero_cuenta_2,
                cl_nombre_banco_tarjeta_1: req.body.cl_nombre_banco_tarjeta_1,
                cl_limite_credito_tarjeta_1: req.body.cl_limite_credito_tarjeta_1,
                cl_nombre_banco_tarjeta_2: req.body.cl_nombre_banco_tarjeta_2,
                cl_limite_credito_tarjeta_2: remplaza_cl_limite_credito_tarjeta_2_vacio,

                // Datos del vehiculo:
                cl_marca_vehiculo: req.body.cl_marca_vehiculo,
                cl_modelo_vehiculo: req.body.cl_modelo_vehiculo,
                cl_ano_vehiculo: req.body.cl_ano_vehiculo,
                cl_placa_vehiculo: req.body.cl_placa_vehiculo,
                cl_valor_vehiculo: req.body.cl_valor_vehiculo,

                // Referencias:
                cl_nombre_completo_relacion_1: req.body.cl_nombre_completo_relacion_1,
                cl_tipo_relacion_1: req.body.cl_tipo_relacion_1,
                cl_telefono_relacion_1: req.body.cl_telefono_relacion_1,
                cl_nombre_completo_relacion_2: req.body.cl_nombre_completo_relacion_2,
                cl_tipo_relacion_2: req.body.cl_tipo_relacion_2,
                cl_telefono_relacion_2: req.body.cl_telefono_relacion_2,

                // Informacion adiccional:
                cl_comentarios: req.body.cl_comentarios,

                // Fecha creacion:
                cl_fecha_creacion_historial: fecha_creacion,

                // Fecha modificacion:
                cl_fecha_modificacion_historial: fecha_creacion

            }, function (err, result) {
                if (err) throw err;

                // Recupera el id del historial que se acaba de guardar y redirecciona a la pagina de visualizacion.
                var id_cliente_historial = result.insertId;
                res.redirect("/visualizar_cliente/:" + id_cliente_datos_identificativos + "/:" + id_cliente_historial);
            });

        } else {

            // Recupera el id del historial que hay que actualizar.
            var id_cliente_historial = req.body.cl_id_historial;

            // Genera la fecha de modificacion del historial de datos.
            var objeto_fecha = new Date();
            var dia_modificacion = objeto_fecha.getDate();
            var mes_modificacion = objeto_fecha.getMonth() + 1;
            var ano_modificacion = objeto_fecha.getFullYear();
            var hora_modificacion = objeto_fecha.getHours();
            var minuto_modificacion = objeto_fecha.getMinutes();
            var segundo_modificacion = objeto_fecha.getSeconds();
            var fecha_modificacion = ano_modificacion + '-' + mes_modificacion + '-' + dia_modificacion + ' ' + hora_modificacion + ':' + minuto_modificacion + ':' + segundo_modificacion;

            // Actualiza los datos validados en base de datos y si la operacion ha tenido exito redirecciona a la funcion que carga la ficha del cliente.
            db.query('UPDATE clientes_historial SET ? WHERE cl_id_historial = ? AND clientes_datos_identificativos_cl_id = ?', [{

                // Claves foraneas:
                clientes_datos_identificativos_cl_id: id_cliente_datos_identificativos,
                grupos_gr_id: req.body.cl_grupo,

                // Datos personales:
                cl_celular: req.body.cl_celular,
                cl_otro_numero: req.body.cl_otro_numero,
                cl_correo_electronico: req.body.cl_correo_electronico,
                cl_estado_civil: req.body.cl_estado_civil,
                cl_hijos: req.body.cl_hijos,
                cl_nombre_conyuge: req.body.cl_nombre_conyuge,
                cl_apellido_conyuge: req.body.cl_apellido_conyuge,

                // Residencia:
                cl_direccion_residencia: req.body.cl_direccion_residencia,
                cl_codigo_postal: req.body.cl_codigo_postal,
                cl_ciudad: req.body.cl_ciudad,
                cl_pais: req.body.cl_pais,
                cl_tiempo_residiendo: req.body.cl_tiempo_residiendo,
                cl_propiedad: req.body.cl_propiedad,
                cl_pago_mensual: req.body.cl_pago_mensual,
                cl_telefono_residencia: req.body.cl_telefono_residencia,
                cl_nombre_propietario: req.body.cl_nombre_propietario,
                cl_apellido_propietario: req.body.cl_apellido_propietario,

                // Informacion academica y laboral:
                cl_nivel_academico: req.body.cl_nivel_academico,
                cl_titulo: req.body.cl_titulo,
                cl_centro_estudio: req.body.cl_centro_estudio,
                cl_empresa: req.body.cl_empresa,
                cl_telefono_empresa: req.body.cl_telefono_empresa,
                cl_cargo: req.body.cl_cargo,
                cl_antiguedad: req.body.cl_antiguedad,
                cl_ingreso_mensual: req.body.cl_ingreso_mensual,
                cl_cobro: req.body.cl_cobro,
                cl_conyuge_nivel_academico: remplaza_cl_conyuge_nivel_academico_vacio,
                cl_conyuge_titulo: req.body.cl_conyuge_titulo,
                cl_conyuge_centro_estudio: req.body.cl_conyuge_centro_estudio,
                cl_conyuge_empresa: req.body.cl_conyuge_empresa,
                cl_conyuge_telefono_empresa: req.body.cl_conyuge_telefono_empresa,
                cl_conyuge_cargo: req.body.cl_conyuge_cargo,
                cl_conyuge_antiguedad: remplaza_cl_conyuge_antiguedad_vacio,
                cl_conyuge_ingreso_mensual: remplaza_cl_conyuge_ingreso_mensual_vacio,
                cl_conyuge_cobro: remplaza_cl_conyuge_cobro_vacio,

                // Otras fuentes de ingresos e informacion financiera:
                cl_otra_fuente_ingresos: remplaza_cl_otra_fuente_ingresos_vacio,
                cl_otra_ocupacion: req.body.cl_otra_ocupacion,
                cl_otra_empresa: req.body.cl_otra_empresa,
                cl_telefono_otra_empresa: req.body.cl_telefono_otra_empresa,
                cl_otro_ingreso_mensual: remplaza_cl_otro_ingreso_mensual_vacio,
                cl_nombre_banco_1: req.body.cl_nombre_banco_1,
                cl_numero_cuenta_1: req.body.cl_numero_cuenta_1,
                cl_nombre_banco_2: req.body.cl_nombre_banco_2,
                cl_numero_cuenta_2: req.body.cl_numero_cuenta_2,
                cl_nombre_banco_tarjeta_1: req.body.cl_nombre_banco_tarjeta_1,
                cl_limite_credito_tarjeta_1: req.body.cl_limite_credito_tarjeta_1,
                cl_nombre_banco_tarjeta_2: req.body.cl_nombre_banco_tarjeta_2,
                cl_limite_credito_tarjeta_2: remplaza_cl_limite_credito_tarjeta_2_vacio,

                // Datos del vehiculo:
                cl_marca_vehiculo: req.body.cl_marca_vehiculo,
                cl_modelo_vehiculo: req.body.cl_modelo_vehiculo,
                cl_ano_vehiculo: req.body.cl_ano_vehiculo,
                cl_placa_vehiculo: req.body.cl_placa_vehiculo,
                cl_valor_vehiculo: req.body.cl_valor_vehiculo,

                // Referencias:
                cl_nombre_completo_relacion_1: req.body.cl_nombre_completo_relacion_1,
                cl_tipo_relacion_1: req.body.cl_tipo_relacion_1,
                cl_telefono_relacion_1: req.body.cl_telefono_relacion_1,
                cl_nombre_completo_relacion_2: req.body.cl_nombre_completo_relacion_2,
                cl_tipo_relacion_2: req.body.cl_tipo_relacion_2,
                cl_telefono_relacion_2: req.body.cl_telefono_relacion_2,

                // Informacion adiccional:
                cl_comentarios: req.body.cl_comentarios,

                // Fecha creacion:
                cl_fecha_modificacion_historial: fecha_modificacion

			}, id_cliente_historial, id_cliente_datos_identificativos], function (err, result) {
                if (err) throw err;

                // Redirecciona a la pagina de visualizacion.
                res.redirect("/visualizar_cliente/:" + id_cliente_datos_identificativos + "/:" + id_cliente_historial);
            });
        };

    });
};


/* Visualiza la ficha cliente. */
//-------------------------------

var visualizarCliente = function (req, res, next) {

    console.log("Visualizando cliente");

    // Recupera los parametros enviados con la llamada a la funcion.
    var id_cliente_datos_identificativos = req.params.id_cliente_datos_identificativos.slice(1);
    var id_cliente_historial = req.params.id_cliente_historial.slice(1);

    // Los asigna a las variables de pagina que se necesitarán para crear una solicitud.
    variables_pagina.valor_cl_id = id_cliente_datos_identificativos;
    variables_pagina.valor_cl_id_historial = id_cliente_historial;

    // Recupera los datos identificativos del cliente.
    db.query('SELECT * FROM clientes_datos_identificativos WHERE cl_id = ? LIMIT 1', [id_cliente_datos_identificativos], function (err, result) {
        if (err) throw err;

        // Si existe el resultados lo sigue procesando la peticion sino redirecciona a la pagina de error.
        if (result[0] != undefined) {

            // Inicizliza la ficha cliente en la que se mostraran los datos que se acaban de recuperar.

            // PROPIEDADES ELEMENTOS PAGINA
            // ----------------------------

            inicializaFichaCliente();

            // Define la propiedad para el boton de eliminacion pasandole los parametros.
            variables_pagina.comando_btn_confirmacion_1 = '<a href="/eliminar_cliente/:' + id_cliente_datos_identificativos + '" class="btn btn-danger">Confirmar</a>';

            // Asigna los valores recuperados a los campos del formulario.

            // DATOS CLIENTE
            // -------------

            // Datos identificativos:
            variables_pagina.valor_cl_nombre = result[0].cl_nombre;
            variables_pagina.valor_cl_apellido = result[0].cl_apellido;

            // Convierte la fecha de nacimiento desde el formato YYYY-MM-DD al formato DD/MM/YYYY.
            var fecha_nacimiento = result[0].cl_fecha_nacimiento.split("-");
            variables_pagina.valor_cl_fecha_nacimiento = fecha_nacimiento[2] + "/" + fecha_nacimiento[1] + "/" + fecha_nacimiento[0];

            variables_pagina.valor_cl_tipo_documento = {
                seleccionado: result[0].cl_tipo_documento
            };
            variables_pagina.valor_cl_numero_documento = result[0].cl_numero_documento;

            // Recupera el historial de datos del cliente.
            db.query('SELECT * FROM clientes_historial WHERE cl_id_historial = ? AND clientes_datos_identificativos_cl_id = ? LIMIT 1', [id_cliente_historial, id_cliente_datos_identificativos], function (err, result) {
                if (err) throw err;

                // Si existe el resultados lo mostra sino redirecciona a la pagina de error.
                if (result[0] != undefined) {

                    // Datos personales:
                    variables_pagina.valor_cl_celular = result[0].cl_celular;
                    variables_pagina.valor_cl_otro_numero = result[0].cl_otro_numero;
                    variables_pagina.valor_cl_correo_electronico = result[0].cl_correo_electronico;
                    variables_pagina.valor_cl_estado_civil = {
                        seleccionado: result[0].cl_estado_civil
                    };
                    variables_pagina.valor_cl_hijos = {
                        seleccionado: result[0].cl_hijos
                    };
                    variables_pagina.valor_cl_nombre_conyuge = result[0].cl_nombre_conyuge;
                    variables_pagina.valor_cl_apellido_conyuge = result[0].cl_apellido_conyuge;

                    // Residencia:
                    variables_pagina.valor_cl_direccion_residencia = result[0].cl_direccion_residencia;
                    variables_pagina.valor_cl_codigo_postal = result[0].cl_codigo_postal;
                    variables_pagina.valor_cl_ciudad = result[0].cl_ciudad;
                    variables_pagina.valor_cl_pais = result[0].cl_pais;
                    variables_pagina.valor_cl_tiempo_residiendo = {
                        seleccionado: result[0].cl_tiempo_residiendo
                    };
                    variables_pagina.valor_cl_propiedad = {
                        seleccionado: result[0].cl_propiedad
                    };
                    variables_pagina.valor_cl_pago_mensual = result[0].cl_pago_mensual;
                    variables_pagina.valor_cl_telefono_residencia = result[0].cl_telefono_residencia;
                    variables_pagina.valor_cl_nombre_propietario = result[0].cl_nombre_propietario;
                    variables_pagina.valor_cl_apellido_propietario = result[0].cl_apellido_propietario;

                    // Informacion academica y laboral:
                    variables_pagina.valor_cl_nivel_academico = {
                        seleccionado: result[0].cl_nivel_academico
                    };
                    variables_pagina.valor_cl_titulo = result[0].cl_titulo;
                    variables_pagina.valor_cl_centro_estudio = result[0].cl_centro_estudio;
                    variables_pagina.valor_cl_empresa = result[0].cl_empresa;
                    variables_pagina.valor_cl_telefono_empresa = result[0].cl_telefono_empresa;
                    variables_pagina.valor_cl_cargo = result[0].cl_cargo;
                    variables_pagina.valor_cl_antiguedad = {
                        seleccionado: result[0].cl_antiguedad
                    };
                    variables_pagina.valor_cl_ingreso_mensual = result[0].cl_ingreso_mensual;
                    variables_pagina.valor_cl_cobro = {
                        seleccionado: result[0].cl_cobro
                    };
                    variables_pagina.valor_cl_conyuge_nivel_academico = {
                        seleccionado: result[0].cl_conyuge_nivel_academico
                    };
                    variables_pagina.valor_cl_conyuge_titulo = result[0].cl_conyuge_titulo;
                    variables_pagina.valor_cl_conyuge_centro_estudio = result[0].cl_conyuge_centro_estudio;
                    variables_pagina.valor_cl_conyuge_empresa = result[0].cl_conyuge_empresa;
                    variables_pagina.valor_cl_conyuge_telefono_empresa = result[0].cl_conyuge_telefono_empresa;
                    variables_pagina.valor_cl_conyuge_cargo = result[0].cl_conyuge_cargo;
                    variables_pagina.valor_cl_conyuge_antiguedad = {
                        seleccionado: result[0].cl_conyuge_antiguedad
                    };
                    variables_pagina.valor_cl_conyuge_ingreso_mensual = result[0].cl_conyuge_ingreso_mensual;
                    variables_pagina.valor_cl_conyuge_cobro = {
                        seleccionado: result[0].cl_conyuge_cobro
                    };

                    // Otras fuentes de ingresos e informacion financiera:
                    variables_pagina.valor_cl_otra_fuente_ingresos = {
                        seleccionado: result[0].cl_otra_fuente_ingresos
                    };
                    variables_pagina.valor_cl_otra_ocupacion = result[0].cl_otra_ocupacion;
                    variables_pagina.valor_cl_otra_empresa = result[0].cl_otra_empresa;
                    variables_pagina.valor_cl_telefono_otra_empresa = result[0].cl_telefono_otra_empresa;
                    variables_pagina.valor_cl_otro_ingreso_mensual = result[0].cl_otro_ingreso_mensual;
                    variables_pagina.valor_cl_nombre_banco_1 = result[0].cl_nombre_banco_1;
                    variables_pagina.valor_cl_numero_cuenta_1 = result[0].cl_numero_cuenta_1;
                    variables_pagina.valor_cl_nombre_banco_2 = result[0].cl_nombre_banco_2;
                    variables_pagina.valor_cl_numero_cuenta_2 = result[0].cl_numero_cuenta_2;
                    variables_pagina.valor_cl_nombre_banco_tarjeta_1 = result[0].cl_nombre_banco_tarjeta_1;
                    variables_pagina.valor_cl_limite_credito_tarjeta_1 = result[0].cl_limite_credito_tarjeta_1;
                    variables_pagina.valor_cl_nombre_banco_tarjeta_2 = result[0].cl_nombre_banco_tarjeta_2;
                    variables_pagina.valor_cl_limite_credito_tarjeta_2 = result[0].cl_limite_credito_tarjeta_2;

                    // Datos del vehiculo:
                    variables_pagina.valor_cl_marca_vehiculo = result[0].cl_marca_vehiculo;
                    variables_pagina.valor_cl_modelo_vehiculo = result[0].cl_modelo_vehiculo;
                    variables_pagina.valor_cl_ano_vehiculo = result[0].cl_ano_vehiculo;
                    variables_pagina.valor_cl_placa_vehiculo = result[0].cl_placa_vehiculo;
                    variables_pagina.valor_cl_valor_vehiculo = result[0].cl_valor_vehiculo;

                    // Referencias:
                    variables_pagina.valor_cl_nombre_completo_relacion_1 = result[0].cl_nombre_completo_relacion_1;
                    variables_pagina.valor_cl_tipo_relacion_1 = {
                        seleccionado: result[0].cl_tipo_relacion_1
                    };
                    variables_pagina.valor_cl_telefono_relacion_1 = result[0].cl_telefono_relacion_1;
                    variables_pagina.valor_cl_nombre_completo_relacion_2 = result[0].cl_nombre_completo_relacion_2;
                    variables_pagina.valor_cl_tipo_relacion_2 = {
                        seleccionado: result[0].cl_tipo_relacion_2
                    };
                    variables_pagina.valor_cl_telefono_relacion_2 = result[0].cl_telefono_relacion_2;

                    // Grupo de asignacion:
                    variables_pagina.valor_cl_grupo = {
                        seleccionado: result[0].grupos_gr_id
                    };

                    // Informacion adiccional:
                    variables_pagina.valor_cl_comentarios = result[0].cl_comentarios;

                    // Inicializa lo vectores para la generación de elementos HTML dinamicos.
                    variables_pagina.lista_cobros = [];
                    variables_pagina.lista_grupos = [];

                    // Recupera las formas de cobro.
                    db.query('SELECT fc_id, fc_nombre FROM formas_cobro', function (err, result) {
                        if (err) throw err;

                        for (n in result) variables_pagina.lista_cobros.push({
                            id_forma_cobro: result[n].fc_id,
                            nombre_forma_cobro: result[n].fc_nombre
                        });

                        // Recupera los grupos.
                        db.query('SELECT gr_id, gr_nombre FROM grupos WHERE gr_estado = ?', ['1'], function (err, result) {
                            if (err) throw err;

                            for (m in result) variables_pagina.lista_grupos.push({
                                id_grupo: result[m].gr_id,
                                nombre_grupo: result[m].gr_nombre
                            });
							
							// Ordena los grupos alfabeticamente.
        					variables_pagina.lista_grupos.sort(function (a, b) {
        					    if (a.nombre_grupo > b.nombre_grupo) {
        					        return 1;
        					    }
        					    if (a.nombre_grupo < b.nombre_grupo) {
        					        return -1;
        					    }
        					    // "a" tiene que ser igual a "b"
        					    return 0;
        					});

                            // Verifica si hay alguna solicitud para el cliente.
                            db.query('SELECT sl_id FROM solicitudes WHERE clientes_cl_id = ?', [id_cliente_datos_identificativos], function (err, result) {
                                if (err) throw err;

                                if (result[0] != undefined) {
                                    variables_pagina.valor_total_solicitudes = result.length;
                                    variables_pagina.valor_cl_existencia_solicitudes = 1;
                                } else {
                                    variables_pagina.valor_cl_existencia_solicitudes = 0;
                                }

                                // Verifica si hay alguna solicitud activa para el cliente.
                                db.query('SELECT sl_id FROM solicitudes WHERE clientes_cl_id = ? AND (sl_estado = ? OR sl_estado = ?) AND sl_prestamo_finalizado = ? LIMIT 1', [id_cliente_datos_identificativos, "2", "1", 0], function (err, result) {
                                    if (err) throw err

                                    if (result[0] != undefined) {
                                        variables_pagina.valor_cl_existencia_prestamo_activo = 1;
                                    } else {
                                        variables_pagina.valor_cl_existencia_prestamo_activo = 0;
                                    }

                                    // Verifica si hay datos actualizados del cliente.
                                    db.query('SELECT cl_id_historial FROM clientes_historial WHERE cl_id_historial > ? AND clientes_datos_identificativos_cl_id = ? LIMIT 1', [id_cliente_historial, id_cliente_datos_identificativos], function (err, result) {
                                        if (err) throw err

                                        if (result[0] != undefined) {
                                            variables_pagina.valor_cl_existencia_historial_actualizado = 1;
                                        } else {
                                            variables_pagina.valor_cl_existencia_historial_actualizado = 0;
                                        }

                                        // Verifica el historial de datos mas actualizado del cliente.
                                        db.query('SELECT cl_id_historial, cl_fecha_modificacion_historial FROM clientes_historial WHERE clientes_datos_identificativos_cl_id = ? ORDER BY cl_id_historial DESC LIMIT 1', [id_cliente_datos_identificativos], function (err, result) {
                                            if (err) throw err

                                            // Modifica el formato el formato de la fecha de ultima modificacion recibida. 
                                            var fecha_ultima_modificacion = result[0].cl_fecha_modificacion_historial;

                                            var dia = fecha_ultima_modificacion.slice(8, 10);
                                            var mes = fecha_ultima_modificacion.slice(5, 7);
                                            var ano = fecha_ultima_modificacion.slice(0, 4);

                                            var fecha_ultima_modificacion_formato_DD_MM_AAAA = dia + "-" + mes + "-" + ano;

                                            // Si hay datos mas actualizados mostra un mensaje de alerta. 
                                            if (result[0].cl_id_historial > id_cliente_historial) {
                                                variables_pagina.valor_info_historial = "<br><div class=\"alert alert-danger info-historial-actualizado\"><strong>Informacion importante: </strong>Hay datos del cliente actualizados al " + fecha_ultima_modificacion_formato_DD_MM_AAAA + " - <a href=\"/visualizar_cliente/:" + id_cliente_datos_identificativos + "/:" + result[0].cl_id_historial + "\" class=\"alert-danger\"><strong>Ver datos actualizados</strong></a></div>";
                                            } else {
                                                variables_pagina.valor_info_historial = "Datos actualizados al: " + fecha_ultima_modificacion_formato_DD_MM_AAAA;
                                            }

                                            // Renderiza la pagina de visualizacion pasandole el objeto que define su contenido.
                                            res.render('visualizacion_cliente', variables_pagina);

                                        })
                                    });
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
};


/* Elimina el cliente. */
//-----------------------

var eliminarCliente = function (req, res, next) {

    var id_cliente_datos_identificativos = req.params.id_cliente_datos_identificativos.slice(1);

    console.log("Eliminando cliente " + id_cliente_datos_identificativos);

    // Verifica si hay solicitudes para el cliente.
    db.query('SELECT sl_id FROM solicitudes WHERE clientes_cl_id = ?', [id_cliente_datos_identificativos], function (err, result) {
        if (err) throw err

        // Si no hay solicitudes elimina el cliente y sus historiales. 
        if (result[0] == undefined) {

            db.query('DELETE FROM clientes_historial WHERE clientes_datos_identificativos_cl_id = ?', [id_cliente_datos_identificativos], function (err, result) {
                if (err) throw err

                db.query('DELETE FROM clientes_datos_identificativos WHERE cl_id = ? LIMIT 1', [id_cliente_datos_identificativos], function (err, result) {
                    if (err) throw err

                    res.redirect("/");
                });
            });
        } else {

            // Declara el contador de peticiones a base de datos para operaciones de seleccion ciclica que determinara cuando renderizar la pagina.
            var peticion_db = 0;

            // Para cada solicitud encontrada elimina los relativos prestamos y las cuotas si los hay y en fin el la solicitud y el cliente. 
            for (i in result) {

                var id_solicitud;
                id_solicitud = result[i].sl_id;

                // Verifica si hay un prestamo para la solicitud.
                db.query('SELECT pr_id, solicitudes_sl_id FROM prestamos WHERE solicitudes_sl_id = ? LIMIT 1', [id_solicitud], function (err, result) {
                    if (err) throw err

                    // Si existe un prestamo elimina la cuotas.
                    if (result[0] != undefined) {

                        var id_prestamo;
                        id_prestamo = result[0].pr_id;

                        var id_solicitud_prestamo;
                        id_solicitud_prestamo = result[0].solicitudes_sl_id;

                        // Elimina las cuotas de los prestamos.
                        db.query('DELETE FROM cuotas WHERE prestamos_pr_id = ?', [id_prestamo], function (err, result) {
                            if (err) throw err

                            // Elimina el prestamo.
                            db.query('DELETE FROM prestamos WHERE pr_id = ?', [id_prestamo], function (err, result) {
                                if (err) throw err

                                // Elimina la solicitud.
                                db.query('DELETE FROM solicitudes WHERE sl_id = ?', [id_solicitud_prestamo], function (err, result) {
                                    if (err) throw err

                                    // Incrementa el contador de peticiones.
                                    peticion_db++;

                                    // Verifica si se ha ejecutado la ultima peticion en base de datos y en caso afirmativo renderiza la pagina de creacion pasandole el objeto que define su contenido.
                                    if (peticion_db == parseInt(i) + 1) {

                                        // Elimina los historiales para el cliente.
                                        db.query('DELETE FROM clientes_historial WHERE clientes_datos_identificativos_cl_id = ?', [id_cliente_datos_identificativos], function (err, result) {
                                            if (err) throw err

                                            // Elimina el cliente.
                                            db.query('DELETE FROM clientes_datos_identificativos WHERE cl_id = ? LIMIT 1', [id_cliente_datos_identificativos], function (err, result) {
                                                if (err) throw err

                                                res.redirect("/");

                                            });
                                        });
                                    };
                                });
                            });
                        });
                    } else {

                        db.query('DELETE FROM solicitudes WHERE sl_id = ?', [id_solicitud], function (err, result) {
                            if (err) throw err

                            // Incrementa el contador de peticiones.
                            peticion_db++;

                            // Verifica si se ha ejecutado la ultima peticion en base de datos y en caso afirmativo renderiza la pagina de creacion pasandole el objeto que define su contenido.
                            if (peticion_db == parseInt(i) + 1) {

                                // Elimina los historiales para el cliente.
                                db.query('DELETE FROM clientes_historial WHERE clientes_datos_identificativos_cl_id = ?', [id_cliente_datos_identificativos], function (err, result) {
                                    if (err) throw err

                                    // Elimina el cliente.
                                    db.query('DELETE FROM clientes_datos_identificativos WHERE cl_id = ? LIMIT 1', [id_cliente_datos_identificativos], function (err, result) {
                                        if (err) throw err

                                        res.redirect("/");

                                    });
                                });
                            };
                        });
                    };
                });
            };
        };
    });
};


/* Visualiza las solicitudes del cliente. */
//------------------------------------------

var visualizarSolicitudesCliente = function (req, res, next) {

    var id_cliente_datos_identificativos = req.params.id_cliente_datos_identificativos.slice(1);
    var id_cliente_historial = req.query.cl_id_historial;

    db.query('SELECT cl_id FROM clientes_datos_identificativos WHERE cl_id = ? LIMIT 1', [id_cliente_datos_identificativos], function (err, result) {
        if (err) throw err

        if (result[0] != undefined) {

            console.log("Recuperando solicitudes cliente " + id_cliente_datos_identificativos);

            // Crea el objeto que contiene las variables de la pagina.
            var variables_pagina_solicitudes_cliente = {

                // Define el nombre de la pagina:
                nombre_pagina: "Solicitudes cliente",

                // Carga los scripts especificos para la pagina:
                scripts_pagina: '<script src="/scripts/scr_solicitudes_cliente.js"></script>',

                // Vectores para la generación de elementos HTML dinamicos:
                lista_solicitudes_cliente: [],

                // DATOS CLIENTE
                // -------------

                valor_cl_id: id_cliente_datos_identificativos,
                valor_cl_id_historial: id_cliente_historial,

                // Indicador de existencia de una solocitud activa (pendiente o aprobada):
                valor_cl_existencia_prestamo_activo: 0,

            };

            // Verifica si hay alguna solicitud pendiente o activa y si hay una activa si el prestamo esta finalizado. 
            db.query('SELECT sl_id FROM solicitudes WHERE clientes_cl_id = ? AND (sl_estado = ? OR sl_estado = ?) AND sl_prestamo_finalizado = ? LIMIT 1', [id_cliente_datos_identificativos, "2", "1", 0], function (err, result) {
                if (err) throw err

                if (result[0] != undefined) {
                    variables_pagina_solicitudes_cliente.valor_cl_existencia_prestamo_activo = 1;
                } else {
                    variables_pagina_solicitudes_cliente.valor_cl_existencia_prestamo_activo = 0;
                }

                // Recupera el nombre el apellido del cliente.
                db.query('SELECT cl_nombre, cl_apellido FROM clientes_datos_identificativos WHERE cl_id = ? LIMIT 1', [id_cliente_datos_identificativos], function (err, result) {
                    if (err) throw err

                    variables_pagina_solicitudes_cliente.valor_nombre_cliente = result[0].cl_nombre + " " + result[0].cl_apellido;

                    // Recupera el id del ultimo historial del cliente.
                    db.query('SELECT cl_id_historial FROM clientes_historial WHERE clientes_datos_identificativos_cl_id = ? ORDER BY cl_id_historial DESC LIMIT 1', [id_cliente_datos_identificativos], function (err, result) {
                        if (err) throw err

                        variables_pagina_solicitudes_cliente.valor_cl_id_historial = result[0].cl_id_historial;

                        // Recupera los datos de las solicitudes para formatearlas en bootgrid.
                        db.query('SELECT sl_id, clientes_cl_id, clientes_historial_cl_id_historial, sl_cantidad_solicitada, sl_fecha_recepcion, sl_fecha_creacion, sl_estado, sl_prestamo_finalizado FROM solicitudes WHERE clientes_cl_id = ?', [id_cliente_datos_identificativos], function (err, result) {
                            if (err) throw err

                            var lista_solicitudes_cliente = [];

                            // Si hay solicitudes para cada una de ella se almacenan sol datos en un array de objetos.
                            if (result[0] != undefined) {

                                // Declara el contador de peticiones a base de datos para operaciones de seleccion ciclica que determinara cuando renderizar la pagina.
                                var peticion_db = 0;

                                var numero_solicitudes = result.length;

                                for (i in result) {

                                    var id_solicitud = result[i].sl_id;

                                    var estado_solicitud;
                                    var estado_prestamo;

                                    var elementos_fecha_recepcion = result[i].sl_fecha_recepcion.split("-");
                                    var formato_fecha_recepcion_DD_MM_AAAA = elementos_fecha_recepcion[2] + "-" + elementos_fecha_recepcion[1] + "-" + elementos_fecha_recepcion[0];

                                    var elementos_fecha_creacion = result[i].sl_fecha_creacion.split("-");
                                    var formato_fecha_creacion_DD_MM_AAAA = elementos_fecha_creacion[2].substring(0, 3) + "-" + elementos_fecha_creacion[1] + "-" + elementos_fecha_creacion[0];

                                    if (result[i].sl_estado == 1) {
                                        estado_solicitud = "Pendiente";
                                        estado_prestamo = "No activado";

                                    } else if (result[i].sl_estado == 2) {
                                        estado_solicitud = "Aceptada";
                                        //estado_prestamo = "Por determinar";

                                    } else if (result[i].sl_estado == 3) {
                                        estado_solicitud = "Rechazada";
                                        //estado_prestamo = "Rechazado";

                                    };

                                    // Rellena el objeto con los datos de la solicitud y lo guarda en el array.
                                    variables_pagina_solicitudes_cliente.lista_solicitudes_cliente.push({
                                        sl_id: result[i].sl_id,
                                        clientes_cl_id: result[i].clientes_cl_id,
                                        clientes_historial_cl_id_historial: result[i].clientes_historial_cl_id_historial,
                                        sl_cantidad_solicitada: (result[i].sl_cantidad_solicitada).toFixed(2),
                                        sl_fecha_recepcion: formato_fecha_recepcion_DD_MM_AAAA,
                                        sl_fecha_creacion: formato_fecha_creacion_DD_MM_AAAA,
                                        sl_estado: estado_solicitud,
                                        sl_prestamo_finalizado: estado_prestamo
                                    });

                                    // Verifica si hay un prestamo y en caso afirmativo recupera su estado guardandolo en el relativo objeto.
                                    db.query('SELECT pr_estado FROM prestamos WHERE solicitudes_sl_id = ?', [id_solicitud], function (err, result) {
                                        if (err) throw err

                                        if (result[0] != undefined) {
                                            if (result[0].pr_estado == 1) {
                                                estado_prestamo = "Activado";
                                            } else if (result[0].pr_estado == 2) {
                                                estado_prestamo = "En mora";
                                            } else if (result[0].pr_estado == 3) {
                                                estado_prestamo = "Finalizado";
                                            } else if (result[0].pr_estado == 4) {
                                                estado_prestamo = "Finalizado con mora";
                                            }
                                        } else {

                                            if (variables_pagina_solicitudes_cliente.lista_solicitudes_cliente[peticion_db].sl_estado == "Rechazada") {
                                                estado_prestamo = "No concedido";
                                            } else {
                                                estado_prestamo = "No activado";
                                            }
                                        }

                                        variables_pagina_solicitudes_cliente.lista_solicitudes_cliente[peticion_db].sl_prestamo_finalizado = estado_prestamo;

                                        if (peticion_db == numero_solicitudes - 1) {

                                            // Renderiza la pagina de visualizacion pasandole el objeto que define su contenido.
                                            res.render('visualizacion_solicitudes_cliente', variables_pagina_solicitudes_cliente);
                                        };

                                        // Incrementa el contador de peticiones.
                                        peticion_db++;
                                    });
                                };
                            } else {

                                // Renderiza la pagina de visualizacion pasandole el objeto que define su contenido.
                                res.render('visualizacion_solicitudes_cliente', variables_pagina_solicitudes_cliente);

                            }
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
        }
    });
};


/* Verifica si el cliente ya existe por medio del numero de docuemento. */
//---------------------------------------------------------------------------

var verificarCliente = function (req, res, next) {

    var tipo_documento = req.body.cl_tipo_documento;
    var numero_documento = req.body.cl_numero_documento;

    //console.log(tipo_documento);
    //console.log(numero_documento);

    db.query('SELECT cl_id FROM clientes_datos_identificativos WHERE cl_tipo_documento = ? AND cl_numero_documento = ? LIMIT 1', [tipo_documento, numero_documento], function (err, result) {
        if (err) throw err

        var respuesta = [];

        // Si no existe envia la respuesta afirmativa al validador.
        if (result[0] == undefined) {
            respuesta[0] = {
                "valid": true
            };
        } else {
            var respuesta = [];
            respuesta[0] = {
                "valid": false
            };
        };
        res.send(JSON.stringify(respuesta[0]));
    });
};


/* Exporta las funciones del controller. */
//-----------------------------------------

exports.cargarBuscadorClientes = cargarBuscadorClientes;
exports.buscarClientes = buscarClientes;
exports.crearCliente = crearCliente;
exports.modificarCliente = modificarCliente;
exports.guardarCliente = guardarCliente;
exports.guardarClienteModificado = guardarClienteModificado;
exports.visualizarCliente = visualizarCliente;
exports.eliminarCliente = eliminarCliente;
exports.verificarCliente = verificarCliente;
exports.visualizarSolicitudesCliente = visualizarSolicitudesCliente;