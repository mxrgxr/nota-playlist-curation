const express = require('express');
const router = express.Router();
const User = require('../../models/user')

router.get('/', async (req, res) => {
    const accessToken = req.headers.authorization.split(' ')[1];
    async function fetchUser(accessToken) {
        const user = await User.findOne({ accessToken: accessToken });
        return user;
      }
    const userData = await fetchUser(accessToken);
    if (userData) {
      res.json(userData);
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
});

module.exports = router;