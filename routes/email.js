let express = require('express');
let router = express.Router();
let email = require('../controllers/emailCon.js');

router.get('/',email.index);

module.exports = router;
