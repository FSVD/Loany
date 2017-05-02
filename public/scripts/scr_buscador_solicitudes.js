/* Calcula la fecha actual. */
//----------------------------

var fecha_actual;

$(document).ready(function () {
    var hoy = new Date();
    var dia = hoy.getDate();
    var mes = hoy.getMonth() + 1;
    var ano = hoy.getFullYear();
    fecha_actual = dia + "/" + mes + "/" + ano;
});


/* Limpia el contenido de los datepickers si uno de los dos resulta vacio. */
//---------------------------------------------------------------------------

$( document ).ready(function() {
	$('#sl_fecha_recepcion_desde').blur(function() {
		if ($('#sl_fecha_recepcion_desde').val() == '') {
            $('#sl_fecha_recepcion_hasta').val('');
            $('#selector_sl_fecha_recepcion_hasta').datepicker('update');
			$('#selector_sl_fecha_creacion_desde').datepicker('setEndDate', fecha_actual);
			$('#selector_sl_fecha_creacion_hasta').datepicker('setEndDate', fecha_actual);
        }
	});
	
	$('#sl_fecha_recepcion_hasta').blur(function() {
		if ($('#sl_fecha_recepcion_hasta').val() == '') {
            $('#sl_fecha_recepcion_desde').val('');
            $('#selector_sl_fecha_recepcion_desde').datepicker('update');
			$('#selector_sl_fecha_creacion_desde').datepicker('setEndDate', fecha_actual);
			$('#selector_sl_fecha_creacion_hasta').datepicker('setEndDate', fecha_actual);
        }
	});
	
	$('#sl_fecha_creacion_desde').blur(function() {
		if ($('#sl_fecha_creacion_desde').val() == '') {
            $('#sl_fecha_creacion_hasta').val('');
            $('#selector_sl_fecha_creacion_hasta').datepicker('update');
			$('#selector_sl_fecha_recepcion_desde').datepicker('setEndDate', fecha_actual);
			$('#selector_sl_fecha_recepcion_hasta').datepicker('setEndDate', fecha_actual);
        }
	});
	
	$('#sl_fecha_creacion_hasta').blur(function() {
		if ($('#sl_fecha_creacion_hasta').val() == '') {
            $('#sl_fecha_creacion_desde').val('');
            $('#selector_sl_fecha_creacion_desde').datepicker('update');
			$('#selector_sl_fecha_recepcion_desde').datepicker('setEndDate', fecha_actual);
			$('#selector_sl_fecha_recepcion_hasta').datepicker('setEndDate', fecha_actual);
        }
	});
});


/* Activa el datepicker para los campos fecha de la pagina. */
//------------------------------------------------------------

$( document ).ready(function() {
	$('#selector_sl_fecha_recepcion_desde').datepicker({
        format: 'dd/mm/yyyy',
		endDate: fecha_actual,
        orientation: "bottom",
        autoclose: true,
        language: "es"
    }).on('changeDate hide', function (e) {
		
		// Si se selecciona una fecha de creaccion se actualiza la fecha de inicio del los selectores fecha recepcion. 
		$('#selector_sl_fecha_creacion_desde').datepicker('setStartDate', $('#sl_fecha_recepcion_desde').val());
		$('#selector_sl_fecha_creacion_hasta').datepicker('setStartDate', $('#sl_fecha_recepcion_desde').val());
		
		// Revalida la fecha de creacion desde.
        $('#formulario_busqueda_solicitudes').bootstrapValidator('revalidateField', 'sl_fecha_recepcion_desde');
		
		// Actualiza la fecha de creacion hasta.
		if ($('#sl_fecha_recepcion_hasta').val() != "") {
			
			var elementos_fecha_desde = $('#sl_fecha_recepcion_desde').val().split("/");
			var fecha_desde = new Date(elementos_fecha_desde[2], elementos_fecha_desde[1], elementos_fecha_desde[0]);
			var elementos_fecha_hasta = $('#sl_fecha_recepcion_hasta').val().split("/");
			var fecha_hasta = new Date(elementos_fecha_hasta[2], elementos_fecha_hasta[1], elementos_fecha_hasta[0]);
			//console.log("Fecha hasta:"+fecha_hasta);
			
			if (fecha_desde > fecha_hasta) {
				$('#sl_fecha_recepcion_hasta').val($('#sl_fecha_recepcion_desde').val());
        		$('#formulario_busqueda_solicitudes').bootstrapValidator('revalidateField', 'sl_fecha_recepcion_hasta');
			}
		} else {
			$('#sl_fecha_recepcion_hasta').val($('#sl_fecha_recepcion_desde').val());
			$('#formulario_busqueda_solicitudes').bootstrapValidator('revalidateField', 'sl_fecha_recepcion_hasta');
		}
		
		// Actualiza el datepicker hasta.
		$('#selector_sl_fecha_recepcion_hasta').datepicker('update');
    });
	
    $('#selector_sl_fecha_recepcion_hasta').datepicker({
        format: 'dd/mm/yyyy',
		endDate: fecha_actual,
        orientation: "bottom",
        autoclose: true,
        language: "es"
    }).on('changeDate hide', function (e) {
        
        // Si se selecciona una fecha de creaccion se actualiza la fecha de inicio del los selectores fecha recepcion. 
		$('#selector_sl_fecha_creacion_desde').datepicker('setStartDate', $('#sl_fecha_recepcion_desde').val());
		$('#selector_sl_fecha_creacion_hasta').datepicker('setStartDate', $('#sl_fecha_recepcion_desde').val());
		
        // Revalida la fecha de creacion hasta
        $('#formulario_busqueda_solicitudes').bootstrapValidator('revalidateField', 'sl_fecha_recepcion_hasta');
		
		// Actualiza la fecha de creacion desde.
		if ($('#sl_fecha_recepcion_desde').val() != "") {
			
			var elementos_fecha_desde = $('#sl_fecha_recepcion_desde').val().split("/");
			var fecha_desde = new Date(elementos_fecha_desde[2], elementos_fecha_desde[1], elementos_fecha_desde[0]);
			var elementos_fecha_hasta = $('#sl_fecha_recepcion_hasta').val().split("/");
			var fecha_hasta = new Date(elementos_fecha_hasta[2], elementos_fecha_hasta[1], elementos_fecha_hasta[0]);
			//console.log("Fecha desde:"+fecha_desde);
			
			if (fecha_hasta < fecha_desde) {
				$('#sl_fecha_recepcion_desde').val($('#sl_fecha_recepcion_hasta').val());
        		$('#formulario_busqueda_solicitudes').bootstrapValidator('revalidateField', 'sl_fecha_recepcion_desde');
			}
		} else {
			$('#sl_fecha_recepcion_desde').val($('#sl_fecha_recepcion_hasta').val());
			$('#formulario_busqueda_solicitudes').bootstrapValidator('revalidateField', 'sl_fecha_recepcion_desde');
		}
		
		// Actualiza el datepicker desde.
		$('#selector_sl_fecha_recepcion_desde').datepicker('update');
    });
	
	$('#selector_sl_fecha_creacion_desde').datepicker({
        format: 'dd/mm/yyyy',
		endDate: fecha_actual,
        orientation: "bottom",
        autoclose: true,
        language: "es"
    }).on('changeDate hide', function (e) {
		
		// Si se selecciona una fecha de recepcion se actualiza la fecha de fin del los selectores fecha creaccion. 
		$('#selector_sl_fecha_recepcion_desde').datepicker('setEndDate', $('#sl_fecha_creacion_desde').val());
		$('#selector_sl_fecha_recepcion_hasta').datepicker('setEndDate', $('#sl_fecha_creacion_desde').val());
		
		// Revalida la fecha de creacion desde.
        $('#formulario_busqueda_solicitudes').bootstrapValidator('revalidateField', 'sl_fecha_creacion_desde');
		
		// Actualiza la fecha de creacion hasta.
		if ($('#sl_fecha_creacion_hasta').val() != "") {
			
			var elementos_fecha_desde = $('#sl_fecha_creacion_desde').val().split("/");
			var fecha_desde = new Date(elementos_fecha_desde[2], elementos_fecha_desde[1], elementos_fecha_desde[0]);
			var elementos_fecha_hasta = $('#sl_fecha_creacion_hasta').val().split("/");
			var fecha_hasta = new Date(elementos_fecha_hasta[2], elementos_fecha_hasta[1], elementos_fecha_hasta[0]);
			//console.log("Fecha hasta:"+fecha_hasta);
			
			if (fecha_desde > fecha_hasta) {
				$('#sl_fecha_creacion_hasta').val($('#sl_fecha_creacion_desde').val());
        		$('#formulario_busqueda_solicitudes').bootstrapValidator('revalidateField', 'sl_fecha_creacion_hasta');
			}
		} else {
			$('#sl_fecha_creacion_hasta').val($('#sl_fecha_creacion_desde').val());
			$('#formulario_busqueda_solicitudes').bootstrapValidator('revalidateField', 'sl_fecha_creacion_hasta');
		}
		
		// Actualiza el datepicker hasta.
		$('#selector_sl_fecha_creacion_hasta').datepicker('update');
    });
	
    $('#selector_sl_fecha_creacion_hasta').datepicker({
        format: 'dd/mm/yyyy',
		endDate: fecha_actual,
        orientation: "bottom",
        autoclose: true,
        language: "es"
    }).on('changeDate hide', function (e) {
        
        // Si se selecciona una fecha de recepcion se actualiza la fecha de fin del los selectores fecha creaccion. 
		$('#selector_sl_fecha_recepcion_desde').datepicker('setEndDate', $('#sl_fecha_creacion_desde').val());
		$('#selector_sl_fecha_recepcion_hasta').datepicker('setEndDate', $('#sl_fecha_creacion_desde').val());
		
        // Revalida la fecha de creacion hasta
        $('#formulario_busqueda_solicitudes').bootstrapValidator('revalidateField', 'sl_fecha_creacion_hasta');
		
		// Actualiza la fecha de creacion desde.
		if ($('#sl_fecha_creacion_desde').val() != "") {
			
			var elementos_fecha_desde = $('#sl_fecha_creacion_desde').val().split("/");
			var fecha_desde = new Date(elementos_fecha_desde[2], elementos_fecha_desde[1], elementos_fecha_desde[0]);
			var elementos_fecha_hasta = $('#sl_fecha_creacion_hasta').val().split("/");
			var fecha_hasta = new Date(elementos_fecha_hasta[2], elementos_fecha_hasta[1], elementos_fecha_hasta[0]);
			//console.log("Fecha desde:"+fecha_desde);
			
			if (fecha_hasta < fecha_desde) {
				$('#sl_fecha_creacion_desde').val($('#sl_fecha_creacion_hasta').val());
        		$('#formulario_busqueda_solicitudes').bootstrapValidator('revalidateField', 'sl_fecha_creacion_desde');
			}
		} else {
			$('#sl_fecha_creacion_desde').val($('#sl_fecha_creacion_hasta').val());
			$('#formulario_busqueda_solicitudes').bootstrapValidator('revalidateField', 'sl_fecha_creacion_desde');
		}
		
		// Actualiza el datepicker desde.
		$('#selector_sl_fecha_creacion_desde').datepicker('update');
    });
});


/* Valida los datos del formulario del buscador de solicitudes. */
//----------------------------------------------------------------

$(document).ready(function () {

	//alert("validando formulario");

	$('#formulario_busqueda_solicitudes').bootstrapValidator({
		message: 'Este valor no es valido',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {

			// Datos de busqueda: (Añadir el atributo name del campo que se desea validar)

			sl_nombre_cliente: {
				validators: {
					regexp: {
						regexp: /^[a-z\s]+$/i,
						message: 'El nombre solo puede contener caracteres alfabeticos y espacios.'
					}
				}
			},
			sl_apellido_cliente: {
				validators: {
					regexp: {
						regexp: /^[a-z\s]+$/i,
						message: 'El apellido solo puede contener caracteres alfabeticos y espacios.'
					}
				}
			},
            sl_cedula_cliente: {
                validators: {
                    callback: {
                        callback: function (value, validator, $field) {

                            var numero_documento = validator.getFieldElements("sl_cedula_cliente").val();
                            
                            if (numero_documento != "") {
                                var expresion = new RegExp("^\[0-9]{3}\-\[0-9]{7}\-\[0-9]{1}$");
    
                                if (expresion.test(numero_documento)) {
                                    console.log("Numero de cedula valido");
                                } else {
                                    return {
                                        valid: false,
                                        message: 'El numero de cedula tiene que respetar el formafo numerico 000-0000000-0.',
                                    }
                                }
                            } 
                            return true;
                        }
                    }
                }
            },
            sl_fecha_creacion_desde: {
				validators: {
					date: {
						format: 'DD/MM/YYYY',
						max: fecha_actual,
						message: 'La fecha "desde" no puede ser posteriror a la fecha actual.'
					}
				}
			},
			sl_fecha_creacion_hasta: {
				validators: {
					date: {
						format: 'DD/MM/YYYY',
						max: fecha_actual,
						message: 'La fecha "hasta" no puede ser posteriror a la fecha actual.'
					}
				}
			},
			sl_fecha_recepcion_desde: {
				validators: {
					date: {
						format: 'DD/MM/YYYY',
						max: fecha_actual,
						message: 'La fecha "desde" no puede ser posteriror a la fecha actual.'
					}
				}
			},
			sl_fecha_recepcion_hasta: {
				validators: {
					date: {
						format: 'DD/MM/YYYY',
						max: fecha_actual,
						message: 'La fecha "hasta" no puede ser posteriror a la fecha actual.'
					}
				}
			}
		}
	}).on('success.form.bv', function (e, data) {

		e.preventDefault();

		$('#formulario_busqueda_solicitudes').bootstrapValidator('defaultSubmit');
	});
});


/* Actualiza los campos cantidad en funcion de sus valores. */
//------------------------------------------------------------

$(document).ready(function () {

    $("#sl_cantidad_solicitada_hasta").change(function () {
		if (parseInt($("#sl_cantidad_solicitada_hasta").val()) == 0) $("#sl_cantidad_solicitada_desde").val($("#sl_cantidad_solicitada_hasta").val());
        if (parseInt($("#sl_cantidad_solicitada_hasta").val()) <= parseInt($("#sl_cantidad_solicitada_desde").val()) || (parseInt($("#sl_cantidad_solicitada_desde").val()) == 0)) $("#sl_cantidad_solicitada_desde").val($("#sl_cantidad_solicitada_hasta").val())
    });

    $("#sl_cantidad_solicitada_desde").change(function () {
		if (parseInt($("#sl_cantidad_solicitada_desde").val()) == 0) $("#sl_cantidad_solicitada_hasta").val($("#sl_cantidad_solicitada_desde").val());
        if (parseInt($("#sl_cantidad_solicitada_desde").val()) >= parseInt($("#sl_cantidad_solicitada_hasta").val()) || (parseInt($("#sl_cantidad_solicitada_hasta").val()) == 0)) $("#sl_cantidad_solicitada_hasta").val($("#sl_cantidad_solicitada_desde").val())
    });
});


/* Formatea los datos de las solicitudes con bootgrid. */
//-----------------------------------------------------

$(document).ready(function () {

	$("#lista_solicitudes").bootgrid({
		searchSettings: {
			delay: 500,
		},
		labels: {
			search: "Filtrar",
			all: "Todos",
			infos: "Mostrando {{ctx.start}} a {{ctx.end}} de {{ctx.total}} resultados",
			loading: "Cargando resultados...",
			noResults: "No hay resultados"
		},
		caseSensitive: false,
		rowCount: [25, 50, -1],
		formatters: {
			"sl_comandos": function (column, row) {

				return "<button type=\"button\" id=\"btn_visualizacion_" + row.pd_id + "\"class=\"btn btn-xs btn-default btn_visualizacion\" data-row-id=\"" + row.pd_id + "\"><span class=\"glyphicon glyphicon-eye-open\"></span></button>";
			}
		}
	}).on("loaded.rs.jquery.bootgrid", function () {

		console.log("Resultados busqueda solicitudes cargados");

		// Al pulsar el boton de visualizar abre la ficha del cliente.
		$(this).find(".btn_visualizacion").on("click", function (e) {
            
            // Programar el boton de visualizacion.
			//location.href = '/visualizar_solicitud/:' + $(this).attr("id").substring(18);

		});
	});
});