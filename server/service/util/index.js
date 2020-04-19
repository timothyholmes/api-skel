
class UtilService {
  constructor(server) {
    this.server = server;
  }
}

UtilService.getProjectVersion = require('./getProjectVersion');
UtilService.getProjectName = require('./getProjectName');

module.exports = UtilService;
