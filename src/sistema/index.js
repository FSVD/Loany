"use strict";

var express = require('express');
var multiViews = require('multi-views');

var app = express();
multiViews.setupMultiViews(app);

app.set('views',[__dirname + '/views']);
var viewDirs = app.get('views');
viewDirs.push(__dirname + '../_commons/views');

// router setup
var genre = require('./sistema.router');
genre.configure(app);

module.exports = app;