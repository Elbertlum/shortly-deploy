var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var mongoose = require('mongoose');

var users = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  timeStamp: {type: Date, default: Date.now}
});

users.post('init', function(doc, next) {
  doc.hashPassword();
  next();
});

users.methods.comparePassword = function(attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
    callback(isMatch);
  });
};

users.methods.hashPassword = function() {
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.get('password'), null, null).bind(this)
    .then(function(hash) {
      this.set('password', hash);
    });
};



var User = mongoose.model('User', users);
module.exports = User;
