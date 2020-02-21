'use strict';
module.exports = function (app) {
    const index = require("../controllers/TestController");

    //Url routes

    app.get('/', index.render);

    app.post('/', index.sendpost);
        
};
