/* Inicializa los campos telefonicos para la validacion. */
//---------------------------------------------------------

$(document).ready(function () {
	$('#formulario_grupo')
		.find('[name="gr_telefono"]')
		.intlTelInput({
			utilsScript: '/intl-tel-input-6.4.0/lib/libphonenumber/build/utils.js',
			autoPlaceholder: true,
			preferredCountries: ['do']
		});
	$('#formulario_grupo')
		.find('[name="gr_fax"]')
		.intlTelInput({
			utilsScript: '/intl-tel-input-6.4.0/lib/libphonenumber/build/utils.js',
			autoPlaceholder: true,
			preferredCountries: ['do']
		});
});


/* Valida los datos del formulario grupo. */
//------------------------------------------------

$(document).ready(function () {
	$('#valida_formulario').click(function () {

		//alert("validando formulario");

		$('#formulario_grupo').bootstrapValidator({
			message: 'Este valor no es valido',
			feedbackIcons: {
				valid: 'glyphicon glyphicon-ok',
				invalid: 'glyphicon glyphicon-remove',
				validating: 'glyphicon glyphicon-refresh'
			},
			fields: {

				// Datos grupo:

				gr_nombre: {
					validators: {
						notEmpty: {
							message: 'El nombre del grupo es requerida.'
						}
					}
				},
				gr_comision: {
					validators: {
						notEmpty: {
							message: 'La comision es requerida.'
						},
						callback: {
							message: 'Seleccionar un valor',
							callback: function (value, validator, $field) {
								var options = validator.getFieldElements('gr_comision').val();
								return (options != 'no_seleccionado');
							}
						}
					}
				},
				gr_nombre_referente: {
					validators: {
						notEmpty: {
							message: 'El nombre del referente es requerido.'
						},
						regexp: {
							regexp: /^[a-z\s]+$/i,
							message: 'El nombre del referente solo puede contener caracteres alfabeticos y espacios.'
						}
					}
				},
				gr_apellido_referente: {
					validators: {
						notEmpty: {
							message: 'El apellido del referente es requerido.'
						},
						regexp: {
							regexp: /^[a-z\s]+$/i,
							message: 'El apellido del referente solo puede contener caracteres alfabeticos y espacios.'
						}
					}
				},
				gr_telefono: {
					validators: {
						notEmpty: {
							message: 'El numero de telefono es requerido.'
						},
						callback: {
							message: 'El formato del numero introducido no es valido',
							callback: function (value, validator, $field) {
								return value === '' || $field.intlTelInput('isValidNumber');
							}
						}
					}
				},
				gr_fax: {
					validators: {
						notEmpty: {
							message: 'El numero de fax es requerido.'
						},
						callback: {
							message: 'El formato del numero introducido no es valido',
							callback: function (value, validator, $field) {
								return value === '' || $field.intlTelInput('isValidNumber');
							}
						}
					}
				},
				gr_correo_electronico: {
					validators: {
						notEmpty: {
							message: 'El correo electronico es requerido.'
						},
						emailAddress: {
							message: 'Introducir un correo electronico valido.'
						},
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
		$('#formulario_grupo').bootstrapValidator('defaultSubmit');
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