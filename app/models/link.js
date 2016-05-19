var db = require('../config');
var crypto = require('crypto');
var mongoose = require('mongoose');
var Promise = require('bluebird');

// var Link = db.mongoose.model({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function() {
//     this.on('creating', function(model, attrs, options) {
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   },
//   remove: function (url) {

//   }
// });

var urls = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  url: {type: String, unique: true},
  baseUrl: String,
  code: String,
  title: String,
  visits: Number,
  timeStamp: {type: Date, default: Date.now}
});

urls.post('init', function(doc, next) {
  // console.log('doc is', doc);
  doc.shorten();
  next();
});

urls.methods.shorten = function() {
  // console.log('shortening');
  var shasum = crypto.createHash('sha1');
  // console.log(this.get('url'));
  shasum.update(this.get('url'));
  this.set('code', shasum.digest('hex').slice(0, 5));
  console.log('hashed code', this.get('code'));
  console.log('this', this);
};

// urls.methods.shorten = function () {
//   var cipher = Promise.promisify(crypto.createHash);
//   return cipher('sha1')
//     .then(function (thing) {
//       thing.update(this.get('url'));
//     })
//     .then(function (code) {
//       this.set('code', code);
//     });
// };

var Link = mongoose.model('Link', urls);

// var hash = function(url) {
//   var shasum = crypto.createHash('sha1');
//   shasum.update(url);
//   return shasum.digest('hex').slice(0, 5);
// };

// urls.post('create', function(doc) {
//   doc.code = hash(doc.url);
// });


// urls.methods.remove = function() {

// };


module.exports = Link;