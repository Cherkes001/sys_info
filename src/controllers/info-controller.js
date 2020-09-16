const InfoService = require('./../services/info-service.js');

class InfoController {
  constructor() {
    this.infoService = new InfoService();
  }

  async getHostname(req, res) {
    const data = await this.infoService.getHostname();

    res.send({
      success: true,
      data,
    });
  }
}

module.exports = InfoController;
