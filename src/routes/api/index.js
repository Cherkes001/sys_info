const router = require('express').Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use('/system', require('./sysapi.js'));

module.exports = router;
