const express = require('express');
const router = express.Router();

//@route GET api/users/test
//@desc testing this users route
//@access public route
router.get('/test', (req, res) => res.json({msg: 'users'}));

module.exports = router;

