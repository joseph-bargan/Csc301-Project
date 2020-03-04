'use strict';

var mongoose = require('mongoose');
var test = mongoose.model('Test');
var User = mongoose.model('User');

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
    const user = new User(req.body);
    console.log(req.body);
    user.save();

    //res.json(user);
    res.redirect('/posts')
};

exports.to_post = function (req, res) {

    res.render('UI.ejs');
};

exports.read_post = function (req, res) {

    //TODO: Read (res.body) for post text
    var l = new test(req.body);
    console.log(l);

    res.json(l);


    //res.render('UI.ejs');
};