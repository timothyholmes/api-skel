
const Util = require('../../service/util');

module.exports = {
  method: 'GET',
  path: '/_version',
  async handler() {
    return Util.getVersion();
  },
};
