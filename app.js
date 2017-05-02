var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var accessPoints = require('./routes/access_points');

var app = express();

// Configuracion del motor de templating.

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// LLama el archivo que gestiona los puntos de acceso de la api.

app.use(accessPoints);

// Captura el codigo de estado 404 y redirige al gestor de errores.

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Gestor de errores

// Gestor de errores de desarrollo. (Reporta la traza de error generado)

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
	if (err.status == 404) {
    	res.render('error', {
		  titulo: "Algo ha ido mal",
		  subtitulo: "La pagina que estabas buscando no ha sido encontrada.",
    	  message: err.message,
    	  error: err
    	});
	} else {
		res.render('error', {
		  titulo: "Algo ha ido mal",
		  subtitulo: "Se ha verificado un error.",
    	  message: err.message,
    	  error: err
    	});
	}
  });
}

// Gestor de errores de produccion. (No reporta la traza de error generado)

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  if (err.status == 404) {
    	res.render('error', {
		  titulo: "Algo ha ido mal",
		  subtitulo: "La pagina que estabas buscando no ha sido encontrada.",
    	  message: err.message,
    	  error: {}
    	});
	} else {
		res.render('error', {
		  titulo: "Algo ha ido mal",
		  subtitulo: "Se ha verificado un error.",
    	  message: err.message,
    	  error: {}
    	});
	}
});

module.exports = app;
