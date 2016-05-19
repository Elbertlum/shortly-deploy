var path = require('path');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('baseUrl', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });



exports.urls = new Schema({
  id: Schema.Types.ObjectId,
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number,
  timeStamp: {type: Date, default: Date.now}
});

exports.users = new Schema({
  id: Schema.Types.ObjectId,
  username: String,
  password: String,
  timeStamp: {type: Date, default: Date.now}
});


exports.mongoose = mongoose;