'use strict';
module.exports = function (app) {
    const index = require("../controllers/TestController");

    //Url routes

    app.get('/', index.render);

    app.post('/', index.to_posts);

    app.get('/posts', index.posts);

    app.post('/posts', index.sendpost);
};
