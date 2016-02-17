var mongoose = require('mongoose');
var assert = require('assert');

var dbConnect =  process.env.MONGOLAB_URI || 'mongodb://localhost/test';
mongoose.connect(dbConnect);

var db = mongoose.connection;
     
module.exports = db;