const router = require('express').Router();
const InfoController = require('./../../controllers/info-controller.js');
const infoController = new InfoController();

router.get('/os', async (req, res) => {
  return infoController.getOSInfo(req, res);
});
router.get('/cpu', async (req, res) => {
  return infoController.getCpuInfo(req, res);
});
router.get('/gpu', async (req, res) => {
  return infoController.getGraphicsInfo(req, res);
});
router.get('/temp', async (req, res) => {
  return infoController.getCpuTemp(req, res);
});
router.get('/mem', async (req, res) => {
  return infoController.getMemInfo(req, res);
});

module.exports = router;
