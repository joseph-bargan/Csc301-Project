'use strict';
/*
var mongoose = require('mongoose');
var test = mongoose.model('Test');
*/
var path = require('path');

//Controller functions called on by the route script
exports.render = function (req, res) {


    res.sendFile('./views/SigninPage.html', { root: __dirname});
};

exports.sendpost = function (req, res) {
    res.sendFile('./views/UI.html', { root: __dirname });
};