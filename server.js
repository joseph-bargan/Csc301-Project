'use strict';
var express = require('express');
var port = process.env.PORT || 3000;
const app = express();
var path = require('path');

var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";


app.get('/', function (req, res) {
    res.sendFile( path.join(__dirname + '/UI.html'));
});

app.post('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/UI.html'));
});


app.listen(port);


MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});

