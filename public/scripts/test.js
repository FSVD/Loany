$(function () {

	var cargaCuotas = function () {

		$("#grid-selection").bootgrid("destroy");
		var grid = $("#grid-selection").bootgrid({
			ajax: true,
			ajaxSettings: {
				method: "GET",
				cache: false
			},
			requestHandler: function (request) {
				request.id_prestamo = 9;
				console.log(request);
				return request;
			},
			url: "/recuperar_cuotas",
			formatters: {
				"comandos": function (column, row) {
					return "<button type=\"button\" class=\"btn btn-xs btn-danger command-edit\" data-row-id=\"" + row.ct_numero + "\"><span class=\"glyphicon glyphicon-ok\"></span>&nbsp;&nbsp;Modifica</button>";
				}
			}
		}).on("loaded.rs.jquery.bootgrid", function () {
			/* Executes after data is loaded and rendered */
			grid.find(".command-edit").on("click", function (e) {
				alert("You pressed edit on row: " + $(this).data("row-id"));
			});
		});
	}

	cargaCuotas();


	//--------------------------------------------------------------

	/*	$("#grid-selection").bootgrid({
			ajax: true,
			url:"/recuperar_cuotas",
			ajaxSettings: {
				method: "GET",
				cache: false
			},
			requestHandler: function (request) {
				request.id_prestamo = 9;
				console.log(request);
				return request;
			},
			responseHandler: function (response) {
				console.log(response);
				setGrid();
				return response;
			}
		});

	var setGrid = function() {
		
		console.log("Define propiedades");
		
		$("#grid-selection").bootgrid({
			current: 1,
			rowCount: [12,24,36, -1],
			selection: true,
			multiSelect: true,
		}).on("selected.rs.jquery.bootgrid", function(e, rows) {
			var rowIds = [];
			for (var i = 0; i < rows.length; i++)
			{
				rowIds.push(rows[i].ct_numero);
			}
			//alert("Select: " + rowIds.join(","));
		}).on("deselected.rs.jquery.bootgrid", function(e, rows) {
			var rowIds = [];
			for (var i = 0; i < rows.length; i++)
			{
				rowIds.push(rows[i].ct_numero);
			}
			//alert("Deselect: " + rowIds.join(","));
		});
	};*/

	//--------------------------------------------------------------

	/*$("#grid-selection").bootgrid({
		//navigation: 0,
		//padding: 10, // No funciona
		//columnSelection: false,
		rowCount: [12,24,36, -1],
		selection: true,
		multiSelect: true,
		sorting: true,
		rowSelect: true,
		
		ajax: true,
		url:"/recuperar_cuotas",
		ajaxSettings: {
			method: "GET",
			cache: false
		},
		requestHandler: function (request) {
			request.id_prestamo = 9;
			console.log("Envio peticion");
			return request;
		},
		responseHandler: function (response) {
			console.log("Datos recibidos");
			return response;
		},
		
	}).on("selected.rs.jquery.bootgrid", function(e, rows) {
		var rowIds = [];
		for (var i = 0; i < rows.length; i++)
		{
			rowIds.push(rows[i].ct_numero);
		}
		//alert("Select: " + rowIds.join(","));
	}).on("deselected.rs.jquery.bootgrid", function(e, rows) {
		var rowIds = [];
		for (var i = 0; i < rows.length; i++)
		{
			rowIds.push(rows[i].ct_numero);
		}
		//alert("Deselect: " + rowIds.join(","));
	}).on("loaded.rs.jquery.bootgrid", function (e) {
		//console.log($("#grid-selection").bootgrid("getColumnSettings"));
		//console.log($("#grid-selection").bootgrid("getCurrentPage"));
		//console.log($("#grid-selection").bootgrid("getCurrentRows"));
		//console.log($("#grid-selection").bootgrid("getRowCount"));
		//console.log($("#grid-selection").bootgrid("getSearchPhrase"));
		//console.log($("#grid-selection").bootgrid("getSelectedRows"));
		//console.log($("#grid-selection").bootgrid("getSortDictionary"));
		//console.log($("#grid-selection").bootgrid("getTotalPageCount"));
		//console.log($("#grid-selection").bootgrid("getTotalRowCount"));
		
		//$("#grid-selection").bootgrid("select", [2,4]);
		

	}).on("load.rs.jquery.bootgrid", function (e)
		  {
		
		$("#grid-selection").bootgrid("remove", [1,3]);
		$("#grid-selection").bootgrid("clear");
	});*/
});