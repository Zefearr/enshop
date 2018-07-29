const express = require('express');
const router = express.Router();

//@route GET api/profile/test
//@desc testing this profile route
//@access public route

router.get('/test', (req, res) => res.json({msg: 'profile'}));

module.exports = router;