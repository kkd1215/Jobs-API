const _ = require('lodash');

const config = require('./config');
const path = require('path');

const rootPath = path.normalize(`${__dirname}/..`);

const env = process.env.NODE_ENV || 'development';

const commonConfig = {
  env,
  root: rootPath,
  SALT_WORK_FACTOR: 10,
  jwtPasswordResetExpiry: process.env.JWT_PASSWORD_RESET_EXPIRY || 30 * 60,
}

const exportConfig = _.merge(commonConfig, config);

module.exports = exportConfig;