const express = require('express');
const router = express.Router();
const checkAccessToken = require('../../config/checkAccessToken')
const profileCtrl = require('../../controllers/api/profile')

router.get('/', checkAccessToken, profileCtrl.getUserProfile);
router.get('/top/tracks', checkAccessToken, profileCtrl.getUserTopTracks);
router.get('/top/artists', checkAccessToken, profileCtrl.getUserTopArtists);

module.exports = router;