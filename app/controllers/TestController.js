'use strict';

var mongoose = require('mongoose');
var test = mongoose.model('Test');

var path = require('path');

//Controller functions called on by the route script
exports.render = function (req, res) {

    res.render('SigninPage.ejs')
    
};

exports.to_posts = function (req, res) {

    res.redirect('../posts')
};

exports.posts = function (req, res) {
    res.render('UI.ejs')
};

exports.sendpost = function (req, res) {

    
    const user = new test({ name: "testie" });
    user.save(function (err, u) {
        if (err)
            res.send(err);
        res.render('UI.ejs', { mongoose: mongoose });

        test.find(function (err, tt) {
	         console.log(tt); 
	 });

    });
    

    //res.render('UI.ejs')
};
