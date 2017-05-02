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


/* Inicializa el datepicker para la fecha de nacimiento. */
//---------------------------------------------------------

$(document).ready(function () {
    $('#selector_cl_fecha_nacimiento').datepicker({
        format: 'dd/mm/yyyy',
        endDate: fecha_nacimiento_minima,
        orientation: "bottom",
        autoclose: true,
        language: "es"
    }).on('changeDate', function (e) {
        // Si el formulario ya ha sido validado, cada vez que se cambia la fecha de nacimiento se vuelve a validar.
        if ($('#formulario_cliente').hasClass('bv-form')) $('#formulario_cliente').bootstrapValidator('revalidateField', 'cl_fecha_nacimiento');
    });
});


/* Inicializa los campos telefonicos para la validacion. */
//---------------------------------------------------------

$(document).ready(function () {
    $('#formulario_cliente')
        .find('[name="cl_celular"]')
        .intlTelInput({
            utilsScript: '/intl-tel-input-6.4.0/lib/libphonenumber/build/utils.js',
            autoPlaceholder: true,
            preferredCountries: ['do']
        });
    $('#formulario_cliente')
        .find('[name="cl_otro_numero"]')
        .intlTelInput({
            utilsScript: '/intl-tel-input-6.4.0/lib/libphonenumber/build/utils.js',
            autoPlaceholder: true,
            preferredCountries: ['do']
        });
    $('#formulario_cliente')
        .find('[name="cl_telefono_residencia"]')
        .intlTelInput({
            utilsScript: '/intl-tel-input-6.4.0/lib/libphonenumber/build/utils.js',
            autoPlaceholder: true,
            preferredCountries: ['do']
        });
    $('#formulario_cliente')
        .find('[name="cl_telefono_empresa"]')
        .intlTelInput({
            utilsScript: '/intl-tel-input-6.4.0/lib/libphonenumber/build/utils.js',
            autoPlaceholder: true,
            preferredCountries: ['do']
        });
    $('#formulario_cliente')
        .find('[name="cl_conyuge_telefono_empresa"]')
        .intlTelInput({
            utilsScript: '/intl-tel-input-6.4.0/lib/libphonenumber/build/utils.js',
            autoPlaceholder: true,
            preferredCountries: ['do']
        });
    $('#formulario_cliente')
        .find('[name="cl_telefono_otra_empresa"]')
        .intlTelInput({
            utilsScript: '/intl-tel-input-6.4.0/lib/libphonenumber/build/utils.js',
            autoPlaceholder: true,
            preferredCountries: ['do']
        });
    $('#formulario_cliente')
        .find('[name="cl_telefono_relacion_1"]')
        .intlTelInput({
            utilsScript: '/intl-tel-input-6.4.0/lib/libphonenumber/build/utils.js',
            autoPlaceholder: true,
            preferredCountries: ['do']
        });
    $('#formulario_cliente')
        .find('[name="cl_telefono_relacion_2"]')
        .intlTelInput({
            utilsScript: '/intl-tel-input-6.4.0/lib/libphonenumber/build/utils.js',
            autoPlaceholder: true,
            preferredCountries: ['do']
        });
});


/* Valida los datos del formulario cliente. */
//---------------------------------------------

$(document).ready(function () {
    $('#valida_formulario').click(function () {

        //alert("validando formulario");

        $('#formulario_cliente').bootstrapValidator({
            message: 'Este valor no es valido',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {

                // Datos identificativos:

                cl_nombre: {
                    validators: {
                        notEmpty: {
                            message: 'El nombre es requerido.'
                        },
                        regexp: {
                            regexp: /^[a-z\s]+$/i,
                            message: 'El nombre solo puede contener caracteres alfabeticos y espacios.'
                        }
                    }
                },
                cl_apellido: {
                    validators: {
                        notEmpty: {
                            message: 'El apellido es requerido.'
                        },
                        regexp: {
                            regexp: /^[a-z\s]+$/i,
                            message: 'El apellido solo puede contener caracteres alfabeticos y espacios.'
                        }
                    }
                },
                cl_fecha_nacimiento: {
                    validators: {
                        notEmpty: {
                            message: 'La fecha de nacimiento es requerida.'
                        },
                        date: {
                            format: 'DD/MM/YYYY',
                            max: fecha_nacimiento_minima,
                            message: 'El cliente tiene que ser mayor de edad.'
                        }
                    }
                },
                cl_tipo_documento: {
                    validators: {
                        notEmpty: {
                            message: 'El tipo de documento es requerido.'
                        },
                        callback: {
                            message: 'Seleccionar un valor',
                            callback: function (value, validator, $field) {
                                var options = validator.getFieldElements('cl_tipo_documento').val();
                                return (options != 'no_seleccionado');
                            }
                        }
                    }
                },
                cl_numero_documento: {
                    verbose: false,
                    validators: {
                        notEmpty: {
                            message: 'El numero de documento es requerido.'
                        },
                        remote: {
                            message: 'Ya existe un cliente con el mismo numero de documento',
                            url: '/verificar_cliente',
                            type: 'POST',
                            data: function (validator, $field, value) {
                                return {
                                    cl_tipo_documento: validator.getFieldElements('cl_tipo_documento').val()
                                };
                            }
                        },
                        callback: {
                            callback: function (value, validator, $field) {

                                var tipo_documento_seleccionado = validator.getFieldElements("cl_tipo_documento").val();
                                var numero_documento = validator.getFieldElements("cl_numero_documento").val();

                                //alert(tipo_documento_seleccionado+" "+numero_documento);

                                if (tipo_documento_seleccionado == "cedula") {

                                    var expresion = new RegExp("^\[0-9]{3}\-\[0-9]{7}\-\[0-9]{1}$");

                                    if (expresion.test(numero_documento)) {

                                        console.log("Numero de cedula valido");

                                    } else {
                                        return {
                                            valid: false,
                                            message: 'El numero de cedula tiene que respetar el formafo numerico 000-0000000-0.',
                                        }
                                    }

                                } else if (tipo_documento_seleccionado == "pasaporte") {

                                    // Añadir las expresiones regulares que hagan falta para cubrir los diferentes casos de numeracion de pasaporte.
                                    var expresion_1 = new RegExp('^[A-Z]{0,3}[0-9]{7}$');
                                    var expresion_2 = new RegExp('^[0-9]{9}$');

                                    if (expresion_1.test(numero_documento) || expresion_2.test(numero_documento)) {

                                        console.log("Numero de pasaporte valido");
                                        console.log(expresion_1.test(numero_documento));
                                        console.log(expresion_2.test(numero_documento));

                                    } else {

                                        console.log(expresion_1.test(numero_documento));
                                        console.log(expresion_2.test(numero_documento));

                                        return {
                                            valid: false,
                                            message: 'El numero de pasaporte tiene que respetar el formafo numerico AA00000000.',
                                        }
                                    }
                                }

                                return true;

                            }
                        }
                    }
                },

                // Datos personales:

                cl_celular: {
                    validators: {
                        notEmpty: {
                            message: 'El numero de telefono celular es requerido.'
                        },
                        callback: {
                            message: 'El formato del numero introducido no es valido',
                            callback: function (value, validator, $field) {
                                return value === '' || $field.intlTelInput('isValidNumber');
                            }
                        }
                    }
                },
                cl_otro_numero: {
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
                        notEmpty: {
                            message: 'El correo electronico es requerido.'
                        },
                        emailAddress: {
                            message: 'Introducir un correo electronico valido.'
                        }
                    }
                },
                cl_estado_civil: {
                    validators: {
                        notEmpty: {
                            message: 'El estado civil es requerido.'
                        },
                        callback: {
                            message: 'Seleccionar un valor',
                            callback: function (value, validator, $field) {
                                var options = validator.getFieldElements('cl_estado_civil').val();
                                return (options != '0');
                            }
                        }
                    }
                },
                cl_hijos: {
                    validators: {
                        notEmpty: {
                            message: 'El numero de hijos es requerido.'
                        },
                        callback: {
                            message: 'Seleccionar un valor',
                            callback: function (value, validator, $field) {
                                var options = validator.getFieldElements('cl_hijos').val();
                                return (options != 'no_seleccionado');
                            }
                        }
                    }
                },
                cl_nombre_conyuge: {
                    validators: {
                        notEmpty: {
                            message: 'El nombre del conyuge es requerido.'
                        },
                        callback: {
                            message: 'Seleccionar un valor',
                            callback: function (value, validator, $field) {
                                var options = validator.getFieldElements('cl_estado_civil').val();
                                return (options != 'no_seleccionado');
                            }
                        },
                        regexp: {
                            regexp: /^[a-z\s]+$/i,
                            message: 'El nombre del conyuge solo puede contener caracteres alfabeticos y espacios.'
                        }
                    }
                },
                cl_apellido_conyuge: {
                    validators: {
                        notEmpty: {
                            message: 'El apellido del conyuge es requerido.'
                        },
                        callback: {
                            message: 'Seleccionar un valor',
                            callback: function (value, validator, $field) {
                                var options = validator.getFieldElements('cl_estado_civil').val();
                                return (options != 'no_seleccionado');
                            }
                        },
                        regexp: {
                            regexp: /^[a-z\s]+$/i,
                            message: 'El apellido del conyuge solo puede contener caracteres alfabeticos y espacios.'
                        }
                    }
                },

                // Residencia:

                cl_direccion_residencia: {
                    validators: {
                        notEmpty: {
                            message: 'La direccion de residencia es requerida.'
                        }
                    }
                },
                cl_codigo_postal: {
                    validators: {
                        notEmpty: {
                            message: 'El codigo postal es requerido.'
                        },
                        regexp: {
                            regexp: /^\d{5}$/,
                            message: 'El codigo postal tiene que respetar el formafo numerico 00000.'
                        }
                    }
                },
                cl_ciudad: {
                    validators: {
                        notEmpty: {
                            message: 'La ciudad es requerida.'
                        },
                        regexp: {
                            regexp: /^[a-z\s]+$/i,
                            message: 'La ciudad solo puede contener caracteres alfabeticos y espacios.'
                        }
                    }
                },
                cl_pais: {
                    validators: {
                        notEmpty: {
                            message: 'El pais es requerido.'
                        },
                        regexp: {
                            regexp: /^[a-z\s]+$/i,
                            message: 'El pais solo puede contener caracteres alfabeticos y espacios.'
                        }
                    }
                },
                cl_tiempo_residiendo: {
                    validators: {
                        notEmpty: {
                            message: 'El tiempo residiendo es requerido.'
                        },
                        callback: {
                            message: 'Seleccionar un valor',
                            callback: function (value, validator, $field) {
                                var options = validator.getFieldElements('cl_tiempo_residiendo').val();
                                return (options != '0');
                            }
                        }
                    }
                },
                cl_propiedad: {
                    validators: {
                        notEmpty: {
                            message: 'La propiedad es requerida.'
                        },
                        callback: {
                            message: 'Seleccionar un valor',
                            callback: function (value, validator, $field) {
                                var options = validator.getFieldElements('cl_propiedad').val();
                                return (options != '0');
                            }
                        }
                    }
                },
                cl_pago_mensual: {
                    validators: {
                        notEmpty: {
                            message: 'El pago mensual es requerido.'
                        },
                        digits: {
                            message: 'El pago mensual solo puede contener valores numericos sin puntos ni comas. '
                        }
                    }
                },
                cl_telefono_residencia: {
                    validators: {
                        callback: {
                            message: 'El formato del numero introducido no es valido',
                            callback: function (value, validator, $field) {
                                return value === '' || $field.intlTelInput('isValidNumber');
                            }
                        }
                    }
                },
                cl_nombre_propietario: {
                    validators: {
                        notEmpty: {
                            message: 'El nombre del propietario es requerido.'
                        },
                        regexp: {
                            regexp: /^[a-z\s]+$/i,
                            message: 'El nombre del propietario solo puede contener caracteres alfabeticos y espacios.'
                        }
                    }
                },
                cl_apellido_propietario: {
                    validators: {
                        notEmpty: {
                            message: 'El apellido del propietario es requerido.'
                        },
                        regexp: {
                            regexp: /^[a-z\s]+$/i,
                            message: 'El apellido del propietario solo puede contener caracteres alfabeticos y espacios.'
                        }
                    }
                },

                // Informacion academica y laboral.

                cl_nivel_academico: {
                    validators: {
                        notEmpty: {
                            message: 'El nivel academico es requerido.'
                        },
                        callback: {
                            message: 'Seleccionar un valor',
                            callback: function (value, validator, $field) {
                                var options = validator.getFieldElements('cl_nivel_academico').val();
                                return (options != '0');
                            }
                        }
                    }
                },
                cl_titulo: {
                    validators: {
                        notEmpty: {
                            message: 'El titulo es requerido.'
                        }
                    }
                },
                cl_centro_estudio: {
                    validators: {
                        notEmpty: {
                            message: 'El centro de estudio es requerido.'
                        }
                    }
                },
                cl_empresa: {
                    validators: {
                        notEmpty: {
                            message: 'La empresa para la que trabaja es requerida.'
                        }
                    }
                },
                cl_telefono_empresa: {
                    validators: {
                        notEmpty: {
                            message: 'El telefono de la empresa para la que trabaja es requerido.'
                        },
                        callback: {
                            message: 'El formato del numero introducido no es valido',
                            callback: function (value, validator, $field) {
                                return value === '' || $field.intlTelInput('isValidNumber');
                            }
                        }
                    }
                },
                cl_cargo: {
                    validators: {
                        notEmpty: {
                            message: 'El cargo que ocupa en la empresa es requerido.'
                        }
                    }
                },
                cl_antiguedad: {
                    validators: {
                        notEmpty: {
                            message: 'La antiguedad es requerida.'
                        },
                        callback: {
                            message: 'Seleccionar un valor',
                            callback: function (value, validator, $field) {
                                var options = validator.getFieldElements('cl_antiguedad').val();
                                return (options != '0');
                            }
                        }
                    }
                },
                cl_cobro: {
                    validators: {
                        notEmpty: {
                            message: 'La forma de cobro es requerida.'
                        },
                        callback: {
                            message: 'Seleccionar un valor',
                            callback: function (value, validator, $field) {
                                var options = validator.getFieldElements('cl_cobro').val();
                                return (options != '0');
                            }
                        }
                    }
                },
                cl_ingreso_mensual: {
                    validators: {
                        notEmpty: {
                            message: 'El ingreso mensual es requerido.'
                        },
                        digits: {
                            message: 'El ingreso mensual solo puede contener valores numericos sin puntos ni comas. (Omitir los decimales).'
                        }
                    }
                },
                /*cl_conyuge_nivel_academico: {
				validators: {
					notEmpty: {
						message: 'El nivel academico es requerido.'
					},
					callback: {
                        message: 'Seleccionar un valor',
                        callback: function (value, validator, $field) {
							var options = validator.getFieldElements('cl_nivel_academico').val();
                            return (options != '0');
                        }
                    }
				}
			},
			cl_conyuge_titulo: {
				validators: {
					notEmpty: {
						message: 'El titulo es requerido.'
					}
				}
			},
			cl_conyuge_centro_estudio: {
				validators: {
					notEmpty: {
						message: 'El centro de estudio es requerido.'
					}
				}
			},*/
                cl_conyuge_telefono_empresa: {
                    validators: {
                        callback: {
                            message: 'El formato del numero introducido no es valido',
                            callback: function (value, validator, $field) {
                                return value === '' || $field.intlTelInput('isValidNumber');
                            }
                        }
                    }
                },
                cl_conyuge_ingreso_mensual: {
                    validators: {
                        digits: {
                            message: 'El ingreso mensual solo puede contener valores numericos sin puntos ni comas. (Omitir los decimales).'
                        }
                    }
                },

                // Otras fuentes de ingresos e informacion financiera:

                cl_telefono_otra_empresa: {
                    validators: {
                        callback: {
                            message: 'El formato del numero introducido no es valido',
                            callback: function (value, validator, $field) {
                                return value === '' || $field.intlTelInput('isValidNumber');
                            }
                        }
                    }
                },
                cl_otro_ingreso_mensual: {
                    validators: {
                        digits: {
                            message: 'El ingreso mensual solo puede contener valores numericos sin puntos ni comas. (Omitir los decimales).'
                        }
                    }
                },
                cl_nombre_banco_1: {
                    validators: {
                        notEmpty: {
                            message: 'El nombre del banco es requerido.'
                        }
                    }
                },
                cl_numero_cuenta_1: {
                    validators: {
                        notEmpty: {
                            message: 'El numero de cuenta es requerido.'
                        },
                        iban: {
                            message: 'El valor no es un numero de cuenta IBAN valido'
                        }
                    }
                },
                cl_numero_cuenta_2: {
                    validators: {
                        iban: {
                            message: 'El valor no es un numero de cuenta IBAN valido'
                        }
                    }
                },
                cl_nombre_banco_tarjeta_1: {
                    validators: {
                        notEmpty: {
                            message: 'El nombre del banco es requerido.'
                        }
                    }
                },
                cl_limite_credito_tarjeta_1: {
                    validators: {
                        notEmpty: {
                            message: 'El limite de credito de la tarjeta es requerido.'
                        },
                        digits: {
                            message: 'El limite de credito de la tarjeta solo puede contener valores numericos sin puntos ni comas. (Omitir los decimales).'
                        }
                    }
                },
                cl_limite_credito_tarjeta_2: {
                    validators: {
                        digits: {
                            message: 'El limite de credito de la tarjeta solo puede contener valores numericos sin puntos ni comas. (Omitir los decimales).'
                        }
                    }
                },

                // Datos del vehiculo:

                cl_marca_vehiculo: {
                    validators: {
                        notEmpty: {
                            message: 'La marca del vehiculo es requerida.'
                        }
                    }
                },
                cl_modelo_vehiculo: {
                    validators: {
                        notEmpty: {
                            message: 'El modelo del vehiculo es requerido.'
                        }
                    }
                },
                cl_ano_vehiculo: {
                    validators: {
                        notEmpty: {
                            message: 'El año de construcion del vehiculo es requerido.'
                        },
                        regexp: {
                            regexp: /^\d{4}$/,
                            message: 'El año de construcion del vehiculo tiene que respetar el formafo numerico AAAA.'
                        }
                    }
                },
                cl_placa_vehiculo: {
                    validators: {
                        notEmpty: {
                            message: 'El numero de placa es requerido.'
                        }
                    }
                },
                cl_valor_vehiculo: {
                    validators: {
                        notEmpty: {
                            message: 'El valor del vehiculo es requerido.'
                        },
                        digits: {
                            message: 'El valor del vehiculo solo puede contener valores numericos sin puntos ni comas. (Omitir los decimales).'
                        }
                    }
                },

                // Referencias personales y/o comerciales:

                cl_nombre_completo_relacion_1: {
                    validators: {
                        notEmpty: {
                            message: 'El nombre y el apellido son requeridos.'
                        },
                        regexp: {
                            regexp: /^[a-z\s]+$/i,
                            message: 'El nombre y el apellido solo pueden contener caracteres alfabeticos y espacios.'
                        }
                    }
                },
                cl_tipo_relacion_1: {
                    validators: {
                        notEmpty: {
                            message: 'El tipo de relacion es requerido.'
                        },
                        callback: {
                            message: 'Seleccionar un valor',
                            callback: function (value, validator, $field) {
                                var options = validator.getFieldElements('cl_tipo_relacion_1').val();
                                return (options != '0');
                            }
                        }
                    }
                },
                cl_telefono_relacion_1: {
                    validators: {
                        notEmpty: {
                            message: 'El numero de telefono de la parsona indicada es requerido.'
                        },
                        callback: {
                            message: 'El formato del numero introducido no es valido',
                            callback: function (value, validator, $field) {
                                return value === '' || $field.intlTelInput('isValidNumber');
                            }
                        }
                    }
                },
                cl_nombre_completo_relacion_2: {
                    validators: {
                        notEmpty: {
                            message: 'El nombre y el apellido son requeridos.'
                        },
                        regexp: {
                            regexp: /^[a-z\s]+$/i,
                            message: 'El nombre y el apellido solo pueden contener caracteres alfabeticos y espacios.'
                        }
                    }
                },
                cl_tipo_relacion_2: {
                    validators: {
                        notEmpty: {
                            message: 'El tipo de relacion es requerido.'
                        },
                        callback: {
                            message: 'Seleccionar un valor',
                            callback: function (value, validator, $field) {
                                var options = validator.getFieldElements('cl_tipo_relacion_2').val();
                                return (options != '0');
                            }
                        }
                    }
                },
                cl_telefono_relacion_2: {
                    validators: {
                        notEmpty: {
                            message: 'El numero de telefono de la parsona indicada es requerido.'
                        },
                        callback: {
                            message: 'El formato del numero introducido no es valido',
                            callback: function (value, validator, $field) {
                                return value === '' || $field.intlTelInput('isValidNumber');
                            }
                        }
                    }
                },

                // Grupo de asignacion:

                cl_grupo: {
                    validators: {
                        notEmpty: {
                            message: 'El grupo de asignacion es requerido.'
                        },
                        callback: {
                            message: 'Seleccionar un valor',
                            callback: function (value, validator, $field) {
                                var options = validator.getFieldElements('cl_grupo').val();
                                return (options != '0');
                            }
                        }
                    }
                }
            }
        }).on('success.form.bv', function (e) {

            // Previene el envio del formulario y abre la ventana modal para que se confirme la creacion del nuevo cliente.
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
        $('#formulario_cliente').bootstrapValidator('defaultSubmit');
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


/* Desactiva el campo numero documento al cargar la pagina de creacion cliente. */
//--------------------------------------------------------------------------------

$(document).ready(function () {
    var selector_tipo_documento = document.getElementById("cl_tipo_documento");
    if (selector_tipo_documento.disabled != true) desabilitaCampoNumeroDocumento(selector_tipo_documento);
});


/* Activa o desactiva el campo numero documento al seleccionar el tipo de documento. */
//-------------------------------------------------------------------------------------

function desabilitaCampoNumeroDocumento(selector) {

    var estado_campo;
    var indiceOpcionSeleccionada = selector.selectedIndex;

    var cmp_numero_documento = document.getElementById("cl_numero_documento");

    if (indiceOpcionSeleccionada != 0) {

        estado_campo = false;

        cmp_numero_documento.disabled = estado_campo;

    } else {

        estado_campo = true;

        cmp_numero_documento.value = "";
        cmp_numero_documento.disabled = estado_campo;

    }
};


/* Desactiva los campos conyuge al cargar la pagina de creacion cliente. */
//-------------------------------------------------------------------------

$(document).ready(function () {
    var selector_estado_civil = document.getElementById("cl_estado_civil");
    if (selector_estado_civil.disabled != true) desabilitaCamposConyuge(selector_estado_civil);
});


/* Activa o desactiva los campos conyuge al seleccionar el estado civil. */
//-------------------------------------------------------------------------

function desabilitaCamposConyuge(selector) {

    var estado_campo;
    var indiceOpcionSeleccionada = selector.selectedIndex;

    var cmp_nombre_conyuge = document.getElementById("cl_nombre_conyuge");
    var cmp_apellido_conyuge = document.getElementById("cl_apellido_conyuge");
    var cmp_conyuge_nivel_academico = document.getElementById("cl_conyuge_nivel_academico");
    var cmp_conyuge_titulo = document.getElementById("cl_conyuge_titulo");
    var cmp_conyuge_centro_estudio = document.getElementById("cl_conyuge_centro_estudio");
    var cmp_conyuge_empresa = document.getElementById("cl_conyuge_empresa");
    var cmp_conyuge_telefono_empresa = document.getElementById("cl_conyuge_telefono_empresa");
    var cmp_conyuge_cargo = document.getElementById("cl_conyuge_cargo");
    var cmp_conyuge_antiguedad = document.getElementById("cl_conyuge_antiguedad");
    var cmp_conyuge_ingreso_mensual = document.getElementById("cl_conyuge_ingreso_mensual");
    var cmp_conyuge_cobro = document.getElementById("cl_conyuge_cobro");

    if (indiceOpcionSeleccionada == 1) { // El indice 1 del selector "cl_estado_civil" se corresponde al valor "1".

        estado_campo = false;

        cmp_nombre_conyuge.disabled = estado_campo;
        cmp_apellido_conyuge.disabled = estado_campo;
        cmp_conyuge_nivel_academico.disabled = estado_campo;
        cmp_conyuge_titulo.disabled = estado_campo;
        cmp_conyuge_centro_estudio.disabled = estado_campo;
        cmp_conyuge_empresa.disabled = estado_campo;
        cmp_conyuge_telefono_empresa.disabled = estado_campo;
        cmp_conyuge_cargo.disabled = estado_campo;
        cmp_conyuge_antiguedad.disabled = estado_campo;
        cmp_conyuge_ingreso_mensual.disabled = estado_campo;
        cmp_conyuge_cobro.disabled = estado_campo;

    } else {

        estado_campo = true;

        cmp_nombre_conyuge.value = "";
        cmp_apellido_conyuge.value = "";
        cmp_conyuge_nivel_academico.selectedIndex = 0;
        cmp_conyuge_titulo.value = "";
        cmp_conyuge_centro_estudio.value = "";
        cmp_conyuge_empresa.value = "";
        cmp_conyuge_telefono_empresa.value = "";
        cmp_conyuge_cargo.value = "";
        cmp_conyuge_antiguedad.selectedIndex = 0;
        cmp_conyuge_ingreso_mensual.value = "";
        cmp_conyuge_cobro.selectedIndex = 0;

        cmp_nombre_conyuge.disabled = estado_campo;
        cmp_apellido_conyuge.disabled = estado_campo;
        cmp_conyuge_nivel_academico.disabled = estado_campo;
        cmp_conyuge_titulo.disabled = estado_campo;
        cmp_conyuge_centro_estudio.disabled = estado_campo;
        cmp_conyuge_empresa.disabled = estado_campo;
        cmp_conyuge_telefono_empresa.disabled = estado_campo;
        cmp_conyuge_cargo.disabled = estado_campo;
        cmp_conyuge_antiguedad.disabled = estado_campo;
        cmp_conyuge_ingreso_mensual.disabled = estado_campo;
        cmp_conyuge_cobro.disabled = estado_campo;

    }
};


/* Cambia la etiqueta del campo numero documento en funcion de tipo de documento seleccionado. */
//-----------------------------------------------------------------------------------------------

$(document).ready(function () {
    $('#cl_tipo_documento').change(function () {
        var documento_seleccionado = $("#cl_tipo_documento").val();
        if (documento_seleccionado == "no_seleccionado") {
            $("#cl_etiqueta_campo_numero_documento").text("Nº documento");
        } else {
            $("#cl_etiqueta_campo_numero_documento").text("Nº " + documento_seleccionado);
        }
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