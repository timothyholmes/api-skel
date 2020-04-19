
const Package = require('../../../package.json');

module.exports = function getVersion() {
  return Package.version;
};
