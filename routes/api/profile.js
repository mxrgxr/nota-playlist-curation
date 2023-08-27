const express = require('express');
const router = express.Router();
const checkAccessToken = require('../../config/checkAccessToken')
const profileCtrl = require('../../controllers/api/profile')

router.get('/', checkAccessToken, profileCtrl.getUserProfile);

module.exports = router;