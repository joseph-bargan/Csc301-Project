'use strict';

var mongoose = require('mongoose');
var test = mongoose.model('Test');

var path = require('path');

//Controller functions called on by the route script
exports.render = function (req, res) {

    res.render('SigninPage.ejs')
};

exports.sendpost = function (req, res) {

    /*
    const user = new test(req.body);
    user.save(function (err, u) {
        if (err)
            res.send(err);
        res.json(u);
    });
    */

    res.render('UI.ejs')
};