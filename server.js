'use strict';
var express = require('express');
var port = process.env.PORT || 3000;
const app = express();
var path = require('path');

var mongoose = require('mongoose');

//Configurations
app.set('views', './app/views');
app.set('view engine', 'ejs');

app.locals.mongoose = mongoose;

const configMongoose = require('./config/mongoose');
const db = configMongoose();


var routes = require('./app/routes/TestRoute'); //importing routes
routes(app); //telling app the use these routes




app.listen(port);
console.log('working');

