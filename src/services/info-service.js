const si = require('systeminformation');
class InfoService {
  constructor() {}

  async getOSInfo() {
    const data = si.osInfo();

    return data;
  }

  async getCpuInfo() {
    const data = await si.cpu();
    const {
      manufacturer,
      brand,
      speed: currentspeed,
      speedmin,
      speedmax,
      governor,
      cores,
      physicalCores,
    } = data;
    const result = {
      manufacturer,
      brand,
      currentspeed,
      speedmin,
      speedmax,
      governor,
      cores,
      physicalCores,
    };

    return result;
  }
  async getGraphicsInfo() {
    const data = await si.graphics();
    const { controllers, displays } = data;
    const result = {};
    return data;
  }
  async getCpuTemp() {
    const data = await si.cpuTemperature();

    return data;
  }

  async getMemInfo() {
    const data = await si.mem();
    const { total, free, used } = data;
    const result = {
      total: Math.round(total / 1e6),
      free: Math.round(free / 1e6),
      used: Math.round(used / 1e6),
    };

    return result;
  }

  async getTest() {
    const data = await si.inetLatency();
    return data;
  }
}

module.exports = InfoService;
