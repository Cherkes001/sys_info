const router = require('express').Router();
const NetworkController = require('./../../controllers/network-controller.js');
const networkController = new NetworkController();

router.get('/', async (req, res) => {
  return networkController.getIp(req, res);
});
module.exports = router;
