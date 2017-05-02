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


/* Calcula la fecha de nacimiento minima. */
//------------------------------------------

var fecha_nacimiento_minima;

$(document).ready(function () {
    var fecha_actual = new Date();
    var dia = fecha_actual.getDate();
    var mes = fecha_actual.getMonth() + 1;
    var ano_minimo = fecha_actual.getFullYear() - 18;
    fecha_nacimiento_minima = dia + "/" + mes + "/" + ano_minimo;
});


/* Inicializa los campos telefonicos para la validacion. */
//---------------------------------------------------------

$(document).ready(function () {
    $('#formulario_busqueda_clientes')
        .find('[name="cl_celular"]')
        .intlTelInput({
            utilsScript: '/intl-tel-input-6.4.0/lib/libphonenumber/build/utils.js',
            autoPlaceholder: true,
            preferredCountries: ['do']
        });
});


/* Limpia el contenido de los datepickers si uno de los dos resulta vacio. */
//---------------------------------------------------------------------------

$( document ).ready(function() {
	$('#cl_fecha_creacion_desde').blur(function() {
		if ($('#cl_fecha_creacion_desde').val() == '') {
			$('#cl_fecha_creacion_hasta').val('');
			$('#selector_cl_fecha_creacion_hasta').datepicker('update');
		}
	});
	
	$('#cl_fecha_creacion_hasta').blur(function() {
		if ($('#cl_fecha_creacion_hasta').val() == '') {
			$('#cl_fecha_creacion_desde').val('');
			$('#selector_cl_fecha_creacion_desde').datepicker('update');
		}
	});
});


/* Activa el datepicker para los campos fecha de la pagina. */
//------------------------------------------------------------

$( document ).ready(function() {
	$('#selector_cl_fecha_nacimiento').datepicker({
        format: 'dd/mm/yyyy',
        endDate: fecha_nacimiento_minima,
        orientation: "bottom",
        autoclose: true,
        language: "es"
    }).on('changeDate', function (e) {
        // Cada vez que se cambia la fecha de nacimiento se vuelve a validar.
        $('#formulario_busqueda_clientes').bootstrapValidator('revalidateField', 'cl_fecha_nacimiento');
    });
	
	$('#selector_cl_fecha_creacion_desde').datepicker({
        format: 'dd/mm/yyyy',
		endDate: fecha_actual,
        orientation: "bottom",
        autoclose: true,
        language: "es"
    }).on('changeDate hide', function (e) {
		
		// Revalida la fecha de creacion desde.
        $('#formulario_busqueda_clientes').bootstrapValidator('revalidateField', 'cl_fecha_creacion_desde');
		
		// Actualiza la fecha de creacion hasta.
		if ($('#cl_fecha_creacion_hasta').val() != "") {
			
			var elementos_fecha_desde = $('#cl_fecha_creacion_desde').val().split("/");
			var fecha_desde = new Date(elementos_fecha_desde[2], elementos_fecha_desde[1], elementos_fecha_desde[0]);
			var elementos_fecha_hasta = $('#cl_fecha_creacion_hasta').val().split("/");
			var fecha_hasta = new Date(elementos_fecha_hasta[2], elementos_fecha_hasta[1], elementos_fecha_hasta[0]);
			//console.log("Fecha hasta:"+fecha_hasta);
			
			if (fecha_desde > fecha_hasta) {
				$('#cl_fecha_creacion_hasta').val($('#cl_fecha_creacion_desde').val());
        		$('#formulario_busqueda_clientes').bootstrapValidator('revalidateField', 'cl_fecha_creacion_hasta');
			}
		} else {
			$('#cl_fecha_creacion_hasta').val($('#cl_fecha_creacion_desde').val());
			$('#formulario_busqueda_clientes').bootstrapValidator('revalidateField', 'cl_fecha_creacion_hasta');
		}
		
		// Actualiza el datepicker hasta.
		$('#selector_cl_fecha_creacion_hasta').datepicker('update');
    });
	
    $('#selector_cl_fecha_creacion_hasta').datepicker({
        format: 'dd/mm/yyyy',
		endDate: fecha_actual,
        orientation: "bottom",
        autoclose: true,
        language: "es"
    }).on('changeDate hide', function (e) {
		
        // Revalida la fecha de creacion hasta
        $('#formulario_busqueda_clientes').bootstrapValidator('revalidateField', 'cl_fecha_creacion_hasta');
		
		// Actualiza la fecha de creacion desde.
		if ($('#cl_fecha_creacion_desde').val() != "") {
			
			var elementos_fecha_desde = $('#cl_fecha_creacion_desde').val().split("/");
			var fecha_desde = new Date(elementos_fecha_desde[2], elementos_fecha_desde[1], elementos_fecha_desde[0]);
			var elementos_fecha_hasta = $('#cl_fecha_creacion_hasta').val().split("/");
			var fecha_hasta = new Date(elementos_fecha_hasta[2], elementos_fecha_hasta[1], elementos_fecha_hasta[0]);
			//console.log("Fecha desde:"+fecha_desde);
			
			if (fecha_hasta < fecha_desde) {
				$('#cl_fecha_creacion_desde').val($('#cl_fecha_creacion_hasta').val());
        		$('#formulario_busqueda_clientes').bootstrapValidator('revalidateField', 'cl_fecha_creacion_desde');
			}
		} else {
			$('#cl_fecha_creacion_desde').val($('#cl_fecha_creacion_hasta').val());
			$('#formulario_busqueda_clientes').bootstrapValidator('revalidateField', 'cl_fecha_creacion_desde');
		}
		
		// Actualiza el datepicker desde.
		$('#selector_cl_fecha_creacion_desde').datepicker('update');
    });
});


/* Valida los datos del formulario del buscador de clientes. */
//-------------------------------------------------------------

$(document).ready(function () {

	//alert("validando formulario");

	$('#formulario_busqueda_clientes').bootstrapValidator({
		message: 'Este valor no es valido',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {

			// Datos de busqueda: (Añadir el atributo name del campo que se desea validar)

			cl_nombre: {
				validators: {
					regexp: {
						regexp: /^[a-z\s]+$/i,
						message: 'El nombre solo puede contener caracteres alfabeticos y espacios.'
					}
				}
			},
			cl_apellido: {
				validators: {
					regexp: {
						regexp: /^[a-z\s]+$/i,
						message: 'El apellido solo puede contener caracteres alfabeticos y espacios.'
					}
				}
			},
			cl_fecha_nacimiento: {
                validators: {
                    date: {
                        format: 'DD/MM/YYYY',
                        max: fecha_nacimiento_minima,
                        message: 'El cliente tiene que ser mayor de edad.'
                    }
                }
            },
            cl_cedula: {
                validators: {
                    callback: {
                        callback: function (value, validator, $field) {

                            var numero_documento = validator.getFieldElements("cl_cedula").val();
                            
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
            cl_celular: {
                validators: {
                    callback: {
                        message: 'El formato del numero introducido no es valido',
                        callback: function (value, validator, $field) {
                            return value === '' || $field.intlTelInput('isValidNumber');
                        }
                    }
                }
            },
			cl_correo_electronico: {
                validators: {
                    emailAddress: {
                        message: 'Introducir un correo electronico valido.'
                    }
                }
            },
			cl_fecha_creacion_desde: {
				validators: {
					date: {
						format: 'DD/MM/YYYY',
						max: fecha_actual,
						message: 'La fecha "desde" no puede ser posteriror a la fecha actual.'
					}
				}
			},
			cl_fecha_creacion_hasta: {
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

		$('#formulario_busqueda_clientes').bootstrapValidator('defaultSubmit');
	});
});


/* Formatea los datos de los clientes con bootgrid. */
//-----------------------------------------------------

$(document).ready(function () {

	$("#lista_clientes").bootgrid({
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
			"cl_comandos": function (column, row) {

				return "<button type=\"button\" id=\"btn_visualizacion_" + row.pd_id + "\"class=\"btn btn-xs btn-default btn_visualizacion\" data-row-id=\"" + row.pd_id + "\"><span class=\"glyphicon glyphicon-eye-open\"></span></button>";
			}
		}
	}).on("loaded.rs.jquery.bootgrid", function () {

		console.log("Resultados busqueda clientes cargados");

		// Al pulsar el boton de visualizar abre la ficha del cliente.
		$(this).find(".btn_visualizacion").on("click", function (e) {
            
            // Programar el boton de visualizacion.
			// location.href = '/visualizar_cliente/:' + $(this).attr("id").substring(18);

		});
	});
});

