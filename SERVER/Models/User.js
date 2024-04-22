const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: String,
  createdAt: String,
  type: String,
  location: String
});


module.exports = model('User', userSchema);