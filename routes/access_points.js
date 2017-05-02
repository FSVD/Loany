var express = require('express');
var app = express();

var inicio = require('./index');
var clientes = require('./clientes');
var solicitudes = require('./solicitudes');
var prestamos = require('./prestamos');
var productos = require('./productos');
var mora = require('./mora');
var grupos = require('./grupos');
var sistema = require('./sistema');

// API access points:
app.get('/', inicio);

app.get('/cargar_buscador_clientes', clientes);
app.get('/buscar_clientes', clientes);
app.get('/crear_cliente', clientes);
app.post('/guardar_cliente', clientes);
app.get('/modificar_cliente', clientes);
app.post('/guardar_cliente_modificado', clientes);
app.get('/visualizar_cliente/:id_cliente_datos_identificativos/:id_cliente_historial', clientes);
app.post('/verificar_cliente', clientes);
app.get('/eliminar_cliente/:id_cliente_datos_identificativos', clientes);
app.get('/visualizar_solicitudes_cliente/:id_cliente_datos_identificativos', clientes);

app.get('/cargar_buscador_solicitudes', solicitudes);
app.get('/buscar_solicitudes', solicitudes);
app.get('/crear_solicitud', solicitudes);
app.post('/guardar_solicitud', solicitudes);
app.get('/modificar_solicitud', solicitudes);
app.post('/guardar_solicitud_modificada', solicitudes);
app.get('/visualizar_solicitud/:id_solicitud/:id_cliente_datos_identificativos/:id_cliente_historial', solicitudes);
app.get('/calcular_cantidades', solicitudes);
app.get('/recuperar_cantidad_solicitada', solicitudes);
app.get('/recuperar_prestamo', solicitudes);
app.get('/eliminar_solicitud/:id_solicitud', solicitudes);

app.get('/cargar_buscador_prestamos', prestamos);
app.get('/buscar_prestamos', prestamos);
app.get('/crear_prestamo', prestamos);
app.post('/guardar_prestamo', prestamos);
app.get('/modificar_prestamo', prestamos);
app.post('/guardar_prestamo_modificado', prestamos);
app.get('/visualizar_prestamo/:id_prestamo/:id_producto/:id_solicitud/:id_cliente_datos_identificativos/:id_cliente_historial', prestamos);
app.get('/recuperar_datos_forma_pago', prestamos);
app.get('/eliminar_prestamo/:id_prestamo', prestamos);
app.get('/actualizar_estado_cuota', prestamos);

app.get('/administrar_productos', productos);
app.get('/crear_producto', productos);
app.post('/guardar_producto', productos);
app.get('/modificar_producto', productos);
app.post('/guardar_producto_modificado', productos);
app.get('/visualizar_producto/:id_producto', productos);
app.get('/eliminar_producto/:id_producto', productos);

app.get('/administrar_mora', mora);
app.get('/modificar_mora', mora);
app.post('/guardar_mora_modificada', mora);

app.get('/cargar_buscador_grupos', grupos);
app.get('/buscar_grupos', grupos);
app.get('/crear_grupo', grupos);
app.post('/guardar_grupo', grupos);
app.get('/modificar_grupo', grupos);
app.post('/guardar_grupo_modificado', grupos);
app.get('/visualizar_grupo/:id_grupo', grupos);
app.get('/eliminar_grupo/:id_grupo', grupos);

app.get('/informacion', sistema);


module.exports = app;