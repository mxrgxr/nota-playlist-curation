const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users')
const checkAccessToken = require('../../config/checkAccessToken')

router.get('/', checkAccessToken, usersCtrl.getPlaylists);

module.exports = router;