var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./webpack.config');
var webpack = require('webpack');
var cors = require('cors');
var render = require('./tools/render');
var api = require('./tools/api');
var db = require('./tools/db');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin@ds129179.mlab.com:29179/rbogdanov', {useMongoClient: true}, function (error) {
});
mongoose.connection.on('connected', function () {
    console.log('connected to db');
});


var app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());


app.use(express.static(path.join(__dirname, '/public')));
app.use('/heroes', express.static(path.join(__dirname, '/public')));




app.get('*', function (req, res) {
    res.render('index');
});


module.exports = app;
