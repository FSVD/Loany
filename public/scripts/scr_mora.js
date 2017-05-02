/* Envia los datos al servidor . */
//---------------------------------

$(document).ready(function () {
	$("#envia_formulario").click(function () {
		$('#formulario_mora').submit;
	})
});


/* Habilita los campos antes del envio del formulario a la pagina de modificacion. */
//-----------------------------------------------------------------------------------

$(document).ready(function () {
	$("#btn_modifica").click(function (e) {
		//alert("enviando formulario para modificacion");
		$("select").removeAttr('disabled');
		$("input").removeAttr('disabled');
	})
});