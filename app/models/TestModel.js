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

mongoose.model('Test', TestSchema);