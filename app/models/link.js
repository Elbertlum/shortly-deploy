var db = require('../config');
var crypto = require('crypto');

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


var Link = db.mongoose.model('Link', db.urls);

// Link.methods.initialize = function() {
//   this.on('creating', function(model, attrs, options) {
//     var shasum = crypto.createHash('sha1');
//     shasum.update(model.get('url'));
//     model.set('code', shasum.digest('hex').slice(0, 5));
//   });
// };

// Link.methods.remove = function() {
//   Link.remove();
// };

module.exports = Link;