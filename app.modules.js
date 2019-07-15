"use strict";

var express = require('express');
var app = express();

// Including modules:
var index = require('./src/index');
var clientes = require('./src/clientes');
var grupos = require('./src/grupos');
var mora = require('./src/mora');
var prestamos = require('./src/prestamos');
var productos = require('./src/productos');
var sistema = require('./src/sistema');
var solicitudes = require('./src/solicitudes');

app.use(index);
app.use(clientes);
app.use(grupos);
app.use(mora)
app.use(prestamos);
app.use(productos);
app.use(sistema);
app.use(solicitudes)

module.exports = app;