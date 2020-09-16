const router = require('express').Router();
const InfoController = require('./../../controllers/info-controller.js');
const infoController = new InfoController();

router.get('/', async (req, res) => {
  return infoController.getHostname(req, res);
});

module.exports = router;
