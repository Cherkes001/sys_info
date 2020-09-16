const NetworkService = require('./../services/network-service.js');

class NetworkController {
  constructor() {
    this.networkService = new NetworkService();
  }

  async getIp(req, res) {
    const data = await this.networkService.getIp();

    res.send({
      success: true,
      data,
    });
  }
}

module.exports = NetworkController;
