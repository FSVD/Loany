"use strict";

var express = require('express');
var path = require('path');
var multiViews = require('multi-views');

var app = express();
multiViews.setupMultiViews(app);

app.set('views',[path.resolve(__dirname + '/views')]);
var viewDirs = app.get('views');
viewDirs.push(path.resolve(__dirname + '../_commons/views'));

// router setup
var routerProductos = require('./productos.router');
routerProductos.configure(app);

module.exports = app;