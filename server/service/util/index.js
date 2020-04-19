
class UtilService {
  constructor(server) {
    this.server = server;
  }
}

UtilService.getVersion = require('./getVersion');

module.exports = UtilService;
