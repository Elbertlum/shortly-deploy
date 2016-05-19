var path = require('path');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


mongoose.connect('mongodb://127.0.0.1:27017/test');






module.exports = mongoose;