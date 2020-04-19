
// @TODO expose the plugins to the server
// access logging, mysql, auth, healthcheck, debug logging

const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const UtilService = require('../service/util');

module.exports = [
  Inert,
  Vision,
  {
    plugin: HapiSwagger,
    options: {
      info: {
        title: UtilService.getProjectName(),
        version: UtilService.getProjectVersion(),
      },
    },
  },
];
