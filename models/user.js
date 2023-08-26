const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  uri: {
    type: String,
    required: true,
  },
});

const playlistSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  images: [
    {
      url: String,
      width: Number,
      height: Number,
    },
  ],
  name: {
    type: String,
    required: true,
  },
  tracks: [trackSchema], // Embed the Track schema
  uri: {
    type: String,
    required: true,
  },
  filters: {
    artists: [String],
    acousticness: {
      min: Number,
      max: Number,
    },
    danceability: {
      min: Number,
      max: Number,
    },
    energy: {
      min: Number,
      max: Number,
    },
    instrumentalness: {
      min: Number,
      max: Number,
    },
    tempo: {
      min: Number,
      max: Number,
    },
    valence: {
      min: Number,
      max: Number,
    },
  },
});

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
    accessToken: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
    tokenExpiration: {
      type: Number,
    },
    playlists: [playlistSchema]
  });

module.exports = mongoose.model('User', userSchema);