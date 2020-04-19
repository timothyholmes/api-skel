
const Package = require('../../../package.json');

module.exports = function getProjectVersion() {
  return Package.version;
};
