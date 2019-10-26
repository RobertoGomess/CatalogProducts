var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

//Conexão com o MongoDb 
require('./mongodb');

var app = express();

app.set('view engine','ejs');
app.set('views','./app/views');

app.use(express.static('./app/public'));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;