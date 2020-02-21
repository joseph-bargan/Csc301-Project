'use strict';
var express = require('express');
var port = process.env.PORT || 3000;
const app = express();
var path = require('path');

var mongoose = require('mongoose');

var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});


mongoose.Promise = global.Promise;

var routes = require('./app/routes/TestRoute'); //importing routes
routes(app); //telling app the use these routes

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.listen(port);

console.log('working');

