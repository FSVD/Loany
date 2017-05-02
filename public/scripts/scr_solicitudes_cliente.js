/* Formatea los datos de las solicitudes del cliente con bootgrid. */
//-------------------------------------------------------------------

$(document).ready(function () {

	$("#lista_solicitudes_cliente").bootgrid({
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
			"sl_comandos": function (column, row) {

				return "<button type=\"button\" id=\"btn_visualizacion_" + row.sl_id + "/:" + row.clientes_cl_id + "/:" + row.clientes_historial_cl_id_historial + "\"class=\"btn btn-xs btn-default btn_visualizacion\" data-row-id=\"" + row.pd_id + "\"><span class=\"glyphicon glyphicon-eye-open\"></span></button>";
			}
		}
	}).on("loaded.rs.jquery.bootgrid", function () {

		console.log("Lista solicitudes cliente cargada");

		// Al pulsar el boton de visualizar abre la ficha de la solicitud.
		$(this).find(".btn_visualizacion").on("click", function (e) {

			location.href = '/visualizar_solicitud/:' + $(this).attr("id").substring(18);

		});
	});
});