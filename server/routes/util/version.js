
const Package = require('../../../package.json');

module.exports = {
  method: 'GET',
  path: '/_version',
  async handler() {
    return { version: Package.version };
  },
};
