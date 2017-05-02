/* Valida los datos del formulario producto. */
//------------------------------------------------

$(document).ready(function () {
	$('#valida_formulario').click(function () {

		//alert("validando formulario");

		$('#formulario_producto').bootstrapValidator({
			message: 'Este valor no es valido',
			feedbackIcons: {
				valid: 'glyphicon glyphicon-ok',
				invalid: 'glyphicon glyphicon-remove',
				validating: 'glyphicon glyphicon-refresh'
			},
			fields: {

				// Datos producto:

				pd_nombre: {
					validators: {
						notEmpty: {
							message: 'El nombre del producto es requerido.'
						}
					}
				},
				pd_importe_minimo: {
					validators: {
						notEmpty: {
							message: 'El importe minimo es requerido.'
						},
						callback: {
							message: 'Seleccionar un valor',
							callback: function (value, validator, $field) {
								var options = validator.getFieldElements('pd_importe_minimo').val();
								return (options != 'no_seleccionado');
							}
						}
					}
				},
				pd_importe_maximo: {
					validators: {
						notEmpty: {
							message: 'El importe maximo es requerido.'
						},
						callback: {
							message: 'Seleccionar un valor',
							callback: function (value, validator, $field) {
								var options = validator.getFieldElements('pd_importe_maximo').val();
								return (options != 'no_seleccionado');
							}
						}
					}
				},
				pd_montos: {
					validators: {
						notEmpty: {
							message: 'El numero de montos es requerido.'
						},
						callback: {
							message: 'Seleccionar un valor',
							callback: function (value, validator, $field) {
								var options = validator.getFieldElements('pd_montos').val();
								return (options != 'no_seleccionado');
							}
						}
					}
				},
				pd_interes_mensual: {
					validators: {
						notEmpty: {
							message: 'El interes mensual es requerido.'
						},
						callback: {
							message: 'Seleccionar un valor',
							callback: function (value, validator, $field) {
								var options = validator.getFieldElements('pd_interes_mensual').val();
								return (options != 'no_seleccionado');
							}
						}
					}
				},
				pd_max_cuotas: {
					validators: {
						notEmpty: {
							message: 'El numero maximo de cuotas es requerido.'
						},
						callback: {
							message: 'Seleccionar un valor',
							callback: function (value, validator, $field) {
								var options = validator.getFieldElements('pd_max_cuotas').val();
								return (options != 'no_seleccionado');
							}
						}
					}
				},
				pd_gastos_activacion: {
					validators: {
						notEmpty: {
							message: 'Los gastos de activacion son requeridos.'
						},
						callback: {
							message: 'Seleccionar un valor',
							callback: function (value, validator, $field) {
								var options = validator.getFieldElements('pd_gastos_activacion').val();
								return (options != 'no_seleccionado');
							}
						}
					}
				},
				'pd_forma_pago': {
					validators: {
						notEmpty: {
							message: 'La forma de pago es requerida. Selecciona por lo menos una opcion.'
						}
					}
				}
			}
		}).on('success.form.bv', function (e) {

			// Previene el envio del formulario y abre la ventana modal para que se confirme la creacion de la nueva solicitud.
			e.preventDefault();
			e.stopImmediatePropagation();

			//alert("Formulario validado con exito");
			$("#ventana2").modal("show");

		});
	});
});


/* Envia los datos al servidor tras la validacion. */
//---------------------------------------------------

$(document).ready(function () {
	$("#envia_formulario").click(function () {
		$('#formulario_producto').bootstrapValidator('defaultSubmit');
	})
});


/* Abilita el boton de guardar en el formulario si se decide no confirmar la operacion de guardado. */
//----------------------------------------------------------------------------------------------------

$(document).ready(function () {
	$("#cancelar_guardado").click(function () {
		//alert("cancelando guardado");
		var boton_validacion = document.getElementById("valida_formulario");
		boton_validacion.disabled = false;
	})
});


/* Habilita los campos antes del envio del formulario a la pagina de modificacion. */
//-----------------------------------------------------------------------------------

$(document).ready(function () {
	$("#btn_modifica").click(function (e) {
		//alert("enviando formulario para modificacion");
		$("select").removeAttr('disabled');
		$("input").removeAttr('disabled');
		$("textarea").removeAttr('disabled');
	})
});

/* Formatea los datos de los productos con bootgrid. */
//-----------------------------------------------------

$(document).ready(function () {

	$("#lista_productos").bootgrid({
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
		rowCount: [-1, 10, 25, 50],
		formatters: {
			"pd_comandos": function (column, row) {

				return "<button type=\"button\" id=\"btn_visualizacion_" + row.pd_id + "\"class=\"btn btn-xs btn-default btn_visualizacion\" data-row-id=\"" + row.pd_id + "\"><span class=\"glyphicon glyphicon-eye-open\"></span></button>";
			}
		}
	}).on("loaded.rs.jquery.bootgrid", function () {

		console.log("Lista productos cargada");

		// Al pulsar el boton de visualizar abre la ficha del producto.
		$(this).find(".btn_visualizacion").on("click", function (e) {

			location.href = '/visualizar_producto/:' + $(this).attr("id").substring(18);

		});
	});
});