const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users')
const checkAccessToken = require('../../config/checkAccessToken')

router.get('/', checkAccessToken, usersCtrl.getPlaylists);
router.post('/', checkAccessToken, usersCtrl.createPlaylist);
router.get('/:playlistId', checkAccessToken, usersCtrl.getPlaylistDetails);

module.exports = router;