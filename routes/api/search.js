const express = require('express');
const router = express.Router();
const searchCtrl = require('../../controllers/api/search')
const checkAccessToken = require('../../config/checkAccessToken')

router.post('/', checkAccessToken, searchCtrl.searchArtists);

module.exports = router;