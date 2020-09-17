const si = require('systeminformation');
class NetworkService {
  constructor() {}

  async getIp() {
    const data = await si.networkInterfaces();
    return { ...data };
  }
}

module.exports = NetworkService;
