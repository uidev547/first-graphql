var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    "firstName": String,
    "lastName": String,
    "userId": String,
    "password": String
});

module.exports = mongoose.model('user', UserSchema);