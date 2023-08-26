const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersCtrl = require('../../controllers/api/users')

router.get('/', passport.authenticate('spotify', { session: false }), usersCtrl.getPlaylists);

module.exports = router;