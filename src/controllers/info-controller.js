const InfoService = require('./../services/info-service.js');

class InfoController {
  constructor() {
    this.infoService = new InfoService();
  }

  async getOSInfo(req, res) {
    const data = await this.infoService.getOSInfo();

    res.send({
      success: true,
      data,
    });
  }

  async getCpuInfo(req, res) {
    const data = await this.infoService.getCpuInfo();

    res.send({
      success: true,
      data,
    });
  }

  async getGraphicsInfo(req, res) {
    const data = await this.infoService.getGraphicsInfo();

    res.send({
      success: true,
      data,
    });
  }

  async getCpuTemp(req, res) {
    const data = await this.infoService.getCpuTemp();

    res.send({
      success: true,
      data,
    });
  }

  async getMemInfo(req, res) {
    const data = await this.infoService.getMemInfo();

    res.send({
      success: true,
      data,
    });
  }

  async getTest(req, res) {
    const data = await this.infoService.getTest();

    res.send({
      success: true,
      data,
    });
  }
}

module.exports = InfoController;
