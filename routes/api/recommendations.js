const express = require('express');
const router = express.Router();
const recommendationsCtrl = require('../../controllers/api/recommendations')
const checkAccessToken = require('../../config/checkAccessToken')

router.post('/', checkAccessToken, recommendationsCtrl.getRecommendations);

module.exports = router;