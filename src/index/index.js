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
var routerIndex = require('./index.router');
routerIndex.configure(app);

module.exports = app;