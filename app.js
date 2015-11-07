var express = require('express');
var logger = require('morgan');
var path = require('path');
var api = require('./api');
var app = express();

app.use(logger('dev'));

// serving from public dir
app.use(express.static(path.join(__dirname, 'public')));

// loads api/index.js
app.use('/api', api);

module.exports = app;

