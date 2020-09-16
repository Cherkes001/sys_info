const router = require('express').Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use('/system', require('./sysapi.js'));
router.use('/network', require('./networkapi.js'));

module.exports = router;
