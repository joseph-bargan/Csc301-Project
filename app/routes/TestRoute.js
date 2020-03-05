'use strict';
module.exports = function (app) {
    const index = require("../controllers/TestController");

    //Url routes

    app.get('/', index.render);

    app.post('/', index.redirect_posts);

    app.get('/posts', index.to_post);

    app.post('/posts', index.read_post);
        
};
