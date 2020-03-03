'use strict';

var mongoose = require('mongoose');
var schema = mongoose.Schema;

//Sample model-schema to be stored in databse
var TestSchema = new schema({

    name: {
        type: String,
        required: 'test name'
    },
});

var User = new schema({

    firstname: {
        String,
    },

    lastname: {
        String,
    },

    email: String,
    password: String,
});

mongoose.model('User', User);
mongoose.model('Test', TestSchema);