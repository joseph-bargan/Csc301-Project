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

const User = new schema({

    firstname: {
        type: String
    },

    lastname: {
        type: String,
    },

    email: String,
    password: String,
});

User.set('toJSON', {
    getters: true,
    virtuals: true
});

mongoose.model('User', User);
mongoose.model('Test', TestSchema);