/* Incluye el modulo para las peticiones a base de datos. */
//----------------------------------------------------------

var db = require("../config/db_development");


/* Crea el objeto que define las variables del buscador. */
//---------------------------------------------------------

var variables_pagina_buscador = {

    // PROPIEDADES ELEMENTOS PAGINA
    // ----------------------------

    // Define el nombre de la pagina:
    nombre_pagina: "Buscar solicitudes",

    // Carga los scripts especificos para la pagina:
    scripts_pagina: '<script src="/scripts/scr_buscador_solicitudes.js"></script>',
    
    // Grupo de asignacion:
    valor_sl_grupo: {
        seleccionado: "0"
    },
    
    // Producto seleccionado:
    valor_sl_producto: {
        seleccionado: "0"
    },
    
    // Cantidad desde seleccionada:
    valor_sl_cantidad_desde: {
        seleccionado: "0"
    },
    
    // Cantidad hasta seleccionada:
    valor_sl_cantidad_hasta: {
        seleccionado: "0"
    },

    // Vectores para la generación de elementos HTML dinamicos:
    lista_grupos: [],
    lista_productos: [],
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

    // Carga los scripts especificos para la pagina:
    scripts_pagina: "",

    // Define las propiedades del formulario:
    valor_id_formulario: "",
    valor_metodo_formulario: "",
    valor_action_formulario: "",

    // Define el estado de los elementos del formulario:
    estado_control_formulario: "",
    visibilidad: "",

    // Define el limite maximo de la fecha de recepcion:
    limite_max_fecha_recepcion: "",

    // DATOS SOLICITUD
    // ---------------

    valor_cl_id: "",
    valor_cl_id_historial: "",
    valor_sl_id: "",

    valor_nombre_cliente: "",
    valor_sl_fecha_recepcion: "",
    valor_sl_producto: {
        seleccionado: "no_seleccionado"
    },
    valor_sl_cantidad_solicitada: {
        seleccionado: "no_seleccionado"
    },
    valor_sl_numero_cuenta_transferencia: "",
    valor_sl_nombre_banco_transferencia: "",
    valor_sl_comentarios: "",
    valor_sl_estado: {
        seleccionado: "1"
    },

    // Indicador de existencia de un prestamo:
    valor_cl_existencia_prestamo: 0,

    // Vectores para la generación de elementos HTML dinamicos:
    lista_productos: []
};


/* Define las propiedades de los elementos de la pagina de creacion de una nueva solicitud. */
//--------------------------------------------------------------------------------------------

function inicializaPaginaCreacionSolicitud() {

    // PROPIEDADES ELEMENTOS PAGINA
    // ----------------------------

    // Define el nombre de la pagina:
    variables_pagina.nombre_pagina = 'Crear solicitud';

    // Define las propiedades para la primera ventana modal (Cancelacion de la operacion de creacion):
    variables_pagina.titulo_ventana_modal_1 = 'Cancelar introduccion datos';
    variables_pagina.texto_ventana_modal_1 = 'Los datos no han sido guardados.<br>Esta seguro que desea cancelar la creacion de la solicitud de prestamo?';
    variables_pagina.comando_btn_confirmacion_1 = '<a href="/" class="btn btn-primary">Confirmar</a>';

    // Define las propiedades para la segunda ventana modal (Guardado de nueva solicitud):
    variables_pagina.titulo_ventana_modal_2 = 'Guardar solicitud';
    variables_pagina.texto_ventana_modal_2 = 'Esta guardando una nueva solicitud de prestamo.<br>Desea confirmar la operacion?';
    variables_pagina.comando_btn_confirmacion_2 = '<button class="btn btn-success" type="submit" form="formulario_solicitud" id="envia_formulario">Confirmar</button>';

    // Carga los scripts especificos para la pagina:
    variables_pagina.scripts_pagina = '<script src="/scripts/scr_solicitudes.js"></script>';

    // Define las propiedades del formulario:
    variables_pagina.valor_id_formulario = "formulario_solicitud";
    variables_pagina.valor_metodo_formulario = "method=post";
    variables_pagina.valor_action_formulario = "action=/guardar_solicitud";

    // Define el estado de los elementos del formulario:
    variables_pagina.estado_control_formulario = "";
    variables_pagina.visibilidad = "";

    // Define el limite maximo de la fecha de recepcion:
    var limite_max_fecha_recepcion = new Date();
    var dia = limite_max_fecha_recepcion.getDate();
    if (dia < 10) dia = "0" + dia;
    var mes = limite_max_fecha_recepcion.getMonth() + 1;
    var ano = limite_max_fecha_recepcion.getFullYear();
    variables_pagina.limite_max_fecha_recepcion = ano + "-" + mes + "-" + dia;
};


/* Define las propiedades de los elementos de la pagina de modificacion de una solicitud. */
//------------------------------------------------------------------------------------------

function inicializaPaginaModificacionSolicitud() {

    // PROPIEDADES ELEMENTOS PAGINA
    // ----------------------------

    // Define el nombre de la pagina:
    variables_pagina.nombre_pagina = 'Modificar solicitud';

    // Define las propiedades para la primera ventana modal (Cancelacion de la operacion de modificacion):
    variables_pagina.titulo_ventana_modal_1 = 'Cancelar introduccion datos';
    variables_pagina.texto_ventana_modal_1 = 'Los datos no han sido guardados.<br>Esta seguro que desea cancelar la modificacion del los datos de la solicitud?';
    variables_pagina.comando_btn_confirmacion_1 = '<a href="/" class="btn btn-primary">Confirmar</a>';

    // Define las propiedades para la segunda ventana modal (Actualizacion de los datos de la solicitud):
    variables_pagina.titulo_ventana_modal_2 = 'Guardar solicitud';
    variables_pagina.texto_ventana_modal_2 = 'Esta guardando los datos actualizados de la solicitud.<br>Desea confirmar la operacion?';
    variables_pagina.comando_btn_confirmacion_2 = '<button class="btn btn-success" type="submit" form="formulario_solicitud" id="envia_formulario">Confirmar</button>';

    // Carga los scripts especificos para la pagina:
    variables_pagina.scripts_pagina = '<script src="/scripts/scr_solicitudes.js"></script>';

    // Define los atriutos del formulario:
    variables_pagina.valor_id_formulario = "formulario_solicitud";
    variables_pagina.valor_metodo_formulario = "method=post";
    variables_pagina.valor_action_formulario = "action=/guardar_solicitud_modificada";

    // Define el estado de los elementos del formulario:
    variables_pagina.estado_control_formulario = "";
    variables_pagina.visibilidad = "";

    // Define el limite maximo de la fecha de recepcion:
    var limite_max_fecha_recepcion = new Date();
    var dia = limite_max_fecha_recepcion.getDate();
    if (dia < 10) dia = "0" + dia;
    var mes = limite_max_fecha_recepcion.getMonth() + 1;
    var ano = limite_max_fecha_recepcion.getFullYear();
    variables_pagina.limite_max_fecha_recepcion = ano + "-" + mes + "-" + dia;
};


/* Define las propiedades de los elementos de la ficha de la solicitud. */
//------------------------------------------------------------------------

function inicializaFichaSolicitud() {

    // PROPIEDADES ELEMENTOS PAGINA
    // ----------------------------

    // Define el nombre de la pagina:
    variables_pagina.nombre_pagina = 'Ficha solicitud';

    // Define las propiedades para la primera ventana modal (Eliminacion de la solicitud):
    variables_pagina.titulo_ventana_modal_1 = 'Eliminar solicitud';
    variables_pagina.texto_ventana_modal_1 = 'Está intentando eliminar la solicitud, la operacion no es reversible,<br>si ha sido activado un prestamo y se confirma la eliminacion de la solicitud se eliminara tambien el prestamo activado.<br>Desea confirmar la operacion?';

    // Carga los scripts especificos para la pagina:
    variables_pagina.scripts_pagina = '<script src="/scripts/scr_solicitudes.js"></script>';

    // Define las propiedades del formulario:
    variables_pagina.valor_id_formulario = "formulario_solicitud";
    variables_pagina.valor_metodo_formulario = "method=get";
    variables_pagina.valor_action_formulario = "action=/modificar_solicitud";

    // Define el estado de los elementos del formulario:
    variables_pagina.estado_control_formulario = "disabled";
    variables_pagina.visibilidad = "ocultado";
};


/* Inicializa los elementos del buscador de solicitudes y renderiza la pagina. */
//----------------------------------------------------------------------------

function inicializaBuscadorSolicitudes(res) {

    // Inicializa lo vectores para la generación de elementos HTML dinamicos.
    variables_pagina_buscador.lista_grupos = [];
    variables_pagina_buscador.lista_productos = [];
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
                    res.render('buscador_solicitudes', variables_pagina_buscador);
                });
            });
        });
    });
};


/* Carga el buscador de las solicitudes. */
//-----------------------------------------

var cargarBuscadorSolicitudes = function (req, res, next) {
    
    console.log("Inicializando el buscador de solicitudes");

    // Inicializa el buscador y renderiza la pagina.
    inicializaBuscadorSolicitudes(res);
};


/* Ejecuta la busqueda de solicitudes. */
//--------------------------------------

var buscarSolicitudes = function (req, res, next) {
    
	console.log("Recuperando resultados e inicializando el buscador de solicitudes");
	
	console.log(req.query);
	
    // Inicializa el buscador y renderiza la pagina.
    inicializaBuscadorSolicitudes(res);
};


/* Visualiza la pagina para la creacion de una nueva solicitud. */
// ---------------------------------------------------------------

var crearSolicitud = function (req, res, next) {

    console.log("Creando solicitud");

    // Asigna los datos del cliente a las variables de pagina.
    variables_pagina.valor_cl_id = req.query.cl_id;
    variables_pagina.valor_cl_id_historial = req.query.cl_id_historial;

    // Inicializa la pagina.

    // PROPIEDADES ELEMENTOS PAGINA
    // ----------------------------

    inicializaPaginaCreacionSolicitud();

    // Inicializa los valores del formulario para la creacion de una nueva solicitud.

    // DATOS SOLICITUD
    // ---------------

    variables_pagina.valor_sl_id = "";
    variables_pagina.valor_sl_fecha_recepcion = "";
    variables_pagina.valor_sl_producto = {
        seleccionado: "no_seleccionado"
    };
    variables_pagina.valor_sl_cantidad_solicitada = {
        seleccionado: "no_seleccionado"
    };
    variables_pagina.valor_sl_numero_cuenta_transferencia = "";
    variables_pagina.valor_sl_nombre_banco_transferencia = "";
    variables_pagina.valor_sl_comentarios = "";
    variables_pagina.valor_sl_estado = {
        seleccionado: "1"
    };

    // Indicador de existencia de un prestamo:
    variables_pagina.valor_sl_existencia_prestamo = 0;

    // Inicializa lo vectores para la generación de elementos HTML dinamicos.
    variables_pagina.lista_productos = [];

    // Recupera el nombre y el apellido del cliente.
    db.query('SELECT cl_nombre, cl_apellido FROM clientes_datos_identificativos WHERE cl_id = ? LIMIT 1', [variables_pagina.valor_cl_id], function (err, result) {
        if (err) throw err;

        variables_pagina.valor_nombre_cliente = result[0].cl_nombre + " " + result[0].cl_apellido;

        // Recupera los productos.
        db.query('SELECT pd_id, pd_nombre FROM productos WHERE pd_estado = ?', ['1'], function (err, result) {
            if (err) throw err;

            for (n in result) variables_pagina.lista_productos.push({
                id_producto: result[n].pd_id,
                nombre_producto: result[n].pd_nombre
            });

            // Renderiza la pagina de crecion pasandole el objeto que define su contenido.
            res.render('creacion_modificacion_solicitud', variables_pagina);
        });
    });
};


/* Guarda los datos de la nueva solicitud en la base de datos y visualiza su ficha. */
//--------------------------------------------------------------------------------

var guardarSolicitud = function (req, res, next) {

    console.log("Guardando nueva solicitud");

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
    var elementos_fecha_recepcion = req.body.sl_fecha_recepcion.split("/");

    // Convierte la fecha de recepcion en el formato reconocido por MySQL.
    var fecha_recepcion = new Date(elementos_fecha_recepcion[2], elementos_fecha_recepcion[1] - 1, elementos_fecha_recepcion[0]);

    // Guarda los datos validados en base de datos y si la operacion ha tenido exito ejecuta el codigo que sigue.
    db.query('INSERT INTO solicitudes SET ?', {

        // Claves foraneas:
        productos_pd_id: req.body.sl_producto,
        clientes_cl_id: req.body.cl_id,
        clientes_historial_cl_id_historial: req.body.cl_id_historial,

        // Datos solicitud:
        sl_fecha_recepcion: fecha_recepcion,
        sl_producto: req.body.sl_producto,
        sl_cantidad_solicitada: req.body.sl_cantidad_solicitada,
        sl_numero_cuenta_transferencia: req.body.sl_numero_cuenta_transferencia,
        sl_nombre_banco_transferencia: req.body.sl_nombre_banco_transferencia,
        sl_comentarios: req.body.sl_comentarios,
        sl_estado: req.body.sl_estado,
        sl_prestamo_finalizado: 0,
        sl_fecha_creacion: fecha_creacion,
        sl_fecha_ultima_modificacion: fecha_creacion,

    }, function (err, result) {
        if (err) throw err;

        // Recupera el id de la solicitud que se acaba de guardar y redirecciona a la pagina de visualizacion. 
        var id_solicitud = result.insertId;
        res.redirect("/visualizar_solicitud/:" + id_solicitud + "/:" + req.body.cl_id + "/:" + req.body.cl_id_historial);
    });
};


/* Visualiza la pagina con el formulario para la modificacion de los datos de una solicitud. */
//------------------------------------------------------------------------------------------

var modificarSolicitud = function (req, res, next) {

    console.log("Modificando solicitud");

    // Recupera los datos de la solicitud para su succesiva modificacion.

    // Asigna los datos del cliente a las variables de pagina.
    variables_pagina.valor_cl_id = req.query.cl_id;
    variables_pagina.valor_cl_id_historial = req.query.cl_id_historial;

    // Inicializa la pagina que se mostrará tras haber recuperado los datos y asigna los valores recuperados a los campos del formulario.

    // PROPIEDADES ELEMENTOS PAGINA
    // ----------------------------

    inicializaPaginaModificacionSolicitud();

    // DATOS SOLICITUD
    // ---------------

    variables_pagina.valor_sl_id = req.query.sl_id;
    variables_pagina.valor_sl_fecha_recepcion = req.query.sl_fecha_recepcion;
    variables_pagina.valor_sl_producto = {
        seleccionado: req.query.sl_producto
    };
    variables_pagina.valor_sl_cantidad_solicitada = {
        seleccionado: req.query.sl_cantidad_solicitada
    };
    variables_pagina.valor_sl_numero_cuenta_transferencia = req.query.sl_numero_cuenta_transferencia;
    variables_pagina.valor_sl_nombre_banco_transferencia = req.query.sl_nombre_banco_transferencia;
    variables_pagina.valor_sl_comentarios = req.query.sl_comentarios;
    variables_pagina.valor_sl_estado = {
        seleccionado: req.query.sl_estado
    };

    // Indicador de existencia de alguna solocitud:
    variables_pagina.valor_sl_existencia_prestamo = req.query.sl_existencia_prestamo;

    // Inicializa lo vectores para la generación de elementos HTML dinamicos.
    variables_pagina.lista_productos = [];

    // Recupera los productos.
    db.query('SELECT pd_id, pd_nombre FROM productos WHERE pd_estado = ?', ['1'], function (err, result) {
        if (err) throw err;

        for (n in result) variables_pagina.lista_productos.push({
            id_producto: result[n].pd_id,
            nombre_producto: result[n].pd_nombre
        });

        // Recupera el nombre y el apellido del cliente.
        db.query('SELECT cl_nombre, cl_apellido FROM clientes_datos_identificativos WHERE cl_id = ? LIMIT 1', [variables_pagina.valor_cl_id], function (err, result) {
            if (err) throw err;

            variables_pagina.valor_nombre_cliente = result[0].cl_nombre + " " + result[0].cl_apellido;

            // Renderiza la pagina de crecion pasandole el objeto que define su contenido.
            res.render('creacion_modificacion_solicitud', variables_pagina);
        })
    });
};


/* Guarda los datos modificados de una solicitud en la base de datos y visualiza su ficha. */
//-------------------------------------------------------------------------------------------

var guardarSolicitudModificada = function (req, res, next) {

    console.log("Guardando solicitud modificada");

    var id_solicitud = req.body.sl_id;

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

    // Recupera los elementos desde el datepicker para generar el formato de fecha reconocido por MySQL.
    var elementos_fecha_recepcion = req.body.sl_fecha_recepcion.split("/");

    // Convierte la fecha de recepcion en el formato reconocido por MySQL.
    var fecha_recepcion = new Date(elementos_fecha_recepcion[2], elementos_fecha_recepcion[1] - 1, elementos_fecha_recepcion[0]);
    
    // Guarda los datos validados en base de datos y si la operacion ha tenido exito ejecuta el codigo que sigue.
    db.query('UPDATE solicitudes SET ? WHERE sl_id = ?', [{

        // Datos solicitud:
        sl_fecha_recepcion: fecha_recepcion,
        sl_producto: req.body.sl_producto,
        sl_cantidad_solicitada: req.body.sl_cantidad_solicitada,
        sl_numero_cuenta_transferencia: req.body.sl_numero_cuenta_transferencia,
        sl_nombre_banco_transferencia: req.body.sl_nombre_banco_transferencia,
        sl_comentarios: req.body.sl_comentarios,
        sl_estado: req.body.sl_estado,
        sl_fecha_ultima_modificacion: fecha_modificacion

	}, id_solicitud], function (err, result) {
        if (err) throw err;

        // Redirecciona a la pagina de visualizacion pasando el id de la solicitud, el id de los datos identificativos del cliente y el id del historial de datos del cliente a la funcion.
        res.redirect("/visualizar_solicitud/:" + id_solicitud + "/:" + req.body.cl_id + "/:" + req.body.cl_id_historial);
    });
};


/* Visualiza la ficha de la solicitud. */
//---------------------------------------

var visualizarSolicitud = function (req, res, next) {

    console.log("Visualizando solicitud");

    // Recupera los parametros enviados con la llamada a la funcion.
    var id_solicitud = req.params.id_solicitud.slice(1);
    var id_cliente_datos_identificativos = req.params.id_cliente_datos_identificativos.slice(1);
    var id_cliente_historial = req.params.id_cliente_historial.slice(1);

    // Los asigna a las variables de pagina.
    variables_pagina.valor_sl_id = id_solicitud;
    variables_pagina.valor_cl_id = id_cliente_datos_identificativos;
    variables_pagina.valor_cl_id_historial = id_cliente_historial;

    // Recupera el nombre y el apellido del cliente.
    db.query('SELECT cl_nombre, cl_apellido FROM clientes_datos_identificativos WHERE cl_id = ? LIMIT 1', [id_cliente_datos_identificativos], function (err, result) {
        if (err) throw err;

        variables_pagina.valor_nombre_cliente = result[0].cl_nombre + " " + result[0].cl_apellido;

        // Recupera los datos de una solicitud desde base de datos.
        db.query('SELECT * FROM solicitudes WHERE sl_id = ? AND clientes_cl_id = ? AND clientes_historial_cl_id_historial = ? LIMIT 1', [id_solicitud, id_cliente_datos_identificativos, id_cliente_historial], function (err, result) {
            if (err) throw err;

            // Si existe el resultados lo mostra sino redirecciona a la pagina de error.
            if (result[0] != undefined) {

                if (result[0].sl_estado == 1 || result[0].sl_estado == 2) {
                    variables_pagina.valor_info_prestamo = "<br><div class=\"alert alert-warning\"><strong>Informacion: </strong>Todavia no ha sido activado un prestamo para la solicitud.</div>";
                } else if (result[0].sl_estado == 3) {
                    variables_pagina.valor_info_prestamo = "<br><div class=\"alert alert-danger\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\">&nbsp;</span><strong>Informacion: </strong>La solicitud ha sido rechazada.</div>";
                }

                // Inicizliza la ficha de la solicitud en la que se mostraran los datos que se acaban de recuperar.

                // PROPIEDADES ELEMENTOS PAGINA
                // ----------------------------

                inicializaFichaSolicitud();

                // Define la propiedad para el boton de eliminacion pasandole los parametros.
                variables_pagina.comando_btn_confirmacion_1 = '<a href="/eliminar_solicitud/:' + id_solicitud + '" class="btn btn-danger">Confirmar</a>';

                // Asigna los valores recuperados a los campos del formulario.

                // DATOS SOLICITUD
                // ---------------

                // Convierte la fecha de recepcion desde el formato YYYY-MM-DD al formato DD/MM/YYYY.
                var fecha_recepcion = result[0].sl_fecha_recepcion.split("-");

                variables_pagina.valor_sl_fecha_recepcion = fecha_recepcion[2] + "/" + fecha_recepcion[1] + "/" + fecha_recepcion[0];
                variables_pagina.valor_sl_producto = {
                    seleccionado: result[0].sl_producto
                };
                variables_pagina.valor_sl_cantidad_solicitada = {
                    seleccionado: result[0].sl_cantidad_solicitada
                };
                variables_pagina.valor_sl_numero_cuenta_transferencia = result[0].sl_numero_cuenta_transferencia;
                variables_pagina.valor_sl_nombre_banco_transferencia = result[0].sl_nombre_banco_transferencia;
                variables_pagina.valor_sl_comentarios = result[0].sl_comentarios;
                variables_pagina.valor_sl_estado = {
                    seleccionado: result[0].sl_estado
                };

                // Indicador de existencia de un prestamo:
                variables_pagina.valor_cl_existencia_prestamo = 0;

                // Inicializa lo vectores para la generación de elementos HTML dinamicos.
                variables_pagina.lista_productos = [];

                // Recupera los productos.
                db.query('SELECT pd_id, pd_nombre FROM productos WHERE pd_estado = ?', ['1'], function (err, result) {
                    if (err) throw err;

                    for (n in result) variables_pagina.lista_productos.push({
                        id_producto: result[n].pd_id,
                        nombre_producto: result[n].pd_nombre
                    });

                    // Verifica si hay algun prestamo activo para la solicitud.
                    db.query('SELECT pr_id, pr_estado, pr_fecha_finalizacion FROM prestamos WHERE solicitudes_sl_id = ? LIMIT 1', [id_solicitud], function (err, result) {
                        if (err) throw err;

                        if (result[0] != undefined) {

                            // Indicador de existencia de un prestamo:
                            variables_pagina.valor_sl_existencia_prestamo = 1;

                            if (result[0].pr_estado == 1) {
                                variables_pagina.valor_info_prestamo = "<br><div class=\"alert alert-info\"><strong>Informacion: </strong>Hay un prestamo activado para esta solicitud.</div>";
                            } else if (result[0].pr_estado == 2) {
                                variables_pagina.valor_info_prestamo = "<br><div class=\"alert alert-danger\"><strong>Informacion: </strong>El prestamo activado para esta solicitud esta en mora.</div>";
                            } else if (result[0].pr_estado == 3) {
                                var elementos_fecha_finalizacion = result[0].pr_fecha_finalizacion.split("-");
                                var formato_fecha_finalizacion_DD_MM_AAAA = elementos_fecha_finalizacion[2] + "-" + elementos_fecha_finalizacion[1] + "-" + elementos_fecha_finalizacion[0];
                                variables_pagina.valor_info_prestamo = "<br><div class=\"alert alert-success\"><span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\">&nbsp;</span><strong>Informacion: </strong>El prestamo activado para esta solicitud ha sido finalizado el dia: <strong>" + formato_fecha_finalizacion_DD_MM_AAAA + "</strong></div>";
                            } else if (result[0].pr_estado == 4) {
                                var elementos_fecha_finalizacion = result[0].pr_fecha_finalizacion.split("-");
                                var formato_fecha_finalizacion_DD_MM_AAAA = elementos_fecha_finalizacion[2] + "-" + elementos_fecha_finalizacion[1] + "-" + elementos_fecha_finalizacion[0];
                                variables_pagina.valor_info_prestamo = "<br><div class=\"alert alert-danger\"><span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\">&nbsp;</span><strong>Informacion: </strong>El prestamo activado para esta solicitud ha sido finalizado con mora el dia: <strong>" + formato_fecha_finalizacion_DD_MM_AAAA + "</strong></div>";
                            };

                            // Renderiza la pagina de visualizacion pasandole el objeto que define su contenido.
                            res.render('visualizacion_solicitud', variables_pagina);

                        } else {
                            // Indicador de existencia de un prestamo:
                            variables_pagina.valor_sl_existencia_prestamo = 0;

                            // Renderiza la pagina de visualizacion pasandole el objeto que define su contenido.
                            res.render('visualizacion_solicitud', variables_pagina);
                        }
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


/* Elimina la solicitud. */
//-------------------------

var eliminarSolicitud = function (req, res, next) {

    var id_solicitud = req.params.id_solicitud.slice(1);

    console.log("Eliminando solicitud " + id_solicitud);

    db.query('SELECT pr_id FROM prestamos WHERE solicitudes_sl_id = ? LIMIT 1', [id_solicitud], function (err, result) {
        if (err) throw err

        if (result[0] != undefined) {

            var id_prestamo = result[0].pr_id;

            db.query('DELETE FROM cuotas WHERE prestamos_pr_id = ?', [id_prestamo], function (err, result) {
                if (err) throw err

                db.query('DELETE FROM prestamos WHERE pr_id = ?', [id_prestamo], function (err, result) {
                    if (err) throw err

                    // Recupera los datos del cliente para redireccionar a la ficha del cliente.
                    db.query('SELECT clientes_cl_id FROM solicitudes WHERE sl_id = ? LIMIT 1', [id_solicitud], function (err, result) {
                        if (err) throw err

                        var id_cliente = result[0].clientes_cl_id

                        db.query('DELETE FROM solicitudes WHERE sl_id = ?', [id_solicitud], function (err, result) {
                            if (err) throw err

                            // Redirecciona a la ficha de la solicitud.
                            res.redirect("/visualizar_solicitudes_cliente/:" + id_cliente);
                        });
                    });
                });
            });
        } else {

            // Recupera los datos del cliente para redireccionar a la ficha del cliente.
            db.query('SELECT clientes_cl_id FROM solicitudes WHERE sl_id = ? LIMIT 1', [id_solicitud], function (err, result) {
                if (err) throw err

                var id_cliente = result[0].clientes_cl_id

                db.query('DELETE FROM solicitudes WHERE sl_id = ?', [id_solicitud], function (err, result) {
                    if (err) throw err

                    // Redirecciona a la ficha de la solicitud.
                    res.redirect("/visualizar_solicitudes_cliente/:" + id_cliente);
                });
            });
        };
    });
};


/* Calcula las cantidades que hay que cargar en la select Cantidad del formulario solicitud. */
//---------------------------------------------------------------------------------------------

var calcularCantidadesProducto = function (req, res, next) {

    var producto_seleccionado = req.query.producto_seleccionado;

    db.query('SELECT pd_importe_minimo, pd_importe_maximo, pd_montos FROM productos WHERE pd_id = ? LIMIT 1', [producto_seleccionado], function (err, result) {
        if (err) throw err

        var importe_minimo = result[0].pd_importe_minimo;
        var importe_maximo = result[0].pd_importe_maximo;
        var montos = result[0].pd_montos;
        var cantidades = [];
        var variacion_importe = (importe_maximo - importe_minimo) / (montos - 1);

        for (var i = 0; i < montos; i++) {
            cantidades.push(importe_minimo + (variacion_importe * i));
        };

        res.send(JSON.stringify(cantidades));
    });
};


/* Recupera la cantidad que hay que seleccionar en la select cantidad al cargar la ficha solicitud. */
//----------------------------------------------------------------------------------------------------

var recuperarCantidadSolicitada = function (req, res, next) {

    var solicitud_activa = req.query.solicitud;

    db.query('SELECT sl_cantidad_solicitada FROM solicitudes WHERE sl_id = ? LIMIT 1', [solicitud_activa], function (err, result) {
        if (err) throw err

        var cantidad_solicitada = result[0].sl_cantidad_solicitada;
        res.send(JSON.stringify(cantidad_solicitada));
    });
};


/* Recupera el prestamo relacionado a una solicitud aprobada y ensena la ficha. */
//--------------------------------------------------------------------------------

var recuperarPrestamo = function (req, res, next) {

    var solicitud_aprobada = req.query.sl_id;
    var producto = req.query.sl_producto;
    var cantidad = req.query.sl_cantidad_solicitada;
    var cliente = req.query.cl_id;
    var historial_cliente = req.query.cl_id_historial;

    db.query('SELECT pr_id FROM prestamos WHERE solicitudes_sl_id = ? LIMIT 1', [solicitud_aprobada], function (err, result) {
        if (err) throw err

        res.redirect("/visualizar_prestamo/:" + result[0].pr_id + "/:" + producto + "/:" + solicitud_aprobada + "/:" + cliente + "/:" + historial_cliente);
    });
};


/* Exporta las funciones del controller. */
//-----------------------------------------

exports.cargarBuscadorSolicitudes = cargarBuscadorSolicitudes;
exports.buscarSolicitudes = buscarSolicitudes;
exports.crearSolicitud = crearSolicitud;
exports.guardarSolicitud = guardarSolicitud;
exports.modificarSolicitud = modificarSolicitud;
exports.guardarSolicitudModificada = guardarSolicitudModificada;
exports.visualizarSolicitud = visualizarSolicitud;
exports.eliminarSolicitud = eliminarSolicitud;
exports.calcularCantidadesProducto = calcularCantidadesProducto;
exports.recuperarCantidadSolicitada = recuperarCantidadSolicitada;
exports.recuperarPrestamo = recuperarPrestamo;