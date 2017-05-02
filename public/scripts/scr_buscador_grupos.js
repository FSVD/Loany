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
	$('#gr_fecha_creacion_desde').blur(function() {
		if ($('#gr_fecha_creacion_desde').val() == '') {
			$('#gr_fecha_creacion_hasta').val('');
			$('#selector_gr_fecha_creacion_hasta').datepicker('update');
		}
	});
	
	$('#gr_fecha_creacion_hasta').blur(function() {
		if ($('#gr_fecha_creacion_hasta').val() == '') {
			$('#gr_fecha_creacion_desde').val('');
			$('#selector_gr_fecha_creacion_desde').datepicker('update');
		}
	});
});


/* Activa el datepicker para los campos fecha de la pagina. */
//------------------------------------------------------------

$( document ).ready(function() {
	$('#selector_gr_fecha_creacion_desde').datepicker({
        format: 'dd/mm/yyyy',
		endDate: fecha_actual,
        orientation: "bottom",
        autoclose: true,
        language: "es"
    }).on('changeDate hide', function (e) {
		
		// Revalida la fecha de creacion desde.
        $('#formulario_busqueda_grupos').bootstrapValidator('revalidateField', 'gr_fecha_creacion_desde');
		
		// Actualiza la fecha de creacion hasta.
		if ($('#gr_fecha_creacion_hasta').val() != "") {
			
			var elementos_fecha_desde = $('#gr_fecha_creacion_desde').val().split("/");
			var fecha_desde = new Date(elementos_fecha_desde[2], elementos_fecha_desde[1], elementos_fecha_desde[0]);
			var elementos_fecha_hasta = $('#gr_fecha_creacion_hasta').val().split("/");
			var fecha_hasta = new Date(elementos_fecha_hasta[2], elementos_fecha_hasta[1], elementos_fecha_hasta[0]);
			//console.log("Fecha hasta:"+fecha_hasta);
			
			if (fecha_desde > fecha_hasta) {
				$('#gr_fecha_creacion_hasta').val($('#gr_fecha_creacion_desde').val());
        		$('#formulario_busqueda_grupos').bootstrapValidator('revalidateField', 'gr_fecha_creacion_hasta');
			}
		} else {
			$('#gr_fecha_creacion_hasta').val($('#gr_fecha_creacion_desde').val());
			$('#formulario_busqueda_grupos').bootstrapValidator('revalidateField', 'gr_fecha_creacion_hasta');
		}
		
		// Actualiza el datepicker hasta.
		$('#selector_gr_fecha_creacion_hasta').datepicker('update');
    });
	
    $('#selector_gr_fecha_creacion_hasta').datepicker({
        format: 'dd/mm/yyyy',
		endDate: fecha_actual,
        orientation: "bottom",
        autoclose: true,
        language: "es"
    }).on('changeDate hide', function (e) {
		
        // Revalida la fecha de creacion hasta
        $('#formulario_busqueda_grupos').bootstrapValidator('revalidateField', 'gr_fecha_creacion_hasta');
		
		// Actualiza la fecha de creacion desde.
		if ($('#gr_fecha_creacion_desde').val() != "") {
			
			var elementos_fecha_desde = $('#gr_fecha_creacion_desde').val().split("/");
			var fecha_desde = new Date(elementos_fecha_desde[2], elementos_fecha_desde[1], elementos_fecha_desde[0]);
			var elementos_fecha_hasta = $('#gr_fecha_creacion_hasta').val().split("/");
			var fecha_hasta = new Date(elementos_fecha_hasta[2], elementos_fecha_hasta[1], elementos_fecha_hasta[0]);
			//console.log("Fecha desde:"+fecha_desde);
			
			if (fecha_hasta < fecha_desde) {
				$('#gr_fecha_creacion_desde').val($('#gr_fecha_creacion_hasta').val());
        		$('#formulario_busqueda_grupos').bootstrapValidator('revalidateField', 'gr_fecha_creacion_desde');
			}
		} else {
			$('#gr_fecha_creacion_desde').val($('#gr_fecha_creacion_hasta').val());
			$('#formulario_busqueda_grupos').bootstrapValidator('revalidateField', 'gr_fecha_creacion_desde');
		}
		
		// Actualiza el datepicker desde.
		$('#selector_gr_fecha_creacion_desde').datepicker('update');
    });
});


/* Valida los datos del formulario del buscador de grupos. */
//-------------------------------------------------------------

$(document).ready(function () {

	//alert("validando formulario");

	$('#formulario_busqueda_grupos').bootstrapValidator({
		message: 'Este valor no es valido',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {

			// Datos de busqueda: (Añadir el atributo name del campo que se desea validar)

			gr_nombre_referente: {
				validators: {
					regexp: {
						regexp: /^[a-z\s]+$/i,
						message: 'El nombre solo puede contener caracteres alfabeticos y espacios.'
					}
				}
			},
			gr_apellido_referente: {
				validators: {
					regexp: {
						regexp: /^[a-z\s]+$/i,
						message: 'El apellido solo puede contener caracteres alfabeticos y espacios.'
					}
				}
			},

			gr_correo_electronico: {
                validators: {
                    emailAddress: {
                        message: 'Introducir un correo electronico valido.'
                    }
                }
            },
			gr_fecha_creacion_desde: {
				validators: {
					date: {
						format: 'DD/MM/YYYY',
						max: fecha_actual,
						message: 'La fecha "desde" no puede ser posteriror a la fecha actual.'
					}
				}
			},
			gr_fecha_creacion_hasta: {
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

		$('#formulario_busqueda_grupos').bootstrapValidator('defaultSubmit');
	});
});


/* Formatea los datos de los grupos con bootgrid. */
//-----------------------------------------------------

$(document).ready(function () {

	$("#lista_grupos").bootgrid({
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
			"gr_comandos": function (column, row) {

				return "<button type=\"button\" id=\"btn_visualizacion_" + row.pd_id + "\"class=\"btn btn-xs btn-default btn_visualizacion\" data-row-id=\"" + row.pd_id + "\"><span class=\"glyphicon glyphicon-eye-open\"></span></button>";
			}
		}
	}).on("loaded.rs.jquery.bootgrid", function () {

		console.log("Resultados busqueda grupos cargados");

		// Al pulsar el boton de visualizar abre la ficha del cliente.
		$(this).find(".btn_visualizacion").on("click", function (e) {
            
            // Programar el boton de visualizacion.
			// location.href = '/visualizar_grupo/:' + $(this).attr("id").substring(18);

		});
	});
});

