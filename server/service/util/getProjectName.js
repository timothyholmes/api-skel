
const Package = require('../../../package.json');

module.exports = function getProjectName() {
  return Package.name;
};
