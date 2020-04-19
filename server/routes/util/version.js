
const Util = require('../../service/util');

module.exports = {
  method: 'GET',
  path: '/_version',
  options: {
    tags: ['api', 'meta'],
  },
  async handler() {
    return {
      name: Util.getProjectName(),
      version: Util.getProjectVersion(),
    };
  },
};
