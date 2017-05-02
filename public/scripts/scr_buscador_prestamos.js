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
	$('#pr_fecha_activacion_desde').blur(function() {
		if ($('#pr_fecha_activacion_desde').val() == '') {
            $('#pr_fecha_activacion_hasta').val('');
            $('#selector_pr_fecha_activacion_hasta').datepicker('update');
        }
	});
	
	$('#pr_fecha_activacion_hasta').blur(function() {
		if ($('#pr_fecha_activacion_hasta').val() == '') {
            $('#pr_fecha_activacion_desde').val('');
            $('#selector_pr_fecha_activacion_desde').datepicker('update');
        }
	});
	
	$('#pr_fecha_caducidad_desde').blur(function() {
		if ($('#pr_fecha_caducidad_desde').val() == '') {
            $('#pr_fecha_caducidad_hasta').val('');
            $('#selector_pr_fecha_caducidad_hasta').datepicker('update');
        }
	});
	
	$('#pr_fecha_caducidad_hasta').blur(function() {
		if ($('#pr_fecha_caducidad_hasta').val() == '') {
            $('#pr_fecha_caducidad_desde').val('');
            $('#selector_pr_fecha_caducidad_desde').datepicker('update');
        }
	});
	
	$('#pr_fecha_finalizacion_desde').blur(function() {
		if ($('#pr_fecha_finalizacion_desde').val() == '') {
            $('#pr_fecha_finalizacion_hasta').val('');
            $('#selector_pr_fecha_finalizacion_hasta').datepicker('update');
			$('#selector_pr_fecha_activacion_desde').datepicker('setEndDate', fecha_actual);
			$('#selector_pr_fecha_activacion_hasta').datepicker('setEndDate', fecha_actual);
        }
	});
	
	$('#pr_fecha_finalizacion_hasta').blur(function() {
		if ($('#pr_fecha_finalizacion_hasta').val() == '') {
            $('#pr_fecha_finalizacion_desde').val('');
            $('#selector_pr_fecha_finalizacion_desde').datepicker('update');
			$('#selector_pr_fecha_activacion_desde').datepicker('setEndDate', fecha_actual);
			$('#selector_pr_fecha_activacion_hasta').datepicker('setEndDate', fecha_actual);
        }
	});
});


/* Activa el datepicker para los campos fecha de la pagina. */
//------------------------------------------------------------

$( document ).ready(function() {
	$('#selector_pr_fecha_activacion_desde').datepicker({
        format: 'dd/mm/yyyy',
		endDate: fecha_actual,
        orientation: "bottom",
        autoclose: true,
        language: "es"
    }).on('changeDate hide', function (e) {
        
        // Si se selecciona una fecha de activacion se actualiza la fecha de inicio del los selectores fecha caducidad y finalizacion. 
		$('#selector_pr_fecha_caducidad_desde').datepicker('setStartDate', $('#pr_fecha_activacion_desde').val());
		$('#selector_pr_fecha_caducidad_hasta').datepicker('setStartDate', $('#pr_fecha_activacion_desde').val());
        $('#selector_pr_fecha_finalizacion_desde').datepicker('setStartDate', $('#pr_fecha_activacion_desde').val());
		$('#selector_pr_fecha_finalizacion_hasta').datepicker('setStartDate', $('#pr_fecha_activacion_desde').val());
		
		// Revalida la fecha de activacion desde.
        $('#formulario_busqueda_prestamos').bootstrapValidator('revalidateField', 'pr_fecha_activacion_desde');
		
		// Actualiza la fecha de activacion hasta.
		if ($('#pr_fecha_activacion_hasta').val() != "") {
			
			var elementos_fecha_desde = $('#pr_fecha_activacion_desde').val().split("/");
			var fecha_desde = new Date(elementos_fecha_desde[2], elementos_fecha_desde[1], elementos_fecha_desde[0]);
			var elementos_fecha_hasta = $('#pr_fecha_activacion_hasta').val().split("/");
			var fecha_hasta = new Date(elementos_fecha_hasta[2], elementos_fecha_hasta[1], elementos_fecha_hasta[0]);
			//console.log("Fecha hasta:"+fecha_hasta);
			
			if (fecha_desde > fecha_hasta) {
				$('#pr_fecha_activacion_hasta').val($('#pr_fecha_activacion_desde').val());
        		$('#formulario_busqueda_prestamos').bootstrapValidator('revalidateField', 'pr_fecha_activacion_hasta');
			}
		} else {
			$('#pr_fecha_activacion_hasta').val($('#pr_fecha_activacion_desde').val());
			$('#formulario_busqueda_prestamos').bootstrapValidator('revalidateField', 'pr_fecha_activacion_hasta');
		}
		
		// Actualiza el datepicker hasta.
		$('#selector_pr_fecha_activacion_hasta').datepicker('update');
    });
	
    $('#selector_pr_fecha_activacion_hasta').datepicker({
        format: 'dd/mm/yyyy',
		endDate: fecha_actual,
        orientation: "bottom",
        autoclose: true,
        language: "es"
    }).on('changeDate hide', function (e) {
        
        // Si se selecciona una fecha de activacion se actualiza la fecha de inicio del los selectores fecha caducidad y finalizacion. 
		$('#selector_pr_fecha_caducidad_desde').datepicker('setStartDate', $('#pr_fecha_activacion_desde').val());
		$('#selector_pr_fecha_caducidad_hasta').datepicker('setStartDate', $('#pr_fecha_activacion_desde').val());
        $('#selector_pr_fecha_finalizacion_desde').datepicker('setStartDate', $('#pr_fecha_activacion_desde').val());
		$('#selector_pr_fecha_finalizacion_hasta').datepicker('setStartDate', $('#pr_fecha_activacion_desde').val());
		
        // Revalida la fecha de activacion hasta
        $('#formulario_busqueda_prestamos').bootstrapValidator('revalidateField', 'pr_fecha_activacion_hasta');
		
		// Actualiza la fecha de activacion desde.
		if ($('#pr_fecha_activacion_desde').val() != "") {
			
			var elementos_fecha_desde = $('#pr_fecha_activacion_desde').val().split("/");
			var fecha_desde = new Date(elementos_fecha_desde[2], elementos_fecha_desde[1], elementos_fecha_desde[0]);
			var elementos_fecha_hasta = $('#pr_fecha_activacion_hasta').val().split("/");
			var fecha_hasta = new Date(elementos_fecha_hasta[2], elementos_fecha_hasta[1], elementos_fecha_hasta[0]);
			//console.log("Fecha desde:"+fecha_desde);
			
			if (fecha_hasta < fecha_desde) {
				$('#pr_fecha_activacion_desde').val($('#pr_fecha_activacion_hasta').val());
        		$('#formulario_busqueda_prestamos').bootstrapValidator('revalidateField', 'pr_fecha_activacion_desde');
			}
		} else {
			$('#pr_fecha_activacion_desde').val($('#pr_fecha_activacion_hasta').val());
			$('#formulario_busqueda_prestamos').bootstrapValidator('revalidateField', 'pr_fecha_activacion_desde');
		}
		
		// Actualiza el datepicker desde.
		$('#selector_pr_fecha_activacion_desde').datepicker('update');
    });
	
	$('#selector_pr_fecha_caducidad_desde').datepicker({
        format: 'dd/mm/yyyy',
        orientation: "bottom",
        autoclose: true,
        language: "es"
    }).on('changeDate hide', function (e) {
        
        // Si se selecciona una fecha de caducidad se actualiza la fecha de inicio del los selectores fecha activacion y finalizacion. 
		$('#selector_pr_fecha_activacion_desde').datepicker('setEndDate', $('#pr_fecha_caducidad_desde').val());
		$('#selector_pr_fecha_activacion_hasta').datepicker('setEndDate', $('#pr_fecha_caducidad_desde').val());
		
		// Revalida la fecha de caducidad desde.
        $('#formulario_busqueda_prestamos').bootstrapValidator('revalidateField', 'pr_fecha_caducidad_desde');
		
		// Actualiza la fecha de caducidad hasta.
		if ($('#pr_fecha_caducidad_hasta').val() != "") {
			
			var elementos_fecha_desde = $('#pr_fecha_caducidad_desde').val().split("/");
			var fecha_desde = new Date(elementos_fecha_desde[2], elementos_fecha_desde[1], elementos_fecha_desde[0]);
			var elementos_fecha_hasta = $('#pr_fecha_caducidad_hasta').val().split("/");
			var fecha_hasta = new Date(elementos_fecha_hasta[2], elementos_fecha_hasta[1], elementos_fecha_hasta[0]);
			//console.log("Fecha hasta:"+fecha_hasta);
			
			if (fecha_desde > fecha_hasta) {
				$('#pr_fecha_caducidad_hasta').val($('#pr_fecha_caducidad_desde').val());
        		$('#formulario_busqueda_prestamos').bootstrapValidator('revalidateField', 'pr_fecha_caducidad_hasta');
			}
		} else {
			$('#pr_fecha_caducidad_hasta').val($('#pr_fecha_caducidad_desde').val());
			$('#formulario_busqueda_prestamos').bootstrapValidator('revalidateField', 'pr_fecha_caducidad_hasta');
		}
		
		// Actualiza el datepicker hasta.
		$('#selector_pr_fecha_caducidad_hasta').datepicker('update');
    });
	
    $('#selector_pr_fecha_caducidad_hasta').datepicker({
        format: 'dd/mm/yyyy',
        orientation: "bottom",
        autoclose: true,
        language: "es"
    }).on('changeDate hide', function (e) {
        
        // Si se selecciona una fecha de caducidad se actualiza la fecha de inicio del los selectores fecha activacion y finalizacion. 
		$('#selector_pr_fecha_activacion_desde').datepicker('setEndDate', $('#pr_fecha_caducidad_desde').val());
		$('#selector_pr_fecha_activacion_hasta').datepicker('setEndDate', $('#pr_fecha_caducidad_desde').val());
		
        // Revalida la fecha de caducidad hasta
        $('#formulario_busqueda_prestamos').bootstrapValidator('revalidateField', 'pr_fecha_caducidad_hasta');
		
		// Actualiza la fecha de caducidad desde.
		if ($('#pr_fecha_caducidad_desde').val() != "") {
			
			var elementos_fecha_desde = $('#pr_fecha_caducidad_desde').val().split("/");
			var fecha_desde = new Date(elementos_fecha_desde[2], elementos_fecha_desde[1], elementos_fecha_desde[0]);
			var elementos_fecha_hasta = $('#pr_fecha_caducidad_hasta').val().split("/");
			var fecha_hasta = new Date(elementos_fecha_hasta[2], elementos_fecha_hasta[1], elementos_fecha_hasta[0]);
			//console.log("Fecha desde:"+fecha_desde);
			
			if (fecha_hasta < fecha_desde) {
				$('#pr_fecha_caducidad_desde').val($('#pr_fecha_caducidad_hasta').val());
        		$('#formulario_busqueda_prestamos').bootstrapValidator('revalidateField', 'pr_fecha_caducidad_desde');
			}
		} else {
			$('#pr_fecha_caducidad_desde').val($('#pr_fecha_caducidad_hasta').val());
			$('#formulario_busqueda_prestamos').bootstrapValidator('revalidateField', 'pr_fecha_caducidad_desde');
		}
		
		// Actualiza el datepicker desde.
		$('#selector_pr_fecha_caducidad_desde').datepicker('update');
    });
    
    $('#selector_pr_fecha_finalizacion_desde').datepicker({
        format: 'dd/mm/yyyy',
		endDate: fecha_actual,
        orientation: "bottom",
        autoclose: true,
        language: "es"
    }).on('changeDate hide', function (e) {
        
		if ($('#pr_fecha_caducidad_desde').val() == '') {
			
			// Si se selecciona una fecha de caducidad se actualiza la fecha de inicio del los selectores fecha activacion y finalizacion. 
			$('#selector_pr_fecha_activacion_desde').datepicker('setEndDate', $('#pr_fecha_finalizacion_desde').val());
			$('#selector_pr_fecha_activacion_hasta').datepicker('setEndDate', $('#pr_fecha_finalizacion_desde').val());
		
		}
		
		// Revalida la fecha de finalizacion desde.
        $('#formulario_busqueda_prestamos').bootstrapValidator('revalidateField', 'pr_fecha_finalizacion_desde');
		
		// Actualiza la fecha de finalizacion hasta.
		if ($('#pr_fecha_finalizacion_hasta').val() != "") {
			
			var elementos_fecha_desde = $('#pr_fecha_finalizacion_desde').val().split("/");
			var fecha_desde = new Date(elementos_fecha_desde[2], elementos_fecha_desde[1], elementos_fecha_desde[0]);
			var elementos_fecha_hasta = $('#pr_fecha_finalizacion_hasta').val().split("/");
			var fecha_hasta = new Date(elementos_fecha_hasta[2], elementos_fecha_hasta[1], elementos_fecha_hasta[0]);
			//console.log("Fecha hasta:"+fecha_hasta);
			
			if (fecha_desde > fecha_hasta) {
				$('#pr_fecha_finalizacion_hasta').val($('#pr_fecha_finalizacion_desde').val());
        		$('#formulario_busqueda_prestamos').bootstrapValidator('revalidateField', 'pr_fecha_finalizacion_hasta');
			}
		} else {
			$('#pr_fecha_finalizacion_hasta').val($('#pr_fecha_finalizacion_desde').val());
			$('#formulario_busqueda_prestamos').bootstrapValidator('revalidateField', 'pr_fecha_finalizacion_hasta');
		}
		
		// Actualiza el datepicker hasta.
		$('#selector_pr_fecha_finalizacion_hasta').datepicker('update');
    });
	
    $('#selector_pr_fecha_finalizacion_hasta').datepicker({
        format: 'dd/mm/yyyy',
		endDate: fecha_actual,
        orientation: "bottom",
        autoclose: true,
        language: "es"
    }).on('changeDate hide', function (e) {
        
        if ($('#pr_fecha_caducidad_desde').val() == '') {
			
			// Si se selecciona una fecha de caducidad se actualiza la fecha de inicio del los selectores fecha activacion y finalizacion. 
			$('#selector_pr_fecha_activacion_desde').datepicker('setEndDate', $('#pr_fecha_finalizacion_desde').val());
			$('#selector_pr_fecha_activacion_hasta').datepicker('setEndDate', $('#pr_fecha_finalizacion_desde').val());
		
		}
		
        // Revalida la fecha de finalizacion hasta
        $('#formulario_busqueda_prestamos').bootstrapValidator('revalidateField', 'pr_fecha_finalizacion_hasta');
		
		// Actualiza la fecha de finalizacion desde.
		if ($('#pr_fecha_finalizacion_desde').val() != "") {
			
			var elementos_fecha_desde = $('#pr_fecha_finalizacion_desde').val().split("/");
			var fecha_desde = new Date(elementos_fecha_desde[2], elementos_fecha_desde[1], elementos_fecha_desde[0]);
			var elementos_fecha_hasta = $('#pr_fecha_finalizacion_hasta').val().split("/");
			var fecha_hasta = new Date(elementos_fecha_hasta[2], elementos_fecha_hasta[1], elementos_fecha_hasta[0]);
			//console.log("Fecha desde:"+fecha_desde);
			
			if (fecha_hasta < fecha_desde) {
				$('#pr_fecha_finalizacion_desde').val($('#pr_fecha_finalizacion_hasta').val());
        		$('#formulario_busqueda_prestamos').bootstrapValidator('revalidateField', 'pr_fecha_finalizacion_desde');
			}
		} else {
			$('#pr_fecha_finalizacion_desde').val($('#pr_fecha_finalizacion_hasta').val());
			$('#formulario_busqueda_prestamos').bootstrapValidator('revalidateField', 'pr_fecha_finalizacion_desde');
		}
		
		// Actualiza el datepicker desde.
		$('#selector_pr_fecha_finalizacion_desde').datepicker('update');
    });
});


/* Valida los datos del formulario del buscador de prestamos. */
//----------------------------------------------------------------

$(document).ready(function () {

	//alert("validando formulario");

	$('#formulario_busqueda_prestamos').bootstrapValidator({
		message: 'Este valor no es valido',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {

			// Datos de busqueda: (Añadir el atributo name del campo que se desea validar)

			pr_nombre_cliente: {
				validators: {
					regexp: {
						regexp: /^[a-z\s]+$/i,
						message: 'El nombre solo puede contener caracteres alfabeticos y espacios.'
					}
				}
			},
			pr_apellido_cliente: {
				validators: {
					regexp: {
						regexp: /^[a-z\s]+$/i,
						message: 'El apellido solo puede contener caracteres alfabeticos y espacios.'
					}
				}
			},
            pr_cedula_cliente: {
                validators: {
                    callback: {
                        callback: function (value, validator, $field) {

                            var numero_documento = validator.getFieldElements("pr_cedula_cliente").val();
                            
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
            pr_fecha_activacion_desde: {
				validators: {
					date: {
						format: 'DD/MM/YYYY',
						max: fecha_actual,
						message: 'La fecha "desde" no puede ser posteriror a la fecha actual.'
					}
				}
			},
			pr_fecha_activacion_hasta: {
				validators: {
					date: {
						format: 'DD/MM/YYYY',
						max: fecha_actual,
						message: 'La fecha "hasta" no puede ser posteriror a la fecha actual.'
					}
				}
			},
			pr_fecha_caducidad_desde: {
				validators: {
					date: {
						format: 'DD/MM/YYYY',
						max: fecha_actual,
						message: 'La fecha "desde" no puede ser posteriror a la fecha actual.'
					}
				}
			},
			pr_fecha_caducidad_hasta: {
				validators: {
					date: {
						format: 'DD/MM/YYYY',
						max: fecha_actual,
						message: 'La fecha "hasta" no puede ser posteriror a la fecha actual.'
					}
				}
			},
            pr_fecha_finalizacion_desde: {
				validators: {
					date: {
						format: 'DD/MM/YYYY',
						max: fecha_actual,
						message: 'La fecha "desde" no puede ser posteriror a la fecha actual.'
					}
				}
			},
			pr_fecha_finalizacion_hasta: {
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

		$('#formulario_busqueda_prestamos').bootstrapValidator('defaultSubmit');
	});
});


/* Actualiza los campos cantidad en funcion de sus valores. */
//------------------------------------------------------------

$(document).ready(function () {

    $("#pr_cantidad_hasta").change(function () {
		if (parseInt($("#pr_cantidad_hasta").val()) == 0) $("#pr_cantidad_desde").val($("#pr_cantidad_hasta").val());
        if (parseInt($("#pr_cantidad_hasta").val()) <= parseInt($("#pr_cantidad_desde").val()) || (parseInt($("#pr_cantidad_desde").val()) == 0)) $("#pr_cantidad_desde").val($("#pr_cantidad_hasta").val())
    });

    $("#pr_cantidad_desde").change(function () {
		if (parseInt($("#pr_cantidad_desde").val()) == 0) $("#pr_cantidad_hasta").val($("#pr_cantidad_desde").val());
        if (parseInt($("#pr_cantidad_desde").val()) >= parseInt($("#pr_cantidad_hasta").val()) || (parseInt($("#pr_cantidad_hasta").val()) == 0)) $("#pr_cantidad_hasta").val($("#pr_cantidad_desde").val())
    });
})


/* Formatea los datos de los prestamos con bootgrid. */
//-----------------------------------------------------

$(document).ready(function () {

	$("#lista_prestamos").bootgrid({
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
			"pr_comandos": function (column, row) {

				return "<button type=\"button\" id=\"btn_visualizacion_" + row.pd_id + "\"class=\"btn btn-xs btn-default btn_visualizacion\" data-row-id=\"" + row.pd_id + "\"><span class=\"glyphicon glyphicon-eye-open\"></span></button>";
			}
		}
	}).on("loaded.rs.jquery.bootgrid", function () {

		console.log("Resultados busqueda prestamos cargados");

		// Al pulsar el boton de visualizar abre la ficha del cliente.
		$(this).find(".btn_visualizacion").on("click", function (e) {
            
            // Programar el boton de visualizacion.
			//location.href = '/visualizar_prestamo/:' + $(this).attr("id").substring(18);

		});
	});
});