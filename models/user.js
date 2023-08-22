const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    spotifyId: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
    },
    email: {
      type: String,
    },
});

module.exports = mongoose.model('User', userSchema);