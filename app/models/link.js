var db = require('../config');
var crypto = require('crypto');
var mongoose = require('mongoose');

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
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number,
  timeStamp: {type: Date, default: Date.now}
});

urls.methods.initialize = function() {
  console.log('something');
  this.on('creating', function(model, attrs, options) {
    console.log('model is: ---------->>>>>> ', model);
    var shasum = crypto.createHash('sha1');
    shasum.update(model.get('url'));
    model.set('code', shasum.digest('hex').slice(0, 5));
  });
};

// urls.methods.remove = function() {

// };

var Link = mongoose.model('Link', urls);


module.exports = Link;