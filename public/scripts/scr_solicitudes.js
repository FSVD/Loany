/* Calcula la fecha de recepcion maxima. */
//-----------------------------------------

var fecha_recepcion_maxima = new Date() + 1;

$(document).ready(function () {
    var fecha_actual = new Date();
    var dia = fecha_actual.getDate();
    var mes = fecha_actual.getMonth() + 1;
    var ano = fecha_actual.getFullYear();
    fecha_recepcion_maxima = dia + "/" + mes + "/" + ano;
});


/* Inicializa el datepicker para la fecha de recepcion. */
//--------------------------------------------------------

$(document).ready(function () {
    $('#selector_sl_fecha_recepcion').datepicker({
        format: 'dd/mm/yyyy',
        endDate: fecha_recepcion_maxima,
        orientation: "bottom",
        autoclose: true,
        language: "es"
    }).on('changeDate', function (e) {
        // Si el formulario ya ha sido validado, cada vez que se cambia la fecha de recepcion se vuelve a validar.
        if ($('#formulario_solicitud').hasClass('bv-form')) $('#formulario_solicitud').bootstrapValidator('revalidateField', 'sl_fecha_recepcion');
    });
});


/* Valida los datos del formulario solicitud. */
//------------------------------------------------

$(document).ready(function () {
    $('#valida_formulario').click(function () {

        //alert("validando formulario");

        $('#formulario_solicitud').bootstrapValidator({
            message: 'Este valor no es valido',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {

                // Datos solicitud:

                sl_fecha_recepcion: {
                    validators: {
                        notEmpty: {
                            message: 'La fecha de recepcion es requerida.'
                        },
                        date: {
                            format: 'DD/MM/YYYY',
                            max: fecha_recepcion_maxima,
                            message: 'La fecha de recepción no puede ser posterior a la fecha actual.'
                        }
                    }
                },
                sl_producto: {
                    validators: {
                        notEmpty: {
                            message: 'El tipo de producto es requerido.'
                        },
                        callback: {
                            message: 'Seleccionar un valor',
                            callback: function (value, validator, $field) {
                                var options = validator.getFieldElements('sl_producto').val();
                                return (options != 'no_seleccionado');
                            }
                        }
                    }
                },
                sl_cantidad_solicitada: {
                    validators: {
                        notEmpty: {
                            message: 'La cantidad solicitada es requerida.'
                        },
                        callback: {
                            message: 'Seleccionar un valor',
                            callback: function (value, validator, $field) {
                                var options = validator.getFieldElements('sl_cantidad_solicitada').val();
                                return (options != 'no_seleccionado');
                            }
                        }
                    }
                },
                sl_numero_cuenta_transferencia: {
                    validators: {
                        notEmpty: {
                            message: 'El numero de cuenta es requerido.'
                        },
                        iban: {
                            message: 'El valor no es un numero de cuenta IBAN valido'
                        }
                    }
                },
                sl_nombre_banco_transferencia: {
                    validators: {
                        notEmpty: {
                            message: 'El nombre del banco es requerido.'
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
        $('#formulario_solicitud').bootstrapValidator('defaultSubmit');
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


/* Carga la select de cantidades disponibles para un tipo de producto. */
//-----------------------------------------------------------------------

$(document).ready(function () {
    $('#sl_producto').change(function () {
        //alert("Ha sido cambiado el producto a: "+$("#sl_producto").val());
        if ($('#sl_producto').val() == "no_seleccionado") {
            $('#sl_cantidad_solicitada').find('option').remove().end();
            $('#sl_cantidad_solicitada').append('<option value="no_seleccionado">Selecciona</option>');
            $('#sl_cantidad_solicitada').prop('disabled', 'disabled');
        } else {
            $("#sl_cantidad_solicitada").removeAttr("disabled");
            $.ajax({
                url: "/calcular_cantidades",
                data: {
                    producto_seleccionado: $("#sl_producto").val()
                },
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                type: "get"
            }).done(function (resultado) {
                $('#sl_cantidad_solicitada').find('option').remove().end();
                $('#sl_cantidad_solicitada').append('<option value="no_seleccionado">Selecciona</option>');
                $.each(resultado, function (i, valor) {
                    $('#sl_cantidad_solicitada').append('<option value="' + resultado[i] + '">' + resultado[i] + '</option>');
                });
            }).fail(function (jqXHR, textStatus, errorThrown) {
                alert("Se ha generado un error al cargar las cantidades.\nDatos solicitud: " + jqXHR.status + "\nTipo de error: " + textStatus + "\n" + errorThrown);
            }).always(function (resultado) {
                //alert("Peticion completada: "+resultado);
            });
        };
    });
});


/* Recupera la cantidad solicitada. */
//------------------------------------

$(document).ready(function () {
    if ($('#sl_producto').val() == "no_seleccionado") {
        $('#sl_cantidad_solicitada').append('<option value="no_seleccionado">Selecciona</option>');
        $('#sl_cantidad_solicitada').prop('disabled', 'disabled');
        //alert("La solicitud no ha sido guardada todavia");
    } else {
        $.ajax({
            url: "/calcular_cantidades",
            data: {
                producto_seleccionado: $("#sl_producto").val()
            },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            type: "get"
        }).done(function (resultado) {
            $('#sl_cantidad_solicitada').find('option').remove().end();
            $.each(resultado, function (i, valor) {
                $('#sl_cantidad_solicitada').append('<option value="' + resultado[i] + '">' + resultado[i] + '</option>');
            });

            var solicitud = $("[name=sl_id]").val();
            //alert("Recuperando la cantidad solicitada para la solicitud: "+solicitud);
            $.ajax({
                url: "/recuperar_cantidad_solicitada",
                data: {
                    solicitud: solicitud
                },
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                type: "get"
            }).done(function (resultado) {
                //alert("La cantidad solicitada para la solicitud "+solicitud+" es: "+resultado);
                $('#sl_cantidad_solicitada > option[value="' + resultado + '"]').attr("selected", "selected");
            }).fail(function (jqXHR, textStatus, errorThrown) {

                // Intercepta el error que se genera en la circumstancia el la que una peticion ajax que ha sido lanzada se ve cancelada si el usuario cambia de pagina.
                if (jqxhr.readyState == 0 || jqxhr.status == 0) {
                    alert("Pasa por alto el error");
                    return; //Salta el error 
                }
                alert("Se ha generado un error al recuperar la cantidad solicitada.\nDatos solicitud: " + jqXHR.status + "\nTipo de error: " + textStatus + "\n" + errorThrown);
            }).always(function (resultado) {
                //alert("Peticion completada: "+resultado);
            });
        }).fail(function (jqXHR, textStatus, errorThrown) {

            // Intercepta el error que se genera en la circumstancia el la que una peticion ajax que ha sido lanzada se ve cancelada si el usuario cambia de pagina.
            if (jqxhr.readyState == 0 || jqxhr.status == 0) {
                alert("Pasa por alto el error");
                return; //Salta el error 
            }
            alert("Se ha generado un error al cargar las cantidades.\nDatos solicitud: " + jqXHR.status + "\nTipo de error: " + textStatus + "\n" + errorThrown);
        }).always(function (resultado) {
            //alert("Peticion completada: "+resultado);
        });
    };
});


/* Define los atributos del formulario de creacion y visualizacion del prestamo para la solicitud. */
//---------------------------------------------------------------------------------------------------

$(document).ready(function () {
    var existencia_prestamo = $("[name=sl_existencia_prestamo]").val();
    if (existencia_prestamo == 1) {
        $("#variables_creacion_visualizacion_prestamo").attr("action", "/recuperar_prestamo");
    } else if (existencia_prestamo == 0) {
        $("#variables_creacion_visualizacion_prestamo").attr("action", "/crear_prestamo");
    }
});


/* Detecta al salir de la pagina si ha sido creado el prestamo, en caso negativo pone la solicitud en estado pendiente. */
//------------------------------------------------------------------------------------------------------------------------

$(document).ready(function () {

    window.onunload = restableceEstadoSolicitud();

    function restableceEstadoSolicitud() {
        //location.href='/';
    };
});