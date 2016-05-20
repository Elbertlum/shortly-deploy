var db = require('../config');
var crypto = require('crypto');
var mongoose = require('mongoose');
var Promise = require('bluebird');

var urls = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  url: {type: String, unique: true},
  baseUrl: String,
  code: String,
  title: String,
  visits: Number,
  timeStamp: {type: Date, default: Date.now}
});

urls.pre('save', function(next) {
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  this.visits = this.visits !== undefined ? this.visits + 1 : 0;
  next();
});

var Link = mongoose.model('Link', urls);

module.exports = Link;