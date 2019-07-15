require('dotenv').config();

/* Crea la conexion con la base de datos de desarrollo. */
//--------------------------------------------------------

var mysql = require('mysql');
var db = mysql.createConnection({
	host: '127.0.0.1',
	user: process.env.DEVELOPMENT_DB_USER,
	password: process.env.DEVELOPMENT_DB_PASSWORD,
	database: process.env.DEVELOPMENT_DB_NAME,
	dateStrings: 'date', // Fuerza MySQL a devolver las fecha de tipo TIMESTAMP, DATETIME, DATE en formato string.
	timezone: "local"
});

db.connect(function (err) {
	if (err) {
		console.error('Error de conexion a la base de datos: ' + err.stack);
		return;
	}

	console.log('Conectado a la base de datos con el ID ' + db.threadId);
});

module.exports = db;