let express = require('express');
let router = express.Router();
let post = require('../controllers/post.js');

router.post('/',post.handler);
router.post('/addAreaStation',post.addAreaStation);


module.exports = router;
