'use strict';

var mongoose = require('mongoose');
var test = mongoose.model('Test');

var path = require('path');

//Controller functions called on by the route script
exports.render = function (req, res) {

    res.render('SigninPage.ejs')
};

exports.redirect_posts = function (req, res) {

    /*
    const user = new test(req.body);
    user.save(function (err, u) {
        if (err)
            res.send(err);
        res.json(u);
    });
    */

    //TODO: Read (res.body) for login info

    res.redirect('/posts')
};

exports.to_post = function (req, res) {

    res.render('UI.ejs');
};

exports.read_post = function (req, res) {

    //TODO: Read (res.body) for post text

    res.render('UI.ejs');
};