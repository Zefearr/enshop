const express = require('express');
const router = express.Router();

//@route GET api/posts/test
//@desc testing this shitty route
//@access public route

router.get('/test', (req, res) => res.json({msg: 'posts'}));

module.exports = router;