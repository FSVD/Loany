/* Crea la conexion con la base de datos de desarrollo. */
//--------------------------------------------------------

var mysql = require('mysql');
var db = mysql.createConnection({
	host: '127.0.0.1',
	user: 'dev',
	password: 'dev',
	database: 'pluto',
	dateStrings: 'date', // Fuerza MySQL a devolver las fecha de tipo TIMESTAMP, DATETIME, DATE en formato string.
	timezone: "local"
});

db.connect(function (err) {
	if (err) {
		console.error('Error de conexion ala base de datos: ' + err.stack);
		return;
	}

	console.log('Conectado a la base de datos con el ID ' + db.threadId);
});

module.exports = db;