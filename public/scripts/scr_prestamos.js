/* Valida los datos del formulario prestamo. */
//------------------------------------------------

$(document).ready(function () {
	$('#valida_formulario').click(function () {

		//alert("validando formulario");

		$('#formulario_prestamo').bootstrapValidator({
			message: 'Este valor no es valido',
			feedbackIcons: {
				valid: 'glyphicon glyphicon-ok',
				invalid: 'glyphicon glyphicon-remove',
				validating: 'glyphicon glyphicon-refresh'
			},
			fields: {

				// Datos prestamo:

				pr_forma_pago: {
					validators: {
						notEmpty: {
							message: 'La forma de pago es requerida.'
						},
						callback: {
							message: 'Seleccionar un valor',
							callback: function (value, validator, $field) {
								var options = validator.getFieldElements('pr_forma_pago').val();
								return (options != 'no_seleccionado');
							}
						}
					}
				},
				pr_amortizacion: {
					validators: {
						notEmpty: {
							message: 'El calculo del interes es requerido.'
						},
						callback: {
							message: 'Seleccionar un valor',
							callback: function (value, validator, $field) {
								var options = validator.getFieldElements('pr_amortizacion').val();
								return (options != 'no_seleccionado');
							}
						}
					}
				},
				pr_cuotas: {
					validators: {
						notEmpty: {
							message: 'El numero de cuotas es requerido.'
						},
						callback: {
							message: 'Seleccionar un valor',
							callback: function (value, validator, $field) {
								var options = validator.getFieldElements('pr_cuotas').val();
								return (options != 'no_seleccionado');
							}
						}
					}
				}
			}
		}).on('success.form.bv', function (e) {

			// Previene el envio del formulario y abre la ventana modal para que se confirme la creacion del nuevo prestamo.
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
		$('#formulario_prestamo').bootstrapValidator('defaultSubmit');
	})
});


/* Habilita el boton de guardar en el formulario si se decide no confirmar la operacion de guardado. */
//----------------------------------------------------------------------------------------------------

$(document).ready(function () {
	$("#cancelar_guardado").click(function () {
		//alert("cancelando guardado");
		var boton_validacion = document.getElementById("valida_formulario");
		boton_validacion.disabled = false;
	})
});


$(document).ready(function () {
	$("#btn_modifica").click(function (e) {
		//alert("enviando formulario para modificacion");
		$("select").removeAttr('disabled');
		$("input").removeAttr('disabled');
		$("textarea").removeAttr('disabled');
	})
});


/* Actualiza la fecha de caducidad y el total a devolver en funcion de la fecha de activacion, del numero de cuotas y de la forma de pago seleccionada. */
//--------------------------------------------------------------------------------------------------------------------------------------------------------

$(document).ready(function () {

	$('#pr_forma_pago').change(function () {
		if ($("#pr_forma_pago").val() == "no_seleccionado") {
			$('#pr_total_devolucion').attr("value", "");
			$('#pr_fecha_caducidad').attr("value", "");
		} else {
			if ($("#pr_cuotas").val() == "no_seleccionado") {
				$('#pr_total_devolucion').attr("value", "");
				$('#pr_fecha_caducidad').attr("value", "");
			} else {
				configuraDevolucionCaducidad();
			};
		};
	});

	$('#pr_cuotas').change(function () {
		if ($("#pr_cuotas").val() == "no_seleccionado") {
			$('#pr_total_devolucion').attr("value", "");
			$('#pr_fecha_caducidad').attr("value", "");
		} else {
			if ($("#pr_forma_pago").val() == "no_seleccionado") {
				$('#pr_total_devolucion').attr("value", "");
				$('#pr_fecha_caducidad').attr("value", "");
			} else {
				configuraDevolucionCaducidad();
			};
		};
	});
});


/* Configura los campos total a devolver y fecha de caducidad. */
//---------------------------------------------------------------

function configuraDevolucionCaducidad() {
	$.ajax({
		url: "/recuperar_datos_forma_pago",
		data: {
			forma_pago: $('#pr_forma_pago').val()
		},
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		type: "get"
	}).done(function (resultado) {

		// Calcula el total a devolver en base al tipo de amortizacion francesa (cuota fija).
		var capital = $('#pr_cantidad').val();
		var interes = $('#pr_interes_mensual').val();
		var numero_cuotas = $('#pr_cuotas').val();
		var meses_forma_pago = parseFloat(resultado.meses_forma_pago);
		var total_devolucion = calculaTotalDevolucionAmortizacionFrancesa(capital, interes, numero_cuotas, meses_forma_pago);
		$('#pr_total_devolucion').attr("value", total_devolucion);

		// Calcula la fecha de caducidad.
		var dias_forma_pago = parseInt(resultado.dias_forma_pago);
		var fecha_activacion = $('#pr_fecha_activacion').val();
		var forma_pago = $('#pr_forma_pago').val();
		var fecha_caducidad = calculaFechaCaducidad((dias_forma_pago * numero_cuotas), fecha_activacion, forma_pago);
		$('#pr_fecha_caducidad').attr("value", fecha_caducidad);

	}).fail(function (jqXHR, textStatus, errorThrown) {
		// Intercepta el error que se genera en la circumstancia el la que una peticion ajax que ha sido lanzada se ve cancelada si el usuario cambia de pagina.
		if (jqxhr.readyState == 0 || jqxhr.status == 0) {
			alert("Pasa por alto el error");
			return; //Salta el error 
		}
		alert("Se ha generado un error al recuperar los datos para la forma de pago seleccionada:\nDatos solicitud: " + jqXHR.status + "\nTipo de error: " + textStatus + "\n" + errorThrown);
	}).always(function (resultado) {
		//alert("Peticion completada: "+resultado);
	});
};


/* Calcula la fecha de caducidad a partir de la fecha de activacion y del metodo de pago seleccionado. */
//-------------------------------------------------------------------------------------------------------

function calculaFechaCaducidad(dias_a_sumar, fecha_activacion, forma_pago) {

	console.log("Dias a sumar: " + dias_a_sumar + ", a partir del " + fecha_activacion + ", con pago " + forma_pago);

	var elementos_fecha_activacion_prestamo = fecha_activacion.split("/");
    var fecha_activacion_prestamo = elementos_fecha_activacion_prestamo[2]+"-"+elementos_fecha_activacion_prestamo[1]+"-"+elementos_fecha_activacion_prestamo[0];
	var fecha_caducidad = new Date(fecha_activacion_prestamo);
	fecha_caducidad.setDate(fecha_caducidad.getDate() + parseInt(dias_a_sumar));

	console.log("Fecha caducidad calculada: " + fecha_caducidad)

	var ano_caducidad = fecha_caducidad.getFullYear();
	var mes_caducidad = fecha_caducidad.getMonth() + 1;
	var dia_caducidad = fecha_caducidad.getDate();

	if (forma_pago != 1) {
		if (dia_caducidad != parseInt(elementos_fecha_activacion_prestamo[0])) {
			//console.log("Dia activacion: " + elementos_fecha_activacion_prestamo[2]);
			//console.log("Dia caducidad calculado: " + dia_caducidad);

			if (mes_caducidad == 2 && elementos_fecha_activacion_prestamo[0] > 28 || ((mes_caducidad == 4 || mes_caducidad == 6 || mes_caducidad == 9 || mes_caducidad == 11) && elementos_fecha_activacion_prestamo[0] > 30)) {
				dia_caducidad = 1;
				mes_caducidad = fecha_caducidad.getMonth() + 2;
				//console.log("Mes caducidad actualizado: " + mes_caducidad);
			} else {
				do {
					fecha_caducidad.setDate(fecha_caducidad.getDate() + parseInt(1));
					dia_caducidad = fecha_caducidad.getDate();
					mes_caducidad = fecha_caducidad.getMonth() + 1;

					//console.log("Incremento un dia: " + fecha_caducidad);

				} while (dia_caducidad != elementos_fecha_activacion_prestamo[0]);
			}

			//console.log("Dia caducidad actualizado: " + dia_caducidad);

		};
	};

	mes_caducidad = (mes_caducidad < 10) ? ("0" + mes_caducidad) : mes_caducidad;
	dia_caducidad = (dia_caducidad < 10) ? ("0" + dia_caducidad) : dia_caducidad;
	var fecha_caducidad_establecida = dia_caducidad + "/" + mes_caducidad + "/" + ano_caducidad;

	//console.log("Fecha caducidad adaptada: " + fecha_caducidad_establecida);
	//console.log("----------------------------------");

	return fecha_caducidad_establecida;
};


/* Calcula e total a devolver (capital + intereses). */
//-----------------------------------------------------

function calculaTotalDevolucionAmortizacionFrancesa(capital, interes_mensual, cuotas, meses_forma_pago) {

	var interes_nominal_anual_aplicado = parseInt((interes_mensual) * 12);
	var interes_amortizacion = (Number((interes_nominal_anual_aplicado / 100) / 12)) * meses_forma_pago;
	var cantidad_cuota;
	var capital_restante = capital;
	var cuotas_restantes = cuotas;
	var intereses_cuota;
	var capital_cuota;
	var margen_aproximacion = 0;
	var total_devolucion;

	// Variables de control.
	var intereses_capital = 0;
	var capital_devuelto = 0;

	for (i = 1; i <= cuotas; i++) {

		// Calcula la catidad de la cuota en base al tipo de amortizacion francesa (cuota fija).
		cantidad_cuota = (parseFloat(capital_restante) + parseInt(margen_aproximacion)) * (interes_amortizacion * Math.pow(1 + parseFloat(interes_amortizacion), cuotas_restantes)) / (Math.pow(1 + parseFloat(interes_amortizacion), cuotas_restantes) - 1);

		// Calcula la parte de la cuota que corresponde a intereses. 
		intereses_cuota = capital_restante * interes_amortizacion;

		// Calcula la parte de la cuota que corresponde al capital amortizado.
		capital_cuota = cantidad_cuota - intereses_cuota;

		// Actualiza el capital que queda para deber.
		capital_restante = capital_restante - capital_cuota;

		// Actualiza el numero de cuotas restantes.
		cuotas_restantes -= 1;

		intereses_capital += intereses_cuota;
		capital_devuelto += capital_cuota;

		total_devolucion = parseInt(capital_devuelto) + parseInt(intereses_capital);

	}

	return total_devolucion;
};


/* Recupera los datos de las cuotas del prestamo y las formatea con bootgrid. */
//------------------------------------------------------------------------------

$(document).ready(function () {

	// Define las variables para la actualizacion del estado de la cuota y del boton de finalizacion.
	var id_btn;
	var numero_cuota;

	if ($('input[name=pr_id]').val() != null) {

		$("#lista_cuotas_prestamo").bootgrid({
			searchSettings: {
				delay: 500,
			},
			labels: {
				search: "Filtrar",
				all: "Todas",
				infos: "Mostrando {{ctx.start}} a {{ctx.end}} de {{ctx.total}} resultados",
				loading: "Cargando resultados...",
				noResults: "No hay resultados"
			},
			caseSensitive: false,
			rowCount: [-1, 12, 24, 36],
			formatters: {
				"ct_finalizacion": function (column, row) {
					return "<button type=\"button\" id=\"btn_finalizacion_" + row.ct_id + "\"class=\"btn btn-xs btn-default btn_finalizacion\" data-row-id=\"" + row.ct_numero + "\"><span class=\"glyphicon glyphicon-ok\"></span></button>";
				}
			}
		}).on("loaded.rs.jquery.bootgrid", function () {

			console.log("Lista cuotas cargada");

			// Define el color de los botones de finalizacion en funcion del estado de la cuota una vez se haya cargado la lista de cutas del prestamo.
			defineEstadoBotones();

			// Al pulsar el boton de finalizacion cambia el estado de la cuota en la base de datos dependiendo del estado actual.
			$(this).find(".btn_finalizacion").on("click", function (e) {

				// Asigna los valores a las variables para la actualizacion del estado de la cuota y del boton de finalizacion.
				id_btn = $(this).attr("id");
				id_cuota = $(this).attr("id").slice(17);
				numero_cuota = $(this).data("row-id");
				console.log(id_cuota);
				console.log(numero_cuota);

				// En funcion del estado abre la relativa ventana modal para la confirmacion del cambio.
				if ($(this).hasClass("btn btn-xs btn-default btn_finalizacion")) {
					//console.log("Finalizando cuota");
					$('#ventana3').modal('show');

					// Si se cierra la modal elimina el evento programado para el boton de confirmacion para que no se ejecute mas veces.
					$('#ventana3').on('hidden.bs.modal', function () {
						$(".cambia_estado_cuota").off("click");
					});
				} else {
					//console.log("Activando cuota");
					$('#ventana4').modal('show');

					// Si se cierra la modal elimina el evento programado para el boton de confirmacion para que no se ejecute mas veces.
					$('#ventana4').on('hidden.bs.modal', function () {
						$(".cambia_estado_cuota").off("click");
					});
				}

				// Actualiza el estado de la cuota al confirmar.
				$(".cambia_estado_cuota").on("click", function (e) {

					$.ajax({
						cache: false,
						method: "GET",
						url: "/actualizar_estado_cuota",
						data: {
							id_cuota: id_cuota
						},
						contentType: "appplication/json; charset=utf-8",
						dataType: "json"
					}).done(function (resultado) {

						console.log("Estado cuota: " + resultado.estado_cuota);

						// Actualiza el boton de finalizacion una ves se haya actualizado el estado de la cuota en base de datos.
						actualizaBotonFinalizacionCuota(id_btn, resultado.estado_cuota, numero_cuota);

						// Recarga la pagina para que bootgrid pueda recuperar los datos actualizados.
						window.location.href = "/visualizar_prestamo/:" + $('input[name=pr_id]').val() + "/:" + $('input[name=pd_id]').val() + "/:" + $('input[name=sl_id]').val() + "/:" + $('input[name=cl_id]').val() + "/:" + $('input[name=cl_id_historial]').val();

					}).fail(function (jqXHR, textStatus, errorThrown) {
						// Intercepta el error que se genera en la circumstancia el la que una peticion ajax que ha sido lanzada se ve cancelada si el usuario cambia de pagina.
						if (jqxhr.readyState == 0 || jqxhr.status == 0) {
							alert("Pasa por alto el error");
							return; //Salta el error 
						}
						alert("Se ha generado un error al actualizar el estado de la cuota:\nDatos solicitud: " + jqXHR.status + "\nTipo de error: " + textStatus + "\n" + errorThrown);
					}).always(function (resultado) {
						//alert("Peticion completada: "+resultado);
					});
				});
			});
		});

	} else {

		console.log("Pagina creazione prestamo");

	}
});


// Define el color de los botones en funcion del estado de la cuota al cargar la lista de cuotas.
//-----------------------------------------------------------------------------------------------

function defineEstadoBotones() {

	console.log("Asignando estado botones");

	var tabla = $("#lista_cuotas_prestamo")[0]; // Identifica la primera tabla en la pagina.

	for (i = 1; i <= tabla.rows.length - 1; i++) {

		var linea = tabla.rows[i]; // Identifica la linea de la tabla como elemnto del DOM.
		var $linea = $(linea); // Convierte el elemento del DOM en un objeto jquery.
		var celda_estado_cuota = tabla.rows[i].cells[6]; // Identifica la celda como elemnto del DOM.
		var $celda_estado_cuota = $(celda_estado_cuota); // Convierte el elemento del DOM en un objeto jquery.
		var estado_cuota = $celda_estado_cuota.html(); // Convierte el elemento del DOM en un objeto jquery.

		//console.log($linea.attr("data-row-id"));

		var boton_finalizacion = $("#btn_finalizacion_" + $linea.attr("data-row-id"));

		if (estado_cuota == "Activa" || estado_cuota == "Mora") {
			boton_finalizacion.attr('class', 'btn btn-xs btn-default btn_finalizacion');
		} else if (estado_cuota == "Finalizada") {
			boton_finalizacion.attr('class', 'btn btn-xs btn-success btn_finalizacion');
		} else if (estado_cuota == "Finalizada con mora") {
			boton_finalizacion.attr('class', 'btn btn-xs btn-danger btn_finalizacion');
		}

		////console.log("Cuota numero:" + i + " " +estado_cuota);
		////console.log("Boton:" + boton_finalizacion.attr("id"));
	}
};


// Actualiza el boton de finalizacion de la cuota y acualiza el estado visualizado en la tabla.
//---------------------------------------------------------------------------------------------

function actualizaBotonFinalizacionCuota(id_boton, estado_cuota, numero_cuota) {

	console.log("Actualizando boton finalizacion cuota y valor estado");

	var tabla = $("#lista_cuotas_prestamo")[0];
	var celda = tabla.rows[numero_cuota].cells[6];
	var $celda = $(celda);

	if ($(id_boton).hasClass("btn btn-xs btn-default btn_finalizacion")) {

		if (estado_cuota == 1) {
			$(id_boton).attr('class', 'btn btn-xs btn-success btn_finalizacion');
			$celda.html('Finalizada');
		} else if (estado_cuota == 2) {
			$(id_boton).attr('class', 'btn btn-xs btn-danger btn_finalizacion');
			$celda.html('Finalizada con mora');
		}

	} else if ($(id_boton).attr('class', 'btn btn-xs btn-success btn_finalizacion') || $(id_boton).attr('class', 'btn btn-xs btn-danger btn_finalizacion')) {

		if (estado_cuota == 3) {
			$(id_boton).attr('class', 'btn btn-xs btn-default btn_finalizacion');
			$celda.html('Activa');
		} else if (estado_cuota == 4) {
			$(id_boton).attr('class', 'btn btn-xs btn-default btn_finalizacion');
			$celda.html('Mora');
		}
	}
};