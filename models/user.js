const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  spotifyId: String,
  email: String,
  avatar: String,
  accessToken: String,
  refreshToken: String,
});

module.exports = mongoose.model('User', userSchema);